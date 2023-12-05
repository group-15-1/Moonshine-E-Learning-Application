// importing the navigators
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importing screens
import dashboard from './studentDashboard/dashboard';
import myCourse from './screens/myCourse';
import english from './screens/english';
import Alphabet from './screens/Alphabet';
import animal from './screens/animal';
import colors from './screens/colors';
import fruit from './screens/fruit';
import numbers from './screens/numbers';
import shapes from './screens/shapes';
import vegitables from './screens/vegitables';
import Food from './screens/food';
import vehicle from './screens/vehicle';
import classRoom from './screens/classRoom';
import songs from './screens/songs';
import login from './authantication/login';
import signUp from './authantication/signUp';
import resetPassword from './authantication/resetPassword';
import sendCode from './authantication/sendCode';
import signUpSucsess from './authantication/signUpSucsess';
import profile from './profile/profile';
import resetPassword2 from './authantication/resetPassword2';
import goodHabits from './screens/goodHabits';
import startScreen from "./screens/start";
import settings from './settings/settings';
import studyPlan from './studyPlan/studyPlan';
import grade from './grade/grade';
import notification from './settings/notification';
import role from "./userRole/userRole";
import teacherSignUp from "./teacherAuthantication/teacherSignUp";
import teacherLogin from "./teacherAuthantication/teacherLogin";
import teacherSignUpSuccess from "./teacherAuthantication/teacherSignUpSuccess";
import teacherResetPassword1 from "./teacherAuthantication/teacherResetPassword1";
import teacherResetPassword2 from "./teacherAuthantication/teacherResetPassword2";
import teacherResetPasswordSuccess from "./teacherAuthantication/teacherResetPasswordSuccess";
import administrator from "./administrator/Administrator";


import story from './story/story';
import redRidingHood from './story/redRidingHood';
import hareAndTheTortoise from './story/hareAndTheTortoise';
import foxAndGrapes from './story/foxAndGrapes';
import CharlieBryce from './story/CharlieBryce';
import princessAndThePea from './story/princessAndThePea';
import music from './songs/music';
import games from './screens/games';
import colorSearch from './games/colorSearch';
import animalSearch from './games/animalSearch';
import nationalSymbols from './nationalSymbols/nationalSymbols';
import nationalTree from './nationalSymbols/nationalTree';
import emblam from './nationalSymbols/emblam';
import nationalFlag from './nationalSymbols/nationalFlag';
import nationalFlower from './nationalSymbols/nationalFlower';
import nationalBird from './nationalSymbols/nationalBird';
import kidsGame from './games/kidsGame';
import aboutUs from './settings/aboutUs';
import help from './settings/help';
import finalQuiz from './finalQuiz/quizFinal';

import teacherDashboard from "./teacherDashboard/teacherDasboard";
import addGrade from "./teacherDashboard/addGrade";

// creating the main stack navigator
const myStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <myStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <myStack.Screen name="Start" component={startScreen} />
        <myStack.Screen name="role" component={role}/>
        <myStack.Screen name="login" component={login} />
        <myStack.Screen name="signUp" component={signUp} />
        <myStack.Screen name="teacherSignUp" component={teacherSignUp}/>
        <myStack.Screen name="teacherLogin" component={teacherLogin}/>
        <myStack.Screen name="teacherSignUpSuccess" component={teacherSignUpSuccess}/>
        <myStack.Screen name="teacherResetPassword1" component={teacherResetPassword1}/>
        <myStack.Screen name="teacherResetPassword2" component={teacherResetPassword2}/>
        <myStack.Screen name="teacherResetPasswordSuccess" component={teacherResetPasswordSuccess}/>
        <myStack.Screen name="teacherDashboard" component={teacherDashboard}/>
        <myStack.Screen name="resetPassword" component={resetPassword} />
        <myStack.Screen name="sendCode" component={sendCode} />
        <myStack.Screen name="signUpSucsess" component={signUpSucsess} />
        <myStack.Screen name="dashboard" component={newstack} />
        <myStack.Screen name="resetPassword2" component={resetPassword2} />
        <myStack.Screen name="TeacherDashboard" component={newDashboard}/>
        <myStack.Screen name="addGrade" component={addGrade}/>
        <myStack.Screen name="administrator" component={administrator}/>
        
      </myStack.Navigator>
    </NavigationContainer>
  );
};

//creating the engligh subject Stack Navigator
const Stack = createStackNavigator();
function englishStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',

        headerStyle: {
          backgroundColor: '#00d804',
          height: 100,
        },

        headerTitleStyle: {
          fontSize: 27,
        }
      }}>

      <Stack.Screen name="English" component={english} options={{ title: 'English', headerShown: false }} />
      <Stack.Screen name="Alphabet" component={Alphabet} options={{ title: 'Alphabet' }} />
      <Stack.Screen name="animal" component={animal} options={{ title: 'Animals' }} />
      <Stack.Screen name="colors" component={colors} options={{ title: 'Colours' }} />
      <Stack.Screen name="fruit" component={fruit} options={{ title: 'Fruits' }} />
      <Stack.Screen name="numbers" component={numbers} options={{ title: 'Numbers' }} />
      <Stack.Screen name="shapes" component={shapes} options={{ title: 'Shapes' }} />
      <Stack.Screen name="vegitables" component={vegitables} options={{ title: 'Vegetables' }} />
      <Stack.Screen name="Food" component={Food} options={{ title: 'Food' }} />
      <Stack.Screen name="vehicle" component={vehicle} options={{ title: 'Vehicles' }} />
      <Stack.Screen name="classRoom" component={classRoom} options={{ title: 'Class Room Items' }} />
      <Stack.Screen name="goodHabits" component={goodHabits} options={{ title: 'Good Habits' }} />
    </Stack.Navigator>
  );
}

// creating the dashboard stack navigator
const dashboardStack = createStackNavigator();
function newstack() {
  return (
    <dashboardStack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center'
      }}>

      <dashboardStack.Screen name="dashboard" component={dashboard} options={{ title: 'Dashboard', headerShown: false }} />
      
      <dashboardStack.Screen name="myCourse" component={myCourse} options={{ headerShown: false}} />
      <dashboardStack.Screen name="english" component={englishStack} options={{ headerShown: false }} />
      <dashboardStack.Screen name="profile" component={profile} options={{ headerShown: false }} />

      <dashboardStack.Screen name="settings" component={settings} options={{ headerShown: false }} />
      <dashboardStack.Screen name="aboutUs" component={aboutUs} options={{ headerShown: false }} />
      <dashboardStack.Screen name="help" component={help} options={{ headerShown: false }} />
      
      <dashboardStack.Screen name="studyPlan" component={studyPlan} options={{ headerShown: false }} />
      <dashboardStack.Screen name="notification" component={notification} options={{ headerShown: false }} />
      <dashboardStack.Screen name="grade" component={grade} options={{ headerShown: false }} />
      <dashboardStack.Screen name="songs" component={songs} options={{ title: 'Songs',headerShown: false }} />
      <dashboardStack.Screen name="finalQuiz" component={finalQuiz} options={{ title: 'Final Quiz',headerShown: false }} />
      <dashboardStack.Screen name="story" component={Stories} options={{ title:'stories',headerShown: false }} />
      <dashboardStack.Screen name="music" component={music} options={{ title:'music',headerShown: false }} />
      <dashboardStack.Screen name="games" component={games} options={{ title:'games',headerShown: false }} />
      <dashboardStack.Screen name="animalSearch" component={animalSearch} options={{ title:'animalSearch',headerShown: false }} />
      <dashboardStack.Screen name="colorSearch" component={colorSearch} options={{ title:'colorSearch',headerShown: false }} />
      <dashboardStack.Screen name="kidsGame" component={kidsGame} options={{ title:'colorSearch',headerShown: false }} />

      <dashboardStack.Screen name="nationalSymbols" component={nationalSymbols} options={{ title:'colorSearch',headerShown: false }} />
      <dashboardStack.Screen name="emblam" component={emblam} options={{ title:'colorSearch',headerShown: false }} />
      <dashboardStack.Screen name="nationalTree" component={nationalTree} options={{ title:'colorSearch',headerShown: false }} />
      <dashboardStack.Screen name="nationalFlag" component={nationalFlag} options={{ title:'colorSearch',headerShown: false }} />
      <dashboardStack.Screen name="nationalFlower" component={nationalFlower} options={{ title:'colorSearch',headerShown: false }} />
      <dashboardStack.Screen name="nationalBird" component={nationalBird} options={{ title:'colorSearch',headerShown: false }} />
      
    </dashboardStack.Navigator>
  );
}

// creating the dashboard stack navigator
const teacherDashboardStack = createStackNavigator();

function newDashboard() {
  return (
    <teacherDashboardStack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center'
      }}>
      
      <teacherDashboard.Screen name="dashboard" component={newstack} options={{ headerShown: false }} />
      <teacherDashboard.Screen name="addGrade" component={addGrade}  options={{ headerShown: false }} />
      <teacherDashboard.Screen name="viewGrades" component={viewGrades}  options={{ headerShown: false }} />

    </teacherDashboardStack.Navigator>
  );
}

const storyStack = createStackNavigator();
function Stories(){
  return(
    <storyStack.Navigator
      screenOptions={{
        headerShown: false,
    }}>
      <storyStack.Screen name="story" component={story}/>
      <storyStack.Screen name="redRidingHood" component={redRidingHood}/>
      <storyStack.Screen name="hareAndTheTortoise" component={hareAndTheTortoise}/>
      <storyStack.Screen name="foxAndGrapes" component={foxAndGrapes}/>
      <storyStack.Screen name="CharlieBryce" component={CharlieBryce}/>
      <storyStack.Screen name="princessAndThePea" component={princessAndThePea}/>
    </storyStack.Navigator>
  );
}

export default App;