import { useEffect, useRef, useState } from "react";
import {
	Animated,
	Dimensions,
	Image,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import MyText from "./MyText";
import SongInformation from "./SongInformation";
import SpotifyPlay from "./SpotifyPlay";
import { useTheme } from "./ThemeContext";

function UserCard(props) {
	const darkTheme = useTheme();

	const [disapear, setDisapear] = useState();

	const notifApear = useRef(new Animated.Value(-300)).current;
	const notifDisapear = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(notifApear, {
			toValue: 0,
			duration: 400,
		}).start();
	}, [notifApear]);

	useEffect(() => {
		if (disapear) {
			Animated.timing(notifDisapear, {
				toValue: -300,
				duration: 400,
			}).start();
		}
	}, [disapear]);

	const styles = StyleSheet.create({
		background: {
			flex: 1,
			width: "100%",
		},
		container: {
			zIndex: 4,
			position: "absolute",
			top: notifApear,
			left: 0,
			marginTop: 30,
			marginHorizontal: 10,
			padding: 15,
			backgroundColor: darkTheme ? "#2F4F4F" : "lightblue",
			borderRadius: 10,
			shadowColor: "black",
			shadowOffset: { width: -2, height: 4 },
			shadowOpacity: 0.2,
			shadowRadius: 3,
			width: Dimensions.get("screen").width - 20,
		},
		elevation: {
			elevation: 15,
			shadowColor: "black",
		},
		profileImage: {
			borderRadius: 25,
			width: 50,
			height: 50,
		},
		inline: {
			flexDirection: "row",
			alignItems: "center",
		},
	});

	return (
		<TouchableOpacity
			style={styles.background}
			onPress={() => {
				props.setExpand(false);
			}}
		>
			<Animated.View style={[styles.container, styles.elevation]}>
				<View style={styles.inline}>
					<Image
						style={styles.profileImage}
						source={require("../assets/icon.png")}
					/>
					<MyText big={true}>Username</MyText>
				</View>
				<SongInformation />
			</Animated.View>
			<SpotifyPlay name='505' />
		</TouchableOpacity>
	);
}

export default UserCard;
