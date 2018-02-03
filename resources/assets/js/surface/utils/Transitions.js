import React from 'react'
import {Transition} from 'react-transition-group'

export const FadeIn = ({in: inProp, axis = 'Y', duration = 250, children, className}) => {
  const defaultStyle = {
    transition: `all ${duration}ms ease-out`,
    opacity: 0,
    display: 'block',
    width: '100%',
    height: 'auto',
    position: 'relative'
  };
  const transitionStyles = {
    entering: {
      opacity: 0,
      transform: `translate${axis}(15px)`
    },
    entered: {
      opacity: 1,
      transform: `translate${axis}(0px)`
    },
  };
  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
          <div className={className} style={{
              ...defaultStyle,
              ...transitionStyles[state],
          }}>
              {children}
          </div>
      )}
    </Transition>
  );
};
