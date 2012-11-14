requirejs.config ( {
	appDir : "",
	baseUrl: "js",

	paths: {
		"jquery"    : "empty:",
		"underscore": "../deps/underscore/underscore",
		"backbone"  : "../deps/backbone/backbone",
		"use"       : "../deps/require/use"
	},

	use: {

		backbone: {
			deps  : ["use!underscore", "jquery"],
			attach: "Backbone"
		},

		underscore: {
			attach: "_"
		}

	}
} );

requirejs ( [ "jquery", "use!underscore", "use!backbone", "TwitterExampleApp"],

	function ( $, _, Backbone, TwitterExampleApp )
	{

		var application = new TwitterExampleApp ();
	}

);
