define ( ["jquery", "use!backbone", "model/user"],
	function ( $, Backbone )
	{
		return Backbone.View.extend ( {
			el: "#LoginView",

			events: {
				"click .signin": "login"
			},

			initialize: function ()
			{
			},

			login : function ()
			{
				alert ( "Logging in as " + this.handle () );
			},

			// store the data in the form field rather than keeping a separate string
			handle: function ( value )
			{
				if ( value != undefined )
				{
					this.$ ( ".handle" ).val ( value );
				}

				return this.$ ( ".handle" ).val ();
			}
		} );
	}
);