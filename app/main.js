// var $ = require('jquery');
// var moment = require('moment');
import $ from "jquery";
import moment from "moment";

$(function(){
  var $msg = $("#msg");
  $msg.fadeOut("slow", function(){
      $msg.text("web" + moment().format("YYYY-MM-DD HH:mm:ss") )
          .css("color", "red")
          .fadeIn("slow");
  });
});