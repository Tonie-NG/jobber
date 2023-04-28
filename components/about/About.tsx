import React from "react";
import { Text, View } from "react-native";

import styles from "./aboutstyle";

interface AboutProp {
  info?: string;
}

const About = ({ info }: AboutProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the Job</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
