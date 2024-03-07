

import { StyleSheet, TextInput, TextInputProps } from "react-native";

import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

export function Input({ ...rest }: TextInputProps) {
	return (
		<TextInput
			style={styles.input}
			placeholderTextColor={colors.gray[300]}
			{...rest}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		width: "100%",
		height: 56,
		borderWidth: 1,
		borderColor: colors.gray[400],
		borderRadius: 8,
		padding: 16,
		color: colors.white,
		fontFamily: fontFamily.regular,
		fontSize: 14,
		lineHeight: 20
	}
});
