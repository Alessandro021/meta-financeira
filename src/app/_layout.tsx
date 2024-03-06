import "../styles/global.css";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";


import {useFonts, OpenSans_700Bold, OpenSans_400Regular, OpenSans_600SemiBold} from "@expo-google-fonts/open-sans";
import { View } from "react-native";

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
		<View style={{flex: 1, backgroundColor: colors.gray[600]}}>
			<StatusBar style="auto" />
			<Slot />
		</View>
	);
};

export default Layout;