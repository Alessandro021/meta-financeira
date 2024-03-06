/* eslint-disable @typescript-eslint/no-unused-vars */
import { Header } from "@/components/Header";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
	return(
		<SafeAreaView style={{padding: 32}} className="flex-1">
			<Header title="Suas metas" subTitle="Poupe hoje para colher os frutos amanhã."/>
		</SafeAreaView>
	);
};

export default Index;