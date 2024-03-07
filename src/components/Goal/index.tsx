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
	const porcent = (goal.current / goal.total) * 100;
	return(
		<TouchableOpacity {...rest} style={style.container} >
			<Text style={style.header}>{goal.name}</Text>
			<View>
				<Text style={style.title}>R$ {goal.current}</Text>
				<Text style={style.subTitle}>de R$ {goal.total}</Text>
			</View>

			<View style={{width: "100%", height: 20, backgroundColor: colors.gray[300], borderRadius: 8, flexDirection: "row", zIndex: 2, position: "relative"}}>
				<View  style={{width: `${porcent}%`, height: "100%", backgroundColor: colors.green[500], borderRadius: 8}} />
				<Text style={{zIndex: 10, color: colors.white, position: "absolute", right: 10}}>{porcent.toFixed(0)}%</Text>
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