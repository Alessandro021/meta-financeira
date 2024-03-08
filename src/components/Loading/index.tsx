import { ActivityIndicator, StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export function Loading() {
	return (
		<ActivityIndicator
			style={styles.loading}
			color={colors.green[500]}
		/>
	);
}

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.gray[600]
	}
});