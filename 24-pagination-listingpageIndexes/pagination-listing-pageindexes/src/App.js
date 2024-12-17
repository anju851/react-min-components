import {useState, useEffect} from "react";
import axios from "axios";
import './App.css';
import Posts from "./components/Posts";
import Paginate from "./components/Paginate";

const url = "https://jsonplaceholder.typicode.com/posts";

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(()=>{
    const fetchPosts = async () =>{
      setLoading(true);
      const response = await axios.get(url);
      setPosts(response.data);
      setLoading(false);
    }

    fetchPosts();
  },[]);

  console.log(posts);

  //change page
  const paging = (pageNumber) => setCurrentPage(pageNumber);

  // Get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currentPost} loading={loading} />
      <Paginate postsPerPage={postsPerPage} totalPosts={posts.length} paging={paging} />
    </div>
  );
}

export default App;
