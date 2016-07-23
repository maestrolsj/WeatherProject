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
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+ cityname +'&appid='+APPID)
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({
                    forecast: {
                        main: responseJSON.name,
                        description: responseJSON.base,
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

var baseFontSize = 16;

var styles = StyleSheet.create({


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
        flex:1,
        width: 50,
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

module.exports = WeatherProject;

