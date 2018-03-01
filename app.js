var express  = require("express"),
    app      = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// var routePaths = [
//   'home',
//   'repairs',
//   'fitting',
//   'rental',
//   'coaching',
//   'community',
//   'local_races',
//   'local_rides',
//   'group_rides',
//   'bikes',
//   'clothing',
//   'accessories',
//   'racks',
//   'about_us'
//
// ]
// routePaths.forEach((name) => {
//   app.get('/' + name, (req, res) => {
//     res.render(name);
//   });
// })





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
app.get("/fitting", function(req, res){
  res.render("fitting");
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
app.get("/local_races", function(req, res){
  res.render("local_races");
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
app.get("/bikes", function(req, res){
  res.render("bikes");
});
app.get("/clothing", function(req, res){
  res.render("clothing");
});
app.get("/accessories", function(req, res){
  res.render("accessories");
});
app.get("/racks", function(req, res){
  res.render("racks");
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
