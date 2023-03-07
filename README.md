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

The midterm covers basic console commands, internet concepts (HTTP, DNS, web certs), HTML, CSS, and JavaScript.

# Intro to web programming
How to be an exceptional web programmer
- Tech = find right tool for the job, maximize its performance, and automate its execution.
- Art = visually attractive web application and well written code
- Social = teams to work together and interact with customers 
- Discovery = Having a mind that is always questioning 
Making mistakes is a key component for learning. Recognizing and embracing the power of making mistakes will help you learn faster, and at a deeper level. 

## A brief history of web programming
1. The formation of the internet that supports the communication of web applications
1. The creation of HTML and HTTP that made it possible to shared hyperlinked documents (Web 1.0).
1. The creation of CSS and JavaScript that enabled interactive web applications (Web 2.0).

## The Internet 
United States Department of Defense created the ARPANET as a means of sharing information between universities doing defense related research.
The management of the Internet is controlled by two major organizations. The Internet Engineering Task Force (IETF) defines the technical standards that specify how the physical network communicates. The Internet Corporation for Assigned Names and Numbers (ICANN) oversees both the Internet Protocol (IP) address space, and the Domain Name System (DNS).

## HTML = Hypertext Markup Language 
Tim Berners-Lee was tasked with building a system that would allow researchers to share documents between remote academic institutions. ARPANET provided the necessary connectivity, Berners-Lee defined the protocols for document sharing. Named the document format the HyperText Markup Language (HTML) based on inspiration from the digital publishing industry's Standard Generalized Markup Language (SGML). Documents could be interconnected with what he termed hyperlinks to allow immediate access to related documents. Berners-Lee also made contributions to HyperText Transfer Protocol (HTTP) and the Uniform Resource Locator (URL). These two definitions specify how web documents are addressed and transmitted across the Internet. 

## CSS = Cascading Style Sheets 
First proposed in 1994 by Håkon Wium Lie, a contemporary of Berners-Lee at CERN, in order to give HTML documents visual styling independent of the content's structure. By 1996 CSS became a standard and all the major browsers began to implement the functionality.

## JavaScript 
Added the ability to script web pages turning the static web into an interactive experience. "Always bet on JS" - Brendan Eich

### Order of asking questions 
1. Yourself
1. The Oracle - google is your friend
1. Peers
1. TA
1. Instructor 

### Technology stack
The collection of technologies that you use to create or deliver you web application is called a technology stack. it is a stack because they usually layer one on top of each other. 

## The Console 
Also know as the command line, shell, or terminal, the console provides access to the file system and allows for the execution of command line applications. POSIX compliance means that it supports a standard set of console commands. One of the primary purposes of a console application is to view the files on the computer. The files on a computer are organized into a tree structure of nodes called directories. You can see which directory you are in with the `pwd` (present working directory). You can list all of the files in the directory with ls (list files). Most command line applications take parameters that are specified after you type the application name. For example, `ls` can list all files (even hidden ones) in a long format if you provide the parameter `-la`. command.

### Executing commands 
The other primary purpose of the console is to execute commands. Here are some basic commands you should know and will come to love. 
- **echo** - Output the parameters of the command
- **cd** - Change directory
- **mkdir** - Make directory
- **rmdir** - Remove directory
- **rm** - Remove file(s)
- **mv** - Move file(s)
- **cp** - Copy files
- **ls** - List files
- **curl** - Command line client URL browser
- **grep** - Regular expression search
- **find** - Find files
- **top** - View running processes with CPU and memory usage
- **df** - View disk statistics
- **cat** - Output the contents of a file
- **less** - Interactively output the contents of a file
- **wc** - Count the words in a file
- **ps** - View the currently running processes
- **kill** - Kill a currently running process
- **sudo** - Execute a command as a super user (admin)
- **ssh** - Create a secure shell on a remote computer
- **scp** - Securely copy files to a remote computer
- **history** - Show the history of commands
- **ping** - Check if a website is up
- **tracert** - Trace the connections to a website
- **dig** - Show the DNS information for a domain
- **man** - Look up a command in the manual

You can also chain the input and output of commands using special characters

- `|` - Take the output from the command on the left and _pipe_, or pass, it to the command on the right
- `>` - Redirect output to a file. Overwrites the file if it exists
- `>>` - Redirect output to a file. Appends if the file exists

For example, you can list the files in a directory, pipe it into `grep` to search for files created in Nov, and then pipe that into `wc` to count the number of files found with a date of Nov.

```
ls -l | grep ' Nov ' | wc -l
```

There are also keystrokes that have special meaning in the console.

- `CTRL-R` - Use type ahead to find previous commands
- `CTRL-C` - Kill the currently running command

The better you get at working with the console the more efficient your programming will be. If I ever want to experiment with console commands... Open a console window and create a junk directory that you can play with by executing the command `mkdir junk` (make directory). Then execute the command `cd junk` to change into that directory. Try the following sequence of commands:

```sh
mkdir junk
cd junk
pwd
ls
ls -la
ls ../
echo "hello world" > test.txt
ls -l
cat test.txt
cp test.txt other.txt
ls
cat test.txt >> other.txt
less other.txt # press `q` to exit less
rm test.txt
ls
cd ..
ls
rm -rf junk
ls
```

### Editors 
The code editor is the workspace of a web application developer. Deeply learning an editor that makes you efficient and flexible will pay significant dividends in your ability to deliver quality work and greatly reduce frustration. A good editor should feel like a friend. If you are constantly arguing with your editor, then perhaps you need a relationship adjustment.

## VI aka VIM 
VI, or technically vim, is one of the oldest console editors. It is extremely powerful and some incredibly talented software engineers use it as their sole development environment. The reason why you should learn VI is that it is available on every Linux server and can do anything that you will need. VI works entirely by keyboard commands. There are two modes in VI, command mode and insert mode. When you open VI, you are in command mode and all of the command keystrokes will work. To edit a document, use the command `i` to enter insert mode. Now your keystrokes will modify the document. To exit insert mode and type commands again, press `ESC`.

The following short list of commands should allow you to do most of what you will ever want to do. Here is a [cheat sheet](https://vim.rtorr.com/) if you want to see all the commands.

| keystroke | meaning                                                                                                                                        |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `:h`      | help                                                                                                                                           |
| `i`       | enter insert mode. This will allow you to type and delete text. Use ESC to exit insert mode. No other commands will work while in insert mode. |
| `u`       | undo                                                                                                                                           |
| `CTRL-r`  | redo                                                                                                                                           |
| `gg`      | go to beginning of file                                                                                                                        |
| `G`       | go to end of file                                                                                                                              |
| `/`       | search for text that you type after /                                                                                                          |
| `n`       | next search match                                                                                                                              |
| `N`       | previous search match                                                                                                                          |
| `v`       | visually select text                                                                                                                           |
| `y`       | yank or copy selected text to clipboard                                                                                                        |
| `p`       | paste clipboard                                                                                                                                |
| `CTRL-wv` | Split window vertically                                                                                                                        |
| `CTRL-ww` | Toggle windows                                                                                                                                 |
| `CTRL-wq` | Close current window                                                                                                                           |
| `:e`      | Open a file. Type ahead available. If you open a directory you can navigate it in the window                                                   |
| `:w`      | write file (save)                                                                                                                              |
| `:q`      | quit. Use `:q!` to exit without saving          

# GIT 
Incredibly Linus Torvalds, the creator of Linux, was fed up with the proprietary version control software that he was using to track the code for the Linux kernel and so over a weekend he built Git, the world's most popular version control system. Git provides two valuable functions. First, it allows you to track versions of files in a directory. Second, it allows you to clone all of those versions to a different location, usually to a different computer. 

## What is Git?

Git provides two valuable functions. First, it allows you to track versions of files in a directory. Second, it allows you to clone all of those versions to a different location, usually to a different computer. We are going to focus on tracking versions in this instruction and cover cloning repositories when we talk later about GitHub.

You can track file versions of any files in a directory by initializing Git for that directory. You can do this right now by creating a new directory in a console window and initializing it as a Git repository.

```sh
➜  mkdir playingWithGit
➜  cd playingWithGit
➜  git init
```

If you list all files in the directory you will see that you now have a hidden directory named `.git`.

```sh
➜  ls -la
total 0
drwxr-xr-x   3 lee  staff    96 Dec  1 22:59 .
drwxr-xr-x+ 54 lee  staff  1728 Dec  1 23:00 ..
drwxr-xr-x   9 lee  staff   288 Dec  1 22:59 .git
```

The `.git` directory is where all of the versions get stored. Now use the `echo` command to create a file so that we can see how versioning works. After creating the new file, use `git status` to tell you what git is doing.

```sh
➜ echo hello world > hello.txt
➜ git status

On branch master
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	hello.txt

nothing added to commit but untracked files present (use "git add" to track)
```

Git status tells you that it detects a new file named `hello.txt`, but it isn't currently tracking versions for that file. To begin tracking versions you need to add it. Usually you track all files in a repository directory and so you can tell Git to track everything that it doesn't know about with `git add .`. Follow this with another call to `git status`.

```sh
➜  git add .
➜  git status

On branch master
No commits yet
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   hello.txt
```

Now Git tells us that it has `staged` the file `hello.txt` and it is ready to be committed as a version in the repository. We commit a version with the `commit` command. We always want to have a meaningful comment about the version we are committing and so we use the `-m` parameter to provide a message that will live with the version. Follow this with another call to `git status`.

```sh
➜  git commit -m "initial draft"
[master (root-commit) d43b07b] initial draft
 1 file changed, 1 insertion(+)
 create mode 100644 hello.txt

➜  git status
On branch master
nothing to commit, working tree clean
```

Congratulations! You have just committed your first file to a Git repository. It is important to note that we were only working with a single file in this example. However, a commit can represent multiple files. You just need to add them all before you execute the commit. Also, note that the point of the stage (add) step, is so that you can commit some files while still leaving other modified file out of the commit.

Let's make an edit to our file and commit it again. This time we will tell Git that we want to add all the tracked modified files to our commit by including the `-a` parameter along with our message parameter.

```sh
➜  echo goodbye world > hello.txt

➜  git commit -am "changed greeting to reflect the present mood"

[master e65f983] changed greeting to reflect the present mood
 1 file changed, 1 insertion(+), 1 deletion(-)
```

Now that we have a couple versions in our repository we can view the versions with the `git log` command.

```sh
➜  git log

commit e65f9833ca8ee366d0d9c1676a91b1a977dab441 (HEAD -> master)
Author: Lee
Date:   Thu Dec 1 23:32:22 2022 -0700

    changed greeting to reflect the present mood

commit d43b07b8890f52defb31507211ba78785bf6dccf
Author: Lee
Date:   Thu Dec 1 23:29:11 2022 -0700

    initial draft
```

This shows both commits with the associated comments.

## Commit SHA

Every commit has a unique identifier that is generated by hashing the file along with the timestamp using the SHA hashing algorithm. You can always refer to a specific commit in your version history by using its SHA. For example, if we want to temporarily switch back to a previous version to see what it contains we can use the `checkout` command. You only need to provide the first few characters of the SHA.

```sh
➜  git checkout d43b07b8890f

Note: switching to 'd43b07b8890f'.
HEAD is now at d43b07b initial draft

➜  cat hello.txt
hello world
```

The above output omits a big message saying that you are no longer looking at the latest version, but the important thing is that you can see that we are now looking at our old version. To get back to the top of the version chain, use the `checkout` command and reference the branch name, which is by default `master`.

```sh
➜  git checkout master
Previous HEAD position was d43b07b initial draft
Switched to branch 'master'

➜  cat hello.txt
goodbye world
```

Now we are back to our latest version.

The following diagram shows how your commits move from your working directory, to staging them for a commit, and then committing them to a repository.

![Git stage](essentialsGitStage.jpg)

A commit is a full snapshot of what was staged from your directory at the time of the commit. That means all of the files contained in the commit were reverted when you executed the checkout command. Since we only had one file in our commit, it looks like we are only flipping that file around, but basically you can think of it as a time machine for the entire directory.

## Diff

Most of the time you don't want to reverse back to an earlier commit. Instead you just want to compare the differences between commits. We can do that with the `diff` command. You can specify two SHAs that you would like to compare, or you can use the HEAD variable which points to the top of the commit change. To refer to earlier commits you just add `~` and the numerical distance from head that you want to reference. In this case we will compare HEAD and HEAD~1.

```sh
➜  git diff HEAD HEAD~1
```

```diff
diff --git a/hello.txt b/hello.txt
index 3b18e51..eeee2af 100644
--- a/hello.txt
+++ b/hello.txt
@@ -1 +1 @@
-hello world
+goodbye world
```

You can see that we made a change to `hello.txt` by removing `hello world` and adding `goodbye world`.

## Branches

Git supports the ability to branch your code. This allows you to work on variations of the code while still allowing progress on the main branch. For example, if you wanted to work on a new feature named `A` without interrupting work on the master branch, you would use the `git branch A` command and start working on the `A` branch with the `git checkout A` command. Now commits can be down to both the master and the `A` branch. When you want to combine the work done on both branches you us checkout the master branch and execute `git merge A`. If you decide you want to abandon the new feature then you just don't ever merge it back into the master branch.

## Binary files

You can store any type of file in Git, but be aware that if you store large binary files, such as images or videos, you are storing a copy of that file each time you make a change to it. For example, suppose you use Git to track the changes you make to a video production project. Every time you save a change to your 10 GB video file you store a complete copy of the file. That means 10 commits of the video file will store 100 GB of data in your repository.


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


## JavaScript Notes 
Officially known as ECMAScript. Typically JavaScript is executed using an interpreter at runtime instead of compiling it into a machine specific binary at build time. This has the advantage of making JavaScript very portable, but also allows for many errors, such as using an undefined variable. These types of errors commonly only get discovered when the program crashes during execution.
The JavaScript console object provides interaction with the JavaScript runtime's debugger console.
console.log('hello');
// OUTPUT: hello
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2

How to add JavaScript to HTML:  You can insert JavaScript into HTML either by directly including it in the HTML within the content of a <script> element, or using by the src attribute of the script element to reference an external JavaScript file.
  
Variables are declared using either the `let` or `const` keyword. `let` allows you to change the value of the variable while `const` will cause an error if you attempt to change it. JavaScript is a weakly typed language. That means that a variable always has a type, but the variable can change type when it is assigned a new value, or that types can be automatically converted based upon the context that they are used in. Sometime the results of automatic conversions can be unexpected from programmers who are use to strongly typed languages.
  
JavaScript uses complex rules for defining equality that depend upon the conversion of a type to a boolean value. You will sometimes hear this referred to as falsy and truthy evaluations. To remove this confusion, JavaScript introduced the strict equality (===) and inequality (!==) operators. The strict operators skip the type conversion when computing equality. This results in the following.
  
# JSON 
JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This make it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.
  
JSON document can contain these datatype: string, number, boolean, array, object, or null. Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square braces and commas delimit arrays, and strings are always delimited with double quotes.
  
You can convert JSON to, and from, JavaScript using the `JSON.parse` and `JSON.stringify` functions.
```js
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);
```
  
# JavaScript regular expressions (textual pattern mathcers) 
You can create a regular expression using the class constructor or a regular expression literal.

```js
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```
The `string` class has several functions that accept regular expressions. This includes `match`, `replace`, `search`, and `split`. For a quick test to see if there is a match you can use the regular expression object's `test` function.

```js
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```
  
# JavaScript Rest and Spread 
`rest` syntax allows you to make the last parameter of the function take as many things and combine them into an array. Provides variadic functions. 
```js
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```
Spread does the opposite of rest. It take an object that is iterable (e.g. array or string) and expands it into a function's parameters. Consider the following example.
  
```js
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```

# JavaScript Destructuring
 Destructuring is the process of pulling individual items out of an existing one, or removing structure. You can do this with either arrays or objects. This is helpful when you only care about a few items in the original structure.
  
Example one
```js
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
  
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```
When object destructuring, you explicitly specify the properties you want to pull from the source object. You can map the names to new variables instead of just using the original property names.
  
```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
```

# JavaScript Exceptions
  An exception can be triggered whenever your code generates an exception using the throw keyword, or whenever an exception is generated by the JavaScript runtime. A finally block that is always called whenever the try block is exited regardless if an exception was ever thrown. Restrict exceptions to truly exceptional situations, do not use as a way to handle normal flows of execution. Fallback pattern: you put the normal feature path in a try block and then provide a fallback implementation in the catch block. For example, normally you would get the high scores for a game by making a network request, but if the network is not available then a locally cached version of the last available scores is used. By providing a fallback, you can always return something, even if the desired feature is temporarily unavailable.
 
```js
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
```

# JavaScript Scope 
Scope is the variables that are visible in the current context of execution. There are four different types. 
1. **Gobal** - Visible to all code
1. **Module** - Visible to all code running in a module
1. **Function** - Visible within a function
1. **Block** - Visible within a block of code delimited by curly braces
Closure = a function and its surrounding state. 

## This

The keyword `this` represents a variable that points to an object that contains the context within the scope of the currently executing line of code. The `this` variable is automatically declared and you can reference `this` anywhere in a JavaScript program. Because the value of `this` depends upon the context in which it is referenced, there are three different context that this can refer to:

1. **Global** - When `this` is referenced outside a function or object it refers to the `globalThis` object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
1. **Function** - When `this` is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running is JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
1. **Object** - When `this` is referenced in a object it refers to the object.

## modules
JavaScript modules allow for the partitioning and sharing of code. Initially JavaScript had no support for modules. Node.js, a server side JavaScript execution application, introduced the concept of modules in order to support the importing of packages of JavaScript from third party providers.Node.js modules are called CommonJS modules, and JavaScript modules are called ES modules.

# Document Object Model (DOM) 
The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML. The browser provides access to the DOM through a global variable name document that points to the root element of the DOM. For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

# Promises
JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript `Promise`. Because the execution is asynchronous the promise object can be in one of three states at any given point in time.
The promise executor function takes two functions as parameters, `resolve` and `reject`. Calling `resolve` sets the promise to the `fulfilled` state, and calling `reject` sets the promise to the `rejected` state.
The promise object has three functions: `then`, `catch`, and `finally`. The `then` function is called if the promise is fulfilled, `catch` is called if the promise is `rejected`, and `finally` is always called after all the processing is completed.

1. **pending** - Currently running asynchronously
1. **fulfilled** - Completed successfully
1. **rejected** - Failed to complete

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```

```js
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```
# Async and await 
  
These functions provide a more concise representation then promises. The `await` keyword wraps the execution of a promise and removed the need to chain functions. The `await` expression will block until the promise state moves to `fulfilled`, or throws an exception if the state moves to `rejected`. One important restriction for working with `await` is that you cannot call await unless it is called at the top level of the JavaScript, or is in a function that is defined with the `async` keyword. Applying the `async` keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function. Basically this turns any function into an asynchronous function, so that it can in turn make asynchronous requests.

**async, try/catch version**

```js
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```
  
## await

The `async` keyword declares that a function returns a promise. The `await` keyword wraps a call to the `async` function, blocks execution until the promise has resolved, and then returns the result of the promise.
By combining async, to define functions that return promises, with await, to wait on the promise, you can create code that is asynchronous, but still maintains the flow of the code without explicitly using callbacks.

## Debugging JavaScript
- Console debugging: Insert console.log statements in your code. 
- Browser debugging: Really understand the code as it execute. Go to sources. Select the file. Set breakpoints. Refresh the brower window. 
  
# Simon JavaScript 
-Create the JS file. Then add a reference to it in your html. 
-Create one JS function then test it's functionality. Then add more. 
