import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type AdminStateType = {
  admin: [
    {
      id: string;
      name: string;
      account: string;
      phonenumber: string;
      gender: string;
      accountnumber: string;
      status: string;
    }
  ];
};

type AdminType = {
  name: string;
  password: string;
};

const initailState = {};

const adminSlice = createSlice({
  name: "admins",
  initialState: {
    admins: [
      {
        id: "",
        name: "",
        account: "",
        phonenumber: "",
        gender: "",
        accountnumber: "",
        status: "",
      },
    ],
    filteredAdmins: [
      {
        id: "",
        name: "",
        account: "",
        phonenumber: "",
        gender: "",
        accountnumber: "",
        status: "",
      },
    ],
    loggedInAdmin: [
      {
        name: "",
        password: "",
      },
    ],
    message: "",
  },
  reducers: {
    addAdmin: (state: any, action: PayloadAction<AdminStateType>) => {
      return {
        ...state,
        admins: action.payload,
      };
    },
    removeAdmin: (state: any, action: PayloadAction<AdminStateType>) => {
      return {
        ...state,
        admins: [{}],
      };
    },
    searchById: (state: any, action: any) => {
      const filtered = [...state.admins].filter(
        (employee: any) => employee.id === action.payload
      );
      return {
        ...state,
        filteredAdmins: filtered,
      };
    },
    getAdmin: (state: any, action: PayloadAction<AdminStateType>) => {
      return {
        ...state,
      };
    },
    adminLogin: (state: any, action: PayloadAction<AdminType>) => {
      return {
        ...state,
        loggedInAdmin: action.payload,
      };
    },
    isLoginSuccess: (state: any, action: PayloadAction<AdminType>) => {
      return {
        ...state,
        message: "success",
      };
    },
  },
});
// export const adminLogin = createAsyncThunk(
//   "admin/login",
//   async ({ name, password }: AdminType) => {
//     try {
//       const res = api.post("/admin/login", {
//         name,
//         password,
//       });
//     } catch (err) {
//       console.log("admin login err ", err);
//     }
//   }
// );

export default adminSlice.reducer;

export const { addAdmin, removeAdmin, getAdmin, searchById, adminLogin } =
  adminSlice.actions;

export const selectAdmin = (state: RootState) => state.admins;

export const filterAdmin = (state: any) => state.filteredAdmins;
