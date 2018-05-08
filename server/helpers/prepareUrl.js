const prepareUrl = (url) => {
    return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]
}

module.exports = prepareUrl