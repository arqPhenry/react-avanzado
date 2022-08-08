import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import { FavsWithQuery } from '../containers/FavsWithQuery';
import { Span } from '../components/styles/userPageStyles';
import userkitty from '../assets/user.png';
import '../components/styles/userPageStyles.scss';

const User = ({ favs = [] }) => {
  const { state, logOut } = useContext(AppContext);
  return (
    <div className='user-container'>
      <h1>User dashboard</h1>
      <div className='presentacion'>
        <figure><img src={userkitty} /></figure>
        <div className='buttons'>
          <Span isLoged={state.isLoged}>{state.isLoged ? 'Loged' : 'Disconnected'}</Span>
          {state.isLoged && <button onClick={() => logOut()}>Log out</button>}
        </div>
      </div>
      <h2>{state.isLoged ? 'Hi! Man' : "You aren't loged, login to see your information"}</h2>
      <div className='recent-activity'>
        {state.isLoged
          ? <>
            <h3>Recent activity:</h3>
            <FavsWithQuery />
          </>
          : ''}
      </div>
    </div>

  );
};

export { User };
