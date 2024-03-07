import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}
		>
			<Text style={styles.title}>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 48,
		width: "100%",
		backgroundColor: colors.blue[500],
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8
	},
	title: {
		color: colors.white,
		fontSize: 16,
		fontFamily: fontFamily.bold,
		textTransform: "uppercase"
	}
});
