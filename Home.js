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

export default function Home() {

    return (
        <View style={styles.container}>
            <View style={styles.flexcontainer}>
                <View style={styles.logo}>
                    <Logo style={styles.logo} />
                </View>
                <View style={styles.flexcontainer.item}>
                    <Text>Albumes recientes</Text>
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
                <View style={styles.flexcontainer.item}>
                    <Text>Etiquetas</Text>
                    <View style={styles.tags}>
                        <Tag1 style={styles.tags.item} />
                        <Tag2 style={styles.tags.item} />
                        <Tag3 style={styles.tags.item} />
                        <Tag4 style={styles.tags.item} />
                    </View>
                </View>
                <View style={styles.flexcontainer.item}>
                    <Text>Lugares visitados</Text>
                    <View style={styles.lugaresVisitados}>
                        <View style={styles.lugaresVisitados.item}>
                            <Lugar1 />
                            <Text>La Romana</Text>
                        </View>
                        <View style={styles.lugaresVisitados.item}>
                            <Lugar2 />
                            <Text>Hato Mayor</Text>
                        </View>
                        <View style={styles.lugaresVisitados.item}>
                            <Lugar3 />
                            <Text>La Altagracia</Text>
                        </View>
                    </View>
                </View>
                <View style={{...styles.flexcontainer.item, ...styles.welcome}}>
                    <Welcome />
                    <Text style={{maxWidth: 170}}>¡Organiza y filtra tus colecciones  al instante!</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '100%'
    },
    flexcontainer: {
        flex: 1,
        flexDirection: "column",
        //alignContent: 'flex-end',
        width: '100%',
        flexWrap: "wrap",
        item: {
            height: 150,
            width: '100%',
            borderWidth: 1
        },
    },
    logo: {
        paddingVertical: 10,
        alignItems: 'flex-end'
        //alignSelf: 'flex-end'
    },
    albumes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        item: {
            paddingTop: 5,
            flexDirection: 'column',
            alignItems: 'center',
            flexWrap: 'wrap',
            borderWidth: 1
        }
    },
    textView: {
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
        justifyContent: 'space-around',
        item: {
            borderWidth: 1,
            backgroundColor: '#F4F4F4',
            padding: 10
        }

    },
    lugaresVisitados: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        item:{
            borderWidth: 1,
            flexDirection: 'column',
            alignItems: 'center',
            padding: 3
        }
    },
    welcome: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
});
