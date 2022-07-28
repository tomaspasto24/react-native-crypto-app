import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: '60%',
        color: '#dac8c8',
        borderColor: '#dac8c8'
    }
})

const SearchBar = ({value, setValue}) => {
    // const [value, setValue] = useState('Search');

    return (
        <TextInput
            placeholderTextColor={'#dac8c8'}
            placeholder="Search"
            style={styles.input}
            onChangeText={setValue}
            value={value}
        />
    );
}

export default SearchBar;