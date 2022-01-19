# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

While working through this project i learned more about media queries, flex-box, grid, and pure css.
... and a method to make grid responsive without media queries:

```css
.grid-container {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
}
```

### Useful resources

- [Youtube CodelyTV](https://www.youtube.com/watch?v=El0OJ6h_2ZI&ab_channel=CodelyTV-Redescubrelaprogramación) - This helped me learn autofit and autofill, also how to make the grid responsive with 3 lines.

## Author

- Website - [0x5](https://www.0x5.cl)
- Frontend Mentor - [@ojitxslml](https://www.frontendmentor.io/profile/ojitxslml)
- Twitter - [@0x5_lml](https://www.twitter.com/0x5_lml)
