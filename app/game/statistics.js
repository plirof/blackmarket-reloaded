define(['angular'], function() {
    var statistics = {
        cR: function(label, actual, thisRunVal, allTimeVal, col) {
            if (col && col === '1-2') {
                var html = "<tr>" +
                    "<td>" + label + "</td>" +
                    "<td>" + actual + "</td>" +
                    '<th colspan="2">' + thisRunVal + '</td>' +
                    "</tr>";
            } else if (col && col === '2-1') {
                var html = "<tr class='info'>" +
                    "<td>" + label + "</td>" +
                    '<th colspan="2">' + actual + '</td>' +
                    "<td>" + thisRunVal + "</td>" +
                    "</tr>";
            } else if (col && col === '3') {
                var html = "<tr>" +
                    "<td>" + label + "</td>" +
                    '<th colspan="3">' + actual + '</td>' +
                    "</tr>";
            } else {
                var html = "<tr>" +
                    "<td>" + label + "</td>" +
                    "<td>" + actual + "</td>" +
                    "<td>" + thisRunVal + "</td>" +
                    "<td>" + allTimeVal + "</td>" +
                    "</tr>";
            }

            return html;
        },

        cSH: function(label) {
            var html = "<tr class='active'>" +
                '<th colspan="4" style="text-decoration:underline;text-align:center">' + label + '</th>' +
                '</tr>';

            return html;
        },

        display: function() {

            for (var i = 0; i < game.actions.list.length; i++) {
                var html = {
                    reward: game.actions.getReward(i),
                    perSec: game.actions.getPerSec(i),
                    level: game.actions.owned[i],
                    rewardMulti: game.actions.rewardMultiplier[i],
                    timeMulti: game.actions.timeMultiplier[i]
                };

                $("#action-level-" + (i + 1)).html(html.level);
                $("#action-reward-" + (i + 1)).html(fix(html.reward, 3) + "$");
                $("#action-persec-" + (i + 1)).html(fix(html.perSec, 3) + "$/sec");
                $("#action-timemulti-" + (i + 1)).html("x" + fix(html.rewardMulti, 3));
                $("#action-rewardmulti-" + (i + 1)).html("x" + fix(html.timeMulti, 3));
            };

            var html = {
                money: game.money,
                moneyRun: game.totalMoney,
                moneyAll: game.allTimeMoney,
                reputation: game.reputation,
                reputationRun: game.totalReputation,
                reputationAll: game.allTimeReputation,
                moneyMult: game.actions.totalRewardMultiplier,
                timeMult: game.actions.totalTimeMultiplier,
                reputationMult: game.actions.totalReputationMultiplier,
                countReset: game.options.countReset
            };

            $("#stats-money-atm").html("$" + fix(html.money, 3));
            $("#stats-money-run").html("$" + fix(html.moneyRun, 3));
            $("#stats-money-all").html("$" + fix(html.moneyAll, 3));
            $("#stats-rep-atm").html(fix(html.reputation, 3) + " rep.");
            $("#stats-rep-run").html(fix(html.reputationRun, 3) + " rep.");
            $("#stats-rep-all").html(fix(html.reputationAll, 3) + " rep.");
            $("#stats-money-mult-atm").html("x" + fix(html.moneyMult, 3));
            $("#stats-time-mult-atm").html("x" + fix(html.timeMult, 3));
            $("#stats-rep-mult-atm").html("x" + fix(html.reputationMult, 3));
            $("#stats-reset-count-atm").html(html.countReset);
        },

        varInit: function() {},

        domInit: function() {
            var short = new Date(game.options.started);
            var startedYear = short.getFullYear();
            var startedMonth = ((short.getMonth() + 1) < 10 ? '0' + (short.getMonth() + 1) : (short.getMonth() + 1));
            var startedDay = (short.getDate() < 10 ? '0' + short.getDate() : short.getDate());
            var startedHour = (short.getHours() < 10 ? '0' + short.getHours() : short.getHours());
            var startedMinute = (short.getMinutes() < 10 ? '0' + short.getMinutes() : short.getMinutes());
            var startedSecond = (short.getSeconds() < 10 ? '0' + short.getSeconds() : short.getSeconds());

            for (var i = 0; i < game.actions.list.length; i++) {
                var html = {
                    name: game.actions.list[i]
                };

                $("#stats-actions tbody").append('<tr id="action-' + (i + 1) + '">' +
                    '<td id="action-name-' + (i + 1) + '">' + html.name + '</td>' +
                    '<td id="action-level-' + (i + 1) + '"></td>' +
                    '<td id="action-timemulti-' + (i + 1) + '"></td>' +
                    '<td id="action-rewardmulti-' + (i + 1) + '"></td>' +
                    '<td id="action-reward-' + (i + 1) + '"></td>' +
                    '<td id="action-persec-' + (i + 1) + '"></td>' +
                    '</tr>');

            };

            $("#stats-started").html('Game started : ' + startedMonth + '/' + startedDay + '/' + startedYear + ' - ' +
                startedHour + ':' + startedMinute + ':' + startedSecond);

            this.display();
        },

        angularInit: function() {
            this.domInit();
        },

        init: function() {
            this.varInit();

            window["game"]["statistics"] = this;
            log("Statistics init.");
        }
    };

    return statistics.init();
});
