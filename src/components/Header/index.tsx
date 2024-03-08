import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
    title: string
    subTitle: string
}

export const Header = ({title, subTitle}: HeaderProps) => {
	return(
		<View>
			<Text style={style.title}>{title}</Text>
			<Text style={style.subTitle}>{subTitle}</Text>
		</View>
	);
};

const style = StyleSheet.create({
	title: {
		color: colors.white,
		fontSize: 36,
		lineHeight: 40,
		fontFamily: fontFamily.bold,
	},
	subTitle: {
		color: colors.white,
		fontSize: 16,
		fontFamily: fontFamily.regular,
	}
});