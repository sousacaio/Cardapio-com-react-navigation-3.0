import React, { Component } from 'react';
import { Text, View ,Image, StyleSheet} from 'react-native';

export default class Contato extends Component {
	static navigationOptions = {
		tabBarLabel:'Contato',
		tabBarIcon:({focused, tintColor}) => {
			if(focused) {
				return (
					<Image source={require('../assets/images/homeAzul.png')} style={styles.icone} />
				);
			} else {
				return (
					<Image source={require('../assets/images/homePreto.png')} style={styles.icone} />
				);
			}
		}
	};
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Home!</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	icone:{
		width:26,
		height:26
	}
});