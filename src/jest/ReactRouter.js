import React from 'react';

jest.mock('react-router-dom', () => {
  function Link({ to, ...props }) {
    return <button {...props} onClick={jest.fn} />;
  }

  return {
    Link,
    BrowserRouter: props => <div {...props} />,
    Route: props => <div {...props} />,
  };
});
