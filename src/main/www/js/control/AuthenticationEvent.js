define ( ["use!backbone"], function ( Backbone )
{
	return Backbone.Class.extend (
		{
			defaults: {
				handle: ""
			},

			constructor: function( options )
			{
				options = options || {};

				this.handle = options.handle;
			}
		},
		{
			LOGIN : "login",
			LOGOUT: "logout"
		}
	);
} );