define([],function(){var e={activated:!0,close:function(){$("#notify-div").fadeOut("slow")},toggle:function(){this.activated=!this.activated},pop:function(e,t){if(!this.activated)return;switch(e){case"alert":$("#notify-prop").removeClass(),$("#notify-prop").addClass("alert alert-warning");break;case"success":$("#notify-prop").removeClass(),$("#notify-prop").addClass("alert alert-success")}$("#notify-message").html(t),$("#notify-div").fadeIn("slow",function(){window.setTimeout(function(){$("#notify-div").fadeOut("slow")},3e3)})},init:function(){window.notify=this,log("Notify init.")}};return e.init()});