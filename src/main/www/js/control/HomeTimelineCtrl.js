(function () {

    module.exports = function ($scope, Timeline) {
        $scope.tweets = Timeline.homeTimeline();
    };

})();