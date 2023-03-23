import React, { useState, useEffect } from 'react';
import NavBar from '@/components/shared/NavBar';
import Container from '@/components/shared/Container';
import PostList from '../PostList';
import { useGetPostsQuery } from '@/service/homeService';
import { DataIsLoading, ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';

const Home: React.FC = () => {
  
  const [ posts, setPosts] = useState<PostProps[]>([]);
  const { data, isLoading, error } = useGetPostsQuery('all');

  useEffect(() => {

    if(data){
      setPosts(data);
    }

  }, [isLoading]);

  return (
    <div>
      <NavBar/>
      <Container>
        <div>
          <h2 className='text-4xl font-bold my-5'>最新文章</h2>
          
          { isLoading && <DataIsLoading/>}
          { error && <ErrorInfo/>}

          {/* Display Post Title */}
          { data && posts.map( post => <PostList key={post.id}{...post} />) }
        </div>
      </Container>
    </div>
  )
};

export default React.memo(Home);