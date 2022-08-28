
const app = require("./index")
const connect = require("./configs/db")
const port = process.env.PORT || 5000;
app.listen(port, async() => {
    try {
        await connect();
      } catch (err) {
        console.error(err.message);
      }
      console.log(`listening on port ${port}`);
})