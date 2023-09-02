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
            gaId: 'YOUR_GA_ID', // Replace with your Google Analytics ID
            autoDisplay: false, // Disable automatic language display
        },
        'google_translate_element'
    );
}
