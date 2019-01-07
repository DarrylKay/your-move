$('#contactModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)  
  var modal = $(this)
  modal.find('.modal-title').text('New message to info@yourmove.com')  
})

$('#myModal').modal('handleUpdate');