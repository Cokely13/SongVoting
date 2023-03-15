import React, { useState } from 'react';

const SongVoting = ({ songA, songB }) => {
  const [votes, setVotes] = useState({ songAVotes: 0, songBVotes: 0 });

  const handleVote = (song) => {
    if (song === 'A') {
      setVotes((prevState) => ({ ...prevState, songAVotes: prevState.songAVotes + 1 }));
    } else {
      setVotes((prevState) => ({ ...prevState, songBVotes: prevState.songBVotes + 1 }));
    }
  };

  const totalVotes = votes.songAVotes + votes.songBVotes;
  const songAPercentage = totalVotes ? (votes.songAVotes / totalVotes) * 100 : 0;
  const songBPercentage = totalVotes ? (votes.songBVotes / totalVotes) * 100 : 0;

  return (
    <div>
      <h2>Vote for your favorite song:</h2>
      <div>
        <h3>{songA}</h3>
        <button onClick={() => handleVote('A')}>Vote for Song A</button>
        <p>{songAPercentage.toFixed(2)}%</p>
      </div>
      <div>
        <h3>{songB}</h3>
        <button onClick={() => handleVote('B')}>Vote for Song B</button>
        <p>{songBPercentage.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default SongVoting;
