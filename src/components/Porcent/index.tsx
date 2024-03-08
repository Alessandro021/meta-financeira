/* eslint-disable @typescript-eslint/no-unused-vars */
import { colors } from "@/styles/colors";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    porcent: number;
}

export const Porcent = ({porcent}: Props) => {
	return(
		<View style={{width: "100%", height: 20, backgroundColor: colors.gray[300], borderRadius: 8, flexDirection: "row", zIndex: 2, position: "relative"}}>
			<View  style={{width: `${porcent}%`, height: "100%", backgroundColor: colors.green[500], borderRadius: 8}} />
			<Text style={{zIndex: 10, color: colors.white, position: "absolute", right: 10}}>{porcent.toFixed(0)}%</Text>
		</View>
	);
};

const styles = StyleSheet.create({

});