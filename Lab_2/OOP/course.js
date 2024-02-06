"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.course = void 0;
var course = /** @class */ (function () {
    function course(courseID, courseName, section, facultyName) {
        this.courseID = courseID;
        this.courseName = courseName;
        this.section = section;
        this.facultyName = facultyName;
        this.registeredStudents = [];
    }
    course.prototype.addStudent = function (studentName) {
        this.registeredStudents.push(studentName);
    };
    course.prototype.showCourseDetails = function () {
        console.log("Course ID:", this.courseID);
        console.log("Course Name:", this.courseName);
        console.log("Section:", this.section);
        console.log("Faculty:", this.facultyName);
        for (var _i = 0, _a = this.registeredStudents; _i < _a.length; _i++) {
            var registeredStudents = _a[_i];
            registeredStudents.getName();
        }
        console.log();
    };
    return course;
}());
exports.course = course;
