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
      {Array.apply(0, Array(12)).map((x,y) =>
        <View style={[styles.card]}>
          <Image
              style={[styles.background]}
              source={{uri: 'https://github.com/images/modules/dashboard/bootcamp/octocat_fork.png'}}/>
        </View>
      )}
      </View>
    );
  }
});

var css = require('../CommonStyles');
var styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#E0FFE8',
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    margin: 4,
    borderRadius: 4,
    width: 88,
    height: 88,
  },
  background: {
    flex: 1,
    borderRadius: 4,
  },
});
