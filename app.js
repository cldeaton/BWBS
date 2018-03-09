var express  = require("express"),
    app      = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var routePaths = [
  'home',
  'repairs',
  'fitting',
  'rentals',
  'coaching',
  'community',
  'local_races',
  'local_rides',
  'group_rides',
  'bikes',
  'clothing',
  'accessories',
  'racks',
  'about_us'
]
routePaths.forEach((name) => {
  app.get('/' + name, (req, res) => {
    res.render(name);
  });
})

//Home Route
app.get("/", function(req, res){
  res.render("home");
});

//Blog Route
app.get("/blog", function(req, res){
  res.render("blog");
});

//listening Route
app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started!!");
});
