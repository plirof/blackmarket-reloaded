define(['angularApp'], function(app) {
    app.controller('ActionsCtrl', ['$scope', '$interval', '$timeout', function($scope, $interval, $timeout) {
        $scope.actions = {
            action: ["Shooting", "Fight Club", "Pickpocket", "Scam", "Car Theft", "Theft of Jewels", "Hacking", "Arms Sales", "Drugs Sales"]
        };

        $scope.init = function() {
            if (!game.options.angularInit) {
                game.options.angularInit = true;
            };
            game.actions.angularInit();
        };

        $timeout($scope.init);
    }]);
});
