import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <>
      <Navbar fixed='top' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://react-bootstrap.netlify.app/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Create Notes with react-typescript & react-bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  ) ;
};

export default Header;
