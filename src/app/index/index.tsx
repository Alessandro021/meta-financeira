/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Goals } from "@/components/Goals";
import { Header } from "@/components/Header";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TRASATIONS = [
	{
	  id: "1",
	  created_at: "16/03/2024",
	  amount: 100,
	},
	{
	  id: "2",
		created_at:  "16/03/2024",
	  amount: -90,
	},
];
  
const goal = [
	{
		id: "1",
		name: "Computador",
		current: 2500,
		total: 3000,
	},
	{
		id: "2",
		name: "Computador",
		current: 2500,
		total: 3000,
	},
	{
		id: "3",
		name: "Computador",
		current: 2500,
		total: 3000,
	},
	{
		id: "4",
		name: "Computador",
		current: 2500,
		total: 3000,
	},
];

const Index = () => {
	return(
		<SafeAreaView style={style.container}>
			<View style={style.header}>
				<Header title="Suas metas" subTitle="Poupe hoje para colher os frutos amanhã."/>
			</View>
			<Goals goals={goal} onAdd={() => {}} onPress={() => {}} />
		</SafeAreaView>
	);
};

export default Index;

const style = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 32
	}, 
	header: {
		paddingHorizontal: 32
	}
});