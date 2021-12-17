import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();
  
    const routeToShop = () => {
      history.push('/items-list');
    }
  
    return (
      <div className='home-container'>
        <button
          onClick={routeToShop}
          className='home-btn'
        >
          Home
        </button>
      </div>
    )
  }