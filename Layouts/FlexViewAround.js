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
      <View style={[styles.container, css.column]}>
        <View style={[css.center, styles.dark, {height: 30}]}>
          <Text style={styles.white}>First</Text>
        </View>

        <View style={[css.row, {flex: 1}]}>
          <View style={[css.center, styles.dark2, {width: 60}]}>
            <Text style={styles.white}>Left</Text>
          </View>

          <View style={[css.center, styles.light, {flex: 1}]}>
            <Text style={styles.black}>Center</Text>
          </View>

          <View style={[css.center, styles.dark2, {width: 60}]}>
            <Text style={styles.white}>Right</Text>
          </View>
        </View>

        <View style={[css.center, styles.dark, {height: 30}]}>
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
  dark2: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  white: {
    color: 'white',
  },
  black: {
    color: '#333333',
  },
});
