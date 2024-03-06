import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";


const Layout = () => {
    return(
       <>
        <StatusBar style="dark" />
       <Slot />
       </>
    )
}

export default Layout;