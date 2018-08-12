import React, { Component } from 'react';
import { StyledApp, StyledPostsContainer } from './styles/styles';
import Header from './components/Header';
import Post from './components/Post';
import Modal from './components/Modal';
import EditPostForm from './components/EditPostForm';
import AddPostForm from './components/AddPostForm';
import Spinner from './components/Spinner';
import axios from 'axios';
import ENDPOINTS from './Api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: {},
      loading: false,
      modalOpen: false,
      mode: null,
      idToEdit: null,
      error: false
    };
  }

  fetchPosts = () => {
    this.setState({ loading: true });
    axios
      .get(ENDPOINTS.GET_POSTS)
      .then(resp =>
        this.setState({ posts: resp.data }, () => {
          setTimeout(() => {
            this.setState({ loading: false });
          }, 500);
        })
      )
      .catch(err => {
        this.setState({ loading: false, error: true });
        console.error(err);
      });
  };

  showErrorMessage = message => {
    return <div>{message}</div>;
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
    if (this.state.modalOpen) {
      // Clear out data
      this.setState({ idToEdit: null });
    }
  };

  handleAddPost = props => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      mode: 'add'
    });
  };

  handleEditPost = props => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      mode: 'edit',
      idToEdit: props.id
    });
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const { posts, loading, idToEdit, modalOpen, mode, error } = this.state;
    return (
      <StyledApp>
        <Header addPost={this.handleAddPost} />
        <StyledPostsContainer>
          {loading ? (
            <Spinner />
          ) : (
            Object.keys(posts)
              .sort((a, b) => {
                let comparison = 0;
                let firstDate = posts[a].postDate;
                let secondDate = posts[b].postDate;
                if (firstDate < secondDate) {
                  comparison = 1;
                } else if (secondDate > firstDate) {
                  comparison = -1;
                }
                return comparison;
              })
              .map(key => {
                const post = posts[key];
                return (
                  <Post
                    key={key}
                    id={key}
                    alt={post.title}
                    date={post.postDate}
                    title={post.title}
                    summary={post.summary}
                    imageSrc={post.imageUrl}
                    editPost={this.handleEditPost}
                    fetchPosts={this.fetchPosts}
                  />
                );
              })
          )}
          {error &&
            this.showErrorMessage(
              'Sorry, there was a problem fetching the latest posts. Please try refreshing your page.'
            )}
        </StyledPostsContainer>
        <Modal open={modalOpen} toggle={this.toggleModal}>
          {modalOpen &&
            mode === 'edit' && (
              <EditPostForm
                id={idToEdit && idToEdit}
                title={idToEdit && posts[idToEdit].title}
                imageSrc={idToEdit && posts[idToEdit].imageUrl}
                summary={idToEdit && posts[idToEdit].summary}
                toggle={this.toggleModal}
                open={this.state.modalOpen}
                fetchPosts={this.fetchPosts}
              />
            )}
          {modalOpen &&
            mode === 'add' && (
              <AddPostForm
                toggle={this.toggleModal}
                open={this.state.modalOpen}
                fetchPosts={this.fetchPosts}
              />
            )}
        </Modal>
      </StyledApp>
    );
  }
}

export default App;
