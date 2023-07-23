const express = require("express");
const cors = require("cors");
const db = require("./app/models/index");
const app = express();

// cors
const corsOptions = {
  origin: "*"
};

// register an middleware
app.use(cors(corsOptions));
app.use(express.json());

// connect to mongo
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

db.mongoose.connect(db.url, mongooseConfig)
  .then(() => console.log("connected to database"))
  .catch(err => {
    console.log(`error ${err.message}`);
    process.exit();
  });

// summon
require("./app/routes/gt.routes")(app);
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));





