import { useEffect, useState } from "react";
import useGet80Years from "../hooks/useGet80Years";
import {
  InputFieldBullet,
  MonthBullets,
  WeekBullets,
  YearBullets,
} from "../components";

const LifeBullets = () => {
  const [data, setData] = useState();
  const [dob, setDob] = useState("01/01/01");

  useEffect(() => {
    const yearsMonthsWeek = useGet80Years(dob);
    setData(yearsMonthsWeek);
  }, [dob]);

  return (
    <main className="lifetracker-container">
      <section className="tracker-title">
        <h3 className="text-xl">Stoic simulator</h3>
      </section>
      <InputFieldBullet dob={dob} setDob={setDob} />
      <YearBullets data={data} />
      <MonthBullets data={data} />
      <WeekBullets data={data} />
    </main>
  );
};
export default LifeBullets;
