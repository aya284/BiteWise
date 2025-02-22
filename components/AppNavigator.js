import WelcomeScreen from './WelcomeScreen';
import NameScreen from './NameScreen';
import LogIn from './LogIn';
import ResetPassword from './ResetPassword';
import UserType from './UserType';
import goalScreen from './goalScreen';
import NutritionForm from './NutritionForm';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}> 
                <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/> 
                <Stack.Screen name='LogIn' component={LogIn} />
                <Stack.Screen name='NameScreen' component={NameScreen} />
                <Stack.Screen name='ResetPassword' component={ResetPassword}/>
                <Stack.Screen name='UserType' component={UserType}/>
                <Stack.Screen name='goalScreen' component={goalScreen}/>
                <Stack.Screen name='nutritionForm' component={NutritionForm}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}