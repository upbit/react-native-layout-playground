'use strict';

var React = require('react-native');

var {
  Text,
  View,
  StyleSheet,
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={[css.row]}>
        <View style={[css.center, styles.itemsFixed, styles.dark]}>
          <Text style={styles.white}>First</Text>
        </View>
        <View style={[css.center, styles.items, styles.light]}>
          <Text style={styles.black}>Middle</Text>
        </View>
        <View style={[css.center, styles.itemsFixed, styles.dark, {width: 100}]}>
          <Text style={styles.white}>Last(2x)</Text>
        </View>
      </View>
    );
  }
});

var css = require('../CommonStyles');
var styles = StyleSheet.create({
  items: {
    flex: 1,
    height: 50,
  },
  itemsFixed: {
    width: 50,
    height: 50,
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
