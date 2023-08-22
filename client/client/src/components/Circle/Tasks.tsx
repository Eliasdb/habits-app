import axios from "axios";
import { useEffect, useState } from "react";
const url = "http://localhost:3003/api/v1/tasks";

const Tasks = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <section className="task-items">
      {data?.map((item) => {
        return (
          <div>
            <p>{item.task}</p>
            <p>{item.category}</p>
            <p>{item.value}</p>;
          </div>
        );
      })}
    </section>
  );
};
export default Tasks;
