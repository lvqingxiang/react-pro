import React, { Component } from 'react'
import Comment from './Comment'
class CommentList extends Component {
  handleDeleteComment = (index) => {
    this.props.onDeleteComment(index)
  }
  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => (
          <Comment
            comment={comment}
            key={i}
            index={i}
            onDeleteComment={this.handleDeleteComment}
          />
        ))}
      </div>
    )
  }
}

export default CommentList
