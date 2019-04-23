function caseInSwitch(val) {
  var answer="";
  switch(val){
    case 1:
    answer = console.log("alpha");
    break;
    case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
  }
  return answer;
}

caseInSwitch(1);
//alpha


//switch with default option
function switchOfStuff(val) {
  var answer="";
  switch(val) {
    case "a":
    answer = console.log("apple");
    break;
    case "b":
    answer = "bird";
    break;
    case "c":
    answer = "cat";
    break;
    default:
    answer = "stuff";
  }
  return answer;
}

switchOfStuff('a')
//apple


//multipleIdenticalOptions Switch statements
function sequentialSizes(val){
  var answer = "";
  switch(val){
    case 1:
    answer = "Low";
    break;
    case 2:
    answer = "Low";
    break;
    case 3:
    answer = "Low";
    break;
    case 4:
    answer = "Mid";
    break;
    case 5:
    answer = "Mid";
    break;
    case 6:
    answer = "Mid";
    break;
    case 7:
    answer = "High";
    break;
    case 8:
    answer = "High";
    break;
    case 9:
    answer = "High";
    break;
  }
  return answer;
}

sequentialSizes(1);

function chainToSwtich(val) {
  var answer = "";
  switch(val) {
    case "bob":
    answer = "Marley";
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";
    break;
  }
  return answer;
}

chainToSwtich(7);
