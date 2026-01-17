import jwt from 'jsonwebtoken';
import {User} from '../models/user.model.js';
import ApiError from '../utils/ApiError.js';
const validateToken = async (req, res, next) => {
    try {
        const authHeaders = req.headers.authorization
        if (!authHeaders || !authHeaders.startsWith('Bearer ')) {
            throw new ApiError(401, "Access token missing or invalid.")
        }

        const token = authHeaders.split(' ')[1]
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decoded._id).select("-password");

        if (!user) {
            throw new ApiError(401, "Invalid access token");
        }

        req.user = user;
        next();

    } catch (error) {
        throw new ApiError(401, "Unauthorized or token expired");
    }
}
export default validateToken;