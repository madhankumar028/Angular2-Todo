"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.test = 'test';
        this.todo = [
            { name: 'Angular2' },
            { name: 'Angular1' },
            { name: 'git status' },
        ];
    }
    AppComponent.prototype.add = function () {
        console.log('click event is trigered');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"jumbotron text-center\">\n                    <h1>Angular2 TodoApp <span class=\"badge\">1</span></h1>\n                </div>\n            </div>\n        </div>\n        <div class=\"todoDetails text-center\" *ngFor=\"let list of todo\">\n            <input type=\"checkbox\"/> {{list.name}}\n        </div>\n        <button class=\"btn btn-primary text-center\" (click)=add()>Add</button>\n    "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map