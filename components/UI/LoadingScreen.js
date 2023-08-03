import { View, ActivityIndicator, StyleSheet } from "react-native";

function LoadingScreen() {
    return(
        <View style={styles.rootContainer}>
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
});