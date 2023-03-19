import { StyleSheet, ViewStyle } from "react-native";

import { COLORS, SIZES } from "../../../constants";

type Styles = {
  btnContainer: ViewStyle;
  btnImg: (dimension: string) => ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles | any>({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension: string) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
