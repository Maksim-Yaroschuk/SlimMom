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
    setUser: (state, action) => {
      console.log(action);
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
      state.isLogged = true;
    },
  },
});

export const { setCredentials, logOut, setCurrentUser, setUser } =
  authSlice.actions;

export default authSlice.reducer;
