import React, { useState, useContext } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../screens/HomeScreen/styles';

export default function WeatherCard ({ weather }){
    const codIcon = weather?.list[0].weather[0].icon;
    return(
        <View style={styles.infoContainer}>
            <Text style={styles.cityName}>{weather?.city?.name || 'Pequise uma cidade'}, {weather?.city?.country || '-'}</Text>
            <Image
                source={{ uri: `https://openweathermap.org/img/wn/${codIcon}.png` }}
                style={styles.icon} />
            <Text style={styles.temperature}>{Math.round(weather?.list[0].main?.temp) || '-'} °C</Text>
            <Text style={styles.description}>{weather?.list[0].weather[0].description || '-'} </Text>
        </View>
    )
};