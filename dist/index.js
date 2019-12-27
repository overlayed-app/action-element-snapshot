"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@actions/core");
var runner_1 = require("./runner");
runner_1.runAction(core_1.getInput('source_url'), core_1.getInput('token'))
    .then(function () {
    console.log('Success.');
})
    .catch(function (ex) {
    var errMessage = "Failed: " + ex + ".";
    console.log(errMessage);
    core_1.setFailed(errMessage);
})
    .finally(function () {
    console.log('Run complete.');
});
