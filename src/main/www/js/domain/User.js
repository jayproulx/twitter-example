// TODO: When you enter an invalid handle, the error isn't reporting properly, it should be caught in .error(), but it's not, neither success nor error are called
define ( ["use!backbone"],
	function ( Backbone )
	{
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

				$.ajax ( {

					url: this.url (),

					dataType: "jsonp",

					success: function ( data, status, xhr )
					{
						console.log ( "Fetched user profile" );

						if ( data.length == 0 || xhr.status != 200 )
						{
							that.error ();
							return;
						}

						that.set ( data[0] );
					},

					error: function ( xhr, status, error )
					{
						// TODO: This is a domain object, it shouldn't affect the view, it should dispatch an error event instead
						// TODO: We should have a prettier notification, how about the modal bootstrap component?
						alert ( "User not found" );

						that.clear();
					}

				} );
			}
		} );
	}
);