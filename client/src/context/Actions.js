export const LoginStart = (userCredenttials) => {
    type :"LOGIN_START"
}
export const loginSucccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload:user,
})
export const loginFailure = () =>
({
    type:"LOGIN_FAILURE"
})
export const logout= () =>
({
    type:"LOGOUT"
})

export const UpdateStart = (userCredenttials) => {
    type :"UPDATE_START"
}
export const UpdateSucccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload:user,
})
export const UpdateFailure = () =>
({
    type:"UPDATE_FAILURE"
})