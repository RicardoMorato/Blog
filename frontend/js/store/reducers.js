import { combineReducers } from "@reduxjs/toolkit";

import { restCheckReducer as restCheck } from "./rest_check";
import { getPostsReducer as getPosts } from "./get_posts";

export const rootReducer = combineReducers({
  restCheck,
  getPosts,
});
