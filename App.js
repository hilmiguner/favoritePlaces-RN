import AllPlaces from "./screens/AllPlaces";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";

import Map from "./screens/Map";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/UI/LoadingScreen";

const Stack = createNativeStackNavigator();

function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
  }, []);

  if(!dbInitialized) {
    return <LoadingScreen/>;
  }

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
          <Stack.Screen 
            name="Map" 
            component={Map}
            options={{
              title: "Map",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;