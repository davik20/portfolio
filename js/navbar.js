 let scrollDist = 0;

function scroll(){

    window.addEventListener('scroll', ()=> {

        if(window.scrollY < scrollDist || window.scrollY < 0) {
            gsap.set(['.app-navbar', '.app-navbar-mobile'], {
                y: 0
            })
        }else {
            gsap.set(['.app-navbar', '.app-navbar-mobile'], {
                y: -100
            })
        }

        if(window.scrollY > 0){
            scrollDist = window.scrollY
        }

        // console.log(scrollDist)

    })

}


scroll()







const navbarTl = gsap.timeline()

navbarTl.from('.nav-item', {
    stagger: .2,
    opacity: 0,
    y: 20,
    ease: 'power4',
    delay: 1.5
})






gsap.to(['.app-navbar', '.app-navbar-mobile'], {
    scrollTrigger: {
        trigger: '.hero',
        start: '2% top',
        end: '10% top',
        // markers: true,
        scrub: true
        
        
        
    },



    
    
    position: 'fixed',
   top: 0,
   zIndex: 100,
   backdropFilter: 'blur(7px)'
   
})




/* Mobile Navbar */
gsap.from('.nav-mobile-item', {
    stagger: .5,
    opacity: 0,
    // y: 20,
    
    ease: 'linear',
    delay: 1.5
})
console.log(window.innerWidth)


addEventListener('resize', (e)=> {

    console.log(e.target.innerWidth)

    if(e.target.innerWidth > 740 ) {
        gsap.set('.nav-mobile-item', {
            opacity: 0
        })
    }else {
        gsap.set('.nav-mobile-item', {
            opacity: 1,
           
        })
    } 
})



function spinHamburger () {
    const navbarMobile =  gsap.timeline({})

    navbarMobile
    .to('.hamburger--1',{
        y: '1.2rem',
        transformOrigin: 'centre',
        duration: .2,
        rotateZ: 45,
        width: '6rem'
    }).to('.hamburger--3', {
        y: '-1.2rem',
        duration: .2,
        rotateZ: -45,
        // backgroundColor: 'red',
        width: '6rem'

    }, "-=.2").to('.hamburger--2', {
        opacity: 0,
        duration: .2
    }, "-=.2").to('.hamburger--1', {
        rotateZ: 400,
        duration: .2
    }).to('.hamburger--3', {
        rotateZ: -400,
        duration: .2
    }, "=-.2")
    .to(['.contact-button', '.app-navbar-mobile__logo'], {
        opacity: 0,
        duration: 0
    }).to('.app-navbar-mobile' ,{
        backgroundColor: 'transparent',
        duration: 0
    }, "=-.5")

    return navbarMobile;
}


function showNavMenu (){
  const navMenu = gsap.to('.navbar-menu', {
        // backdropFilter: 'blur(15px)',
        x: 0,
        duration: .2
    })

    return navMenu
}

function showNavItems (){

    const navItems = gsap.from ('.navbar-mobile-link', {
        x: -20,
        opacity: 0,
        duration: .1,
        stagger: .1
    })

    return navItems;
}

function masterControl (){
    let controls = gsap.timeline({}).add(spinHamburger()).add(showNavMenu()).add(showNavItems()).pause()

    return controls;

}

let animated= false

const controls = masterControl()

document.querySelector('.app-navbar-mobile__hamburger').addEventListener('click', (e)=> {
    

    if(!animated){
        
        controls.play()
        animated =  true
        console.log(animated)
        
    }else {
        console.log(controls)
        
        controls.reverse()
        animated = false
        console.log(animated)
       
    } 
  
})


const mobileLinks  = document.querySelectorAll('.navbar-mobile-link')

// function handleLinkClick(link){
        
//     controls.reverse()


// }

mobileLinks.forEach((link, index, array) => {
    
    link.addEventListener('click', (e) => {

      

        const id = link.getAttribute("data-id")

        
         setTimeout(()=> {

            if(link.href){

                link.removeAttribute('href')
    
                return;
             }

             link.href = id
             
             link.click()

            
         
            console.log(id)
            
        }, 1000)


        controls.reverse();
        animated = false;
        

       
        
       

    } )
})