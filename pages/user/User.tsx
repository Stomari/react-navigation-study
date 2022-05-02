import React from 'react';
import {Button, Text, View} from 'react-native';

// Types
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../router/types';

// Styles
import styles from '../../styles/pages';

export type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'User'>;
  route: RouteProp<RootStackParamList, 'User'>;
};

const User = ({navigation, route}: Props) => {
  const {userId} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`User: ${userId}`}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to Hello World"
        onPress={() => navigation.navigate('HelloWorld')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default User;
