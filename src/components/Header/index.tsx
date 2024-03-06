import { Text, View } from "react-native";

interface HeaderProps {
    title: string
    subTitle: string
}

export const Header = ({title, subTitle}: HeaderProps) => {
	return(
		<View>
			<Text className="color-white text-4xl font-bold">{title}</Text>
			<Text className="color-white font-regular">{subTitle}</Text>
		</View>
	);
};