import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'John Woodrow',
    lastName: 'Wilson',
    likescore: 10,
  });

  function handlePlusClick() {
    // Use the updater function to update likescore correctly
    setPlayer((prev) => ({ ...prev, likescore: prev.likescore + 1 }));
  }

  function handleFirstNameChange(e: { target: { value: string } }) {
    // You can also use the updater function here
    setPlayer((prev) => ({ ...prev, firstName: e.target.value }));
  }

  function handleLastNameChange(e: { target: { value: string } }) {
    // Use the updater function instead of directly mutating the state
    setPlayer((prev) => ({ ...prev, lastName: e.target.value }));
  }

  return (
      <>
        <label>
          Like Score: <b>{player.likescore}</b>
          {'  '}
          <button onClick={handlePlusClick}>+1</button>
        </label>
        <label>
          First name:
          <input
              value={player.firstName}
              onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Last name:
          <input
              value={player.lastName}
              onChange={handleLastNameChange}
          />
        </label>
      </>
  );
}
