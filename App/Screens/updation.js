import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createRef, useEffect, useRef, useState} from 'react';
import {Animated, ScrollView, Text, View} from 'react-native';
import Toast from 'react-native-simple-toast';
import {Avatar} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import * as ENDPOINTS from '../api/EndPoints';
import {BottomAction, Indicator} from '../components';
import {FormButton, GTextInput} from '../components/rncomponents';
import {COLORS, FONTS, Images, SIZES} from '../constants';
import {strings} from '../locales/i18n';
import {POSTDATAREQUEST} from '../redux/actions/CommonActions';
import {HELPERS} from '../utils';
import {
  confirmPasswordErrMsg,
  emailErrMsg,
  emailValidationErrMsg,
  lastNameErrMsg,
  notEqualPasswordErrMsg,
  passwordErrMsg,
  passwordLengthErrorMsg,
  phoneNumberErrMsg,
  userNameErrMsg,
} from '../utils/Strings';

const VendorForm = ({
  navigation,
  language,
  POSTDATAREQUEST,
  myLatLong,
  themeColors,
  indicatorStatus,
}) => {
  const actionSheetRef = createRef();
  const [buisnessForm,setBuisnesform] = useState({
    userName:'',
    password:'',
    phoneNumber:'',
    email:'',
    confirmPassword:'',
    secureText:true,
    userNameError:false,
    passwordError:false,
    confirmPasswordError:false,
    phoneNumberError:false,
    emailError:false,
    isValidEmail:'',
    isNotEqualPassword:'',
    lastName:'',
    lastNameError:false,
    passwordLengthError:false,
    orgName:'',
    orgNameError:false,
    org_mobile:'',
    mobileError:false,
    org_email:'',
    orgemailError:false,
    address:'',
    addressError:false,
    city:'',
    cityError:false,
    pincode:'',
    pincodeError:false,
    state:'',
    stateError:false,
    country:'',
    countryError:false,
    showAddress:false,
    orgLogo:'',
    orgDescription:''

  })



  const [fcmToken, setFcmToken] = useState();
  const [disabled, Setdisabled] = useState(false);

  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    token();
  }, []);
  const token = async () => {
    const fcmToken = await AsyncStorage.getItem('Device_Token');
    setFcmToken(fcmToken);
  };

  const handleValidation = () => {
    let isFieldMissing = false;

    if (Boolean(buisnessForm.orgName) === false) {
      isFieldMissing = true;
    //   setorgNameError(true);
      setBuisnesform(...buisnessForm,{
        orgNameError:true
      })
    }
    if (Boolean(buisnessForm.org_mobile) === false) {
      isFieldMissing = true;
    //   setOrgMobileError(true);
     setBuisnesform(...buisnessForm,{
        mobileError:true
      })
    }
    if (Boolean(buisnessForm.org_email) === false) {
      isFieldMissing = true;
    //   setOrgEmailError(true);
    setBuisnesform(...buisnessForm,{
        orgemailError:true
      })
    }
    if (Boolean(buisnessForm.address) === false) {
      isFieldMissing = true;
    //   setAddressError(true);
    setBuisnesform(...buisnessForm,{
        addressError:true
    })
    }
    if (Boolean(buisnessForm.city) === false) {
      isFieldMissing = true;
    //   setCityError(true);
    setBuisnesform(...buisnessForm,{
        cityError:true
    })
    }
    if (Boolean(buisnessForm.pincode) === false) {
      isFieldMissing = true;
    //   setPincodeError(true);
    setBuisnesform(...buisnessForm,{
        pincodeError:true
    })
    }
    if (Boolean(buisnessForm.state) === false) {
      isFieldMissing = true;
    //   setStateError(true);
      setBuisnesform(...buisnessForm,{
        stateError:true
      })
    }
    if (Boolean(buisnessForm.country) === false) {
      isFieldMissing = true;
    //   setCountryError(true);
    setBuisnesform(...buisnessForm,{
        countryError:true
    })

    }
    if (Boolean(buisnessForm.userName) === false) {
      isFieldMissing = true;
    //   setUserNameError(true);
    setBuisnesform(...buisnessForm,{
        userNameError:true
    })
    }
    if (Boolean(buisnessForm.lastName) === false) {
      isFieldMissing = true;
    //   setLastNameError(true);
    setBuisnesform(...buisnessForm,{
        lastNameError:true
    })
    }
    if (Boolean(buisnessForm.password) === false) {
      isFieldMissing = true;
    //   setPasswordError(true);
    setBuisnesform(...buisnessForm,{
        passwordError:true
    })
    }
    if (Boolean(buisnessForm.confirmPassword) === false) {
      isFieldMissing = true;
    //   setConfirmPasswordError(true);
    setBuisnesform(...buisnessForm,{
        confirmPasswordError:true
    })
    }
    if (Boolean(buisnessForm.phoneNumber) === false) {
      isFieldMissing = true;
    //   setPhoneNumberError(true);
    setBuisnesform(...buisnessForm,{
        phoneNumberError:true
    })
    }
    if (Boolean(buisnessForm.email) === false) {
      isFieldMissing = true;
    //   setEmailError(true);
    setBuisnesform(...buisnessForm,{
        emailError:true
    })
    }

    return isFieldMissing;
  };

  const handleRequestData = () => {
    let request = {
      orgname: buisnessForm.orgName,
      org_mobile: buisnessForm.org_mobile,
      org_email: buisnessForm.org_email,
      address: buisnessForm.address,
      city: buisnessForm.city,
      state:buisnessForm.state,
      country: buisnessForm.country,
      pincode: buisnessForm.pincode,
      name: buisnessForm.userName,
      lastname: buisnessForm.lastName,
      mobile: buisnessForm.phoneNumber,
      email: buisnessForm.email,
      password: buisnessForm.password,
      confirm_password: buisnessForm.confirmPassword,
      gcm_id: fcmToken,
      preferred_lang_id: 1034,
      is_business: 1,
      show_address: buisnessForm.showAddress,
      region_id: 2,
      latitude: myLatLong.latitude,
      longitude: myLatLong.longitude,
    };

    if (buisnessForm.orgLogo) {
      request.logo = buisnessForm.orgLogo;
    }
    if (buisnessForm.orgDescription) {
      request.orgdesc = buisnessForm.orgDescription;
    }

    return request;
  };
  const handleSecureText = () => {
    // setSecureText(!secureText);
    setBuisnesform(...buisnessForm,{
        secureText:(!secureText)
    })
  };

  const handleCreate = async () => {
    Setdisabled(true);
    if (handleValidation() === false) {
      const requestData = handleRequestData();
      const endPoint = `${ENDPOINTS.register}`;
      POSTDATAREQUEST(endPoint, requestData, response => {
        // console.log(response);
        if (response.data.status === 'S') {
          handleResponse(response.data.status, response.data?.message);
          Setdisabled(false)
          navigation.navigate('OTPVerification', {
            email: email,
            password: password,
          });
        } else {
            Setdisabled(false)
          handleResponse(response.data.status, response.data?.message);
        }
      });
    }
  };

  const handleResponse = (statusCode, msg) => {
    if (statusCode === 'S') {
      Toast.show(msg);
    } else if (statusCode === 'E') {
      Toast.show(msg);
    } else {
      Toast.show('Something went wrong');
    }
  };

  const handlePhotoUpload = photo => {
    actionSheetRef.current?.hide();
    const image = `data:image/png;base64,${photo?.data}`;
    // setOrgLogo(image);
    setBuisnesform(...buisnessForm,{
        orgLogo:image
    })
  };

  const Address = () => {
    return (
      <View>
        <View>
          <GTextInput
            placeholder={strings('orgForm.address', {locale: language})}
            value={buisnessForm.address}
            onChange={txt => {
            //   setAddress(txt);
            setBuisnesform(...buisnessForm,{
                address:txt
            })
            //   setAddressError(false);
            setBuisnesform(...buisnessForm,{
                addressError:false
            })
            }}
            error={buisnessForm.addressError}
            errorMessage={strings('errors.address', {locale: language})}
          />
        </View>
        <View>
          <GTextInput
            placeholder={strings('orgForm.city', {locale: language})}
            value={buisnessForm.city}
            onChange={txt => {
            //   setCity(txt);
            setBuisnesform(...buisnessForm,{
                city:txt
            })
            //   setCityError(false);
            setBuisnesform(...buisnessForm,{
                cityError:false
            })
            }}
            error={buisnessForm.cityError}
            errorMessage={strings('errors.city', {locale: language})}
          />
        </View>
        <View>
          <GTextInput
            placeholder={strings('orgForm.pincode', {locale: language})}
            value={buisnessForm.pincode}
            onChange={txt => {
            //   setPincode(txt);
              setBuisnesform(...buisnessForm,{
                pincode:txt
            })
            //   setPincodeError(false);
            setBuisnesform(...buisnessForm,{
                pincodeError:false
            })
            }}
            error={buisnessForm.pincodeError}
            maxLength={6}
            keyBoardType="numeric"
            errorMessage={strings('errors.pincode', {locale: language})}
          />
        </View>
        <View>
          <GTextInput
            placeholder={strings('orgForm.state', {locale: language})}
            value={buisnessForm.state}
            onChange={txt => {
            //   setState(txt);
            setBuisnesform(...buisnessForm,{
                state:txt
            })
            //   setStateError(false);
            setBuisnesform(...buisnessForm,{
                stateError:false
            })
            
            }}
            error={buisnessForm.stateError}
            errorMessage={strings('errors.state', {locale: language})}
          />
        </View>
        <View>
          <GTextInput
            placeholder={strings('orgForm.country', {locale: language})}
            value={buisnessForm.country}
            onChange={txt => {
            //   setCountry(txt);
              setBuisnesform(...buisnessForm,{
                country:txt
            })
            //   setCountryError(false);
            setBuisnesform(...buisnessForm,{
                countryError:false
            })
            }}
            error={buisnessForm.countryError}
            errorMessage={strings('errors.country', {locale: language})}
          />
        </View>
      </View>
    );
  };

  const checkPassword = () => {
    if (buisnessForm.password === buisnessForm.confirmPassword) {
    //   setIsNotEqualPassword(false);
    setBuisnesform(...buisnessForm,{
        isNotEqualPassword:false
    })
      return true;
    } else {
    //   setIsNotEqualPassword(true);
      setBuisnesform(...buisnessForm,{
        isNotEqualPassword:true
    })
      return false;
    }
  };

  const emailValidation = txt => {
    let isValid = HELPERS.EmailValidation(txt);
    // setIsValidEmail(!isValid);
    setBuisnesform(...buisnessForm,{
        isValidEmail:(!isValid)
    })
  };

  const OrgForm = () => {
    return (
      <View>
        <View>
          <GTextInput
            placeholder={strings('orgForm.name', {locale: language})}
            value={buisnessForm.orgName}
            onChange={txt => {
            //   setorgName(txt);
            setBuisnesform(...buisnessForm,{
                orgName:txt
            })
            //   setorgNameError(false);
            setBuisnesform(...buisnessForm,{
                orgNameError:false
            })
            }}
            error={buisnessForm.orgNameError}
            errorMessage={strings('errors.orgName', {locale: language})}
          />
        </View>
        <View>
          <GTextInput
            placeholder={strings('orgForm.mobile', {locale: language})}
            value={buisnessForm.org_mobile}
            onChange={txt => {
            //   setOrgMobile(txt);
            setBuisnesform(...buisnessForm,{
                org_mobile:txt
            })
            //   setOrgMobileError(false);
            setBuisnesform(...buisnessForm,{
                mobileError:false
            })
            }}
            error={buisnessForm.mobileError}
            maxLength={10}
            keyBoardType="numeric"
            errorMessage={strings('errors.mobile', {locale: language})}
          />
        </View>
        <View>
          <GTextInput
            placeholder={strings('orgForm.email', {locale: language})}
            value={buisnessForm.org_email}
            onChange={txt => {
            //   setOrgEMail(txt);
            setBuisnesform(...buisnessForm,{
                org_email:txt
            })
            //   setOrgEmailError(false);
            setBuisnesform(...buisnessForm,{
                orgemailError:false
            })
            }}
            keyBoardType="email-address"
            error={buisnessForm.orgemailError}
            errorMessage={strings('errors.email', {locale: language})}
          />
        </View>
        <View>
          <GTextInput
            placeholder={strings('orgForm.desc', {locale: language})}
            value={buisnessForm.orgDescription}
            onChange={txt => {
            //   setOrgDescription(txt);
            setBuisnesform(...buisnessForm,{
                orgDescription:txt
            })
            }}
            multiline={true}
          />
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          paddingVertical: SIZES.medium * 1,
          paddingHorizontal: SIZES.medium,
        }}>
        <FormButton
          lable={strings('orgForm.Registration', {locale: language})}
          lableContainerStyle={{
            paddingVertical: SIZES.base,
          }}
          onPress={handleCreate}
          disable={disabled ? true : false}
        />
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          flex: 0.5,
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.medium,
          marginVertical: SIZES.medium,
        }}>
        <View>
          <Text style={{...FONTS.h2}}>CONNECT ME</Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', ...FONTS.h4}}>
            Create your account
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          backgroundColor: COLORS.gray,
          opacity: scrollY.interpolate({
            inputRange: [260, 270],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [260, 270],
                outputRange: [30, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
          }}>
          <Avatar
            source={Boolean(buisnessForm.orgLogo) ? {uri: buisnessForm.orgLogo} : Images.profile}
            containerStyle={{backgroundColor: COLORS.gray}}
            size={50}
          />
          {Boolean(buisnessForm.orgName) !== false ? (
            <Text style={{...FONTS.normal, marginLeft: 10}}>{buisnessForm.orgName}</Text>
          ) : (
            <Text style={{...FONTS.normal, marginLeft: 10}}>REGISTRATION</Text>
          )}
        </View>
      </Animated.View>
      <ScrollView
        onScroll={Animated.event(
          // scrollX = e.nativeEvent.contentOffset.x
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}>
        {renderHeader()}
        <View>
          <View
            style={{
              paddingVertical: SIZES.medium,
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <Avatar
              source={Boolean(buisnessForm.orgLogo) ? {uri: buisnessForm.orgLogo} : Images.profile}
              containerStyle={{backgroundColor: COLORS.gray}}
              size={150}
              badgeProps={{
                size: 25,
                backgroundColor: themeColors.primary,
                label: '+',
              }}
              badgePosition="BOTTOM_RIGHT"
              onPress={() => {
                actionSheetRef.current?.show();
              }}
            />
          </View>
          <View>
            <GTextInput
              onChange={txt => {
                // setUserName(txt);
                setBuisnesform(...buisnessForm,{
                    userName:txt
                })
                // setUserNameError(false);
                setBuisnesform(...buisnessForm,{
                    userNameError:false
                })
              }}
              value={buisnessForm.userName}
              placeholder={'Enter your first name'}
              error={buisnessForm.userNameError}
              errorMessage={userNameErrMsg}
            />
          </View>
          <View>
            <GTextInput
              onChange={txt => {
                // setlastName(txt);
                setBuisnesform(...buisnessForm,{
                    lastName:txt
                })
              }}
              value={buisnessForm.lastName}
              placeholder={'Enter your last name'}
              error={buisnessForm.lastNameError}
              errorMessage={lastNameErrMsg}
            />
          </View>
          <View>
            <GTextInput
              onChange={txt => {
                // setPhoneNumber(txt);
                setBuisnesform(...buisnessForm,{
                    phoneNumber :txt
                })
                // setPhoneNumberError(false);
                setBuisnesform(...buisnessForm,{
                    phoneNumberError :false
                })
              }}
              value={buisnessForm.phoneNumber}
              placeholder={'Enter your phone number'}
              keyBoardType="numeric"
              maxLength={10}
              error={buisnessForm.phoneNumberError}
              errorMessage={phoneNumberErrMsg}
            />
          </View>
          <View>
            <GTextInput
              onChange={txt => {
                // setPassword(txt);
                setBuisnesform(...buisnessForm,{
                    password:txt
                }) 
                // setPasswordError(false);
                setBuisnesform(...buisnessForm,{
                    passwordError:false
                }) 
                
                // setPasswordLengthError(false);
                setBuisnesform(...buisnessForm,{
                    passwordLengthError:false
                }) 
              }}
              value={buisnessForm.password}
              placeholder={'Enter the password'}
              rightIcon={secureText ? 'visibility-off' : 'visibility'}
              rightIconOnPress={handleSecureText}
              secureText={buisnessForm.secureText}

              error={buisnessForm.passwordError || buisnessForm.passwordLengthError}
              errorMessage={
                buisnessForm.passwordLengthError ? passwordLengthErrorMsg :passwordErrMsg
              }
              onEndEditing={() => {
                if (buisnessForm.password?.length < 8) {
                //   setPasswordLengthError(true);
                setBuisnesform(...buisnessForm,{
                    passwordLengthError:true
                }) 
                }
              }}
            />
          </View>
          <View>
            <GTextInput
              onChange={txt => {
                // setConfirmPassword(txt);
                setBuisnesform(...buisnessForm,{
                    confirmPassword:txt
                }) 
                // setConfirmPasswordError(false);
                setBuisnesform(...buisnessForm,{
                    confirmPasswordError:false
                }) 
              }}
              value={buisnessForm.confirmPassword}
              onEndEditing={() => checkPassword()}
              placeholder={'Enter the confirm password'}
              secureText={true}
              error={buisnessForm.confirmPasswordError || buisnessForm.isNotEqualPassword}
              errorMessage={
                buisnessForm.isNotEqualPassword
                  ? notEqualPasswordErrMsg
                  : confirmPasswordErrMsg
              }
            />
          </View>

          <View>
            <GTextInput
              onChange={txt => {
                // setEmail(txt);
                setBuisnesform(...buisnessForm,{
                    email:txt
                }) 
                // setEmailError(false);
                setBuisnesform(...buisnessForm,{
                    emailError:false
                }) 
                emailValidation(txt);

              }}
              value={buisnessForm.email}
              placeholder={'Enter your email'}
              keyBoardType="email-address"
              error={buisnessForm.emailError || buisnessForm.isValidEmail}
              errorMessage={buisnessForm.isValidEmail ? emailValidationErrMsg : emailErrMsg}
            />
          </View>
        </View>
        {OrgForm()}
        {Address()}
      </ScrollView>
      {renderFooter()}
      <BottomAction
        actionSheetRef={actionSheetRef}
        navigation={navigation}
        handlePhotoUpload={handlePhotoUpload}
        single={true}
      />
    </>
  );
};

const mapStateToProps = state => ({
  language: state.common.defaultLanguage,
  indicatorStatus: state.common.indicator?.status,
  myLatLong: state.common.myLatLong,
  themeColors: state.common.themeColors,
});

const mapDispatchToProps = dispatch => {
  return {
    POSTDATAREQUEST: (endPoint, request, onResponse) =>
      dispatch(POSTDATAREQUEST(endPoint, request, onResponse)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(VendorForm);
