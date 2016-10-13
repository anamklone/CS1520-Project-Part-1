(function($) {
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    var valid = true;
    if ($('input[name=name]').val() == null || $('input[name=name]').val() == '') {
      valid = false;
      $('#contactForm').before('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Error!</strong> User input <em>name</em> is not valid.</div>');
    }
    if ($('input[name=email]').val() == null || $('input[name=email]').val() == '') {
      valid = false;
      $('#contactForm').before('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Error!</strong> User input <em>email</em> is not valid.</div>');
    }
    if (valid) {
      $('#contact-form').html('<h2 style="text-align:center">Thank you for your message! :D</h2>');
    }
  });
})(jQuery);