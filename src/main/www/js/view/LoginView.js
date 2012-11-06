define ( ["jquery", "use!backbone", "model/user"],
	function ( $, Backbone, user )
	{
		return Backbone.View.extend ( {
			el: "#LoginView",

			SIGN_IN: "Sign in",
			SIGN_OUT: "Sign out",

			events: {
				"click .signin" : "login",
				"click .signout": "logout"
			},

			initialize: function ()
			{
				user.bind ( "change", this.userUpdated, this );
			},

			userUpdated: function ()
			{
				if ( user.authenticated () )
				{
					this.$el.addClass ( "authenticated" );
					this.$ ( ".handle" ).attr ( "disabled", true )
					this.$ ( ".signin" ).text ( this.SIGN_OUT );
				}
				else
				{
					this.$el.removeClass ( "authenticated" );
					this.$ ( ".handle" ).attr ( "disabled", false )
					this.$ ( ".signin" ).text ( this.SIGN_IN );
				}
			},

			login: function ()
			{
				// short circuit if we're already authenticated, log the user out
				if ( this.$el.hasClass ( "authenticated" ) )
				{
					this.logout ();
					return;
				}

				// often this logic is much more complicated, and justifies the creation of an application event
				// to ensure that all authentication requests are handled the same way.
				user.set ( "screenName", this.handle () );
				user.fetch ();
			},

			logout: function ()
			{
				user.clear ();
				this.handle ( "" );
				user.trigger ( "change" );
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