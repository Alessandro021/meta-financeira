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

const TRASATIONS = [
	{
	  id: "1",
	  date: "16-03-2024",
	  amount: 100,
	},
	{
	  id: "2",
		date:  "16-03-2024",
	  	amount: -90,
	},
	{
		id: "",
		  date:  "16-03-2024",
		amount: -90,
	},
	{
		id: "4",
		date:  "16-03-2024",
		amount: -90,
	},
	{
		id: "5",
		  date:  "16-03-2024",
		amount: -90,
	},

	{
		id: "6",
		date:  "16-03-2024",
		amount: -90,
	},
	{
		id: "7",
		  date:  "16-03-2024",
		amount: -90,
	},
	{
		id: "8",
		date:  "16-03-2024",
		amount: -90,
	},
	{
		id: "9",
		date:  "16-03-2024",
		amount: -90,
	},
	{
		id: "10",
		  date:  "16-03-2024",
		amount: -90,
	  },
	  {
		id: "11",
		  date:  "16-03-2024",
		amount: -90,
	  },
];
  
export const goal = [
	{
		id: "1",
		name: "Computador",
		current: 1010,
		total: 4200,
		transactions: TRASATIONS
	},
	{
		id: "2",
		name: "Celular",
		current: 350,
		total: 2000,
		transactions: TRASATIONS
	},
	{
		id: "3",
		name: "Cerveja",
		current: 56,
		total: 120,
		transactions: TRASATIONS
	},
	{
		id: "4",
		name: "Xbox",
		current: 1800,
		total: 2500,
		transactions: TRASATIONS
	},
	{
		id: "5",
		name: "Mesa",
		current: 100,
		total: 100,
		transactions: TRASATIONS
	}
];



const Index = () => {

	const bottomSheetRef = useRef<Bottom>(null);
	const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
	const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);

	const [name, setName] = useState("");
	const [total, setTotal] = useState("");
	const [transactions, setTransactions] = useState<TransactionProps[]>([]);
	const [goals, setGoals] = useState<GoalsProps[]>([]);

	const handleDetails = (id: string) => {
		router.navigate("/details/" + id);
	};

	const handleCreate = async () => {
		try {
		  const totalAsNumber = Number(total.toString().replace(",", "."));
	
		  if (isNaN(totalAsNumber)) {
				return Alert.alert("Erro", "Valor inválido.");
		  }
	
		  console.log({ name, total: totalAsNumber });
	
		  Keyboard.dismiss();
		  handleBottomSheetClose();
		  Alert.alert("Sucesso", "Meta cadastrada!");
	
		  setName("");
		  setTotal("");
		} catch (error) {
		  Alert.alert("Erro", "Não foi possível cadastrar.");
		  console.log(error);
		}
	  };

	  const fetchGoals = async () => {
		try {
		  const response = goal;
		  setGoals(response);
		} catch (error) {
		  console.log(error);
		}
	  };

	  const fetchTransactions = async () => {
		try {
		  const response = TRASATIONS;
	
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
			<Goals goals={goals} onAdd={handleBottomSheetOpen} onPress={handleDetails} />
			<Transations transactions={transactions}/>
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