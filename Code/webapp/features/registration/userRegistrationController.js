/**
 * Created by tmoore on 4/4/16.
 */
angular
    .module('userRegistrationController', ['userService'])
    .controller('registrationController', function (User) {
        var vm = this;

        vm.Users = [
            {
                name: 'Faculty',
                ranks: [
                    'Instructor',
                    'Assitant Professor',
                    'Associate Professor',
                    'Full Professor'
                ]
            },
            {
                name: 'Staff',
                ranks: [
                    'Administrator',
                    'Director'

                ]
            },
            {
                name: 'Pi/CoPi',
                ranks: [
                    'PI',
                    'CoPI',
                    'Coordinator',
                    'External Member'
                ]
            },

        ];

        vm.Colleges = [
            {
                name: 'Architecture + The Arts ',
                schools: [
                    'Architecture',
                    'Interior Architecture',
                    'Landscape Architecture and Environmental Urban Design',
                    'Art and Art History',
                    'Communication Arts',
                    'School of Music',
                    'Theatre']
            },
            {
                name: 'Arts and Sciences & Education',
                schools: [
                    'Biological Sciences',
                    'Chemistry and Biochemistry',
                    'Earth and Environment',
                    'English',
                    'Mathematics and Statistics',
                    'Philosophy',
                    'Physics',
                    'Psychology',
                    'Teaching and Learning',
                    'Leadership and Professional Studies',
                    'School of Education',
                    'School of Enviroment, Arts & Society',
                    'School of Integrated Science & Humanity'

                ]
            },
            {
                name: 'Business',
                schools: [
                    'Decision Sciences and Information Systems',
                    'Alvah H. Chapman Jr. Graduate School of Business',
                    'R. Kirk Landon Undergraduate School of Business',
                    'Finance',
                    'Management and International Business',
                    'Marketing',
                    'School of Accounting',
                    'Real Estate'
                ]
            },
            {
                name: 'Chaplin School of Hospitality and Tourism Management',
                schools: [
                    'Hospitality and Tourism Management'
                ]
            },
            {
                name: 'Engineering & Computing',
                schools: [
                    'School of Computing and Information Sciences',
                    'OHL School of Construction',
                    'Department of Biomedical Engineering',
                    'Department of Civil and Environment Engineering',
                    'Department of Electrical and Computer Engineering',
                    'Department of Mechanical and Materials Engineering'
                ]
            },
            {
                name: 'Herbert Wertheim College of Medicine',
                schools: [
                    'Cellular Biology and Pharmacology',
                    'Human and Molecular Genetics',
                    'Immunology',
                    'Medical and Population Health Sciences Research'
                ]
            },
            {
                name: 'Journalism and Mass Communication',
                schools: [
                    'Advertising and Public Relations',
                    'Journalism Broadcasting and Digital Media'
                ]
            },
            {
                name: 'Law',
                schools: [
                    'College of Law'
                ]
            },
            {
                name: 'Nicole Wertheim College of Nursing & Health Sciences',
                schools: [
                    'Biostatistics',
                    'Dietetics and Nutrition',
                    'Environmental and Occupational Health',
                    'Epidemiology',
                    'Health Policy and Management',
                    'Health Promotion and Disease Prevention'
                ]

            },
            {
                name: 'Robert Stempel College of Public Health & Social Work',
                schools: [
                    'School of Social Work'
                ]
            },
            {
                name: 'Steven J. Green School of International and Public Affairs',
                schools: [
                    'Criminal Justice',
                    'Economics',
                    'Global and Sociocultural Studies',
                    'History',
                    'Modern Languages',
                    'Public Administration',
                    'Religious Studies'
                ]
            }
        ];
        vm.userType = vm.Users[1];
        vm.college = vm.Colleges[1];


        vm.saveUser = function () {

            vm.processing = true;

            // initialize both message to be returned by API and object ID to be used in verification
            vm.message = '';
            vm.objectId = '';

            //convert the input to lower case
            var inputEmail = vm.userData.email;
            vm.userData.email = inputEmail.toLowerCase();

            // validate password
            if(!pass_validation(vm.userData.password, vm.userData.passwordConf))
            {
                return;
            }


            // validate form fields
            if (!validRegistration(vm.userData)) {
                return; // if validation fails, abort
            }






        };


    });

// validate all fields

function email_validation(uemail, userType) {
    // check for null
    if (uemail == undefined) {
        alert("Email should not be empty.")
        return false;
    }
    // check for length 0
    var uemail_len = uemail.length;
    if (uemail_len == 0) {
        alert("Email should not be empty.");
        return false;
    }
    var uemail_source = uemail.substring(uemail_len - 8, uemail_len);
    // if its not a co/copi and it snot an fiu email.. alert !
    if (uemail_source.toLowerCase() != "@fiu.edu" && userType != "Pi/CoPi") {
        alert("Email should be an @fiu.edu account")
        return false;
    }
}

//Makes sure first name is only letters
function first_validation(first) {
    if (first == undefined) {
        alert("First name should not be empty.")
        return false;
    }
    var first_len = first.length;
    if (first_len == 0) {
        alert("Last Name should not be empty.");
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if (first.match(letters)) {
        return true;
    } else {
        alert('First name must contain alphabet characters only.')
        return false;
    }
}

//Makes sure last name is only letters
function last_validation(last) {
    if (last == undefined) {
        alert("Last name should not be empty.")
        return false;
    }
    var last_len = last.length;
    if (last_len == 0) {
        alert("Last Name should not be empty.");
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if (last.match(letters)) {
        return true;
    } else {
        alert('Last name must contain alphabet characters only.');
        return false;
    }
    return true;
}

//Makes sure panther ID is only numbers and of correct length
//NEED TO FIX PID BEING ENTERED AS A LETTER
function pid_validation(pid) {

    if (pid == undefined) {
        alert("Panther ID should not be empty.")
        return false;
    }
    var numbers = /[0-9]/;
    if (pid.match(numbers)) {
    } else {
        alert('PID must have numeric characters only');
        return false;
    }
    var pid_len = pid.length;
    if (pid_len != 7) {
        alert("Please enter your 7 digit Panther-ID.");
        return false;
    }
    return true;
}

//Confirms that both passwords entered are correct.
function pass_validation(pass, passconf) {
    console.log(pass);
    console.log(passconf);

    if (pass == undefined || passconf == undefined) {
        alert("Please fill in both password fields.")
        return false;
    }
    var pass_len = pass.length;
    if (pass_len == 0) {
        alert("Please fill in the Password field.");
        return false;
    }
    if (pass != passconf) {
        alert("Your two passwords do not match.")
        return false;
    }

    return true;
}


//Runs a check if the registration form filled out was filled out correctly.
// need to include strong passord verification
function validRegistration(userData) {
    var first = userData.firstName;
    var last = userData.lastName;
    var userType = userData.userType.name;
    var pid = userData.pantherID;
    var email = userData.email;

    if (first_validation(first) && last_validation(last)  && pid_validation(pid) && email_validation(email,userType))

                        {
                            return true;
                        }

    return false;
}







