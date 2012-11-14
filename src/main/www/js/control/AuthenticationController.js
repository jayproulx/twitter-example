define ( ["use!backbone", "control/AuthenticationEvent", "model/dispatcher", "model/user"],
	function ( Backbone, AuthenticationEvent, dispatcher, user )
	{

		return Backbone.Class.extend ( {

			constructor: function ()
			{
				dispatcher.bind ( AuthenticationEvent.LOGIN, this.login, this );
				dispatcher.bind ( AuthenticationEvent.LOGOUT, this.logout, this );
			},

			login: function ( event )
			{
				// often this logic is much more complicated, and justifies the creation of an application event
				// to ensure that all authentication requests are handled the same way.
				user.set ( "screenName", event.handle );
				user.fetch ();
			},

			logout: function ( event )
			{
				user.clear ();
			}

		} );

	}
);
