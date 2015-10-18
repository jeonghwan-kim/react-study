// Have to include react-with-addons
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({
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
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example">
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

React.render(
  <TodoList />,
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
