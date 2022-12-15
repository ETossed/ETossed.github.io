let aboutHeader = "Who Am I?";

let firstButtons = `<button class="bottom" onclick="nextPage()">Next</button>`;
let middleButtons = `<button class="bottom" onclick="prevPage()">Prev</button>
<button class="bottom" onclick="nextPage()">Next</button>`;
let lastButtons = `<button class="bottom" onclick="prevPage()">Prev</button>`;

let aboutContent = `Hello! I'm Jeremy Skalla, and I'm a 21 year old Computer Science Major at the 
<span class="jeremy-color">University of Minnesota</span>. I have experience in <span class="jeremy-color">Python</span>, 
<span class="jeremy-color">C</span>, <span class="jeremy-color">C++</span>, 
<span class="jeremy-color">Java</span>, <span class="jeremy-color">Javascript</span>, and more. 
Let's move on from coding talk, and I'll tell you about some of my other passions and my background.<br><br>
I was born in Dallas and moved to Minnesota at age 5. I'm a huge fan of playing and watching basketball, 
especially watching the <span class="jeremy-color">Dallas Mavericks</span>. I'm also a huge soccer fan, 
and I'm a season ticket holder for <span class="jeremy-color">Minnesota United</span>. I love discussing music,
especially hip-hop and pop. My favorite albums of all time are <span style=class="jeremy-color">Rodeo</span> by Travis Scott, 
<span style=class="jeremy-color">My Beautiful Dark Twisted Fantasy</span> by Kanye West, and 
<span class="jeremy-color">What's the Story Morning Glory</span> by Oasis. Poker is one of my favorite past-times,
along with trivia competitions. Lastly, I'm super heavily involved in esports, as you can see by my projects.`;

let projectsContent1 = `<a href="https://github.com/JeremySkalla/pysmashgg" class="jeremy-color">Pysmashgg</a> is a simple wrapper for 
<a href="https://smash.gg/" class="jeremy-color">smash.gg's</a> 
API that takes inspiration from older wrappers, but it useds the GraphQL API instead of the older, 
slower one. It has over 16,000 downloads on PyPI and Github. I started this project in December 2020 over  
winter break.<br>

<figure>
    <img src="resources/pysmashgg-readme.png" class="incontentimg" alt="Part of the README.md for pysmashgg">
    <figcaption>Part of the README.md for pysmashgg</figcaption>
</figure>

This was written all in <span class="jeremy-color">Python</span>. I was able to create documentation about how to 
use the wrapper. One of my biggest goals with this project was to help other newer coders understand how the API works. 
It's cool when people tell me that my wrapper helped them with their projects. I continue to work on it to this day 
intermittently. I've extended it for use in another one of my projects, JUMS.`;

let projectsContent2 = `<a href="https://github.com/JeremySkalla/JeremySkalla.github.io"><span class="jeremy-color">This Website</span></a>
was a passion project I started during my time taking CSCI4131 at the University of Minnesota. The class was my first real 
introduction to <span class="jeremy-color">Javascript</span>. I had had some experience in 
<span class="jeremy-color">HTML</span> and <span class="jeremy-color">CSS</span> due to running a blog in 2012 
with a friend, but this was my first time really putting it to good use.<br>

<figure>
    <img src="resources/ps-draft1.jpg" class="incontentimg" alt="Website Draft in Illustrator Version 1">
    <figcaption>Website Draft in Illustrator Version 1</figcaption>
</figure>

I have some background in graphic design, so I immediately put it to use and made a mockup of my idea in 
<span class="jeremy-color">Illustrator</span>. After multiple design changes in the mockup, I got to work. 
I decided on having a dark theme and a light theme, as it's something I always want in softwares/websites I use. 
I also decided on having matte-style colors, adhering to Google's Material Design guidelines.`

let projectsContent3 = `<span class="jeremy-color">JUMS</span> is a project I worked on during winter break of 2021 
after being reached out to by some members of the esports commmunity. 
<span class="jeremy-color">Super Smash Bros. Melee</span> is an esports scene driven by statistics. Since I had experience 
using the <a href="https://smash.gg/"class="jeremy-color">smash.gg</a> API, this was a perfect project for me to do
in <span class="jeremy-color">Python</span>.<br>

<figure>
    <img src="resources/jums-chart.png" class="incontentimg" alt="One of the many JUMS charts">
    <figcaption>One of the many JUMS charts</figcaption>
</figure>

After multiple weeks of sending in queries, I had processed over 500 million lines of esports data that ended 
up being stored in a <span class="jeremy-color">NoSQL</span> database. When I started to talk 
to esports community members and influencers, there was clearly an interest in my data. I ended up collaborating on 
video and article projects with many of them. I created graphs using <span class="jeremy-color">MatPlotLib</span> and 
detailed spreadsheets using <span class="jeremy-color">Excel</span> with some 
<span class="jeremy-color">VBA</span> being used as well.`

let projectsContent4 = `<a href="https://github.com/JeremySkalla/pysmashgg" class="jeremy-color">Discord Among Us Queue Bot</a> 
was a project I undertook with another developer, Gowin20. He's a student at UCLA that I met online playing games. 
We ran a server for the popular game <span class="jeremy-color">Among Us</span>, and we needed a way to make a queue. 
Since we were both computer science majors, we decided to make a bot together.<br>

<figure>
    <img src="resources/queue-example.png" class="incontentimg" alt="Example of the queue bot being used">
    <figcaption>Example of the queue bot being used</figcaption>
</figure>

This was my first real experience developing with another developer. This was super beneficial, as I learned how to 
develop in parallel and use version control on git. This project was also done in <span class="jeremy-color">Python</span>.`

let projectsHeaderArr = ["<a href=\"https://github.com/JeremySkalla/pysmashgg\">Pysmashgg</a>", 
                        "This Website", "JUMS", "Discord Queue Bot"];
let projectsH2Arr = ["December 2020-Current", "February 2022-Current", "December 2021-Current", "January 2021-March 2021"]
let projectsContentArr = [projectsContent1, projectsContent2, projectsContent3, projectsContent4];

let workContent1 = `I currently work at <span class="jeremy-color">Travelers Insurance</span> in their Technology and Leadership
development program. I'm excited to get ramped up into my work!`

let workContent2 = `I worked at <span class="jeremy-color">ActiFi</span> as a summer intern between April 2021-September 2021. 
During this time, I had many roles. I tested and documented their SuccessPro software for implementation 
of new features. Along with this, I gave feedback to the company on the new features. I edited training 
video of SuccessPro for new employees at the company, as well as video of the software being used in action.  
This was also my first time getting experience in <span class="jeremy-color">Salesforce</span>, where I created and implemented plugins.<br><br>

On the less technical side of things, I attended meetings with the CEO and other members of the company, 
discussing future plans of the company. During these meetings, I took notes and created a glossary, both 
for the use of new employees. These notes were used when the company hired a new member to the Sales team that summer.`

let workContent3 = `<span class="jeremy-color">Grinning Goat Gaming</span> was my first long-term job, and my first real 
job. I originally was hired in November 2015 after they adveritised that they needed a video editor. I had no experience 
doing any video editing, but was an avid fan of their work. I got the job, and tought myself <span class="jeremy-color">Sony Vegas Pro</span>. 
Eventually, that transitioned into learning <span class="jeremy-color">Adobe After Effects</span> and 
<span class="jeremy-color">Adobe Premiere Pro</span>.<br><br>

In 2017, the company hired two more editors, who I was put in charge of. I ended up looking over and facilitating the 
editor's workflow. This was my first time in a leadership role, as I was only 17 at the time. This was huge for my development in 
terms of learning how to develop relationships with other staff members, especially those I was in charge of. I worked 
around 20 to 25 hours a week while maintaining good grades in High School. I decided to step down when college started.`

let workContent4 = `My local <span class="jeremy-color">Culver's</span> was a 10 minute walk away from my house. 
I started this role as a summer job when I was 16/17. I was trained on tons of roles throughout the store in 
order to fufill what ever role they needed me in.<br><br>

This was important for my development as a teenager. I worked up to 35 hours a week during the months that 
I worked there. This also gave me an ability to improve face-to-face customer relationship skills, something 
that I hadn't gotten out of my other job at that point. Something else that's very important that I learned was the ability 
to be a great co-worker and how to contribute to a team.`

let workHeaderArr = ["Travelers Insurance", "ActiFi", "Grinning Goat Gaming", "Culver's"];
let workH2Arr = ["June 2022-Current", "April-August 2021", "November 2015-October 2018", "April-September 2017"];
let workContentArr = [workContent1, workContent2, workContent3, workContent4];