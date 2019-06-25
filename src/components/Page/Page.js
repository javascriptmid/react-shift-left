import React from 'react';
import Container from '@material-ui/core/Container';

import Styles from './Page.module.css';

export default function Page({ children, ...props }) {
  return (
    <Container maxWidth="md" className={Styles.Page}>
      <div {...props} className={Styles.Page}>
        {children}
      </div>
    </Container>
  );
}
