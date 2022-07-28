import { useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import useFetch from "../hooks/useFetch";
import ItemCrypto from "./ItemCrypto";

const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: '95%',
        padding: 10,
    }
})

const ListCryptos = ({searchWord}) => {

    const { loading, err, data } = useFetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

    return (
        <>
            {
                loading
                    ?
                    <ActivityIndicator size="large" />
                    :
                    <FlatList
                        style={styles.list}
                        data={data.filter((obj) => obj.name.toLowerCase().includes(searchWord.toLowerCase()))}
                        renderItem={
                            ({ item }) => <ItemCrypto style={styles.item} crypto={item}/>
                        }
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={ (props) => {
                            return (<View style={{height: 10}} />);
                        }}
                        showsVerticalScrollIndicator={false}

                    />
            }
        </>

    );
}

export default ListCryptos;