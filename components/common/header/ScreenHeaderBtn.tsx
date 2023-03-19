import React from "react";
import { Text, View } from "react-native";

import styles from "./screenheader";

type headerLeftProp = {
  iconUrl: any;
  dimension: string;
};

const ScreenHeaderBtn = (props: headerLeftProp) => {
  return (
    <View style={styles.btnContainer}>
      <Text>Wow</Text>
    </View>
  );
};

export default ScreenHeaderBtn;
