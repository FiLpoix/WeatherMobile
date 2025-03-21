import { View, Text, Image } from 'react-native';
import styles from '../screens/HomeScreen/styles'

const ForecastContainer= ({ weather }) => {
    const codIcon = weather?.list[0].weather[0].icon;

    return (
    <View style={styles.forecastContainer}>
        <Text style={styles.forecastText}>Previsão dos próximos dias</Text>

        <View style={styles.forecastRow}>
            <View style={styles.dayForecast}>
                <Text style={styles.dayText}>Segunda-feira</Text>
                <Image
                source={{ uri: `https://openweathermap.org/img/wn/${codIcon}.png` }}
                style={styles.icon} />
                <Text style={styles.tempText}>{Math.round(weather?.list[0].main?.temp) || '-'} °C</Text>
            </View>

            <View style={styles.dayForecast}>
                <Text style={styles.dayText}>Terça-feira</Text>
                <Image
                source={{ uri: `https://openweathermap.org/img/wn/${codIcon}.png` }}
                style={styles.icon} />
                <Text style={styles.tempText}>{Math.round(weather?.list?.[0]?.main?.temp) || '-'} °C</Text>
            </View>

            <View style={styles.dayForecast}>
                <Text style={styles.dayText}>Quarta-feira</Text>
                <Image
                source={{ uri: `https://openweathermap.org/img/wn/${codIcon}.png` }}
                style={styles.icon} />
                <Text style={styles.tempText}>{Math.round(weather?.list?.[0]?.main?.temp) || '-'} °C</Text>
            </View>
        </View>
    </View>
    )
};

export default ForecastContainer;