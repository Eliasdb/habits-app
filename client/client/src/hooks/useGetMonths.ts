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

  return months;
};

export default useGetMonths;
