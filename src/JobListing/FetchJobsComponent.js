import React, {
 Component
}
from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FetchJobsComponent extends Component {
 constructor(props) {
  super(props);

  this.state = {
   posts: []
  };
 }

 componentDidMount() {
  axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`).then(res => {
   const posts = res.data.data.children.map(obj => obj.data);
   this.setState({
    posts
   });
  });
 }

 render() {
   return ( < div id = "FetchJobsId" >
    < h1 > {
     `/r/${this.props.subreddit}`
    } < /h1> < ul > {
     this.state.posts.map(post => < li key = {
      post.id
     } > {
      post.title
     } < /li>)} < /ul> < /div>);
    }
   }

   ReactDOM.render( < FetchJobsComponent subreddit = "reactjs" / > , document.getElementById('RedditFeeds'));

   export default FetchJobsComponent;
