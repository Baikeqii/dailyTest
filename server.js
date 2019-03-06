/**
 * Created by Administrator on 2019/3/4 0004.
 */
const express = require("express"),
    app = express();

app.get("/helloText", function (req, res) {
    req.send("helloTextValue")
} );

let server = app.listen(3000, function () {
    console.log('lskdfjlsdkjflsdfkj', "helloTextValue")
})