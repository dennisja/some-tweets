/**
 * Pluralizes a time interval
 * @param {number} number The duration of the interval
 * @param {string} textInSingular The interval definition
 */
const pluralizeTimeInterval = (number, textInSingular) =>
  `${number} ${textInSingular}${number === 1 ? '' : 's'}`;

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
    return (
      pluralizeTimeInterval(Math.round(elapsed / milliSecondsPerHour), 'hr') +
      ' ago'
    );
  } else if (elapsed < milliSecondsPerMonth) {
    return (
      pluralizeTimeInterval(Math.round(elapsed / milliSecondsPerDay), 'day') +
      ' ago'
    );
  } else if (elapsed < milliSecondsPerYear) {
    return (
      pluralizeTimeInterval(
        Math.round(elapsed / milliSecondsPerMonth),
        'month',
      ) + ' ago'
    );
  } else {
    return pluralizeTimeInterval(
      Math.round(elapsed / milliSecondsPerYear),
      'yr',
      ' ago',
    );
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

export function getAPhotoFromEntities({ extended_entities, retweeted_status }) {
  let hasPhoto = false;
  let photoUrl = null;

  const { media = [] } = extended_entities || {};
  const { entities = {} } = retweeted_status || {};

  function getPhotoFromMediaObject(mediaObject) {
    if (mediaObject.type === 'photo') {
      hasPhoto = true;
      photoUrl = mediaObject.media_url_https;
      return;
    }
  }

  if (media && media.length >= 1) {
    media.forEach(getPhotoFromMediaObject);
  }

  if (!hasPhoto && entities && entities.media && entities.media.length >= 1) {
    entities.media.forEach(getPhotoFromMediaObject);
  }

  return { hasPhoto, photoUrl };
}

export const getItemFromLocalStorage = (itemKey) => {
  try {
    return JSON.parse(localStorage.getItem(itemKey));
  } catch (e) {
    return null;
  }
};

export const addItemToLocalStorage = (itemKey, item) => {
  try {
    localStorage.setItem(itemKey, JSON.stringify(item));
    return true;
  } catch (e) {
    return null;
  }
};
