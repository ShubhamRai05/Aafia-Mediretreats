let enquiryForm = document.querySelector(".enquiry-form");
let formOffsetTop = enquiryForm.offsetTop;
let doctorsSection = document.querySelector(".our-doctors");
let doctorsSectionOffsetTop = doctorsSection.offsetTop;

// Function to handle the scroll event
function handleScroll() {
    // Get the current scroll position
    let scrollPosition = window.scrollY;

    if (scrollPosition >= formOffsetTop && scrollPosition + enquiryForm.offsetHeight < doctorsSectionOffsetTop) {
        enquiryForm.classList.add("fixed-form");
    } else {

        enquiryForm.classList.remove("fixed-form");
    }
}

window.addEventListener("scroll", handleScroll);


//  FAQ TOGGLE
const accordian = document.querySelectorAll(".accordian")
let answer = document.querySelector(".answer")

accordian.forEach((accord) => {
    const icon = accord.querySelector(".icon")
    const answer = accord.querySelector(".answer")
    accord.addEventListener("click", () => {
        if (answer.classList.toggle("active-faq") && icon.classList.contains("fa-plus")) {
            icon.classList.remove("fa-plus")
            icon.classList.add("fa-minus")

        } else {
            icon.classList.add("fa-plus")
        }

    })

})

// owl carousel

$('.owl-two').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

// owl one
$('.owl-one').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 2
        }
    }
})


// owl three

$('.owl-three').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
