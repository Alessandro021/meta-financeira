/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Goals } from "@/components/Goals";
import { Header } from "@/components/Header";
import { Transations } from "@/components/Transactions";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TRASATIONS = [
	{
	  id: "1",
	  date: "16/03/2024",
	  amount: 100,
	},
	{
	  id: "2",
		date:  "16/03/2024",
	  	amount: -90,
	},
	{
		id: "",
		  date:  "16/03/2024",
		amount: -90,
	},
	{
		id: "4",
		date:  "16/03/2024",
		amount: -90,
	},
	{
		id: "5",
		  date:  "16/03/2024",
		amount: -90,
	},

	{
		id: "6",
		date:  "16/03/2024",
		amount: -90,
	},
	{
		id: "7",
		  date:  "16/03/2024",
		amount: -90,
	},
	{
		id: "8",
		date:  "16/03/2024",
		amount: -90,
	},
	{
		id: "9",
		date:  "16/03/2024",
		amount: -90,
	},
	{
		id: "10",
		  date:  "16/03/2024",
		amount: -90,
	  },
	  {
		id: "11",
		  date:  "16/03/2024",
		amount: -90,
	  },
];
  
const goal = [
	{
		id: "1",
		name: "Computador",
		current: 1010,
		total: 4200,
	},
	{
		id: "2",
		name: "Celular",
		current: 350,
		total: 2000,
	},
	{
		id: "3",
		name: "Cerveja",
		current: 56,
		total: 120,
	},
	{
		id: "4",
		name: "Xbox",
		current: 1800,
		total: 2500,
	},
	{
		id: "5",
		name: "Mesa",
		current: 100,
		total: 100,
	}
];

const Index = () => {
	return(
		<SafeAreaView style={style.container}>
			<View style={style.header}>
				<Header title="Suas metas" subTitle="Poupe hoje para colher os frutos amanhã."/>
			</View>
			<Goals goals={goal} onAdd={() => {}} onPress={() => {}} />
			<Transations transactions={TRASATIONS}/>
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