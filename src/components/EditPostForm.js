import React, { Component } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import ENDPOINTS from '../Api';
import { StyledInput, StyledTextarea, StyledButton } from '../styles/styles';

const hasEmptyFields = obj => {
  const empty = Object.keys(obj).filter(key => obj[key].length === 0);
  return empty.length > 0;
};

class EditPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      imageSrc: '',
      summary: ''
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, title, imageSrc, summary } = this.state;
    const formData = { title, imageSrc, summary };
    if (!hasEmptyFields(formData)) {
      this.editPost(id, formData);
    }
  };

  editPost = (id, newData) => {
    const prevData = {
      title: this.props.title,
      imageSrc: this.props.imageSrc,
      summary: this.props.summary
    };
    // If nothing has changed, just close the modal
    if (JSON.stringify(newData) === JSON.stringify(prevData)) {
      return this.props.toggle();
    }
    axios
      .patch(ENDPOINTS.EDIT_POST(id), {
        ...newData
      })
      .then(resp => {
        this.props.toggle();
        this.props.fetchPosts();
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    const { id, title, imageSrc, summary } = this.props;
    this.setState({
      id,
      title,
      imageSrc,
      summary
    });
  }

  render() {
    const { title, imageSrc, summary } = this.state;
    return (
      <form>
        <StyledInput
          name="title"
          value={title}
          placeholder="Enter post title"
          onChange={this.handleInputChange}
        />
        <StyledInput
          name="imageSrc"
          placeholder="Post image URL"
          value={imageSrc}
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

EditPostForm.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string,
  imageSrc: propTypes.string,
  summary: propTypes.string,
  fetchPosts: propTypes.func.isRequired
};

export default EditPostForm;
