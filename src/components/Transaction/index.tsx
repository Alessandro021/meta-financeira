/* eslint-disable @typescript-eslint/no-unused-vars */
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { TransactionProps } from "../Transactions";
import { currencyFormat } from "@/utils/currencyFormat";

interface Props extends TouchableOpacityProps{
    transaction: TransactionProps
}

export const Transation = ({transaction, ...rest}: Props) => {
	return(
		<TouchableOpacity {...rest} style={styles.container} activeOpacity={0.7}>
			<Text style={[styles.text1, transaction.amount < 0 && {color: colors.red[500]}]}>
				{ transaction.amount < 0 ? "- " : "+ "}
				{currencyFormat(transaction.amount).replace("-", "")}
			</Text>
			<Text style={styles.text2}>{transaction.date}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.gray[500],
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 16,
		marginVertical: 5,
		borderRadius: 8
	},
	text1: {
		color: colors.green[500],
		fontSize: 14,
		fontFamily: fontFamily.semiBold,
		paddingBottom: 6
	},
	text2: {
		color: colors.gray[300],
		fontSize: 12,
		fontFamily: fontFamily.regular,
		paddingBottom: 6
	}
});