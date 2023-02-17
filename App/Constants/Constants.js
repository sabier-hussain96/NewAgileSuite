import { Dimensions,PixelRatio } from "react-native";


export const screenNames = {
    Splash_Screen: `SplashScreen`,
    Login: `Login`,
    Reset_Pin:`ResetPin`,
    DashBoard:`DashBoard`,
    Home_screen:`Home`,
    Profile_screen:`Profile`,
    Time_Sheet:`TimeSheet`,
    TimeSheet_form:`Create Time Sheet`,
    Demo:`Demo`


}

export const header_Shown = {
    headerShown: false,
    unmountOnBlur: true

}

export const INPUT_FIELD_NAME = {
    PHONE_NUMBER: `phoneNumber`,
    USER_PIN:`Pin`,
    USER_NAME: `Username`,
    PinCode: `PinCode`,
    House: `House no`,
    Street: `Street`,
    TICKET_TITLE: `ticketTitle`,
    TICKET_DESCRIPTION: `ticketDescription`,
};

export const INPUT_PLACE_HOLDER_CONSTANTS = {
    PHONE_NUMBER: `Phone Number                                                       `,
    USER_NAME: `Username                                                                                 `,
    USER_PIN:`Pin                                                                     `,
    PinCode: `PinCode                                                                 `,
    House: `House Number or Building Number                                           `,
    Street: `Street                                                                       `,
    TICKET_TITLE: `Enter Ticket Title                                                     `,
    TICKET_DESCRIPTION: `Enter Ticket Description                                         `,
};

export const FORM_INPUT_RULES = {
    phoneNumberRule: {
        required: {
            value: true,
            message: `Please enter the phone number`,
        },
        minLength: {
            value: 10,
            message: `Please enter 10 digit mobile number only`,
        },
        maxLength: {
            value: 10,
            message: `Please enter 10 digit mobile number`,
        },
    },
    passwordRule: {
        required: {
            value: true,
            message: `Please enter the new password`,
        },
        minLength: {
            value: 4,
            message: `Password not 4 digits`,
        },
        maxLength: {
            value: 4,
            message: `Please enter 4 Charater Password`,
        },
    },
    tickettitleRule: {
        required: {
            value: true,
            message: `Please enter the ticket title`,
        },
    },
    ticketdescripRule: {
        required: {
            value: true,
            message: `Please enter the ticket description`,
        },
    },
    confirmpasswordRule: {
        required: {
            value: true,
            message: `Please enter the confirm  password`,
        },
        minLength: {
            value: 6,
            message: `Password should be of 4 digits`,
        },
        maxLength: {
            value: 4,
            message: `Please enter 4 digit Password`,
        },
    },
    pinRule: {
        required: {
            value: true,
            message: `Please enter the pinCode`,
        },
        maxLength: {
            value: 8,
            message: `Please enter 6 characters pinCode`,
        },
        minLength: {
            value: 8,
            message: `Please enter 6 characters pinCode`,
        },
    },
    houseRule: {
        required: {
            value: true,
            message: `Please enter the house`,
        },
        minLength: {
            value: 6,
            message: `Please enter name house`,
        },
    },
    UserIdRule: {
        required: {
            value: true,
            message: `Please enter your Employee Id`,
        },
        minLength: {
            value: 3,
            message: `Please enter 3 Employee Id only`,
        },
        maxLength: {
            value: 25,
            message: `Please enter 15 Employee number /email `,
        },
    },
};

export const stringConstants = {
    EMPTY: ``,
    SPACE: ` `
}

export const ICONSIZES = {
    tiny: 16,
    small: 20,
    normal: 24,
    medium: 30,
    large: 45,
    xl: 50,
  };

  export const SIZES = {
    h1: 32,
    h2: 26,
    h3: 22,
    h4: 20,
    h5:18,
    medium: 16,
    small: 14,
    extraSmall: 12,
    tiny: 8.5,
    base: 4
  };

const {width, height} = Dimensions.get('window');

export const normalize = size => {
  //use your testing phone width to replace 320
  const scale = width / 320;
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 4;
  }
};




