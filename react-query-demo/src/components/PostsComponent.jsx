import React from 'react';
import { useQuery } from 'react-query';

export default function PostsComponent() {
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
