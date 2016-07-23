'use restrict'

const APPID = '9e517c39e4a8a270d91231c8fb7d01b8';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image
    } = React;

var Forecast = require('./Forecast');
var styles = require('./styles/weatherStyle');

var WeatherProject = React.createClass({  // Forecast의 부모 컴포넌트

    getInitialState: function () {
        return {
            cityname: '',
            forecast: null
        };
    },

    _handleTextChange(event)
    {
        var cityname = event.nativeEvent.text;
        this.setState({cityname: cityname});
        var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityname +'&appid='+APPID;
        console.log(requestUrl);
        fetch(requestUrl)
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({
                    forecast: {
                        main: responseJSON.name,
                        description: responseJSON.weather[0].main,
                        temp: responseJSON.main.temp
                    }
                })
            })
            .catch((error) => {
                console.warn(error);
            });
    },

    render() {

        var content = null;
        if (this.state.forecast !== null) {
            content = <Forecast
                main={this.state.forecast.main}
                description={this.state.forecast.description}
                temp={this.state.forecast.temp}
            />;
        }

        return (
            <View style={styles.container}>
                <Image source={require('./img/flowers.png')}
                       resizeMode='cover'
                       style={styles.backdrop}>
                    <View style={styles.overlay}>
                        <View style={styles.row}>
                            <Text style={styles.mainText}>
                                Current weather for
                            </Text>

                            <TextInput
                                style={styles.cityStyle}
                                returnKeyType='go'
                                onSubmitEditing={this._handleTextChange}/>
                        </View>
                        {content}
                    </View>
                </Image>
            </View>
        );
    }


});



module.exports = WeatherProject;

