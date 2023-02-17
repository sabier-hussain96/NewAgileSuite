import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Image, KeyboardAvoidingView, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { connect } from 'react-redux';
import EyeIcon from '../Assets/Icons/EyeIcon';
import EyeoffIcon from '../Assets/Icons/EyeoffIcon';
import { FormTextInput } from '../Component/FormInput';
import { FORM_INPUT_RULES, INPUT_FIELD_NAME, INPUT_PLACE_HOLDER_CONSTANTS, screenNames, stringConstants } from '../Constants/Constants';
import { Colors, Styles } from '../Global/ApplicationCss';
import { login } from '../Redux/Actions/commonActions';



const Login = ({login}) => {
    const navigation = useNavigation()
    const { control, handleSubmit, formState } = useForm();
    const [secureText, setSecuretext] = useState(true)

    const [disabled,setDisabled] = useState(false)

    const Sigin = async (data) => {
        console.log(data)
        setDisabled(true)
      const requestData ={
        email:data.Username,
        password:data.Pin
      }
        login(requestData, async response => {
            const token = response.data.access_token
            const userId = JSON.stringify(response.data.userdata.hr_employee.id)
            console.log(response.status);
            if(response.status === 200){
                navigation.replace(screenNames.DashBoard) 
            }else
            {
                navigation.replace(screenNames.Login) 
            }         
         } )
    }

    const handleSecuretext = () => {
        setSecuretext(false)
    }

    const handleSecuretextOut = () => {
        setSecuretext(true)
    }
    return (
        <KeyboardAvoidingView style={[Styles.mainConatiner, { backgroundColor: Colors.primary }]}>
            <View style={{ alignItems: "center" }}>
                <Image source={require('../Assets/Images/AgileLogo.png')} style={Styles.img} />
            </View>
            {/* login form part */}
            <View style={{
                backgroundColor: Colors.formBg, borderTopLeftRadius: 50, borderTopRightRadius: 50, flex: 1,
                alignItems: "center", paddingTop: 20
            }}>
                <Text style={Styles.loginText}>Sign In</Text>
                <FormTextInput inputName={INPUT_FIELD_NAME.USER_NAME}
                    control={control}
                    minLength={3}
                    maxLength={25}
                    formState={formState}
                    rules={FORM_INPUT_RULES.UserIdRule}
                    defaultValue={stringConstants.EMPTY}
                    placeholder={INPUT_PLACE_HOLDER_CONSTANTS.USER_NAME}

                />
                <FormTextInput inputName={INPUT_FIELD_NAME.USER_PIN}
                    control={control}
                    formState={formState}
                    minLength={3}
                    maxLength={8}
                    returnKeyType="next"
                    secureTextEntry={secureText === false ? false : true}
                    defaultValue={stringConstants.EMPTY}
                    rules={FORM_INPUT_RULES.pinRule}
                    placeholder={INPUT_PLACE_HOLDER_CONSTANTS.USER_PIN}
                  

                    icon={

                        <Pressable style={{ marginLeft: 'auto' }} onLongPress={handleSecuretext} onPressOut={handleSecuretextOut}>
                            {secureText === false ?
                                <EyeIcon stroke="#306EFF" style={{ marginLeft: "auto" }} />
                                :
                                <EyeoffIcon stroke="#306EFF" style={{ marginLeft: "auto" }} />
                            }
                        </Pressable>
                    }
                />
                <View style={{ flexDirection: "row", alignSelf: "flex-end", paddingRight: 20, marginTop: -20 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate(screenNames.Reset_Pin)
                    }}>
                        <Text style={Styles.forgotPinText}>Forgot Pin ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={[Styles.buttonView, { backgroundColor: disabled !== false ? Colors.primary : Colors.buttons }]}>
                    <TouchableOpacity disabled={disabled} onPress={handleSubmit(Sigin)}>
                        {disabled !== false  ?   
                        <ActivityIndicator style={{marginTop:8}} />
                        :

                        <Text style={Styles.buttonText}>LOGIN</Text>
                    }
                     
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const mapDispatchToProps = (dispatch) =>{
  return{
    login: (requestData, onResponse) =>
    dispatch(login(requestData, onResponse)),
  }
}

export default connect(null,mapDispatchToProps) (Login);