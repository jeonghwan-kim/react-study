var FancyCheckbox = React.createClass({displayName: "FancyCheckbox",
  render: function() {
    var $__0=     this.props,checked=$__0.checked,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{checked:1});
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    // var fancyClass = this.props.checked ? 'FancyChecked' : 'FancyUnchecked';
    console.log(other);
    return (
      React.createElement("div", React.__spread({},  other, {className: fancyClass}))
    );
    // return (
    //   <div className={fancyClass} onClick={this.props.onClick}>
    //     {this.props.children}
    //   </div>
    // );
  }
});

React.render(
  React.createElement(FancyCheckbox, {checked: true, onClick: console.log.bind(console)}, 
    "세상아 안녕!"
  ),
  document.getElementById('container')
);
