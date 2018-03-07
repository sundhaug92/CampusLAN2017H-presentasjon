var debug = false;
var slideshow = remark.create();
// every 10 seconds (change to your desired interval), fire the helper function
if (!debug) setInterval(function () {
    carousel(slideshow);
}, 10000);

var rounds = 0;
var lastAutoSlide = slideshow.getCurrentSlideIndex();

function carousel(varObject) {
    var slideCount = varObject.getSlideCount() - 1;
    var currentSlide = varObject.getCurrentSlideIndex();

    //console.log("currentSlide=" + (currentSlide + 1) + " lastAutoSlide=" + (lastAutoSlide + 1));
    if (currentSlide == lastAutoSlide) {
        console.log("Last movement was auto");
        // if the slideshow is on the last slide, go back to the first slide; if not, call gotoNextSlide();
        if (currentSlide == slideCount) {
            // Count number of rounds performed, if 10 then reload.
            if (++rounds == 10) {
                console.log("Hit round target, reloading");
                location.reload(true);
            }
            varObject.gotoFirstSlide();
        } else {
            varObject.gotoNextSlide();
        }
    } else console.log("Last movement was manual");
    lastAutoSlide = varObject.getCurrentSlideIndex();
}