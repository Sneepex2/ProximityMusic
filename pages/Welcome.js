import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import HighlightButton from "../components/HighlightButton";
import MyText from "../components/MyText";
import FontAwesome, { SolidIcons } from "react-native-fontawesome";

function Welcome({ navigation, route }) {
	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.container}>
				<MyText bigBold={true}>Proximity Music</MyText>
			</ScrollView>
			<View style={styles.nav}>
				<View style={{ marginBottom: 10 }}>
					<MyText fontSize={14}>
						by tapping "get started" you acknowledge that you have
						read the privacy policy, and agree to the terms of
						services
					</MyText>
				</View>
				<HighlightButton
					onPress={() => {
						navigation.navigate("AuthNav", {});
					}}
				>
					<FontAwesome icon={SolidIcons.check} />
					&nbsp; Get Started!
				</HighlightButton>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	nav: {
		width: 280,
		marginBottom: 30,
	},
});

export default Welcome;
