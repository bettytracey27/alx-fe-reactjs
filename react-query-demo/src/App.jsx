import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

function PostsComponent() {
  const { isLoading, error, data, refetch } = useQuery('posts', () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
      res.json()
    )
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts!</p>;

  return (
    <div>
      <h2>Posts from JSONPlaceholder</h2>
      <button onClick={() => refetch()} style={{ marginBottom: '10px' }}>
        Refetch Posts
      </button>
      <ul>
        {data.slice(0, 10).map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: '20px' }}>
        <h1>React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;

