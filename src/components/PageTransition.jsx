import React from 'react';
import { useTransition, animated } from '@react-spring/web';

const PageTransition = ({ children, location }) => {
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-100%)' }
  });

  return transitions((style, item) => (
    <animated.div style={style}>
      {children(item)}
    </animated.div>
  ));
};

export default PageTransition;
