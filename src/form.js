import React from "react";

const Form = (props) => {
  console.log("this is props", props);
  return (
    <div className="formDiv">
      <form onSubmit={props.onSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={props.team.name}
            onChange={props.onChange}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            value={props.team.email}
            onChange={props.onChange}
          />
        </label>
        <label>
          Role:
          <input
            name="role"
            value={props.team.role}
            onChange={props.onChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
