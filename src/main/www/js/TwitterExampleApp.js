(function () {

    var config = require('js/TwitterExampleAppConfig');
    var HeroCtrl = require('js/control/HeroCtrl');
    var HomeTimelineCtrl = require('js/control/HomeTimelineCtrl');
    var LoginCtrl = require('js/control/LoginCtrl');
    var UserTimelineCtrl = require('js/control/UserTimelineCtrl');
    var UserFactory = require('js/domain/UserFactory');
    var TimelineFactory = require('js/domain/TimelineFactory');

    var TwitterExampleApp = angular.module("TwitterExampleApp", ["ngResource", "ui.router"]);

    TwitterExampleApp.config(config);

    TwitterExampleApp.factory('User', UserFactory);

    TwitterExampleApp.factory('Timeline', TimelineFactory);

    TwitterExampleApp.controller('HomeTimelineCtrl', HomeTimelineCtrl);

    TwitterExampleApp.controller('UserTimelineCtrl', UserTimelineCtrl);

    TwitterExampleApp.controller('LoginCtrl', LoginCtrl);

    TwitterExampleApp.controller('HeroCtrl', HeroCtrl);

    module.exports = TwitterExampleApp;

})();