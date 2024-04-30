import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/color";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

/*
  { Dimensions }
  android : 
  screen: 是整個可用的寬度和高度, 包括狀態欄
  window: 是整個可用的寬度和高度, 不包括狀態欄
  ios: 沒有區別
*/
// 取得設備大小
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
