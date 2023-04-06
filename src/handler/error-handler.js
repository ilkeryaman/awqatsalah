const sendError = (res, httpStatusCode, body) => {
    if (body) {
        res.status(httpStatusCode).jsonp(body);
    } else {
        res.sendStatus(httpStatusCode);
    }
}

export default {
    sendError
}