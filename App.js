import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './src/Home';
import Contato from './src/Contato';
import Sobre from './src/Sobre';
import Horario from './src/Horarios';

const TabNavigator = createBottomTabNavigator({
	Home: {
		screen: Home
	},
	Contato: {
		screen: Contato
	},
	Horarios: {
		screen: Horario
	},
	Sobre: {
		screen: Sobre
	}
});

export default createAppContainer(TabNavigator);