# VIP2
VIP2

The github for the previous VIP project is located: https://github.com/Software-Engineering-I/VIP

Assuming you already have NodeJS and MongoDB running
To install on your local environment
```
git clone https://github.com/FIU-SCIS-Senior-Projects/VIP2.git
cd VIP2
cd Code
npm install
bower install
node server.js
```

├── api                                 //Backend NodeJS Code
│   ├── config                          //Backend Config Files
│   │   ├── auth-server.js
│   │   ├── auth.js
│   │   ├── config.js
│   │   └── passport.js
│   ├── models                          //Backend Models that match DB Schema
│   │   ├── disciplines.js
│   │   ├── projects.js
│   │   ├── terms.js
│   │   ├── todo.js
│   │   └── users.js
│   └── routes                          //Backend Routes for NodeJS/Express
│       ├── profileApi.js
│       ├── projectsRoutes.js
│       ├── routes.js
│       ├── toDoRoutes.js
│       └── userRoutes.js
├── bower.json                          //Bower Frontend Package JSON
├── node_modules                        //Node Modules Installed
├── package.json                        //Node Modules Package JSON
├── server.js                           //NodeJS Server Start File
└── webapp                              //Front Angular Code
    ├── app.js                          
    ├── css                             //Front End CSS Files
    │   └── style.css
    ├── features                        //Front End Features Implemented
    │   ├── about
    │   ├── apply-to-project
    │   ├── competition
    │   ├── contact
    │   ├── emailVerification
    │   ├── evaluation-page
    │   ├── footer
    │   ├── graduate-application
    │   ├── header
    │   ├── how-vip-credits-count
    │   ├── login
    │   ├── main-page
    │   ├── organization
    │   ├── presentations-and-publications
    │   ├── profile-page
    │   ├── project-proposals
    │   ├── registration
    │   ├── registration-permit
    │   ├── reviewRegistration
    │   ├── to-do
    │   ├── undergraduate-application
    │   └── vip-projects
    ├── img                             //Front End Image Files
    │   ├── FIU_Logo.png
    │   ├── FIU_VIP.jpg
    │   ├── Sample_IMG.jpg
    │   ├── VIP_Poster.png
    │   └── user_icon.png
    ├── index.html                      //Front End Index HTML
    ├── lib                             //Front End Bower Installs
    └── routes.js                       //Front End Routes that connect to Backend API endpoints
