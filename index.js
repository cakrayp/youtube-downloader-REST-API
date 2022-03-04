const express = require('express');
const cheerio = require('cheerio');
const fetch = require('node-fetch')
const axios = require('axios');
const app = express()
const port = process.env.PORT || 4040
const google_key = process.env.GOOGLE_KEY || "YOUR_GOOGLE_APIKEY"

// Library
const {
    y2mate,
    tubemp3
} = require('./utils/index')

app.set("json spaces", 4)

app.get('/', async (req, res) => {
    const link_gitub = "https://github.com/cakrayp/youtube-downloader-REST-API.git"
    res.send(`<code>Hello Welcome to My youtube Rest API, Please read in Documentation. <a href="${link_gitub}">"${link_gitub}"</a></code0`)
})

app.get('/youtube/downloader/:Mimetype', async (req, res) => {
    var mediaType = req.params.Mimetype,
        videoIdWithURL = req.query.url,
        responsetype = req.query.responsetype

    if (!videoIdWithURL) return res.send('<code>Please enter paramenter of "url" E.g: url=YT_URL</code>')

    const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:shorts\/)|(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/i

    switch (mediaType) {
        case 'video':
            if (ytIdRegex.test(videoIdWithURL)) {
                const ytVideoId = ytIdRegex.exec(videoIdWithURL)
                fetch(encodeURI(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${ytVideoId[1]}&key=${google_key}`))
                    .then(response => response.json())
                    .then(async (data) => {
                        if (responsetype == "downloader") {
                            const { liveBroadcastContent } = data.items[0].snippet;
                            if (liveBroadcastContent == 'live') {
                                getLinkDownloader = {
                                    message: "This video is streaming live, and it cannot get download link URLs"
                                }
                            } else {
                                try { var getLinkTubemp3 = await tubemp3.getVideoWithTubeMp3(`https://youtu.be/${ytVideoId[1]}`) } catch (err) { var getLinkTubemp3 = err.message }
                                try { var getLinkTy2mate = await y2mate.getVideoWithy2mate(`https://youtu.be/${ytVideoId[1]}`) } catch (err) { var getLinkTy2mate = err.message }
                                getLinkDownloader = {
                                    tubemp3_biz: getLinkTubemp3,
                                    y2mate: getLinkTy2mate,
                                }
                            }
                            res.json({status: 200, creator: "@cakrayp_jhn", result: getLinkDownloader})
                        } else {
                            const { publishedAt, channelId, title, description, thumbnails, channelTitle, liveBroadcastContent } = data.items[0].snippet;
                            const { viewCount, likeCount, dislikeCount, favoriteCount, commentCount } = data.items[0].statistics
                            const highthumb = thumbnails.maxres == undefined ? thumbnails.high.url : thumbnails.maxres.url;
                            const standardthumb = thumbnails.standard == undefined ? thumbnails.medium.url : thumbnails.standard.url
                            const date = publishedAt.split('T')
                            const publish_date = date[0].split('-')
                            const publish_date2 = publish_date[2] + ' ' + publish_date[1] + ' ' + publish_date[0]
                            const published = publish_date2.split(" ").join('-')
                            if (liveBroadcastContent == 'live') {
                                getLinkDownloader = {
                                    message: "This video is streaming live, and it cannot get download link URLs"
                                }
                            } else {
                                try { var getLinkTubemp3 = await tubemp3.getVideoWithTubeMp3(`https://youtu.be/${ytVideoId[1]}`) } catch (err) { var getLinkTubemp3 = err.message }
                                try { var getLinkTy2mate = await y2mate.getVideoWithy2mate(`https://youtu.be/${ytVideoId[1]}`) } catch (err) { var getLinkTy2mate = err.message }
                                getLinkDownloader = {
                                    tubemp3_biz: getLinkTubemp3,
                                    y2mate: getLinkTy2mate,
                                }
                            }
                            res.json({
                                status: 200,
                                creator: "@cakrayp_jhn",
                                result: {
                                    video: {
                                        id: data.items[0].id,
                                        url: 'https://www.youtube.com/watch?v=' + data.items[0].id
                                    },
                                    thumbnail: {
                                        default: highthumb,
                                        standard: standardthumb,
                                    },
                                    title: title,
                                    description: description ? description : 'none',
                                    channel: channelTitle,
                                    viewers: viewCount,
                                    likeCount: likeCount,
                                    favoriteCount: favoriteCount,
                                    comments: commentCount,
                                    publishedAt: published,
                                    downloads: getLinkDownloader,
                                }
                            })
                        }
                    }).catch(err => {
                        res.json({
                            status: 406,
                            creator: "@cakrayp_jhn",
                            message: 'Please enter Youtube URL valid.'
                        })
                    })
            } else {
                res.json({
                    status: 403,
                    creator: "@cakrayp_jhn",
                    message: "This is special for youtube URL"
                })
            }
            break;
        case 'audio':
            if (ytIdRegex.test(videoIdWithURL)) {
                const ytVideoId = ytIdRegex.exec(videoIdWithURL)
                fetch(encodeURI(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${ytVideoId[1]}&key=${google_key}`))
                    .then(response => response.json())
                    .then(async (data) => {
                        if (responsetype == "downloader") {
                            const { liveBroadcastContent } = data.items[0].snippet;
                            if (liveBroadcastContent == 'live') {
                                getLinkDownloader = {
                                    message: "This video is streaming live, and it cannot get download link URLs"
                                }
                            } else {
                                try { var getLinkTubemp3 = await tubemp3.getAudioWithTubeMp3(`https://youtu.be/${ytVideoId[1]}`) } catch (err) { var getLinkTubemp3 = err.message }
                                try { var getLinkTy2mate = await y2mate.getAudioWithy2mate(`https://youtu.be/${ytVideoId[1]}`) } catch (err) { var getLinkTy2mate = err.message }
                                getLinkDownloader = {
                                    tubemp3_biz: getLinkTubemp3,
                                    y2mate: getLinkTy2mate,
                                }
                            }
                            res.json({status: 200, creator: "@cakrayp_jhn", result: getLinkDownloader})
                        } else {
                            const { publishedAt, channelId, title, description, thumbnails, channelTitle, liveBroadcastContent } = data.items[0].snippet;
                            const { viewCount, likeCount, dislikeCount, favoriteCount, commentCount } = data.items[0].statistics
                            const highthumb = thumbnails.maxres == undefined ? thumbnails.high.url : thumbnails.maxres.url;
                            const standardthumb = thumbnails.standard == undefined ? thumbnails.medium.url : thumbnails.standard.url
                            const date = publishedAt.split('T')
                            const publish_date = date[0].split('-')
                            const publish_date2 = publish_date[2] + ' ' + publish_date[1] + ' ' + publish_date[0]
                            const published = publish_date2.split(" ").join('-')
                            if (liveBroadcastContent == 'live') {
                                getLinkDownloader = {
                                    message: "This video is streaming live, and it cannot get download link URLs"
                                }
                            } else {
                                try { var getLinkTubemp3 = await tubemp3.getAudioWithTubeMp3(`https://youtu.be/${ytVideoId[1]}`) } catch (err) { var getLinkTubemp3 = err.message }
                                try { var getLinkTy2mate = await y2mate.getAudioWithy2mate(`https://youtu.be/${ytVideoId[1]}`) } catch (err) { var getLinkTy2mate = err.message }
                                getLinkDownloader = {
                                    tubemp3_biz: getLinkTubemp3,
                                    y2mate: getLinkTy2mate,
                                }
                            }
                            res.json({
                                status: 200,
                                creator: "@cakrayp_jhn",
                                result: {
                                    video: {
                                        id: data.items[0].id,
                                        url: 'https://www.youtube.com/watch?v=' + data.items[0].id
                                    },
                                    thumbnail: {
                                        default: highthumb,
                                        standard: standardthumb,
                                    },
                                    title: title,
                                    description: description ? description : 'none',
                                    channel: channelTitle,
                                    viewers: viewCount,
                                    likeCount: likeCount,
                                    favoriteCount: favoriteCount,
                                    comments: commentCount,
                                    publishedAt: published,
                                    downloads: getLinkDownloader,
                                }
                            })
                        }
                    }).catch(err => {
                        res.json({
                            status: false,
                            code: 403,
                            message: 'Please enter Youtube URL valid.'
                        })
                    })
            } else {
                res.json({
                    status: 403,
                    creator: "@cakrayp_jhn",
                    message: "This is special for youtube URL"
                })
            }
            break;
    }
})


app.use(async (req, res) => {
    res.send("<code>404 Not found</code>")
})

app.listen(port, () => {
    console.log('Server was running on port : ' + port)
})