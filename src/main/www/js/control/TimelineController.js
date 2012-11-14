define ( ["use!backbone", "control/TimelineEvent", "model/dispatcher", "model/timeline"],
	function ( Backbone, TimelineEvent, dispatcher, timeline )
	{

		return Backbone.Class.extend ( {

			constructor: function ()
			{
				dispatcher.bind ( TimelineEvent.SEARCH, this.search, this );
			},

			search: function ( event )
			{
				timeline.searchTerm = event.queryString;
				timeline.fetch();
			}

		} );

	}
);
