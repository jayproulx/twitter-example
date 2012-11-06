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
							this.error ();
							return;
						}

						that.set ( data[0] );
						that.trigger ( "change" );
					},

					error: function ( xhr, status, error )
					{
						// TODO: We should have a prettier notification, how about the modal bootstrap component?
						alert ( "User not found" );

						that.clear();
						that.trigger ( "change" );
					}

				} );
			}
		} );
	}
);