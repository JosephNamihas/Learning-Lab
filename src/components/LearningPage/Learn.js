// Learn.js
import { Route, Link } from 'react-router-dom';
import Geography from './Geography';
import History from './History';
import Science from './Science';
import Library from './Library';
import Spanish from './Spanish';
import French from './French';

function Learn() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/learn/geography">Geography</Link>
          </li>
          <li>
            <Link to="/learn/history">History</Link>
          </li>
          <li>
            <Link to="/learn/science">Science</Link>
          </li>
          <li>
            <Link to="/learn/library">Library</Link>
          </li>
          <li>
            <Link to="/learn/spanish">Spanish</Link>
          </li>
          <li>
            <Link to="/learn/french">French</Link>
          </li>
        </ul>
      </nav>

      <Route path="/learn/geography" element={<Geography />} />
      <Route path="/learn/history" element={<History />} />
      <Route path="/learn/science" element={<Science />} />
      <Route path="/learn/library" element={<Library />} />
      <Route path="/learn/spanish" element={<Spanish />} />
      <Route path="/learn/french" element={<French />} />
    </div>
  );
}

export default Learn;
