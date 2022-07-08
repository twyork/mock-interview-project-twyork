using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.models;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class mockInterviewsController : ControllerBase
    {
        [EnableCors("AnotherPolicy")]// GET: api/mockInterviews
        [HttpGet]
        
        public List<MockInterviews> Get() //get mockinterviews list and returns it
        {
            MockInterviewFile dataHandler = new MockInterviewFile("mockInterviews.txt");
            List<MockInterviews> myMockInterviews = dataHandler.GetAllStudents();
            MockInterviewReports reports = new MockInterviewReports(myMockInterviews);
            Utility myUtility = new Utility(myMockInterviews);
            return myMockInterviews;
        }

        // GET: api/mockInterviews/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        [EnableCors("AnotherPolicy")]// POST: api/mockInterviews
        [HttpPost]
        public void Post([FromBody] MockInterviews value)
        {
            MockInterviewFile dataHandler = new MockInterviewFile("mockInterviews.txt");
            List<MockInterviews> myMockInterviews = dataHandler.GetAllStudents();
            MockInterviewReports reports = new MockInterviewReports(myMockInterviews);
            Utility myUtility = new Utility(myMockInterviews);
            myUtility.addMockInterview(value.interviewID,value.interviewName,value.interviewEmail,value.timeDropbox,myMockInterviews, dataHandler);
            //myUtility.addMockInterview("10","Cam Turner","trevoryork71@gmail.com","Friday at 10:00",myMockInterviews, dataHandler);
        }

        // PUT: api/mockInterviews/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/mockInterviews/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
