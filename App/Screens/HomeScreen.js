import * as React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Header from '../Component/Header';
import AssignManager from './AssignManager';
import GeneralHoliday from './GeneralHoliday';
import Leaves from './Leaves';
import Todo from './Todo';

const FirstRoute = () => (

  <Todo />
);

const SecondRoute = () => (
  <Leaves />

);
const ThirdRoute = () => (
  <AssignManager />

);
const FourthRoute = () => (

  <GeneralHoliday />
);


const renderScene = SceneMap({
  todo: FirstRoute,
  leaves: SecondRoute,
  manager: ThirdRoute,
  generalHoliday: FourthRoute,

});



const HomeScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'todo', title: 'Todo' },
    { key: 'leaves', title: 'Leaves' },
    { key: 'manager', title: 'Manager' },
    { key: 'generalHoliday', title: 'Holidays' },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <Header />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar {...props}  indicatorStyle={styles.indicatorStyle} tabStyle={{ backgroundColor: 'rgba(0 122 255 0.12)' }} labelStyle={{ fontWeight: '500',fontFamily:"Montserrat-SemiBold",marginRight:10 }} />
        )}
      />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: 'rgb(0 122 255)',
    height: 5,
  }
});