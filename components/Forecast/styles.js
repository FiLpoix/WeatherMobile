import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 forecastContainer:{
    marginTop:20,
},
forecastText:{
    color:'white',
    fontSize:20
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