import { useEffect, useRef, useState } from "react";
import React from "react";
import {
	Button,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityBase,
	View,
} from "react-native";
import FontAwesome, { SolidIcons } from "react-native-fontawesome";
import MapView from "react-native-maps";
import { PermissionsAndroid } from "react-native";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import Overlay from "../components/Overlay";
import MyText from "../components/MyText";
import { useTheme } from "../components/ThemeContext";

function Map({ navigation }) {
	const [status, setStatus] = useState();
	const [initialLoc, setInitialLoc] = useState({
		latitude: 48.945834,
		longitude: 2.1373652,
	});
	const testUserLoc = {
		latitude: 48.947826194872086,
		longtitude: 2.1474312408765592,
	};
	const [mapPressed, setMapPressed] = useState(false);

	useEffect(() => {
		request_permission();
		watch_location();
	}, []);

	const request_permission = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			return;
		} else {
		}
	};

	const map = React.createRef();

	const watch_location = async () => {
		let location = await Location.getCurrentPositionAsync({});
		let region = {
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
			latitudeDelta: 0.05,
			longitudeDelta: 0.05,
		};
		map.current.animateToRegion(region);
	};

	async function mapClicked(coordinate) {
		console.log(coordinate.nativeEvent.coordinate);
		const p = { x: 0, y: 0 };
		await map.current
			.pointForCoordinate(coordinate.nativeEvent.coordinate)
			.then((point) => {
				p.x = point.x;
				p.y = point.y;
			})
			.catch((e) => alert(e));
		console.log(p);
	}

	/*
	
		map.current
			.pointForCoordinate(coordinate.nativeEvent.coordinate)
			.then((point) => alert("x: " + point.x + ", y: " + point.y))
			.catch((e) => alert(e));
		map.current
			.coordinateForPoint({ x: 0, y: 0 })
			.then((coords) =>
				alert("lon: " + coords.longitude + ", lat: " + coords.latitude)
			)
			.catch((e) => alert(e));

	*/

	const darkTheme = useTheme();
	const [expand, setExpand] = useState(false);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
		},
		mapContainer: {
			marginTop: 20,
			zIndex: -1,
			flex: 1,
			alignSelf: "stretch",
		},
		navContainer: {
			position: "absolute",
			top: 40,
			paddingHorizontal: 20,
			width: "100%",
			flexDirection: "row",
			justifyContent: "space-between",
			opacity: expand ? 0 : 1,
		},
		button: {
			alignItems: "center",
			justifyContent: "center",
			paddingVertical: 12,
			paddingHorizontal: 16,
			borderRadius: 10,
			backgroundColor: darkTheme ? "#333333" : "rgba(128, 0, 128, 1)",
			opacity: mapPressed ? 0.1 : 1,
		},
		randomListen: {
			position: "absolute",
			alignSelf: "center",
			backgroundColor: darkTheme ? "#333333" : "purple",
			bottom: 20,
			padding: 20,
			borderRadius: 40,
			flexDirection: "row",
			opacity: mapPressed ? 0.1 : 1,
		},
	});

	return (
		<View style={{ flex: 1 }}>
			<Overlay
				setMapPressed={setMapPressed}
				mapPressed={mapPressed}
				expand={expand}
				setExpand={setExpand}
			/>
			<View style={styles.navContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate("Explore", {});
					}}
				>
					<FontAwesome
						icon={SolidIcons.search}
						style={{ fontSize: 30 }}
						color='white'
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, { right: 0 }]}
					onPress={() => {
						navigation.navigate("Profile", {});
					}}
				>
					<FontAwesome
						icon={SolidIcons.user}
						style={{ fontSize: 30 }}
						color='white'
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.mapContainer}>
				<MapView
					onPress={(coordinate, position) => {
						mapClicked(coordinate);
					}}
					ref={map}
					region={{
						latitude: 48.945834,
						longitude: 2.1373652,
					}}
					style={{ flex: 1 }}
					showsUserLocation={true}
					followsUserLocation={true}
					zoomEnabled={false}
					minZoomLevel={6}
					maxZoomLevel={17}
					rotateEnabled={false}
					scrollEnabled={false}
					showsMyLocationButton={false}
					showsCompass={false}
					userInterfaceStyle={darkTheme ? "dark" : "light"}
				/>
			</View>
			<TouchableOpacity style={styles.randomListen}>
				<FontAwesome icon={SolidIcons.dice} color='white' />
				<MyText regularBold={true} color='white'>
					&nbsp; Randomly Listen Along!
				</MyText>
			</TouchableOpacity>
		</View>
	);
}

export default Map;
