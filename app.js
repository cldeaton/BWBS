var express  = require("express"),
    app      = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));







//Home Route
app.get("/", function(req, res){
  res.render("home");
});
app.get("/home", function(req, res){
  res.render("home");
});

//Service Routes=============================
app.get("/services", function(req, res){
  res.render("services");
});

//Community Routes===========================
app.get("/community", function(req, res){
  res.render("community");
});

//Info Route
app.get("/about_us", function(req, res){
  res.render("about_us");
});

//Product Route
app.get("/products", function(req, res){
  res.render("products");
});

//Blog Route
app.get("/blog", function(req, res){
  res.render("blog");
});



//listening Route
app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started!!");
});
