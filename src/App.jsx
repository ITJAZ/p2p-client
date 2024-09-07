import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/host">Host a room</Link>
          </li>
          <li>
            <Link to="/client">Join a room as a client</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default App
