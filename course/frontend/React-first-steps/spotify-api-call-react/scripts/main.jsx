/**
 *  Estructura de componentes:
 *
 * 		App
 * 			BlockListArtist
 * 
 */

'use strict';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			artist: [],
			input: ''
		}
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
			spotifyApi.searchArtists(valueOfInputTrimed);
			this.setState.input = valueOfInputTrimed;
		}
		this.setState({ input: '' })
	}

	_handlerError = (error) => {
		alert(error);
	}

	_handlerResultsOfSearchForArtist = (artist) => {
		// si llega una lista de artistas de la Api de Spotify...
		
		/* Utilizo una función para arreglar aquellas situaciones las que la API devuelve datos con diferente estructura, de todas esto sería responsabilidad de backend y no de front end!  */
		const resultsFixed = this.fixResultsOfArtistSearch(artist)

		this.setState({ artist:resultsFixed })

		// Aplico "destructuring" (JS ES 6) para volcar los datos en "artist" (Esto funcionará si el parámetro de entrada a esta función se llamara igual que el objeto destino de los datos)
		/* this.setState({ artist }) */

		// Si quisiera aplicar "destructuring" para volcar datos en "artist" pero el origen de los datos se llamara 'resultsOfData' lo haría así:
		/* this.setState({ artist:resultsOfData }) */
	}

	fixResultsOfArtistSearch(sourceData){
		for (let i = 0; i < sourceData.length; i++){
			for(let prop in sourceData[i]){
				if(sourceData[i].images.length === 0){
					// si el item no tiene imágenes, le establezco una por defecto
					//sourceData[i].images.push('images/default-artist.png'); 
					sourceData[i].images.push({height: 600, url: "images/default-artist.png", width: 600});
				}
			}
		}
		return sourceData;
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
				<BlockListArtist resultsOfArtistSearch={this.state.artist} />
			</div>
		);
	}
}


function BlockListArtist(props){
	if(props.resultsOfArtistSearch.length > 0){
		return (
			<div className="row d-flex justify-content-center mt-4 mb-4">
				<div id="listOfResults">
				{props.resultsOfArtistSearch.map((art) => {
					return (
						<div className='card mb-4' data-id={art.id}>
							<div className='card-body'>
								<h5 className='card-title'>{art.name}</h5>
								<a href='#' data-id={art.id} className='btn btn-primary artist-card'>List of albums</a>
							</div>
							<img className='card-img-bottom img-square' src={art.images[0]['url']} alt='Card image cap' />
						</div>
					)
				})}
				</div>
			</div>
		)
	}
	return '';
}


/* Renderizamos el componente global */
ReactDOM.render(<App />,
	document.getElementById('root'))

