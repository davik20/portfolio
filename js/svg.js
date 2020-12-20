const steam1 = document.querySelector('#coffee-steam1');



const ids = ['#coffee-steam1', '#coffee-steam2', '#coffee-steam3', '#left-hand', '#right-hand'];

  ids.forEach(id => {
     document.querySelector(`${id}`).style.transformBox = 'fill-box'

     gsap.set(id, {
         transition: "all, .5"
     })

     console.log(id)

})



const coffee = gsap.timeline( {
    repeat: -1,
    // repeatDelay: 1,
   
})
coffee.to('#coffee-steam1', {
    y: -10,
    duration: .5,
    
}).to('#coffee-steam2', {
    y: -10,
    duration: 1
}).to('#coffee-steam3', {
    y: -10,
    duration : .5
}, "=-.7")



// const hand = gsap.timeline({

//     repeat: -1,
//     repeatDelay: .5
// })


// hand.to('#left-hand', {

//     transformOrigin: 'right',
//     transformBox: 'fill-box',
//    rotate: 4,

 
    
//     //    y: -10,
//     duration: .3

// }).to('#right-hand', {
   
//     transformOrigin: '50, 50',
//     // transformBox: 'fill-box',
//     y: -10,
//     duration: .3
    
// })



const rightMonitorLine = gsap.timeline ({
    repeat: -1,
    repeatDelay: 3,

    onEnd: function(){
        rightMonitor.reverse()
      }
   
})


rightMonitorLine.from('#right-line1', {

    x: 110,
    opacity: .1,
    duration: .3
}).from('#right-line2', {

    x: 110,
    opacity: .1,
    duration: .3
}).from('#right-line3', {

    y: -110,
    opacity: .1,
    duration: .3
}).from('#right-line4', {

    x: -110,
    opacity: .1,
    duration: 1,
    


})


const leftMonitorLine = gsap.timeline({
    repeat: -1,
    repeatDelay: .5
    
    
})

gsap.from('#left-monitor', {
    opacity: 0,
    duration: 1,
    x: -30,
    onComplete: function(){
        leftMonitorLine.from('.left-line', {
            opacity: 0,
            stagger: .5,
            duration: .5,
            y: 30,

        })
    }
})


const ball = gsap.timeline( {
    repeat: -1,
    duration: .5,
    repeatDelay: .1

})


ball.from('#ball1', {
    opacity: 0,
    duration: .5
}).from('#ball2', {
    opacity: 0,
    duration: .5
}).to('#ball1', {
    opacity: .2,
    duration: .2
}).to('#ball2', {
    opacity: .5,
    duration: .5
}).to('#ball2', {
    opacity: 1,
    duration: .2
})




