import type { ReactNode } from "react";
import type { CourseGoalType } from "../App";
import CourseGoals from "./CourseGoals";
import InfoBox from "./InfoBox";

type CourseGoalsListProp = {
  goals: CourseGoalType[];
  onDeleteGoals: (id: number) => void;
};

export default function CourseGoalsList({
  goals,
  onDeleteGoals,
}: CourseGoalsListProp) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        <p>You need to add goals for the day</p>
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high" >
        <p>Aren't you having a lot in your bucket</p>
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoals
                id={goal.id}
                title={goal.title}
                description={goal.description}
                onDelete={onDeleteGoals}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
