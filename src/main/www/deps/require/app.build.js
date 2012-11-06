({
    appDir: "../",
    baseUrl: "../js/",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    optimize: "none",

    paths: {
        "jquery": "empty:",
	    "backbone": "../backbone/backbone.min.js"
    },

    modules: [
        //Optimize the application files. jQuery is not 
        //included since it is already in require-jquery.js
        {
            name: "main"
        }
    ]
})
