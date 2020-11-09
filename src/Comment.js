import React, { Component } from 'react'

class Comment extends Component {
  constructor() {
    super()
    this.state = {
      timeString: '',
    }
  }
  componentDidMount() {
    this._updateTimeString()
    this._timer = setInterval(() => {
      this._updateTimeString()
    }, 5000)
  }
  _updateTimeString() {
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createTime) / 1000
    this.setState({
      timeString:
        duration > 60
          ? `${Math.round(duration / 60)}分钟前`
          : `${Math.round(Math.max(1, duration))}秒前`,
    })
  }
  handleDeleteComment = () => {
    this.props.onDeleteComment(this.props.index)
  }
  _getProcessedContent = (content) => {
    return content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/`[\S\s]+?`/g, '<code>$1</code>')
  }
  componentWillUnmount() {
    clearInterval(this._timer)
  }
  render() {
    console.log('render')
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{this.props.comment.username} </span>：
        </div>
        {/* <>{this.props.comment.content}</> */}
        <p
          dangerouslySetInnerHTML={{
            __html: this._getProcessedContent(this.props.comment.content),
          }}
        />
        <span className="comment-createdtime">{this.state.timeString}</span>
        <span className="comment-delete" onClick={this.handleDeleteComment}>
          删除
        </span>
      </div>
    )
  }
}
export default Comment
