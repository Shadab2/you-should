import React, { useContext, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { DataContext } from "../context/context";
import { update_tasks } from "../context/DataActions";
import DragColumns from "./DragColumns";

function DraggableContainer() {
  const { tasks, dispatch, user, ...Other } = useContext(DataContext);
  const [state, setState] = useState(tasks);
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
    dispatch(update_tasks(state));
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
          author: user.username,
        },
      ],
    }));
  };

  useEffect(() => {
    try {
      const data = {
        tasks: state,
        user,
        ...Other,
      };
      localStorage.setItem("data", JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }, [state, dispatch]);

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
