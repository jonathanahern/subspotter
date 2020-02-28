// module.exports = {
  // mongoURI:
  //   "mongodb+srv://admin:w6fplvXM4wiQsR8P@mern-subway-8q4zi.mongodb.net/test?retryWrites=true&w=majority",
  // secretOrKey: "notagoodsecret1!";
  //Make sure this is your own unique string

  if (process.env.NODE_ENV === "production") {
    module.exports = require("./keys_prod");
  } else {
    module.exports = require("./keys_dev");
  }


// };

