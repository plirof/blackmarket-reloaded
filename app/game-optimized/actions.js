define(["angular"],function(){var e={list:["Shooting","Fight Club","Pickpocket","Scam","Car Theft","Theft of Jewels","Hacking","Arms Sales","Drugs Sales"],inflation:[1.09,1.15,1.15,1.14,1.13,1.12,1.11,1.1,1.09],progress:new Array,owned:new Array,price:[4,92,2116,48668,1119364,25745372,592143556,13619301788,313243941124],reward:[1,23,529,12167,279841,6436343,148035889,3404825447,78310985281],rewardMultiplier:new Array,totalRewardMultiplier:1,time:[1.5,3,6,12,24,96,384,1536,6144],timeMultiplier:new Array,totalTimeMultiplier:1,reputation:[1,3,9,27,81,243,729,2187,6561],reputationMultiplier:new Array,reputationDivider:6,totalReputationMultiplier:1,buy:1,getRep:function(e){return this.reputation[e]/this.reputationDivider*Math.pow(1.01,this.owned[e])*this.reputationMultiplier[e]*this.totalReputationMultiplier},getTime:function(e){return this.time[e]/this.timeMultiplier[e]/this.totalTimeMultiplier},getReward:function(e){return this.owned[e]*this.reward[e]*this.rewardMultiplier[e]*this.totalRewardMultiplier},getPrice:function(e){var t=this.price[e]*Math.pow(this.inflation[e],this.owned[e]);return t},getPerSec:function(e){var t=this.getReward(e),n=this.getTime(e);return t/n},multiplier:function(){switch(this.buy){case 1:this.buy=10;break;case 10:this.buy=100;break;case 100:this.buy=250;break;case 250:this.buy=500;break;case 500:this.buy=1}this.display()},upgrade:function(e){var t=this.getPrice(e),n=this.buy;if(n>1)for(var r=0;r<n;r++)this.upgradeOnce(e);else this.upgradeOnce(e)},upgradeOnce:function(e){var t=this.getPrice(e);if(game.money<t)return;game.money-=t,this.owned[e]++,game.achievements.loop(),this.display(),$("#action-upgrade-"+(e+1)).html("Upgrade")},run:function(e){if(!game.options.pause)for(var t=0;t<this.list.length;t++)if(this.owned[t]>0){var n=game.options.fps,r=this.getTime(t),i=this.getReward(t),s=this.getRep(t);this.progress[t]+=e/n,game.gainMoney(Math.floor(this.progress[t]/r)*i),game.gainRep(Math.floor(this.progress[t]/r)*s),game.repLevelUp(),this.progress[t]%=r;var o=this.progress[t]/r*100;r<.2&&(o=100,repWidth=100),o=Math.max(o,1),$("#action-progress-"+(t+1)).css("width",o+"%"),$("#action-progress-"+(t+1)+"-info").html(Math.floor(o)+"%")}},display:function(){for(var e=0;e<this.list.length;e++){var t=this.displayPrice(e),n=this.getReward(e),r=this.getTime(e),i=this.getPerSec(e),s=this.displayPrice(e),o=this.reputation[e],u=this.getRep(e);$("#action-name-"+(e+1)).html(this.list[e]+" (lvl. "+this.owned[e]+")"),$("#action-info-"+(e+1)).html("+$"+fix(n)+" <span>($"+fix(i,3)+"/sec)</span><br>"+fix(r)+" sec.<br>"+"+"+fix(u,0)+" rep."),$("#action-cost-"+(e+1)).html("Cost $"+fix(t))}var a=game.research.getCheapest(0);if(typeof game.research.actions.list[a]!="undefined"){var f={name:game.research.actions.list[a].name,desc:game.research.actions.list[a].desc,price:game.research.actions.list[a].price};$("#action-quickbuy-button").html(f.name+" ($"+fix(f.price,0)+")")}else $("#action-quickbuy-button").removeAttr("onclick").prop("disabled",!0).attr("disabled","disabled").addClass("btn-disabled").html("All Upgrades bought!");$("#action-buy-button").html("Buy x"+this.buy)},displayPrice:function(e){var t=this.buy,n=this.owned[e],r=0,i=t+this.owned[e];while(i>n)t--,i=t+n,r+=this.price[e]*Math.pow(this.inflation[e],i);return r},varInit:function(){for(var e=0;e<this.list.length;e++)this.progress.push(0),this.rewardMultiplier.push(1),this.timeMultiplier.push(1),this.owned.push(0),this.owned[0]=1,this.reputationMultiplier.push(1)},domInit:function(){for(var e=0;e<this.list.length;e++)$("#action-upgrade-"+(e+1)).attr("onclick","game.actions.upgrade("+e+");"),this.owned[e]<1?$("#action-upgrade-"+(e+1)).html("Unlock"):$("#action-upgrade-"+(e+1)).html("Upgrade"),game.achievements.loop(!0),this.display()},angularInit:function(){this.domInit()},init:function(){this.varInit(),window.game.actions=this,log("Actions init.")}};return e.init()});