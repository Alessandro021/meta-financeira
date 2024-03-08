/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "@/libs/dayjs";
import { BottomSheet } from "@/components/BottonSheet";
import { Goals, GoalsProps } from "@/components/Goals";
import { Header } from "@/components/Header";
import { TransactionProps, Transations } from "@/components/Transactions";
import { useEffect, useRef, useState } from "react";
import { Alert, Keyboard, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bottom from "@gorhom/bottom-sheet";
import { Input } from "@/components/Input.tsx";
import { Button } from "@/components/Button";
import { router } from "expo-router";
import dayjs from "dayjs";

//SQLite
import { useGoalRepository } from "@/database/useGoalRepository";
import { useTransactionRepository } from "@/database/useTransactionRepository";


const Index = () => {

	const bottomSheetRef = useRef<Bottom>(null);
	const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
	const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);

	const [name, setName] = useState("");
	const [total, setTotal] = useState("");
	const [transactions, setTransactions] = useState<TransactionProps[]>([]);
	const [goals, setGoals] = useState<GoalsProps[]>([]);
	const {all, create, deleteGoal} = useGoalRepository();
	const {findLatest} = useTransactionRepository();

	const handleDetails = (id: string) => {
		router.navigate("/details/" + id);
	};

	const handleDeleteGoals =  async (id: number, name: string) => {
		try {
			Alert.alert("Excluir", `Deseja excluir a meta ${name}`, [
				{text: "cancelar", style: "cancel"},
				{text: "excluir", onPress: () => {  deleteGoal(Number(id)); fetchGoals(); fetchTransactions();}}
			]);
		  } catch (error) {
			console.log(error);
		  }
	};

	const handleCreate = async () => {
		try {
		  const totalAsNumber = Number(total.toString().replace(",", "."));
	
		  if (isNaN(totalAsNumber)) {
				return Alert.alert("Erro", "Valor inválido.");
		  }

		  if (Number(total) <= 0) {
				return Alert.alert("Erro", "Valor não pode ser igual a zero ou negativo.");
	  	  }
	
		  create({ name, total: totalAsNumber });
	
		  Keyboard.dismiss();
		  handleBottomSheetClose();
		  Alert.alert("Sucesso", "Meta cadastrada!");
	
		  setName("");
		  setTotal("");

		  fetchGoals();
		} catch (error) {
		  Alert.alert("Erro", "Não foi possível cadastrar.");
		  console.log(error);
		}
	  };

	  const fetchGoals = async () => {
		try {
		  const response = all();
		  setGoals(response);
		} catch (error) {
		  console.log(error);
		}
	  };

	  const fetchTransactions = async () => {
		try {
		  const response = findLatest();
	
		  setTransactions(
				response.map((item) => ({
			  ...item,
			  date: dayjs(item.date).format("DD/MM/YYYY [às] HH:mm"),
				}))
		  );
		} catch (error) {
		  console.log(error);
		}
	  };

	  useEffect(() => {
		fetchGoals();
		fetchTransactions();
	  }, []);
	

	return(
		<SafeAreaView style={style.container}>
			<View style={style.header}>
				<Header title="Suas metas" subTitle="Poupe hoje para colher os frutos amanhã."/>
			</View>
			<Goals goals={goals} onAdd={handleBottomSheetOpen} onPress={handleDetails} onLongPress={handleDeleteGoals} />
			<Transations title="Ultimas transações" transactions={transactions}/>
			<BottomSheet ref={bottomSheetRef} onClose={handleBottomSheetClose} title="Nova meta"  snapPoints={[0.01, 284]}>
				<Input placeholder="Nome da meta" onChangeText={setName} value={name} />

				<Input
					placeholder="Valor"
					keyboardType="numeric"
					onChangeText={setTotal}
					value={total}
				/>
				<Button title="Criar" onPress={handleCreate} />
			</BottomSheet>
		</SafeAreaView>
	);
};

export default Index;

const style = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 32
	}, 
	header: {
		paddingHorizontal: 32
	}
});