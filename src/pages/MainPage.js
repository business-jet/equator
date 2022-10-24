import {connect} from "react-redux";
import {testAction} from "../actions/test";
import Label from "../components/Label";

function MainPage({test, testAction}) {
  return (
    <div className="main_page">
      <h1>main page</h1>
      <button onClick={() => testAction()}>TEST</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
    test: state.test,
})

export default connect(mapStateToProps, {testAction})(MainPage);
