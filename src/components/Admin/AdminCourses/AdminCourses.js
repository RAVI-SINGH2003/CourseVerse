import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import cursor from '../../../assets/images/cursor.png';
import {
  addLecture,
  deleteCourse,
  deleteLecture,
} from '../../../redux/actions/adminAction.js';
import {
  getAllCourses,
  getCourseLectures,
} from '../../../redux/actions/courseAction.js';
import Sidebar from '../Sidebar';
import CourseModal from './CourseModal';

const AdminCourses = () => {

  const [courseId, setCourseId] = useState('');
  const [courseTitle, setCourseTitle] = useState('');

  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(state => state.admin);

  const { courses, lectures } = useSelector(state => state.course);

  const courseDetailsHandler = (courseId, title) => {
    dispatch(getCourseLectures(courseId));
    onOpen();
    setCourseId(courseId);
    setCourseTitle(title);
  };
  const deleteButtonHandler = async courseId => {
    await dispatch(deleteCourse(courseId));
  };
 
  const addLectureHandler = async (e, courseId, title, description, video) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('title', title);
    myForm.append('description', description);
    myForm.append('file', video);
    await dispatch(addLecture(courseId, myForm));
    dispatch(getCourseLectures(courseId));
  };
 const deleteLectureHandler = async (courseId, lectureId) => {
   await dispatch(deleteLecture(courseId, lectureId));
   dispatch(getCourseLectures(courseId));
 };
  useEffect(() => {
    dispatch(getAllCourses());
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '16']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Courses"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available courses in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses &&
                courses.map((item, index) => (
                  <Row
                    courseDetailsHandler={courseDetailsHandler}
                    deleteButtonHandler={deleteButtonHandler}
                    key={item._id}
                    item={item}
                    loading={loading}
                    index={index}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          deleteLectureHandler={deleteLectureHandler}
          id={courseId}
          courseTitle={courseTitle}
          addLectureHandler={addLectureHandler}
          lectures={lectures}
          loading={loading}
        />
      </Box>

      <Sidebar />
    </Grid>
  );
};

function Row({ item, courseDetailsHandler, deleteButtonHandler, loading }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailsHandler(item._id, item.title)}
            variant={'outline'}
            color="purple.500"
          >
            View Lectures
          </Button>
          <Button
            isLoading={loading}
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminCourses;
