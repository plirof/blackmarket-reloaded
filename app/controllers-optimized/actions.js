define(["angularApp"],function(e){e.controller("ActionsCtrl",["$scope","$interval","$timeout",function(e,t,n){e.actions={action:["Shooting","Fight Club","Pickpocket","Scam","Car Theft","Theft of Jewels","Hacking","Arms Sales","Drugs Sales"]},e.init=function(){game.options.angularInit||(game.options.angularInit=!0),game.actions.angularInit()},n(e.init)}])});