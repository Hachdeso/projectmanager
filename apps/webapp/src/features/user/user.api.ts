import { api } from "../../app/api";
import { User } from "../../types/entity/User";

export interface UserResponse {
    user: User;
    token: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<UserResponse, LoginRequest>({
            query: (credentials) => ({
                url: "/users/authenticate",
                method: "POST",
                body: credentials,
            }),
        }),
        getUser: build.query<User, void>({
            query: () => "/users/",
        }),
    }),
});

export const { useLoginMutation, useGetUserQuery } = userApi;
