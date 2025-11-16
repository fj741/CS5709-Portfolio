import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/api/blogs') 
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        blogs.map(blog => (
          <div key={blog._id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <small>Posted on {new Date(blog.createdAt).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default BlogPage;