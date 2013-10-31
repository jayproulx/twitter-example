var TwitterExampleApp = angular.module("TwitterExampleApp", ["ngResource", "ui.router"]);

TwitterExampleApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("home");
    
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "partials/home.html"
        })
        .state('tweets', {
            url: "/tweets",
            templateUrl: "partials/tweets.html",
            controller: "HomeTimelineCtrl"
        })
        .state('tweetshome', {
            url: "/tweetshome",
            templateUrl: "partials/tweets.html",
            controller: "HomeTimelineCtrl"  
        })
        .state('tweetsprofile', {
            url: "/tweetsprofile",
            templateUrl: "partials/tweets.html",
            controller: "UserTimelineCtrl"  
        });
});

TwitterExampleApp.factory('User', function($resource) {
    return $resource('', {}, {
        lookup: {
            url: "/twitter/currentUser",
            method: "GET",
            isArray: false
        }
    });
});

TwitterExampleApp.factory('Timeline', function($resource) {
    return $resource('', {}, {
        homeTimeline: {
            url: "/twitter/homeTimeline",
            method: "GET",
            isArray: true
        },
        userTimeline:
        {
            url: "/twitter/userTimeline?screen_name=:screen_name",
            method: "GET",
            isArray: true,
            params: {
                screen_name: "@screen_name"
            }
        }
    });
});

TwitterExampleApp.controller('HomeTimelineCtrl', function($scope, Timeline) {
    $scope.tweets = Timeline.homeTimeline();
});

TwitterExampleApp.controller('UserTimelineCtrl', function($rootScope, $scope, Timeline) {
    $scope.tweets = Timeline.userTimeline({screen_name: $rootScope.currentUser.screen_name});
});

TwitterExampleApp.controller('LoginCtrl', function($rootScope, $scope, $state, User) {
    $scope.currentUser = undefined;
    
    $scope.authenticate = function()
    {
        User.lookup().$promise.then(
            function(user) {
                $rootScope.currentUser = user;
                $rootScope.$broadcast("LOGIN_SUCCESS", user);
                $state.go("tweets");
            },
            function() {
                console.log("error", arguments);
            }
        );
    }
});

TwitterExampleApp.controller('HeroCtrl', function($scope, User) {
    $scope.$on("LOGIN_SUCCESS", function( event, user ) {
        $scope.user = user;
    });
});