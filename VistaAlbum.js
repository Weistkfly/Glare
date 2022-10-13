import Pa1 from './assets/detalleAlbum/pa1'
import Pa2 from './assets/detalleAlbum/pa2'
import Pa3 from './assets/detalleAlbum/pa3'
import Pa4 from './assets/detalleAlbum/pa4'
import Pa5 from './assets/detalleAlbum/pa5'
import Pa6 from './assets/detalleAlbum/pa6'
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
                        <Arrow/>
                        <Text style={{fontFamily: 'LexendGiga-Black', paddingLeft: 7}}>Instagram album</Text>
                    </View>
                    <View style={styles.ImagesPart}>
                        <Pa1 />
                        <Pa2 />
                        <Pa3 />
                        <Pa4 />
                        <Pa5 />
                        <Pa6 />
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        maxWidth: '100%',
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    topPart: {
        flexDirection: 'row',
        paddingLeft: 25
    },
    ImagesPart: {
        paddingTop: 14,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    }
});
