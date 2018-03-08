import React, {Component} from 'react';

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


class ModalToInform extends Component {
	constructor(){
		super();

		this.state = {
			viewModal: false
		};
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.showModalToInform === false){
			this.setState({viewModal:false})
			alert('mostrar modal => usuario registrado correctamente')
			console.log('mostrar modal => usuario registrado correctamente')
			//document.getElementById('modalToInform').modal('hide');
		}else{
			this.setState({viewModal:true})
			//document.getElementById('modalToInform').modal('show');
		}
	}


	render(){
		return (
			<div className="modal fade" id="modalToInform" tabIndex="-1" role="dialog" aria-labelledby="modalToInformLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="modalToInformLabel">{this.props.textForTitle}</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							{this.props.textForBody}
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
}

export default ModalToInform;
