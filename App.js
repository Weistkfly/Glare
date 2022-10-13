import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import Navbar from './Navbar';
import VistaAlbum from './VistaAlbum';
import Foto from './Foto';
import Listado from './ListadoAlbumes'
export default function App() {
  return (
    <View style={styles.container}>
      <Listado/>
      <StatusBar style="auto" />
    </View>
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
