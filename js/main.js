const heroTl = gsap.timeline()

/* Hero Animation */

heroTl.from('.hero__p', {
    y:-200,
    duration: .9,
    stagger: .1
}).from('.hero__h1', {
    x: -1000,
    duration: 1,
    ease: 'power4',
    opacity: 0
}, "=-.5")
.from('.hero__h5', {
    // scrollTrigger:{
    //     trigger: '.hero__h5',
    //     start: 'top, 0%'
    // },
    opacity: 0,
    duration: 1
}).from('.hero__paragraph', {
    opacity: 0,
    duration: .5,
    y: 20
}, "=-1")


// Hero Scroll Animation
const heroScroll = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: '0% 0%',
        scrub: true,
        end: '100% 50%',
       
        
       
        
    }
})

heroScroll.to('.hero__p',{
    // y: -100,
    // duration: 1
}).to('.hero__h1',{
    
    y: -50,
    duration: 1,
    
}, '=-.3').to('.hero__h5',{
   
    // duration: 1,
    // y:80,
    // scale: '1.3'
  
})


// Background objects animation 

 const backgroundTl = gsap.timeline({
     onComplete: function(){
         this.restart()
     },
    
 });

 gsap.to('.object', {
    opacity: 1,
    delay: 2
})

backgroundTl
.to('.react', {
    motionPath: "M233,290 C90,94 22,345 29,21",
    duration: 20,
    
   
})
.to('.code', {
    motionPath: "M137,8 C90,94 478,44 172,303",
    duration: 20
}, '=-20')
.to('.html', {
    motionPath: "M97,8 C42,345 487,19 447,219",
    duration: 20
}, '=-19')
.to('.github', {
    motionPath: "M 400 300 L 550 400 L 500 350 L 550 300 L 500 200 ",
    duration: 20
}, '=-19')
.to('.bootstrap', {
    motionPath: "M97,8 C42,345 487,19 447,219",
    duration: 20
}, '=-19')




// Arrow animation

const heroArrow = gsap.timeline({
    repeat: -1,
    repeatDelay: 0
});


heroArrow.from('.hero__arrow', {
    y: -30,
   fontSize: '1.5rem',
    duration: .5
}).
to('.hero__arrow', {
    y: -30,
    duration: 1,
    color: "var(--darkBlue)",
    fontSize: '1.5rem',
   
    
})


// About icons animation


    const aboutIcon = gsap.timeline({
scrollTrigger: {
   trigger: '.about__skills',
   start: '0% 80%',
   
   end: '100%, 0%',
   toggleActions: 'play reverse restart reverse',
  

   
}
})

aboutIcon.from('.about__icon', {

    x: 50,
    duration: .5,
    stagger: .1,
    opacity: 0
})














