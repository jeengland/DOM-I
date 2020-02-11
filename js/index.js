const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Store siteContent keys and subkeys in arrays
let contentKeys = Object.keys(siteContent);
let allKeys = contentKeys.map(key => Object.keys(siteContent[key])).reduce((a, b) => a.concat(b), []);
// Create nodelist of all arrays we need to insert content into
let elements = document.querySelectorAll('a, img, h1, button, h4, p');
// Create array of whether something is an image or not
let type = allKeys.map((key) => {
  if (key.includes('src')) { return 'src'};
  return 'textContent';
});
// Initialize variables to help keep track of loops within loops
let current = 0;
let counter = 0;
// Run the function over each element in the nodelist;
elements.forEach((element, i) => { 
  // Run this piece if this is the last element in the subsection of siteContent 
  if (counter + 1 === Object.keys(siteContent[contentKeys[current]]).length) {
    // Insert the string inside the selected part of site content into either the src or textContent
    // of the element, depending on its index in the "type" array
    element[type[i]] = siteContent[contentKeys[current]][allKeys[i]];
    // Add to the counter used to select the array, reset the counter keeping track of length to 0
    current++;
    counter = 0;
  }
  else {
    // Insert the string inside the selected part of site content into either the src or textContent
    // of the element, depending on its index in the "type" array
    element[type[i]] = siteContent[contentKeys[current]][allKeys[i]];
    // Add to the counter keeping track of our position in the object relative to it's length.
    counter++;
  }
});

let teamAnchor = document.createElement('a');
let sitemapAnchor = document.createElement('a');

teamAnchor.textContent = 'Team';
sitemapAnchor.textContent = 'Sitemap';

let nav = document.querySelector('nav');

nav.prepend(teamAnchor);
nav.appendChild(sitemapAnchor);

let navLinks = document.querySelectorAll('nav a');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = 'green';
}

// LEGACY CODE

// let navLinks = document.querySelectorAll("nav a");

// for (let i = 0; i < navLinks.length; i++) {
//   navLinks[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
// }

// let navImg = document.querySelector('header img');

// navImg.src = siteContent.nav['img-src'];

// let ctaHeader = document.querySelector('.cta h1');

// ctaHeader.textContent = siteContent.cta.h1;

// let ctaButton = document.querySelector('.cta button');

// ctaButton.textContent = siteContent.cta.button;

// let ctaImage = document.querySelector('.cta img');

// ctaImage.src = siteContent.cta['img-src'];

// let topContent = document.querySelectorAll('.top-content div *');

// topContent[0].textContent = siteContent['main-content']['features-h4'];
// topContent[1].textContent = siteContent['main-content']['features-content'];
// topContent[2].textContent = siteContent['main-content']['about-h4'];
// topContent[3].textContent = siteContent['main-content']['about-content'];

// let middleImg = document.querySelector('.middle-img');

// middleImg.src = siteContent['main-content']['middle-img-src'];

// let bottomContent = document.querySelectorAll('.bottom-content div *');

// bottomContent[0].textContent = siteContent['main-content']['services-h4'];
// bottomContent[1].textContent = siteContent['main-content']['services-content'];
// bottomContent[2].textContent = siteContent['main-content']['product-h4'];
// bottomContent[3].textContent = siteContent['main-content']['product-content'];
// bottomContent[4].textContent = siteContent['main-content']['vision-h4'];
// bottomContent[5].textContent = siteContent['main-content']['vision-content'];

// contact[0].textContent = siteContent['contact']['contact-h4'];
// contact[1].textContent = siteContent['contact']['address'];
// contact[2].textContent = siteContent['contact']['phone'];
// contact[3].textContent = siteContent['contact']['email'];

// let footer = document.querySelector('footer p');

// footer.textContent = siteContent.footer.copyright;
