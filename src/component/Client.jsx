import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

function Client() {
  const params = useParams();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <h1>I am Client {params.roomId}</h1>
    </>
  );
}

export default Client;