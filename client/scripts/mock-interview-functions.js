'use strict'
//saves interviews and disabled times, gets them from local storage, will have to change to JSON
const getSavedInterviews = ()=>{
    fetch('https://localhost:7186/api/mockInterviews').then((response) =>{
    console.log(response)    
    return response.json()
    }).then((data)=>{
    console.log(data)
    mockInterviews = data
    disabledTimes = getDisabledTimes()
    renderDropbox(disabledTimes)
    })
}

const getDisabledTimes =()=>{
    let isTimeDisabled = []
        mockInterviews.forEach((interview)=>{
            if(timeCheck(mockInterviews, interview.timeDropbox) >=3){
                if(!isTimeDisabled.includes(interview.timeDropbox))isTimeDisabled.push(interview.timeDropbox)
            } 
            
        })
    return isTimeDisabled
}

// takes in disabled times array and for each element in the disabled times array it will go through and disable that value on the dropbox
const renderDropbox = (disabledTimes)=>{
    disabledTimes.forEach(time => {
        const timeEl = document.querySelector('#interview-dropbox').options[`${time}`]
        timeEl.setAttribute('disabled', false)
    });
}

//checks to see if the time in an array 
const timeCheck = (mockInterviews, timeDropbox)=>{
    let count = 0
    mockInterviews.forEach(interview => {
        if(interview.timeDropbox === timeDropbox){ count++}
    });
    return count
}
//resets dropdown box to please select option id
const dropdownReset = () => document.querySelector('#interview-dropbox').selectedIndex = 0

//checks for email in array
const isEmailFound = (mockInterviews, email)=> mockInterviews.findIndex(interview => interview.interviewEmail === email)
const SendMail = (interview)=>{
    let params = {
        email_id: interview.interviewEmail,
        message: `This email was sent to ${interview.interviewEmail}. ${interview.interviewName}'s interview is ${interview.timeDropbox}.`
    }
    emailjs.send('service_qkpr1xy', 'template_c6muc1j', params).then(function (res){
        alert('Email has been sent to ' + interview.interviewEmail + 'Status: ' + res.status)
    })
}

//validates email entered, will not accept an email with multiple @ signs, uses regular expression
const validateEmail = (email)=>{
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email);
}

//posts mock interview to backend 
const postmockInterview = (mockInterview)=>{
    fetch('https://localhost:7186/api/mockInterviews', {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            interviewID: mockInterview.interviewID,
            interviewName: mockInterview.interviewName,
            interviewEmail: mockInterview.interviewEmail,
            timeDropbox: mockInterview.timeDropbox,
        })
    })
}