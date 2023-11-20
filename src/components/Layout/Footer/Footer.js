import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
import { AiFillLinkedin } from 'react-icons/ai';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Rights Reserved" color={'white'} />
          {/* <Heading
            fontFamily={'body'}
            size="sm"
            children="@"
            color={'yellow.400'}
          /> */}
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a href="https://www.youtube.com/" target={'blank'}>
            <TiSocialYoutubeCircular />
          </a>
          <a
            href="https://www.linkedin.com/in/ravi-singh-b849bb205/"
            target={'blank'}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/RAVI-SINGH2003" target={'blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
