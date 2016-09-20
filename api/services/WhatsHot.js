var schema = new Schema({
    name: {
        type: String,
        default:""
    },
    banner: {
        type: String,
        default:""
    },
    date:{
        type: Date,
        default: Date.now()
    },
    images:[{
      image:{
          type: String,
          default:""
      },
      order:{
          type: Number,
          default: 0
      },
      status: {
          type: String,
          enum:["true","false"]
      }
    }],
    videos:[{
      url:{
          type: String,
          default:""
      },
      thumbnail:{
          type: String,
          default:""
      },
      order:{
          type: Number,
          default: 0
      },
      status: {
          type: String,
          enum:["true","false"]
      }
    }],
    cruiserate:{
      type:Number,
      default:0
    },
    pricing:[{
      paxcabin1: {
          type: String,
          default:""
      },
      paxcabin2: {
          type: String,
          default:""
      },
      paxcabin3: {
          type: String,
          default:""
      },
      text: {
          type: String,
          default:""
      }
    }]
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('WhatsHot', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
