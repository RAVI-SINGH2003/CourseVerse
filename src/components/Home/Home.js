import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/front2.png';
// import { CgGoogle, CgYoutube } from 'react-icons/cg';
// import { SiCoursera, SiUdemy } from 'react-icons/si';
// import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-start']}
            spacing="8"
          >
            <Heading
              children="Learning at your Doorstep !"
              size={'2xl'}
              fontSize={'7xl'}
              padding={3}
            />
            <Text
              fontSize={'3xl'}
              fontFamily="cursive"
              textAlign={['center', 'left']}
              children="Find Valuable Content At Reasonable Price"
              padding={3}
            />
            <Link to="/courses">
              <Button
                size={'lg'}
                colorScheme="yellow"
                fontSize={'3xl'}
                padding={10}
              >
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
            width={700}
            height={1000}
          />
        </Stack>
      </div>

      {/* <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children="OUR BRANDS"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box> */}

      {/* <div className="container2">
        <video
          autoPlay
          loop
          muted
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div> */}
    </section>
  );
};

export default Home;
