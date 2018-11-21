import ApolloClient from "apollo-boost"
import React, { Component } from "react"
import { ApolloProvider } from "react-apollo"
import Launches from "./components/Launches"

const client = new ApolloClient({
	uri: "http://localhost:5000/graphql",
})

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div className="container">
					<h1>SpaceX Launches</h1>
					<Launches />
				</div>
			</ApolloProvider>
		)
	}
}

export default App
