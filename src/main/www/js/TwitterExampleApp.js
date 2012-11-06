define ( ["jquery", "use!backbone", "view/LoginView", "view/HeroView"],
	function ( $, Backbone, LoginView, HeroView )
	{

		return Backbone.View.extend ( {
			el: "#TwitterExampleApp",

			loginView: undefined,
			heroView : undefined,

			initialize: function ()
			{
				this.loginView = new LoginView ();
				this.heroView = new HeroView ();
			}
		} );

	}
);