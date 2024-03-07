/* eslint-disable @typescript-eslint/no-unused-vars */
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { Pressable, PressableProps, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

export type GoalProps = {
    name: string
    current: number
    total: number
  }

interface Props extends TouchableOpacityProps {
    goal: GoalProps
}

export const Goal = ({goal, ...rest}: Props) => {
	return(
		<TouchableOpacity {...rest} style={style.container} >
			<Text style={style.header}>{goal.name}</Text>
			<View>
				<Text style={style.title}>R$ {goal.current}</Text>
				<Text style={style.subTitle}>de R$ {goal.total}</Text>
			</View>
		</TouchableOpacity>
	);
};

const style = StyleSheet
	.create({
		container: {
			height: "100%",
			width: 150,
			marginHorizontal: 8,
			gap: 16,
			backgroundColor: colors.gray[400],
			borderRadius: 8,
			padding: 16
		}, 
		header: {
			color: colors.white,
			fontFamily: fontFamily.bold,
			fontSize: 18,
			lineHeight: 28,
			marginBottom: 12
		},
		title: {
			color: colors.white,
			fontFamily: fontFamily.semiBold,
			fontSize: 12,
			lineHeight: 20,
		},
		subTitle: {
			color: colors.gray[300],
			fontFamily: fontFamily.regular,
			fontSize: 12,
			lineHeight: 20,
		}
	});