const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;
busy();
announceThatIAmDoingImportantWork();
console.log(busy);
console.log(busy.name);
// I’m doing very important work!
// I’m doing very important work!
// [Function: announceThatIAmDoingImportantWork]
// announceThatIAmDoingImportantWork
// [Finished in 0.455s]
