//Index Page JavaScript

//Date and Time
function dateTime()
{
	var today = new Date();
	
	var curr_hours = today.getHours();
	var curr_min = ('0' + today.getMinutes()).slice(-2);
	var curr_sec = ('0' + today.getSeconds()).slice(-2);
	
	var time = curr_hours + " : " + curr_min + " : " + curr_sec;
    
    document.getElementById("clock").innerHTML = today.toDateString() + " | " + time;
    
    setTimeout(dateTime, 500);
}
//END

//Image Slideshow
var images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];

var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x)
{
    imageNumber += x;
    
    if (imageNumber > imageLength)
        {
            imageNumber = 0;
        }
    
    if (imageNumber < 0)
        {
            imageNumber = imageLength;
        }
    
    document.getElementById("slideshow").src = images[imageNumber];
    
    return false;
}

function runSlideshow()
{
    setInterval("changeImage(1)", 2500);
}
//END
