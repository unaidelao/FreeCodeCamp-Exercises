$(document).ready(function() {
  getChannelInfo();
});

var channels = ["freecodecamp","OgamingSC2","cretetion","storbeck","ESL_SC2","habathcx","RobotCaleb","noobs2ninjas","brunofin","comster404"];

function getChannelInfo() {
  channels.forEach(function(channel) {
    function makeURL(type, name) {
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
    };
    $.getJSON(makeURL("streams", channel), function(data) {
      var game,
          status;
      if (data.stream === null) {
        game = "Offline";
        status = "offline";
      } else if (data.stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = data.stream.game;
        status = "online";
      };
      $.getJSON(makeURL("channels", channel), function(data) {
        var logo = data.logo != null ? data.logo : "http://safetytek.ca/wp-content/uploads/2014/03/Offline-Logo-2.png",
            name = data.display_name != null ? data.display_name : channel,
            description = status === "online" ? ': ' + data.status : "";
        html = '<div class="row ' +
            status + '"><div class="col-md-4"><img src="' +
            logo + '" class="logo"></div><div class="col-md-4"><a href="' +
            data.url + '" target="_blank">' +
            name + '</a></div><div class="col-md-4">'+
            game +
            description + '</span></div></div>';
            status === "online" ? $("#channelInfo").prepend(html) : $("#channelInfo").append(html);
      });
    });
  });
};
