/**
 * calculates the difference between two time stamps converting it into a user friendly string
 * @param {number} current The current time stamp in milliseconds
 * @param {number} previous The previous time stamp in milliseconds
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

/**
 * Finds urls at the end of a tweet and replaces them with a link
 * @param {object} entities The entities object from the twitter api
 * @param {string} text The tweet text from the twitter api
 */
export const findAndReplaceUrl = (entities, text) => {
  const {
    urls: [tweetUrl],
    media,
  } = entities;
  let tweetMediaObject;

  if (media) [tweetMediaObject] = media;

  if (!tweetUrl && !tweetMediaObject) {
    return {
      text,
      url: null,
      hasUrl: false,
      expandedUrl: null,
      isTwitterUrl: false,
    };
  }

  const urlToMatch = tweetUrl ? tweetUrl.url : tweetMediaObject.url;
  const expandedUrl = tweetUrl
    ? tweetUrl.expanded_url
    : tweetMediaObject.expanded_url;
  const urlRegex = new RegExp(urlToMatch, 'gi');
  let newTweetText = text.replace(urlRegex, ' ');
  const isTwitterUrl = expandedUrl.includes('twitter');
  const halfUrlRegex = /https:\/\/(t.co\/[0-9a-zA-Z]{0,}.{0,})?/g;

  if (halfUrlRegex.test(newTweetText)) {
    newTweetText = newTweetText.replace(halfUrlRegex, ' ');
  }

  return {
    text: newTweetText,
    url: urlToMatch,
    expandedUrl,
    hasUrl: true,
    isTwitterUrl,
  };
};
