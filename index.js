var add = function (a, b) {
    return a + b;
};
var joinStrings = function (a, b) {
    return a + b;
};
var post = {
    title: "Typescript news",
    daysOld: 10,
    published: true
};
var printPost = function (postToPrint) {
    return postToPrint.title + " (" + postToPrint.daysOld + " days old)";
};
printPost(post);
