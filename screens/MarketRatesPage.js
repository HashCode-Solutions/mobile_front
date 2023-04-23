import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <View style={styles.fatlistRawOne}>
      {/* <Text style={[styles.title, { color: textColor }]}>{item.title}</Text> */}
      <Image
        style={styles.imageMedium}
        source={{
          uri: item.item_image_url,
        }}
      />
      <Text style={{ paddingTop: 10, color: textColor }}>LKR {item.current_price}</Text>
    </View>
    <View style={styles.fatlistRawOne}>
      <Text style={{ color: textColor }}>{item.item}</Text>
      <Text style={{ color: textColor }}>{item.description}</Text>
    </View>
  </TouchableOpacity>
);

function MarketRatesPage({ route, navigation }) {

  // define hooks
  const [selectedId, setSelectedId] = useState('');
  const [marketRatesList, setMarketRatesList] = useState([]);

  const renderItem = ({ item }) => {
    const backgroundColor = 'white';
    const color = 'black';

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Price Rates', { item })}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const getMarketPricesList = async () => {
    try {
      await fetch('https://mobileback-diwisawi-production.up.railway.app/market-price/get-market-prices', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0NTA5OGVmN2JiNGM3ZmQ3ZWEwMTFlIiwiZW1haWwiOiJqb2hua2tAZ21haWwuY29tIiwiaWF0IjoxNjgyMjY0NjMyLCJleHAiOjE2ODIyNzE4MzJ9.6umBHjwR4PKivX7SIdwXyHVtzZEadC5XSWl3ejLcfOg',
        },
      }).then(response => response.json())
        .then(data => setMarketRatesList(data))
        .catch(error => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMarketPricesList();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={marketRatesList}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        extraData={selectedId}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageMedium: {
    width: 85,
    height: 75,
    borderRadius: 5,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 28,
  },
  fatlistRawOne: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
});

export default MarketRatesPage;