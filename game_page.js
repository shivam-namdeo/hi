player1_name=localStorage.getItem("player1_name") ;

player2_name=localStorage.getItem("player2_name") ;

player1_score=0 ;

player2_score=0 ;

document.getElementById("player1_name").innerHTML=player1_name+":" ;

document.getElementById("player2_name").innerHTML=player2_name+":" ;

document.getElementById("player1_score").innerHTML=player1_score ;

document.getElementById("player2_score").innerHTML=player2_score ;

document.getElementById("player_question").innerHTML="Qusetion-Turn!"+player1_name ;


document.getElementById("player_answer").innerHTML="Answer-Turn!"+player2_name ;

function send()

{
    n1=document.getElementById("number1").value ;


    n2=document.getElementById("number2").value ;

    word=parseInt(n1)* parseInt(n2)

    console.log(word) ;

   

   

    Qw= "<h4 id='word_display'> Q. "+n1+"X+"+n2+"</h4>" ;

    iN= "<br>Answer : <input type='text' id='input_check_box'>" ;

    Cb= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>" ;

    shivam= Qw+iN+Cb ;

    document.getElementById("output").innerHTML=shivam ;

    document.getElementById("number1").value="" ;

    document.getElementById("number2").value="" ;


}

Question_turn= "player1" ;

Answer_turn= "player2" ;

function check()

{

    ga=document.getElementById("input_check_box").value ;

    answer=ga.toLowerCase() ;

    if(answer == word)
    {

        if(Answer_turn=="player1")
        {
            player1_score=player1_score+1 ;

            document.getElementById("player1_score").innerHTML=player1_score ;
        }

        else
        {
            player2_score=player2_score+1 ;

            document.getElementById("player2_score").innerHTML=player2_score ;
        }
    }
    if(Question_turn=="player1")
    {
        Question_turn="player2" ;

        document.getElementById("player_question").innerHTML="Qusetion-Turn!"+player2_name ;

    }

    else
    {
        Question_turn="player1" ;

        document.getElementById("player_question").innerHTML="Qusetion-Turn!"+player1_name ;
 
    }

    

    if(Answer_turn=="player1")
    {
        Answer_turn="player2" ;

        document.getElementById("player_answer").innerHTML="Answer_turn!"+player2_name ;

    }

    else
    {
        Answer_turn="player1" ;

        document.getElementById("player_answer").innerHTML="Answer_turn!"+player1_name ;
 
    }

    document.getElementById("output").innerHTML="" ;
}