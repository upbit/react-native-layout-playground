'use strict';

var React = require('react-native');

var {
  Text,
  View,
  StyleSheet,
} = React;

var getViewStyles = function(mode) {
  if (mode == 'fixed-size') {
    return {width: 50, height: 50};
  } else {  // default
    return {flex: 1, height: 50};
  }
};

module.exports = React.createClass({
  render: function() {
    return (
      <View style={[css.row]}>
        <View style={[css.center, getViewStyles(this.props.mode), styles.dark]}>
          <Text style={styles.white}>First</Text>
        </View>
        <View style={[css.center, getViewStyles('default'), styles.light]}>
          <Text style={styles.black}>Middle</Text>
        </View>
        <View style={[css.center, getViewStyles(this.props.mode), styles.dark]}>
          <Text style={styles.white}>Last</Text>
        </View>
      </View>
    );
  }
});

var css = require('../CommonStyles');
var styles = StyleSheet.create({
  light: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  dark: {
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  white: {
    color: 'white',
  },
  black: {
    color: '#333333',
  },
});
