import React, { useState } from "react";

function VotingComponent({ array1, array2 }) {
  const [index, setIndex] = useState(0);
  const [votes, setVotes] = useState({});

  const handleVote = (winner, loser) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [winner]: (prevVotes[winner] || 0) + 1,
      [loser]: prevVotes[loser] || 0,
    }));
    setIndex((prevIndex) => prevIndex + 2);
  };

  const remaining1 = array1.slice(index);
  const remaining2 = array2.slice(index);
  if (remaining1.length < 2 || remaining2.length < 2) {
    return <div>No more items to vote on.</div>;
  }
  const item1 = remaining1[0];
  const item2 = remaining2[0];

  return (
    <div>
      <div>
        <button onClick={() => handleVote(item1, item2)}>{item1}</button>
        <span>{votes[item1] || 0}</span>
      </div>
      <div>
        <button onClick={() => handleVote(item2, item1)}>{item2}</button>
        <span>{votes[item2] || 0}</span>
      </div>
    </div>
  );
}



export default VotingComponent