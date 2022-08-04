## Summary

This is a project interview submission for First Street Foundation. 

This is the first time that I used the Framework, "Next.js". Although, since I have worked with React quite a bit, it had enough similarities that it wasn't too hard to adapt. My impression of Next.js is that it enables a backend (routing, creating endpoints) and also creates limitations to avoid possible problems with your application in the future. 

On top of this, it convinced me to migrate my current project to it because of the server-side rendering. It delivers the HTML to the page before loading and that let's Google crawl the page (very important for search engines).

## Challenges 

**Challenge #1:**

I chose to embed the navbar within the banner because of the layout. The other option is to stack it on top using absolute positioning (which is much harder to make responsive). To develop this project further, there would need to be conditional rendering using props to change the banner, remove the banner, etc. But I made this design decision to utilize the "layout" functionality. 

**Challenge #2:** 

When deploying the app, I came across errors that do not pop up when using 'npm run dev'. It required me to replace certain symbols, to use <Image> instead of <Img>, and to change the config. The built-in <Image> component requires integer units, which led me to solve problems differently because I often use percentages and "auto" when making responsive images.
  
**#Challenge #3:** 
  
The api returns very random descriptions (uploaded by users). Because of this, the formatting for descriptions could be vastly different. The solution I implemented, with time constraints, was to parse through and remove <br /> using a regular expression and to add a "expand description" option depending on description length.
  
## If I had more time 
  
1. I would add checks for image sizes to change how different image dimensions are handled. Luckily, most are within constraints.
2. I would parse text and lay it out differently, but due to the nature of vimeo, this would be quite a big task (due to user input randomness).
3. Add animations when changing through videos using useEffect and setInterval. But because the content is changing instead of being editied through CSS, this would take more forethought (probably stacking, but then loading times maybe an issue).
  
## Conclusion 
  
This was an ejoyable project and I learned quite a few things that I will implement into my own projects. Also, it was a great opportunity to learn "Next.js". Thank you for the opportunity to show you my capabilities.
  
  






