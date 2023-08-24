import {
  InputFieldBullet,
  LifeBulletsTitle,
  MonthBullets,
  WeekBullets,
  YearBullets,
} from "../molecules";

import { useEffect, useState } from "react";
import useGet80Years from "../hooks/useGet80Years";

const LifeBullets = () => {
  const [data, setData] = useState();
  const [dob, setDob] = useState("01/01/01");

  useEffect(() => {
    const yearsMonthsWeek = useGet80Years(dob);
    setData(yearsMonthsWeek);
  }, [dob]);

  return (
    <main className="life-bullets-container">
      <LifeBulletsTitle />
      <InputFieldBullet dob={dob} setDob={setDob} />
      <YearBullets data={data} />
      <MonthBullets data={data} />
      <WeekBullets data={data} />
    </main>
  );
};
export default LifeBullets;
