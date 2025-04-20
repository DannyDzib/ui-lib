import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
interface Props {
  label: string;
  style?: object;
  onPress: () => void;
}
export const MyButton = ({ label, onPress, style }: Props) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);
