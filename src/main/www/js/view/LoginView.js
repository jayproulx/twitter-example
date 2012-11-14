define ( ["jquery", "use!backbone", "control/AuthenticationEvent", "model/dispatcher", "model/user"],
	function ( $, Backbone, AuthenticationEvent, dispatcher, user )
	{
		return Backbone.View.extend ( {
			el: "#LoginView",

			SIGN_IN : "Sign in",
			SIGN_OUT: "Sign out",

			events: {
				"click .signin": "login"
				// it would be nice to have a second button, but the appended Bootstrap buttons lost their rounded corners, boo-hoo-hoo
				// so instead we'll just change the text at run time.
				// "click .signout": "logout"
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

				var le = new AuthenticationEvent ( { handle: this.handle () } );
				dispatcher.trigger ( AuthenticationEvent.LOGIN, le );
			},

			logout: function ()
			{

				var le = new AuthenticationEvent ( {handle: this.handle () } );
				dispatcher.trigger ( AuthenticationEvent.LOGOUT, le );

				this.handle ( "" );
			},

			// ACCESSORS

			// store the data in the form field rather than keeping a separate string
			handle: function ( value )
			{
				if ( arguments.length )
				{
					this.$ ( ".handle" ).val ( value );
				}

				return this.$ ( ".handle" ).val ();
			}
		} );
	}
);