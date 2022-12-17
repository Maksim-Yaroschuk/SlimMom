const { createSlice } = require('@reduxjs/toolkit');

const authState = {
  user: { name: null, email: null },
  token: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    setCredentials: (state, action) => {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    logOut: state => {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLogged = false;
    },
    setCurrentUser: (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isLogged = true;
    },
  },
});

export const { setCredentials, logOut, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
