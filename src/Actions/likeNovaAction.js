import * as actionTypes from "./types";
import axios from "../axios-users";
export const likeNova = (nova_ID, isLiked) => dispatch => {
  const obj = {
    nova_ID: nova_ID
  };
  console.log(obj);
  if (!isLiked) {
    axios
      .put("http://localhost:3001/novas/?_id=5ccdded2bb70bb20bc810806", {
        created_at: "2019-05-04T18:52:52.541Z",
        favorite_count: 0,
        favorited_by_IDs: ["5cce21076a21ed3d1369902d"],
        in_reply_to_screen_name: "zeina",
        in_reply_to_status_id: "5cb61f6043a45611fc79bcc9",
        in_reply_to_user_id: "5cb6196443a45611fc79bcc4",
        renova_count: 0,
        renovaed: true,
        renovaed_by_IDs: [],
        replied_novas_IDs: [],
        reply_count: 0,
        text: "hi",
        user: "5cb6196443a45611fc79bcc4",
        user_name: "zeina",
        user_screen_name: "zeina",
        _id: "5ccdded2bb70bb20bc810806"
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("Failed Like nova post");
      });
  } else {
    axios
      .put("http://localhost:3001/novas/?_id=5ccdded2bb70bb20bc810806", {
        created_at: "2019-05-04T18:52:52.541Z",
        favorite_count: 0,
        favorited_by_IDs: [],
        in_reply_to_screen_name: "zeina",
        in_reply_to_status_id: "5cb61f6043a45611fc79bcc9",
        in_reply_to_user_id: "5cb6196443a45611fc79bcc4",
        renova_count: 0,
        renovaed: true,
        renovaed_by_IDs: [],
        replied_novas_IDs: [],
        reply_count: 0,
        text: "hi",
        user: "5cb6196443a45611fc79bcc4",
        user_name: "zeina",
        user_screen_name: "zeina",
        _id: "5ccdded2bb70bb20bc810806"
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("Failed Like nova post");
      });
  return Promise.resolve();
};
export const setCurrentUser = (authUser, profile) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: {
      profile: profile,
      authUser: authUser
    }
  };
};
