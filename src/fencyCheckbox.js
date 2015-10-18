var FancyCheckbox = React.createClass({
  render: function() {
    var { checked, ...other } = this.props;
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    // var fancyClass = this.props.checked ? 'FancyChecked' : 'FancyUnchecked';
    console.log(other);
    return (
      <div {...other} className={fancyClass} />
    );
    // return (
    //   <div className={fancyClass} onClick={this.props.onClick}>
    //     {this.props.children}
    //   </div>
    // );
  }
});

React.render(
  <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
    세상아 안녕!
  </FancyCheckbox>,
  document.getElementById('container')
);
