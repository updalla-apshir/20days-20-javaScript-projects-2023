
var form = document.getElementById("studentForm");
// var dropdown = document.getElementById("managementDropdown");
var content = document.querySelector('.content')
var subject = document.getElementById("subjectClassCard");
var courseCard = document.getElementById("courseCard");
var attendence = document.querySelector('.attendence')
var feedback = document.querySelector('.feedback')
var RsultManagement = document.querySelector('.RsultManagement')
var studentLeave = document.querySelector('.studentLeave')
var feeManagement = document.querySelector('.feeManagement')
var resultView = document.querySelector('.resultView')
var sendMassege = document.querySelector('.sendMassege')


function showedStudentForm() {


    feeManagement.style.display = "none";
    resultView.style.display = "none";
    sendMassege.style.display = "none";


    studentLeave.style.display = "none";


    feedback.style.display = "none";
    RsultManagement.style.display = "none";

    subject.style.display = "none";
    attendence.style.display = "none";
    courseCard.style.display = "none";




    form.style.display = "block";
    // dropdown.style.display = "none";
    content.style.display = "none";

}
function showedsubjectForm() {


    feeManagement.style.display = "none";
    resultView.style.display = "none";

    studentLeave.style.display = "none";
    sendMassege.style.display = "none";


    feedback.style.display = "none";
    RsultManagement.style.display = "none";




    subject.style.display = "block";
    content.style.display = "none";
    form.style.display = "none";
    courseCard.style.display = "none";
    attendence.style.display = "none";
    sendMassege.style.display = "none";


}
function showcourseCard() {

    feeManagement.style.display = "none";
    resultView.style.display = "none";

    studentLeave.style.display = "none";


    feedback.style.display = "none";
    RsultManagement.style.display = "none";
    sendMassege.style.display = "none";




    subject.style.display = "none";
    content.style.display = "none";
    form.style.display = "none";
    attendence.style.display = "none";
    courseCard.style.display = "block";


}
function attendeceForm() {

    feeManagement.style.display = "none";
    resultView.style.display = "none";

    studentLeave.style.display = "none";


    feedback.style.display = "none";
    RsultManagement.style.display = "none";
    sendMassege.style.display = "none";



    subject.style.display = "none";
    content.style.display = "none";
    form.style.display = "none";
    attendence.style.display = "block";
    courseCard.style.display = "none";

}
function showResult() {

    feeManagement.style.display = "none";
    resultView.style.display = "none";

    studentLeave.style.display = "none";



    feedback.style.display = "none";




    subject.style.display = "none";
    content.style.display = "none";
    form.style.display = "none";
    attendence.style.display = "none";
    courseCard.style.display = "none";
    RsultManagement.style.display = "block";
    sendMassege.style.display = "none";

}
function showFeedback() {


    feeManagement.style.display = "none";
    resultView.style.display = "none";
    studentLeave.style.display = "none";
    sendMassege.style.display = "none";





    subject.style.display = "none";
    content.style.display = "none";
    form.style.display = "none";
    attendence.style.display = "none";
    courseCard.style.display = "none";
    RsultManagement.style.display = "none";
    feedback.style.display = "block";

}
function showedLeaved() {

    feeManagement.style.display = "none";
    resultView.style.display = "none";
    studentLeave.style.display = "block";




    subject.style.display = "none";
    content.style.display = "none";
    form.style.display = "none";
    attendence.style.display = "none";
    courseCard.style.display = "none";
    RsultManagement.style.display = "none";
    feedback.style.display = "none";
    sendMassege.style.display = "none";

}
function viewResult() {

    feeManagement.style.display = "none";
    resultView.style.display = "block";
    studentLeave.style.display = "none";




    subject.style.display = "none";
    content.style.display = "none";
    form.style.display = "none";
    attendence.style.display = "none";
    courseCard.style.display = "none";
    RsultManagement.style.display = "none";
    feedback.style.display = "none";
    sendMassege.style.display = "none";

}
function feeForm() {

    feeManagement.style.display = "block";
    resultView.style.display = "none";
    studentLeave.style.display = "none";
    studentLeave.style.display = "none";





    subject.style.display = "none";
    content.style.display = "none";
    form.style.display = "none";
    attendence.style.display = "none";
    courseCard.style.display = "none";
    RsultManagement.style.display = "none";
    feedback.style.display = "none";
    sendMassege.style.display = "none";

}
function sendMessage() {

    feeManagement.style.display = "none";
    resultView.style.display = "none";
    studentLeave.style.display = "none";
    studentLeave.style.display = "none";
    sendMassege.style.display = "block";





    subject.style.display = "none";
    content.style.display = "none";
    form.style.display = "none";
    attendence.style.display = "none";
    courseCard.style.display = "none";
    RsultManagement.style.display = "none";
    feedback.style.display = "none";

}


const btnCourse = document.querySelector("#btnCourse"),
    courseName = document.querySelector("#courseName"),
    subjectCourses = document.querySelector("#subjectCourses"),
    sessionYear = document.querySelector('#session'),
    term = document.querySelector('#term');
Coursetbody = document.querySelector('#Coursetbody')
let courseSubjects = JSON.parse(localStorage.getItem('coueses-subjects') || "[]")
displaCorses(courseSubjects)

btnCourse.addEventListener("click", (e) => {
    e.preventDefault();
    if (courseName.value == '' && subjectCourses.value == '' && sessionYear.value == '' && term.value == '') {
        alert('fill the fields');

    }
    else {
        add({ courseName: courseName.value, subjectCourses: subjectCourses.value, sessionYear: sessionYear.value, term: term.value })
    }
})

function add(object) {
    courseSubjects.push(object);
    localStorage.setItem('coueses-subjects', JSON.stringify(courseSubjects))
    alert('successfully added')
    courseName.value = ''
    subjectCourses.value = ''
    sessionYear.value = ''
    term.value = ''
    displaCorses(courseSubjects)


}


function displaCorses(array) {
    let output = '';
    if (array.length) {
        array.forEach((course, index) => {
            output += `<tr> 
                        <td>${course.courseName}</td>
                        <td>${course.subjectCourses} subjects</td>
                        <td>${course.sessionYear}</td>
                        <td>${course.term}</td>
                        <td>
                        <button class="firstAction"> update </button>
                        <button class="secondAction">  Delete </button>
                    </tr>`
        })
    }
    Coursetbody.innerHTML = output;
}


const option = document.querySelector('#studentCourse');
const coursesSubjects = localStorage.getItem('coueses-subjects') || '[]';
const courseInfo = JSON.parse(coursesSubjects);

let options = '<option value="" selected disabled>Select course</option>';

courseInfo.forEach((course) => {
    options += `<option value="${course.courseName}">${course.courseName}</option>`;
});

option.innerHTML = options;

const studentClassOption = document.querySelector('#studentClass');
const classInfoLocal = localStorage.getItem('classSubjectinfo') || "[]";
const classInfo = JSON.parse(classInfoLocal);

let optionsClass = '<option value="" selected disabled>Select class</option>';

classInfo.forEach((classSubject) => {
    optionsClass += `<option value="${classSubject.classSubject}">${classSubject.classSubject}</option>`;
});

studentClassOption.innerHTML = optionsClass;

const optionAttendence = document.querySelector('#attenceOption');

const AttendenceCourse = localStorage.getItem('coueses-subjects');

const AttendenceCourseInfo = JSON.parse(coursesSubjects);

let attendenceOption = '<option value="" selected disabled>Select course</option>';

courseInfo.forEach((course) => {
    attendenceOption += `<option value="${course.courseName}">${course.courseName}</option>`;
});
optionAttendence.innerHTML = attendenceOption;
document.querySelector("#studentForm form").addEventListener("submit", function (event) {
    event.preventDefault();

})


const AttendenceClassOption = document.querySelector('#attenceClass');
const classInfoLocalAttendence = localStorage.getItem('classSubjectinfo');
const classInfoclassInfoAttendence = JSON.parse(classInfoLocalAttendence);

let optionsClassAttendence = '<option value="" selected disabled>Select class</option>';

classInfo.forEach((classSubject) => {
    optionsClassAttendence += `<option value="${classSubject.classSubject}">${classSubject.classSubject}</option>`;
});

AttendenceClassOption.innerHTML = optionsClassAttendence


let fullname = document.querySelector('#fullname'),
    phoneNo = document.querySelector("#phone"),
    password = document.querySelector("#password"),
    confirmPass = document.querySelector("#confirm"),
    course = document.querySelector("#studentCourse"),
    studentClass = document.querySelector("#studentClass"),
    dateRegister = document.querySelector("#dor"),
    image = document.querySelector("#file"),
    btnStudent = document.querySelector('#btnStudent'),
    studentTbody = document.querySelector('#studentTbody');

let studentsForm = JSON.parse(localStorage.getItem('studentsForm')) || [];

displayStudents(studentsForm);

btnStudent.addEventListener('click', (e) => {
    e.preventDefault();

    if (fullname.value == '' && phoneNo.value == '' && password.value == '' && confirmPass.value == '' && course.value == '' && studentClass.value == '' && dateRegister.value == '' && image.files.length == 0) {
        alert("Please fill in all fields.");
    } else {
        const reader = new FileReader();
        reader.onload = function (e) {
            addStudent({
                fullname: fullname.value,
                phoneNo: phoneNo.value,
                password: password.value,
                confirmPass: confirmPass.value,
                course: course.value,
                studentClass: studentClass.value,
                dateRegister: dateRegister.value,
                image: e.target.result
            });
        };
        reader.readAsDataURL(image.files[0]);
    }
});

function addStudent(obj) {
    obj.registrationNumber = generateRegistrationNumber();
    studentsForm.push(obj);
    localStorage.setItem('studentsForm', JSON.stringify(studentsForm));
    alert('Successfully Added');
    fullname.value = ''
    phoneNo.value = ''
    password.value = ''
    confirmPass.value = ''
    course.value = ''
    studentClass.value = ''
    dateRegister.value = ''
    displayStudents(studentsForm);
}

var registrationNumber = generateRegistrationNumber();

function generateRegistrationNumber() {
    var randomNumber = Math.floor(100000 + Math.random() * 900000);
    return randomNumber.toString();
}

function displayStudents(data) {
    let output = '',
        id = 0;
    if (data.length) {
        data.forEach((student, index) => {
            output += `
        <tr>
            <td><img src="${student.image}" alt="Student Image"></td>
            <td>${++id}</td>
            <td>${student.fullname}</td>
            <td>${student.phoneNo}</td>
            <td>*******</td>
            <td>${student.dateRegister}</td>
            <td>${student.course}</td>
            <td>${student.studentClass}</td>
            <td>${student.registrationNumber}</td>
            <td><button class="firstAction"> update </button>
            <button class="secondAction"onclick="removestd(${index})">  Delete </button> </td>
        </tr>`;
        })
    }

    studentTbody.innerHTML = output;
}
function removestd(index) {
    if (confirm('are you sure to delete')) {
        studentsForm.splice(index, 1)
        localStorage.setItem('studentsForm', JSON.stringify(studentsForm))
        displayStudents(studentsForm)

    }
}



let classSubject = document.querySelector('#classSubject'),
    subjectName = document.querySelector("#subjectName"),
    teacher = document.querySelector("#teacherName"),
    daysOftheWeek = document.querySelector("#daysOftheWeek"),
    startTime = document.querySelector("#startTime"),
    endTime = document.querySelector("#endTime"),
    subjectClassbtn = document.querySelector('#subjectClassbtn'),
    subjectClassTbody = document.querySelector('#subjectClassTbody');

let classSubjectinfo = JSON.parse(localStorage.getItem('classSubjectinfo')) || [];

displaySubjectClass(classSubjectinfo);

subjectClassbtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (classSubject.value == '' && subjectName.value == '' && teacher.value == '' && daysOftheWeek.value == '' && startTime.value == '' && endTime.value == '') {
        alert("Please fill in all fields.");
    } else {

        addsubjectClass({
            classSubject: classSubject.value,
            subjectName: subjectName.value,
            teacher: teacher.value,
            daysOftheWeek: daysOftheWeek.value,
            startTime: startTime.value,
            endTime: endTime.value,

        });
    };
})


function addsubjectClass(obj) {
    classSubjectinfo.push(obj);
    localStorage.setItem('classSubjectinfo', JSON.stringify(classSubjectinfo));
    alert('Successfully Added');
    classSubject.value = ''
    subjectName.value = ''
    teacher.value = ''
    daysOftheWeek.value = ''
    startTime.value = ''
    endTime.value = ''
    displaySubjectClass(classSubjectinfo);
}


function displaySubjectClass(data) {
    let output = '',
        id = 0;
    if (data.length) {
        data.forEach((names, index) => {
            output += `
        <tr>
            <td>${++id}</td>
            <td>${names.classSubject}</td>
            <td>${names.subjectName}</td>
            <td>${names.teacher}</td>
            <td>${names.daysOftheWeek}</td>
            <td>${names.startTime}</td>
            <td>${names.endTime}</td>
            <td><button class="firstAction"> update </button>
            <button class="secondAction">  Delete </button> </td>
        </tr>`;
        })
    }

    subjectClassTbody.innerHTML = output;
}


const AttendenceClassOptionNames = document.querySelector('#attenceClass');
const studentList = document.querySelector('#studentlistattendence');


let studentsFormOption = JSON.parse(localStorage.getItem('studentsForm')) || "[]";


let filteredStudents = [];

AttendenceClassOptionNames.addEventListener('change', (e) => {
    const selectedClass = e.target.value;
    filteredStudents = studentsFormOption.filter(student => student.studentClass === selectedClass);
    displayStudentNames(filteredStudents);
});

function displayStudentNames(students) {
    let output = '';
    students.forEach((student, index) => {
        student.status = student.status || 'absent'
        output += `<tr>
            <td><input type="checkbox" onchange="updateStatus(${index}, this)" ${student.status === 'present' ? 'checked' : ''}></td>
            <td>${student.fullname}</td>
            <td>${student.studentClass}</td>
            <td>${student.status}</td>
        </tr>`;
    });
    studentList.innerHTML = output;
}


function updateStatus(index, checkbox) {
    filteredStudents[index].status = checkbox.checked ? 'present' : 'absent';
    localStorage.setItem('AttendenceInfo', JSON.stringify(AttendenceInfo))
    displayStudentNames(filteredStudents);
}

let attndenceDate = document.querySelector('#attendenceDate'),
    attenceOption = document.querySelector('#attenceOption'),
    attenceClass = document.querySelector('#attenceClass'),
    AttendenceSession = document.querySelector('#AttendenceSession'),
    btnAttendence = document.querySelector('#btnAttendence');


let AttendenceInfo = JSON.parse(localStorage.getItem('AttendenceInfo') || "[]");

btnAttendence.addEventListener('click', () => {

    if (attndenceDate.value == '' && attenceOption.value == '' && attenceClass.value == '' && AttendenceSession.value == '') {
        alert('fill the fileds')
    }
    else {
        addAtendenceInfo({ attndenceDate: attndenceDate.value, attenceOption: attenceOption.value, attenceClass: attenceClass.value, AttendenceSession: AttendenceSession.value })
    }

    function addAtendenceInfo(obj) {
        AttendenceInfo.push(obj);
        localStorage.setItem('AttendenceInfo', JSON.stringify(AttendenceInfo));
        alert('successFully Saved')
        attndenceDate.value = ''
        attenceOption.value = ''
        attenceClass.value = ''
        AttendenceSession.value = ''
        const selectedClass = attenceClass.value;
        filteredStudents = studentsFormOption.filter(student => student.studentClass == selectedClass)
        displayStudentNames(filteredStudents);
    }


})
const checkingregistration = document.querySelector('#regCheck'),
    btnSearch = document.querySelector('#btnSearch'),
    ViewWedResult = document.querySelector('.card-bodyOpen'),
    regView = document.querySelector('#regView'),
    cardImage = document.querySelector('.card-image'),
    Stdname = document.querySelector('.name'),
    stdclass = document.querySelector('.stdclass');


btnSearch.addEventListener('click', (e) => {
    e.preventDefault();

    if (checkingregistration.value === '') {
        alert('Please fill in the registration number field.');
        return;
    }

    const registrationNumber = checkingregistration.value;
    const studentsFromLocal = JSON.parse(localStorage.getItem("studentsForm")) || [];

    const reg = studentsFromLocal.find(student => student.registrationNumber === registrationNumber);
    console.log(reg);

    if (reg) {
        ViewWedResult.style.display = 'block';
        regView.style.display = 'none';
        btnSearch.style.display = 'none';
        cardImage.innerHTML = `<img src="${reg.image}" alt="Student Image">`;
        Stdname.textContent = `${reg.fullname}`;
        stdclass.textContent = `Class: ${reg.studentClass}`;

    } else {
        alert('Student not found.');
        checkingregistration.value = ''
    }
});



const resultSubject = document.querySelector('#resultSubject');
const resultCourseStorage = localStorage.getItem('classSubjectinfo') || "[]";
const courseResulInfo = JSON.parse(resultCourseStorage);

let RelutCourseoptions = '<option value="" selected disabled>Select Subject</option>';

courseResulInfo.forEach((subjectName) => {
    RelutCourseoptions += `<option value="${subjectName.subjectName}">${subjectName.subjectName}</option>`;
});

resultSubject.innerHTML = RelutCourseoptions;

const resultClassOptions = document.querySelector('#resultClass');
const resultClassStorage = localStorage.getItem('classSubjectinfo');
const ResultclassInfo = JSON.parse(classInfoLocal);

let resultClass = '<option value="" selected disabled>Select class</option>';

ResultclassInfo.forEach((classSubject) => {
    resultClass += `<option value="${classSubject.classSubject}">${classSubject.classSubject}</option>`;
});

resultClassOptions.innerHTML = resultClass;


const resultRegiterNo = document.querySelector('#resultRegiterNo'),
    ResultTermOption = document.querySelector('#ResultTermoption'),
    assigmentResult = document.querySelector('#assigmentResult'),
    examResult = document.querySelector('#examResult'),
    resultSubjectForm = document.querySelector('#resultSubject'),
    resultBtn = document.querySelector('#resultBtn');

let resultInfo = JSON.parse(localStorage.getItem('resultInfo') || "[]")
display(resultInfo)

resultBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (resultRegiterNo.value == '' && resultClassOptions.value == '' && resultSubjectForm.value == '' && ResultTermOption.value == '' && assigmentResult.value == '' && examResult.value == '') {
        alert('Please fill the fields.');
    }
    else {
        const ResultregistrationNumber = resultRegiterNo.value;
        const studentsFromLocal = JSON.parse(localStorage.getItem("studentsForm")) || [];

        const reg = studentsFromLocal.find(student => student.registrationNumber === ResultregistrationNumber);
        console.log(reg);

        if (reg) {
            addResults({ resultRegiterNo: resultRegiterNo.value, resultClassOptions: resultClassOptions.value, resultSubjectForm: resultSubjectForm.value, ResultTermOption: ResultTermOption.value, assigmentResult: assigmentResult.value, examResult: examResult.value })


        } else {
            alert('Student not found.');
        }
    }


});

function addResults(obj) {
    resultInfo.push(obj)
    localStorage.setItem('resultInfo', JSON.stringify(resultInfo));
    alert('successFully Resgisterd')
    resultRegiterNo.value = ''
    resultClassOptions.value = ''
    resultSubjectForm.value = ''
    ResultTermOption.value = ''
    assigmentResult.value = ''
    examResult.value = ''
}



function display(data) {
    const resultViewTbody = document.querySelector('#resultViewTbody');

    let output = '';
    if (data.length) {
        data.forEach((result) => {
            const totalMarks = parseFloat(result.assigmentResult) + parseFloat(result.examResult);
            let Remarks;
            if (totalMarks > 59) {
                Remarks = 'Passed'
            }
            else {
                Remarks = 'failed'
            }
            output += `
            <tr>
            <td>${result.resultSubjectForm}</td>
            <td>${result.assigmentResult}</td>
            <td>${result.examResult}</td>
            <td>${totalMarks}</td>
            <td>${Remarks}</td>
        </tr>
            `
        })
    }
    resultViewTbody.innerHTML = output
}


const feeTErm = document.querySelector('#feeOption'),
    amountPaid = document.querySelector('#amountPaid'),
    feeTbody = document.querySelector('#feeetbody'),
    bankNO = document.querySelector('#bankNO'),
    feeBtn = document.querySelector('#feeBtn');

let feeInfo = JSON.parse(localStorage.getItem('feeInfo') || "[]")
displayFees(feeInfo)



const FeeStdClass = document.querySelector('#FeeStdClass');
const FeeStdClassForLocal = localStorage.getItem('classSubjectinfo') || "[]";
const feeclassInfo = JSON.parse(FeeStdClassForLocal);

let feeClass = '<option value="" selected disabled>Select class</option>';

feeclassInfo.forEach((classSubject) => {
    feeClass += `<option value="${classSubject.classSubject}">${classSubject.classSubject}</option>`;
});

FeeStdClass.innerHTML = feeClass;

feeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (feeTErm.value == '' && amountPaid.value == '' && bankNO.value == '') {
        alert('Please fill the fields.');
    } else {
        let FeeRegNO = document.querySelector('#feeRegNO').value;
        const studentsFeeLocal = JSON.parse(localStorage.getItem("studentsForm")) || [];
        const feelocalStore = studentsFeeLocal.find(student => student.registrationNumber == FeeRegNO);

        if (feelocalStore) {
            addFee({
                feeTErm: feeTErm.value, amountPaid: amountPaid.value, bankNO: bankNO.value, feesFullname: feelocalStore.fullname
            });
        } else {
            alert("This Registration NO not Found");
        }
    }
});

function addFee(obj) {
    feeInfo.push(obj);
    localStorage.setItem('feeInfo', JSON.stringify(feeInfo));
    alert('Successfully Added');
    displayFees(feeInfo);
}

function displayFees(data) {
    let output = '';
    if (data.length) {
        data.forEach((fees) => {
            output += `
            <tr>
                <td>${fees.feesFullname}</td>
                <td>${fees.feeTErm}</td>
                <td>${fees.amountPaid}</td>
                <td>${fees.bankNO}</td>
            </tr>`;
        });
    } else {
        output = `
        <tr>
            <td colspan="4">No fees data available</td>
        </tr>`;
    }
    feeTbody.innerHTML = output;
}

const FeedbackMessege = document.querySelector('#FeedbackMessege'),
    feedbackTbody = document.querySelector('#feedbackTbody'),
    btnFeedback = document.querySelector('#btnFeedback');

let feedbackInfo = JSON.parse(localStorage.getItem('feedbackInfo') || "[]"), toUpdateId;
displayFeedback(feedbackInfo)

btnFeedback.addEventListener('click', (e) => {
    e.preventDefault();
    if (FeedbackMessege.value == '') {
        alert('fill the filed')
    }
    else {
        if (btnFeedback.innerHTML == 'Send')
            addFeedback({ FeedbackMessege: FeedbackMessege.value })
        else {
            updateFeedback({ FeedbackMessege: FeedbackMessege.value })

        }
    }
})
function addFeedback(obj) {
    feedbackInfo.push(obj);
    localStorage.setItem('feedbackInfo', JSON.stringify(feedbackInfo))
    alert('successFully Added')
    FeedbackMessege.value = ''
    displayFeedback(feedbackInfo)
}

function displayFeedback(array) {
    let output = '', id = 0;
    if (array.length) {
        array.forEach((feedback, index) => {
            output += `
            <tr>
            <td>${++id}</td>
            <td>${feedback.FeedbackMessege}</td>
            <td><button class="firstAction" onclick='prepareUpdate(${index})'> update </button>
            <button class="secondAction" onclick='removeFeedback(${index})'>  Delete </button> </td>
            </tr>
            `
        })
    }
    feedbackTbody.innerHTML = output
}

function removeFeedback(index) {
    if (confirm('are you sure to delete')) {
        feedbackInfo.splice(index, 1)
        localStorage.setItem('feedbackInfo', JSON.stringify(feedbackInfo))
        displayFeedback(feedbackInfo)

    }
}


function updateFeedback(obj) {
    if (toUpdateId !== undefined) {
        feedbackInfo[toUpdateId] = obj
        localStorage.setItem('feedbackInfo', JSON.stringify(feedbackInfo))
        alert('successfully updated')
        displayFeedback(feedbackInfo)
    }
    else {
        alert('No Feedback Messege updated')
    }

}


function prepareUpdate(index) {
    FeedbackMessege.value = feedbackInfo[index].FeedbackMessege
    btnFeedback.innerHTML = 'Update'
    toUpdateId = index
}




const leaveDate = document.querySelector('#leaveDate'),
    leaveReason = document.querySelector('#leaveReason'),
    btnLeave = document.querySelector('#btnLeave'),
    leaveTbody = document.querySelector('#leaveTbody');

let leaveInfo = JSON.parse(localStorage.getItem('leaveInfo') || "[]"), toUpdateLeeveId;
displayLeave(leaveInfo)

btnLeave.addEventListener('click', (e) => {
    e.preventDefault();
    if (leaveDate.value == '' && leaveReason.value == '') {
        alert('fill the filed')
    }
    else {
        if (btnLeave.innerHTML == 'Send')
            addleave({ leaveDate: leaveDate.value , leaveReason: leaveReason.value})
        else {
            updateleave({leaveDate: leaveDate.value , leaveReason: leaveReason.value })

        }
    }
})
function addleave(obj) {
    leaveInfo.push(obj);
    localStorage.setItem('leaveInfo', JSON.stringify(leaveInfo))
    alert('successFully Added')
    leaveDate.value = ''
    leaveReason.value = ''
    displayLeave(leaveInfo)
}

function displayLeave(array) {
    let output = '', id = 0;
    if (array.length) {
        array.forEach((leave, index) => {
            output += `
            <tr>
            <td>${++id}</td>
            <td>${leave.leaveDate}</td>
            <td>${leave.leaveReason}</td>
            <td><button class="firstAction" onclick='pepareleavedUpdate(${index})'> update </button>
            <button class="secondAction" onclick='leaveremove(${index})'>  Delete </button> </td>
            </tr>
            `
        })
    }
    leaveTbody.innerHTML = output
}

function leaveremove(index) {
    if (confirm('are you sure to delete')) {
        leaveInfo.splice(index, 1)
        localStorage.setItem('leaveInfo', JSON.stringify(leaveInfo))
        displayLeave(leaveInfo)

    }
}


function updateleave(obj) {
    if (toUpdateLeeveId !== undefined) {
        leaveInfo[toUpdateLeeveId] = obj
        localStorage.setItem('leaveInfo', JSON.stringify(leaveInfo))
        alert('successfully updated')
        displayLeave(leaveInfo)
        leaveDate.value = ''
        leaveReason.value = ''
    }
    else {
        alert('No leave Reason updated')
    }

}


function pepareleavedUpdate(index) {
    leaveDate.value = leaveInfo[index].leaveDate
    leaveReason.value = leaveInfo[index].leaveReason
    btnLeave.innerHTML = 'Update'
    toUpdateLeeveId = index
}



const messegeClass = document.querySelector('#messageClass');
const messageClassLocal = localStorage.getItem('classSubjectinfo') || "[]";
const messegeclassInfo = JSON.parse(messageClassLocal);

let optionsClasslocal = '<option value="" selected disabled>Select class</option>';

messegeclassInfo.forEach((classSubject) => {
    optionsClasslocal += `<option value="${classSubject.classSubject}">${classSubject.classSubject}</option>`;
});

messegeClass.innerHTML = optionsClass






const messageInput = document.querySelector('#message');
const sendButton = document.querySelector('#sendButton');
const messageClass = document.querySelector('#messageClass');

let studentsFormOptionLOcal = JSON.parse(localStorage.getItem('studentsForm')) || [];
let filteredPhoneNumbers = [];

messageClass.addEventListener('change', (e) => {
    const selectedClass = e.target.value;
    filteredPhoneNumbers = studentsFormOptionLOcal.filter(student => student.studentClass === selectedClass)
                                                   .map(student => student.phoneNo);
    console.log(filteredPhoneNumbers); 
});

sendButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    
    const message = messageInput.value.trim();
    if (message == '') {
        alert('Message cannot be empty.');
        return;
    }

   
    if (filteredPhoneNumbers.length == 0) {
        alert('No phone numbers found the selected class.');
        messageClass.value = ''
        messageInput.value = ''
    }


    filteredPhoneNumbers.forEach(phoneNo => {
        sendWhatsapp(phoneNo, message);
    });
});
function sendWhatsapp(number, ms) {
    let urlApi =`http://api.textmebot.com/send.php?recipient=+252${number}&apikey=4SEnQ9wHVqTV&text=${ms}`;
    console.log('Sending message to:', number);
    console.log('Message:', ms);
    console.log('API URL:', urlApi);
    
    fetch(urlApi)
        .then((response) => {

            return response.json();

        })
        .then((data) => {
            console.log('Response:', data);

        })
        .catch((error) => {
            console.error('Error sending message:', error.message);
            console.error('Error details:', error);
        });

        messageClass.value = ''
        messageInput.value = ''

}