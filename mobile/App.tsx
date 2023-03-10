
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black} from '@expo-google-fonts/inter'
import { Loading } from './src/components/loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black
  })

  if(!fontsLoaded){
    return (
    <View style={styles.container}>
    <Loading />
    </View>)
  }
  else{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World! teste de refresh ? </Text>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color: "#fff",
    fontFamily: 'Inter_800ExtraBold'
  }
});
