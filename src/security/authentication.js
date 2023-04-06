import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const accessTokenExpiresIn = parseInt(process.env.ACCESS_TOKEN_EXPIRES_IN);
const refreshTokenExpiresIn = parseInt(process.env.REFRESH_TOKEN_EXPIRES_IN);

const generateAccessToken = (info) => {
    return jwt.sign(info, process.env.ACCESS_TOKEN_SECRET, { expiresIn: accessTokenExpiresIn });
}

const generateRefreshToken = (info) => {
    return jwt.sign(info, process.env.REFRESH_TOKEN_SECRET, { expiresIn: refreshTokenExpiresIn });
}

const authenticateToken = (token) => {
    let info = null;
    try {
        info = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch {
    }
    return info;
}

const refreshToken = (refreshToken, info, callback) => {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,
        (err) => {
            if (err) {
                callback(null);
            }
            else {
                const accessToken = generateAccessToken(info);
                const newRefreshToken = generateRefreshToken(info);
                callback({
                    accessToken,
                    refreshToken: newRefreshToken
                });
            }
        });
}

export default {
    generateAccessToken,
    generateRefreshToken,
    authenticateToken,
    refreshToken
}