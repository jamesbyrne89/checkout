const ENDPOINTS = {
  GET_POSTS: 'https://cko-dev-test.firebaseio.com/cko/jamesbyrne89/posts.json',
  ADD_POST: 'https://cko-dev-test.firebaseio.com/cko/jamesbyrne89/posts.json',
  EDIT_POST: id =>
    `https://cko-dev-test.firebaseio.com/cko/jamesbyrne89/posts/${id}.json`,
  DELETE_POST: id =>
    `https://cko-dev-test.firebaseio.com/cko/jamesbyrne89/posts/${id}.json`
};

export default ENDPOINTS;
