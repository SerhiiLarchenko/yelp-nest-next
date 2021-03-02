export const workingHoursAdapter = (hours: any) => {
  console.log(hours);
  const working_hours: any = {};

  hours[0].open.forEach((day) => {
    switch (day.day) {
      case 0:
        working_hours.sun = { ...day };
        delete working_hours.sun.day;
        break;
      case 1:
        working_hours.mon = { ...day };
        delete working_hours.mon.day;
        break;
      case 2:
        working_hours.tue = { ...day };
        delete working_hours.tue.day;
        break;
      case 3:
        working_hours.wed = { ...day };
        delete working_hours.wed.day;
        break;
      case 4:
        working_hours.thu = { ...day };
        delete working_hours.thu.day;
        break;
      case 5:
        working_hours.fri = { ...day };
        delete working_hours.fri.day;
        break;
      case 6:
        working_hours.sat = { ...day };
        delete working_hours.sat.day;
        break;
      default:
        break;
    }
  });

  working_hours.hours_type = hours[0].hours_type;

  return working_hours;
};
