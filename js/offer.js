// const cardd =document.querySelector('.cardd')


gsap.utils.toArray('.heading-component__h1').forEach((e, index, array)=> {
         const headingComponent = gsap.timeline({
    scrollTrigger: {
        trigger: e,
        start: '0% 80%',
        toggleClass: 'scale',
        end: '100%, 0%',
        toggleActions: 'play reverse restart reverse',
       
        
        
    }
}, "+=5")


headingComponent.from(e.nextElementSibling, {
    
    opacity: 0,
    y: 80,
    // duration: 3,
    delay: 1
})



})
// const headingComponent = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.heading-component__h1',
//         // scrub: true,
//         start: '0% 80%',
//         toggleClass: 'scale',
//         end: '100%, 0%',
//         toggleActions: 'play reverse restart reverse',
        
        
//     }
// }, "+=5")


// headingComponent.from('.heading-component__p', {
    
//     opacity: 0,
//     y: 80,
//     // duration: 3,
//     delay: 1
// })



// card


 gsap.utils.toArray('.cardd').forEach((e, index, array)=> {

    // ScrollTrigger.create({
    //     trigger: e,
    //     // scrub: true,
    //     start: '0% 80%',
    //    stagger: true,
    //     end: '100%, 0%',
    //     toggleActions: 'play reverse restart reverse',
        
        
    // })

    

    gsap.from(e, {
         scrollTrigger:{
        trigger: e,
        // scrub: true,
        start: '0% 80%',
       
        end: '100%, 0%',
        toggleActions: 'play reverse restart reverse',
        
        
    },
        duration: .35,
        stagger: true,
        y: 50,
        opacity: 0 
    })
 })


//  cardd.addEventListener('click', (e)=> {

//         e.target.style.transform = 'rotateY(10deg)'
//         console.log(e)
//  })


// console.log(document.querySelector('.cardd').style)

document.querySelectorAll('.cardd').forEach(item=> {
     
    item.addEventListener('mousemove', (e)=> {
        const yAxis = e.offsetX/20
        const xAxis = e.offsetY/20
        gsap.to(e.target, {
           rotateY: yAxis,
           rotateX: -xAxis
        })
    })

    item.addEventListener('mouseout', (e)=> {

        gsap.to(e.target, {
            rotateY: 0,
            rotateX: 0
         })
    })
    
   

})


