let enquiryForm = document.querySelector(".enquiry-form");
let treatmentOverview = document.getElementById("treatment-overview");

let formOffsetTop = enquiryForm.offsetTop;

// Function to handle the scroll event
function handleScroll() {
    // Get the current scroll position
    let scrollPosition = window.scrollY;

    // Check if the user has scrolled to or beyond the form's offset position
    if (scrollPosition >= formOffsetTop) {
        // Add a CSS class to make the form fixed
        enquiryForm.classList.add("fixed-form");
    } else {
        // Remove the CSS class to return the form to its previous position
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
    icon.addEventListener("click", () => {
        if (answer.classList.toggle("active-faq") && icon.classList.contains("fa-plus")) {
            icon.classList.remove("fa-plus")
            icon.classList.add("fa-minus")

        }else
        {
            icon.classList.add("fa-plus")
        }

    })

})


















