const useGet80Years = (dob) => {
  let dateOfBirth = new Date(dob);
  let dateOfBirthCopy = new Date(dob);
  let dateOfBirthSecondCopy = new Date(dob);

  let today = new Date();
  const dobPlus80 = new Date(dateOfBirth.getTime() + 2524556160000);
  let birthYear = dateOfBirth.getFullYear();
  const deathYear = dobPlus80.getFullYear();
  const yearsMonthsWeeks = [
    { years: [], months: [], weeks: [], filteredMonths: [] },
  ];

  Date.prototype.addDay = function (days) {
    let date = new Date(this?.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  for (var i = birthYear; i < deathYear; i++) {
    yearsMonthsWeeks[0].years.push(birthYear);
    birthYear++;
  }

  while (dateOfBirth < dobPlus80) {
    yearsMonthsWeeks[0].months.push(
      dateOfBirth.toLocaleString("en", { month: "short" })
    );
    dateOfBirth.setMonth(dateOfBirth.getMonth() + 1);
  }

  while (dateOfBirthCopy < dobPlus80) {
    yearsMonthsWeeks[0].weeks.push(new Date(dateOfBirthCopy));
    dateOfBirthCopy = dateOfBirthCopy.addDay(7);
  }

  while (dateOfBirthSecondCopy < today) {
    yearsMonthsWeeks[0].filteredMonths.push(
      dateOfBirthSecondCopy.toLocaleString("en", { month: "short" })
    );
    dateOfBirthSecondCopy.setMonth(dateOfBirthSecondCopy.getMonth() + 1);
  }
  console.log(yearsMonthsWeeks);

  //   console.log(yearsMonthsWeeks);

  return yearsMonthsWeeks;
};

export default useGet80Years;
