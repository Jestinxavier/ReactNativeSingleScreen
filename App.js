import { StatusBar } from "expo-status-bar";
import { createContext, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  NativeModules,
  Platform,ScrollView
} from "react-native";
import { pallet } from "./helper/Theme";
import Homescreen from "./screens/Homescreen";
const { StatusBarManager } = NativeModules;
export const  themeContext = createContext(null);
export default function App() {
  const [theme, setTheme] = useState(pallet.light);
  return (
    <themeContext.Provider value={{theme}}>
      <View
        style={[{ backgroundColor: theme.BackgroundColor }]}
      >
        <ScrollView>
        <StatusBar style="auto" />
       
          <View
            style={[{
              marginTop: Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT,
            },styles.container]}
          >
            <Homescreen />
          </View>
          </ScrollView>
      </View>
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    dlsplay:"flex"
  },
});
