import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { ICONSIZES } from '../Constants/Constants'

const DropDown = ({ data = [], value = {}, onSelect =()=>{}
}) => {
    const [showOption, setShowOption] = useState(false)
    const onSelectedItem = (item) =>{
        setShowOption(false)
        onSelect(item)
    }
    return (
        <View style={{ marginTop: 10}}>
            <TouchableOpacity style={{ backgroundColor: '#F5F5F5', padding: 10, flexDirection: "row", justifyContent: "space-between" }} onPress={()=>{
                setShowOption(!showOption)
            }}>
                <Text>{!!value? value.projectName : '--- All Project---'}</Text>
                <IonIcon name="ios-chevron-down-outline" size={ICONSIZES.small}/>
            </TouchableOpacity>
            {showOption && (<View style={{position:'relative'}}>
                {
                    data.map((item, key) => {
                        return (
                            <TouchableOpacity key={key} onPress={()=>onSelectedItem(item)
                            } style={{paddingHorizontal:10,paddingVertical:5,backgroundColor:value.id == item.id ? '#B3E5FC':'#F5F5F5'}}>
                                <Text>{item.projectName}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>)}

        </View>
    )
}

export default DropDown