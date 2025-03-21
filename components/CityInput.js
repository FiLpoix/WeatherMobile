import { View, TextInput } from 'react-native';
import styles from '../screens/HomeScreen/styles'

const CityInput = ({value, onChangeText}) => {
    return (
        <TextInput
            style={styles.cityInput}
            placeholder='Digite a cidade'
            value={value}
            onChangeText={onChangeText} />
    )
}

export default CityInput;