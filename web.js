function opacity(){
  var mainT = document.getElementById("maint");
  mainT.style.opacity = 0;
  setTimeout(2);
  mainT.addEventListener("animationend", ()=> {
    mainT.style.opacity = 1;
  });
}
