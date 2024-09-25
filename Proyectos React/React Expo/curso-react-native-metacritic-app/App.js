import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable} from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Pressable
        onPress={() => alert('Hola')}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'white' : 'green'
          }
        ]}
        >
          <Text style={{ color: 'white'}}>
            Pulsa aquí
          </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
