import "../styles/global.css";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";


import {useFonts, OpenSans_700Bold, OpenSans_400Regular, OpenSans_600SemiBold} from "@expo-google-fonts/open-sans";

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
		<>
			<StatusBar style="dark" />
			<Slot />
		</>
	);
};

export default Layout;