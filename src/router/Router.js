import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PostsPage } from "../pages/Posts/PostsPage"
import { LoginPage } from "../pages/Login/LoginPage"
import { SignupPage } from "../pages/Singup/SignupPage"
import { CommentsPage } from "../pages/Comments/CommentsPage"


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/posts" element={<PostsPage/>}/>
                <Route path="/users/login" element={<LoginPage/>}/>
                <Route path="/users/signup" element={<SignupPage/>}/>
                <Route path="/posts/:postsId/comments" element={<CommentsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}