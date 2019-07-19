import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";

class Loader extends Component {
  state = {
    progress: null
  };

  componentDidMount() {
    const tick = () => {
      if (this.state.progress >= 100) {
        this.setState({
          progress: 0
        });
      } else {
        this.setState({
          progress: this.state.progress + 1
        });
      }
    };

    this.timer = window.setInterval(tick, 10);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }
  render() {
    const { classes } = this.props;
    console.log(this.state);
    return (
        <CircularProgress  variant="determinate" value={this.state.progress} />
    );
  }
}

export default Loader;
