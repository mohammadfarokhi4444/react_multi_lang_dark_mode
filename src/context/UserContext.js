import { createContext, useReducer, useContext } from "react";
import { login } from "../apis/auth";
import { getData, clearAllData, storeData, removeData } from "../components/Utils/DB";

const UserStateContext = createContext();
const UserDispatchContext = createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        fullName: action.payload.fullName,
        userName: action.payload.userName,
      };
    case "SIGN_OUT_SUCCESS":
      return {
        ...state,
        isAuthenticated: false,
        fullName: "",
        token: null,
        userName: "",
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        fullName: "",
        token: null,
        userName: "",
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, {
    isAuthenticated: !!getData("token"),
    fullName: getData("fullName") || "",
    userName: getData("userName") || "",
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  const context = useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };

// ###########################################################

async function loginUser(
  dispatch,
  username,
  password,
  navigate,
  setIsLoading,
  setError
) {
  setError(null);
  setIsLoading(true);

  const response = await login(username, password);
  setIsLoading(false);
  if (response.success) {
    storeData("token", response.dataBody.token);
    storeData("fullName", response.dataBody.fullName);
    storeData("userName", response.dataBody.userName);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        token: response.dataBody.token,
        fullName: response.dataBody.fullName,
        userName: response.dataBody.userName,
      },
    });
    navigate("/app");
  } else {
    setError(response.message);
  }
}

function signOut(dispatch, navigate) {
  // clearAllData();
  removeData("fullName")
  removeData("token")
  removeData("userName")
  removeData("city")
  removeData("todoList")
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  navigate("/login");
}
