import { IconPlus } from "@tabler/icons-react";

const AddTask = ({ setToggleInput }) => {
  return (
    <button className="add-task-icon">
      <IconPlus onClick={() => setToggleInput(true)} />
    </button>
  );
};
export default AddTask;
