var tl= gsap.timeline();

tl.from(".nav",{
    opacity:0,
    delay:.3,
    duration:.2,
})
   


tl.from(".part1, .part2 h1,.part3 ",{

    opacity:0,
    y:-100,
    duration:1,
    delay:.1,
    stagger:.3,
})

tl.from(".left h1",{
    opacity:0,
    x:-100,
    duration:.5,
    delay:.1,
    stagger:.3,

})

tl.from(".right img",{
    opacity:0,
   scale:.5,
   duration:.5,
    

})

gsap.from(".box",{
    opacity:0,
    scale:0,
    duration:.8,
    delay:.1,
    stagger:.2,
    scrollTrigger:{
        trigger:".box",
        start: "top 80%",
        end:"top 60%",
        // markers:true,

    }
})