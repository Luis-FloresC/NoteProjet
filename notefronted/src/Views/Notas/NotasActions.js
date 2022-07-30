import { axiosPrivate } from "../../Services/api/axios";



export const NOTES_LOAD = "NOTES_LOAD";
export const NOTES_SUCCESS = "NOTES_SUCCESS";
export const NOTES_FAILED = "NOTES_FAILED";
export const NOTES_CLEAR_ERROR = "NOTES_CLEAR_ERROR";
export const NOTES_PAGE_CHANGE = "NOTES_PAGE_CHANGE";
export const NOTES_LIMIT_CHANGE = "NOTES_LIMIT_CHANGE";



export const getNotesDocuments = async (dispatch, page, limit) => {
  try {
    dispatch({ type: NOTES_LOAD, payload: null });
    const { data } = await axiosPrivate.get(`/notes/page/${page}/${limit}`);
    dispatch({ type: NOTES_SUCCESS, payload: data });
  } catch (ex) {
    console.log("notesActions", ex);
    dispatch({ type: NOTES_FAILED, payload: "Error al Cargar Documentos" });
  }
}

export const setNotesPage = (dispatch, page) => {
  dispatch({ type: NOTES_PAGE_CHANGE, payload: page });
}

export const setNotesLimit = (dispatch, limit) => {
  dispatch({ type: NOTES_LIMIT_CHANGE, payload: limit });
}

export const clearNotesError = (dispatch) => {
    dispatch({ type: NOTES_CLEAR_ERROR, payload: null });
  }
  