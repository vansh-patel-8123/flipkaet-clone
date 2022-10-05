import Navbar from './Navbar';
import Banner from './Banner';
import { Box, styled } from '@mui/material';
import { Fragment } from 'react';

const Component = styled(Box)`
  padding: 10px 10px;
  background: #F2F2F2;
`;

function Home() {
  return (
    <Fragment>
      <Navbar />
      <Component>
        <Banner />
      </Component>
    </Fragment>

  )
}

export default Home;