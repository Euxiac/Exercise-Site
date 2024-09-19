import './App.css'
function App() {
  const name = "John"
  const message = " Finding the answers to these questions isn’t difficult, but getting any kind of new tool set up can be time-consuming. And that can be a barrier to moving forward, even if you know it would be beneficial for your business."
  return (
    <>
      <div className="greeting-card">
        {/* Main title */}
        <h1>Hello, {name} </h1>
        {/* Greeting message */}
        <p>
          {message}
        </p>
        {/* Add more static JSX elements */}
        <div className="card-body">
          <p>This is your personalized greeting card!</p>
          {/* Adding an image */}
          <img
            src="https://via.placeholder.com/150"
            alt="Greeting"
            width="150"
            height="150"
          />
          {/* Static list of items */}
          <ul>
            <li>Stay positive</li>
            <li>Keep learning</li>
            <li>Enjoy coding!</li>
          </ul>
          {/* Footer message */}
          <footer>
            <p>Best wishes from the React team!</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
