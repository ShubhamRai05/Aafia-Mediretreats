// Get references to the elements
let enquiryForm = document.querySelector(".enquiry-form");
let treatmentOverview = document.getElementById("treatment-overview");

// Calculate the offset position where the form should become fixed
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

// Attach the scroll event listener to the window
window.addEventListener("scroll", handleScroll);
