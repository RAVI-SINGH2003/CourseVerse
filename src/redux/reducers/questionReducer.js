import { createReducer } from '@reduxjs/toolkit';

export const questionReducer = createReducer(
  { questionsList: [] },
  {
    searchQuestionsRequest: state => {
      state.loading = true;
    },
    searchQuestionsSuccess: (state, action) => {
      state.loading = false;
      state.questionsList = action.payload;
    },
    searchQuestionsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createQuestionRequest: state => {
      state.loading = true;
    },
    createQuestionSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createQuestionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getQuestionRequest: state => {
      state.loading = true;
    },
    getQuestionSuccess: (state, action) => {
      state.loading = false;
      state.question = action.payload;
    },
    getQuestionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getUserQuestionsRequest: state => {
      state.loading = true;
    },
    getUserQuestionsSuccess: (state, action) => {
      state.loading = false;
      state.questionsList = action.payload;
    },
    getUserQuestionsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createAnswerRequest: state => {
      state.loading = true;
    },
    createAnswerSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createAnswerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getAnswerRequest: state => {
      state.loading = true;
    },
    getAnswerSuccess: (state, action) => {
      state.loading = false;
      state.answer = action.payload;
    },
    getAnswerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
