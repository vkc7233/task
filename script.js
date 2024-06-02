$(document).ready(function() {
    $('#contact-us').on('click', function() {
        $('#contactModal').modal('show');
    });

    $('#project-list .project-item').on('click', function() {
        var newImage = $(this).data('image');
        $('#project-image').attr('src', newImage);
    });
});
