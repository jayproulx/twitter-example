define (
	[
		"jquery",
		"use!backbone",
		"control/AuthenticationController",
		"control/TimelineController",
		"view/LoginView",
		"view/HeroView",
		"view/TweetsView"
	],
	function ( $, Backbone, AuthenticationController, TimelineController, LoginView, HeroView, TweetsView )
	{

		return Backbone.View.extend ( {
			el: "#TwitterExampleApp",

			authenticationController: undefined,
			timelineController: undefined,

			loginView : undefined,
			heroView  : undefined,
			tweetsView: undefined,

			initialize: function ()
			{
				// Controllers

				this.authenticationController = new AuthenticationController();
				this.timelineController = new TimelineController();

				// Views

				this.loginView = new LoginView ();
				this.heroView = new HeroView ();
				this.tweetsView = new TweetsView ();
			}
		} );

	}
);