import {connect} from "react-redux";
import {testAction} from "../actions/test";

function TestPage({test}) {
  return (
    <div className="main_page">
      <h1>test page</h1>
      <h1>{test}</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
    test: state.test,
})

export default connect(mapStateToProps, null)(TestPage);
