import React, { Component } from "react";
import "./App.css";
import Reservations from "../Reservations/Reservations";
import Form from "../Form/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
      .then((resp) => resp.json())
      .then((data) => this.setState({ reservations: data }))
      .catch((err) => this.setState({ error: "Something went wrong" }));
  }

  addRes = (newRes) => {
    this.setState({ reservations: [...this.state.reservations, newRes] });
  };

  postRes = (newRes) => {
    const requestData = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newRes),
    };
    fetch("http://localhost:3001/api/v1/reservations", requestData)
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => this.setState({ error: err.message }));
    this.componentDidMount();
  };

  deleteRes = (event) => {
    console.log(this.state.reservations);
    fetch(`http://localhost:3001/api/v1/reservations/${event.target.id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => this.setState({ reservations: data }))
      .catch((err) => this.setState({ error: "Something went wrong" }));
    console.log(this.state.reservations);
  };
  render() {
    console.log(this.state);
    return !this.state.reservations ? (
      <h1>One moment....</h1>
    ) : (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form addRes={this.addRes} postRes={this.postRes} />
        </div>
        <div className="resy-container">
          <Reservations
            reservations={this.state.reservations}
            deleteRes={this.deleteRes}
          />
        </div>
      </div>
    );
  }
}

export default App;
