const mongoose = require("mongoose");


const connectDatabase = () => {
    mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify : false,
      // useCreateIndex: true,
     
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;

// var mongoose = require("mongoose");

// const connectDatabase = () => {
//   mongoose.set("strictQuery", false);
//     mongoose.connect('mongodb://localhost:27017/Ecommerce', {
//         keepAlive: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then((data) => {
//             console.log(`Mongodb connected with server: ${data.connection.host}`);
//           });
// }

// module.export = connectDatabase;