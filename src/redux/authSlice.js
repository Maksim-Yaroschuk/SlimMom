const { createSlice } = require('@reduxjs/toolkit');

const authState = {
  user: { name: null },
  userInfo: {},
  token: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    setCredentials: (state, action) => {
      state.user.name = action.payload.data.user.name;
      state.token = action.payload.data.token;
      state.isLogged = true;
    },
    setUserGoogle: (state, action) => {
      state.user.name = action.payload.name;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    setInfoUser: (state, action) => {
      state.userInfo = action.payload;
      state.isLogged = true;
    },
    setUser: (state, action) => {
      state.user.name = action.payload.data.name;
      state.token = action.payload.data.token;
      state.userInfo = action.payload.data.infouser;
      state.isLogged = true;
    },
    logOut: state => {
      state.user.name = null;
      state.userInfo = {};
      state.token = null;
      state.isLogged = false;
    },
    setCurrentUser: (state, action) => {
      state.user.name = action.payload.data.user.name;
      state.userInfo = action.payload.data.user.infouser;
      state.isLogged = true;
    },
  },
});

export const {
  setCredentials,
  logOut,
  setCurrentUser,
  setUser,
  setUserGoogle,
  setInfoUser,
} = authSlice.actions;

export default authSlice.reducer;
