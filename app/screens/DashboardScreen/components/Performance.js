import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BarChart, XAxis} from 'react-native-svg-charts';
import * as scale from 'd3-scale';

import {Context as ThemeContext} from '../../../context/ThemeContext';

const Performance = () => {
  const {state} = useContext(ThemeContext);
  const fill = '#67cfd6';
  const data = [40, 50, 60, 75, 85, 75, 65, 55, 50];
  return (
    <View style={styles.performanceContainer}>
      <BarChart
        style={{height: 140, width: '100%'}}
        data={data}
        svg={{fill}}
        spacingInner={0.8}
        spacingOuter={0.6}
        contentInset={{top: 10, bottom: 80}}></BarChart>
      <XAxis
        style={{marginTop: -30, width: '100%'}}
        data={data}
        scale={scale.scaleBand}
        spacingInner={0.8}
        spacingOuter={0.6}
        xAccessor={({item}) => item}
        formatLabel={(value, index) => value + '%'}
        svg={{
          fill: state.colors.text01,
          fontSize: 10,
          fontFamily: 'Poppins-Bold',
          originX: 100,
        }}
      />

      <Text style={[styles.text, {color: state.colors.text01}]}>
        Performance
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  performanceContainer: {
    flex: 0.5,
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 150,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#838785',
    textAlign: 'center',
  },
});

export default Performance;
