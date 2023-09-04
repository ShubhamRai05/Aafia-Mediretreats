// function googleTranslateElementInit() {
//     new google.translate.TranslateElement(
//         { pageLanguage: 'en' ,
//         layout : google.translate.TranslateElement.InlineLayout.SIMPLE},
//         'google_translate_element'
//     );
// }
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { 
            pageLanguage: 'en',
            layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL, // Choose layout style
            gaTrack: true, // Enable Google Analytics tracking (if you have GA set up)
            autoDisplay: false, // Disable automatic language display
        },
        'google_translate_element'
    );
}

// shimmer ui 
setTimeout(function() {
    // Replace 'your-image-url.jpg' with the actual image URL
    document.getElementById('image').src = '';

    // Show the content and hide the shimmer effect
    document.getElementById('content').style.display = 'block';
    document.querySelector('.shimmer-container').style.display = 'none';
}, 2000);