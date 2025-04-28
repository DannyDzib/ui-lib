import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
interface Props {
  label: string;
  disabled?: boolean;
  style?: object;
  onPress: () => void;
}
export const MyButton = (props: Props) => {
  const { label, onPress, style = {}, disabled = false } = props;
  const { sxButton, sxDisabled, sxText } = styles;

  const buttonSx = disabled ? [sxButton, sxDisabled] : sxButton;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonSx, style]}
      disabled={disabled}>
      <Text style={sxText}>{label}</Text>
    </TouchableOpacity>
  );
};
