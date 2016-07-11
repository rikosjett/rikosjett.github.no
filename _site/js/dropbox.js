$(document).ready(function(){
    // Hide all the elements in the DOM that have a class of "dropbox"
    $( '.dropdownbox' ).hide();


    // Make sure all the elements with a class of "dropclick" are visible and bound
    // with a click event to toggle the "dropbox" state
    $( '.clickme' ).each(function() {
        $(this).show(0).on('click', function(e) {
            // This is only needed if your using an anchor to target the "box" elements
            e.preventDefault();

            // Find the next "box" element in the DOM
            $(this).next('.dropdownbox').slideToggle('fast');
        });
    });
});