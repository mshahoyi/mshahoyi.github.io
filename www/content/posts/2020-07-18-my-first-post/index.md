---
title: My First Post!
# The text you right for the slug will be joined with the date of the post
language: en
slug: my-first-post
author: Mohammed Shahoe
date: 2020-07-18
excerpt: My first ever post on my own website. See how I created my website and
  the technologies I used
hero: images/how-to-make-a-small-business-website-in-5-simple-steps-ftrd32.jpg
---
Greetings from a COVID-19 patient! I am writing this under quarantine while having flu-like symptoms. I have not tested yet, so it is not definite that its COVID-19 and maybe just a simple flu. But consider the fact that its mid-summer now and its difficult for the influenza virus to hover around now. So again most probably its COVID-19.

This does not matter, however, as I am totally fine. I have just quarantined myself for public health reasons. My father is also symptomatic at the moment. We need your prayers 🙏🏻.

Ladies and gentlemen, hold and behold, I present to you my own website! 

I should have done this a while ago. In fact, a website is a must these days. It is a professional official platform from you to the world. It is where you can share your thoughts and experiences in detail. It is where you can showcase your work, which can not be emphasized enough for your future job prospects.

The technologies I used for this website are GatsbyJS which we can say is a static site generator (and much more) for ReactJS. So you get the benefit of all worlds, Reacts modularity and component reusability and the power, security, and speed of static websites. I deployed it using Netlify and use NetlifyCMS for content management.

I did not start from scratch, however, as I follow the philosophy which goes like this "stand on the shoulder of giants." I used a template called [Novela by Narative](https://github.com/narative/gatsby-theme-novela). Nevertheless, I changed some of their code to better match my use case.

The first thing was to add Kurdish support. I added 'langauge' attribute to the front matter of my articles which can be set to Kurdish or English. This brought itself the problem of slug generation. The default setting is to generate the slug from the title. Kurdish titles, however, is unsafe for URLs as it does not use Latin text. So slugs are now entered manually alongside other attributes in the article frontmatter.

The second change to the original code I had to make was to ditch Contentful for NetlifyCMS. I have used Contentful in some previous projects but never got to enter the comfort zone with it. I think Contentful is problem-prone and introduces unneeded complexity for my use case. Netlify CMS on the other hand clicked with me from the first encounter. It is simple, clean, and easy to get accustomed to.

In the end, I am happy that I managed to do this. I think this website will prove very beneficial in the longterm and will make my life a lot easier.