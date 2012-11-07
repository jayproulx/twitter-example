define ( ["jquery", "use!backbone", "view/LoginView", "view/HeroView", "view/TweetsView"],
	function ( $, Backbone, LoginView, HeroView, TweetsView )
	{

		return Backbone.View.extend ( {
			el: "#TwitterExampleApp",

			loginView : undefined,
			heroView  : undefined,
			tweetsView: undefined,

			initialize: function ()
			{
				this.loginView = new LoginView ();
				this.heroView = new HeroView ();
				this.tweetsView = new TweetsView ();
			}
		} );

	}
);