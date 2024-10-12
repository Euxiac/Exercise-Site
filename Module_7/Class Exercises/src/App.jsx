/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import UserList from './component/UserList';
import CountdownTimer from './component/CountdownTimer';
import Counter from './component/Counter';

function App() {
  return (
    <div>
      <h1>Class Exercises</h1>
      <UserList/>
      <CountdownTimer/>
      <Counter/>
    </div>
  );
}

export default App;
