import { server } from '../store.js';
import axios from 'axios';

//create Course

export const createCourse = formdata => async dispatch => {
  try {
    dispatch({ type: 'createCourseRequest' });
    const { data } = await axios.post(`${server}/createcourse`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    dispatch({ type: 'createCourseSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'createCourseFail',
      payload: error.response.data.message,
    });
  }
};

//delete Course

export const deleteCourse = id => async dispatch => {
  try {
    dispatch({ type: 'deleteCourseRequest' });
    const { data } = await axios.delete(`${server}/course/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: 'deleteCourseSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteCourseFail',
      payload: error.response.data.message,
    });
  }
};

//add Lecture

export const addLecture = (id, formdata) => async dispatch => {
  try {
    dispatch({ type: 'addLectureRequest' });
    const { data } = await axios.post(`${server}/course/${id}`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    dispatch({ type: 'addLectureSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'addLectureFail',
      payload: error.response.data.message,
    });
  }
};

//delete Lecture

export const deleteLecture = (courseId, lectureId) => async dispatch => {
  try {
    dispatch({ type: 'deleteLectureRequest' });
    const { data } = await axios.delete(
      `${server}/lecture/?courseId=${courseId}&lectureId=${lectureId}`,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'deleteLectureSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteLectureFail',
      payload: error.response.data.message,
    });
  }
};

//get all Users

export const getAllUsers = (courseId, lectureId) => async dispatch => {
  try {
    dispatch({ type: 'getAllUsersRequest' });
    const { data } = await axios.get(`${server}/admin/users`, {
      withCredentials: true,
    });
    dispatch({ type: 'getAllUsersSuccess', payload: data.users });
  } catch (error) {
    dispatch({
      type: 'getAllUsersFail',
      payload: error.response.data.message,
    });
  }
};

//Update User Role
export const updateUserRole= (id) => async dispatch => {
  try {
    dispatch({ type: 'updateUserRoleRequest' });
    const { data } = await axios.put(`${server}/admin/user/${id}`, {},{
      withCredentials: true,
    });
    dispatch({ type: 'updateUserRoleSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'updateUserRoleFail',
      payload: error.response.data.message,
    });
  }
};

//delete User
export const deleteUser = id => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'deleteUserRequest' });

    const { data } = await axios.delete(`${server}/admin/user/${id}`, config);

    dispatch({ type: 'deleteUserSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteUserFail',
      payload: error.response.data.message,
    });
  }
};

//get Dashboard stats
export const getDashboardStats = () => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'getAdminStatsRequest' });

    const { data } = await axios.get(`${server}/admin/stats`, config);

    dispatch({ type: 'getAdminStatsSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'getAdminStatsFail',
      payload: error.response.data.message,
    });
  }
};