import asyncHandler from '../utils/AsyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt'
// @desc Register User
// @route POST /api/auth/register
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new ApiError(400, "All Fields are required")
    }

    const existedUser = await User.findOne({ $or: [{ name }, { email }] })
    if (existedUser) {
        throw new ApiError(409, "User already registered.")
    }

    const user = await User.create({
        name,
        email,
        password
    })

    const createdUser = await User.findById(user._id).select("-password");

    res.status(201).json(new ApiResponse(201, "User registeration successful.", createdUser))
})


// @desc Login User
// @route POST /api/auth/login
// @access PUBLIC
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new ApiError(400, "All fields are required.")
    }

    const existedUser = await User.findOne({
        email
    }).select("+password");

    if (!existedUser) {
        throw new ApiError(404, "User not found, Register first.")
    }

    const isPasswordValid = await existedUser.comparePassword(password, existedUser.password)
    if (!isPasswordValid) {
        throw new ApiError(400, "Invalid Credentials.")
    }

    const accessToken = existedUser.generateAccessToken();
    const refreshToken = existedUser.generateRefreshToken();

    const loggedInUser = await User.findById(existedUser._id).select("-password");

    res.status(201).json(new ApiResponse(201, "User login successful.", {user:loggedInUser, accessToken, refreshToken}))
})


// @desc Logout User
// @route POST /api/auth/logout
// @access PRIVATE
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, "User logout successful."))
})


// @desc Get User Info
// @route POST /api/auth/dashboard
// @access PRIVATE
const getUserInfo = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, "fetched user info successfully."))
})


export { registerUser, loginUser, logoutUser, getUserInfo }