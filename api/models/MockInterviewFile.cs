using System.IO;
using System.Collections.Generic;
namespace api.models{
    public class MockInterviewFile
    {
        private string fileName;
        public MockInterviewFile(string fileName){
            this.fileName = fileName;
        }
        public List<MockInterviews> GetAllStudents(){
            List<MockInterviews> myMockInterviews = new List<MockInterviews>();
            StreamReader inFile = new StreamReader(fileName);
            string line = inFile.ReadLine();
            while (line != null){
                string[] temp = line.Split("#");
                myMockInterviews.Add(new MockInterviews(temp[0], temp[1], temp[2], temp[3]));
                line = inFile.ReadLine();
            }
            inFile.Close();
            return myMockInterviews;
        }
        public void Save(List<MockInterviews> myMockInterviews){
            StreamWriter outFile = new StreamWriter(fileName);
            foreach(MockInterviews myInterview in myMockInterviews){
                outFile.WriteLine(myInterview.ToFile());
            }
            outFile.Close();
        }
    }
}