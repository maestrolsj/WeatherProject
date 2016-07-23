'use restrict'

var React = require('react-native');

var {
    StyleSheet
    } = React;

var baseFontSize = 16;


var WeatherStyle = StyleSheet.create({


    container: {
        flex: 1,
        alignItems: 'center',

    },
    backdrop: {
        flex: 1,
        flexDirection: 'column'
    },
    overlay: {
        paddingTop: 5,
        backgroundColor: '#000000',
        opacity: 0.5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        padding: 30
    },
    zipContainer: {
        flex: 1,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        marginLeft: 5,

        marginTop: 3
    },
    cityStyle: {
        flex: 1,
        width: 100,
        height: 30,
        marginLeft: 5,
        backgroundColor: '#FFFFFF',
        fontSize: 20,
        padding: 0,
        color: '#FF0000'
    },
    mainText: {
        flex: 1,
        fontSize: baseFontSize,
        color: '#FFFFFF'
    }
});

module.exports = WeatherStyle;

