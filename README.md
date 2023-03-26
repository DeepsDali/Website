# Application Website

![Website](./Images/website.JPG)

## Description

My application website's homepage has a customised greeting depending on the time of the day created with a javascript function. There are 3 other sections: `About me`, `My Projects` and `My Interests`. The site is responive with a hamburger menu nav-bar on the mobile layout. The site also has a dark and light mode colour schemes. It showcases my learnings so far.

## About me

\* Find out more about my background , career and coding journey in this section. The information is laid out in tabs which are shown on clicking the relevant title button. To do this I created a function to add and remove active classes on both the buttons and the corresponding information tabs.

## My Projects

\* This section has thumbnails of my projects and a hover effect which shows links to their repositories. They are arranged in a responsive layout.

## My Interests

\* This section has an image carousel with many features like dots and left, right buttons to move through the slides, play and pause buttons and an upload button for the user to add images to the slides.

\* This was a challenging section as I had to create varions functions to implement the carousel. I had to first create a function to create slides from the images then function to show dots and higlight dot of the selected site by adding eventlisteners on them. The next fuction was to display the creatd slides.

\* After making the carousel functional with the use of dots I also added the left and right buttons to flick through the slides

\* The play and pause buttons were created such that selecting one button would make that inactive and activate the other. I used properties of setInterval and opacity to achieve this.

\* To implement the upload file function I had refactor my existing code by creating an array for the images and an addbuttonEvent function to process the newly added images.

\* A subsection of the My Intrests section has 2 images set in a single grid cell. They can be seen one at a time , merging into one another with the help of a slider bar adjusting the opacity of the images.

## Hamburger navbar and Modes

\* Finally I created a switch mode function for the dark and light mode and a hamburger navbar menu using classlist toggle functions.
