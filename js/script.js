


function page1Animation() {
  

var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button", {
    duration: 0.7,
    // delay:1,
    opacity: 0,
    y: -50,
    ease: "power2.out",
    stagger: 0.15,
  });


tl.from(".center-part1 h1",{
    duration: 0.6,
    opacity: 0,
    x: -300,
    ease: "power2.out",
    stagger: 1,
})
tl.from(".center-part1 p",{
    duration: 0.5,
    opacity: 0,
    x: -100,
    ease: "power2.out",
},"-=0.3")
tl.from(".center-part1 button",{
    duration: 0.5,
    opacity: 0,
    ease: "power2.out",
})
tl.from(".center-part2 img",{
    duration: -0.5,
    opacity: 0,
    ease: "bounce.out",
},"-=0.5")

tl.from(".section1bottom img",{
  duration: 0.6,
  opacity: 0,
  y: 30,
  ease: "power1.out",
  stagger: 0.15,

})

}

page1Animation() //calling the function


function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      start: "top 60%",
      end: "top 0%",
      scroller: "body",
      // markers: true,
      scrub: true,
    }
  })
  
  
  
  tl2.from(".services",{
    duration: 0.6,
    opacity: 0,
    y: 50,
    ease: "power2.out",
  })
  
  
  tl2.from(".elem.line1.left",{
    duration: 0.6,
    opacity: 0,
    x: -300,
    ease: "power2.out",
  },"line1")
  tl2.from(".elem.line1.right",{
    duration: 0.6,
    opacity: 0,
    x: 300,
    ease: "power2.out",
  },"line1")
  
  
  tl2.from(".elem.line2.left",{
    duration: 0.6,
    opacity: 0,
    x: -300,
    ease: "power2.out",
  },"line2")
  tl2.from(".elem.line2.right",{
    duration: 0.6,
    opacity: 0,
    x: 300,
    ease: "power2.out",
  },"line2")
}
page2Animation()



// const scroll = new LocomotiveScroll({
//   el: document.querySelector('body'),
//   smooth: true
// });
