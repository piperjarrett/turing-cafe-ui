import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      number: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitRes = (event) => {
    event.preventDefault();
    const newRes = { id: Date.now(), ...this.state };
    this.props.addRes(newRes);
    this.props.postRes(newRes)
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: "", date: "", time: "", number: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Name"
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type="text"
          name="date"
          value={this.state.date}
          placeholder="Date (mm/dd)"
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type="text"
          name="time"
          value={this.state.time}
          placeholder="Time"
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type="text"
          name="number"
          value={this.state.number}
          placeholder="Number of guests"
          onChange={(e) => this.handleChange(e)}
        />
        <button className="reserve" onClick={(e) => this.submitRes(e)}>
          Make Reservation
        </button>
      </form>
    );
  }
}

export default Form;
