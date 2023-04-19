function seeMore()	{
	let moreText = document.getElementById("future");
	let link = document.getElementById("see");

	
	if(moreText.classList.contains("hidden"))	{
		link.innerHTML = "Read Less";
		moreText.classList.remove("hidden");
	}
	else {
		link.innerHTML = "Read More";
		moreText.classList.add("hidden");
	}
}

function seeLess()	{
	let moreText = document.getElementById("me");
	let link = document.getElementById("less");

	
	if(moreText.classList.contains("hidden"))	{
		link.innerHTML = "Read Less";
		moreText.classList.remove("hidden");
	}
	else {
		link.innerHTML = "Read More";
		moreText.classList.add("hidden");
	}
}

function quizScore()	{
	let quizElem=document.getElementById("quiz");
	let quiz=document.getElementById("quiz");
	let state=document.getElementById("statement");
	let quizResults=document.getElementById("results");
	quizResults.classList.remove("hidden");
	let score=0;
	
	if(quizElem.selectedIndex == 0)	{
	document.getElementById("ques1").innerHTML= "Question 1 - Correct";
	score = score + 1;
	}
	else	{
	document.getElementById("ques1").innerHTML = "Question 1 - Incorrect";
	}
	if(state.selectedIndex == 2)	{
	document.getElementById("ques2").innerHTML= "Question 2 - Correct";
	score = score + 1;
	}
	else	{
	document.getElementById("ques2").innerHTML = "Question 2 - Incorrect";
	} 
	let quizscore=document.getElementById("score");
	document.getElementById("score").innerHTML = "Score:" + score + "/2";
}
	
function changeSlide()	{
	var temp = document.getElementById("carolina").src;
	document.getElementById("carolina").src=document.getElementById("fallbreak").src;
	document.getElementById("fallbreak").src=document.getElementById("sophomore").src;
	document.getElementById("sophomore").src=document.getElementById("munchmeyer").src;
	document.getElementById("munchmeyer").src=document.getElementById("rockyflop").src;
	document.getElementById("rockyflop").src=temp;
}
setInterval(changeSlide, 10000);
	