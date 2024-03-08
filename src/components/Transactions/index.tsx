/* eslint-disable @typescript-eslint/no-unused-vars */
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Transation } from "../Transaction";

export interface TransactionProps {
    id: string;
    date: string
    amount: number
  }

  interface Props {
    transactions: TransactionProps[],
	title?: string
  }

export const Transations = ({transactions, title="Transações"}: Props) => {
	return(
		<View style={styles.container}>
			<View style={{borderBottomWidth: 1, borderColor: colors.gray[300]}}>
				<Text style={styles.title}>{title}</Text>
			</View>

			<FlatList
				data={transactions}
				keyExtractor={item =>String(item.id) }
				renderItem={({item}) => <Transation transaction={item}/>}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={
					<View >
						<Text style={styles.empty}>Ops, nenhuma transação disponivel ainda.</Text>
					</View>
				}
				ListFooterComponent={
					<View style={styles.viewFooter}>
						<Text style={styles.footer}>{transactions.length >= 10 && `Essas são a(s) ${transactions.length} ultimas transações!`}</Text>
					</View>
				}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 32,
		gap: 20
	},
	title: {
		color: colors.white,
		fontSize: 18,
		fontFamily: fontFamily.bold,
		paddingBottom: 6
	},
	empty: {
		color: colors.white,
		fontSize: 14,
		fontFamily: fontFamily.regular,
	},
	viewFooter: {
		paddingVertical: 10,
	},
	footer: {
		color: colors.white,
		fontSize: 16,
		fontFamily: fontFamily.regular,
		textAlign: "center"
	}
});