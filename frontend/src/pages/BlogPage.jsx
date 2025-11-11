import React from 'react'
import axios from "axios"

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    axios.get('http://localhost:5000/api/posts') // Update with your backend URL
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);



  return (
    <div>
      
    </div>
  )
}

export default BlogPage