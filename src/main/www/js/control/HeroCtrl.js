(function () {
    
    module.exports = function ($scope, User) {
        $scope.$on("LOGIN_SUCCESS", function (event, user) {
            $scope.user = user;
        });
    }
    
})();