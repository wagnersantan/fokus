import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./pomodoro.pgn.png')} 
        style={styles.pomodoro} 
      />
      
      <View style={styles.actions}>
        <Text style={styles.timer}>25:00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#444880',
    alignItems: 'center'
  },
  pomodoro: {
    width: 180,
    height: 180,
    resizeMode: "contain"
  },
  timer: {
    fontSize: 36,
    color: '#FFF'
  }
});
