import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {About} from "./src/Screens/About";
import {Provider} from "react-redux";
import {store} from "./src/Redux/store";
import {NavigationContainer} from "@react-navigation/native";
import {Router} from "./src/Routes";
import Toast from "react-native-toast-message";

export default function App() {
  return (
      // <>
      //
      //     {/*<Toast />*/}
      // </>
      <>
          <Provider store={store}>
              <NavigationContainer>
                  <Router />
              </NavigationContainer>
          </Provider>
              <Toast />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
