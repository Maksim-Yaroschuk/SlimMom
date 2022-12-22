const saveInSession = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    sessionStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const loadFromSession = key => {
  try {
    const serializedState = sessionStorage.getItem(key);
    return serializedState === null ? [] : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const deleteFromSession = key => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export { saveInSession, loadFromSession, deleteFromSession };
