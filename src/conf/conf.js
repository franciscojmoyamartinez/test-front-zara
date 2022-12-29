const globalConf = {
  env: 'development',
  urlApi: 'https://api.allorigins.win/raw?url=https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
  urlApiObtainDetailPodCast: 'https://itunes.apple.com/lookup?id=',
};
  
// return env conf; develop or production
const envFunction = () => {
  // OVERRIDES
  if (process.env.NODE_ENV) {
    globalConf.env = process.env.NODE_ENV;
  }
  if (process.env.REACT_APP_URLAPI) {
    globalConf.urlApi = process.env.REACT_APP_URLAPI;
  }
  if (process.env.REACT_APP_URLAPIOBTAINDETAIL) {
    globalConf.urlApiObtainDetailPodCast = process.env.REACT_APP_URLAPIOBTAINDETAIL;
  }
  return globalConf;
};

export default envFunction();
  