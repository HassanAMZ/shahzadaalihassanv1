---
title: Google Ads URL suffixes for dynamic UTM parameters
date: '2021-11-26'
blogID: '00009'
tags: ['google ads', 'utm parameters', 'server tracking']
draft: false
summary: To track the traffic acquisition for google ads on google analytics for iOS14+ users. To track the performance of the google ads in UA or GA4 using traffic acquisition reports
coverImage: '/static/blog/00009.png'
embedId: 'null'
---

![Cover Image](/static/blog/00009.png)

## Table Of Content:

1. [Origin of the issue](#origin-of-the-issue)
2. [Solution to the ATT](#solution-to-the-att)
3. [UTM Code](#utm-code)
4. [Notes](#notes)

### Origin of the issue

Apple now requires apps in the App Store that engage in what Apple defines as "tracking" to obtain permission to "track" users across apps and websites owned by third parties for advertising and measurement purposes through its AppTrackingTransparency (ATT) framework.

As a result of iOS14 changes, advertisers running campaigns will be affected by limitations on data sharing. The user can opt-out or opt-in of the tracking, either way the source of the traffic is lost.

Therefore, when the app user clicks on one of the google ads the gclid is not passed with the landing page URL. Before these updates, an gclid parameter was passed with the URL, which is a random string of aphla-numaric characters, containing all the information about google ads, campaign, ad group etc.

### Solution to the ATT

There is no solution to fix the Google ads reporting / conversion tracking on Google ads manager. We can add UTM paramters in the URL and view the report in UA or GA4. However, the inital step is to add the UTM paramters in each google ad at campaign level.

### UTM Code

We need to update the URL code for all the google ads, we are running on google ads manager. Copy the code below and paste it under Google Campaign> Settings> Additional Settings> Campaign URL options> Final URL Suffix. Click on "TEST" to make sure everything is fine.

```
utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={adgroupid}&utm_term={keyword}

```

![UTM Parameter Image](/static/blog/00009_1.png)

### Notes

2. Do not add the UTM parameters Google Campaign> Settings> Additional Settings> Campaign URL options> Tracking Template