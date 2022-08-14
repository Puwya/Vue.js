import axios from 'axios';

const url = 'http://localhost:3000/api/posts';

class Router {
  // Get Post
  static async GetPost() {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  // Create Post
  static CreatePost(data) {
    return axios.post(url, {
      data,
    });
  }

  // Delete Post
  static DeletePost(id) {
    return axios.delete(`${url}/${id}`);
  }
}

export default Router;
