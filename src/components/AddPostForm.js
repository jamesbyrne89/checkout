import React, { Component } from 'react';
import axios from 'axios';
import ENDPOINTS from '../Api';
import { StyledInput, StyledTextarea, StyledButton } from '../styles/styles';

export default class AddPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      imageUrl: '',
      summary: ''
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, imageUrl, summary } = this.state;
    const now = new Date();
    const formData = { title, imageUrl, summary, postDate: now.toISOString() };
    this.addPost(formData);
  };

  addPost = newData => {
    axios
      .post(ENDPOINTS.ADD_POST, {
        ...newData
      })
      .then(resp => {
        this.props.toggle();
        this.props.fetchPosts();
      })
      .catch(err => console.log(err));
  };

  render() {
    const { title, imageUrl, summary } = this.state;
    return (
      <form>
        <StyledInput
          name="title"
          value={title}
          placeholder="Enter post title"
          onChange={this.handleInputChange}
        />
        <StyledInput
          name="imageUrl"
          placeholder="Post image URL"
          value={imageUrl}
          onChange={this.handleInputChange}
        />
        <StyledTextarea
          name="summary"
          placeholder="Enter summary"
          value={summary}
          onChange={this.handleInputChange}
        />
        <StyledButton onClick={this.handleSubmit}>Submit</StyledButton>
      </form>
    );
  }
}
