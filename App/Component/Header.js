import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from '../Global/ApplicationCss'
import { useNavigation } from '@react-navigation/native'
import { connect} from 'react-redux'


const Header = ({ emplyoeeData }) => {
    const navigation = useNavigation();
    return (
        <View style={Styles.headerMainView}>
            <View style={Styles.headerProfile}>
                <View style={Styles.userImgView}>
                    <TouchableOpacity onPress={() => {
                        navigation.openDrawer();
                    }}>
                        <Image source={{uri: `http://3.111.227.14:8092${emplyoeeData.profile_pic}`}} style={Styles.userImg} />
                    </TouchableOpacity>

                </View>
                <View style={Styles.homelogoView}>
                    <Image source={require('../Assets/Images/AgileLogo.png')} style={Styles.imgHome} />
                </View>
            </View>

        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        emplyoeeData: state.emplyoeeData
    }
}

export default connect(mapStateToProps, null)(Header)