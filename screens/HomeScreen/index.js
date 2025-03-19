import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'
import ForecastContainer from '../../components/Forecast';
import CityInput from '../../components/CityInput'

export default function HomeScreen() {

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        try {
            const apiKey = 'dfe3dd29e67afba442b682196ef9f20f';
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt`
            );
            const data = await response.json();

            if (response.ok) {
                setWeather(data);
            } else {
                alert('Cidade não encontrada!');
            }
        } catch (error) {
            console.error('Erro ao buscar o clima:', error);
        }
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#0a0c14', '#17243e', '#17243e']} style={styles.background}>
                <CityInput value={city} onChangeText={setCity} />


                {weather && (
                    <View style={styles.infoContainer}>
                        <Text style={styles.cityName}>{weather.name}</Text>
                        <Text style={styles.cityName}>{weather.sys.country}</Text>
                        <Image
                            source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png` }}
                            style={styles.icon} />
                        <Text style={styles.temperature}>{weather.main.temp}°C</Text>
                        <Text style={styles.description}>{weather.weather[0].description}</Text>
                    </View>
                )}
                <TouchableOpacity onPress={fetchWeather} style={styles.button}>
                    <Text style={styles.buttonText}>Buscar Clima</Text>
                </TouchableOpacity>

                { weather && <ForecastContainer weather={weather} /> }

            </LinearGradient>
        </View>
    )
}