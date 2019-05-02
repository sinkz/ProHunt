import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Products from '../screens/Product';
import ProductDetails from './../screens/ProductDetails';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Products: { screen: Products },
  ProductDetails: { screen: ProductDetails }
}, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#01a699',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  });

export default createAppContainer(AppNavigator);