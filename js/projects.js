const projects = document.querySelector('.projects_box');


// const allProjects = [
//     {
//         img: '/img/board_meeting.jpg',
//         type: 'Featured Project',
//         title: ' A Brown Project',
//         description: 'I used React Js to do this',
//         technologies: [
//             'react',
//             'node',
//             'wordpress',
//             'php',
//             'vsCode'
//         ],
//         links: {
//             github: 'github.com',
//             link: 'google.com'
//         }
//     },
//     {
//         img: '/img/board_meeting.jpg',
//         type: 'Featured Project',
//         title: ' A Davik Project',
//         description: 'I used Something else to do this',
//         technologies: [
//             'react',
//             'node',
//             'wordpress',
//             'php',
//             'vsCode'
//         ],
//         links: {
//             github: 'github.com',
//             link: 'google.com'
//         }
//     },
//     {
//         img: '/img/board_meeting.jpg',
//         type: 'Featured Project',
//         title: ' A Davik Project',
//         description: 'I used Something else to do this as a form of expereiemet',
//         technologies: [
//             'react',
//             'node',
//             'wordpress',
//             'php',
//             'vsCode'
//         ],
//         links: {
//             github: 'github.com',
//             link: 'google.com'
//         }
//     }
// ]


// class Project  {

//     constructor(project){
//         this.links = project.links
//         this.img = project.img
//         this.type = project.type
//         this.title = project.title
//         this.description = project.description
//         this.technologies = project.technologies
//     }

//     render(domElement){

//         const htmlString = ` <div class="project">
//         <div class="project__img">
//              <img  src="${this.img}"/>
//         </div>

//         <div class="project__details">
//             <h5 class="project__type ">${this.type}</h5>
//             <h5 class="project__title opacity-reduced">${this.title}</h5>
//             <div class="project__description">

//                 <p class="paragraph1" style="opacity: 1;">${this.description}</p>
//             </div>

//             <div class="project__technologies opacity-reduced">
//             ${this.technologies.map(technology => `<p> ${technology} </p>`).join("")}
//             </div>

//             <div class="project__links">
//                 <i class="fa fa-github"></i>
//                 <i class="fa fa-link"></i>
//             </div>

//         </>


//     </div>`;

//     const htmlObject = document.createElement('div');

//     htmlObject.innerHTML = htmlString;

//     domElement.insertAdjacentElement('beforeend', htmlObject)
    

//     }

//     render2 (domElement){
//         const htmlString = ` <div class="project2">
       

//         <div class="project__details2">
//             <h5 class="project__type2 ">${this.type}</h5>
//             <h5 class="project__title2 opacity-reduced">${this.title}</h5>
//             <div class="project__description2">

//                 <p class="paragraph1" style="opacity: 1;">${this.description}</p>
//             </div>

//             <div class="project__technologies2 opacity-reduced">
//             ${this.technologies.map(technology => `<p> ${technology} </p>`).join("")}
//             </div>

//             <div class="project__links2">
//                 <i class="fa fa-github"></i>
//                 <i class="fa fa-link"></i>
//             </div>

//         </div>

//         <div class="project__img2">
//         <img  src="${this.img}"/>
//    </div>


//     </div>`;

//     const htmlObject = document.createElement('div');

//     htmlObject.innerHTML = htmlString;

//     domElement.insertAdjacentElement('beforeend', htmlObject)
    
//     }
// }







// let counter = 'project2'

// allProjects.forEach(project => {
    
//    const projectObject = new Project(project)

//    if(counter === 'project2'){
//        projectObject.render(projects)
//        counter = 'project1'
//    }else {
//        projectObject.render2(projects)
//        counter = 'project2'
//    }

     
// })
