define ( ["jquery", "use!backbone", "view/LoginView"],
	function ( $, Backbone, LoginView )
	{

		return Backbone.View.extend({
			el: "#TwitterExampleApp",

			loginView: undefined,

			initialize: function()
			{
				this.loginView = new LoginView();
			}
		});

	}
);