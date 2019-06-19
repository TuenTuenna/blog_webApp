//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const ejs = require("ejs");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
// ejs 사용
app.set('view engine', 'ejs');
// 바디파서 사용
app.use(bodyParser.urlencoded({extended: true}));
// static 파일 읽기 위함
app.use(express.static("public"));


/*
  Root Route
*/
app.get("/", function(req, res){
  // ejs 는 views 폴더 안에 있는 파일명으로 랜더링한다.
  res.render("home", {home_content: homeStartingContent});
});

/*
  About Route
*/
app.get("/about", function(req, res){
  // ejs 는 views 폴더 안에 있는 파일명으로 랜더링한다.
  res.render("about", {about_content: aboutContent});
});

/*
  Contact Route
*/
app.get("/contact", function(req, res){
  // ejs 는 views 폴더 안에 있는 파일명으로 랜더링한다.
  res.render("contact", {contact_content: contactContent});
});












app.listen(3100, function() {
  console.log("blog_app server just started on port 3100");
});
