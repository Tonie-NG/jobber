import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

type Styles = {
  container: (selectedJob: any, item: any) => ViewStyle;
  logoContainer: (selectedJob: any, item: any) => ViewStyle;
  logoImage: ImageStyle;
  companyName: TextStyle;
  infoContainer: ViewStyle;
  jobName: (selectedJob: any, item: any) => TextStyle;
  infoWrapper: ViewStyle;
  publisher: (selectedJob: any, item: any) => TextStyle;
  location: TextStyle;
};

const styles: Styles = StyleSheet.create<Styles | any>({
  container: (selectedJob: any, item: any) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob: any, item: any) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob: any, item: any) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob: any, item: any) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
