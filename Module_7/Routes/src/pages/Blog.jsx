import React from 'react';

function Blog() {
    return (
        <>
        <h1>Blog</h1>
            <div>
            {
                Object.keys(posts).map((postID) => 
                <li key={postID}>
                    <Link to={`/posts/${postID}`}>{posts[postID].title}</Link>
                    </li>
            )
            }
            </div>
        </>
    )
}

export default Blog;