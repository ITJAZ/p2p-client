import { Link } from 'react-router-dom'

function Host() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <h1>I am Host</h1>
    </>
  );
}

export default Host;