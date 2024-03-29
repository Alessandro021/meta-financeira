/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {SQLiteProvider} from "expo-sqlite/next";
import { databaseInit } from "@/database/databaseinit";


import {useFonts, OpenSans_700Bold, OpenSans_400Regular, OpenSans_600SemiBold} from "@expo-google-fonts/open-sans";

import { colors } from "@/styles/colors";

SplashScreen.preventAutoHideAsync();
const Layout = () => {

	const [fontsLoaded] = useFonts({
		OpenSans_700Bold, 
		OpenSans_400Regular, 
		OpenSans_600SemiBold
	});

	if(fontsLoaded){
		SplashScreen.hideAsync();
	} else {
		return;
	}
	return(
		<GestureHandlerRootView style={{flex: 1, backgroundColor: colors.gray[600]}}>
			<StatusBar style="auto" />
			<SQLiteProvider databaseName="goals.db" onInit={databaseInit}>
				<Slot />
			</SQLiteProvider>
		</GestureHandlerRootView>
	);
};

export default Layout;