/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, forwardRef } from "react";
import Bottom from "@gorhom/bottom-sheet";
import { colors } from "@/styles/colors";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { fontFamily } from "@/styles/fontFamily";


export interface Props {
    onClose: () => void
    title: string
    children: ReactNode
    snapPoints: number[]
  }

export const BottomSheet = forwardRef<Bottom, Props>(({children,onClose, snapPoints, title}, ref) => {
	return(
		<Bottom
			ref={ref}
			index={0}
			snapPoints={snapPoints}
			backgroundStyle={styles.backgroundStyle}
			handleComponent={() => null}
		>
			<View style={styles.container}>
				<View style={styles.viewHeader}>
					<Text style={styles.title}>
						{title}
					</Text>

					<MaterialIcons name="close" size={24} color={colors.gray[300]} onPress={onClose}/>
				</View>

				{children}
			</View>
		</Bottom>
	);
});

const styles = StyleSheet.create({
	backgroundStyle: {
		borderWidth: 1,
		borderColor: colors.gray[400],
		backgroundColor: colors.gray[700],
	},
	container: {
		padding: 32,
		gap: 16,
	}, viewHeader: {
		flexDirection: "row",
	},
	title: {
		flex: 1,
		color: colors.white,
		fontFamily: fontFamily.semiBold,
		fontSize: 18
	}
});