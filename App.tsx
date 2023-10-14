import { Provider } from 'react-redux';
import AppContainer from './src/navigation';
import store from './src/store';
import * as theme from "./src/constants/theme";
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.colors.white}
      />
      <AppContainer />
    </Provider>
  );
};

export default App;