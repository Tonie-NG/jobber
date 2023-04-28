import React from "react";
import { Text, View } from "react-native";
import styles from "./specificstyle";

interface SpecificsProp {
  title: string;
  points: any;
}
const Specifics = ({ title, points }: SpecificsProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <View style={styles.pointsContainer}>
        {points.map((item: any, index: number) => (
          <View style={styles.pointsWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
