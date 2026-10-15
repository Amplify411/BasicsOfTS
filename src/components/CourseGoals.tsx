// import type { ReactNode } from "react";

//Define the props as it is and after destructuring the props

//adding custom types
// type CourseGoalsType = {
//   title: string;
//   description: string;
// };

// adding interfaces
interface CourseGoalsType {
  title: string;
  description: string;
  id: number;
  onDelete: (id: number) => void;
}

//As it is as props

// function CourseGoals(props: { title: string; description: string }) {

//destructuring without using custom type/interface

// function CourseGoals({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// })

//destructuring with using custom type/interface

function CourseGoals({ title, description, id, onDelete }: CourseGoalsType) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// for utilizing the children of the component, we ought use the ReactNode type which is imported from react
// to define it you can use the keyword children as it name like,
// interface CourseGoalsType {
//   title: string;
//   children: ReactNode;
// }

// function CourseGoals({ title, children }: CourseGoalsType) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

export default CourseGoals;
