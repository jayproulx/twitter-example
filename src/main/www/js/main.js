requirejs.config ( {
	appDir : "",
	baseUrl: "",

	paths: {
		"jquery"    : "empty:",
        "angular"   : "../components/angular/angular.min
		"use"       : "../deps/require/use"
	},

	use: {

		angular: {
 			attach: "angular"
		},

	}
} );