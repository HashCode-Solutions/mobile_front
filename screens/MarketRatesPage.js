import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <View style={styles.fatlistRawOne}>
      {/* <Text style={[styles.title, { color: textColor }]}>{item.title}</Text> */}
      <Image
        style={styles.imageMedium}
        source={{
          uri: item.item_image_url,
        }}
      />
      <Text style={{paddingTop: 10, color: textColor}}>
        LKR {item.current_price}
      </Text>
    </View>
    <View style={styles.fatlistRawOne}>
      <Text style={{color: textColor}}>{item.item}</Text>
      <Text style={{color: textColor}}>{item.description}</Text>
    </View>
  </TouchableOpacity>
);

function MarketRatesPage({route, navigation}) {
  // define hooks
  const [selectedId, setSelectedId] = useState('');
  const [marketRatesList, setMarketRatesList] = useState([]);
  const [userDetail, setUserDetail] = useState({});

  const renderItem = ({item}) => {
    const backgroundColor = 'white';
    const color = 'black';

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Price Rates', {item})}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  //get market price details
  const getMarketPricesList = async () => {
    const token = userDetail.token;
    try {
      await fetch(
        'https://mobileback-diwisawi-production.up.railway.app/market-price/get-market-prices',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token,
          },
        },
      )
        .then(response => response.json())
        .then(data => setMarketRatesList(data))
        .catch(error => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMarketPricesList();
  }, []);

  useEffect(() => {
    async function loadUserDetail() {
      const storedUserDetail = await AsyncStorage.getItem('userDetail');
      if (storedUserDetail) {
        setUserDetail(await JSON.parse(storedUserDetail));
      }
    }
    loadUserDetail();
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
  );
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
