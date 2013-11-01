(function () {
    
    module.exports = function ($resource) {
        return $resource('', {}, {
            homeTimeline: {
                url: "/twitter/homeTimeline",
                method: "GET",
                isArray: true
            },
            userTimeline: {
                url: "/twitter/userTimeline?screen_name=:screen_name",
                method: "GET",
                isArray: true,
                params: {
                    screen_name: "@screen_name"
                }
            }
        });
    };
    
})();