import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Styles } from './Styles';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Product({ image, name, expirationDate }) {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    return (
      <View style={Styles.product}>
        <Image source={image}></Image>
        <View>
          <Text style={Styles.name}>{name}</Text>
        </View>
        <View style={Styles.expiration}>
          {expirationDate ? (
              <Text style={{textAlign: 'center'}}>{expirationDate}</Text>
            ) : (
              <TouchableOpacity onPress={() => setShowDatePicker(true)} style={ { padding: 8, borderRadius: 8, backgroundColor: '#333'} }>
                  <Text style={{color: 'white'}}>Expiration Date</Text>
              </TouchableOpacity>           
            )}
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowDatePicker(false);
              if (date !== undefined) {
                setSelectedDate(date);
              }
            }}
          />
        )}
      </View>
    )
}