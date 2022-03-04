const axios = require('axios');
const cheerio = require('cheerio');


function getAudioWithTubeMp3(link) {
    return new Promise((resolve, reject) => {
        const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:shorts\/)|(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/i
        if (ytIdRegex.test(link)) {
            var VideoID = ytIdRegex.exec(link)
        } else {
            throw reject('Please enter a valid youtube URL')
        }
        axios({
            method: "GET",
            url: `https://tubemp3.biz/api/mp3/${VideoID[1]}`,
            headers: {
                "Content-type": "text/html"
            }
        })
        .then(async({ data }) => {
            const $ = cheerio.load(data);
            const downloads = []
            $('a').each((index, elem) => {
                downloads.push({ 
                    "quality": $(elem.children[2]).text().trim(),
                    "size": $(elem.children[4]).text().trim(),
                    "url": /G3\('(.+?)'\)/.exec(elem.attribs.onclick)[1], 
                })
            })
            resolve(downloads)
        })
        .catch(err => {
            reject({
                status: 406,
                message: "Error"
            })
        })
    })
}

function getVideoWithTubeMp3(link) {
    return new Promise((resolve, reject) => {
        const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:shorts\/)|(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/i
        if (ytIdRegex.test(link)) {
            var VideoID = ytIdRegex.exec(link)
        } else {
            throw reject('Please enter a valid youtube URL')
        }
        axios({
            method: "GET",
            url: `https://tubemp3.biz/api/mp4/${VideoID[1]}`,
            headers: {
                "Content-type": "text/html"
            }
        })
        .then(async({ data }) => {
            const $ = cheerio.load(data);
            const downloads = []
            $('a').each((index, elem) => {
                downloads.push({ 
                    "quality": $(elem.children[2]).text().trim(),
                    "size": $(elem.children[4]).text().trim(),
                    "url": /G3\('(.+?)'\)/.exec(elem.attribs.onclick)[1], 
                })
            })
            resolve(downloads)
        })
        .catch(err => {
            reject({
                status: 406,
                message: "Error"
            })
        })
    })
}

module.exports = {
    getVideoWithTubeMp3,
    getAudioWithTubeMp3
}