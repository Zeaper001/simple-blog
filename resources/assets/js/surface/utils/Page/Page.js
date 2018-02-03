import React from 'react';
import {FadeIn} from '../../utils/Transitions'

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      fade: false
    }
  }

  componentDidMount() {
    this.setState({
      fade: true
    });
  }

  render() {
    return (
      <FadeIn in={this.state.fade}>
        {this.props.children}
      </FadeIn>
    )
  }
}

export default Page;
