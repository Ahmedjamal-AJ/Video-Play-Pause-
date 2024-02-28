//For Multiple Video Code
    let myvideo = document.querySelectorAll(".videoplay");

    for (var i = 0; i < myvideo.length; i++) {
        myvideo[i].addEventListener("mouseover", function() {
            this.play();
        })
        myvideo[i].addEventListener("mouseleave", function() {
            this.pause();
        })
    }

    {/* //First will do with single video 
    //This code will play for first video only. now will do code for multiple videos
    // document.querySelector(".videoplay").addEventListener("mouseover", function() {
        this.play()
    })

    document.querySelector(".videoplay").addEventListener("mouseleave", function() {
        this.pause()
    }) */}
