import React from 'react';
const data = {
  name: 'John Doe',
  email: 'john.doe@example.com'
};


// UserProfile Component
const UserProfile = ({ user }) => {
  const Failure = <h1>Please Log in</h1>;
  const Success = <><h1>{user.name}</h1><h2>Email address is {user.email}</h2></>
  
  if(user !== null)
    { 
      if (user.name !== null && user.email !== null) return Success;
      else return Failure;
    }
    else return Failure;
  }

// LoginPage Component
const LoginPage = () => {
  // Pass `null` if user is not logged in, or `user` if logged in
  return (
    <>
    <UserProfile user={data}/>
    </>
  )
};


export default LoginPage;