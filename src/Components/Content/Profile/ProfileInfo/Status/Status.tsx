import React from "react";
import "./status.module.scss";

type status = {
  status: any;
  editMode: boolean;
};

export class Status extends React.Component<any, any> {
  statusRef: any = React.createRef();
  state: status = {
    status: this.props.status,
    editMode: false,
  };
  activatedEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivatedEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onChangeInput = (e: any) => {
    console.warn("onChangeInput");
    this.setState({
      status: e.currentTarget.value,
    });
  };
  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<any>,
    snapshot?: any
  ) {
    if (this.props.status !== prevProps.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div className="status">
        {this.state.editMode ? (
          <div>
            <input
              onChange={this.onChangeInput}
              ref={this.statusRef}
              className="input"
              value={this.state.status}
              autoFocus={true}
              onBlur={this.deactivatedEditMode}
            />
          </div>
        ) : (
          <div className="textStatus" onClick={this.activatedEditMode}>{`${
            this.props.status || "none"
          }`}</div>
        )}
      </div>
    );
  }
}
