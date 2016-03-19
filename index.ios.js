/**
 * React Native Layout Playground
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  ScrollView,
  Text,
  View
} from 'react-native';

var css = require('./CommonStyles');

var FlexView = require('./Layouts/FlexView');
var FlexViewColumn = require('./Layouts/FlexViewColumn');
var FlexViewAround = require('./Layouts/FlexViewAround');
var FlexImage = require('./Layouts/FlexImage');
var CardView = require('./Layouts/CardView');
var CardViewAutoWidth = require('./Layouts/CardViewAutoWidth');
var CardViewWithFlex = require('./Layouts/CardViewWithFlex');

var Ratio = require('./Layouts/Ratio');

var PlaceHolder = React.createClass({
  render: function() {
    return (
      <View style={[css.center, css.transparent, {paddingTop: 8, paddingBottom: 2, height: 24}]}>
        <Text>{this.props.message}</Text>
      </View>);
  }
});


class RCTLayoutPlayground extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <PlaceHolder message='' />

        <PlaceHolder message='FlexView (default)' />
        <FlexView mode='default'/>

        <PlaceHolder message='FlexView (fixed-size)' />
        <FlexView mode='fixed-size'/>

        <PlaceHolder message='FlexViewColumn (default)' />
        <FlexViewColumn mode='default'/>

        <PlaceHolder message='FlexViewColumn (fixed-size)' />
        <FlexViewColumn mode='fixed-size'/>

        <PlaceHolder message='FlexViewAround' />
        <FlexViewAround />

        <PlaceHolder message='ImageView (default)' />
        <FlexImage mode='default'/>

        <PlaceHolder message='ImageView (contain)' />
        <FlexImage mode='contain'/>

        <PlaceHolder message='ImageView (stretch)' />
        <FlexImage mode='stretch'/>

        <PlaceHolder message='CardView' />
        <CardView />

        <PlaceHolder message='CardViewAutoWidth (rotate)' />
        <CardViewAutoWidth />

        <PlaceHolder message='CardViewWithFlex (rotate)' />
        <CardViewWithFlex />

        <PlaceHolder message='Ratio' />
        <Ratio />

        <PlaceHolder message='' />
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('RCTLayoutPlayground', () => RCTLayoutPlayground);

