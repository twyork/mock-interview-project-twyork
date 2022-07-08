using System.Collections.Generic;
namespace api.models{
    public class Utility{
        private List<MockInterviews> myMockInterviews;
        public Utility(List<MockInterviews> myMockInterviews){
            this.myMockInterviews = myMockInterviews;
        }
        public void addMockInterview(string id, string name, string email, string timeDropbox, List<MockInterviews> myMockInterviews, MockInterviewFile dataHandler){
            myMockInterviews.Add(new MockInterviews(id, name, email, timeDropbox));
            dataHandler.Save(myMockInterviews);
        }
    }
}