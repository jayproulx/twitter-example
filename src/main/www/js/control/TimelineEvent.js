define ( ["use!backbone"], function ( Backbone )
{
	return Backbone.Class.extend (
		{
			defaults: {
				queryString: "html5"
			},

			constructor: function( options )
			{
				options = options || {};

				this.queryString = options.queryString;
			}
		},
		{
			SEARCH: "search"
		}
	);
} );