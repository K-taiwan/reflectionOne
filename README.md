# Week 1 Reflection

## Using Terminal
- In your SEI directory create a directory labeled reflection.
- Fork and Clone down this repo into the directory you just created. 
- Inside the cloned repo set up the base for a static website including the following
    - scripts and styles directories
    - create an app.js styles.css and index.html
- Open the folder in your code editor.

## Site Set Up
- Set up your html with html5 and link your css and js files to your html file.
- Add a console.log to your js as a sanity check. 
- Add a background to your body css as a sanity check.
- Using semantic Html add the following to your html document
    - A nav with a website title to the left hand side and three links to the right hand side
    - A main content section with an article with the following:
        - article title
        - article image
        - lorem ipsum article text as several paragraphs
        - Must take up 50% of the body and centered on the page
    - A footer that sticks to the bottom of the page containing a copyright logo with the year date and social media icons. 

## Javascript

Below your sanity check solve the following challenge. 

### Automated Where's Waldo

Given this Array:

```js
let people = ["Albert","Anna","Ben","Carmen Sandiego","Dora","Eric","Francis","Gary","Helen","Ira","Jake","Jane","John","kate","Louis","Mike","Nancy","Oscar","Paula","QuIncy","Regina","Sabrina","trevor","Unice","Victoria","Winston","Waldo","Xavier","Yancy","Zack"]
```

Create a **function** that takes the _array_ as an arguement as well as a _name_ to search for, example: "Waldo". This **function** should find the _name_ of the person in the _array_ and immediately _return_ the name as well as the index position(s) and stop looping.

If you include _"Ben"_ and _people_ as arguements, the output should look something like this:

```js
'I found Ben, he was at array[2]!'
```

Also handle a _return_ option if that name is not found. 

#### Bonus Objective
Given the following array refactor the function to check for mix data types.

```js
let people = [["Albert","Anna"],"Ben","Carmen Sandiego","Dora","Eric","Francis","Gary","Helen","Ira",["Jake","Jane","John"],"kate","Louis","Mike","Nancy","Oscar","Paula","QuIncy","Regina","Sabrina","trevor","Unice","Victoria",["Winston","Waldo"],"Xavier","Yancy","Zack"]
```

#### Bonus Bonus Objective
Make your function able to search through without case-sensitivity. Example, searching for "WaLDo" should find Waldo.

## Submission
- Push up your code to your forked repo and submit a pull request. 
