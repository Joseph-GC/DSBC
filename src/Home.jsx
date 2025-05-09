import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const username = location.state?.username || "Guest";

  return (
    <div>
      <h2>Welcome, {username}!</h2>
    </div>
  );
}

export default Home;