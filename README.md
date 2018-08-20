# Vipera 🐍

## Motivation

In the past, when doing market research for brands, a lot of times I saw myself visiting every site by hand, and looking for social links inside that I would later dump in a spreadsheet. While this is the logical aproach for someone who does not code, it was _really_ time consuming. Not to mention that after putting together all this social links I would have to go to each one of them to find some insights on their profiles.  

Thats why I started this project: to make this process faster, more reliable and of course, to save time.

## General Info

Vipera will help you by searching for you for social links in the sites you input, and then gathering info on those links (like followers, like-count, recent posts, etc). Right now it can pull information from Twitter, Instagram and it's able to do WhoIs lookups. It's in __early__ development, so expect bugs and such. Right now there's no frontend UI - _it's in the works_ - so I suggest you test it out with [Postman](https://www.getpostman.com/) or your favourite HTTP client.

## Known bugs

Obviously, every site is different and the approach may be wrong in many parts, so I welcome suggestions and PR's or collaborations. I will track every bug I found here.

## Usage

1. ```git clone``` the project.
1. Create a ```.env``` file which specifies:
**```PORT```
**```CONSUMER_KEY``` - [Twitter]
**```CONSUMER_SECRET``` - [Twitter]
**```ACCESS_TOKEN``` - [Twitter]
**```ACCESS_TOKEN_SECRET``` - [Twitter]
1. npm install
1. If you use nodemon: ```nodemon server```
1. If not: ```node server/index``` (and then [install nodemon](https://www.npmjs.com/package/nodemon) 😉)
1. Enjoy!

## Docs

The system is divided in two types of routes: ```crawler``` or ```social```. _Crawler_ endpoints will try to find social links, while _Social_ will pull the social links plus all the information it can find on those profiles.

* Crawler routes

_BASE URL_: ```{PROTOCOL}{HOST}:{PORT}/api/crawler```

_Endpoints_:

__Search__: ```{BASE_URL}/search```

This endpoint will try to find social links in the website the user inputs. If none is found, an error will be returned.

__Payload example__:

```js
{
	"site": "https://www.zara.com/es/"
}
```

__Response example__:

```js
{
    "status": 200,
    "result": {
        "site": "https://www.zara.com/es/",
        "socialLinks": {
            "Facebook": "https://www.facebook.com/Zara",
            "Instagram": "https://www.instagram.com/zara/",
            "Pinterest": "https://es.pinterest.com/zaraofficial",
            "Twitter": "https://twitter.com/zaraes"
        }
    }
}
```

__Error example__:

```js
{
    "error": "No social links were found in https://www.google.com"
}
```


TODO: 

* Finish DOCS
* Track known bugs
* Continue development
