import React, { useState, useEffect } from "react";
import "./PollWidget.css";

const PollWidget = () => {
  const pollOptions = [
    { id: 1, label: "Option A", votes: 0 },
    { id: 2, label: "Option B", votes: 0 },
    { id: 3, label: "Option C", votes: 0 },
  ];

  const [options, setOptions] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    // Load poll data from localStorage
    const savedPoll = JSON.parse(localStorage.getItem("pollData"));
    const votedStatus = localStorage.getItem("hasVoted") === "true";
    if (savedPoll) {
      setOptions(savedPoll);
    } else {
      setOptions(pollOptions);
    }
    setHasVoted(votedStatus);
  }, []);

  const handleVote = (id) => {
    if (hasVoted) return;

    const updatedOptions = options.map((option) =>
      option.id === id ? { ...option, votes: option.votes + 1 } : option
    );
    setOptions(updatedOptions);
    setHasVoted(true);

    // Save to localStorage
    localStorage.setItem("pollData", JSON.stringify(updatedOptions));
    localStorage.setItem("hasVoted", "true");
  };

  const totalVotes = options.reduce((total, option) => total + option.votes, 0);

  return (
    <div className="poll-widget">
      <h2>Poll</h2>
      <p>Select your favorite option:</p>
      <ul>
        {options.map((option) => (
          <li key={option.id} className={`option ${hasVoted ? "disabled" : ""}`}>
            <button onClick={() => handleVote(option.id)} disabled={hasVoted}>
              {option.label}
            </button>
            {hasVoted && (
              <span className="votes">
                {((option.votes / totalVotes) * 100 || 0).toFixed(1)}% ({option.votes} votes)
              </span>
            )}
          </li>
        ))}
      </ul>
      {hasVoted && <p>Thank you for voting!</p>}
    </div>
  );
};

export default PollWidget;
