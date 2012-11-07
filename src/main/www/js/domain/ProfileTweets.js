define ( ["domain/Tweets", "model/user"],
	function ( Tweets, user )
	{
		return Tweets.extend ( {
			initialize: function ()
			{
				user.bind ( "change", this.fetch, this );
			},

			url: function ()
			{
				return "http://search.twitter.com/search.json?q=from:" + user.get ( "screen_name" );
			},

			fetch: function()
			{
				Tweets.prototype.fetch.call(this);
			}
		} );
	}
);

