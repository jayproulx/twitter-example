define(
	["use!backbone", "domain/Tweet"],
	function( Backbone, Tweet )
	{
		return Backbone.Collection.extend({
			model: Tweet,

			// http://search.twitter.com/search.json?q=from:screenName
			searchTerm: "html5",

			raw: undefined,

			url: function()
			{
				return "http://search.twitter.com/search.json?q=" + this.searchTerm;
			},

			// Prototype override calls the reset method of the super-prototype and additionally
			// empties the raw property.
			reset: function(models, options)
			{
				Backbone.Collection.prototype.reset.call(this, models, options);

				this.raw = undefined;
			},

			fetch: function ()
			{
				var that = this;

				$.ajax ( {

					url: this.url (),

					dataType: "jsonp",

					success: function ( data, status, xhr )
					{
						if ( data.length == 0 || xhr.status != 200 )
						{
							that.error ();
							return;
						}

						that.reset();
						that.add ( data.results );
						that.raw = data;
						that.trigger ( "add" );
					},

					error: function ( xhr, status, error )
					{
						// TODO: We should have a prettier notification, how about the modal bootstrap component?
						alert ( "No tweets found" );

						that.reset();
					}

				} );
			}
		});
	}
);