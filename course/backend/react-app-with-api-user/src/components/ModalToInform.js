import React from 'react';

/*

<!-- Button trigger modal -->

<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalToInform">
  Launch demo modal
</button>


$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})


$('#myModal').modal(options)
Options => https://getbootstrap.com/docs/4.0/components/modal/#options

$('#myModal').modal('toggle')

$('#myModal').modal('show')

$('#myModal').modal('hide')

Eventos => https://getbootstrap.com/docs/4.0/components/modal/#events

$('#myModal').on('hidden.bs.modal', function (e) {
  // do something...
})

 */


function ModalToInform(props) {

	const textOne = 'ExampleOne';
	const textTwo = 'Exampletwo';

	return (
		<div className="modal fade" id="modalToInform" tabindex="-1" role="dialog" aria-labelledby="modalToInformLabel" aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="modalToInformLabel">Modal title</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						...
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="button" className="btn btn-primary">Save changes</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalToInform;
