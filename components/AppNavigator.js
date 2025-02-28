import WelcomeScreen from './WelcomeScreen';
import NameScreen from './NameScreen';
import LogIn from './LogIn';
import ResetPassword from './ResetPassword';
import UserType from './UserType';
import goalScreen from './goalScreen';
import NutritionForm from './NutritionForm';
import SettingProfile from './SettingProfile';
import MotivationalScreen from './MotivationalScreen';
import TransformationScreen from './TransformationScreen';
import DietaryPreferences from './dietaryPreferences';
import ActivityLevel from './ActivityLevel';
import Gratitude from './Gratitude';

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
                <Stack.Screen name= 'SettingProfile' component={SettingProfile}/>
                <Stack.Screen name='nutritionForm' component={NutritionForm}/>
                <Stack.Screen name='MotivationalScreen' component={MotivationalScreen}/>
                <Stack.Screen name='TransformationScreen' component={TransformationScreen}/>
                <Stack.Screen name='DietaryPreferences' component={DietaryPreferences}/>
                <Stack.Screen name='ActivityLevel' component={ActivityLevel}/>
                <Stack.Screen name='Gratitude' component={Gratitude}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}