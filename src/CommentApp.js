import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

// class Clock extends Component {
//   constructor() {
//     super()
//     this.state = {
//       date: new Date(),
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>
//           <p>现在的时间是：</p>
//           {this.state.date.toLocaleTimeString()}
//         </h1>
//       </div>
//     )
//   }
//   componentDidMount() {
//     console.log('componentDidMount')
//     this.timer = setInterval(() => {
//       this.setState({
//         date: new Date(),
//       })
//     }, 1000)
//   }
// }
class CommentApp extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      comments: [],
    }
    this.handleSubmitComment = this.handleSubmitComment.bind(this)
  }
  componentDidMount() {
    this._loadComments()
  }
  handleSubmitComment(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments,
    })
    this._saveComments(this.state.comments)
  }
  _loadComments = () => {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({
        comments,
      })
    }
  }
  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  handleDeleteComment = (index) => {
    this.state.comments.splice(index, 1)
    this.setState({
      comments: this.state.comments,
    })
    this._saveComments(this.state.comments)
  }
  render() {
    console.log('render')
    return (
      <div className="wrapper" style={{ backgroundColor: '#eeeeee' }}>
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment}
        />
        {/* <Clock /> */}
      </div>
    )
  }
}
export default CommentApp
