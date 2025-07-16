import React, { useState, useEffect } from 'react';
import './css/Home.css';
import Navbar from './Navbar';
import Loader from './Loader';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
        </>
      )}
    </div>
  );
}

export default Home;
