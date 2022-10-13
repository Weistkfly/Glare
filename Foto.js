import Pa4 from './assets/detalleAlbum/pa4'
import Arrow from './assets/arrowBack'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function Navbar() {
    const [fontsLoaded] = useFonts({
        'LexendGiga-Black': require('./assets/fonts/LexendGiga-Black.ttf'),
    });
    if (fontsLoaded) {
        return (
            <View>
                <View style={styles.containter}>
                    <View style={styles.topPart}>
                        <Arrow />
                        <Text style={{ fontFamily: 'LexendGiga-Black', paddingLeft: 7 }}>Instagram album</Text>
                    </View>
                    <View style={styles.ImagesPart}>
                        <Pa4 />
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        paddingTop: 40
    },
    topPart: {
        flexDirection: 'row',
        paddingLeft: 25
    },
    ImagesPart: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%' 
    }   
});
