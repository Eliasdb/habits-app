const useGetMonths = (startDate: string, endDate: string): {}[] => {
  let months = [];
  let date = new Date(startDate);
  let endingDate = new Date(endDate);
  const monthNameList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  while (date <= endingDate) {
    let stringDate = monthNameList[date.getMonth()] + " " + date.getFullYear();

    //get first and last day of month
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    months.push([
      {
        str: stringDate,
        first: firstDay,
        last: lastDay,
      },
    ]);
    date.setMonth(date.getMonth() + 1);
  }

  const indexArray = [5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4];
  const newIndexArray = indexArray.map((i) => months[i]);

  return newIndexArray;
};

export default useGetMonths;

// const getNewArray = () => {

//   console.log(newIndexArray);
//   setMonths(newIndexArray);
// };
// useEffect(() => {
//   getNewArray();
// }, []);
