// import files 
import React from 'react';
import { AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumLIst';


// create component

const App = () => {
    return (
        <View>
            <Header headerName={'Ola'}/>
            <AlbumList />
        </View>
    );
}


// render it

AppRegistry.registerComponent('albuns', () => App );