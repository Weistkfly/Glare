import { StyleSheet, Text, View } from 'react-native';
import Logo from './assets/Logo';
import Recent1 from './assets/inicio/recent1';
import { useFonts } from 'expo-font';

export default function Home() {
    const [fontsLoaded] = useFonts({
        'LexendGiga-Black': require('./assets/fonts/LexendGiga-Black.ttf'),
        'LexendGiga-SemiBold': require('./assets/fonts/LexendGiga-SemiBold.ttf'),
      });
      if(fontsLoaded){
        return (
            <View style={styles.container}>
                <View >
                    <View style={styles.logo}>
                        <Logo />
                    </View>
                    <View style={{paddingTop: 34}}>
                        <Text style={styles.Title}>Albumes recientes</Text>
                        <Text style={styles.NormalText}>12 Albumes</Text>
                        <View style={styles.albumes}>
                            <View>
                                <View style={styles.elDivDeArriba}>
                                    <Recent1/>
                                    <View style={{paddingLeft: 15}}>
                                        <Text>Instagram Ciudad</Text>
                                        <Text>Ultima modificacion -</Text>
                                        <Text>Hace 1 hr</Text>
                                    </View>
                                </View>
                                <View style={styles.elDivDelMedio}>
                                    <Recent1 style={{}}/>
                                    <View style={styles.elDivDeAlLado}>
                                        <Recent1/>
                                        <Recent1/>
                                        <Recent1/>
                                        <Recent1/>
                                    </View>
                                </View>
                            </View>
                        </View>
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

        paddingTop: 40
    },
    Title:{
        fontFamily: 'LexendGiga-Black'
    },
    NormalText:{
        fontFamily: 'LexendGiga-SemiBold', 
        fontSize: 11
    },
    logo: {
        paddingTop: 35,
        alignItems: 'flex-end'
        //alignSelf: 'flex-end'
    },
    elDivDeArriba:{
        flexDirection: 'row',
        alignContent: 'flex-start'
    },
    elDivDelMedio:{
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
    },
    elDivDeAlLado:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        margin: 20,
        maxWidth: 180
    }
});
