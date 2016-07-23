var React = require('react-native');
var {
    StyleSheet,
    Text,
    View
    } = React;

var styles = require('./styles/forecastStyle');

var Forecast = React.createClass({
    render: function () {
        return (
            <View>
                <Text style={styles.bigText}>
                     - {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                   - Weather : {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                   - {this.props.temp}°F
                </Text>

            </View>
        );
    }
});

module.exports = Forecast;