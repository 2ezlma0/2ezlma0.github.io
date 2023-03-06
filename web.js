function opacity(){
  var loopcancel = false;
  window.addEventListener("click", function(){
    setTimeout(3)
    if(loopcancel == false)
    {
      var video = document.getElementsByClassName("video")[0];
      let iframe = document.createElement("iframe");
      iframe.setAttribute("height", "0.01");
      iframe.setAttribute("width", "0.01");
      iframe.setAttribute("src", "https://www.youtube.com/embed/k4PfFz0n8jc?list=PLPFEWovHEPG_oc7n7eYE1tSlmsZAub4G-&autoplay=1");
      iframe.setAttribute("allow", "accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
      video.append(iframe);
      loopcancel = true;
    }
  })
  var title = document.getElementById("titleid");
  var mainT = document.getElementById("maint");
  var steam = document.getElementById("steam");
  var twitter = document.getElementById("twitter");
  var git = document.getElementById("git");
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
  git.classList.add("fadein");
  setTimeout(1);
  steam.addEventListener("animationend", ()=> {
  if(!inv){
    mainT.style.opacity = 1;
  }
  steam.style.opacity = 1;
  twitter.style.opacity = 1;
  yt.style.opacity = 1;
  ttv.style.opacity = 1;
  git.style.opacity = 1;
  });
}
