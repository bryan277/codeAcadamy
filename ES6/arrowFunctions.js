const myFunc = function(){
  const myVar = 'value';
  return myVar;
}

const myFunc = () => {
  const myVar = 'value';
  return myVar;
}

const myFunc = () => 'value';

var magic = function() {
  return new Date();
}

var magic = () => new Date();

FBPosts.filter(function(post){
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})

FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)
