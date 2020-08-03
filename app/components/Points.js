import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';

const Points = () => {
  return (
    <View style={styles.pointsContainer}>
      <ProgressCircle
        style={{height: 150, width: '100%'}}
        progress={0.68}
        progressColor={'#7c6edb'}
        strokeWidth={12}
        cornerRadius={0}>
        <View style={styles.progressCircleText}>
          <Text style={styles.percentage}>68%</Text>
          <Text style={styles.text}>Points</Text>
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
    fontSize: 40,
    fontWeight: 'bold',
    color: '#838785',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#838785',
  },
});

export default Points;
