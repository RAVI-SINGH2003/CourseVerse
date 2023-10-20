import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      borderRadius={50}
      size="lg"
      fontSize="3rem"
      aria-label={`Switch to ${text} mode`}
      color="#DAA520"
      position={'fixed'}
      top={4}
      right={4}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      zIndex={'overlay'}
      {...props}
    />
  );
};
