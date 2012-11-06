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
			}
		} );
	}
);