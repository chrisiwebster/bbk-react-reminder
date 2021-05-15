import React from "react";

export const Tasks = () => {
  const tasks = [
    {
      id: 1,
      text: "I am a to do item",
      day: "25th July",
      reminder: true,
    },
    {
      id: 2,
      text: "I am another to do item",
      day: "30th July",
      reminder: true,
    },
    {
      id: 3,
      text: "Another one",
      day: "1st August",
      reminder: true,
    },
  ];
  return (
    <div>
      {tasks.map((task) => {
        return <h3>{task.text}</h3>;
      })}
    </div>
  );
};

Tasks.propTypes = {};
