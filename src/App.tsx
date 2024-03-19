import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './screens/home/Home';
import Search from './screens/search/Search';
import Saved from './screens/saved/Saved';
import { Recipe, RootStackParamList } from './globals/types';
import RecipeDetail from './screens/recipe-details/RecipeDetails';
import SearchResults from './screens/search/SearchResults';
import Welcome from './screens/welcome/Welcome';
import SignUp from './screens/sign-up/SignUp';
import Login from './screens/login/Login';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f59002"
      inactiveColor='#0f6374'
      barStyle={{ backgroundColor: '#f6e8d3' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            focused ? <Image source={require('../assets/home-selected.png')} style={{ width: 20, height: 20 }} /> :
              <Image source={require('../assets/home-unselected.png')} style={{ width: 20, height: 20 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, focused }) => (
            focused ? <Image source={require('../assets/search-selected.png')} style={{ width: 20, height: 20 }} /> :
              <Image source={require('../assets/search-unselected.png')} style={{ width: 20, height: 20 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            focused ? <Image source={require('../assets/bookmark-selected.png')} style={{ width: 20, height: 20 }} /> :
              <Image source={require('../assets/bookmark-unselected.png')} style={{ width: 20, height: 20 }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MyTabs} options={{ headerShown: false }} />
          <Stack.Screen name="RecipeDetail" component={RecipeDetail}   options={{ headerShown: false }}/>
          <Stack.Screen name="SearchResults" component={SearchResults}   options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

