'use strict';

// NICE! Object destructuring...
const { Component } = React
// const { BrowserRouter, Route, NavLink } = ReactRouterDOM
const { HashRouter, Route, NavLink, withRouter } = ReactRouterDOM

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return <HashRouter>
            <div className="container">
                <Route exact path="/" component={SearchWithRouter} />
                <Route path="/search/:query" component={Results} />
            </div>
        </HashRouter>
    }
}

class Search extends Component {
    constructor() {
        super()

        this.state = {
            query: ''
        }
    }

    keepQuery(query) {
        this.setState({ query })
    }

    search() {
        if (this.state.query)
            this.props.history.push(`/search/${this.state.query}`)
    }

    render() {
        return <form onSubmit={e => { e.preventDefault(); this.search() }}>
            <input type="text" onChange={e => this.keepQuery(e.target.value)} />
        </form>
    }
}

const SearchWithRouter = withRouter(Search)

class Results extends Component {
    constructor() {
        super()

        this.state = {
            beers: []
        }
    }

    loadBeers(query) {
        beersApi.search(query)
            .then(beers => this.setState({ beers }))
            .catch(console.error)
    }

    componentDidMount() {
        console.log('Results did mount')

        this.loadBeers(this.props.match.params.query)
    }

    componentWillReceiveProps(props) {
        console.log('Results will receive props')

        this.loadBeers(props.match.params.query)
    }

    componentWillUnmount() {
        console.log('Results will unmount')
    }

    render() {
        return <div><h1>{this.props.match.params.query}</h1>
            <ul>
                {this.state.beers.map(beer => <li key={beer.id}>{beer.name}</li>)}
            </ul>
        </div>
    }

}

ReactDOM.render(<App />, document.getElementById('root'))