define (
	[
		"jquery",
		"use!underscore",
		"use!backbone",
		"control/TimelineEvent",
		"view/TweetView",
		"model/dispatcher",
		"model/timeline",
		"model/profile"
	],

	function ( $, _, Backbone, TimelineEvent, TweetView, dispatcher, timeline, profile )
	{
		return Backbone.View.extend ( {
			el: "#TweetsView",

			timelineEl: "#timelineTweets",
			profileEl : "#profileTweets",

			initialize: function ()
			{
				timeline.bind ( "add", this.renderTimeline, this );
				profile.bind ( "add", this.renderProfile, this );

				dispatcher.trigger ( TimelineEvent.SEARCH, new TimelineEvent ( { queryString: "html5"} ) );
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
			// The TweetView object should be garbage collected when its link to the element disappears.
			// Its often beneficial to keep references to these objects in a parent view to capture events,
			// but this example doesn't currently offer that functionality.
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