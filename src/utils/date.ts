/*
Returns the week day of the given unix timestamp
e.g: 1639663580 returns Thursday
 */
export const getWeekDayLong = (day: number) => {
  const date = new Date(day * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
  });
  return date;
};
/*
Returns the week day of the given unix timestamp
e.g: 1639663580 returns Thu
 */
export const getWeekDayShort = (day: number) => {
  const date = new Date(day * 1000).toLocaleDateString('en-US', {
    weekday: 'short',
  });
  return date;
};

// Returns time in the format HH:MM AM/PM from unix timestamp
export const getTime = (time: number) => {
  const current = new Date(time * 1000).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return current;
};
