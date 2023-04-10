import { StyleSheet, Dimensions } from "react-native";
import { color } from "react-native-reanimated";
import { normalize, SIZES } from "../Constants/Constants";


export const Styles = StyleSheet.create({
    mainConatiner: {
        flex: 1
    },
    splashView: {
        margin: 'auto',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    View: {
        flexDirection: 'row',
        width: '91%',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        elevation: 2,
        height: 50
    },

    error: {
        color: 'red',
        marginTop: 7,
        marginBottom: 7,
        fontSize: 15,


    },
    buttonView: {
        marginTop: 10,
        width: '91%',
        height: 50,
        borderRadius: 8,

    },
    loginText: {
        textAlign: "center",
        fontSize: 18,
        color: "#000000",
        marginBottom: 20,
        fontFamily: "Montserrat-SemiBold"
    },
    userImg: {
        height: 45,
        width: 45,
        resizeMode: "contain",
        justifyContent: "center",
        marginTop: 3,
        borderRadius:20

    },
    userTextView: {
        flexDirection: "column",
        justifyContent: "center"
    },
    userText: {
        paddingTop: 6,
        paddingLeft: 15,
        fontFamily: "Montserrat-Bold",
        color: "#000000",
        fontSize: 20
    },
    userRoleText: {
        paddingLeft: 15,
        fontFamily: "Montserrat-SemiBold",
        fontSize: 15
    },
    userImgView: {
        borderColor: "#306EFF",
        height: 30,
        width: 30,
        borderRadius: 20,
        marginLeft: 10
    },
    img: {
        width: 300,
        resizeMode: "contain"
    },
    headerProfile: {
        flexDirection: "row",

    },
    imgHome: {
        width: 100,
        resizeMode: "contain"
    },
    homelogoView: {
        height: 30,
        width: 250,
        marginLeft: 20,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    customDrawMainView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    custDrawUserImage: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginLeft: 10,
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: "center"
    },
    headerMainView: {
        height: 55,
        backgroundColor: "#F5F5F5",
        elevation: 2
    },
    forgotPinText: {
        textAlign: "center",
        fontFamily: "Montserrat-Bold",
        color: "#306EFF"
    },
    resetLoginView: {
        backgroundColor: "#F5F5F5",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        flex: 1,
        alignItems: "center",
        paddingTop: 50
    },
    buttonText: {
        textAlign: "center",
        marginVertical: 15,
        color: "#FFFFFF",
        fontSize: 18,
        fontFamily: "Montserrat-SemiBold"
    },
    logoutView: {
        flexDirection: "row",
        elevation: 5,
        backgroundColor: "#F5F5F5",
        padding: 15,alignItems:"center"
    },

    // leave related CSS
    leaveView: {
        flexDirection: "column",
        paddingStart: 7,
        paddingEnd: 5
    },
    headingText: {
        textAlign: "center",
        fontSize: SIZES.medium,
        marginTop: 10,
        marginBottom: 10,
        fontFamily: "Montserrat-ExtraBold",
        fontWeight: '700'

    },
    cellText: {
        fontSize: 10,
        fontWeight: 700,
        marginRight: 10
    },
    // dashBoardView:{
    //     flexDirection:"row",
    // },
    FlatListView: {
        justifyContent: "center",
        alignItems: "center",
        height: 90,
        width: 90,
    },
    leaveCountText: {
        textAlign: "center",
        fontSize: SIZES.h3,
        fontFamily: "Montserrat-SemiBold"

    },
    // General holidays dropdown CSS
    dropDownView: {
        height: 30,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 0.5
    },
    yearListView: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between"
    },
    yearList: {
        fontFamily: "Montserrat-Bold",
        fontSize: normalize(SIZES.h5),
        alignSelf: 'center'
    },
    HolDayListView: {
        flexDirection: "row",
        alignSelf: "flex-end",
        elevation: 5,
        height: 90,
        width: '95%',
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        margin: 10,
        backgroundColor: "#FFFFFF"
    },
    HoldDateView: {
        backgroundColor: "#64B5F6",
        width: '30%',
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    dropDown: {
        height: 150,
        borderRadius: 5,
        backgroundColor: "#FAFAFA",
        padding: 10,
        marginLeft: 10
    },
    dateText: {
        fontFamily: "Montserrat-ExtraBold",
        fontSize: 25,
        color:"#FAFAFA"
        
    },
    monthText: {
        fontFamily: "Montserrat-SemiBold", fontSize: 15,
        color:"#F5F5F5"
    },
    occassionText: {
        fontFamily: "Montserrat-Bold",
        fontSize: 20,
        padding: 8
    },
    dayText: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 12,
        padding: 8
    },

    // Profile page related Css

    ProfileView: {
        height: '40%',
        width: '100%',
        borderBottomLeftRadius: 500,
        alignSelf: "center",

    },
    profilImgView: {
        height: 150,
        width: 150,
        alignSelf: "center"
    },
    ProfileImg: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        borderRadius: 80,
        borderWidth:1,
        borderColor:"green"
    },
    addIconView: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        bottom: 190,
        right: 150,
        width: 25,
        height: 25,
        borderRadius: 12,
        backgroundColor: "red"
    },
    TextView: {
        alignItems: "center",

    },
    EmpName: {
        fontFamily: "Montserrat-ExtraBold",
        fontSize: 15
    },
    designation: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 12
    },
    EmpDetailsHeader: {
        padding: 6,
        backgroundColor: '#B3E5FC',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    EmpDetView: {
        flexDirection: "column", marginLeft: 10
    },
    EmpDetTitleText: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 15
    },
    EmpDetTitleValue: {
        fontFamily: "Montserrat-ExtraBold",
        fontSize: 13
    },

    // modal Styling on Profile page 
    modalMainContainer: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        position: 'absolute',
        bottom: 0, width: '100%',
        borderTopLeftRadius: 25,
        backgroundColor: '#F5F5F5',
        borderTopRightRadius: 25,
        height: Dimensions.get('window').height * 0.25,
        maxHeight: Dimensions.get('window').height * 0.25,
    },
    modalView: {
        flexDirection: "row", alignItems: "center", padding: 10
    },
    modalText: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 15
    },
    // timeSheet form Css

    headerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    headerViewText: {
        flexDirection: "row"

    },
    // TaskDetails.js Page related css
   MainHeading: {
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        textDecorationLine: 'underline'
    },
ViewActivity:{
    flexDirection: "row",
     justifyContent: 'space-between',
      marginBottom: 15
},
fieldsText:{
    fontFamily: 'Montserrat-SemiBold',
    paddingBottom:5
},
textInputFields:{
    borderWidth: 0.7, 
    borderColor: "#306EFF",
    borderRadius:15,
    paddingLeft:10 
}




})

export const Colors = {
    primary: "#FAFAFA",
    secondary: "#B3E5FC",
    tertiary: "#2962FF",
    formBg: "#F5F5F5",
    buttons: "#306EFF"
}