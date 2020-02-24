import React, { Component } from "react";

import Form from "./components/Form";
import Message from "./components/Message";
import { calculateBmi } from "./helpers/bmiHelper";
import { calculateBmiImperial } from "./helpers/bmiHelper";
import Imperial from "./components/Formimperial";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: "",
    bmiValueImperial: "",
    bmiMessageImperial: "",
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height
    );
    const [bmiValueImperial, bmiMessageImperial] = calculateBmiImperial(
      this.state.weightlb,
      this.state.heightin
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage, bmiValueImperial: bmiValueImperial, bmiMessageImperial: bmiMessageImperial  });
  };



  render() {
    return (
      <div>
        <h1>Metric</h1>
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

        <h1>Imperial</h1>
      <div>
        <Imperial
          weightlb={this.state.weightlb}
          heightin={this.state.heightin}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
        {this.state.bmiValue && (
            <Message
              bmiValueImperial={this.state.bmiValueImperial}
              bmiMessageImperial={this.state.bmiMessageImperial}
            />
          )}

        </div>
      </div>
    );
  }
}

export default App;