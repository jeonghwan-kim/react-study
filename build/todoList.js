// Have to include react-with-addons
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({displayName: "TodoList",
  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  handleAdd: function() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleRemove: function(i) {
    console.log('handleRemove()')
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        React.createElement("div", {key: item, onClick: this.handleRemove.bind(this, i)}, 
          item
        )
      );
    }.bind(this));
    return (
      React.createElement("div", null, 
        React.createElement("button", {onClick: this.handleAdd}, "Add Item"), 
        React.createElement(ReactCSSTransitionGroup, {transitionName: "example"}, 
          items
        )
      )
    );
  }
});

React.render(
  React.createElement(TodoList, null),
  document.getElementById('container')
);

//
// var ImageCarousel = React.createClass({
//   propTypes: {
//     imageSrc: React.PropTypes.string.isRequired
//   },
//   render: function() {
//     return (
//       <div>
//         <ReactCSSTransitionGroup transitionName="carousel">
//           <img src={this.props.imageSrc} key={this.props.imageSrc} />
//         </ReactCSSTransitionGroup>
//       </div>
//     );
//   }
// });
//
// React.render(
//   <ImageCarousel imageSrc="imgs/react-banner.png" />,
//   document.getElementById('carousel')
// );
