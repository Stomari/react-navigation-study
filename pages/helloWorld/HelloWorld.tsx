import React from 'react';
import {Button, Text, View} from 'react-native';

// Types
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router/types';

// Styles
import styles from '../../styles/pages';

export type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HelloWorld'>;
};

const HelloWorld = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default HelloWorld;
