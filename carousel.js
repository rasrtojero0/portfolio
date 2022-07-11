document.addEventListener("DOMContentLoaded",()=>{
    const carousel= document.querySelectorAll(".carousel");
    M.Carousel.init(carousel,{
        duration:300,
        dist: -80,
        shitft:1,
        numVisible: 3,  
        indicators: true,
     
                                                                                      
    })
})
