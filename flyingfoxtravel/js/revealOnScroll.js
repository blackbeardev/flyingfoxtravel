//Items to reveal
var itemsToReveal = $(".feature-item");

//Hide items initially
// $(itemsToReveal).addClass("hide-item");


//Get the height of the features elements
var elementHeight = $("#measureElement").height();  //This is 2034px
var windowHeight = $(window).height();
var windowWidth = $(window).width();
var bodyHeight = $("body").height();
var lhsFeatures = $("#features-lhs");
var rhsFeatures = $("#features-rhs");
var mobileWidth = 300;
var pictureDiv = $(".large-hero__picture-div");
var imageDiv = $(".large-hero__image-div");

var checkScrollHeight = function() {
  $(window).scroll(function() {
    if( $(this).scrollTop() > elementHeight) {
      // $(itemsToReveal).removeClass("hide-item");
      // $(itemsToReveal).addClass("hide-item__is-visible");
      $(lhsFeatures).animate({left: "20px"});
      $(rhsFeatures).animate({right: "10px"});

    }
  });
}

var checkWindowWidth = function() {
  if(windowWidth > 800) {
    checkScrollHeight();
    $(imageDiv).hide();
  } else {
    $(pictureDiv).show();
  }
}

checkWindowWidth();





//Create a variable to hold the height of the backgroundImage
// var topSectionHeight = $(".nav").height();

// Create a scroll function based on the window object
// $(window).scroll(function() {
//   if( $(this).scrollTop() > topSectionHeight) {
//     $("#arrowUp").show();
//   } else {
//     $("#arrowUp").hide();
//
//   }
// });
