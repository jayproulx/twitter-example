define (
	[
		"jquery",
		"use!backbone",
		"control/AuthenticationController",
		"view/LoginView",
		"view/HeroView",
		"view/TweetsView"
	],
	function ( $, Backbone, AuthenticationController, LoginView, HeroView, TweetsView )
	{

		return Backbone.View.extend ( {
			el: "#TwitterExampleApp",

			authenticationController: undefined,

			loginView : undefined,
			heroView  : undefined,
			tweetsView: undefined,

			initialize: function ()
			{
				// Controllers

				this.authenticationController = new AuthenticationController();

				// Views

				this.loginView = new LoginView ();
				this.heroView = new HeroView ();
				this.tweetsView = new TweetsView ();
			}
		} );

	}
);