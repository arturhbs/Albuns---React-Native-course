// import files 
import React from 'react';
import { AppRegistry} from 'react-native';
import Header from './src/components/header';


// create component

const App = () => {
    return (
        <Header />
    )
}


// render it

AppRegistry.registerComponent('albuns', () => App );