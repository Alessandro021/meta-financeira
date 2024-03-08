/* eslint-disable @typescript-eslint/no-unused-vars */
import { BackButton } from "@/components/BackButton";
import { router, useLocalSearchParams } from "expo-router";
import { Alert, Keyboard, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/Header";
import { TransactionProps, Transations } from "@/components/Transactions";
import { Porcent } from "@/components/Porcent";
import { useEffect, useRef, useState } from "react";
import Bottom from "@gorhom/bottom-sheet";
import { BottomSheet } from "@/components/BottonSheet";
import { Input } from "@/components/Input.tsx";
import { Button } from "@/components/Button";
import { TransactionTypeSelect } from "@/components/TransactionTypeSelect";
import dayjs from "dayjs";
import { currencyFormat } from "@/utils/currencyFormat";
import { Loading } from "@/components/Loading";

//SQLite
import { useGoalRepository } from "@/database/useGoalRepository";
import { useTransactionRepository } from "@/database/useTransactionRepository";

interface Details {
    // id: string
    name: string
    total: string
    current: string
    transactions: TransactionProps[]
  }

const Details = () => {

	const {id: goalId} = useLocalSearchParams();

	
	const {show} = useGoalRepository();
	const {create, findByGoal} = useTransactionRepository();	

	const [amount, setAmount] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [type, setType] = useState<"up" | "down">("up");
	const [goal, setGoal] = useState<Details>({} as Details);
	const [porcent, setPorcent] = useState<number>(0);
	const bottomSheetRef = useRef<Bottom>(null);
	const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
	const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);


	const fetchDetails = async () => {
		try {
			if (goalId) {
				const goal = show(Number(goalId));
				const transactions = findByGoal(Number(goalId));
				setPorcent(((goal?.current ?? 0) / (goal?.total ?? 1)) * 100);

				if (!goal || !transactions) {
					return router.back();
				}

				setGoal({
					name: goal.name,
					current: currencyFormat(goal.current),
					total: currencyFormat(goal.total),
					// percentage: (goal.current / goal.total) * 100,
					transactions: transactions.map((item) => ({
						...item,
						date: dayjs(item.date).format("DD/MM/YYYY [às] HH:mm"),
					})),
				});
	
				setIsLoading(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleNewTransaction = async () => {
		try {
			let amountAsNumber = Number(amount.replace(",", "."));

			if (isNaN(amountAsNumber)) {
				return Alert.alert("Erro", "Valor inválido.");
			}

			if (type === "down") {
				amountAsNumber = amountAsNumber * -1;
			}

			create({ goalId: Number(goalId), amount: amountAsNumber });

			Alert.alert("Sucesso", "Transação registrada!");

			handleBottomSheetClose();
			Keyboard.dismiss();

			setAmount("");
			setType("up");

			fetchDetails();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchDetails();
	}, []);
	
	if (isLoading) {
		return <Loading />;
	}
	
	return(
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<BackButton />
				<Header title={goal?.name ?? ""} subTitle={`${goal?.current} de ${goal?.total}`} />
				<Porcent porcent={porcent}/>
			</View>

			<Transations transactions={goal?.transactions ?? []} />
			<View style={styles.footer}>
				<Button title="Nova transação" onPress={handleBottomSheetOpen} />
			</View>

			<BottomSheet
				ref={bottomSheetRef}
				title="Nova transação"
				snapPoints={[0.01, 284]}
				onClose={handleBottomSheetClose}
			>	

				<TransactionTypeSelect onChange={setType} selected={type} />
				
				<Input
					placeholder="Valor"
					keyboardType="numeric"
					onChangeText={setAmount}
					value={amount}
				/>

				<Button title="Confirmar" onPress={handleNewTransaction} />

			</BottomSheet>
		</SafeAreaView>
	);
};

export default Details;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 32,
	},
	header: {
		paddingHorizontal: 32,
		gap: 24,
		marginBottom: 20
	},
	footer: {
		paddingHorizontal: 32,
		marginBottom: 10,
	}
});