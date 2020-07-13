var EventModel = require("../../models/event");
const mongoose = require("mongoose");

const view = (req, res) => {
  console.log("viewed");
  const limit = 30; 


  
  if (!req.query.search) {
    EventModel.find((err, result) => {
    if (err) return res.status(500).end();
    res.render("tag/view", { result });
  }).limit(limit)
    .sort({ _id: -1 });
  }
  else {
    let inp = req.query.search;
    if (inp.charAt(0) == '#') {
     
      inp = inp.substring(1);
      console.log(inp);
    }
    EventModel.find({ tag: inp }, (err, result) => {
      if (err) return res.status(500).end();
      //res.json(result);
      res.render("tag/view", { result });
    }).limit(limit)
      .sort({ _id: -1 });
  }
}

module.exports = { view};
