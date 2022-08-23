import React from 'react'

import { View, Text, Image, TouchableOpacity } from 'react-native'

import logo from '../../../assets/logoNBA.png'

import Styles from './style.scss'


export function Home() {
    return <>
        <View style={Styles.header}>
            <Image style={Styles.logo} source={logo}/>
            <View style={Styles.TitleContainer}>
                <Text style={Styles.title}>Bem vindo ao NBA Stats</Text>
            </View>
        </View>
        <View>
            <Text>Confira algumas estatísticas da maior liga de basquete do mundo!</Text>

        </View>
    </>
}
