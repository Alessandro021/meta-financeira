import { Text, ColorValue, Pressable, PressableProps, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

type TransactionTypeProps = {
  title: string
  icon: keyof typeof MaterialIcons.glyphMap
  color: ColorValue
  selected: boolean
}

type Props = PressableProps & {
  type: TransactionTypeProps
}

export function TransactionType({ type, ...rest }: Props) {
	return (
		<Pressable
			style={[styles.container, {opacity: type.selected ? 1 : 0.5}] }
			{...rest}
		>
			<MaterialIcons name={type.icon} color={type.color} size={16} />
			<Text style={styles.title} >{type.title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 32,
		paddingVertical: 8,
		backgroundColor: colors.gray[400],
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
		gap: 8
	},
	title: {
		color: colors.white,
		fontFamily: fontFamily.semiBold,
		fontSize: 12,
	}
});
