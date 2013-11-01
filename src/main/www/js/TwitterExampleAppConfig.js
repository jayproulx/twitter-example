(function () {
    
    var HomeTimelineCtrl = require('js/control/HomeTimelineCtrl');
    var UserTimelineCtrl = require('js/control/UserTimelineCtrl');

    module.exports = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("home");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "partials/home.html"
            })
            .state('tweets', {
                url: "/tweets",
                templateUrl: "partials/tweets.html",
                controller: HomeTimelineCtrl
            })
            .state('tweetshome', {
                url: "/tweetshome",
                templateUrl: "partials/tweets.html",
                controller: HomeTimelineCtrl
            })
            .state('tweetsprofile', {
                url: "/tweetsprofile",
                templateUrl: "partials/tweets.html",
                controller: UserTimelineCtrl
            });
    };
    
})();