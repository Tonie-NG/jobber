import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { SIZES } from "../../constants";
import styles from "./tabstyle";

interface TabProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (value: string) => void;
}
interface TabBtnProps {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
}

const TabButton = ({ name, activeTab, onHandleSearchType }: TabBtnProps) => (
  <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);
const Tabs = ({ tabs, activeTab, setActiveTab }: TabProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
