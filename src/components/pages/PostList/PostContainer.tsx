import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/shared/NavBar';
import Container from '@/components/shared/Container';

const PostContainer: React.FC = () => {

  return (
    <div>
      <NavBar/>
      <Container>
        <Outlet/>
      </Container>
    </div>
  )
};

export default React.memo(PostContainer);