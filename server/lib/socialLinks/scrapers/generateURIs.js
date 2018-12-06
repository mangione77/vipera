const generateURIs = (url,language) => {
    let URIs
    if (language === 'es') {
        URIs = [`${url}/contacto`]
    }
    else if (language === 'en') {
        URIs = [`${url}/about`, `${url}/contact`]
    }
    return URIs
}

module.exports = generateURIs