const who_is = require('whois')
const parser = require('parse-whois')

const whoIs = (site) => {
    return new Promise((resolve, reject) => {
        let resultObj = {
            'domain_name': undefined,
            'updated_date': undefined,
            'created_date': undefined,
            'registrant_name': undefined,
            'registrant_organization': undefined,
            'registrant_city': undefined,
            'registrant_phone': undefined,
            'registrant_email': undefined,
            'admin_name': undefined,
            'admin_email': undefined,
            'admin_organization': undefined,
            'admin_phone': undefined
        }
        who_is.lookup(site,(err, data) => {
            if (err) reject(err)
            let arr = parser.parseWhoIsData(data)
            let result = []
            let attributes = arr.filter(obj => {
                return obj.attribute === 'Domain Name' ||
                    obj.attribute === 'Updated Date' ||
                    obj.attribute === 'Creation Date' ||
                    obj.attribute === 'Registrant Name' ||
                    obj.attribute === 'Registrant Organization' ||
                    obj.attribute === 'Registrant City' ||
                    obj.attribute === 'Registrant Phone' ||
                    obj.attribute === 'Registrant Email' ||
                    obj.attribute === 'Tech Name' ||
                    obj.attribute === 'Admin Email' ||
                    obj.attribute === 'Tech Organization' ||
                    obj.attribute === 'Tech Phone'
            })

            let results = attributes.forEach((element) => {
                if (element.attribute === 'Domain Name') {
                    resultObj.domain_name = element.value
                }
                else if (element.attribute === 'Updated Date') {
                    resultObj.updated_date = element.value
                }
                else if (element.attribute === 'Creation Date') {
                    resultObj.created_date = element.value
                }
                else if (element.attribute === 'Registrant Name') {
                    resultObj.registrant_name = element.value
                }
                else if (element.attribute === 'Registrant Organization') {
                    resultObj.registrant_organization = element.value
                }
                else if (element.attribute === 'Registrant City') {
                    resultObj.registrant_city = element.value
                }
                else if (element.attribute === 'Registrant Phone') {
                    resultObj.registrant_phone = element.value
                }
                else if (element.attribute === 'Registrant Email') {
                    resultObj.registrant_email = element.value
                }
                else if (element.attribute === 'Tech Name') {
                    resultObj.admin_name = element.value
                }
                else if (element.attribute === 'Admin Email') {
                    resultObj.admin_email = element.value
                }
                else if (element.attribute === 'Tech Organization') {
                    resultObj.admin_organization = element.value
                }
                else if (element.attribute === 'Tech Phone') {
                    resultObj.admin_phone = element.value
                }
            })
            resolve(resultObj)
        })
    })
}

module.exports = whoIs