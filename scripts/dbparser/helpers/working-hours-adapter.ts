import { americanTime } from './americanTime';

export const workingHoursAdapter = (hours: any) => {
  const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const working_hours = [];
  let income = [...hours[0].open];

  income = income.map((entry0) => {
    const filteredDays = income.filter((entry1) => entry1.day === entry0.day);
    if (filteredDays.length === 1)
      return {
        ...entry0,
        start: americanTime(entry0.start),
        end: americanTime(entry0.end),
        break_start: '',
        break_end: '',
      };

    const start = filteredDays
      .sort((d1, d2) => d1.start - d2.start)
      .map((day) => day.start);
    const end = filteredDays
      .sort((d1, d2) => d1.end - d2.end)
      .map((day) => day.end);

    return {
      ...entry0,
      start: americanTime(start[0]),
      break_start: americanTime(end[0]),
      break_end: americanTime(start[1]),
      end: americanTime(end[1]),
    };
  });

  while (income.length > 0) {
    const entry = {
      days: [],
      start: income[0].start,
      end: income[0].end,
      break_start: income[0].break_start,
      break_end: income[0].break_end,
    };

    if (income.length === 1) {
      entry.days.push(week[income[0].day]);
      working_hours.push(entry);
      income.splice(0, 1);
      break;
    }

    income.forEach((day) => {
      if (
        day.start === entry.start &&
        day.end === entry.end &&
        !entry.days.includes(week[day.day])
      ) {
        entry.days.push(week[day.day]);
      }
    });

    working_hours.push(entry);
    income = income.filter(
      (day) => day.start !== entry.start || day.end !== entry.end,
    );
  }

  return working_hours;
};
