// features/auth/authApiSlice.ts
import { LOGIN_MUTATION, SIGNUP_MUTATION } from "@/graphql/authQueries";
import { RootState } from "@/redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { updateLogedInUser } from "./authSlice";

interface LoginResponse {
  data: {
    loginUser: {
      User: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        country: string;
        verified: boolean;
        loginToken: string;
        type: string;
        createdAt: string;
        deleted: boolean;
      };
      status: number;
      message: string;
    };
  };
}

interface LoginRequest {
  email: string;
  password: string;
}

interface SignupRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  country: string;
  type: string;
  sendEmailNotify: boolean;
  atsTermAndCondition: boolean;
}

const baseQueryWithReAuth = fetchBaseQuery({
  baseUrl:
    "https://i4jmpk44gh.execute-api.us-east-1.amazonaws.com/Stage/graphql",
  prepareHeaders: (headers, { getState }) => {
    const user = (getState() as RootState).auth.loggedInUser;
    if (user?.loginToken) {
      headers.set("Authorization", `Bearer ${user.loginToken}`);
    }
    return headers;
  },
  credentials: "same-origin",
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ email, password }) => ({
        url: "",
        method: "POST",
        body: {
          query: LOGIN_MUTATION,
          variables: { loginData: { email, password } },
        },
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { status, User, message } = data?.data?.loginUser;
          if (status === 200) {
            dispatch(updateLogedInUser(User));
          }
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),

    signup: builder.mutation<LoginResponse, SignupRequest>({
      query: ({
        email,
        password,
        firstName,
        lastName,
        country,
        atsTermAndCondition,
        sendEmailNotify,
        type,
      }) => ({
        url: "",
        method: "POST",
        body: {
          query: SIGNUP_MUTATION,
          variables: {
            email,
            password,
            firstName,
            lastName,
            country,
            atsTermAndCondition,
            sendEmailNotify,
            type,
          },
        },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data, "on sign up auth api slice");
          // dispatch(setCredentials({ accessToken: data.accessToken }));
        } catch (error) {
          console.error("Signup failed:", error);
        }
      },
    }),
    // fetchUserProfile: builder.query<any, void>({
    //   query: () => ({
    //     url: '',
    //     method: 'POST',
    //     body: {
    //       query: GET_USER_PROFILE_QUERY,
    //     },
    //   }),
    //   async onError({ dispatch }) {
    //     dispatch(logout()); // If token is invalid, logout and redirect to login
    //   },
    // }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
