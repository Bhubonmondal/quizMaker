var LastQuestionNo = 5;
var CurrentQuestionNo = 1;
/*Number of question and answers*/

function prev(){
       
}
function skip(){
       
}


function next(){
       var answer = document.forms[0];
       var txt = "";
       var i, j;
       
          for (i = 0; i < answer.length; i++) {
                  if (answer[i].checked) {
                  txt = txt + answer[i].value + " ";
                  CurrentQuestionNo++; //changing this (1/10), (2/10), (3/10)...
                       

                if(CurrentQuestionNo>5)
                {
                        CurrentQuestionNo=1;
                }
                document.getElementById("questionNo").innerHTML="("+CurrentQuestionNo+"/"+LastQuestionNo+")";
                 //change the question start here...
                 if(CurrentQuestionNo == 1){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") question...";
                }
                else if(CurrentQuestionNo == 2){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") question...";
                }
                else if(CurrentQuestionNo == 3){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") question...";
                }
                else if(CurrentQuestionNo == 4){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") question...";
                }
                else if(CurrentQuestionNo == 5){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") question...";
                }
                
                      
                
                //change the question end here...
          }
       }
      
       console.log(txt);
       
}

document.getElementById("questionNo").innerHTML="("+CurrentQuestionNo+"/"+LastQuestionNo+")";
document.getElementById("questionId").innerHTML= CurrentQuestionNo+") question...";



    
       
