import { Stack, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { COLORS, SIZES, icons, profile } from "../constants";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const router = useRouter();
  const { data, isPending, error, refetch } = useFetch({
    endpoint: "search",
    query: {
      query: "Python developer in Texas, USA",
      num_pages: 1,
    },
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />

          <Popularjobs
            data={data}
            isPending={isPending}
            error={error}
            refetch={refetch}
          />
          <Nearbyjobs
            data={data}
            isPending={isPending}
            error={error}
            refetch={refetch}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
