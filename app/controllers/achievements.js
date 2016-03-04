define(['angularApp'], function(app) {
    app.controller('AchievementsCtrl', ['$scope', '$interval', '$timeout', function($scope, $interval, $timeout) {

        $scope.init = function() {
            if (!game.options.angularInit) {
                game.options.angularInit = true;
            };
            game.achievements.angularInit();
        };

        $timeout($scope.init);
    }]);
});
