import axios from "axios";
import type {CommentPost} from "../Models/CommentPost.ts";
import {handleError} from "../Helpers/ErrorHandler.tsx";

const api = "http://localhost:5001/api/comment/";

export const commentPostApi = async (title: string, content: string, symbol: string) => {
  try {
    const data = await axios.post<CommentPost>(api + `${symbol}`, {
      title: title,
      content: content,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};