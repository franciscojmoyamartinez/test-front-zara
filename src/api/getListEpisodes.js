import axios from 'axios';

import gConf from '../conf/conf';

const getListEpisodes = (episodeId) => {
  const payload = {
  };

  return axios.get(`${gConf.urlApiObtainDetailPodCast}${episodeId}&country=US&media=podcast&entity=podcastEpisode&limit=100`, payload);
};

export default getListEpisodes;
