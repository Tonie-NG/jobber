import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./screenheader";

interface HeaderLeftProp {
  iconUrl?: any;
  dimension?: string;
}

const ScreenHeaderBtn = ({ iconUrl, dimension }: HeaderLeftProp) => {
  function handlePress() {
    console.log("pressed");
  }
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
