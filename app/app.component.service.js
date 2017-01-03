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
var http_1 = require("@angular/http");
var ComponentService = (function () {
    function ComponentService(http) {
        this.http = http;
        this.baseUrl = 'http://apitodo.herokuapp.com/api/todos';
    }
    /**
     * Performs a request with `get` http method.
     */
    ComponentService.prototype.getTodos = function () {
        return this.http.get(this.baseUrl);
    };
    /**
     * Performs a request with `post` http method.
     */
    ComponentService.prototype.addTodos = function (newTodo) {
        var body = {
            todo: newTodo
        };
        return this.http.post(this.baseUrl, body);
    };
    /**
     * Performs a request with `delete` http method.
     */
    ComponentService.prototype.deleteTodo = function (id) {
        var deleteId = id;
        return this.http.delete(this.baseUrl + '/' + deleteId);
    };
    return ComponentService;
}());
ComponentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ComponentService);
exports.ComponentService = ComponentService;
//# sourceMappingURL=app.component.service.js.map