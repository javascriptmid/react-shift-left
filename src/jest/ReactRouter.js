import React from 'react';

jest.mock('react-router-dom', () => {
  function Link({ to, ...props }) {
    return <button {...props} onClick={jest.fn} />;
  }

  function Route(props) {
    return <div />;
  }

  return {
    Link,
    BrowserRouter: Route,
    Route,
  };
});
