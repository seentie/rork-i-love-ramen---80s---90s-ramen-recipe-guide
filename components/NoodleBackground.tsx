import React, { useMemo } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';

interface NoodleBackgroundProps {
  children: React.ReactNode;
}

export default function NoodleBackground({ children }: NoodleBackgroundProps) {
  const { width, height } = useWindowDimensions();
  
  const noodleEmojis = useMemo(() => ['🍜', '🍝', '🥢', '🍲', '🥡', '🍛'], []);
  
  const noodles = useMemo(() => {
    const noodles = [];
    const rows = Math.ceil(height / 40);
    const cols = Math.ceil(width / 40);
    
    for (let i = 0; i < rows * cols; i++) {
      const emoji = noodleEmojis[Math.floor(Math.random() * noodleEmojis.length)];
      const rotation = Math.random() * 360;
      const opacity = 0.4 + Math.random() * 0.3;
      
      noodles.push(
        <Text
          key={i}
          style={[
            styles.noodle,
            {
              transform: [{ rotate: `${rotation}deg` }],
              opacity,
              left: (i % cols) * 40 + Math.random() * 15,
              top: Math.floor(i / cols) * 40 + Math.random() * 15,
            },
          ]}
        >
          {emoji}
        </Text>
      );
    }
    return noodles;
  }, [width, height, noodleEmojis]);

  const noodleOutlines = useMemo(() => {
    if (Platform.OS === 'web') {
      return [];
    }
    const outlines = [];
    const numOutlines = Math.floor((width * height) / 3000);
    
    for (let i = 0; i < numOutlines; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const opacity = 0.2 + Math.random() * 0.2;
      
      // Wavy noodle path
      const pathData = `M 0,0 Q 10,${-5 + Math.random() * 10} 20,0 Q 30,${5 - Math.random() * 10} 40,0 Q 50,${-5 + Math.random() * 10} 60,0`;
      
      outlines.push(
        <Svg
          key={`outline-${i}`}
          style={[
            styles.noodleOutline,
            {
              left: x,
              top: y,
              opacity,
            },
          ]}
          width="60"
          height="20"
        >
          <Path
            d={pathData}
            stroke="rgba(139, 69, 19, 0.3)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </Svg>
      );
    }
    return outlines;
  }, [width, height]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFE4E1', '#FFC0CB', '#FFB6C1']}
        style={styles.gradient}
      >
        <View style={styles.noodleContainer}>
          {noodleOutlines}
          {noodles}
        </View>
        <View style={styles.overlay} />
        {children}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  noodleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  noodle: {
    position: 'absolute',
    fontSize: 24,
  },
  noodleOutline: {
    position: 'absolute',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
});