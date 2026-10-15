import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalsList from "./components/CourseGoalsList";
import NewGoal from "./components/NewGoal";

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};

function App() {
  //we can also export types

  //while defining a type in the useState,make sure to send the type as a params after useState as it is considered as generic type
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  function handleAddGoals(title:string,description:string) {
    setGoals((prevGoals) => {
      const id = Math.floor(Math.random() * 100);
      const newGoal: CourseGoalType = {
        id: id,
        title: title,
        description: description,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoals(id: number) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "my goals List" }}>
        <h1>List of My Goals</h1>
      </Header>
      <NewGoal onGoalsAdd={handleAddGoals} />
      <CourseGoalsList goals={goals} onDeleteGoals ={handleDeleteGoals} />
    </main>
  );
}

export default App;
