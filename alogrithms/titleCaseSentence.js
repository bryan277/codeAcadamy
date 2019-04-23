//first methods
function titleCase(str) {
  str = str.toLowerCase();
  // str = "I'm a little tea pot".toLowerCase();
  // str = "i'm a little tea pot";
  str = str.split(' ');
  //str = "i'm a little tea pot".split(' ');
  //str = ["i'm", "a", "little", "tea", "pot"];

  for(var i = 0;i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  /* Here str.length = 5
  1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
                 str[0] = "i'm".charAt(0).toUpperCase() + "i'm".slice(1);
                 str[0] = "I"                          + "'m'";
                 str[0] = "I'm";
  2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
                 str[1] = "a".charAt(0).toUpperCase() + "a".slice(1);
                 str[1] = "A"                           + "";
                 str[1] = "A";
  3nd iteration: str[2] = str[2].charAt(0).toUpperCase() + str[2].slice(1);
                 str[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
                 str[2] = "L"                         + "ittle";
                 str[2] = "Little";
  4th iteration  str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
                 str[3] = "tea".charAt(0).toUpperCase() + "tea".slice(1);
                 str[3] = "T"                         + "ea";
                 str[3] = "Tea;
  5th iteration  str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
                 str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
                 str[4] = "P"                           + "ot";
                 str[4] = "Pot";

End of the FOR Loop
  */
  //Step 4. Return the output
  return str.join(' ');
}

titleCase("I'm a little tea pot");

//second method map() method
function titleCase(str) {
  str = str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
    /* Map process
    1st word: "i'm" => (word.charAt(0).toUpperCase() + word.slice(1))
                        "i'm".charAt(0).toUpperCase() + "i'm".slice(1);
                                  "I"                  +  "'m'";
                        return "I'm";
    2nd word: "a" =>   (word.charAt(0).toUpperCase() + word.slice(1))
                        "a".chatAt(0).toUpperCase()  + "".slice(1);
                                  "A"                +  "";
                        return "A";
    3rd word "little" => (word.charAt.toUpperCase() + word.slice(1))
                          "little".charAt(0).toUpperCase() + "little".slice(1)
                                  "L"                      + 'ittle';
                        return "Little";
    4th word "tea"  => (word.charAt.toUpperCase() + word.slice(1))
                        "tea".charAt(0).toUpperCase() + "tea".slice(1)
                                  "T"                 + "ea"
                        return "Tea";
    5th word "pot" => (word.chatAt.toUpperCase() + word.slice(1))
                      "tea".charAt(0).toUpperCase() + "tea".slice(1)
                                 "P"                + "ea"
                        return "Pot";
    */
  });
  return str.join(' ');
}

//without comments
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1))
  }).join(' ');
}
titleCase("I'm a little tea pot");

//third method map() and replace() method
function titleCase(str) {
  str = str.toLowerCase().split(' ')
  //str = ["i'm, "a", "little", "tea", "pot"]
  .map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());

    });
  /*Map process
  1st word: "i'm" => word.replace(word[0], word[0].toUpperCase());
            "i'm".replace("i", "I");
            return word => "I'm"
  2nd word: "a" => word.replace(word[0].word[0].toUpperCase());
            "a".replace("a", "A");
            return word => "A"
  3rd word: "little" => word.replace(word[0].word[0].toUpperCase());
            "little" => replace("l", "L");
            return word => "Little"
  4th word: "tea" => word.replace(word[0].word[0].toUpperCase());
            "tea" = replace("t", "T");
            return word => "Tea"
  5th word: "pot" => word.replace(word[0].word[0].toUpperCase());
            "pot" => replace("p", "P");
            return word => "Pot"

  End of the map() method

  */
  return str.join(' ');
}

titleCase("I'm a little tea pot");

//without comments

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

titleCase("I'm a little tea pot");
