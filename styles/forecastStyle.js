/**
 * Created by maestrolsj on 16. 7. 23.
 */
'use restrict'

var React = require('react-native');

var {
    StyleSheet
    } = React;

var ForecastStyle = StyleSheet.create({
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    mainText: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF'
    }
});

module.exports = ForecastStyle;
