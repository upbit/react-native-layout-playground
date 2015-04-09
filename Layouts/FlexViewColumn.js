'use strict';

var React = require('react-native');

var {
  Text,
  View,
  StyleSheet,
} = React;

var getViewStyles = function(mode) {
  if (mode == 'fixed-size') {
    return {height: 30};
  } else {  // default
    return {flex: 1};
  }
};

module.exports = React.createClass({
  render: function() {
    return (
      <View style={[styles.container, css.column]}>
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
  container: {
    height: 150,
  },
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
