## Summary

This is a project interview submission for First Street Foundation. 

This is the first time that I used the Framework, "Next.js". Although, since I have worked with React quite a bit, there were enough similarities that made it easy to adapt. My impression of Next.js is that it enables backend functionality (routing, creating endpoints). It also creates limitations to avoid possible problems with your application in the future. 

On top of this, it convinced me to migrate my current project to "Next.js" because of the server-side rendering. It delivers the HTML to the page before loading and that lets Google crawl the page (very important for SEO).

## Challenges 

**Challenge #1:**

I chose to embed the navbar within the banner because of the layout. The other option is to stack it on top using absolute positioning (which is much harder to make responsive). To develop this project further, there would need to be conditional rendering using props to change the banner, remove the banner, etc. But I made this design decision to utilize the "layout" functionality. 

**Challenge #2:** 

When deploying the app, I came across errors that do not pop up when using 'npm run dev'. It required me to replace certain symbols, to use <Image> instead of <Img>, and to change the config. The built-in <Image> component requires integer units, which led me to solve problems differently because I often use percentages and "auto" when making responsive images.
  
**#Challenge #3:** 
  
The api returns very random descriptions (uploaded by users). Because of this, formatting for descriptions could be vastly different. The solution I implemented, with time constraints, was to parse through and remove <br /> using a regular expression and to add an "expand description" option depending on description length.
  
##Success and Failure
  
Success - I was able to create a responsive layout and created a cool extra addon with the hero button. Make sure to click it to "see something cool".
Failure - I wasn't able to write an endpoint and seperate it out like I would using "Node.js". So I included the API call in the home page file. Given more time I could figure this out.
  
## If I had more time 
  
1. =Add checks for image sizes to change how different image dimensions are handled. Luckily, most are within constraints.
2. Parse text and lay it out differently, but due to the nature of vimeo, this would be quite a big task (due to user input randomness).
3. Add animations when changing through videos using useEffect and setInterval. But because the content is changing instead of being edited through CSS, this would take more forethought (probably stacking, but then loading times may be an issue).
4. Seperate the API call out of the home page and into its own folder.
  
## Conclusion 
  
This was an enjoyable project and I learned quite a few things that I will implement into my own projects. Also, it was a great opportunity to learn "Next.js". Thank you for the opportunity to show you my capabilities.
