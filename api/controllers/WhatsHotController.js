module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
  getImages:function(req,res){
    if(req.body){
      WhatsHot.getImages(req.body,res.callback);
    }
    else {
      res.json({value:false,data:{message:"Invalid Request"}})
    }
  },
  getVideos:function(req,res){
    if(req.body){
      WhatsHot.getVideos(req.body,res.callback);
    }
    else {
      res.json({value:false,data:{message:"Invalid Request"}})
    }
  },
  getPricing:function(req,res){
    if(req.body){
      WhatsHot.getPricing(req.body,res.callback);
    }
    else {
      res.json({value:false,data:{message:"Invalid Request"}})
    }
  },
  getOneImages:function(req,res){
    if(req.body){
      Destination.getOneImages(req.body,res.callback);
    }
    else {
      res.json({value:false,data:{message:"Invalid Request"}})
    }
  },
  getOneVideos:function(req,res){
    if(req.body){
      Destination.getOneVideos(req.body,res.callback);
    }
    else {
      res.json({value:false,data:{message:"Invalid Request"}})
    }
  },
  getOnePricing:function(req,res){
    if(req.body){
      Destination.getOnePricing(req.body,res.callback);
    }
    else {
      res.json({value:false,data:{message:"Invalid Request"}})
    }
  },
};
module.exports = _.assign(module.exports, controller);
