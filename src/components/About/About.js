import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
// import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
// import introVideo from '../../assets/videos/intro.mp4';
// import termsAndCondition from '../../assets/docs/termsAndCondition';
import design from "../../assets/images/about.png"
import "./About.css"

// const Founder = () => (
//   <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
//     <VStack>
//       <Avatar src={profilePic} boxSize={['40', '48']} />
//       <Text children="Founder-CourseVerse" opacity={0.7} />
//     </VStack>

//     <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
//       <Heading children="Ravi Singh" size={['md', 'xl']} />
//       <Text
//         textAlign={['center', 'left']}
//         children={`Hi, I am a full-stack developer.
//       Our mission is to provide quality content at reasonable price. We provide courses in various domains.`}
//       />
//     </VStack>
//   </Stack>
// );

// const VideoPlayer = () => (
//   <Box border={'3px solid #d1cec7'} borderRadius={5}>
//     <video
//       autoPlay
//       loop
//       muted
//       controls
//       controlsList="nodownload nofullscreen noremoteplayback"
//       disablePictureInPicture
//       disableRemotePlayback
//       src={introVideo}
//     ></video>
//   </Box>
// );

// const TandC = ({ termsAndCondition }) => (
//   <Box>
//     <Heading
//       size={'md'}
//       children="Terms & Condition"
//       textAlign={['center', 'left']}
//       my="4"
//     />

//     <Box h="sm" p="4" overflowY={'scroll'}>
//       <Text
//         fontFamily={'heading'}
//         letterSpacing={'widest'}
//         textAlign={['center', 'left']}
//       >
//         {termsAndCondition}
//       </Text>
//       <Heading
//         my="4"
//         size={'xs'}
//         children="Refund only applicable for cancellation within 7 days."
//       />
//     </Box>
//   </Box>
// );
const About = () => {
  return (
    <>
      <img src={design} alt="img"className='about_img' />
      <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
        <Heading children="About Us" textAlign={['center', 'left']} />
        <Text
          marginTop={10}
          marginBottom={10}
          fontSize={'1.3rem'}
          fontFamily={'cursive'}
        >
          CourseVerse is an online Learning Platform which aims to make the
          education accessible at every place on this planet and that too at
          reasonable price. Courseverse aims to create a community of learners
          and teachers for the rich learning experience. The various features
          which make us stand out of the crowd :
        </Text>
        <ul style={{ fontSize: '1.3rem', fontFamily: 'cursive' }}>
          <li>A clean and easy to use User Interface</li>
          <li>Instructor Dashboard to track the information about courses</li>
          <li>Request Course Feature</li>
          <li>
            Learners will be able to ask study related doubts using a text and
            image-based search
          </li>
          <li>Piracy control Features</li>
        </ul>
        <Stack m="8" direction={['column', 'row']} alignItems="center">
          <Text
            fontFamily={'cursive'}
            m="8"
            textAlign={['center', 'left']}
            fontSize={'2xl'}
          >
            We at CourseVerse have some premium courses available only for
            premium users. Have a Look !
          </Text>

          <Link to="/subscribe">
            <Button
              colorScheme="yellow"
              fontSize={'2xl'}
              padding={8}
              borderRadius={50}
            >
              Checkout Our Plan
            </Button>
          </Link>
        </Stack>

        <HStack my="4" p={'4'}></HStack>
      </Container>
    </>
  );
};

export default About;
