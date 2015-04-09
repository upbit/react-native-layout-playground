'use strict';

var React = require('react-native');

var {
  Text,
  View,
  StyleSheet,
  Image,
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={css.center}>
        <View style={[styles.card, css.row]}>
          <Image
              style={[css.column, styles.background]}
              source={{uri: 'https://github.com/images/modules/dashboard/bootcamp/octocat_fork.png'}}/>
        </View>
      </View>
    );
  }
});

var css = require('../CommonStyles');
var styles = StyleSheet.create({
  card: {
    backgroundColor: '#F0FFF8',
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 3,
    },
    padding: 8,
    borderRadius: 8,
    width: 320,
    height: 200,
  },
  background: {
    flex: 1,
    resizeMode: Image.resizeMode.contain,
  },
});
