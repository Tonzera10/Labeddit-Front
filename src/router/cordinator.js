export const goToPost = (navigate) => {
    navigate("/posts")
}

export const goToLogin = (navigate) => {
    navigate("/users/login")
}

export const goToSignup = (navigate) => {
    navigate('/users/signup')
}

export const goToComment = (navigate, id) => {
    navigate(`/posts/${id}/comments`)
}