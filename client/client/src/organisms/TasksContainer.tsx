import { useEffect, useState } from "react";
import { TaskForm, Tasks, TasksList } from "../molecules";

import axios from "axios";
import { url } from "./../data/data";

const TasksContainer = ({
  toggleInput,
  handleSubmit,
  setToggleMiddle,
  setTask,
  toggleMiddle,
  addItem,
  task,
  category,
  icon,
}) => {
  const [listView, setListView] = useState(false);
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url);
        console.log(response);
        const taskData = response.data;
        //   const sortedBy = taskData.sort((a, b) => b.category - a.category);
        setTaskData(taskData);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [addItem]);
  return (
    <>
      {listView ? (
        <TasksList taskData={taskData} category={category} icon={icon} />
      ) : (
        <Tasks
          setListView={setListView}
          listView={listView}
          addItem={addItem}
          taskData={taskData}
          task={task}
          category={category}
        />
      )}
    </>
  );
};
export default TasksContainer;
