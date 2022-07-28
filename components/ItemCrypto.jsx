import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemName: {
        color: '#dac8c8',
        fontSize: 20
    },
    textSecondary: {
        color: '#838080',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    textPrice: {
        color: '#dac8c8',
        fontSize: 15,
    },
})

const ItemCrypto = ({ crypto }) => {
    //name, symbol, image, current_price, price_change_percentage_24h
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Image
                    source={{ uri: crypto.image }}
                    style={styles.image}
                />
                <View>
                    <Text style={styles.itemName}>{crypto.name}</Text>
                    <Text style={styles.textSecondary}>{crypto.symbol.toUpperCase()}</Text>
                </View>
            </View>
            <View style={{alignContent: "center", justifyContent: "center", alignItems: 'flex-end'}}>
                <Text style={styles.textPrice}>$ {crypto.current_price}</Text>
                <Text style={{ color: crypto.price_change_percentage_24h < 0 ? 'red' : 'green', fontSize: 15 }}>{crypto.price_change_percentage_24h}</Text>
            </View>
        </View >
    );
}

export default ItemCrypto;