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
app.get("/repairs", function(req, res){
  res.render("repairs");
});
app.get("/custom_wheels", function(req, res){
  res.render("custom_wheels");
});
app.get("/rentals", function(req, res){
  res.render("rentals");
});
app.get("/coaching", function(req, res){
  res.render("coaching");
});

//Community Routes===========================
app.get("/community", function(req, res){
  res.render("community");
});
app.get("/race_team", function(req, res){
  res.render("race_team");
});

app.get("/local_rides", function(req, res){
  res.render("local_rides");
});
app.get("/group_rides", function(req, res){
  res.render("group_rides");
});


//Product Route
app.get("/products", function(req, res){
  res.render("products");
});


//Info Route
app.get("/about_us", function(req, res){
  res.render("about_us");
});


//Blog Route
app.get("/blog", function(req, res){
  res.render("blog");
});



//listening Route
app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started!!");
});
