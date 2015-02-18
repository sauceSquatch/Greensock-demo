
$(document).ready(function()
{
  initBuild();
})

///// INIT vars
var nav = $("nav"),
    navItems = [];
selectedNavButton = "empty";

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
  if( $(this).is(".clicked") ) {
    // console.log("this is the active button buddy")
  } else {
    var headlines = $(".headlines", this);
    TweenLite.to(headlines, 0.35, {height:130, width:450, backgroundColor:"#ecfafb", ease:Power4.easeOut});
    TweenLite.to($("h2", headlines), 0.45, {scale:1.45, color:"#6c4962", transformOrigin:"0% 0%", paddingBottom:"8px", ease:Power4.easeOut});
    TweenLite.to($("h3", headlines), 0.35, {scale:1.25, paddingLeft:"12px", transformOrigin:"0% 0%", ease:Power3.easeOut});
    TweenLite.to($(".icon", this), 0.35, {scale:1.5, transformOrigin:"100% 0%", ease:Power3.easeOut});
  }
  
}

onOut = function(evt) {
  if( $(this).is(".clicked") ) {
    // console.log("this is the active button buddy")
  } else {
    var headlines = $(".headlines", this);
    TweenLite.to(headlines, 0.25, {height:85, width:290, backgroundColor:"#ffffff", ease:Power2.easeIn});
    TweenLite.to($("h2", headlines), 0.25, {scale:1, color:"#495a6c", transformOrigin:"0% 0%", paddingBottom:"0px", ease:Power2.easeIn});
    TweenLite.to($("h3", headlines), 0.25, {scale:1, paddingLeft:"10px", transformOrigin:"0% 0%", ease:Power2.easeIn});
    TweenLite.to($(".icon", this), 0.25, {scale:0.75, transformOrigin:"100% 0%", ease:Power3.easeIn});
  }

}

onClick = function(evt) {
  var activeBtn = $( "li.clicked"),
      headlines = $(".headlines", activeBtn);

  // transition out the selected button 
  TweenLite.to(headlines, 0.25, {height:85, width:290, backgroundColor:"#ffffff", ease:Power2.easeIn});
  TweenLite.to($("h2", headlines), 0.25, {scale:1, color:"#495a6c", transformOrigin:"0% 0%", paddingBottom:"0px", ease:Power2.easeIn});
  TweenLite.to($("h3", headlines), 0.25, {scale:1, color:"#495a6c", transformOrigin:"0% 0%", ease:Power2.easeIn});
  TweenLite.to($(".icon", activeBtn), 0.25, {scale:0.75, transformOrigin:"100% 0%", ease:Power3.easeIn});
  //remove clicked class from all buttons in menu
  activeBtn.removeClass("clicked");

  //animate all the nav elements 
  // TweenLite.to($(".headlines", ".main_nav"), 0.35, {width:120, ease:Power4.easeInOut})
  selectedNavButton = $(this);
  selectedNavButton.addClass("clicked");
  selectSection(this.id.substring(7));
  // console.log("selectedNavButton: ", selectedNavButton)
  TweenLite.to($(".headlines", selectedNavButton), 0.25, {height:"95px", width:"500px", backgroundColor:"#495a6c"});
  TweenLite.to($("h2", selectedNavButton), 0.25, {scale:1, color:"#FFFFFF", transformOrigin:"0% 0%", paddingBottom:"0px", ease:Power2.easeIn});
  TweenLite.to($("h3", selectedNavButton), 0.25, {scale:1, color:"#FFFFFF", transformOrigin:"0% 0%", ease:Power2.easeIn});
  TweenLite.to($(".icon", this), 0.25, {scale:1, transformOrigin:"100% 0%", ease:Power3.easeIn});
}


NavItem.prototype.animateIn = function(delay) {
  TweenLite.to(this.obj, 0.55, {marginTop:0, ease:Power4.easeOut, delay:delay})
  TweenLite.to(this.headlineBox, 0.75, {width:290, ease:Power4.easeInOut, delay:delay})
  TweenLite.to(this.icon, 0.75, {drawSVG:"50% 50%", scale:1, autoAlpha:1, ease:Power4.easeInOut, delay:delay})
  // TweenLite.to(this.headline, 0.75, {opacity:1, ease:Power4.easeInOut, delay:delay + 0.25});
  // TweenLite.to(this.subhead, 0.75, {opacity:1, ease:Power4.easeInOut, delay:delay + 0.75});
};

selectSection = function(sectionNum) {
  var content = $("#content")
  TweenLite.to(content, 0.75, {width:"100%", ease:Power4.easeOut});
  TweenLite.to($(".view", content), 0.75, {height:"25px", backgroundColor:"#acacac", ease:Power4.easeOut});

  // get the active view
  TweenLite.to($("#view" + sectionNum, content), 1, {height:"680px", backgroundColor:"#775260", ease:Power4.easeOut})
  // switch(sectionNum) {
  //   case "1" : 
  //     TweenLite.to(content, 1.25, {marginTop:"0px", ease:Power4.easeOut});
  //   case "2" :
  //     TweenLite.to(content, 1.25, {marginTop:"-101px", ease:Power4.easeOut});
  //   case "3" :
  //     TweenLite.to(content, 1.25, {marginTop:"-201px", ease:Power4.easeOut});
  //   case "4" :
  //     TweenLite.to(content, 1.25, {marginTop:"-301px", ease:Power4.easeOut});

  // }
}
