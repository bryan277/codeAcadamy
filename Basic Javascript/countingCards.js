var count = 0;

function cc(card) {
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if (count > 0){
    return console.log(count + " Bet");
  } else {
    return console.log(count + " Hold");
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
// 1 Bet
// 2 Bet
// 2 Bet
// 1 Bet
// 0 Hold
cc(2); cc(3); cc(4); cc(5); cc(6);
// 1 Bet
// 2 Bet
// 3 Bet
// 4 Bet
// 5 Bet


// Cards Sequence 2, 3, 4, 5, 6 should return "5 Bet"
// Cards Sequence 7, 8, 9 should return "0 Hold"
// Cards Sequence 10, J, Q, K, A should return "-5 Hold"
// Cards Sequence 3, 7, Q, 8, A should return "-1 Hold"
// Cards Sequence 2, J, 9, 2, 7 should return "1 Bet"
// Cards Sequence 2, 2, 10 should return "1 Bet"
// Cards Sequence 3, 2, A, 10, K should return "-1 Hold"
