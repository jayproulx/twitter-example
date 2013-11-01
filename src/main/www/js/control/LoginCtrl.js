(function () {
    module.exports = function ($rootScope, $scope, $state, User) {
        $scope.currentUser = undefined;

        $scope.authenticate = function () {
            User.lookup().$promise.then(
                function (user) {
                    $rootScope.currentUser = user;
                    $rootScope.$broadcast("LOGIN_SUCCESS", user);
                    $state.go("tweets");
                },
                function () {
                    console.log("error", arguments);
                }
            );
        }
    };
})();