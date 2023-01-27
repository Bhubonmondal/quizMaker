var LastQuestionNo = 5;
var CurrentQuestionNo = 1;
var mark = 0;
/*Number of question and answers*/

function prev(){
        var answer = document.forms[0];
        var txt = "";
        var i, j;
        
           for (i = 0; i < answer.length; i++) {
                   if (answer[i].checked) {
                   txt = txt + answer[i].value + " ";
                   CurrentQuestionNo--; //changing this (1/10), (2/10), (3/10)...
                 if(CurrentQuestionNo <= 0){
                        CurrentQuestionNo = 1;
                 }
 
                 if(CurrentQuestionNo > 2)
                 {
                         CurrentQuestionNo--;
                 }
                 document.getElementById("questionNo").innerHTML="("+CurrentQuestionNo+"/"+LastQuestionNo+")";
                  //change the question start here...
                  if(CurrentQuestionNo == 1){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") Full form of HTML -";
                        document.getElementById("answer1").innerHTML= "Hyper Text Language";
                        document.getElementById("answer2").innerHTML= "Hypertext Markup Language";
                        document.getElementById("answer3").innerHTML= "Hypartext Markup Language";
                }
                else if(CurrentQuestionNo == 2){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") Full form of CSS -";
                        document.getElementById("answer1").innerHTML= "Cascading Style Sheets";
                        document.getElementById("answer2").innerHTML= "Certain Style Sheet";
                        document.getElementById("answer3").innerHTML= "Cascading Sheets Style";
                }
                else if(CurrentQuestionNo == 3){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") National Fruit of India -";
                        document.getElementById("answer1").innerHTML= "Apple";
                        document.getElementById("answer2").innerHTML= "Orange";
                        document.getElementById("answer3").innerHTML= "Mango";
                }
                else if(CurrentQuestionNo == 4){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") National Animal of India -";
                        document.getElementById("answer1").innerHTML= "Tiger";
                        document.getElementById("answer2").innerHTML= "Lion";
                        document.getElementById("answer3").innerHTML= "Elephant";
                }
                else if(CurrentQuestionNo == 5){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") National Bird of India -";
                        document.getElementById("answer1").innerHTML= "Peacock";
                        document.getElementById("answer2").innerHTML= "Peahen";
                        document.getElementById("answer3").innerHTML= "Peagon";
                }
                 
                       
                 
                 //change the question end here...
           }
        }
       
        console.log(txt);
        
}
function skip(){
        var answer = document.forms[0];
        var txt = "";
        var i, j;
        
           for (i = 1; i <= answer.length; i++) {
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
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") Full form of HTML -";
                        document.getElementById("answer1").innerHTML= "Hyper Text Language";
                        document.getElementById("answer2").innerHTML= "Hypertext Markup Language";
                        document.getElementById("answer3").innerHTML= "Hypartext Markup Language";
                }
                else if(CurrentQuestionNo == 2){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") Full form of CSS -";
                        document.getElementById("answer1").innerHTML= "Cascading Style Sheets";
                        document.getElementById("answer2").innerHTML= "Certain Style Sheet";
                        document.getElementById("answer3").innerHTML= "Cascading Sheets Style";
                }
                else if(CurrentQuestionNo == 3){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") National Fruit of India -";
                        document.getElementById("answer1").innerHTML= "Apple";
                        document.getElementById("answer2").innerHTML= "Orange";
                        document.getElementById("answer3").innerHTML= "Mango";
                }
                else if(CurrentQuestionNo == 4){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") National Animal of India -";
                        document.getElementById("answer1").innerHTML= "Tiger";
                        document.getElementById("answer2").innerHTML= "Lion";
                        document.getElementById("answer3").innerHTML= "Elephant";
                }
                else if(CurrentQuestionNo == 5){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") National Bird of India -";
                        document.getElementById("answer1").innerHTML= "Peacock";
                        document.getElementById("answer2").innerHTML= "Peahen";
                        document.getElementById("answer3").innerHTML= "Peagon";
                }
                       
                 
                 //change the question end here...
           }
        }
       
        console.log(txt);
        
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
                        document.getElementById("div1").style.display="none";
                        document.getElementById("div2").style.display="none";
                        document.getElementById("div3").style.display="none";
                        document.getElementById("div4").style.display="flex";
                        document.getElementById("div4").style.flexDirection="column";
                        document.getElementById("div4").style.alignItems="center";
                        document.getElementById("div4").style.justifyContent="center";
                }
                document.getElementById("questionNo").innerHTML="("+CurrentQuestionNo+"/"+LastQuestionNo+")";
                 //change the question start here...
                 if(CurrentQuestionNo == 1){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") Full form of HTML -";
                        document.getElementById("answer1").innerHTML= "Hyper Text Language";
                        document.getElementById("answer2").innerHTML= "Hypertext Markup Language";
                        document.getElementById("answer3").innerHTML= "Hypartext Markup Language";
                }
                else if(CurrentQuestionNo == 2){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") Full form of CSS -";
                        document.getElementById("answer1").innerHTML= "Cascading Style Sheets";
                        document.getElementById("answer2").innerHTML= "Certain Style Sheet";
                        document.getElementById("answer3").innerHTML= "Cascading Sheets Style";
                }
                else if(CurrentQuestionNo == 3){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") National Fruit of India -";
                        document.getElementById("answer1").innerHTML= "Apple";
                        document.getElementById("answer2").innerHTML= "Orange";
                        document.getElementById("answer3").innerHTML= "Mango";
                }
                else if(CurrentQuestionNo == 4){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") National Animal of India -";
                        document.getElementById("answer1").innerHTML= "Tiger";
                        document.getElementById("answer2").innerHTML= "Lion";
                        document.getElementById("answer3").innerHTML= "Elephant";
                }
                else if(CurrentQuestionNo == 5){
                        document.getElementById("questionId").innerHTML= CurrentQuestionNo+") National Bird of India -";
                        document.getElementById("answer1").innerHTML= "Peacock";
                        document.getElementById("answer2").innerHTML= "Peahen";
                        document.getElementById("answer3").innerHTML= "Peagon";
                }
                //change the question end here...

                //Check for correct answer
                        

                //Check for correct answer end here...
          }
       }
       if(CurrentQuestionNo==2 && txt == 2)
       {
               mark += 10;
               console.log(mark);
       }
       if(CurrentQuestionNo==3 && txt == 1)
       {
               mark += 10;
               console.log(mark);
       }
       if(CurrentQuestionNo==4 && txt == 3)
       {
               mark += 10;
               console.log(mark);
       }
       if(CurrentQuestionNo==5 && txt == 1)
       {
               mark += 10;
               console.log(mark);
       }
       if(CurrentQuestionNo==6 && txt == 1)
       {
               mark += 10;
               console.log(mark);
       }
       //console.log(txt);
       
}

document.getElementById("questionNo").innerHTML="("+CurrentQuestionNo+"/"+LastQuestionNo+")";
document.getElementById("questionId").innerHTML= CurrentQuestionNo+") Full form of HTML -";
                document.getElementById("answer1").innerHTML= "Hyper Text Language";
                document.getElementById("answer2").innerHTML= "Hypertext Markup Language";
                document.getElementById("answer3").innerHTML= "Hypartext Markup Language";


function tryAgain(){
        document.getElementById("div1").style.display="flex";
        document.getElementById("div2").style.display="flex";
        document.getElementById("questionId").style.textAlign="center";
        document.getElementById("div3").style.display="flex";
        document.getElementById("div4").style.display="none";
        document.getElementById("resultScr").style.display="none"; 
        CurrentQuestionNo = -1;
        mark=0;
        next(CurrentQuestionNo);
        next(mark);
}

function submit(){
        document.getElementById("div1").style.display="none";
        document.getElementById("div2").style.display="none";
        document.getElementById("div3").style.display="none";
        document.getElementById("div4").style.display="none";
        document.getElementById("resultScr").style.display="flex";
        document.getElementById("resultScr").style.flexDirection="column";
        document.getElementById("resultScr").style.alignItems="center";
        document.getElementById("resultScr").style.justifyContent="center";
        document.getElementById("result").innerHTML="Your mark = "+mark;
        if(mark >= 50){
                document.getElementById("myReaction").innerHTML="U r Genius bro 😯";
        }
        else if(mark == 40){
                document.getElementById("myReaction").innerHTML="Oh yeah 😎";
        }
        else if(mark == 40){
                document.getElementById("myReaction").innerHTML="superbbhh 🤗";
        }
        else if(mark == 30){
                document.getElementById("myReaction").innerHTML="Well done 😊";
        }
        else if(mark == 20){
                document.getElementById("myReaction").innerHTML="seriously bro 😶";
        }
        else if(mark == 10){
                document.getElementById("myReaction").innerHTML="better try next time😶";
        }
        else if(mark == 0){
                document.getElementById("myReaction").innerHTML="kichu na likhleo ar thake besi number pao a jai 🙂";
        }
}
       
