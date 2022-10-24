import { useState } from "react";
import {connect} from "react-redux";
import {helloAction} from "../actions/hello";
import Label from "../components/Label";

function HelloPage({hello, helloAction}) {
  const [value, setValue] = useState("");

  return (
    <div className="main_page">
      <h1>Hello</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)}/>
      <textarea></textarea>
      <button onClick={() => helloAction(value)}>TEST</button>
      <p>{hello}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
    hello: state.hello,
})

export default connect(mapStateToProps, {helloAction})(HelloPage);
