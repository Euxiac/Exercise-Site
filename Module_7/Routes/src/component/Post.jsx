import React from 'react';

function Post() {
    const { id } = useParams(); // Get the dynamic ID from the URL
    return (
      <div>
        <h1>Post {id}</h1>
        <p>This is the content for post {id}.</p>
      </div>
    );
  }
  
  export default Post;