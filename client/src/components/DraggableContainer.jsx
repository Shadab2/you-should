import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { todos as Todos } from "../data";
import DragColumns from "./DragColumns";

function DraggableContainer() {
  const [state, setState] = useState({
    todos: Todos,
    inProgress: [],
    completed: [],
  });

  const { todos, inProgress, completed } = state;

  const handleDragEnd = (results) => {
    const { source, destination } = results;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    let modifiedFrom = state[source.droppableId];
    let modifiedTo = state[destination.droppableId];
    const [removed] = modifiedFrom.splice(source.index, 1);
    modifiedTo.splice(destination.index, 0, removed);
    setState((prev) => ({
      ...prev,
      [source.droppableId]: modifiedFrom,
      [destination.droppableId]: modifiedTo,
    }));
  };

  const addTask = (id, todo) => {
    setState((prev) => ({
      ...prev,
      [id]: [
        ...state[id],
        {
          ...todo,
          id: Date.now(),
          src: "/assets/6.png",
          author: "Sweta",
        },
      ],
    }));
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="mt-5 flex gap-6 ">
        <DragColumns
          todos={todos}
          title="To Dos"
          id="todos"
          addTask={addTask}
        />
        <DragColumns
          todos={inProgress}
          title="In Progress"
          id="inProgress"
          addTask={addTask}
        />
        <DragColumns
          todos={completed}
          title="Completed"
          id="completed"
          addTask={addTask}
        />
      </div>
    </DragDropContext>
  );
}

export default DraggableContainer;
