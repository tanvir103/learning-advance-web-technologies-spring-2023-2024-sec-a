"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacher = void 0;
var course_1 = require("./course");
var teacher = /** @class */ (function () {
    function teacher(id, name) {
        this.id = id;
        this.name = name;
        this.courses = [];
    }
    teacher.prototype.createCourse = function (courseID, courseName, section) {
        var course1 = new course_1.course(courseID, courseName, section, this.name);
        return course1;
    };
    teacher.prototype.showAllCourses = function () {
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var course_2 = _a[_i];
            course_2.showCourseDetails();
        }
    };
    teacher.prototype.showDetails = function () {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log();
    };
    return teacher;
}());
exports.teacher = teacher;
