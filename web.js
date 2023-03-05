function opacity(){
  var title = document.getElementById("titleid");
  var mainT = document.getElementById("maint");
  var steam = document.getElementById("steam");
  var twitter = document.getElementById("twitter");
  var yt = document.getElementById("yt");
  var ttv = document.getElementById("ttv");
  var inv = false;

  if(window.innerWidth > window.innerHeight){
    title.classList.add("fadein");
    mainT.classList.add("fadein");
    title.addEventListener("animationend", ()=> {
      title.style.opacity = 1;
    });
  }
  else
  {
    title.style.visibility = hidden;
    mainT.style.visibility = hidden;
    inv = true;
  }

  steam.classList.add("fadein");
  twitter.classList.add("fadein");
  yt.classList.add("fadein");
  ttv.classList.add("fadein");
  setTimeout(1);
  steam.addEventListener("animationend", ()=> {
  if(!inv){
    mainT.style.opacity = 1;
  }
  steam.style.opacity = 1;
  twitter.style.opacity = 1;
  yt.style.opacity = 1;
  ttv.style.opacity = 1;
  });
}
