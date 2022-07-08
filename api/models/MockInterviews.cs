namespace api.models{

    public class MockInterviews{
        
        public string interviewID {get; set;}
        public string interviewName {get; set;}
        public string interviewEmail {get; set;}
        public string timeDropbox{get; set;}
        public MockInterviews(string interviewID, string interviewName, string interviewEmail, string timeDropbox){
            this.interviewID = interviewID;
            this.interviewName = interviewName;
            this.interviewEmail = interviewEmail;
            this.timeDropbox = timeDropbox;
        }
        public string ToFile(){
            return  interviewID + "#" + interviewName + "#" + interviewEmail + "#"+timeDropbox;
        }
        public override string ToString(){
            return $"ID: {interviewID}\tName: {interviewName}\tEmail: {interviewEmail}\tTime: {timeDropbox}";
        }
        public int CompareTo(MockInterviews myMockInterview){
            return this.timeDropbox.CompareTo(myMockInterview.timeDropbox);
        }

    }
}