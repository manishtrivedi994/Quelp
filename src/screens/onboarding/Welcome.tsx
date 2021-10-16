import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {getCatFact} from '../../store/getCatFacts/CatFacts';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../colors/colors';
import {RootState} from '../../store';

const Welcome = () => {
  const dispatch = useDispatch();
  const catFact = useSelector((state: RootState) => state.catFact.catFact);

  return (
    <View style={styles.container}>
      <View style={{}}>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}
          onPress={() => {
            dispatch(getCatFact())
              .then((res: any) => {
                console.log('success==>', res?.payload);
              })
              .catch((error: any) => {
                console.log('error==>', error);
              });
          }}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
      <Text>{catFact}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;
