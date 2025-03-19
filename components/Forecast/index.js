import { View, Text, Image } from 'react-native';
import styles from './styles'

const ForecastContainer = ({ weather }) => {
    return (
    <View style={styles.forecastContainer}>
        <Text style={styles.forecastText}>Previsão dos próximos 5 dias</Text>

        <View style={styles.forecastRow}>
            <View style={styles.dayForecast}>
                <Text style={styles.dayText}>Segunda-feira</Text>
                <Text style={styles.tempText}>28°C</Text>
                <Image
                    source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png` }}
                    style={styles.icon} />
            </View>

            <View style={styles.dayForecast}>
                <Text style={styles.dayText}>Terça-feira</Text>
                <Text style={styles.tempText}>30°C</Text>
                <Image
                    source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png` }}
                    style={styles.icon} />
            </View>

            <View style={styles.dayForecast}>
                <Text style={styles.dayText}>Quarta-feira</Text>
                <Text style={styles.tempText}>27°C</Text>
                <Image
                    source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png` }}
                    style={styles.icon} />
            </View>
        </View>
    </View>
    )
};

export default ForecastContainer;