import { Button, ScrollView, Text, View } from "react-native";
import MyText from "../components/MyText";

function FindFriends({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
			<ScrollView>
				<MyText>Start by adding friends from your contacts</MyText>
				<MyText>or invite some friends</MyText>
			</ScrollView>
			<Button
				title='Continue'
				onPress={() => {
					navigation.navigate("Map", {});
				}}
			/>
		</View>
	);
}

export default FindFriends;
