define ( ["jquery", "use!underscore", "use!backbone", "domain/Tweet"],

	function ( $, _, Backbone, Tweet )
	{
		// Keeping the template here instead of in the prototype means that this only executes once, instead of
		// every time we create a another view object.
		// Using the body of an existing script element allows us to pre-load templates and reference them later
		var tweetTemplate = _.template ( $ ( "#TweetViewTemplate" ).html () );

		return Backbone.View.extend ( {
			className: "TweetView media",

			timelineEl: "#timelineTweets",
			profileEl : "#profileTweets",

			initialize: function ( options )
			{
				// prevent undefined options
				options = options || {};

				// we shouldn't be missing a tweet object here, but if we are, lets use an empty one.
				this.tweet = options.tweet || new Tweet ();
			},

			render: function ()
			{
				var json = this.tweet.toJSON ();

				this.$el.empty ();
				this.$el.append ( tweetTemplate ( json ) );

				return this.$el;
			}
		} );
	}
);