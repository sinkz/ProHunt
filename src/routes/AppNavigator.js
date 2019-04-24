import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Products from '../screens/Product';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Products: { screen: Products},
});

export default createAppContainer(AppNavigator);