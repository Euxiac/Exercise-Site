import React from "react";
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
};

// LoginPage Component
const LoginPage = (user) => {
  // Pass `null` if user is not logged in, or `user` if logged in

  const loginPage = (
    <>
      <h3>{user?.name}</h3>

      <h3>{user?.email}</h3>
    </>
  );

  const loggedOutPage = (
    <>
      <h3>Please Log In</h3>
    </>
  );
  const isLoggedIn = user ? loginPage : loggedOutPage;

  return isLoggedIn;
};

// UserProfile Component
const UserProfile = () => {
  const component = LoginPage(user);
  return <>{component}</>;
};

export default UserProfile;
