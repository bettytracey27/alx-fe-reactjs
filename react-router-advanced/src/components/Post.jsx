import React from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
  const { id } = useParams();
  return (
    <div>
      <h1>Post {id}</h1>
      <p>This is a dynamic route for post id: {id}</p>
      <p>In a real app you'd fetch the post by id.</p>
    </div>
  );
}
