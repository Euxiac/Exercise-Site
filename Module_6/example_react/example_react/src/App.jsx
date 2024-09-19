import React from 'react';
import UserProfile from './UserProfile';
// import FeatureList from './FeatureList';
// import ContactInfo from './ContactInfo';

function App() {
  const user = {
    name: 'Jane Doe',
    age: 28,
    location: 'New York, USA'
  };

  const features = ['Fast performance', 'User-friendly design', 'Mobile-responsive', 'Secure data handling'];

  const contact = {
    email: 'janedoe@example.com',
    phone: '123-456-7890'
  };

  return (
    <div className="app">
      <UserProfile name={user.name} age={user.age} location={user.location} />
    </div>
  );
}

export default App;