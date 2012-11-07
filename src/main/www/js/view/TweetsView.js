define ( ["jquery", "use!underscore", "use!backbone", "model/timeline", "model/profile"],

	function ( $, _, Backbone, timeline, profile )
	{
		//TODO: Outsource this partial to an external file, this looks like junk
		var tweetTemplate = _.template (
			'<div class="media">' +
				'<a class="pull-left" href="#">' +
				'<img class="media-object" src="<%= profile_image_url %>">' +
				'</a>' +
				'<div class="media-body">' +
				'<h4 class="media-heading"><%= from_user_name %> <small>@<%= from_user %></small></h4>' +
				'<%= text %>' +
				'</div>' +
				'</div>' +
				'<hr>'
		);

		return Backbone.View.extend ( {
			el: "#TweetsView",

			timelineEl: "#timelineTweets",
			profileEl : "#profileTweets",

			initialize: function ()
			{
				timeline.on ( "add", this.renderTimeline, this );
				timeline.fetch ();

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

			renderTweets: function ( tweets, element )
			{
				var that = this;

				that.$ ( element ).html ("");
				tweets.each ( function ( tweet )
				{
					var json = tweet.toJSON ();

					that.$ ( element ).append ( tweetTemplate ( json ) );
				} );
			}
		} );
	}
);