import React from "react";

const Imperial = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder="Weight in pounds"
        value={props.weightlb}
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder="Height in inches"
        value={props.heightin}
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <button id='calculate'>Calculate BMI</button>
    </form>
  );
};

export default Imperial;