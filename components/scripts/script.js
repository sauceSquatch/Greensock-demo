
$(document).ready(function()
{
  initBuild();
})

///// INIT vars
var nav = $("nav"),
    navItems = [];

///// INIT build
initBuild = function() {
  // console.log("start build");
  $( "li" ).each(function( i ) {
    var tempObj = new NavItem("navItem" + i, this);
    navItems.push(tempObj);
  })
  setTimeout(animateIn, 1500);
}


function animateIn() {
  var delay = 0.5,
      i = 0;
  for(i = 0; i < navItems.length; i++) {
    delay = delay + 0.12;
    navItems[i].animateIn(delay);
  }
}

// init obj
function NavItem(n, jqObj) {
  this.name = n;
  this.obj = jqObj;
  this.headlineBox = $(".headlines", this.obj);
  this.headline = $("h2", this.obj);
  this.subhead = $("h3", this.obj);
  this.icon = $(".icon", this.obj);
  this.reset();
  this.addEventListeners();
}

NavItem.prototype.reset = function(){
  TweenLite.to(this.icon, 0, {scale:0.1});
}

NavItem.prototype.addEventListeners = function(){
  $(this.obj).on('mouseover', onOver);
  $(this.obj).on('mouseout', onOut);
  $(this.obj).on('click', onClick);
  // $(this.obj).children().click( function(e) {
  //   //this prevent the event from bubbling to any event higher than the direct children
  //   e.stopPropagation();
  // });

}

onOver = function(evt) {
  TweenLite.to($(".headlines", this), 0.35, {height:150, width:350, ease:Power4.easeOut});
  // TweenLite.to(this, 0.55, {height:250, ease:Power4.easeOut})
}

onOut = function(evt) {
  TweenLite.to($(".headlines", this), 0.35, {height:85, ease:Power4.easeInOut});
  
}

onClick = function(evt) {
  console.log(this)
  //remove clicked class from all buttons in menu
  $( ".clicked", "ul").removeClass("clicked");
  //animate all the nav elements 
  // TweenLite.to($(".headlines", ".main_nav"), 0.35, {width:120, ease:Power4.easeInOut})
  $(this).addClass("clicked");
  TweenLite.to($(".headlines", this), 0.25, {backgroundColor:"#ecfafb"});
}


NavItem.prototype.animateIn = function(delay) {
  TweenLite.to(this.obj, 0.55, {marginTop:0, ease:Power4.easeOut, delay:delay})
  TweenLite.to(this.headlineBox, 0.75, {width:350, ease:Power4.easeInOut, delay:delay})
  TweenLite.to(this.icon, 0.75, {drawSVG:"50% 50%", scale:1, autoAlpha:1, ease:Power4.easeInOut, delay:delay})
  // TweenLite.to(this.headline, 0.75, {opacity:1, ease:Power4.easeInOut, delay:delay + 0.25});
  // TweenLite.to(this.subhead, 0.75, {opacity:1, ease:Power4.easeInOut, delay:delay + 0.75});
};
