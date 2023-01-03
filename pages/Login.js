import { Text, TextInput, View } from "react-native";
import MyText from "../components/MyText";
import MyTextInput from "../components/MyTextInput";
import AuthLayout from "./AuthLayout";

function Login({ navigation, route }) {
	return (
		<AuthLayout
			navigate='Map'
			readyToAuthenticate={true}
			setIsAuthenticated={route.params.setIsAuthenticated}
		>
			<MyText bold={true}>Welcome Back!</MyText>
			<MyTextInput placeholder='Phone Number' />
			<MyTextInput placeholder='Password' />
		</AuthLayout>
	);
}

export default Login;
