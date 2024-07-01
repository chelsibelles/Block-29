import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const playerApi = createApi({
    reducerPath: "playerApi", // Redux slice name
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2403-FTB-ET-WEB-PT/players" // Base URL for API requests
    }),
    endpoints: (builder) => ({
        getPlayers: builder.query({
            query: () => '/', // Endpoint for fetching all players
            providesTags: ["Players"], // Cache tag for players list
        }),
        addPlayer: builder.mutation({
            query: (body) => ({
                url: "/", // Endpoint for adding a new player
                method: "POST",
                body,
            }),
            invalidatesTags: ["Players"], // Invalidate cache for players list after mutation
        }),
        updatePlayer: builder.mutation({
            query: ({ id, body }) => ({
                url: `/${id}`, // Endpoint for updating a player by ID
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Players"], // Invalidate cache for players list after mutation
        }),
        getPlayer: builder.query({
            query: (id) => `/${id}`, // Endpoint for fetching a single player by ID
            providesTags: (result, error, id) => [{ type: "Player", id }], // Cache tag for specific player by ID
        }),
        deletePlayer: builder.mutation({
            query: (id) => ({
                url: `/${id}`, // Endpoint for deleting a player by ID
                method: "DELETE",
            }),
            invalidatesTags: ["Players"], // Invalidate cache for players list after deletion
        }),
    }),
});

// Export hooks for each endpoint
export const {
    useGetPlayersQuery,
    useAddPlayerMutation,
    useUpdatePlayerMutation,
    useGetPlayerQuery,
    useDeletePlayerMutation,
} = playerApi;
