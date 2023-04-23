import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import {
  LineChart,
} from "react-native-chart-kit";
import Svg, { Rect } from 'react-native-svg';

function SingalItemPriceRatePage({ route, navigation }) {

  const { item } = route.params;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        data: item.pass_rates,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
  };

  return (
    <View>
      <View style={styles.mainContainor}>
        <Text style={styles.titleHeader}>{item.item}</Text>
        <Image
          style={styles.imageMedium}
          source={{
            uri: item.item_image_url,
          }}
        />
        <View>
          <Text>Bezier Line Chart</Text>
          <LineChart
            data={data}
            width={Dimensions.get("window").width}
            height={220}
            chartConfig={chartConfig}
          />
        </View>
        <View>
          <Text>LKR{item.current_price}</Text>
        </View>
        <View>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainor: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  titleHeader: {
    fontSize: 30,
  },
  imageMedium: {
    width: 85,
    height: 75,
    borderRadius: 5,
  },
});
export default SingalItemPriceRatePage;