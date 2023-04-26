import {
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  Stack,
  Image,
  VStack,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/courseAction';
import { toast } from 'react-hot-toast';
import { addToPlaylist } from '../../redux/actions/profileAction.js';
import { loadUser } from '../../redux/actions/userAction.js';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']} mt={4}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'}></Image>
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        size="sm"
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={'Creator'}
        />
        <Text textTransform={'uppercase'} children={creator} />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          isLoading={loading}
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id.toString())}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const { loading, courses, error, message } = useSelector(
    state => state.course
  );

  const addToPlaylistHandler = async courseId => {
    await dispatch(addToPlaylist(courseId));
     dispatch(loadUser());
  };

  const categories = [
    'web development',
    'Artificial Intelligence',
    'Data Structure & Algorithm',
    'App Develeopemt',
    'Data Science',
    'Game Development',
  ];
  useEffect(() => {
    dispatch(getAllCourses(category, keyword));
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, category, keyword, error, message]);
  return (
    <Container minH={'95vh'} minW={'container.lg'} paddingY={8}>
      <Heading children="All courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course"
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack overflowX={'auto'} paddingY={'8'}>
        {categories.map((item, index) => (
          <Button minW={'60'} key={index} onClick={() => setCategory(item)}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {courses.length > 0 ? (
          courses.map(item => (
            <Course
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading opacity={0.5} mt={4} children={'Courses Not Found'} />
        )}
      </Stack>
    </Container>
  );
};

export default Courses;
