import {createSelector} from "reselect";

export const selectUsers = state => state.users;

export const selectLoading = state => state.loading;

export const selectUsersLength = createSelector(
    [selectUsers],
    users => users.length
 )

export const selectUser = (id) => createSelector(
    [selectUsers],
    users => users.find(user => user.id === +id)
)