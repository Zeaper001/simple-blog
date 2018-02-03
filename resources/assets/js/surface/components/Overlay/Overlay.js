import React from 'react'
import {FadeIn} from '../../utils/Transitions'

class Overlay extends React.Component {
  constructor() {
    super()
    this.state = {
      fade: false
    }
  }

  componentDidMount() {
    this.setState({fade: true})
  }

  render() {
    const active = this.props.active && 'shown'
    const {className, children} = this.props
    return (
      <div className={`Surface--Overlay ${active}`}>
       <FadeIn in={this.state.fade} axis={'X'} className={'white-bg'}>
        {children}
       </FadeIn>
      </div>
    )
  }
}

export default Overlay;
