# Taco Bell Redesign

## Demo Link:

[livemas.io](https://livemas.io/)

---

## Description:

This website is a redesign of Taco Bell's web page. I thought their website could use a refresh so I took it upon myself to take on this challenge. I wanted the main focus on the site to be the menu, since the menu on Taco Bell's website is not currently on their home page (you have to navigate to another page to see it). The menu I created is able to be filtered to show breakfast, lunch, and all items on the menu at the same time. The Site is mobile responsive, and received high scores on Google's Page Speed Insights. There is also a brief "about" section, a social media section with links to external pages, and a newsletter sign up area towards the bottom. Feel free to visit the demo link above. 

---

## Screen Shots:

Here are a few images from Live Mas:

![Home Page](https://livemas.io/images/img1.png)
![Menu section](https://livemas.io/images/img2.png)
![Mobile Menu](https://livemas.io/images/img3.png)

---

## Technologies:

This Single Page Application was built with Next JS and React. The Data for the menu items is being pulled from a headless CMS, Contentful, with the "getStaticProps" function in NextJs. It is styled using CSS Modules. The dependencies used were react-icons, and the Contentful CLI. The API keys were stored in a .env.local file, to be hidden from the public. The images were optimized for production, and are lazy loaded on the page. This is all possible because of the Image component from Next JS.  

---

## How to Install :

First, download or clone the repository. Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Credits:

Christian Ware
