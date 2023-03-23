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
import NearbyJobCard from "../../cards/nearby/NearbyJobCard";
import styles from "./nearbyjobstyle";

interface NearbyJobProps {
  data?: any;
  error?: any;
  isPending?: any;
  refetch?: any;
}

const Nearbyjobs = ({ data, error, isPending, refetch }: NearbyJobProps) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isPending ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <TouchableOpacity onPress={refetch}>
            <Text>Retry</Text>
          </TouchableOpacity>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
      <Text></Text>
    </View>
  );
};

export default Nearbyjobs;
