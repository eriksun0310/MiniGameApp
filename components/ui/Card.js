import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/color";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
export default Card;

// 取得設備大小
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // android shadow
    elevation: 4,
    //ios shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
