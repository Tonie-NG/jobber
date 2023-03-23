import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";
import { useFetch } from "../../../hooks/useFetch";
import PopularJobCard from "../../cards/popular/PopularCard";
import styles from "./popularjobstyle";

interface PopularJobProps {
  data?: any;
  error?: any;
  isPending?: any;
  refetch?: any;
}

const Popularjobs = ({ data, error, isPending, refetch }: PopularJobProps) => {
  const router = useRouter();

  const [selectedJob, setSelectedJob] = useState();

  const handlePress = (item: any) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
      </View>
      <View style={styles.cardsContainer}>
        {isPending ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <TouchableOpacity onPress={refetch}>
            <Text>Retry</Text>
          </TouchableOpacity>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handlePress={handlePress}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
      <Text></Text>
    </View>
  );
};

export default Popularjobs;
