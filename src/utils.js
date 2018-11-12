/**
 * calculates the difference between two time stamps converting it into a user friendly string
 * @param {number} current The current time stamp in milliseconds
 * @param {number} previous The previos time stamp in milliseconds
 */
const timeDifference = (current, previous) => {
  const milliSecondsPerMinute = 60 * 1000;
  const milliSecondsPerHour = milliSecondsPerMinute * 60;
  const milliSecondsPerDay = milliSecondsPerHour * 24;
  const milliSecondsPerMonth = milliSecondsPerDay * 30;
  const milliSecondsPerYear = milliSecondsPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < milliSecondsPerMinute / 3) {
    return 'just now';
  }

  if (elapsed < milliSecondsPerMinute) {
    return 'less than 1 min ago';
  } else if (elapsed < milliSecondsPerHour) {
    return Math.round(elapsed / milliSecondsPerMinute) + ' min ago';
  } else if (elapsed < milliSecondsPerDay) {
    return Math.round(elapsed / milliSecondsPerHour) + ' h ago';
  } else if (elapsed < milliSecondsPerMonth) {
    return Math.round(elapsed / milliSecondsPerDay) + ' days ago';
  } else if (elapsed < milliSecondsPerYear) {
    return Math.round(elapsed / milliSecondsPerMonth) + ' month ago';
  } else {
    return Math.round(elapsed / milliSecondsPerYear) + ' years ago';
  }
};

/**
 * Calculates time that has elapsed ever since an operation happened
 * @param {datetime} datetime The time whose difference from now is to be computed
 */
export const timeAgo = (datetime) => {
  const now = new Date().getTime();
  const updated = new Date(datetime).getTime();
  return timeDifference(now, updated);
};
