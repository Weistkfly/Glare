import Categorys from './assets/navBar/Category'
import Setting from './assets/navBar/Setsing'
import Vectors from './assets/navBar/Vector'
import Vector1s from './assets/navBar/Vector1'
import Vector2s from './assets/navBar/Vector2'
import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
    return (
        <View style={styles.containter}>
            <View style={styles.container.item}>
                <Vectors />
                <Vector1s />
                <Categorys />
                <Vector2s />
                <Setting />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'space-between',
        justifyContent: 'end',
        item: {
            flex:1,
            flexDirection: 'row',
            alignItems: 'space-between'
        }
    },
});