import React, { Component } from "react";

import Form from "./components/Form";
import Message from "./components/Message";
import { calculateBmi } from "./helpers/bmiHelper";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height
    );
    
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  <switch>
    <Route exact path='/'component={App}></Route>
    <Route exact path='/imperial'component={Imperial}></Route>
  </switch>


  render() {
    return (
      <div>
        <h1>BMI Calculator</h1>
        <h3>Metric</h3>
        <h3 className="link"><a href="./src/imperial.jsx">Imperial</a></h3>
        
      <div>
        <Form
          weight={this.state.weight}
          height={this.state.height}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
          />
        )}
        
      </div>
      </div>
    );
  }
}

export default App;