# startup
Startup assignment for CS 260 Web Development 

This is the repo I will be using for CS 260 and my start up application. I am excited to learn more about Web Development! 

I am modifying the README.md file from VS code! Yay! 
I am now modifying the README.md file from GitHub! Woohoo! 

I am changing this line... I am changing this line from VS code... and fixing the merge issue...

Notes about the GitHub assignment:

This is the classic github use patten to follow. 
1. Pull the repository's latest changes from GitHub (git pull)
2. Make changes to the code (Eliza's note: MAKE SURE TO SAVE IN VS CODE AFTER CHANGING THE CODE!)
3. Commit the changes (git commit)
4. Push the changes to GitHub (git push)

- Merging conflicts are annoying to fix but it is possible. The best thing to do is to be careful
and not create such conflicts 
- I created a personal access token. To create another one go to settings >> developer settings >> personal access token. Then follow the steps there. 

Elevator pitch for start-up 
Have you ever struggled to come up with a data idea? Maybe you googled data ideas and found lists out there that are pages and pages long! How do you know if one of those many ideas is even a good one? If you want to know if a restaurant is good there are many websites you can look up and see the reviews people who have eaten there have said. If you want to see if a professor is good, you can go to ratemyProfessor.com and see how many stars they have as well as the good and bad things about their classes. Why not do the same thing for data ideas?! DaringDarlingandDevastatingDatingReviews.com is here to the rescue. Whether you're single and want to impress your new love interest, in a serious relationship and ready to pop the question, or married and want to create a special anniversary or just spice up the normal night date this website is for you. Here people can submit data ideas and others can post reviews. Each dating idea will have a rating out of five stars and want others to have to say about it. This way you can be informed and plan the best dates to romance your significant other. 

Key features:
Each user must log in and create an account
A way to post new data ideas 
A rating system out of 5 stars for each data idea 
Also a cost for each data idea
A way for each user to comment/review data ideas 
A way for users to comment on others reviews
Possible to tag date ideas (greatFirstDate, SafeMutaulDate, ProposalWorthy, AmazingAnniversy, HerPlanningForHim, HimPlanningForHer, ClassicBYU, STEMMajorDate, ArtAdmirer, FriendZoner, Creepy, etc….) 
Monitor data idea and comments and delete inappropriate ones 
Search feature (by keyword or by tag) 
Top rated (5 stars, etc) page of date ideas 
Be able to save data ideas you like
Be about to follow other people and have them follow you. Allow others to see your save date ideas (So you can see what sounds fun to your significant other!) 

Rough sketches of my application
![Sketch One](Website_first_sketch.jpg)
![Sketch Two](Website_2nd_drawing.jpg)

# AWS notes 
My server IP address is http://18.119.93.245/
In order to romote shell into my server, the command is ssh -i [key pair file] ubuntu@[ip address]
I now have a domain name that is associated with my IP address. It is darlingDateReviews.click. 
I have a record representing your root domain name and a wild card subdomain so I can access my website with 
my domain name and any subdomain name such as startup.darlingDateReviews.click

Caddy acts as a gateway to our different services and to host our static web application files. 
Caddy has ACME support built into it by default. We used Caddy to request a certificate from Let's Encrypt for you domain name.

# simon notes html
It is important to test your files before you deploy them to your production environment. 
As I was creating the simon html files, I noticed that they all had the same footer and the same header. Within the header each file contained the 
navigation elements allowing the user to go from page to page. 

# simon notes css
It is best to use a combination of bootstrap and css selectors and declarations. 
CSS makes our application visually appealing and adds intuitive user interface elements, but it is still not functional due to the lack of interactivity. 
How to refer to a CSS file for a HTML file using a link element. 
```html
<link rel="stylesheet" href="main.css" />
```
How to deply to my production environement. 
```sh
./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon
```

# HTML Notes 
HyperText Markup Language (HTML) provides the foundational content structure that all web applications build on. 
HTML elements are represented with enclosing tags that may enclose other elements or text. Attributes describe the specific details of the element. 

# CSS Notes
Cascading Style Sheets (CSS) converts the structure and content of HTML into a vibrant, responsive, experience.
A rule is comprised of a selector that selects the elements to apply the rule to, and one or more declarations that represent the property to style with the given property value.
How to associate CSS with HTML
1. use the style attribute of an HTML element and explicitly assign one or more declarations.
2. use the HTML style element to define CSS rules within the HTML document
3. use the HTML link element to create a hyperlink reference to an external file containing CSS rules. Make appear in the head element of the document. 

CSS defines everything as boxes.
![CSS box model](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.simplilearn.com%2Ftutorials%2Fcss-tutorial%2Fcss-box-model&psig=AOvVaw3AENWOUmJEnV4t_89GoDjw&ust=1677018249930000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMi4jvmRpf0CFQAAAAAdAAAAABAE)

Different ways to add color to CSS: keyword, RGB hex, RGB function, HSL.

There are four major families of fonts: `Serif`, `san-serif`, `fixed`, and `symbol`. A serif is a small stroke attached to the ends of a character's major strokes. Serif fonts have the extra strokes, san-serif fonts do not.
