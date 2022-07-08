using System.Collections.Generic;
namespace api.models{

    public class MockInterviewReports{
        private List<MockInterviews> myMockInterviews;
        public MockInterviewReports(List<MockInterviews> myMockInterviews){
            this.myMockInterviews = myMockInterviews;
        }
        public void PrintAllStudents(){
            foreach(MockInterviews myInterview in myMockInterviews){
                System.Console.WriteLine(myInterview.interviewID);
            }
        }
    
    }
}