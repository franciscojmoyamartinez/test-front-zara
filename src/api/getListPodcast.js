import axios from 'axios';

import gConf from '../conf/conf';

const listPodCast = () => {
  const payload = {
  };

  return axios.get(`${gConf.urlApi}`, payload);
};

export default listPodCast;
