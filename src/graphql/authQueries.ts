export const LOGIN_MUTATION = `
  mutation loginUser($loginData: loginUserInput!) {
    loginUser(loginData: $loginData) {
      User {
        _id
        firstName
        lastName
        email
        country
        verified
        loginToken
        type
        createdAt
        deleted
      }
      status
      message
    }
  }
`;

export const SIGNUP_MUTATION = `
  mutation Signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const GET_USER_PROFILE_QUERY = `
  query GetUserProfile {
    userProfile {
      id
      name
      email
    }
  }
`;
