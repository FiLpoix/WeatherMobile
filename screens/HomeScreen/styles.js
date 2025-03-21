import { StyleSheet } from "react-native";

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

    // input
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

    // api
    infoContainer: {
        marginTop: 30,
        alignItems: 'center',
        marginTop:100
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
        marginBottom:10
    },
    icon:{
        width:100,
        height:100
    },

    //cityInput
    cityInput: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        width: 350,
        marginBottom: 20,
        color: '#000',
    },

    // forecast
    forecastContainer:{
        marginTop:20,
    },
    forecastText:{
        color:'white',
        fontSize:20,
        textAlign:'center',
    },
    forecastRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap:10
    },
    dayForecast: {
        marginVertical: 8,
        borderWidth:1,
        borderColor:'white',
        borderRadius:5,
    },
    dayText: {
        color:'white',
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal:8
    },
    tempText: {
        fontSize: 14,
        color: '#555',
        alignItems:'center',
        textAlign:'center'
    },
    icon:{
        width:100,
        height:100
    },
})

export default styles;