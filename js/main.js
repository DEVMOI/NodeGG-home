// VARIABLES
var channel = ["vvarrentv"];
var clientid = "dhtxhmg8vey6qz5y964c3u15vmcssa";
// VARIABLES END


console.log("Beginning");

const getChannelInfo = () => {
  const  jsonURL = (type,channel) =>{
    return"https://api.twitch.tv/kraken/"+ type+ "/" +channel+clientid+"?callback=?"
  }
  // $.getJSON()
  }


console.log("Starting JSON Test");
console.log(getChannelInfo);
console.log("END");



var embed = new Twitch.Embed("twitch-embed", {
  allowfullscreen: true,
  width: "100%",
  height: "100%",
  chat: "default",
  channel: "relaxbeats",
  layout: "video",
  playsinline: true,
  autoplay: false
});

embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
  var player = embed.getPlayer();
  player.play();
});