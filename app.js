$('#contactModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)  
  var modal = $(this)
  modal.find('.modal-title').text('New message to info@yourmove.com')  
})

$('#myModal').modal('handleUpdate');


var scroll = function(e) {
    var linkHref = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(linkHref).offset().top
    }, 1000);

    e.preventDefault();
};

$('.toTop').click(scroll);