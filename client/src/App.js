import ApolloClient from "apollo-boost"
import React, { Component } from "react"
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Launch from "./components/Launch"
import Launches from "./components/Launches"

const client = new ApolloClient({
	uri: "http://localhost:5000/graphql",
})

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<div className="container">
						<h1>SpaceX Launches</h1>
						<Route exact path="/" component={Launches} />
						<Route
							exact
							path="/launch/:flight_number"
							component={Launch}
						/>
					</div>
				</Router>
			</ApolloProvider>
		)
	}
}

export default App
