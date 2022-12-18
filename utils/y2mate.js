const { default: axios } = require('axios');
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
    return new Promise(async(resolve, reject) => {
        const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
        let ytlink_regex = ytIdRegex.exec(link)
        let YT_ID = ytlink_regex[1]
        let configs = {
            'url': 'https://www.youtube.com/watch?v=' + YT_ID,
            'q_auto': 0,
            'ajax': 1
        }
        let headerss = {
            "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Cookie": "_gid=GA1.2.1565218017.1671296852; _ga=GA1.2.214241601.1671296852; prefetchAd_3381349=true; AdskeeperStorage=%7B%220%22%3A%7B%22svspr%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22svsds%22%3A3%7D%2C%22C1351205%22%3A%7B%22page%22%3A1%2C%22time%22%3A1671356878603%7D%2C%22C1351206%22%3A%7B%22page%22%3A1%2C%22time%22%3A1671356855622%7D%7D; _ga_K8CD7CY0TZ=GS1.1.1671356878.3.0.1671356886.0.0.0",  // 'PHPSESSID=6jo2ggb63g5mjvgj45f612ogt7; _ga=GA1.2.405896420.1625200423; _gid=GA1.2.2135261581.1625200423; _PN_SBSCRBR_FALLBACK_DENIED=1625200785624; MarketGidStorage={"0":{},"C702514":{"page":5,"time":1625200846733}}',
            "origin":" https://www.y2mate.com",
            "referer": `https://www.y2mate.com/youtube/${YT_ID}`,
            "sec-ch-ua": `"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"`,
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": `"Windows"`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": 1,
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
            "x-requested-with": "XMLHttpRequest",
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
                        v_id: YT_ID,
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
        let ytlink_regex = ytIdRegex.exec(link)
        let YT_ID = ytlink_regex[1]
        let configs = {
            'url': 'https://www.youtube.com/watch?v=' + YT_ID,
            'q_auto': 0,
            'ajax': 1
        }
        let headerss = {
            "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Cookie": "_gid=GA1.2.1565218017.1671296852; _ga=GA1.2.214241601.1671296852; prefetchAd_3381349=true; AdskeeperStorage=%7B%220%22%3A%7B%22svspr%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22svsds%22%3A3%7D%2C%22C1351205%22%3A%7B%22page%22%3A1%2C%22time%22%3A1671356878603%7D%2C%22C1351206%22%3A%7B%22page%22%3A1%2C%22time%22%3A1671356855622%7D%7D; _ga_K8CD7CY0TZ=GS1.1.1671356878.3.0.1671356886.0.0.0",  // 'PHPSESSID=6jo2ggb63g5mjvgj45f612ogt7; _ga=GA1.2.405896420.1625200423; _gid=GA1.2.2135261581.1625200423; _PN_SBSCRBR_FALLBACK_DENIED=1625200785624; MarketGidStorage={"0":{},"C702514":{"page":5,"time":1625200846733}}',
            "origin":" https://www.y2mate.com",
            "referer": `https://www.y2mate.com/youtube/${YT_ID}`,
            "sec-ch-ua": `"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"`,
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": `"Windows"`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": 1,
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
            "x-requested-with": "XMLHttpRequest",
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
                const getTypeSelection = $('li')[1]
                const checkType = $(getTypeSelection).find('a').attr('href')
                const getTable = $(checkType).find('tbody > tr')
                const changeTypeAudio = $($(getTable).find('td')[2]).find('a').attr('data-ftype')
                let list_quality = new Array();
                let list_audioMeta = new Array();
                $(getTable).each(async (i, elem) => {
                    const ColumnTable__quality = $(elem).find('td')[0]  //  For Quality
                    const ColumnTable__filesize = $(elem).find('td')[1]  //  For FileSize
                    let configs_mp3 = {
                        type: 'youtube',
                        _id: id,
                        v_id: YT_ID,
                        ajax: 1,
                        token: '',
                        ftype: changeTypeAudio,
                        fquality: $($(elem).find('td')[2]).find('a').attr('data-fquality')
                    }
                    const isAudio = $($(elem).find('td')[2]).find('a').attr('data-ftype') == changeTypeAudio
                    isAudio ? list_quality.push({
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
                            list_audioMeta.push({
                                quality: list_quality[i].quality,
                                size: list_quality[i].size,
                                download: getLink
                            })
                        })
                }
                resolve(list_audioMeta)
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