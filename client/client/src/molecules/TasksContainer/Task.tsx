import { astroDictionary } from "../../data/data";

const Task = ({ item }) => {
  return (
    <div className="tasks-inner">
      {astroDictionary[item.category]} <li>{item.task}</li>
    </div>
  );
};
export default Task;
