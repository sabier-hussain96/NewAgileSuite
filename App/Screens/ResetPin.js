import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import {Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { FormTextInput } from '../Component/FormInput';
import { INPUT_FIELD_NAME, INPUT_PLACE_HOLDER_CONSTANTS, screenNames, stringConstants } from '../Constants/Constants';
import { Colors, Styles } from '../Global/ApplicationCss';
import Lottie from 'lottie-react-native'



const Login = () => {
    const navigation = useNavigation()
    const windowHeight = Dimensions.get('window').height;
    const { control, handleSubmit, formState } = useForm();
    return (
        <View style={[Styles.mainConatiner, { backgroundColor: Colors.primary }]}>
            <View style={{ alignItems: "center" }}>
                {/* <Image source={require('../Assets/Images/AgileLogo.png')} style={{ width: 300, resizeMode: "contain" }} /> */}
              <Lottie source={require('../Global/Animation/resetPassword.json')} autoPlay loop style={{ height:400, width:400}}/>  
            </View>
            {/* login form part */}
            <View style={Styles.resetLoginView}>
                <FormTextInput inputName={INPUT_FIELD_NAME.USER_NAME}
                control={control}
                formState={formState}
                maxLength={20}
                defaultValue={stringConstants.EMPTY}
                placeholder={INPUT_PLACE_HOLDER_CONSTANTS.USER_NAME}
                 />
                
                <View style={[Styles.buttonView,{backgroundColor:Colors.buttons}]}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate(screenNames.Reset_Pin)
                    }} style={{ textAlign: "center"}}>
                        <Text style={Styles.buttonText}>Reset PIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={[Styles.buttonView,{backgroundColor:Colors.buttons}]}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate(screenNames.Login)
                    }} style={{ textAlign: "center"}}>
                        <Text style={Styles.buttonText}>Back to LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login;