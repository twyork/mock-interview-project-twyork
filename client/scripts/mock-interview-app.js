'use strict'
let mockInterviews = []
let disabledTimes  = []
getSavedInterviews()

//adds new mock interview to array, adds a time slot to disabled times if it is booked 3 or more times, makes sure person does not select invalid option
document.querySelector('#new-mock-interview').addEventListener('submit', (e)=>{
    const interviewName = e.target.elements.name.value.trim()
    const interviewEmail = e.target.elements.email.value.trim()
    const timeDropbox = e.target.interviewDropbox.value
    e.preventDefault()
    if(interviewName.length >0 && validateEmail(interviewEmail) && timeDropbox != "can't select this"){
        mockInterviews.push({
            interviewID: uuidv4(),
            interviewName,
            interviewEmail,
            timeDropbox,
            
        })
        if(timeCheck(mockInterviews,timeDropbox) >=3){
            disabledTimes.push(timeDropbox)
        }
        postmockInterview(mockInterviews[(mockInterviews.length)-1])
        document.querySelector('#interview-submission').innerHTML = `Congratulations! ${interviewName} whose email ${interviewEmail} is now signed up for an interview at ${timeDropbox}.`
        renderDropbox(disabledTimes)
        e.target.elements.name.value = ''
        e.target.elements.email.value = ''
    } else if(interviewName.length === 0 || !validateEmail(interviewEmail) ||timeDropbox === "can't select this"){
        document.querySelector('#interview-submission').innerHTML = 'Please enter your name, a valid email and select a time on Thursday or Friday.'
    }
    dropdownReset()
})

//sends email to user if submitted showing the interview time if they have one
document.querySelector('#email-interview-time').addEventListener('submit', (e)=>{
    const emailMessageEl = document.createElement('p')
    const email = e.target.elements.email.value.trim()
    e.preventDefault()
    if(isEmailFound(mockInterviews,email) >-1){
        SendMail(mockInterviews[isEmailFound(mockInterviews,email)])
        emailMessageEl.textContent = `${email} is registered for a mock interview. An email will be sent shortly.`
        document.querySelector('#email-interview-time').appendChild(emailMessageEl)
    } else{
        emailMessageEl.textContent = `The email: ${email} was not found. Have you signed up for an interview?`
        document.querySelector('#email-interview-time').appendChild(emailMessageEl)
    }
})
