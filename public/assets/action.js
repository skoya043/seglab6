$(document).ready(function() {
    $('form').on('submit', function() {
        $.ajax({
            type: 'POST',
            url: '/niceSurvey',
            data: $(this).serializeArray(),
            success: function(data) {
                // disable the submit button

            }
        });
        return false;
    });
});