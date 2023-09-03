// // navigation section
// let navigationSection = document.querySelectorAll(".body-section")

// let navLinks = document.querySelectorAll(".navigation-items li a")

// window.onscroll = ()=>{
//     navigationSection.forEach(section=>{
//         let top = window.scrollY;
//         let offset = section.offsetTop;
//         let height = section.offsetHeight;
//         let id = section.getAttribute("id")

//         if(top >= offset && top < offset +  height){
//             navLinks.forEach(links =>{
//                 links.classList.remove("active")
//                 document.querySelector("header nav a [href*=' + id + ']").classList.add("active")
//             })
//         }
//     })
// }