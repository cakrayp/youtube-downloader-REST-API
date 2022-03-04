const axios = require('axios');
const cheerio = require('cheerio')
const fetch = require('node-fetch')

// Method POST With fetch
function post(url, formdata) {
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: new URLSearchParams(Object.entries(formdata))
    })
}


function getVideoWithy2mate(link) {
    return new Promise((resolve, reject) => {
        const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
        let url = ytIdRegex.exec(link)
        let configs = {
            'url': 'https://www.youtube.be/' + url,
            'q_auto': 0,
            'ajax': 1
        }
        let headerss = {
            "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Cookie": 'PHPSESSID=6jo2ggb63g5mjvgj45f612ogt7; _ga=GA1.2.405896420.1625200423; _gid=GA1.2.2135261581.1625200423; _PN_SBSCRBR_FALLBACK_DENIED=1625200785624; MarketGidStorage={"0":{},"C702514":{"page":5,"time":1625200846733}}'
        }
        axios('https://www.y2mate.com/mates/en68/analyze/ajax', {
            method: 'POST',
            data: new URLSearchParams(Object.entries(configs)),
            headers: headerss
        })
            .then(async ({ data }) => {
                const $ = cheerio.load(data.result)
                // let img = $('div.thumbnail.cover > a > img').attr('src');
                // let title = $('div.thumbnail.cover > div > b').text();
                // let size = $('#mp4 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
                let id = /var k__id = "(.*?)"/.exec(data.result)[1]
                const getTable = $('#mp4').find('tbody > tr')
                let list_quality = new Array();
                let list_videoMeta = new Array();
                $(getTable).each(async (i, elem) => {
                    const ColumnTable__quality = $(elem).find('td')[0]  //  For Quality
                    const ColumnTable__filesize = $(elem).find('td')[1]  //  For FileSize
                    let configs_mp4 = {
                        type: 'youtube',
                        _id: id,
                        v_id: url[1],
                        ajax: 1,
                        token: '',
                        ftype: 'mp4',
                        fquality: parseInt($(ColumnTable__quality).text().replace(/[a-zA-Z\.]+/g, "").trim())
                    }
                    $($(elem).find('td')[2]).find('a').attr('data-ftype') == 'mp4' ? list_quality.push({
                        configs_mp4,
                        quality: $(ColumnTable__quality).text().trim(),
                        size: $(ColumnTable__filesize).text().trim(),
                    }) : false
                })
                for (let i = 0; i < list_quality.length; i++) {
                    await axios('https://www.y2mate.com/mates/en68/convert', {
                        method: 'POST',
                        data: new URLSearchParams(Object.entries(list_quality[i].configs_mp4)),
                        headers: headerss
                    })
                        .then(({ data }) => {
                            const getLink = /<a.+?href="(.+?)"/.exec(data.result)[1]
                            list_videoMeta.push({
                                quality: list_quality[i].quality,
                                size: list_quality[i].size,
                                download: getLink
                            })
                        })
                }
                resolve(list_videoMeta)
            })
            .catch(err => {
                reject({
                    status: 406,
                    message: "Error"
                })
            })
    })
}

function getAudioWithy2mate(link) {
    return new Promise((resolve, reject) => {
        const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
        let url = ytIdRegex.exec(link)
        let configs = {
            'url': 'https://www.youtube.be/' + url,
            'q_auto': 0,
            'ajax': 1
        }
        let headerss = {
            "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Cookie": 'PHPSESSID=6jo2ggb63g5mjvgj45f612ogt7; _ga=GA1.2.405896420.1625200423; _gid=GA1.2.2135261581.1625200423; _PN_SBSCRBR_FALLBACK_DENIED=1625200785624; MarketGidStorage={"0":{},"C702514":{"page":5,"time":1625200846733}}'
        }
        axios('https://www.y2mate.com/mates/en68/analyze/ajax', {
            method: 'POST',
            data: new URLSearchParams(Object.entries(configs)),
            headers: headerss
        })
            .then(async ({ data }) => {
                const $ = cheerio.load(data.result)
                // let img = $('div.thumbnail.cover > a > img').attr('src');
                // let title = $('div.thumbnail.cover > div > b').text();
                // let size = $('#mp3 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
                let id = /var k__id = "(.*?)"/.exec(data.result)[1]
                const getTable = $('#mp3').find('tbody > tr')
                let list_quality = new Array();
                let list_videoMeta = new Array();
                $(getTable).each(async (i, elem) => {
                    const ColumnTable__quality = $(elem).find('td')[0]  //  For Quality
                    const ColumnTable__filesize = $(elem).find('td')[1]  //  For FileSize
                    let configs_mp3 = {
                        type: 'youtube',
                        _id: id,
                        v_id: url[1],
                        ajax: 1,
                        token: '',
                        ftype: 'mp3',
                        fquality: $($(elem).find('td')[2]).find('a').attr('data-fquality')
                    }
                    $($(elem).find('td')[2]).find('a').attr('data-ftype') == 'mp3' ? list_quality.push({
                        configs_mp3,
                        quality: $(ColumnTable__quality).text().trim(),
                        size: $(ColumnTable__filesize).text().trim(),
                    }) : false
                })
                for (let i = 0; i < list_quality.length; i++) {
                    await axios('https://www.y2mate.com/mates/en68/convert', {
                        method: 'POST',
                        data: new URLSearchParams(Object.entries(list_quality[i].configs_mp3)),
                        headers: headerss
                    })
                        .then(({ data }) => {
                            const getLink = /<a.+?href="(.+?)"/.exec(data.result)[1]
                            list_videoMeta.push({
                                quality: list_quality[i].quality,
                                size: list_quality[i].size,
                                download: getLink
                            })
                        })
                }
                resolve(list_videoMeta)
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
    getVideoWithy2mate,
    getAudioWithy2mate,
}