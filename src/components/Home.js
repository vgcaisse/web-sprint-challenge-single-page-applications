import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();
  
    const routeHome = () => {
      history.push('/');
    }
  
    return (
      <div className='home-container'>
        <button
          onClick={routeHome}
          className='home-btn'
        >
          Cancel
        </button>
      </div>
    )
  }