exports.sendSuccess = (res, data) => {
    res.json({ code: 200, data, success: true });
};
