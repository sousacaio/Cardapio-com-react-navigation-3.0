import {createStackNavigator} from 'react-navigation';
import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const nav = createStackNavigator({
	
	HomeList:{
		screen:HomeList
	},
	HomeProducts:{
		screen:HomeProducts
	}
});

export default nav;