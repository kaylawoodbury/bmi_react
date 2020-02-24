import React from "react";

const Imperial = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <label htmlFor="weightlb">Weight</label>
      <input
        type="number"
        required
        placeholder="Weight in pounds"
        value={props.weightlb}
        name="weightlb"
        id="weightlb"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="heightin">Height</label>
      <input
        type="number"
        required
        placeholder="Height in inches"
        value={props.heightin}
        name="heightin"
        id="heightin"
        onChange={props.onChangeHandler}
      />
      <button id='calculate'>Calculate BMI</button>
    </form>
  );
};

export default Imperial;