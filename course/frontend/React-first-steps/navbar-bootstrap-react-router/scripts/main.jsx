'use strict';

// NICE! Object destructuring...
const { Component} = React
// const { BrowserRouter, Route, NavLink } = ReactRouterDOM
const { HashRouter, Route, NavLink } = ReactRouterDOM

class App extends Component {
    constructor() {
        super()
    }

    render() {
        // return <BrowserRouter>
        //     <div className="container">
        //         <NavBar />
        //         <Route exact path="/" component={Jumbotron} />
        //         <Route exact path="/" component={HomePage} />
        //         <Route path="/about" component={AboutPage} />
        //         <Route path="/contact" component={ContactPage} />
        //     </div>
        // </BrowserRouter>
        return <HashRouter>
            <div className="container">
                <NavBar />
                <Route exact path="/" component={Jumbotron} />
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
            </div>
        </HashRouter>
    }
}

function NavBar(props) {
    return <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">React Strap</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

function Jumbotron(props) {
    return <div className="jumbotron">
        <h1>Navbar example</h1>
        <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work.
            It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
        <p>
            <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a>
        </p>
    </div>
}

function HomePage(props) {
    return <div>
        <h1>Home Page</h1>
        <p>This is the home page</p>
    </div>
}

function AboutPage(props) {
    return <div>
        <h1>About Page</h1>
        <p>This is the about page</p>
    </div>
}

function ContactPage() {
    return <div>
        <h1>Contact Page</h1>
        <p>This is the contact page</p>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'))