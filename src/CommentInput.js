import React, { Component } from 'react'

class CommentInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      content: '',
    }
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    })
  }
  handleContentChange(event) {
    this.setState({
      content: event.target.value,
    })
  }
  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({ username, content, createTime: +new Date() })
    }
    this.setState({
      content: '',
    })
  }
  handleUsernameBlur = (e) => {
    localStorage.setItem('username', e.target.value)
  }
  componentDidMount() {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({
        username,
      })
    }
    this.textarea.focus()
  }
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              onBlur={this.handleUsernameBlur}
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              ref={(textarea) => (this.textarea = textarea)}
              value={this.state.content}
              onChange={this.handleContentChange}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    )
  }
}
export default CommentInput
