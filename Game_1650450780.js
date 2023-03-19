/*



                           /\
                        /\/  \/\
                        \      /
                         \____/



*/


function Game(App) {
	/* Self reference */
		var self 	 = this;
		
	/* Shortcuts */
		var msg = App.i18n.xlat.msg;
		var msv = App.i18n.xlat.msv;
		var notifications = App.notifications;
	
	/* Global application instance */
		this.App	 = App; 

    /* Private properties */
        var shareButtonSelector = ".js-share-button";
        var showEmbedButtonSelector = ".js-embed-button";
        var showEmbedModalTemplateSelector = ".js-game-embed-code-modal-template .modal-content";
        var infoButtonsSelector = "#game-info-buttons";
		var walkthroughContainerSelector = "#walkthrough-container";
        var preloadWalkthroughButtonSelector = ".js-load-walkthrough";
        var fullscreenTriggerButtonSelector = ".js-game-trigger-fullscreen";
    	/* $ DOM objects (assigned when DOM is ready) */
    		var $shareButton,
				$embedButton,
            	$infoButtons,
				$preloadWalkthrough,
				$fullscreenButton;

	/* "Private" properties but still geting public visibility */
		this._init = false; // Has been initialized?
		this._ready = false; // Is it ready

    // Public properties
		this.id = null;
		this.uid = null;
        this.name = null;
        this.name_default = null;
		this.player_type = null;
		this.view_type = null; //
		this.width = null;
		this.height = null;
        this.current_view_type = null;
        this.is_playing = false;
        this.user_must_agree_terms = false;
        this.is_devel = false; /* Is the development version of the game? */
        // Current status of the game case
    		this.original_width = null;
    		this.original_height = null;
    		this.current_width = null;
    		this.current_height = null;
    		this.maximized = false;
    	// Scalable
    		this.is_scalable = false; /* Can the game be maximized/minimized? */
    		this.is_resizable = false; /* Can the game size be modified through the api? */
    		this.max_width = 1180; // Max width of a scaled game
    		this.max_height = 600; // ($(window).height() - 300) > 500 ? ($(window).height() - 300) : 500; // Max height of a scaled game, the browser height - 300px or 500px min
    		this.height_offset = 160; // Height that will be subtractede from the window height to calculate the max height available
    		this.height_offset_mini = 70; // Height that will be subtractede from the window height to calculate the max height available (little one)
		// Social features
			this.with_highscores = null;
			this.with_achievements = null;
        // Api data
	        this.api_id  = null;
	        this.api_user_id = null;
	        this.api_user_token = null;
	    // User data
	        this.is_favorite = false; // Has the user favourited the game?
	        this.is_like = false; // Has the user voted positive?
	        this.is_dislike = false; // Has the user voted negative?

    // Private properties
		var walkthroughLoaded = false;

    // Setters and getters

    // Events triggered
		this.eventListeners = {
				"player_resize": null,
				"nav_init": null,
				"aside_init": null,
				"aside_show": null,
				"aside_hide": null,
            	"ad_ready": null, /* Always triggered when the ad system is going to be initialized, even when the game doesn't have an ad (i.e: fullscreen) */
				"ad_completed": null, /* Always triggered, even when the game doesn't have an ad (i.e: fullscreen) */
                "ad_play": null, /* Only triggered when there is an ad */
            	"ad_disabled": null, /* Only triggered when preroll is disabled */
				"ad_request": null,
            	"ad_request_completed": null,
            	"ad_fallback": null,
				"ready": null,
				"start": null
		};

		this.logMsg = function(msg) {
			if (typeof console!==undefined) {
				console.log("GAMEJS: "+msg);
			}
		};

	// Event listeners
        /**
         * Register a closure function for an user event
         * i.e: registerEventListener("player_resize",function() {console.log('die');});
         */
        this.registerEventListener = function(eventId, triggerFunction) {
        	if (typeof triggerFunction=="function" && eventId!=null) {
        		if (this.eventListeners[eventId]==null) this.eventListeners[eventId]= [];
        		this.eventListeners[eventId].push(triggerFunction);
        		return true;
        	} else return false;
        };

        /**
         * Triggers an user event
         */
        this.triggerEvent = function(eventId, parameter) {
        	if (typeof parameter == "undefined") parameter = false;
        	if (this.eventListeners[eventId] instanceof Array) {
        		for(var i=0;i<this.eventListeners[eventId].length;i++) {
        			if ( this.eventListeners[eventId][i](parameter) == false ) return false; // stop bubbling
        		}
        	}
        	return true;
        };

	// Countdowns
	// Only available if Deadline.js lazy module has been loaded, if not, the countdowns won't work
		this.achievementCountdowns = new function() {
			var $target = null;
			var countdowns = this;
			// countdown object start ----------------
			var Countdown = function(achievementId, statId, deadlineTime, countdownTime, achievementUid, resetOnKaboom) {
				var countdown = this;
				var deadlineObserver;
				var $countdownTarget;
				var isKaboom = false;
				this.getAchievementId = function() {
					return achievementId;
				};
				this.getStatId = function() {
					return statId;
				};
				this.getUid = function() {
					return achievementUid;
				};
                this.getResetOnKaboom = function () {
                    return resetOnKaboom;
                };
				this.setCountdownTarget = function($cdTarget) {
					var deadlineObserver;
					$countdownTarget = $cdTarget;
					if (!isKaboom) {
						$countdownTarget.find(".js-countdown-default").hide();
						$countdownTarget.find(".js-countdown-deadline").show();
						$countdownTarget.find(".js-countdown-kaboom").hide();
						deadlineObserver = countdown.getDeadlineObserver();
						if (deadlineObserver && App.lazy.deadline) {
							deadlineObserver.triggerTick(); // Manually trigger a first tick instead of waiting for auto-ticks to avoid delays
						}
					} else {
						countdown.doKaboom();
					}
				};
				this.getDeadlineObserver = function() {
					return deadlineObserver;
				};
				this.doRemove = function() {
                    //console.log("Countdown "+achievementId+" remove");
					if (deadlineObserver && App.lazy.deadline) {
						MP.lazy.deadline.removeObserver(deadlineObserver);
						deadlineObserver.destroy();
					}
					$countdownTarget.remove();
				};
				this.doReset = function() {
					//console.log("Countdown "+achievementId+" reset");
					if ($countdownTarget) {
						$countdownTarget.find(".js-countdown-default").show();
						$countdownTarget.find(".js-countdown-deadline").hide();
						$countdownTarget.find(".js-countdown-kaboom").hide();
					}
				};
				this.doKaboom = function() {
                    //console.log("Countdown "+achievementId+" kaboom");
					isKaboom = true;
                    if (deadlineObserver && App.lazy.deadline) {
                        MP.lazy.deadline.removeObserver(deadlineObserver);
                        deadlineObserver.destroy();
                    }

					if ($countdownTarget) {
						$countdownTarget.find(".js-countdown-default").hide();
						$countdownTarget.find(".js-countdown-deadline").hide();
						$countdownTarget.find(".js-countdown-kaboom").show();
					}
					if (resetOnKaboom) {
						countdown.doReset();
                        //setTimeout(function() {
						countdowns.removeCountdown(achievementId);
                        //}, 250);
					}
                    return resetOnKaboom;
				};
				if (App.lazy.hasOwnProperty("deadline") && App.lazy.deadline && typeof DeadlineObserver !== "undefined") {
                    // Register observer
                    deadlineObserver = new DeadlineObserver("achievement-countdown-" + achievementId, deadlineTime);
                    deadlineObserver.onTick(function () {
                        var remainingParts;
                        if ($countdownTarget && $countdownTarget.size() > 0) {
                            remainingParts = deadlineObserver.getRemainingParts();
                            //console.log("Updating "+achievementId + " with " + deadlineObserver.getKaboomSeconds() + " seconds");
                            $countdownTarget.find(".js-hours").html(remainingParts.phours);
                            $countdownTarget.find(".js-mins").html(remainingParts.pminutes);
                            $countdownTarget.find(".js-secs").html(remainingParts.pseconds);
                        }
                    });
                    deadlineObserver.onKaboom(function () {
                        // Perform kaboom
                        countdown.doKaboom();
                    });
                    App.lazy.deadline.addObserver(deadlineObserver);
                }
			};
			// countdown object end ----------------
			var receivedCountdowns = [];
			var processCountdownsTimeout = null;
			var processCountdownsTargets;
			this.removeCountdown = function(achievementId) {
				for (var i=0;i<receivedCountdowns.length;i++) {
					if (receivedCountdowns[i].getAchievementId()==achievementId) {
						receivedCountdowns.splice(i,1);
						return;
					}
				}
			};
			this.removeAllCountdowns = function() {
				for (var i=0;i<receivedCountdowns.length;i++) {
					receivedCountdowns[i].doReset();
				}
				receivedCountdowns = [];
			};
			this.getCountdowns = function() {
				return receivedCountdowns;
			};
			this.getCountdown = function(countdownAchievementId) {
				for (var i=0;i<receivedCountdowns.length;i++) {
					if (receivedCountdowns[i].getAchievementId()==countdownAchievementId) {
						receivedCountdowns[i];
					}
				}
				return null;
			};
			this.startCountdown = function(achievementId, statId, deadlineTime, countdownTime, achievementUid, resetOnKaboom) {
				var countdown;
				for (var i=0;i<receivedCountdowns.length;i++) {
					if (receivedCountdowns[i].getAchievementId()==achievementId) {
						//console.log("Achievement "+achievementId+" already has a countdown running");
                        if (!receivedCountdowns[i].getResetOnKaboom()) {
                            return;	// Do not restart countdown
                        }
                        // STOP PREVIOUS COUNTDOWN
                        receivedCountdowns[i].doKaboom();
					}
				}
				//console.log("Achievement " + achievementId + " countdown started. Ends in " + countdownTime + " ms");
				countdown = new Countdown(achievementId, statId, deadlineTime, countdownTime, achievementUid, resetOnKaboom);
				receivedCountdowns.push(countdown);
				countdowns.processCountdownsTargets();
			};
            this.stopCountdown = function (achievementId, statId, deadlineTime, countdownTime, achievementUid, resetOnKaboom) {
                for (var i = 0; i < receivedCountdowns.length; i++) {
                    if (receivedCountdowns[i].getAchievementId() == achievementId) {
                        // STOP COUNTDOWN
                        receivedCountdowns[i].doKaboom();
                        //console.log("Achievement "+achievementId+" countdown stopped");
                        return;
                    }
                }
            };
			this.processCountdownsTargets = function($destObj) {
				if ($destObj!==undefined) {
					$target = $destObj;
				}
				if (processCountdownsTimeout) {
					clearTimeout(processCountdownsTimeout);
				}
				processCountdownsTimeout = setTimeout(function() {
					processCountdownsTargets();
				}, 500);
			};
			processCountdownsTargets = function() {
				// Process aside to check which achievement has started countdowns
				var $countdowns;
				if ($target && $target.size()>0) {
					//console.log("Processing countdowns");
					$countdowns = $target.find(".js-achievement.with-countdown");
					// Iterate countdowns present at $target and send them the new instances
					$countdowns.each(function(){
						var $item = $(this);
						var achievementId = $item.attr("data-achievement-id");
						//console.log($item.attr("data-achievement-id"));
						var found = false;
						for (var i=0;i<receivedCountdowns.length;i++) {
							if (receivedCountdowns[i].getAchievementId()==achievementId) {
								//console.log("Setting "+achievementId+" countdown target");
								receivedCountdowns[i].setCountdownTarget($item);
								found = true;
							}
						}
						if (!found) {
							$item.find(".js-countdown-default").show();
							$item.find(".js-countdown-deadline").hide();
							$item.find(".js-countdown-kaboom").hide();
						}
					});
				}
			};
		};

	// Navigation
	    this.navigation = new function() {
	    	var navigation = this;
	    	// Protected properties
	    		this._init = false;
	    		this._maxPlayerWidth = self.max_width;
	    		this._maxPlayerHeight = self.max_height;
	    		this._height_offset = self.height_offset;
	    		this._height_offset_mini = self.height_offset_mini;
	    	// Jquery dom objects
		        this.gameObj=null;
		        this.gameCaseObj=null;
		        this.gamePlayerWrapperObj=null;
		        this.gamePlayerObj=null;
		        this.gamePlayerSelector=null;
		        this.gameAsideObj=null;
		        this.gameInfoObj=null;
		        this.commentBoxObj=null;
		        this.headerNavObj=null;
		    // Miscellaneous
		        this.getGamePlayerObj = function () {
		        	if (this.gamePlayerObj == null) {
		        		if (typeof this.gamePlayerSelector!="undefined") {
	        				this.gamePlayerObj = $(this.gamePlayerSelector);
	        			}
		        	} else {
		        		if (this.gamePlayerObj instanceof Object && this.gamePlayerObj.size()==0) {
		        			if (typeof this.gamePlayerSelector!="undefined") {
		        				this.gamePlayerObj = $(this.gamePlayerSelector);
		        			}
		        		}
		        	}
		        	return this.gamePlayerObj;
		        };

		    // Initialization routines, navigation won't work properly if this isn't initialized
		    	this.init = function(options) {
		    		self.logMsg("navigation.init()");
		    		if (this._init) return; // Already initialized
		    		if (typeof options!="object") options={};
		    		// Set object properties based on received selectors
		    			if (typeof options.gameSelector!="undefined") this.gameObj = $(options.gameSelector);
		    			if (typeof options.gameCaseSelector!="undefined") this.gameCaseObj = $(options.gameCaseSelector);
		    			if (typeof options.gameAsideSelector!="undefined") this.gameAsideObj = $(options.gameAsideSelector);
		    			if (typeof options.gameInfoSelector!="undefined") this.gameInfoObj = $(options.gameInfoSelector);
		    			if (typeof options.commentBoxSelector!="undefined") this.commentBoxObj = $(options.commentBoxSelector);
		    			if (typeof options.gameHeaderNavSelector!="undefined") this.headerNavObj = $(options.gameHeaderNavSelector);
		    			if (typeof options.gamePlayerWrapperSelector!="undefined") this.gamePlayerWrapperObj = $(options.gamePlayerWrapperSelector);
		    			if (typeof options.gamePlayerSelector!="undefined") {
		    				this.gamePlayerObj = $(options.gamePlayerSelector);
		    				this.gamePlayerSelector = options.gamePlayerSelector; // If it's asynchronously created (for XDM), could not be able yet, so store selector as well
		    			}
		    		// Attach dynamic event listeners
		    			// Button events, onInits...
		    		// Other intialization routines
		    			this.aside.init(); // Propagate initialization to aside object
		    		// if game is fullscreen initialize the fullscreen mode
		    			if (self.view_type == 'fullscreen') this.fullscreen.init();
		    	    // Favorite
		    			this.favorite.init();
			    	// Vote (like/dislike)
			    		this.vote.init();
			    	// Stats
			    		this.stats.init();
		    		// Set initialization done flag
			    		this._init = true;
			    		self.triggerEvent("nav_init");
		    	};

		    // Stats --------------------------------------------------
		    	this.stats = new function() {
		    		var stats = this;
		    		this._init = false;
		    		this._loaded = false;
					this.init = function() {
		     			if (stats._init) return;
		     			navigation.gameInfoObj.find("#game-info-stats").bind("show",stats.load);
		     			navigation.gameInfoObj.find("#game-info-stats").bind("hide",stats.unload);
		     			stats._init = true;
		     		};
		     		this.load = function() {
		     			if (stats._loaded) return;
                        // console.log("Load");
		     			stats._loaded = true;
		     			var statsObj = navigation.gameInfoObj.find("#game-info-stats");
		     			statsObj.html(""); // Remove existing content
		     			statsObj.html("<div class='loading'></div>"); // @todo add a loader class instead of using text.
                        var urlAjaxHtml = MP.url.ajaxhtml+"game/"+self.uid+"/stats";
                        $.ajax({
        	                // the URL for the request
        	                url : urlAjaxHtml,
        	                success : function(response) {
        	                	statsObj.html(response);
        	                },
        	                error: function (response) {
        	                    //if (typeof console=="object") console.dir(response);
        	                    statsObj.html("Error :(");
        	                }
        	            });
		     		};
		     		this.unload = function() {
		     			//stats._loaded = false;
                        // console.log("Unload");
		     			//var statsObj = navigation.gameInfoObj.find("#game-info-stats");
		     			//statsObj.html(""); // Remove existing content
		     		};
		    	};

		    // Mark as favorite -----------------------------------------------
		    	this.favorite = new function() {
		     		var favorite = this;
		    		this._init = false;
			        this.favoriteTrueObjects=null;
			        this.favoriteFalseObjects=null;
			        this._spamDetector=null;
					this.init = function() {
		     			if(this._init) return;
		     			this.favoriteTrueObjects = $(navigation.gameInfoObj).find(".js-favorite-true");
		     			this.favoriteFalseObjects = $(navigation.gameInfoObj).find(".js-favorite-false");
		     			favorite._init = true;
		     			this.update();
		     		};
		     		this.update = function() {
		     			// Check current status
		     				if (self.is_favorite) {
		     					favorite.show();
		     				} else {
		     					favorite.hide();
		     				}
		     		};
		     		this.show = function() {
						this.favoriteFalseObjects.hide().css("opacity",0);
		     			this.favoriteTrueObjects.show().css("opacity",1);
		     		};
		     		this.hide = function() {
		     			this.favoriteTrueObjects.hide().css("opacity",0);
		     			this.favoriteFalseObjects.show().css("opacity",1);
		     		};
		     		this.mark = function(markOrUnmark) {
		     			if (!self.App.user.isAlive()) {
		     				self.App.user.showLogin();
		     				return;
		     			}
		     			// Spam detector, forbid the user to call the method multiple times
		     				favorite.favoriteTrueObjects.css({'pointer-events':'auto'}).animate({opacity:0.5, 'pointer-events':'none'}, 300);
		     				favorite.favoriteFalseObjects.css({'pointer-events':'auto'}).animate({opacity:0.5, 'pointer-events':'none'}, 300);
		     				if (favorite._spamDetector) return;
		     				favorite._spamDetector = setTimeout(function() {
		     					favorite._spamDetector=false;
				     			favorite.favoriteTrueObjects.css({'pointer-events':'auto'}).animate({opacity:1, 'pointer-events':'auto'}, 300);
				     			favorite.favoriteFalseObjects.css({'pointer-events':'auto'}).animate({opacity:1, 'pointer-events':'auto'}, 300);
		     				},2000);

		     			// Mark/unmark as favorite
		     				if (typeof markOrUnmark == "undefined") markOrUnmark = true; // Mark as favorite by default
			     			var urlAjax = MP.url.ajax+"game/actions/favorite/?id="+self.id+"&mark="+(markOrUnmark ? "1":"0");
			     			$.ajax({
				                // the URL for the request
				                url : urlAjax,
				                success : function(response) {
				                	self.is_favorite = markOrUnmark;
					     			favorite.update();
				                },
				                error: function (response) {
				                    alert("Unable to mark as favorite");
				                }
				            });

		     		};
		    	};

		    // Vote -----------------------------------------------
		    	this.vote = new function() {
		    		var vote = this;
		    		this._init = false;
			        this.voteTrueObjects=null;
			        this.voteFalseObjects=null;
			        this.votedTrueObjects=null;
			        this.votedFalseObjects=null;
			        this.votedTotalObjects=null;
			        this.voteDisclaimer=null;
					this.init = function() {
		     			if(this._init) return;
		     			vote.voteObjects = $(navigation.gameInfoObj).find("[class*=' sh-']");
		     			vote.voteTrueObjects = $(navigation.gameInfoObj).find(".js-vote-true");
		     			vote.voteFalseObjects = $(navigation.gameInfoObj).find(".js-vote-false");
		     			vote.votedTrueObjects = $(navigation.gameInfoObj).find(".js-voted-true");
		     			vote.votedFalseObjects = $(navigation.gameInfoObj).find(".js-voted-false");
		     			vote.votedTotalObjects = $(navigation.gameInfoObj).find(".js-total-votes");
		     			vote.voteDisclaimer = $(navigation.gameInfoObj).find(".js-vote-disclaimer");
		     			vote._init = true;
		     			this.update();
		     		};
		     		this.update = function() {
		     			// Check current status
		     			vote.voteTrueObjects.removeClass("active");
		     			vote.voteFalseObjects.removeClass("active");
		     			if (self.is_like) vote.voteTrueObjects.addClass("active");
		     			if (self.is_dislike) vote.voteFalseObjects.addClass("active");
		     			if (self.is_dislike || self.is_like) {
		     				vote.voteObjects.addClass("liked");
		     				vote.votedTrueObjects.show();
		     				vote.votedFalseObjects.hide();
		     			}
		     			if (!self.is_dislike && !self.is_like && vote.voteDisclaimer.length > 0) {
		     				vote.voteDisclaimer.fadeIn();
						} else {
		     				vote.voteDisclaimer.fadeOut();
						}
		     		};
		     		this.addVoteToCount = function() {
						var value;
						if (vote.votedTotalObjects.length > 0) {
							value = parseInt(vote.votedTotalObjects.data("total-votes-value"),10);
							if (value !== undefined && !isNaN(value)) {
								value+=1;
								vote.votedTotalObjects.attr("data-total-votes-value", value);
								vote.votedTotalObjects.html(MP.i18n.writeNumber(value));
							}
						}
					};
		     		this.vote = function(likeOrDislike) {
		     			/*if (!self.App.user.isAlive()) {
		     				self.App.user.showLogin();
		     				return;
		     			}*/
		     			if (self.is_like || self.is_dislike) return;
		     			// Mark/unmark as vote
		     				if (typeof likeOrDislike == "undefined") likeOrDislike = true; // Mark as vote by default
		     				if (likeOrDislike) self.is_like = true;
		     				else self.is_dislike = true;
		     				// Regular user // Anon User
		     				var voteUrl =  MP.url.ajax+"game/actions/vote/";
							if (!self.App.user.isAlive()) { voteUrl = MP.url.ajax+"game/actions/anon-vote/"; }
			     			var urlAjax = voteUrl + "?id="+self.id+"&vote="+(likeOrDislike ? "1":"0");

			     			$.ajax({
				                // the URL for the request
				                url : urlAjax,
				                success : function(response) {
					     			vote.update();
					     			vote.addVoteToCount();
				                },
				                error: function (response) {
				                    alert("Unable to vote");
				                }
				            });
		     		};
		    	};

			// Navigation for fullscreen mode ---------------------------------------
		     	this.fullscreen = new function() {
		     		var fullscreen = this;
		     		this._ready = false;
		     		this._init = false;
		     		this._timeoutInstance = false; // For the window resize event
		     		this._resEventTimeoutInstance = false; // For the player_resize event trigger
		     		this._commentsShown = false; // For comments toggle
					this.init = function() {
		     			if(this._init) return;
		     			// 1. Hide the game player object till the document is ready
		     				fullscreen.hideFrame();
		     			// 2. Show loader... @todo: groovy animation
		     				navigation.gameCaseObj.append('<div id="fullscreen-loading" style="padding:20px; color: #ddd; position:absolute; top:47%; left:47%">loading...</div>');
	     					fullscreen._resize();
		     			// 3. Schedule our ready method
		     				self.App.registerEventListener("ready",fullscreen.ready);
		     			fullscreen._init = true;
		     		};
		     		this.ready = function() {
		     			if(fullscreen._ready) return;
		     			fullscreen._ready = true;
		     			// 1. Remove the loader @todo: groovy animation
		     				navigation.gameCaseObj.find('#fullscreen-loading').fadeOut(900);
		     			// 2. Detect window resize and call reposition
		     			// 3. Show frame
		     				fullscreen.showFrame();
		     		};
		     		this.hideFrame = function() {
	     				navigation.gamePlayerWrapperObj.hide();
		     		};
		     		this.showFrame = function() {
		     			// 1. Show the game player
	     					navigation.gamePlayerWrapperObj.show();
		     			// 3. Perform calculations, update sizes & positions
		     				fullscreen._resize();
		     		};
		     		this.hideToolbar = function() {
	     				navigation.gameInfoObj.removeClass('active');
		     			fullscreen._resize();
		     		};
		     		this.showToolbar = function() {
     					navigation.gameInfoObj.addClass('active');
	     				fullscreen._resize();
		     		};
		     		this.toggleComments = function() {

		     			var fullscreenCommentsBoxWidth = navigation.commentBoxObj.width();
		     			var toggleCommentsSpeed = 250;

		     			if(fullscreen._commentsShown) {
		     				fullscreen._commentsShown = false;
		     				navigation.gameInfoObj.find("header .js-comments a").removeClass("active");
		     				navigation.commentBoxObj.animate({"left": -fullscreenCommentsBoxWidth -1}, toggleCommentsSpeed, function(){
		     					running = false;
		     				});
		     				navigation.gamePlayerWrapperObj.animate({"margin-left": 0},toggleCommentsSpeed);
		     			} else {
		     				fullscreen._commentsShown = true;
		     				navigation.gameInfoObj.find("header .js-comments a").addClass("active");
		     				navigation.commentBoxObj.animate({"left": 60}, toggleCommentsSpeed, function(){
		     					running = false;
		     				});
		     				navigation.gamePlayerWrapperObj.animate({"margin-left": fullscreenCommentsBoxWidth},toggleCommentsSpeed);
		     				App.navigation.categoriesNavigation.hide(); // Hiding categories
		     			}
		     		};
		     		this._resize = function(count, origWidth, origHeight) {
						//if(App.game.is_embed) return;
		     			if (navigation.headerNavObj == null) return;
		     			/*if (!fullscreen._ready) return;*/
		     			if (fullscreen._timeoutInstance) clearTimeout(fullscreen._timeoutInstance);
		     			// getting the window sizes
					        var winHeight  	= $(window).height();
					        var winWidth  	= $(window).width();
					        if (typeof origWidth=="undefined") origWidth = winWidth;
					        if (typeof origHeight=="undefined") origHeight = winHeight;
					        var newWidth = winWidth;
					        var newHeight = winHeight;
					    // getting navbar + toolbar height
					    	var navsHeight = navigation.headerNavObj.height() + navigation.gameInfoObj.height();
					    // Is docked? substract width with the dock width
					    	if (navigation.aside.docked) {
					    		newWidth -= navigation.gameAsideObj.width();
					    	}
					    // Substract height
					   		newHeight -= navsHeight;
					    // setting iframe size
					    	if (navigation.getGamePlayerObj()) {
						        navigation.getGamePlayerObj().width(newWidth);
						        navigation.getGamePlayerObj().height(newHeight);
					    	}
					    	navigation.gamePlayerWrapperObj.width(newWidth);
					    	navigation.gamePlayerWrapperObj.height(newHeight);
					    // Check aside for dock
					    	if (winWidth>(1100 + navigation.gameAsideObj.width())) {
					    		if (navigation.aside.doFullscreenDock()) return setTimeout(function() {fullscreen._resize(0, origWidth, origHeight);},150);
					    	} else {
					    		if (navigation.aside.doFullscreenUndock()) return setTimeout(function() {fullscreen._resize(0, origWidth, origHeight);},150);
					    	}
					    // Recalculate dimensions (1 more time to prevent size calculation bugs)
					        if (typeof count=="undefined") return setTimeout(function() {fullscreen._resize(0, origWidth, origHeight);},150); // resizing again to avoid browser gaps
					    // Set the current new size and trigger event
						        self.current_width=newWidth;
						        self.current_height=newHeight;
						        if (origWidth!=newWidth || origHeight!=newHeight) fullscreen._scheduleResizeEvent(); // Schedule a timeout event to avoid sending the same event multiple times (spam) (this event is captured by the API)
		     		};
		     		this._scheduleResizeEvent = function() {
		     			if (fullscreen._resEventTimeoutInstance) clearTimeout(fullscreen._resEventTimeoutInstance);
		     			fullscreen._resEventTimeoutInstance = setTimeout(function() {self.triggerEvent("player_resize");},35);
		     		};
		     		this._scheduleResize = function() {
		     			if (fullscreen._timeoutInstance) clearTimeout(fullscreen._timeoutInstance);
		     			fullscreen._timeoutInstance = setTimeout(fullscreen._resize,150);
		     		};

		     		// resizing on window resize
		     		$(window).resize(function() {
				        fullscreen._scheduleResize();
				    });

		     	};

			// User actions ---------------------------------------
		    	this.aside = new function() {
		    			var aside = this;
			    		this.active = false;
			    		this.currentTab = "achievements";
			    		this.docked = false;
			    		this.closeArea = null;
			    		this.init = function() {
							self.logMsg("navigation.aside.init()");
			    			if (!self.with_highscores && !self.with_achievements) return;
			    			// setting up close area
		                    	this.outsideClose();
		                    // aside init state
		                    if (self.current_view_type=="small") {
		                    	this.active=false; // mark as hidden to be able to show it
		                    	//setTimeout(this.show, 1000);
		                    } else {
		                    	this.active=true; // mark as visible to be able to hide it
		                    	this.hide();
		                    }
		                    // Other initialization routines
		                    	this.highscores.init();
		                    	this.achievements.init();
		                    	self.triggerEvent("aside_init");
			    		};
		                this.toggle = function() {
		                    if (this.active) {
		                    	this.hide();
		                    } else {
		                        this.show();
		                    }
		                };
		                this.hide = function() {
		                	if (!self.with_highscores && !self.with_achievements) return;
		                	if (!self.maximized && self.current_view_type=="small") return; // Cannot hide on this view type
		                	if (!this.active || this.docked) return;
	                        // It's active, hide it!
	                		navigation.gameAsideObj.removeClass("visible").hide();
	                        this.active=false;
	                        navigation.gameInfoObj.find(".js-game-aside-trigger a").removeClass("active");
	                        self.triggerEvent("aside_hide");
	                        if (self.current_view_type=="fullscreen") navigation.fullscreen._scheduleResize();
	                        // trigger hide game in older browsers
	                			//App.navigation.helpers.directVisibility.showVisibility();
	                		// Hide close area
	                			this.closeArea.hide();
		                };
		                this.closeIfOpened = function() {
			        		if (aside.active) aside.hide();
		                };
		                this.show = function() {
		                	self.logMsg("Show aside");
		                	if (!self.with_highscores && !self.with_achievements) return;
							navigation.gameAsideObj.addClass("visible").show();
							$("a#showAchievements").addClass("active");
		                	// Show current tab
		                		navigation.gameInfoObj.find(".js-game-aside-trigger a").addClass("active");
		                    // Check dock status (only for non-fullscreen versions)
	                			if (self.current_view_type == "small" && !navigation.player.isMaximized()) {
	                				navigation.gameAsideObj.addClass("docked").css({height:self.current_height}); // Adjust height @todo: check fullscreen
	                				this.docked = true;
	                			}
                			// Its already active?, nothing else to do
                				if (aside.active) return;
                			// Refresh tab
                				if (aside.currentTab=="highscores") navigation.gameAsideObj.find(".js-tab-highscores").click();
                				if (aside.currentTab=="achievements") navigation.gameAsideObj.find(".js-tab-achievements").click();
		                	// It's inactive, show it!
	                			navigation.gameAsideObj.addClass("visible");
	                			aside.active=true;
	                			// if (self.current_view_type!="small") {
	                			// 	navigation.gameInfoObj.find(".js-game-aside-trigger a").addClass("active");
	                			// }
	                		// Trigger event
	                			self.triggerEvent("aside_show");
	                			if (self.current_view_type=="fullscreen") navigation.fullscreen._scheduleResize();

		                    // Trigger hide game in older browsers
	                			/*if ((self.current_view_type == "small" && navigation.player.isMaximized()) || self.current_view_type == "large") {
		 				        	App.navigation.helpers.directVisibility.hideVisibility();
	                			} else {
	                				App.navigation.helpers.directVisibility.showVisibility();
	                			}*/
	                		// Show close area
	                			if(!this.docked) this.closeArea.show();

		                };
		                this.onViewTypeChange = function() {
			    			if (!self.with_highscores && !self.with_achievements) return;
		                	// Triggered when the game view type changes
		                        navigation.gameInfoObj.find("header .js-game-aside-trigger a").removeClass("active");
			                	if (self.current_view_type=="small" && !self.maximized) {
			                		this.show(); // Small, show it!
			                		// Trigger hide game in older browsers
			                	} else {
			                		navigation.gameAsideObj.removeClass('docked');
			                		aside.docked=false;
			                		this.hide(); // Large or maximized, so hide it
			                	}
	                        // Trigger hide game in older browsers
	                			//App.navigation.helpers.directVisibility.showVisibility();
	                		// Toggle close area
	                			if(!this.docked && aside.active) {
	                				this.closeArea.show();
	                			} else {
	                				this.closeArea.hide();
	                			};
		                };
		                this.doFullscreenDock = function() {
		                	if (self.current_view_type!="fullscreen") return false;
		                	if (!aside.active) aside.show(); // Not active, show it!
		                	if (!aside.docked) {
		                		navigation.gameAsideObj.addClass('docked');
		                		aside.docked=true;
		                		return true;
		                	}
		                	return false;
		                };
		                this.doFullscreenUndock = function() {
		                	if (!aside.active || self.current_view_type!="fullscreen") return false;
		                	if (aside.docked) {
		                		navigation.gameAsideObj.removeClass('docked');
		                		aside.docked=false;
		                		aside.hide();
		                		return true;
		                	}
		                	return false;
		                };
		                this.showHighscores = function() {
		                	// Swap the current tab and show it
		                	this.currentTab="highscores";
		                	this.show();
		                };
		                this.showAchievements = function() {
		                	// Swap the current tab and show it
		                	this.currentTab="achievements";
		                	this.show();
		                };
                    this.hideAchievements = function () {
                        // Swap the current tab and show it
                        this.currentTab = "achievements";
                        this.hide();
                    };
		                this.outsideClose = function() {
		                	// Binding close to body
						        $('body').on('click',aside.closeIfOpened);
						        this.closeArea = $('<div/>', {'id':'gameCloseArea','style':'position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;display:none'}).appendTo(navigation.gameCaseObj);
						    // preventing click propagation on the game aside
						        navigation.gameAsideObj.click(function(event){
						            event.stopPropagation();
						        });
		                };
		             // Highscores
	                    this.highscores = new function() {
	                        var highscores = this;
	                        this.currentBoard = false;
	                        this.currentPeriod = false;
	                        this.containerObj = null;
	                        this.boardTriggerObj = null;
	                        this.periodTriggerObj = null;
	                        this.onShow = function() {
	                        	//console.warn("show highscores");
	                        	// This events takes place when the tab was clicked/activated
	                        	aside.currentTab="highscores"; // Set this tab as active
                        		//highscores.update(); // Refresh information (or load it for the first time)
	                        	highscores.boardTriggerObj.trigger("change"); // We cannot simply call update() the update process is a little more complex (it's handled by the selector change)
	                        };
	                        this.init = function() {
	                        	this.containerObj = navigation.gameAsideObj.find("#tabHighscores");
	                        	// Event on tab click
		                        	//navigation.gameAsideObj.find(".js-tab-highscores").click(highscores.onShow); // Deprecated no uses the containerObj show event
	                        		this.containerObj.bind("show",highscores.onShow);
	                        		this.containerObj.on("click","[data-action=delete]",function(ev) {
                                        var ban = false;
                                        var $this = $(this);
	                        			ev.preventDefault();
	                        			ev.stopPropagation();
	                        			if ($this.hasClass("disabled")) return;
	                        			/* Delete this highscore */
	                        			if (!confirm("DELETE this highscore?\n---------\nUser: "+$this.data("useruid")+"\nScore: "+$this.data("score")+"\nPlaytime: "+$this.data("playtime")+" h\nUnlocked achievements: "+$this.data("achievements")+"\n--------"+"\nAll games playtime: "+$this.data("total-playtime")+" h\nUser level: "+$this.data("user-level")+"\nUser minicoins: "+$this.data("user-minicoins"))) return; /* Ask for confirm */
                                        ban = confirm("You can just delete the highscore or both delete & ban the user.\n\n---------\nAlso BAN the user?");
                                        $this.addClass("disabled");
	                        			var urlAjaxHtml = MP.url.ajax+"game/delete-highscore?hs="+$this.data("hs")+"&user="+$this.data("user")+"&score="+$this.data("score")+"&ban="+(ban ? "1":"0");
		                                $.ajax({
		                	                // the URL for the request
		                	                url : urlAjaxHtml,
		                	                success : function(response) {
		                	                    highscores.update();
		                	                },
		                	                error: function (response) {
		                	                    alert("Could not delete score");
		                	                }
		                	            });
	                        		});
	                            // Objects
                                	this.boardTriggerObj   = highscores.containerObj.find(".js-selector-hs-board select");
                                	this.periodTriggerObj   = highscores.containerObj.find(".js-selector-hs-period select");
                                // Board selector
                                	this.boardTriggerObj.change(function(evt) {
	                                    evt.preventDefault();
	                                    var uid = $(this).val();
	                                    //console.log("uid "+uid);
	                                    // Search within the board for current period, if it's not found, use the first one
	                                    	var periodDom = highscores.containerObj.find(".js-selector-hs-period-" + uid + " select option[value="+highscores.currentPeriod+"]");
	                                    	var periodDomFirst = highscores.containerObj.find(".js-selector-hs-period-" + uid + " select option:first");
	                                 		if (periodDom.size()==0) periodDom = periodDomFirst;
	                                 		newPeriod = periodDom.val();
	                                    // Setting init
	                                        highscores.set(uid,newPeriod);
	                                });
                                // Period selector
									this.periodTriggerObj.change(function(e) {
	                                    e.preventDefault();
	                                    highscores.set(highscores.currentBoard,$(this).val());
	                                });
	                             // Triggering select change to show first results
									// Deprecated, now the onShow action is triggered automatically when the tab is activated
                                	// if (aside.active && aside.currentTab=="highscores") highscores.selectTriggerObj.trigger("change"); // We cannot simply call update() the update process is a little more complex (it's handled by the selector change)
	                        };
	                        this.set = function(board, period) {
	                        	//console.log("set board: "+board+" period:"+period);
	                        	//if (board==this.currentBoard && period==this.currentPeriod) return;
	                        	if (period=="friends" && !self.App.user.isAlive()) return false; // Not logged in, no friends board
	                            if (period!=this.currentPeriod) {
	                            	this.currentPeriod = period;
	                            }
	                            if (board!=this.currentBoard) {
	                            	this.currentBoard = board;
	                            	if (this.boardTriggerObj.val()!=board) {
			                            // Change the board selector
			                            	this.boardTriggerObj.val(board);
			                            	this.boardTriggerObj.trigger("change");
			                            	return; // Return, it will come here after the change
	                            	}
	                            }
	                            this.update();
	                        };
	                        this.update = function () {
	                            // Board selected
	                                // Show/hide items
	                                    highscores.containerObj.find(".js-selector-hs-period").hide();
	                        			//highscores.containerObj.find(".js-selector-hs-period").css({opacity:0.2});
	                                    boardDom = highscores.containerObj.find(".js-selector-hs-period-" + highscores.currentBoard);
	                                    //boardDom.css({opacity:1});
	                                    boardDom.show();
	                            // Period selected
	                                    boardDom.find("select").val(highscores.currentPeriod);
	                                //boardDom.find(".js-tabs-nav li").removeClass("active");
	                                //boardDom.find(".js-tabs-nav li a[data-period=" + highscores.currentPeriod + "]").parent().addClass("active");
	                            // Ajax call
	                                var boardObj = highscores.containerObj.find(".highscores");
	                                // boardObj.html("currentBoard: " + highscores.currentBoard + "<br/>currentPeriod: " + highscores.currentPeriod);
	                                boardObj.html(""); // Remove existing content
	                                boardObj.html("<div class='loading'></div>"); // @todo add a loader class instead of using text.
	                                var urlAjaxHtml = MP.url.ajaxhtml+"game/"+self.uid+"/highscore/"+highscores.currentBoard+"/"+highscores.currentPeriod;
	                                $.ajax({
	                	                // the URL for the request
	                	                url : urlAjaxHtml,
	                	                success : function(response) {
	                	                    boardObj.html(response);
	                	                    App.navigation.helpers.scrollable(highscores.containerObj.find(".js-scrollable")); // Initialize the scrollable view
	                	                },
	                	                error: function (response) {
	                	                    //if (typeof console=="object") console.dir(response);
	                	                    boardObj.html("Error :(");
	                	                    //boardObj.html(response);
	                	                }
	                	            });
	                        };
	                        this.refreshIfVisible = function(board,period,is_main,is_custom) {
	                        	if (aside.active && aside.currentTab=="highscores") {
	                        		if (highscores.currentBoard==board) {
	                        			highscores.update();
	                        		} else {
	                        			if (is_main=="1") highscores.set(board,period); // Highscore is too important, they're open so force it!
	                        		}
	            				}
	                        };
	    		        };

	                // Achievements
	    		        this.achievements = new function() {
	    		        	var achievements = this;
	    		        	this.achievementItems = {};
	    		        	this.thropyItem = false;
	                        this.containerObj = null;
	                        this.onShow = function() {
	                        	//console.warn("show achievements");
	                        	// This events takes place when the tab was clicked/activated
	                        	aside.currentTab="achievements"; // Set this tab as active
                        		achievements.update(); // Refresh information (or load it for the first time)
	                        };
	                        this.clearAchievements = function() {
	                        	this.achievementItems = {};
	                        };
	                        this.addAchievement = function(achievementItem, unlocked) {
	                        	if (typeof achievementItem!="object") return;
	                        	if (typeof achievementItem.uid!="string") return;
	                        	achievementItem.unlocked = unlocked;
	                        	this.achievementItems[achievementItem.uid]=achievementItem;
	                        };
	                        this.clearThropy = function() {
	                        	this.thropyItem = false;
	                        };
	                        this.addThropy = function(thropyItem, unlocked) {
	                        	if (typeof achievementItem!="object") return;
	                        	if (typeof achievementItem.uid!="string") return;
	                        	thropyItem.unlocked = unlocked;
	                        	this.thropyItem=thropyItem;
	                        };
	                        this.init = function() {
	                        	this.containerObj = navigation.gameAsideObj.find("#tabAchievements");
	                        	// Click in tab will change the current one
		                        	//navigation.gameAsideObj.find(".js-tab-achievements").click(achievements.onShow); // Deprecated no uses the containerObj show event
	                        		this.containerObj.bind("show",achievements.onShow);
	                            // Triggering show first results
	                        		// Deprecated, now the onShow action is triggered automatically when the tab is activated
                                	//if (aside.active && aside.currentTab=="achievements") achievements.onShow();
	                        };
	                        this.update = function() {
	                        	// Ajax call
                                var destObj = achievements.containerObj;
                                destObj.html(""); // Remove existing content
                                destObj.html("<div class='loading'></div>"); // @todo add a loader class instead of using text.
                                var urlAjaxHtml = MP.url.ajaxhtml+"game/"+self.uid+"/achievements";
                                $.ajax({
                	                // the URL for the request
                	                url : urlAjaxHtml,
                	                success : function(response) {
                	                	destObj.html(response);
                	                	App.navigation.helpers.scrollable(achievements.containerObj.find(".js-scrollable")); // Initialize the scrollable view
										self.achievementCountdowns.processCountdownsTargets($(destObj)); // Send the dom instance
                	                },
                	                error: function (response) {
                	                    //if (typeof console=="object") console.dir(response);
                	                    destObj.html("Error :(");
                	                }
                	            });
	                        };
	                        this.refreshIfVisible = function() {
	                        	if (aside.active && aside.currentTab=="achievements") {
	            					this.update();
	            				}
	                        };
	    		        };

		    	};
		    	this.toComments = function() {
	                // scrolling to comments
	                MP.navigation.helpers.scrollTo(navigation.commentBoxObj, 600);
		        };
	            this.toSimilarGames = function() {
	                // scrolling to game info
	                MP.navigation.helpers.scrollTo(navigation.gameInfoObj, 600);
	                // activating similar games tab
	                $(navigation.gameInfoObj).find(".js-tab[data-target='#game-info-similar']").click();
	            };
	            this.toHighscoreGlobal = function(board_uid,timespan) {
	                this.aside.showHighscores();
	                this.aside.highscores.set(board_uid,timespan);
	            };
	            this.toHighscoreFriends = function(board_uid) {
	            	this.aside.showHighscores();
	            	this.aside.highscores.set(board_uid,"friends");
	            };
	            this.toAchievements = function() {
	            	this.aside.showAchievements();
	            };
                this.highlightLikeGame = function() {
                    if ($infoButtons.data("highlight")!==true && !self.is_like && !self.is_dislike) {
                        $infoButtons.data("highlight",true);
                        $infoButtons.find(".js-vote-true, .js-vote-false").addClass("highlight-btn");
                        setTimeout(function() {
                            $infoButtons.data("highlight",false);
                        },2000);
                        setTimeout(function() {
                            $infoButtons.find(".js-vote-true, .js-vote-false").removeClass("highlight-btn");
                        },4000);
                    }
                };
                this.highlightFavGame = function() {
                    if ($infoButtons.data("highlight")!==true && !self.is_favorite) {
                        $infoButtons.data("highlight",true);
                        $infoButtons.find(".js-favorite-false").addClass("highlight-btn");
                        setTimeout(function() {
                            $infoButtons.data("highlight",false);
                        },2000);
                        setTimeout(function() {
                            $infoButtons.find(".js-favorite-false").removeClass("highlight-btn");
                        },4000);
                    }
                };
                this.highlightAchievements = function() {
                    var isFullscreen = self.navigation.player.isFullscreen();
                    if ($infoButtons.data("highlight")!==true && !self.navigation.aside.active) {
                        $infoButtons.data("highlight",true);
                        $infoButtons.find(".js-game-aside-trigger").addClass("highlight-btn");
                        setTimeout(function() {
                            $infoButtons.data("highlight",false);
                        },2000);
                        setTimeout(function() {
                            $infoButtons.find(".js-game-aside-trigger").removeClass("highlight-btn");
                        },4000);
                    }
                };
	            this.toUserShare = function(userIds, customParameters, onClose) {
	            	if (typeof customMessage!="string") customMessage="";
	            	if (typeof userIds=="undefined" || !(userIds instanceof Array)) userIds = "";
	            	if (typeof customParameters!="object") customParameters={};
	            	if (typeof onClose!="function") onClose = function(success, userIds) {};
					self.App.share.gameInvite(userIds, customParameters, self.id, onClose);
	            };
	            this.toUserChallenge = function(userIds, allowAddUsers, allowMultiUser, customParameters, onClose) {
	            	if (typeof customMessage!="string") customMessage="";
	            	if (typeof userIds=="undefined" || !(userIds instanceof Array)) userIds = "";
	            	if (typeof allowMultiUser!="boolean") allowMultiUser = true;
	            	if (typeof allowAddUsers!="boolean") allowAddUsers = true;
	            	if (typeof customParameters!="object") customParameters={};
	            	if (typeof onClose!="function") onClose = function(success, userIds) {};
					self.App.share.gameChallenge(userIds, allowAddUsers, allowMultiUser, customParameters, self.id, onClose);
	            };
	            this.toControls = function() {}; /* @todo pending */
	            this.toDescription = function() {}; /* @todo pending */
	            this.toSagaGames = function() {}; /* @todo pending */
	            this.toCollectionGames = function() {}; /* @todo pending */
	            // Achievements
	    		this.carousel = new function() {
		     		this.setCarousel = function() {
						var t = null,
			                $infoElement        = $('.game-info'),
			                $similarElement     = $infoElement.find('#game-info-similar'),
			                $infoPane     		= $infoElement.find('.tab-hs-pane'),
			                $tabsWrapperElement = $infoElement.find('.tabs-hs-wrapper');
			            clearTimeout(t);
			            t = setTimeout(function(){
			                $similarElement.css({'overflow':'visible'})
			                .siblings('.js-tab-hs-pane').css({'visibility':'hidden'});
			                $tabsWrapperElement.css({'padding':'0 53px','margin-right':'-53px','margin-left':'-53px'});
			                $infoElement.css({'overflow':'visible'});
			                MP.navigation.showcases.carousel('.js-game-carousel', 6);
			                $infoPane.height($similarElement.height()-40);
			            }, 300);
		     		};
		     		this.unSetCarousel = function() {

		     			var $similarElement     = $('#game-info-similar').css({'overflow':'hidden'}).siblings('.js-tab-hs-pane').css({'visibility':'visible'}),
			                $tabsWrapperElement = $('.tabs-hs-wrapper').css({'padding':'0','margin-right':'0','margin-left':'0'}).
			                $infoElement        = $('.game-info').css({'overflow':'hidden'});
			            $('.game-info').find('.tab-hs-pane').height('auto');
		     		};
	     		};
	            this.player = new function() {
	                this.isResizable = function() {
	                    return self.is_resizable == 1;
	                };
	                this.isScalable = function() {
	                    return self.is_scalable == 1;
	                };
	                this.isMaximized = function() {
	                    return self.maximized;
	                };
                    this.isFullscreen = function() {
                        if (self.current_view_type==="fullscreen") {
                            return true;
                        }
                        return false;
                    }
			    	this.toggleSize = function() {
			    		if (self.navigation.player.isResizable()) return false; /* Size toggle not available for games that uses the resize API */
			    		if (!self.is_scalable || self.current_view_type=="fullscreen") return false;
	                    if (!self.maximized) {
	                    	this.maximize();
	                    } else {
	                        this.minimize();
	                    }
	                };
	                this.customSize = new function() {
		                this.set = function(width, height) {
		                	if (!self.navigation.player.isResizable())  return false; // Not allowed
		                	if (typeof width != "number" || !width instanceof Number) return false;
		                	if (typeof height != "number" || !width instanceof Number) return false;
		                	if (height>1400) height=1400; // Max custom height
		                	if (height<400) height=400; // Min custom height
		                	if (width<200) width=200;
		                	if (width==self.current_width && height==self.current_height) return false; // Same size!
		                	if (self.navigation.player.isMaximized()) self.navigation.player.minimize(); // Minimize!
		                	if (width>navigation._maxPlayerWidth) width=navigation._maxPlayerWidth;
		                	// Set player dimensions
			                	self.current_width = Math.floor(width);
			                	self.current_height = Math.floor(height);
			                	navigation.gameObj.addClass("custom-size");
				                // Adjust player view type
				                	if (width>680) {
				                		navigation.gameObj.addClass("large").removeClass("small");
				                		self.current_view_type = "large";
				                	} else {
				                		navigation.gameObj.addClass("small").removeClass("large");
				                		self.current_view_type = "small";
				                	}
				                	if (typeof navigation.aside.onViewTypeChange=="function") navigation.aside.onViewTypeChange(); // Notify the aside module the view has changed
				                // Player dimensions
				                	navigation.getGamePlayerObj().css({"width":self.current_width, "height":self.current_height});
			                // Notify event
			                	self.triggerEvent("player_resize");
		                };
		                this.reset = function() {
		                	if (!self.is_resizable) return false; // Not allowed
		                	this.set(Number(self.width), Number(self.height));
		                	navigation.gameObj.removeClass("custom-size");
		                };
	                };
	                this.maximize = function() {
	                	if (self.navigation.player.isResizable()) return false; /* Size toggle not available for games that uses the resize API */
	                	if (self.maximized || self.current_view_type=="fullscreen") return false;
                		// Set to large
                		//self.current_view_type = "large";

                		// Getting original game size
	                		self.original_width 	= navigation.getGamePlayerObj().width();
	                    	self.original_height 	= navigation.getGamePlayerObj().height();

                		// Resize player to the widest size available and scale height.
                			var winHeight  	= $(window).height();
                			var mpw = navigation._maxPlayerWidth;

                		// case window height is larger than game height + navbar height
                			if ((self.original_height+navigation._height_offset_mini) <= winHeight) {
								var mph = winHeight - navigation._height_offset_mini;
            				}
            			// else original game size remains but aside is also hidden
            				else {
            					var mph = self.original_height;
            				};

                			// Determine new width & height
	                			var aspectRatio = self.width/self.height;
	                			var w = Math.floor(mpw);
	                			var h = Math.floor(mpw / aspectRatio);
	                			if (h>mph) {
	                				// Too high, set to maximum height and calculate width by aplying the same aspect ratio
	                				h = Math.floor(mph);
	                				w = Math.floor(mph * aspectRatio);
	                			};
	                			// if (h<self.height) return; // The maximized game is smaller than the original!, cancel the
	                		// The maximization will now be performed
	                			self.maximized = true;
                				navigation.gameObj.addClass("maximized");
                				if (typeof navigation.aside.onViewTypeChange=="function") navigation.aside.onViewTypeChange(); // Notify the aside module the view has changed

                				navigation.getGamePlayerObj().css({"width":w, "height":h});
	                    			self.current_width = w;
	                    			self.current_height = h;

                    		// Scrolling to focus the game
                    			MP.navigation.helpers.scrollTo('#game', 600, null, {'urlTarget':false});
            			// Event
            				self.triggerEvent("player_resize");
            				navigation.gameInfoObj.find(".js-game-maximize-trigger a").addClass("active");
            			// trigger hide game in older browsers on user card display
            				// $('#user-widget-card').bind('click', this.userCardVisibility);
            				return true;
	                };
	                this.minimize = function() {
	                	if (self.navigation.player.isResizable()) return false; /* Size toggle not available for games that uses the resize API */
	                	if (!self.maximized || self.current_view_type=="fullscreen") return false;
                		navigation.gameObj.removeClass("maximized");
                		self.maximized = false;
                		// Resize player
							// navigation.gameAsideObj.animate({"width":"300px"}, 200);
                			// navigation.getGamePlayerObj().animate({"width":self.width, "height":self.height}, 200);
                			navigation.getGamePlayerObj().css({"width":self.width, "height":self.height});
                			self.current_width = self.width;
                    		self.current_height = self.height;
                    		// Scrolling to focus the game
                    			MP.navigation.helpers.scrollTo('#game', 600, null, {'urlTarget':false});
                    	// Notify the aside module
                        	if (typeof navigation.aside.onViewTypeChange=="function") navigation.aside.onViewTypeChange();
                		// Event
            				self.triggerEvent("player_resize");
            				navigation.gameInfoObj.find(".js-game-maximize-trigger a").removeClass("active");
            			// trigger hide game in older browsers on user card display
            				//$('#user-widget-card').unbind('click', this.userCardVisibility);
            				return true;
	                };
	                this.getCurrentSize = function() {
	                	return {
	                		width: self.current_width,
	                		height:self.current_height
	                	};
	                };
	                this.getSize = function() {
	                	return {
	                		width: self.width,
	                		height: self.height
	                	};
	                };
	                this.getCurrentViewType = function() {
	                    return self.current_view_type;
	                };
	                this.getViewType = function() {
	                    return self.view_type;
	                };
		     		this.userCardVisibility = function() {
		                /*if ($(this).hasClass('active')) {
		                    App.navigation.helpers.directVisibility.hideVisibility();
		                } else {
		                    App.navigation.helpers.directVisibility.showVisibility();
		                }*/
		     		};
					this.setViewportScale = function(scale) {
						self.notImplemented("navigation.player.setViewportScale");
						return false;
					};

					this.fullscreen = function() {
						if (document.fullscreenEnabled ||
							document.webkitFullscreenEnabled ||
							document.mozFullScreenEnabled ||
							document.msFullscreenEnabled) {

							// which element will be fullscreen
							var fullscreenTarget = document.querySelector('#game-player');
							// Do fullscreen
							if (fullscreenTarget.requestFullscreen) {
								fullscreenTarget.requestFullscreen();
							} else if (fullscreenTarget.webkitRequestFullscreen) {
								fullscreenTarget.webkitRequestFullscreen();
							} else if (fullscreenTarget.mozRequestFullScreen) {
								fullscreenTarget.mozRequestFullScreen();
							} else if (fullscreenTarget.msRequestFullscreen) {
								fullscreenTarget.msRequestFullscreen();
							}
						}
					};
	            };
	    };

    // Readiness / current state
	    this.init = function() {
			self.logMsg("init()");
       		if (self._init) return; /* Already initialized */
       		self.App.registerEventListener("ready",self.ready); /* Register an event listener to the Document Ready event */
       		/* Notify submodules that the module has been initialized */
       		self._init = true;
       };
	   this.loadWalkthrough = function() {
	   		if (walkthroughLoaded) {
               return;
           }
           if (!self.navigation.player.isFullscreen() && !self.is_devel) {
               walkthroughLoaded = true;
			   /* ------ VIDEO GUIDE INITIALIZATION: TUBIA ----- */
			   window["TUBIA_OPTIONS"] = {
			   	   //debug: true,
                   container: "veediInit",
                   gameId: self.id,
                   publisherId: "02e74f10e0327ad868d138f2b4fdd6f0",
                   width: "780px",
                   height: "480px",
                   title: self.name_default,
                   langCode: self.App.i18n.locale_name.toLowerCase().split("_").join("-"),
                   autoplay: "no",
				   onFound: function (data) {
			   	   	   $(walkthroughContainerSelector).show();
                       //console.log(data);
                       //$(".js-tab-videoguide").parent().show();
                       //$("#game-info-videoguide .loader-spinner").remove();
					   $("#veediInit .video-guide-bg").fadeOut();
                       $preloadWalkthrough.remove();
                   },
                   onError: function (data) {
                       //console.log(data);
                       // Fallback
					   /* ------ VIDEO GUIDE INITIALIZATION: VEEDI ----- */
                       // var _v,settings = {
                       //     game : self.name_default,
                       //     publisherId : 74653667,
                       //     width : 780,
                       //     lang :  self.App.i18n.locale_lang,
                       //     gametitle  :  self.name_default,
                       //     onVideoFound :  function() {
                       //         if (_v) {
                       //             //$(".js-tab-videoguide").parent().show();
                       //             //$("#game-info-videoguide .loader-spinner").remove();
						// 		   $preloadWalkthrough.remove();
						// 		   $("#veediInit .video-guide-bg").remove();
                       //             _v.mute();
                       //         }
                       //     }
                       // };
                       // if (self.App.i18n.country=="ES") settings.customDomain = "MiniES";
                       // (function(settings)  {
                       //     var vScript = document.createElement('script');
                       //     vScript.type = 'text/javascript'; vScript.async = true;
                       //     vScript.src = '//www.veedi.com/player/embed/veediEmbed.js';
                       //     vScript.onload = function(){
                       //         _v = new VeediEmbed(settings);
                       //     };
                       //     var veedi = document.getElementById('veediInit');
                       //     if (veedi !== null && veedi !== undefined) {
                       //         veedi.parentNode.insertBefore(vScript, veedi);
                       //     }
                       // })(settings);
                   }
               };
			   (function (d, s, id) {
				   var js, fjs = d.getElementsByTagName(s)[0];
				   if (d.getElementById(id)) return;
				   js = d.createElement(s);
				   js.id = id;
				   js.src = 'https://player.tubia.com/libs/gd/gd.js';
				   fjs.parentNode.insertBefore(js, fjs);
			   }(document, 'script', 'tubia-playerjs'));
               /*(function(i,s,o,g,r,a,m){
                   i['FamobiWalk']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)};i[r].l=1*new
                           Date();a=s.createElement(o);m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m
                       .parentNode.insertBefore(a, m);

               })(window, document, 'script', '//cdn.tubia.com/player/libs/gd/gd.js', 'gdPlayer');
               gdPlayer(settings); */
           }
       };


	   var showEmbedCodeModal = () => {
	   		var $embedModalContent = $(showEmbedModalTemplateSelector);
		   	$embedModalContent.length > 0  && App.navigation.modals.htmlModal($embedModalContent.clone(), function(){}, function(){},"modal-standard")
	   };

	   this.attachPrerollEvents = function($playerWrapper) {
			var $gameCase = $playerWrapper.parents("#game-case");
			self.registerEventListener("ad_disabled", function() {});
			self.registerEventListener("ad_ready", function() {
				$("#maximizeGame").addClass("disabled");
				$("#showAchievements").addClass("disabled");
				//$("#game-aside").hide();
				$playerWrapper.find(".iframe-wrapper").hide();
				//$playerWrapper.find("#game-player").css("opacity",0);
				// Lock mobile disclaimer if present
				if ($("#gamePromoBanner").length > 0) {
					$("#gamePromoBanner").addClass("lock-show");
				}
			});
			self.registerEventListener("ad_dispatch", function(flags) {
				/*
				 	The dispatch loop has started
				 	flag.adBlockPresent would be true if adblock is installed
				*/
			});
			self.registerEventListener("ad_request", function(workerType) {
                if (workerType==="adsenseAd4Games") {
                	// adsense 4 games, doesn't trigger the ad_play event, treat it as it was playing an ad to make the ad dom visible
					//$playerWrapper.addClass("w-ad-play");
                }
                $playerWrapper.addClass("w-ad-"+workerType);
			});
            self.registerEventListener("ad_request_completed", function(workerType) {
				$playerWrapper.removeClass("w-ad-play");
                $playerWrapper.removeClass("w-ad-"+workerType);
			});
			self.registerEventListener("ad_fallback", function(workerType) {});
			/* Super simple first run attached to the ad completion event (always triggered, even with no ad) */
			self.registerEventListener("ad_play",function(workerType, workerParam){
				if ($playerWrapper && $playerWrapper.length>0) {
					$playerWrapper.addClass("w-ad");
				}
                $playerWrapper.addClass("w-ad-play");
				if (self.navigation.player.isFullscreen()) {
					/* Show aside */
					/*if (self.with_achievements || self.with_highscores) {
						$("#game-aside").show();
					}*/
					self.navigation.fullscreen._resize();
				}
			});
            self.registerEventListener("all_ads_failed",function(flags){
            	/* All ads have failed, none was shown, an ad_completed will be thrown later, so we don't need to do anything */
			});
			self.registerEventListener("ad_completed",function(flags){
				self.logMsg("ad_completed()");
				/*
					Cleanup: All ads have failed or an ad has been shown
					flags.adPlayed would be true if an ad was played.
					flag.adBlockPresent would be true if adblock is installed
				*/
				$("#maximizeGame").removeClass("disabled");
				$("#showAchievements").removeClass("disabled");
				var $gameAside = $("#game-aside");
				var $game = $("#game");
				if( !$gameAside.hasClass("js-hidden-highscores") && !$game.hasClass("large") && !$game.hasClass("maximized")) {
					//debugger;
					if (self.navigation._init) {
						self.navigation.aside.show();
					} else {
						self.registerEventListener("nav_init", function () {
							self.navigation.aside.show();
							// if( !$gameAside.hasClass("js-hidden-highscores") && !$game.hasClass("large") && !$game.hasClass("maximized")) {
							// 	$gameAside.fadeIn(800).addClass("visible");
							// 	$("a#showAchievements").addClass("active");
							// }
						});
					}
				}
				$playerWrapper.find(".iframe-wrapper").show();
				//$playerWrapper.find("#game-player").css("opacity",1);
				// UnLock mobile disclaimer if present
				if ($("#gamePromoBanner").length > 0) {
					$("#gamePromoBanner").removeClass("lock-show");
				}
				if ($playerWrapper && $playerWrapper.length>0) {
					$playerWrapper.removeClass("w-ad").removeClass (function (index, className) {
						return (className.match (/(^|\s)w-ad\S+/g) || []).join(' ');
					});
					$playerWrapper.removeAttr("height").removeAttr("width");
					if ($gameCase.length>0) { $gameCase.addClass("preroll-completed"); }
				}
				if (self.with_achievements || self.with_highscores) {
					// Highlight achievements button
					setTimeout(function() {
						self.navigation.highlightAchievements();
					}, self.navigation.player.isFullscreen() ? 5000 : 2000); /* More delay for fullscreen games */
				}
				if (self.navigation.player.isFullscreen()) {
					// Force first resize window
					self.navigation.fullscreen._resize();
					setTimeout(function() {
						self.navigation.fullscreen._resize();
					},3000);
				}
				setTimeout(function() {
					self.loadWalkthrough();
				}, 1000); // Reduced to 1 sec

				if ($fullscreenButton.length > 0) {
					$fullscreenButton.show().css("opacity", 1);
					$fullscreenButton.click(self.navigation.player.fullscreen);
				}

			});
		};

       this.ready = function() {
		    self.logMsg("ready()");
			var $playerWrapper = $("#game-player-wrapper");
			if (self._ready) return; /* It's already ready! */
			/* Notify submodules that we're ready */
				self._ready = true;
			/* Set selector instances */
				$shareButton = $(shareButtonSelector);
				$embedButton = $(showEmbedButtonSelector);
                $infoButtons = $(infoButtonsSelector);
                $preloadWalkthrough = $(preloadWalkthroughButtonSelector);
		   		$fullscreenButton = $(fullscreenTriggerButtonSelector);
			/* Events */
		   		$shareButton.length > 0 &&  $shareButton.on("click",function() {
					self.App.share.gameInvite([],{},$shareButton.data("id"));
				});
		   		$embedButton.length > 0 && $embedButton.on("click",function() {
					showEmbedCodeModal(this);
				});

				if ($preloadWalkthrough.length > 0) {
                    $preloadWalkthrough.on("click",function() {
                        if ($preloadWalkthrough.hasClass("disabled")) { return false; }
                    	self.loadWalkthrough();
                        $preloadWalkthrough.addClass("disabled");
                    });
				}

            /* Super simple first run attached to the ad completion event (always triggered, even with no ad) */
		   		self.attachPrerollEvents($playerWrapper);

           // App.navigation.loadDeferredImages("similarGamesSelector", "click", "similarGamesList");
           App.navigation.loadDeferredImages("similarGamesSelector", "similarGamesList");

           self.triggerEvent("ready");
       };
       this.init();
       
}
