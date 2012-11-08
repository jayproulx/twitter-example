define ( ["jquery", "use!underscore", "use!backbone", "view/TweetView", "model/timeline", "model/profile"],

	function ( $, _, Backbone, TweetView, timeline, profile )
	{
		return Backbone.View.extend ( {
			el: "#TweetsView",

			timelineEl: "#timelineTweets",
			profileEl : "#profileTweets",

			initialize: function ()
			{
				timeline.on ( "add", this.renderTimeline, this );
				timeline.fetch ();

				// profile tweets don't need to be fetched, they update when the user changes
				profile.bind ( "add", this.renderProfile, this );
			},

			renderTimeline: function ()
			{
				this.renderTweets ( timeline, this.timelineEl );
			},

			renderProfile: function ()
			{
				this.renderTweets ( profile, this.profileEl );
			},

			// This logic could be improved in the future to only change the updated records, rather than
			// re-rendering the entire array for every change.
			renderTweets : function ( tweets, element )
			{
				var that = this;

				that.$ ( element ).empty ();
				tweets.each ( function ( tweet )
				{
					var tv = new TweetView ( { "tweet": tweet } );

					that.$ ( element ).append ( tv.render () );
				} );
			}
		} );
	}
);