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
      <View style={[styles.container, css.row]}>
        <View style={[styles.card]}>
          <Image
              style={[styles.background]}
              source={{uri: 'https://github.com/images/modules/dashboard/bootcamp/octocat_fork.png'}}/>
        </View>
      </View>
    );
  }
});

var css = require('../CommonStyles');
var styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
  },
  card: {
    flex: 1,
    backgroundColor: '#E0E0FF',
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 3,
    },
    padding: 8,
    borderRadius: 8,
    height: 200,
  },
  background: {
    flex: 1,
  },
});
