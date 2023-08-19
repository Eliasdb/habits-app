const useGetHoursInDay = (setHours, days: [Date], index: number): Date[] => {
  if (days[index]) {
    const hoursArray = [];
    for (let i = 0; i < 23; ++i) {
      // takes day and adds an hour each iteration
      const hourOfDay = days[index].setTime(
        days[index].getTime() + 60 * 60 * 1000
      );
      const hour = new Date(hourOfDay);
      hoursArray.push(hour);
    }

    hoursArray.push(new Date(days[index] - 60 * 60 * 1000 * 23));

    setHours(hoursArray);

    return hoursArray;
  }
};

export default useGetHoursInDay;
