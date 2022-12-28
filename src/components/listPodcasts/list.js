import React from 'react';
import listReq from '../../api/getListPodcast';
import template from '../../views/listPodcasts/list.jsx';

class ListPodcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewList: false,
      data: [],
    };
  }
  componentDidMount(){
    this.listRequest(this);
  }

  listRequest() {
    listReq()
      .then((res) => {
        // set the response in class states
        const dataArray = [];
        if (res.data.feed.entry.length > 0) {
          
          res.data.feed.entry.forEach((element) => {
            dataArray.push({
              'podcastId' : element.id.attributes['im:id'],
              'title' : element.title.label,
              'author' : element['im:artist'].label,
              'img' : element['im:image'][2].label,
            });
          });
          this.setState({
            data: dataArray,
            viewList: true,
          });
        } else {
          this.setState({
            viewList: true,
            data: [],
          });
        }
      })
      .catch(() => {
      });
  }

  render() {
    return template(this);
  }
}


export default ListPodcast
