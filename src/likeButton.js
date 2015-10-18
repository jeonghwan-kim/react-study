var LikeButton = React.createClass({
  getInitialState: function() {
    return {
      liked: false
    };
  },
  handleClick: function() {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'unlike';
    return(
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});

React.render(
    <LikeButton />,
    document.getElementById('content')
);
