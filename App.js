import AllPlaces from "./screens/AllPlaces";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, Text } from "react-native";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";

const Stack = createNativeStackNavigator();

function App() {
  return(
    <>
      <StatusBar barStyle="dark-content"/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.gray700 },
        }}>
          <Stack.Screen 
            name="AllPlaces" 
            component={AllPlaces} 
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton 
                  icon="add" 
                  size={24} 
                  color={tintColor} 
                  onPress={() => {navigation.navigate("AddPlace")}}
                />
              ),
          })} 
          />
          <Stack.Screen 
            name="AddPlace" 
            component={AddPlace}
            options={{
              title: "Add a New Place",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;