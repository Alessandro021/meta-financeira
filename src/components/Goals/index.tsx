/* eslint-disable @typescript-eslint/no-unused-vars */
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import {FlatList, Pressable,  PressableProps, ScrollView, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { View } from "react-native";
import { Goal } from "../Goal";

export interface GoalsProps {
    id: string
    name: string
    current: number
    total: number
}

type Props = TouchableOpacityProps & {
    goals: GoalsProps[]
    onPress: (id: string) => void
    onAdd: () => void
}

export const Goals = ({goals, onPress, onAdd, ...rest }: Props) => {

	return(
		<View style={style.container}>
			<FlatList
				
				ListHeaderComponent={
					<TouchableOpacity
						{...rest}
						activeOpacity={0.7}
						style={style.btn}
						onPress={onAdd}
					>
						<MaterialIcons name="add" size={36} color={colors.black} />
					</TouchableOpacity>
				}
				data={goals}
				keyExtractor={item => item.id}
				renderItem={({ item}) => <Goal goal={item} onPress={() => onPress(item.id)}/>}
				horizontal={true}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		height: 150,
		width: "100%",
		marginVertical: 40,
		paddingHorizontal: 26
		
	}, 
	btn:{
		backgroundColor: colors.green[500],
		width: 64,
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8

	}
});