import React from "react";
import { connect } from "react-redux";

class ReturnDefaultButton extends React.Component {
  render() {
    return (
      <div>
        {this.props.showSlider ? (
          <div>
            <button
              className="btn btn-primary btn-block mt-5"
              style={{
                width: 175,
                borderRadius: "2px",
                border: 0,
                backgroundColor: "#d42f2f",
                fontSize: 13,
              }}
              onClick={this.props.handleReturnDefaultButton}
            >
              reset image
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { showSlider: state.showSlider };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleReturnDefaultButton: () => {
      dispatch({
        type: "HANDLE_RETURN_DEFAULT_BUTTON",
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReturnDefaultButton);
