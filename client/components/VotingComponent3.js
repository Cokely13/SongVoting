import React, { useState } from "react";

function VotingComponent3({ array1, array2 }) {
  const [index, setIndex] = useState(0);
  const [votes, setVotes] = useState({});

  const handleVote = (winner, loser) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [winner]: (prevVotes[winner] || 0) + 1,
      [loser]: prevVotes[loser] || 0,
    }));
    setIndex((prevIndex) => prevIndex + 1);
  };

  const remaining1 = array1.slice(index);
  const remaining2 = array2.slice(index);
  if (remaining1.length < 1 || remaining2.length < 1) {
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
      <div>
        <h2>Current Vote Totals:</h2>
        {Object.entries(votes).map(([item, count]) => (
          <div key={item}>
            {item}: {count}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VotingComponent3
