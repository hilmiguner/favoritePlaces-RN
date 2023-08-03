import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

function LoadingScreen() {
    return(
        <View style={styles.rootContainer}>
            <Text style={styles.text}>Loading the favorite places!</Text>
            <ActivityIndicator />
        </View>
    );
}

export default LoadingScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: Colors.primary100,
        marginBottom: 10,
    },
});