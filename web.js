function opacity(){
  var mainT = document.getElementById("maint");
  var steam = document.getElementById("steam");
  var twitter = document.getElementById("twitter");
  var yt = document.getElementById("yt");
  var ttv = document.getElementById("ttv");
  setTimeout(2);
  mainT.addEventListener("animationend", ()=> {
    mainT.style.opacity = 1;
    steam.style.opacity = 1;
    twitter.style.opacity = 1;
    yt.style.opacity = 1;
    ttv.style.opacity = 1;
  });
}

