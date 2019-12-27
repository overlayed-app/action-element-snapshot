"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __importDefault(require("@actions/core"));
var runner_1 = require("./runner");
runner_1.runAction(core_1.default.getInput('source_url'), core_1.default.getInput('token'))
    .then(function () {
    console.log('Success.');
})
    .catch(function (ex) {
    var errMessage = "Failed: " + ex + ".";
    console.log(errMessage);
    core_1.default.setFailed(errMessage);
})
    .finally(function () {
    console.log('Run complete.');
});
