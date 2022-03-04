# Youtube Downloader with REST API

Hello everyone, welcome to my Rest API and I hope you're good :)

## Examples

if you want to get apikey from google, you can get it on [Youtube API v3](https://developers.google.com/youtube/v3/getting-started)

```GOOGLE_KEY={YOUR_APIKEY}```

### How to Use Paramenter for My APIs

You can use paramenter of type ```video``` and ```audio```

Example:
```https://youtubeapisdownloader.vercel.app/youtube/downloader/{TYPE}?url=${YT_URL}```

``` json
{
    "status": 200,
    "creator": "@cakrayp_jhn",
    "result": {
        "video": {
            "id": "ewMDxrpj3x0",
            "url": "https://www.youtube.com/watch?v=ewMDxrpj3x0"
        },
        "thumbnail": {
            "default": "https://i.ytimg.com/vi/ewMDxrpj3x0/maxresdefault.jpg",
            "standard": "https://i.ytimg.com/vi/ewMDxrpj3x0/sddefault.jpg"
        },
        "title": "The Elves • Beautiful Fantasy Music for Relaxation",
        "description": "Beautiful fantasy music for relaxation by the Norwegian composer Peder B. Helland. This piece is called \"The Elves\". Main instruments used: duduk, dizi, guzheng, erhu, harp and electric cello. Stream or download music from Soothing Relaxation: https://soothingrelaxation.lnk.to/listenYL\n\n💿 Track information:\nTitle: The Elves \nComposer: Peder B. Helland\nIndex: ★201\nBuy this track: https://soothingrelaxation.com/products/the-elves-single\nLicense this track: https://soothingrelaxation.com/products/the-elves-license\n\nFollow Soothing Relaxation on...\nSoothing Relaxation: https://soothingrelaxation.lnk.to/websiteYL\nFacebook: https://soothingrelaxation.lnk.to/FacebookYL\nInstagram: https://soothingrelaxation.lnk.to/InstagramYL\nSpotify: https://soothingrelaxation.lnk.to/listenYL/spotify\nApple Music: https://soothingrelaxation.lnk.to/listenYL/applemusic\nYouTube Music: https://soothingrelaxation.lnk.to/listenYL/youtubemusic\nAmazon Music: https://soothingrelaxation.lnk.to/listenYL/amazonmusic\nDeezer: https://soothingrelaxation.lnk.to/listenYL/deezer\n\nFollow Peder B. Helland on...\nWebsite: https://pederbhelland.lnk.to/websiteYL\nFacebook: https://pederbhelland.lnk.to/facebookYL\nInstagram: https://pederbhelland.lnk.to/instagramYL\n\nListen to our playlists on other music services: https://www.soothingplaylists.com/\nListen to more relaxing music: https://www.youtube.com/playlist?list=PLQ_PIlf6OzqL3BE0rB6clb9IzLLkkSKUF\nGet a free music download and stay updated with our newsletter: https://soothingrelaxation.lnk.to/newsletterYL\n\n📜 Message from the composer and creator of Soothing Relaxation:\n\"I am a composer from Norway and I started this channel with a simple vision: to create a place that you can visit whenever you want to sit down and relax. I compose music that often can be described as sleep music, calm music, yoga music, study music, peaceful music, beautiful music and relaxing music. I love to compose music and I put a lot of work into it. \n\nThank you very much for listening and for leaving feedback. Every single day I am completely astonished by all your warm support and it really inspires me to work even harder on my music. If you enjoy my work, I would be very happy if you decided to subscribe and join our community. Have a wonderful day or evening!\"\n\n- Peder B. Helland, composer for Soothing Relaxation\n\n© Copyright:\nMusic composed/arranged by Peder B. Helland. \nFootage/photos licensed from:\n• iStockPhoto: Zeferli, RockfordMedia, Treedeo, xavierarnau, tunart, xijian, ATW Media, circotasu\n\n☀️ Relevant hashtags:\n#relaxingmusic, #relax, #soothingrelaxation, #music, #sleep",
        "channel": "Soothing Relaxation",
        "viewers": "680039",
        "likeCount": "13733",
        "favoriteCount": "0",
        "comments": "1172",
        "publishedAt": "29-01-2021",
        "downloads": {
            "tubemp3_biz": [
                {
                    "quality": "720p kbps",
                    "size": "1.22 GB",
                    "url": "https://ytmp4.buzz/download/ewMDxrpj3x0/mp4/22/1646381609/89ee0b3e706f87d5e467e8df093abe4ad7d95ee23dd008cd0f05bedfc8d735b0/1"
                },
                {
                    "quality": "360p kbps",
                    "size": "912.53 MB",
                    "url": "https://ytmp4.buzz/download/ewMDxrpj3x0/mp4/18/1646381609/89ee0b3e706f87d5e467e8df093abe4ad7d95ee23dd008cd0f05bedfc8d735b0/1"
                }
            ],
            "y2mate": [
                {
                    "quality": "720p (.mp4) m-HD",
                    "size": "MB",
                    "download": "https://rr3---sn-p5qlsn7l.googlevideo.com/videoplayback?expire=1646399758&ei=rrwhYt-tJ4PQgwP5oobIDQ&ip=3.83.80.125&id=o-AEcalatZhVLY-7pcIHAwsAPBl62aeoBX2IOj4eWocBRs&itag=22&source=youtube&requiressl=yes&mh=Us&mm=31%2C29&mn=sn-p5qlsn7l%2Csn-p5qs7n7z&ms=au%2Crdu&mv=m&mvi=3&pl=12&initcwndbps=491250&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=11011.390&lmt=1612616650974948&mt=1646377749&fvip=3&fexp=24001373%2C24007246&beids=23886201&c=ANDROID&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgYngaQZro9ZhfxAbT5WkcZXxEc3bTXQ1vQr_ooZTNQCICIQCpX0xvIJj1MQVF6QnIMvOlNJy8zaaD5NAWJ0CJPc-GCg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAI_NWYWNdTCHp3AoDKrIJdhe7HuFHgszEYInSfIrDTCMAiAKiUczySjSD_4SIlzBuhOdS_-hjkPU7rcEZ8QNfrG93Q%3D%3D&title=The+Elves+%E2%80%A2+Beautiful+Fantasy+Music+for+Relaxation"
                },
                {
                    "quality": "360p (.mp4)",
                    "size": "912.5 MB",
                    "download": "https://rr3---sn-p5qlsn7l.googlevideo.com/videoplayback?expire=1646399758&ei=rrwhYt-tJ4PQgwP5oobIDQ&ip=3.83.80.125&id=o-AEcalatZhVLY-7pcIHAwsAPBl62aeoBX2IOj4eWocBRs&itag=18&source=youtube&requiressl=yes&mh=Us&mm=31%2C29&mn=sn-p5qlsn7l%2Csn-p5qs7n7z&ms=au%2Crdu&mv=m&mvi=3&pl=12&initcwndbps=491250&vprv=1&mime=video%2Fmp4&gir=yes&clen=956859249&ratebypass=yes&dur=11011.390&lmt=1612570425666307&mt=1646377749&fvip=3&fexp=24001373%2C24007246&beids=23886201&c=ANDROID&txp=5530422&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAJeVzwfH8Pbbhu8ve_rNKKAHK1Ngmx9RbQxSDph4BGCqAiEA-8d4hhGQR9REOE6gTJH7StxK7yYjQAvdhx7VmD96xbo%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAI_NWYWNdTCHp3AoDKrIJdhe7HuFHgszEYInSfIrDTCMAiAKiUczySjSD_4SIlzBuhOdS_-hjkPU7rcEZ8QNfrG93Q%3D%3D&title=The+Elves+%E2%80%A2+Beautiful+Fantasy+Music+for+Relaxation"
                }
            ]
        }
    }
}
```


Alse you can use type of
```downloader```

Example:
```https://youtubeapisdownloader.vercel.app/youtube/downloader/{TYPE}?url=${YT_URL}&responsetype=${TYPE_RESPONSE}```

Response result to JSON

```json
{
    "tubemp3_biz": [
        {
            "quality": "720p kbps",
            "size": "1.22 GB",
            "url": "https://ytmp4.buzz/download/ewMDxrpj3x0/mp4/22/1646381635/b08d3cd8ef99e3e3ddd894a85198b20b89e818d635d154ddb4a2d3611e0f4e5a/1"
        },
        {
            "quality": "360p kbps",
            "size": "912.53 MB",
            "url": "https://ytmp4.buzz/download/ewMDxrpj3x0/mp4/18/1646381635/b08d3cd8ef99e3e3ddd894a85198b20b89e818d635d154ddb4a2d3611e0f4e5a/1"
        }
    ],
    "y2mate": [
        {
            "quality": "720p (.mp4) m-HD",
            "size": "MB",
            "download": "https://rr3---sn-p5qlsn7l.googlevideo.com/videoplayback?expire=1646399758&ei=rrwhYt-tJ4PQgwP5oobIDQ&ip=3.83.80.125&id=o-AEcalatZhVLY-7pcIHAwsAPBl62aeoBX2IOj4eWocBRs&itag=22&source=youtube&requiressl=yes&mh=Us&mm=31%2C29&mn=sn-p5qlsn7l%2Csn-p5qs7n7z&ms=au%2Crdu&mv=m&mvi=3&pl=12&initcwndbps=491250&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=11011.390&lmt=1612616650974948&mt=1646377749&fvip=3&fexp=24001373%2C24007246&beids=23886201&c=ANDROID&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgYngaQZro9ZhfxAbT5WkcZXxEc3bTXQ1vQr_ooZTNQCICIQCpX0xvIJj1MQVF6QnIMvOlNJy8zaaD5NAWJ0CJPc-GCg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAI_NWYWNdTCHp3AoDKrIJdhe7HuFHgszEYInSfIrDTCMAiAKiUczySjSD_4SIlzBuhOdS_-hjkPU7rcEZ8QNfrG93Q%3D%3D&title=The+Elves+%E2%80%A2+Beautiful+Fantasy+Music+for+Relaxation"
        },
        {
            "quality": "360p (.mp4)",
            "size": "912.5 MB",
            "download": "https://rr3---sn-p5qlsn7l.googlevideo.com/videoplayback?expire=1646399758&ei=rrwhYt-tJ4PQgwP5oobIDQ&ip=3.83.80.125&id=o-AEcalatZhVLY-7pcIHAwsAPBl62aeoBX2IOj4eWocBRs&itag=18&source=youtube&requiressl=yes&mh=Us&mm=31%2C29&mn=sn-p5qlsn7l%2Csn-p5qs7n7z&ms=au%2Crdu&mv=m&mvi=3&pl=12&initcwndbps=491250&vprv=1&mime=video%2Fmp4&gir=yes&clen=956859249&ratebypass=yes&dur=11011.390&lmt=1612570425666307&mt=1646377749&fvip=3&fexp=24001373%2C24007246&beids=23886201&c=ANDROID&txp=5530422&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAJeVzwfH8Pbbhu8ve_rNKKAHK1Ngmx9RbQxSDph4BGCqAiEA-8d4hhGQR9REOE6gTJH7StxK7yYjQAvdhx7VmD96xbo%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAI_NWYWNdTCHp3AoDKrIJdhe7HuFHgszEYInSfIrDTCMAiAKiUczySjSD_4SIlzBuhOdS_-hjkPU7rcEZ8QNfrG93Q%3D%3D&title=The+Elves+%E2%80%A2+Beautiful+Fantasy+Music+for+Relaxation"
        }
    ]
}
```

