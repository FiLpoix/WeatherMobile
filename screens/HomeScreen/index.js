import React, { useState, useLayoutEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

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
                <TextInput
                    style={styles.cityInput}
                    placeholder='Digite a cidade'
                    value={city}
                    onChangeText={setCity} />

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
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        alignItems: 'center',
        paddingTop:20
    },
    cityInput: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        width: 350,
        marginBottom: 20,
        color: '#000',
    },
    button: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    infoContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    cityName: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
    },
    temperature: {
        fontSize: 48,
        color: 'white',
    },
    description: {
        fontSize: 20,
        color: 'white',
    },
    icon:{
        width:100,
        height:100
    },
})