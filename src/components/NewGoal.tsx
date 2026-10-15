import { useState, type SubmitEvent } from "react";

type NewGoalType = {
  onGoalsAdd: (id: string, description: string) => void;
};

export default function NewGoal({ onGoalsAdd }: NewGoalType) {
  const [goals, setGoals] = useState("");
  const [summary, setSummary] = useState("");

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    onGoalsAdd(goals, summary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="yourGoal">Your Goal</label>
        <input
          id="yourGoal"
          type="text"
          onChange={(e) => setGoals(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input
          id="summary"
          type="text"
          onChange={(e) => setSummary(e.target.value)}
        />
      </p>
      <button>Add Goal</button>
    </form>
  );
}
