import { StyleSheet, Text, View } from 'react-native';
import Logo from './assets/Logo';
import Recent1 from './assets/inicio/recent1';
import Recent2 from './assets/inicio/recent2';
import Recent3 from './assets/inicio/recent3';
import Recent4 from './assets/inicio/recent4';
import Tag1 from './assets/inicio/Pets';
import Tag2 from './assets/inicio/FastFood';
import Tag3 from './assets/inicio/TagFaces';
import Tag4 from './assets/inicio/Nature';
import Lugar1 from './assets/inicio/LaRomana';
import Lugar2 from './assets/inicio/HatoMayor';
import Lugar3 from './assets/inicio/LaAltagracia';
import Welcome from './assets/inicio/Welcome';
import { useFonts } from 'expo-font';

export default function Home() {
    const [fontsLoaded] = useFonts({
        'LexendGiga-Black': require('./assets/fonts/LexendGiga-Black.ttf'),
        'LexendGiga-SemiBold': require('./assets/fonts/LexendGiga-SemiBold.ttf'),
      });
      if(fontsLoaded){
        return (
            <View style={styles.container}>
                <View style={styles.flexcontainer}>
                    <View style={styles.logo}>
                        <Logo />
                    </View>
                    <View style={{paddingTop: 34}}>
                        <Text style={styles.Title}>Albumes recientes</Text>
                        <View style={styles.albumes}>
                            <View style={styles.albumes.item}>
                                <Recent1 >
                                </Recent1>
                                <Text style={styles.textView}>Almbun nombre</Text>
                            </View>
                            <View style={styles.albumes.item}>
                                <Recent2 />
                                <Text style={styles.textView}>Almbun nombre</Text>
                            </View>
                            <View style={styles.albumes.item}>
                                <Recent3 />
                                <Text style={styles.textView}>Almbun nombre</Text>
                            </View>
                            <View style={styles.albumes.item}>
                                <Recent4 />
                                <Text style={styles.textView}>Almbun nombre</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingTop: 41}}>
                        <Text style={styles.Title}>Etiquetas</Text>
                        <View style={styles.tags}>
                            <Tag1 style={styles.tags.item} />
                            <Tag2 style={styles.tags.item} />
                            <Tag3 style={styles.tags.item} />
                            <Tag4 style={styles.tags.item} />
                        </View>
                    </View>
                    <View style={styles.viewSpace}>
                        <Text style={styles.Title}>Lugares visitados</Text>
                        <View style={styles.lugaresVisitados}>
                            <View style={styles.lugaresVisitados.item}>
                                <Lugar1 />
                                <Text style={styles.NormalText}>La Romana</Text>
                            </View>
                            <View style={styles.lugaresVisitados.item}>
                                <Lugar2 />
                                <Text style={styles.NormalText}>Hato Mayor</Text>
                            </View>
                            <View style={styles.lugaresVisitados.item}>
                                <Lugar3 />
                                <Text numberOfLines={1} style={styles.NormalText}>Higuey</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.welcome}>
                        <Welcome />
                        <Text style={{...styles.NormalText, maxWidth: 170}}>¡Organiza y filtra tus colecciones  al instante!</Text>
                        <View>
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
        backgroundColor: '#ffffff',
        maxWidth: '90%',
        paddingTop: 40,
        borderWidth: 1
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
    albumes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        item: {
            paddingTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1
        }
    },
    textView: {
        fontFamily: 'LexendGiga-SemiBold',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        top: 32,
        left: 7,
        right: 0,
        bottom: 0,
      },
    tags: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        item: {
            //borderWidth: 1,
            backgroundColor: '#F4F4F4',
            borderRadius: 15,
            width: 65,
            height: 65,
            padding: 15
        }
    },
    viewSpace:{
        paddingTop: 41
    },
    lugaresVisitados: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        item:{
            borderWidth: 1,
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 15,    
            maxWidth: 114         
        }
    },
    welcome: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingTop: 14,
    }
});
