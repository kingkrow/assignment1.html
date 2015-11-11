var image=document.getElementById('picture'); 
console.log(image);
var Rotation = 0;
        
var turnImage=function() {
    console.log("click registered");
    Rotation = Rotation + 90;
    image.style.transform = 'rotate('+Rotation+'deg)';
    }
        
        
var guess=function() { 
    console.log("second button works");
    if (Rotation % 360 === 0) {
        window.alert("You're right! :)");
    }
    else {
        window.alert("Oops! Try again!");
    }
    }
  
 
  var imgArray = [
    'http://designcollector.net/files/upside-down-1-620x620.jpg',
    'https://s-media-cache-ak0.pinimg.com/736x/b4/98/05/b49805be0faebe621b064f3fdc57e03b.jpg',
    'http://cache.desktopnexus.com/thumbseg/1157/1157707-bigthumbnail.jpg',
    'http://www.raptitude.com/wp-content/uploads/2010/10/upside-drop.jpg'
    ];
  
  
var showNextImage = 0;   
    
var nextImage= function() { 
    document.getElementById("picture").src = imgArray[showNextImage];
    console.log("third button works");
    console.log(imgArray[showNextImage]);
    
    if (showNextImage < (imgArray.length - 1)) {
        console.log("true");
    showNextImage = showNextImage + 1; 
    console.log(showNextImage);
    }
    else {
        console.log("false");
        console.log(showNextImage);
        showNextImage = 0;
    }
    document.getElementById('picture');
}    

    
    

    
