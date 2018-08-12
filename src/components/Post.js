import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import ENDPOINTS from '../Api';
import moment from 'moment';
import {
  StyledPost,
  StyledPostContent,
  StyledPostImg,
  StyledPostActions,
  StyledPostActionButton
} from '../styles/styles';

const formatDate = date => moment(date).format('MMMM D, YYYY');

const Post = props => {
  const deletePost = id => {
    axios
      .delete(ENDPOINTS.DELETE_POST(id))
      .then(() => props.fetchPosts())
      .catch(err => console.log(err));
  };
  return (
    <StyledPost>
      <StyledPostImg alt={props.alt} src={props.imageSrc} />
      <StyledPostContent>
        <time>{formatDate(props.date)}</time>
        <h2>{props.title}</h2>
        <p>{props.summary}</p>
      </StyledPostContent>
      <StyledPostActions>
        <StyledPostActionButton onClick={() => props.editPost(props)}>
          Edit
        </StyledPostActionButton>
        <StyledPostActionButton onClick={() => deletePost(props.id)}>
          Delete
        </StyledPostActionButton>
      </StyledPostActions>
    </StyledPost>
  );
};

Post.propTypes = {
  id: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  title: propTypes.string,
  summary: propTypes.string,
  alt: propTypes.string.isRequired,
  imageSrc: propTypes.string,
  editPost: propTypes.func.isRequired,
  fetchPosts: propTypes.func.isRequired
};

export default Post;
