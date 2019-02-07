import { CryptoContainer, SwitchChat } from '../components';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Main: { screen: CryptoContainer},
  Chat: { screen: SwitchChat }
})

export default createAppContainer(createSwitchNavigator({ 
  Main: CryptoContainer 
}));