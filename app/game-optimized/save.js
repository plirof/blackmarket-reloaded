define(["angular"],function(){var e={name:"BR-S",salt:"BRKey",save:function(e){var t={money:game.money,totalMoney:game.totalMoney,level:game.level,reputation:game.reputation,reputationNeed:game.reputationNeed,actions:game.actions,research:game.research,options:game.options};localStorage.setItem(this.name+this.salt,JSON.stringify(t)),e=="user"&&notify.pop("success","Game successfully saved!"),log("Game saved.")},load:function(){if(localStorage.getItem(this.name+this.salt)===null)notify.pop("alert","No save found!");else{var e=JSON.parse(localStorage.getItem(this.name+this.salt));game.money=e.money,game.totalMoney=e.totalMoney,game.level=e.level,game.reputation=e.reputation,game.reputationNeed=e.reputationNeed,game.actions.progress=e.actions.progress,game.actions.owned=e.actions.owned,game.actions.rewardMultiplier=e.actions.rewardMultiplier,game.actions.totalRewardMultiplier=e.actions.totalRewardMultiplier,game.actions.timeMultiplier=e.actions.timeMultiplier,game.actions.totalTimeMultiplier=e.actions.totalTimeMultiplier,game.actions.currentRep=e.actions.currentRep,game.actions.reputationDivider=e.actions.reputationDivider,game.research.actions.bought=e.research.actions.bought,game.options.before=e.options.before,game.options.firstTime=e.options.firstTime,game.research.display(),notify.pop("success","Save-game successfully loaded!"),log("Game loaded.")}},reset:function(e,t){$("#options-reset").html("Really?"),$("#options-yes, #options-no").show(),$("#options-reset").addClass("really"),e&&(localStorage.removeItem(this.name+this.salt),window.history.pushState("","","/#/"),window.location.reload()),t&&($("#options-reset").html("Hard-reset"),$("#options-yes, #options-no").hide(),$("#options-reset").removeClass("really"))},setInt:function(){window.setInterval(function(){game.save.save()},3e5)},init:function(){this.setInt(),window.game.save=this,log("Save init.")}};return e.init()});