import AllPlaces from "./screens/AllPlaces";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, Text } from "react-native";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();

function App() {
  return(
    <>
      <StatusBar barStyle="dark-content"/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="AllPlaces" 
            component={AllPlaces} 
            options={({ navigation }) => ({
              headerRight: ({ tintColor }) => (
                <IconButton 
                  icon="add" 
                  size={24} 
                  color={tintColor} 
                  onPress={() => {navigation.navigate("AddPlace")}}
                />
              )
          })} 
          />
          <Stack.Screen name="AddPlace" component={AddPlace}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;