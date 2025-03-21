import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import CityInput from '../../components/CityInput';
import WeatherCard from '../../components/WeatherCard';
import ForecastContainer from '../../components/Forecast';
import styles from './styles';
import { useWeather } from '../../context/WeatherContext'

export default function HomeScreen() {
    const [city, setCity] = useState('');
    const {data, fetchData } = useWeather();
    {console.log(data)}

    const handleFetchWeather = () => {
        if (city.trim()) {
          fetchData(city); // Chama a função do contexto com a cidade inserida
        } else {
          alert("Por favor, insira o nome de uma cidade.");
        }
    };
    

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#0a0c14', '#17243e', '#17243e']} style={styles.background}>
                <CityInput value={city} onChangeText={setCity} />

                <WeatherCard weather={data} />

                <TouchableOpacity onPress={handleFetchWeather} style={styles.button}>
                    <Text style={styles.buttonText}>Buscar Clima</Text>
                </TouchableOpacity>

                <ForecastContainer />

            </LinearGradient>
        </View>
    );
}