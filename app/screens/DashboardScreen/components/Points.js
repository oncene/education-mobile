import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';

import {Context as ThemeContext} from '../../../context/ThemeContext';

const Points = () => {
  const {state} = useContext(ThemeContext);
  return (
    <View style={styles.pointsContainer}>
      <ProgressCircle
        style={{height: 150, width: '100%'}}
        progress={0.68}
        progressColor={'#7087FF'}
        strokeWidth={12}
        cornerRadius={1}>
        <View style={styles.progressCircleText}>
          <Text style={[styles.percentage, {color: state.colors.text01}]}>
            68%
          </Text>
          <Text style={[styles.text, {color: state.colors.text01}]}>
            Points
          </Text>
        </View>
      </ProgressCircle>
    </View>
  );
};

const styles = StyleSheet.create({
  pointsContainer: {
    flex: 0.5,
    marginTop: 10,
    alignItems: 'center',
  },
  progressCircleText: {
    height: 150,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentage: {
    fontSize: 35,
    fontFamily: 'Poppins-Medium',
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
});

export default Points;
