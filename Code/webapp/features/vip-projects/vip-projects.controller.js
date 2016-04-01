(function () {
    'use strict';

    angular
        .module('vip-projects')
        .controller('VIPProjectsCtrl', VIPProjectsCtrl);

    VIPProjectsCtrl.$inject = ['$state', '$scope', 'ProjectService'];
    /* @ngInject */
    function VIPProjectsCtrl($state, $scope, ProjectService) {
        var vm = this;
        vm.filterByDiscipline = filterByDiscipline;
        vm.viewDetails = viewDetails;
        
        vm.projects = [
            {id: 1, name:"Smart Buildings", image:"img/Sample_IMG.jpg", description:"Smart Building is a collaborative project between the School of Computing & Information Sciences and the OHL School of Construction at FIU. This project aims to facilitate the energy conservation in buildings by rewarding good behavior in saving energy. The extensive use of hardware sensors and mobile software applications has made this project a great candidate for our VIP program.\nBuildings are the number one energy consumers in the United States. It has been estimated around 30% of the electricity consumed is being wasted through inefficient usage. Our goal is to be able to motivate people to save energy by demonstrating their energy performance and comparing the performance of one room with the rest of the building.\nThere is no current system that provides a smart approach to compare energy consumption of building with the occupancy behavior in different zones. Our goal is to provide a solution that can teach the user about energy consumption and motive him/her to save energy.\nThe requirements of the solution are as follows:\n·      Allow the user to choose from different zones in a building.\n·      Allow the user to have access to information on occupancy in different zones.\n·      Allow the user to have access to information on lighting in different zones.\n·      Allow the user to have access to information the statistics of temperature, lighting, occupancy and plug load of different zones.\n·      Allow the user to add new zones he/she wants to have access to.\n·      Allow the user to compare his/her room energy performance with the rest of the building. ", disciplineId:1},
            
            {id: 2, name:"Informed Traveller", image:"img/Sample_IMG.jpg", description:"Informed Traveller is a collaborative project between the School of Computing & Information Sciences (SCIS) and the OHL School of Construction at FIU. This project aims to provide valuable traffic and parking information to the FIU community at its main campus and to the adjacent Sweetwater city commuters.~~ Congestion on the roads and highways is a major problem in Miami-Dade County, and given the county’s rapidly growing population, it is a hurdle that is not going away. In the city of Sweetwater, this is a big dilemma since the city is positioned between two large consumer areas (Dolphin Mall and International Mall) and FIU a 55,000 plus student state university.  Continual growth in this area causes more and more congestion as an increasing number of drivers compete, in an unorganized way, for a limited set of resources. To better understand this continual growth in traffic and the parameters that relieve or aggravate congestion is the reason for developing the model.~~ Current System is built and modeled on the basis of the busiest part of city Cologne (Germany), Barbarossaplatz. The model includes the design of road positions, traffic lines, and traffic lights based on Barbarossaplatz area. The system visualizes traffic of the region in an agent-based simulation. In addition, it produces statistics about objects involved in simulating traffic conditions, so that conclusion about improving traffic flow can be made by user.~~ The overall requirement of the project is to elaborate the design and implement a UniversityCity/Sweetwater Traffic Simulator for research purposes. Using the original implementation of the traffic simulation for the region of Barbarossaplatz, the system shall use the objects from that research project to build an underlying model. It shall utilize agent-based simulation to recreate the current traffic conditions of the city Sweetwater and attempt to find timing optimizations that the streetlights could employ to reduce traffic.", disciplineId:2},
            
            {id: 3, name:"Multi Touch", image:"img/Sample_IMG.jpg", description:"Currently, games and applications are being developed with the constraint of the operating system’s most immediate input devices, such as the mouse on a PC or a touch screen on a tablet. Developing an application outside of the familiar devices adds an extra challenge to the application, as developing code for another input device or paying for framework licenses can hurt the growth of the application.~~ Choosing a framework to provide the code for such capabilities become an extra challenge. Most professional frameworks on input device handling only focus on a select few, and even those that broaden the scope choose to constrain themselves to the popular input devices. These are the problems that TAMGeF hopes to solve for all developers looking to redefine the immersive experience of the modern day applications.~~ The current (or rather previous) system was a simpler multi-touch screen visualizer. The visualizer gave visual feedback of touch event through the means of “finger painting”. The touch events are recorded and can be saved as a CSV file for later replay. The current visualizer also had some customization features such as changing brush sizes and modifying the way the view mapped to screen.~~ The new multi-touch visualizer should allow developers working with TAMGeF to:~·      See feedback from the touch screen be displayed on screen~·      Allow gestures or touch patterns to be recorded and stored in a readable format, such as JSON~·      Assign the calculations that should be computed based on the data received by the touch screen, and be visually or textually represented to the user.~·      Allow easy code customizability to how the data is visually displayed.~~ The new visualizer should also help the team developers of the next iteration to expand the capabilities of the TAM into three-dimensional input devices, such as gyroscopes and leap motion, using the OpenGL implementation.", disciplineId:3},
            
            {id: 4, name:"Startups", image:"img/Sample_IMG.jpg", description:"As the VIP Site at FIU, we aim to promote creation of startup companies in South Florida that are spinoffs from our VIP projects. We have started supporting three wonderful ideas. A short description of these projects follows.~~ SkillCourt (http://skillcourt.com/): There is a lot involved with the training of soccer players. The current approaches to training soccer are primitive usually involving an instructor and a physical field for playing. The primary objective is to produce a modern system for training soccer players. The system will be a program with features that will assist players for learning the skills required on their own. Implementing this system is revolutionary to the way avid players train in the sport. With the functionality and portability that SkillCourt offers, the user can create a personalized regimen for improving skills. Thus, SkillCourt offers an overall improvement to both the soccer training and playing experience for players.~~ Addigy (https://www.addigy.com/): Current IT monitoring systems designed for Mac are few and far in between, many of the systems available lack features or use a server implementation which requires additional cost and complexity to manage. Addigy has developed a Web Dashboard with many features that can display audit data to an IT Admin using polling. In essence, Addigy strives to simplify and streamline the IT management of Macs.~~ nibbl (https://nibbl.com/): nibbl is a social website that will allow people to set up dinner events with friends in the best restaurants of the area. The current system has a lot of features implemented but still is not ready to launch. Requires improvement in the look and feel and responsiveness of the pages, so they can render in all screen sizes. The system also requires addition of features that will help improve usability and navigation within the web application. Bug fixes are also necessary on the current system to deliver expected performance.~~ We aim to promote more innovative ideas in the near future that have the potential to become successful startup companies in South Florida.", disciplineId:4},
            
            {id: 5, name:"vLabs", image:"img/Sample_IMG.jpg", description:"Virtual Labs offers students of the IT Automation class at FIU (~200 students each year) a virtual environment where they can practice their newly learned skills. It hosts several modules such as the Quota System, Quota Store, Scheduler and others. The Quota System allows the quota creation and management allowing the admin to prevent overuse of the system by students. The Quota Store allows the students to request for more quotas and the admin to review and accept/deny their requests. The Scheduler allows scheduling of virtual labs and certificate tests when students still have valid quotas and allows the admin to monitor and manage all the ongoing, past, and future schedules for using virtual labs and certificate tests.~~ Virtual labs were originally implemented as modules in Moodle (a popular LMS in academia) and as Web services in Java. Later it was partially ported to eFront (a popular LMS in industry). It uses VMware 1.0 Server as the virtualization technology, which is an old technology that was never meant for production use. It uses webRDP that is a Java applet making the Windows virtual machines within the virtual environments available via Web browsers. With the NPAPI plugins been phased out of all mainstream web browsers, Virtual Labs was rendered unusable without browser hacks. Finally, the data has been stored in a combination of MySql and Postgres database instances with no normalization and proper referential constraints.~~ In this project, we aim to bring Virtual Labs up to speed with the state of the art technologies and address its shortcomings, while adding more features.", disciplineId:5},
            
            {id: 6, name:"BOLO", image:"img/Sample_IMG.jpg", description:"Be On the Look Outs (BOLOs) are fliers that share information with the law enforcement officers in the same, or different, departments. These fliers contain information on persons of interests related to ongoing investigations.~~ The issue with the current system stems from its response time. Officers responding to a scene do not currently have the capability to generate a BOLO on-site. And must wait until they are back in their office or several days thereafter. Once they generate a BOLO, they have to submit it for approval to their supervisor. After approval, the document is sent via mass email to multiple officers. This creates a system that is unsearchable and decentralized, which makes retrieving previously created BOLOs a hassle, if not entirely unfeasible and may lead to older BOLOs being lost or ignored.~~ A BOLO is currently distributed via several systems:~·      Electronically via emails containing PDFs. The PDFs are simply copies of BOLOs created via Microsoft Word and may contain pictures or other information. This is currently the most popular system and the one or software aims to replace.~·      Police Radio messages may also be sent when an incident has occurred. These also contain information on persons of interests and may be considered a BOLO.~·      Test Messages may be sent to all officers currently on duty thanks through Computer Aided Dispatch (CAD).~~ BOLO Flyer Creator was designed as a lightweight system that can run on many computers, regardless of whether they are large multimillion-dollar machines, or simple, cost-effective systems.~~ Furthermore, the system was also designed to reduce the time  it took from when a crime is reported, to when a BOLO is distributed. This needed to be done in a way that would allow first responders to easily create the BOLOs while allowing input from witness and verification of final documentation (the actual BOLO produced) to reduce the frequency of errors as well as increasing production speed.~~ Our software would also need to post BOLOs, in real-time, to a central site and allow officers to search for specific BOLOs, as well as allowing Supervisors the ability to remove inappropriate BOLOs and better manage BOLOs created by their departments.", disciplineId:5},
            
            {id: 7, name:"VIP Tools", image:"img/Sample_IMG.jpg", description:"After some careful study and deliberation of pros and cons of some state of the art existing tools, for managing the development of each VIP project itself, we have adopted Mingle from ThoughWorks as our scrum/agile project management tool and GitHub as our version control tool. However, as the above tools are far from complete with respect to all the aspects of tools required for managing VIP Sites, we are developing a number of VIP Tools including VIP Site Management (VSM), Collaborative Platform (CP), Mobile Judge (MJ), and Virtual Job Fair (VJF). A short description of each follows.~~ For managing VIP Sites, we are currently developing the VIP Site Management (VSM) that helps students with their applications to join our existing VIP teams and our instructors with their proposals for new VIP projects. This tool can also help the VIP program coordinator to review the applications and project proposals, notify the applicants and proposers with the outcome of the review process, and facilitate the project assignments based on the interest of the students, their skillset and qualification to work in different teams, and the history of their involvements with the other VIP projects, if any.~~ Collaborative Platform (CP) addresses the lack of a reliable source for answering students’ questions related to their VIP projects. At times students rely on Internet sources that are often unreliable, inaccurate and incomplete with respect to VIP needs. In an effort to solve this issue, we decided to develop the Collaborative Platform in order to connect students (mentees) with the right experts (mentors). To improve the interaction between mentors and mentees, a system to keep track of unavailable mentors, as well as a system that will automatically assign a ticket to a new mentor when the need arises will be implemented. The system also allow for on-demand chat, audio, and videoconference among two or more individuals with access to share white board and other communication facilities.~~ Mobile Judge (MJ) is a system that eases the grading process of VIP projects at VIP Showcases. Professionals and instructors in the field who are able to weigh in and give feedback on students’ work and accomplishments attend these events. MJ is an effort aims to provide a centralized platform that allows the VIP administrator to invite Judges to the event and expedite the process of grading students. Students, too, would be able to receive real-time updates of Judge grades and get feedback on their demo and presentation. MJ aims to make the grading process much simpler and streamlined so that the judges can focus on the projects themselves and less so on the manner of grading.~~ Virtual Job Fair is a collaborative project between the School of Computing & Information Sciences and the Career Services at FIU. This collaborative effort is going to develop a VIP tool that helps our VIP participants to find internship opportunities while participating in our VIP projects and land on best job positions possible when they graduate from our program and are ready to start their careers.~~ We intend to continue the development of our VIP tools and share them with the rest of our partners in the VIP consortium. Some of the tools are ready to be used and some are still under development. We intend to improve the tools continuously based on the feedback that we will receive from the VIP consortium and the open source community.", disciplineId:5},
        ];
        
        vm.disciplines = [
            {'id':1, 'name':"Robotics"},
            {'id':2, 'name':"Augmented Reality"},
            {'id':3, 'name':"Virutal Reality"},
            {'id':4, 'name':"Aerospace"},
            {'id':5, 'name':"Big Data"},
        ];
        
        init();
        function init(){
            loadData();
            vm.disciplinesBackUp = vm.disciplines;
            vm.projectsBackUp = vm.projects;
            console.log("Controller started");
        }
        
        function loadData(){
            ProjectService.getProjects().then(function(data){
                vm.projects = data;
            });
        }
        
        function filterByDiscipline (discipline) {
            if(discipline != null){
                //vm.disciplines = [];
                vm.projects = [];
                angular.forEach(vm.projectsBackUp, function(item){
                    if(item.disciplineId === discipline.id)
                    {
                        vm.projects.push(item); 
                        //vm.disciplines.push(discipline);
                    }
                })
            }
            else {
                //vm.disciplines = vm.disciplinesBackUp;
                vm.projects = vm.projectsBackUp;
            }
        } 
        
        function viewDetails (data) {
            $state.go('projectsDetailed',{id: data.id});
        }
    }
})();