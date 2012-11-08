define ( ["use!backbone"],
	function ( Backbone )
	{
		// Private Functions
		// Functions in this closure, but not assigned to the object will not be visible outside of the closure.
		// These AJAX response methods don't need to be accessed by external classes, so they don't need to be
		// added to the domain object.

		function authenticationSuccess ( user, data, status, xhr )
		{
			clearTimeout ( user.errorTimeout );
			delete user.errorTimeout;

			if ( data.length == 0 || xhr.status != 200 )
			{
				authenticationError ( user, xhr, status, "Received an invalid response from the server." );
				return;
			}

			user.set ( data[0] );
		}

		function authenticationError ( user, xhr, status, error )
		{
			// TODO: This is a domain object, it shouldn't affect the view, it should dispatch an error event instead
			// TODO: We should have a prettier notification, how about the modal bootstrap component?
			alert ( "User not found for screen name @" + user.get ( "screenName" ) );

			delete user.errorTimeout;

			user.clear ();
		}

		return Backbone.Model.extend ( {
			defaults: {
				"screenName": ""
			},

			url: function ()
			{
				return "https://api.twitter.com/1/users/lookup.json?screen_name=" + this.get ( "screenName" );
			},

			authenticated: function ()
			{
				return this.get ( "name" ) !== undefined;
			},

			fetch: function ()
			{
				var that = this;

				// jsonp requests don't fail gracefully on a 404, we can't catch the error here, so we'll need to
				// timeout instead of waiting for an error.  There's a way to work around this, but it's more work
				// than would be ideal for this example.
				// The ajax.error and deferred.fail methods aren't called when this request fails.
				this.errorTimeout = setTimeout ( function ()
				{
					authenticationError ( that );
				}, 2500 );

				$.ajax ( {

					url: this.url (),

					dataType: "jsonp",

					success: function ( data, status, xhr )
					{
						authenticationSuccess ( that, data, status, xhr );
					}

				} );
			}
		} );
	}
);