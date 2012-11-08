define ( ["jquery", "use!underscore", "use!backbone", "domain/Tweet"],

	function ( $, _, Backbone, Tweet )
	{
		//TODO: Outsource this partial to an external file, this looks like junk
		// Keeping the template here instead of in the prototype means that this only executes once, instead of
		// every time we create a another view object
		var tweetTemplate = _.template (
			'<a class="pull-left" href="#">' +
			'<img class="media-object" src="<%= profile_image_url %>">' +
			'</a>' +
			'<div class="media-body">' +
			'<h4 class="media-heading"><%= from_user_name %> <small>@<%= from_user %></small></h4>' +
			'<%= text %>' +
			'</div>'
		);

		// Create a private index to help create a specific selector for the element this TweetView belongs to
		var TWEET_INDEX = 0;

		return Backbone.View.extend ( {
			className: "TweetView media " + TWEET_INDEX++,

			timelineEl: "#timelineTweets",
			profileEl : "#profileTweets",

			initialize: function ( options )
			{
				// prevent undefined options
				options = options || {};

				// we shouldn't be missing a tweet object here, but if we are, lets use an empty one.
				this.tweet = options.tweet || new Tweet();
			},

			render: function()
			{
				var json = this.tweet.toJSON ();

				this.$el.empty();
				this.$el.append ( tweetTemplate ( json ) );

				return this.$el;
			}
		} );
	}
);