import { HeaderAPI, ProfileAPI, UsersAPI } from "../../API/API";
import photo from "../../img/—Pngtree—vector avatar icon_4013749.png";

const ADD_NEW_REVIEW = "ADD-NEW-REVIEW";
const sendLike = "SEND-LIKE";
const setProfile = "SET-PROFILE";
const SET_ID = "SET-ID";
const SET_STATUS = "SET-STATUS";
const IsLogin = "IS-LOGIN";
let initialState = {
  ReviewData: [
    {
      id: 1,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8KJh4iMd90SSfuNCU02ss6lX6CokNaWwzQ&usqp=CAU",
      likes: 1,
      message: "Hello, i am is a doctor",
    },
    {
      id: 2,
      avatar:
        "https://seedsouth.com/wp-content/uploads/2021/02/Elon-Musk-1999.jpg",
      likes: 14242343,
      message: "Hello, I'm Elon Mask",
    },
    {
      id: 3,
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/1/16/Emblem_of_National_Aviation_University.png",
      likes: -23423,
      message: "I'm Zubin",
    },
    {
      id: 4,
      avatar:
        "https://www.meme-arsenal.com/memes/91e83b00c27bf4d5bb849a6ac2b81fe5.jpg",
      likes: 23423,
      message: "I love c#",
    },
  ],
  PersonalData: {
    photos: {
      small:
        "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
      large:
        "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
    },
    name: "Dmitriy Yefimchuk",
    city: "Bakhmach",
    born: "2003-01-12",
    education: "National Aviation University",
    site: "https://github.com/yefimchuk",
  },
  Profile: {
    photos: {
      large: null,
    },
    lookingForAJobDescription: null,
    contacts: {
      instagram: null,
      youtube: null,
      mainLink: null,
    },
  },
  id: null,
  isLogin: false,
  status: "",
};

export const ProfileReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const addReview = (NewReviewText: string) => {
  return { type: ADD_NEW_REVIEW, NewReviewText: NewReviewText };
};
export const like = (numberLikes: number) => {
  return { type: sendLike, numberLikes: numberLikes };
};
export const setNewProfile = (profile: any) => {
  return { type: setProfile, profile: profile };
};
export const setId = (id: object) => {
  return { type: SET_ID, id: id };
};
export const isLogin = (isLogin: boolean) => {
  return { type: IsLogin, isLogin: isLogin };
};
export const setStatus = (status: string) => {
  return { type: SET_STATUS, status: status };
};
//thunk
export const GetNewProfile = (id: number) => {
  return (dispatch: any) => {
    if (!id) {
      HeaderAPI.AuthMe().then((a: any) => {
        dispatch(setId(a.data.data.id));
        UsersAPI.SetMyId(a.data.data.id).then((response: any) => {
          dispatch(setNewProfile(response.data));
        });
      });
    }
    UsersAPI.SetMyId(id).then((response: any) => {
      dispatch(setNewProfile(response.data));
    });
  };
};
export const AuthMeThunk = (userId: any) => {
  return (dispatch: any) => {
    HeaderAPI.AuthMe().then((a: any) => {
      dispatch(setId(a.data.data.id));
    });
  };
};
export const GetStatusThunk = (id: number) => {
  return (dispatch: any) => {
    if (!id) {
      HeaderAPI.AuthMe().then((a: any) => {
        dispatch(setId(a.data.data.id));
        ProfileAPI.SetStatus(a.data.data.id).then((response: any) => {
          if (response.data !== null) {
            dispatch(setStatus(response.data));
          }
        });
      });
    }
    ProfileAPI.SetStatus(id).then((response: any) => {
      if (response.data === null) {
        response.data = "";
      }

      dispatch(setStatus(response.data));
    });
  };
};
export const UpdateStatusThunk = (status: string) => {
  return (dispatch: any) => {
    HeaderAPI.AuthMe().then((a: any) => {
      ProfileAPI.UpdateStatus(status).then((response: any) => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status));
        }
      });
    });
  };
};
