define(
	["backbone", "Tweet"],
	function( Backbone, Tweet )
	{
		return Backbone.Collection.extend({
			model: Tweet
		});
	}
);