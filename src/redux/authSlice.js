const { createSlice } = require('@reduxjs/toolkit');

const authState = {
  user: { name: null },
  token: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    setCredentials: (state, action) => {
      console.log(action);
      state.user.name = action.payload.data.user.name;
      state.token = action.payload.data.token;
      state.isLogged = true;
    },
    logOut: state => {
      state.user.name = null;
      state.token = null;
      state.isLogged = false;
    },
    setCurrentUser: (state, action) => {
      state.user.name = action.payload.name;
      state.isLogged = true;
    },
  },
});

export const { setCredentials, logOut, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
