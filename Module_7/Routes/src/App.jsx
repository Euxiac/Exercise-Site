import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import Contact from './pages/Contact';
import Services from './pages/Services';
import NoPage from './pages/NoPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <PostList/>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/posts/:id" element={<Post />} /> {/* Dynamic Route */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

const Home = () => <h1>Home Page</h1>;

const About = () => <h1>About Page</h1>;

const posts = {
  1: { title: 'Post 1', content: 'This is the array content for Post 1.' },
  2: { title: 'Post 2', content: 'This is the array content for Post 2.' },
  3: { title: 'Post 3', content: 'This is the array content for Post 3.' },
};
//<Link to="/posts/1">Post 1</Link></li>

const PostList = () => 
{
  return(
    <div>
    {
      Object.keys(posts).map((postID) => 
        <li key={postID}>
            <Link to={`/posts/${postID}`}>{posts[postID].title}</Link>
          </li>
      //<li><Link to="/posts/1">Post {post.title}</Link></li>
    )
    }
    </div>
  )
}

function Post() {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const post = posts[id];

  return (
    <>
    { post ?
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
    :
    <div>
    <h1>Post not found</h1>
    </div>
    }
    </>
  );
}

export default App;