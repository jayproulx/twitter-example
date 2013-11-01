(function () {
    
    module.exports = function ($resource) {
        return $resource('', {}, {
            lookup: {
                url: "/twitter/currentUser",
                method: "GET",
                isArray: false
            }
        });
    };
    
})();