import React, {useMemo} from 'react';
import {Button, Text, View} from 'react-native';

// Types
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router/types';

// Styles
import styles from '../../styles/pages';

export type Props = {
  // navigation is only passed in to every screen component
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const Home = ({navigation}: Props) => {
  const randomUserId = useMemo(
    () => Math.floor(Math.random() * 1000).toString(),
    [],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Go to Hello World"
        onPress={() => navigation.navigate('HelloWorld')}
      />
      <Button
        title={`Go to User ID ${randomUserId}`}
        onPress={() => navigation.navigate('User', {userId: randomUserId})}
      />
    </View>
  );
};

export default Home;
