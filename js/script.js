(function($) {
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    console.log('Nope');
    if ($('input[name=name]').val() == null || $('input[name=name]').val() == '') {
      $('#contactForm').before('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Error!</strong> User input <em>name</em> is not valid.</div>');
    }
    if ($('input[name=email]').val() == null || $('input[name=email]').val() == '') {
      $('#contactForm').before('<div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Error!</strong> User input <em>email</em> is not valid.</div>');
    }
  });
})(jQuery);