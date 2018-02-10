/**
 *  Estructura de componentes:
 *
 * 		App
 * 			BlockListCardWithPhoto
 * 			BlockListReducedCard
 * 
 */

'use strict';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			results: [],
			tracksResults: [],
			textForButtonInCards: '',
			typeOfElement: '',
			input: ''
		};
	}

	fixResultsWithoutPictures(sourceData){
		for (let i = 0; i < sourceData.length; i++){
			for(let prop in sourceData[i]){
				if(sourceData[i].images.length === 0){
					// si el item no tiene imágenes, le establezco una por defecto
					sourceData[i].images.push({height: 600, url: "images/default-artist.png", width: 600});
				}
			}
		}
		return sourceData;
	}

	fixResultsWithoutPreviewUrl(sourceData){
		// Si un track no tiene preview, no lo mostraré en los resultados
		let resultsFiltered = sourceData.filter(
				(resultItem) => {
					if(resultItem['preview_url'] !== null){
						return resultItem
					}
				}
			);
		return resultsFiltered;
	}

	focusOnInputField = (input) => {
  		input.focus();
	}

	_handlerOnChange = (e) => {
		this.setState({ input: e.target.value })
	}

	_handlerOnSubmit = (e) => {
		e.preventDefault()

		const valueOfInputTrimed = this.state.input.trim();
		if(valueOfInputTrimed.length > 0){

			/* Uso la Api que hemos desarrollado */
			spotifyApi.searchArtists(valueOfInputTrimed)
				.then(artists => this._handlerResultsOfSearchForArtist(artists))
				.catch(error => this._handlerError(error));
			this.setState.input = valueOfInputTrimed;
		}
		this.setState({ input: '' })
	}

	_handlerError = (error) => {
		console.error(error);
	}

	_handlerResultsOfSearchForArtist = (artist) => {
		// si llega una lista de artistas de la Api de Spotify...
		
		/* Utilizo una función para arreglar aquellas situaciones las que la API devuelve datos con diferente estructura, de todas esto sería responsabilidad de backend y no de front end!  */
		const resultsFixed = this.fixResultsWithoutPictures(artist)

		this.setState({ results:resultsFixed, textForButtonInCards: 'List of albums', typeOfElement: 'artistCard', tracksResults: [] })


		// Aplico "destructuring" (JS ES 6) para volcar los datos en "artist" (Esto funcionará si el parámetro de entrada a esta función se llamara igual que el objeto destino de los datos)
		/* this.setState({ artist }) */

		// Si quisiera aplicar "destructuring" para volcar datos en "artist" pero el origen de los datos se llamara 'resultsOfData' lo haría así:
		/* this.setState({ artist:resultsOfData }) */
	}

	_handlerOfSelectedItem = (identifierOfItem, typeOfItem) => {
		if(typeOfItem === 'artistCard'){
			// El usuario quiere listar los álbumes de un artista
			spotifyApi.retrieveAlbums(identifierOfItem)
				.then(albums => this._handlerResultsOfSearchForAlbums(albums))
				.catch(error => this._handlerError(error));
		}else if(typeOfItem === 'albumCard'){
			// El usuario quiere listar los tracks...
			spotifyApi.retrieveTracks(identifierOfItem)
				.then(tracks => this._handlerResultsOfSearchForTracks(tracks))
				.catch(error => this._handlerError(error));
		}
	}

	_handlerResultsOfSearchForAlbums = (albums) => {
		const resultsFixed = this.fixResultsWithoutPictures(albums)

		/* Buen ejemplo de como hacer destructuring data seteando valores nuevos a la vez */
		this.setState({ results:resultsFixed, textForButtonInCards: 'List of tracks', typeOfElement: 'albumCard', tracksResults: [] })
	}

	_handlerResultsOfSearchForTracks = (tracks) => {
		const resultsFixed = this.fixResultsWithoutPreviewUrl(tracks)

		this.setState({ results: [], textForButtonInCards: 'Listen the song', typeOfElement: 'trackCard', tracksResults:resultsFixed })
	}

	render() {
		return (
			<div className="container">
				<div className="jumbotron mt-4">
					<div className="row d-flex justify-content-center mb-4">
						<h1>Spotify With React</h1>
					</div>
					<div className="row d-flex justify-content-center">
						<p className="lead">Find an artist and get information through the Spotify API</p>
					</div>
					<div className="row d-flex justify-content-center mt-4 mb-4">
						<form className="form-inline" action method="GET" onSubmit={this._handlerOnSubmit} >
							<label className="sr-only" htmlFor="input_search">Search Artist</label>
							<input type="text" className="form-control mb-4 mr-sm-4" id="input_search" name="input_search" placeholder="Search name of artist..." autofocus required 
								onChange={this._handlerOnChange} 
								ref={this.focusOnInputField} 
								value={this.state.input} 
							/>
							<button type="submit" id="search_button" className="btn btn-primary mb-4">Search!</button>
						</form>
					</div>
				</div>
				<BlockListCardWithPhoto 
					onSelectItem={this._handlerOfSelectedItem} 
					resultsOfSearch={this.state.results} 
					textForButton={this.state.textForButtonInCards} 
					typeOfElement={this.state.typeOfElement} 
				/>
				<BlockListReducedCard 
					onSelectItem={this._handlerOfSelectedItem} 
					resultsOfSearch={this.state.tracksResults} 
					textForButton={this.state.textForButtonInCards} 
					typeOfElement={this.state.typeOfElement} 
				/>
			</div>
		);
	}
}


class BlockListCardWithPhoto extends React.Component {
	constructor(){
		super();
	}

	_handlerOnClick = (e) => {
		e.preventDefault();
		/* Gracias al 'getAttribute' recupero el valor de un atributo del elemento seleccionado */
		let identifierOfItem = e.target.getAttribute('identifier');
		let typeOfItem = e.target.getAttribute('typeOfElement');

		this.props.onSelectItem(identifierOfItem, typeOfItem);
	}

	render(){
		if(this.props.resultsOfSearch.length == 0){
			return ''
		}else{
			return (
				<div className="row d-flex justify-content-center mt-4 mb-4">
					<div id="listOfResults">
						{this.props.resultsOfSearch.map((item) => {
							return (
								<div className='card mb-4' identifier={item.id}>
									<div className='card-body'>
										<h5 className='card-title'>{item.name}</h5>
										<a href='#' 
											identifier={item.id} 
											onClick={this._handlerOnClick} 
											typeOfElement={this.props.typeOfElement} 
											className='btn btn-primary artist-card'>{this.props.textForButton}
										</a>
									</div>
									<img className='card-img-bottom img-square' src={item.images[0]['url']} alt='Card image cap' />
								</div>
							)
						})}
					</div>
				</div>
			)
		}
	}
}


class BlockListReducedCard extends React.Component {
	constructor(){
		super();
	}

	_handlerOnClick = (e) => {
		e.preventDefault();
		/* Gracias al 'getAttribute' recupero el valor de un atributo del elemento seleccionado */
		let identifierOfItem = e.target.getAttribute('identifier');
		let typeOfItem = e.target.getAttribute('typeOfElement');
		let previewURL = e.target.getAttribute('data-preview_url');


		/* Ahora debo lanzar el modal con los datos aquí recopilados */
		//this.props.onSelectItem(identifierOfItem, typeOfItem);
	}

	render(){
		if(this.props.resultsOfSearch.length == 0){
			return ''
		}else{
			return (
				<div className="row d-flex justify-content-center mt-4 mb-4">
					<div id="listOfResults">
						{this.props.resultsOfSearch.map((item) => {
							return (
								<div className='card mb-4' identifier={item.id}>
									<div className='card-body'>
										<h5 className='card-title'>{item.artists[0]['name']} - {item.name}</h5>
										<p className='card-text'>Track number: {item.track_number}</p>
										<a href='#' 
											data-preview_url={item.preview_url} 
											identifier={item.id} 
											onClick={this._handlerOnClick} 
											typeOfElement={this.props.typeOfElement} 
											className='btn btn-success song-card'>{this.props.textForButton}
										</a>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			)
		}
	}
}


/* Renderizamos el componente global */
ReactDOM.render(<App />,
	document.getElementById('root'))

