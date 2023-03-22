import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { icons, SIZES } from "../../../constants";
import styles from "./welcomestyle";

const jobTypes = ["full-time", "part-time", "internship"];

const Welcome = () => {
  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Tonie</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            // value=""
            // onChange={() => {}}
            placeholder="Search for a job"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <AntDesign name="search1" size={30} color={"#fff"} />
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{
            columnGap: SIZES.small,
          }}
          horizontal
        />
      </SafeAreaView>
    </View>
  );
};

export default Welcome;
