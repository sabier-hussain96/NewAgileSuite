import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Colors, Styles } from '../Global/ApplicationCss'
import { SIZES } from '../Constants/Constants'
import { FlatList } from 'react-native-gesture-handler'
import { DataTable } from 'react-native-paper';
import { leavesData } from '../Component/dummyData'

const optionsPerPage = [2, 3, 4];
const Leaves = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);


  // table displaying the leave balance

  return (
    <View style={Styles.mainConatiner}>
      {/* Leave OverView for Financial year */}
      <View style={Styles.leaveView}>
        <Text style={Styles.headingText}>Overall Leave Overview for Financial Year</Text>
        <View style={Styles.leaveView}>
          <FlatList
            numColumns={4}
            data={leavesData}
            renderItem={({ item }) => (
              <View key={item.id} style={[Styles.FlatListView, { backgroundColor: item.bgColor }]}>
                <Text style={[Styles.leaveCountText, { color: item.textColor }]}>{item.leaves}</Text>
                <Text style={{ textAlign: "center", color: item.textColor }}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </View>
      {/* OverAll leave BreakUP */}
      <View>
        <Text style={Styles.headingText}>Overall Leave Breakup for Financial Year</Text>
        <DataTable FlexStyle={{borderWidth:1,borderColor:"black"}}>
          {/* Column Header */}
          <DataTable.Header style={{flexWrap:'wrap'}}>
            <DataTable.Title textStyle={{fontSize:10,fontWeight:700}}>Leave Name</DataTable.Title>
            <DataTable.Title textStyle={{fontSize:10,marginLeft:42,fontWeight:700}}>CF</DataTable.Title>
            <DataTable.Title textStyle={{fontSize:10,marginLeft:20,fontWeight:700}}>Credited</DataTable.Title>
            <DataTable.Title textStyle={{fontSize:10,marginLeft:33,fontWeight:700}}>Total</DataTable.Title>
            <DataTable.Title textStyle={{fontSize:10,marginLeft:25,fontWeight:700}}>Availed</DataTable.Title>
            <DataTable.Title textStyle={{fontSize:10,marginLeft:23,fontWeight:700}}>Balance</DataTable.Title>
          </DataTable.Header>
          {/* Casual Leave row */}
          <DataTable.Row style={{flexWrap:'wrap'}}>
            <DataTable.Cell textStyle={{fontSize:9,fontWeight:700,color:"blue"}} >Casual Leave</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText} numeric>0.0</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText} numeric>4.7</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText} numeric>4.7</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText} numeric>2.5</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText} numeric>0.4</DataTable.Cell>
          </DataTable.Row>

          {/* Earned Leave row */}
          <DataTable.Row style={{flexWrap:'wrap'}}>
            <DataTable.Cell textStyle={{fontSize:9,fontWeight:700, color:"green"}} >Earned Leave</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText} numeric>0.0</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText}numeric>11.4</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText} numeric>11.4</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText} numeric>2.5</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText} numeric>8.9</DataTable.Cell>
          </DataTable.Row>

          {/* Sick Leave row */}
          <DataTable.Row style={{flexWrap:'wrap'}}>
            <DataTable.Cell textStyle={{fontSize:9,fontWeight:700,color:"red"}}>Sick Leave</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText} numeric>0.0</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText} numeric>3.6</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText} numeric>3.6</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText}numeric>2.0</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cellText} numeric>1.6</DataTable.Cell>
          </DataTable.Row>

        {/* <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-3"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      /> */}
        </DataTable>
      </View>
    </View>
  )
}

export default Leaves