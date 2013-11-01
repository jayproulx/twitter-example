(function () {
    
    module.exports = function ($rootScope, $scope, Timeline) {
        $scope.tweets = Timeline.userTimeline({
            screen_name: $rootScope.currentUser.screen_name
        });
    };
    
})();