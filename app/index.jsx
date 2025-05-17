import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./pomodoro.pgn.png')} 
        style={styles.pomodoro} 
      />
      
      <View style={styles.actions}>
        <View style={styles.context}>
          <Pressable style={styles.contextButtonActive}>
            <Text style={styles.contextButtonText}>
              Foco
            </Text>
          </Pressable>
          <Pressable>
            <Text style={styles.contextButtonText}>
              Pausa Curta
            </Text>
          </Pressable>
          <Pressable>
            <Text style={styles.contextButtonText}>
              Pausa Longa
            </Text>
          </Pressable>
        </View>
        <Text style={styles.timer}>25:00</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Começar
          </Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais. 
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Wagner Santana
        </Text>
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
    alignItems: 'center',
    gap: 32
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
   
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8
  },
    contextButtonText: {
    fontSize: 12.5,
    color: '#FFF',
    padding: 8
  },
  pomodoro: {
    width: 180,
    height: 180,
    resizeMode: "contain"
  },
  timer: {
    fontSize: 54,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#8872FF',
    borderRadius: 32,
    padding: 8,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#211223',
    fontSize: 18
  },
  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 15.5
  }
});
