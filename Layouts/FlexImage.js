'use strict';

var React = require('react-native');

var {
  Text,
  View,
  Image,
} = React;

var css = require('../CommonStyles');

var getImageStyles = function(mode) {
  if (mode == 'contain') {
    return {flex: 1, resizeMode: Image.resizeMode.contain};
  } else if (mode == 'cover') {
    return {flex: 1, resizeMode: Image.resizeMode.cover};
  } else if (mode == 'stretch') {
    return {flex: 1, resizeMode: Image.resizeMode.stretch};
  } else {  // default
    return {flex: 1};
  }
};

module.exports = React.createClass({
  render: function() {
    return (
      <View style={[css.center, css.row, {backgroundColor: 'rgba(0,0,0,0.2)'}]}>
        <Image
            style={[{height: 100}, getImageStyles(this.props.mode)]}
            source={{uri: 'https://github.com/images/modules/dashboard/bootcamp/octocat_fork.png'}} />
      </View>
    );
  }
});
