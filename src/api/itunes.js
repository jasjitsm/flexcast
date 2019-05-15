import axios from 'axios';
import { isLocalStorageDataExpired, getDateDaysFromNow } from 'utils/helpers';

const apiConfig = {
  baseUrl: 'https://itunes.apple.com',
  defaultSearchTerm: 'podcast',
  defaultMediaTipe: 'podcast',
  defaultResultCount: 200
};

/**
 * Gets a list of the top podcasts using the iTunes API, saves it to local storage,
 * and then returns it.
 */
export const getTopPodcasts = async () => {
  if (isLocalStorageDataExpired('topPodcastList') === false) {
    return JSON.parse(localStorage.getItem('topPodcastList'));
  } else {
    const searchResults = await getSearchedPodcasts();
    const topPodcastList = searchResults.data.results;
    const expiryDate = getDateDaysFromNow(1);
    const topPodcastCookie = { expires: expiryDate, data: topPodcastList };
    localStorage.setItem('topPodcastList', JSON.stringify(topPodcastCookie));
    return topPodcastCookie;
  }
}

/**
 * Queries the iTunes Search API and returns the result.
 * @param {string} searchTerm Search query.
 * @param {string} mediaType Type of media to search for.
 * @param {number} resultCount Maximum number of results.
 */
export const getSearchedPodcasts = async(searchTerm = apiConfig.defaultSearchTerm, mediaType = apiConfig.defaultMediaTipe, resultCount = apiConfig.defaultResultCount) => {
  return await axios.get(`${apiConfig.baseUrl}/search?media=${mediaType}&term=${searchTerm}&limit=${resultCount}`);
}