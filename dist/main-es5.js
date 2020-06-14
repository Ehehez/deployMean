function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"todo\">\r\n    <div class=\"row position-header\" *ngIf=\"!hidden\">\r\n        <app-header class=\"col-12 header\"></app-header>\r\n    </div>\r\n    <div class=\"container-fluid position-content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <div style=\"margin-bottom:100px\"></div>\r\n    <div class=\"row position-footer style-footer\" style=\"background-color:black\" *ngIf=\"!hidden\">\r\n        <div class=\"container-fluid\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow/follow.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow/follow.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFollowFollowComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<td class=\"col-6 col-lg-2 offset-lg-1 celdaResponsive\">\n    <span class=\"d-lg-none\">Username : </span> {{user?.username}}\n</td>\n<td class=\"col-6 col-lg-2 celdaResponsive\">\n    <span class=\"d-lg-none\">Email : </span>{{user?.email}}\n</td>\n<td class=\"col-6 col-lg-2 celdaResponsive\">\n    <span class=\"d-lg-none\">Nombre : </span>{{user?.name}}\n</td>\n<td class=\"col-6 col-lg-2 celdaResponsive\">\n    <span class=\"d-lg-none\">Apellidos : </span>{{user?.surname}}\n</td>\n<td class=\"col-12 col-lg-2 celdaResponsive\">\n    <div *ngIf=\"follow\">\n        <button class=\"btn btn-success\" (click)=\"followUser(user._id)\">Follow</button>\n    </div>\n    <div *ngIf=\"!follow\">\n        <button class=\"btn btn-danger\" (click)=\"unfollowUser(user._id)\">Unfollow\n        </button>\n    </div>\n</td>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"footer\">\r\n    <p class=\"col-12 text-right\" style=\"margin:0 auto; color: white\">Random random random random random random ©Random\r\n        <a (click)=\"gotoWarning()\">[Aviso\r\n            Legal]</a> | <a (click)=\"gotoCookies()\">[Política de cookies]</a></p>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n\n    <nav class=\"navbar navbar-dark default-color col-12\">\n        <div class=\"row col-1 col-md-1 menu\">\n            <img src=\"../../../assets/img/logo.png\" style=\"height:50px; width: auto;\" (click)=\"gotoMuro()\">\n        </div>\n        <div class=\"col-2 offset-9 col-lg-4 offset-lg-0 menu row\">\n            <i class=\"fa fa-bars float-right menuHead fa-3x col-6 offset-6 d-lg-none\" (click)=\"openMenu()\"\n                aria-hidden=\"true\"></i>\n            <div class=\"menuBotones row col-12 p-0 m-0\" [ngClass]=\"{ 'noHidden' : menuAux }\">\n                <button class=\"btn btn-outline-white btn-md col-12 col-lg-3 text-center color-white\"\n                    (click)=\"gotoHome()\">Home</button>\n                <button class=\"btn btn-outline-white btn-md col-12 text-center col-lg-3 color-white\"\n                    (click)=\"gotoMuro()\">Muro</button>\n                <button class=\"btn btn-outline-white btn-md col-12 text-center col-lg-3 color-white\"\n                    (click)=\"logOut()\">Logout</button>\n            </div>\n        </div>\n        <form class=\"form-inline col-12 col-md-10 offset-md-1 col-lg-5 col-lg-offset-3 ml-auto marginResponsive\"\n            [formGroup]=\"headForm\">\n            <select formControlName=\"select\" class=\"form-control col-3\" ng-selected=\"value == name\">\n                <option name=\"name\" value=\"name\">Nombre</option>\n                <option name=\"email\" value=\"email\">Email</option>\n                <option name=\"username\" value=\"username\">Username</option>\n            </select>\n            <input class=\"form-control  col-6\" formControlName=\"search\" type=\"search\" placeholder=\"Search\"\n                aria-label=\"Search\">\n            <button class=\"btn btn-outline-white btn-md my-2 my-sm-0 col-3 button-style color-white\" type=\"submit\"\n                [disabled]=\"!headForm.valid\" (click)=\"search()\">Buscar</button>\n        </form>\n    </nav>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"Site\">\n    <!--<div class=\"row\">\n        <app-header class=\"col-12 header\"></app-header>\n    </div>-->\n    <div class=\"row px-2\">\n        <!--  Site-content -->\n        <div class=\"col-11 col-lg-9\">\n            <h2 class=\"justify-content-center\">Muro de usuarios seguidos</h2>\n            <hr>\n            <h3 *ngIf=\"listaPost?.length == 0\">Vacio</h3>\n            <div class=\"col-lg-12\" *ngFor=\"let post of listaPost\">\n                <app-post [post]=\"post\"></app-post>\n            </div>\n        </div>\n        <div class=\"col-1 col-lg-3 position\">\n            <i class=\"fa fa-user fa-3x col-12 d-lg-none\" (click)=\"openUsers(users)\" aria-hidden=\"true\"></i>\n            <div class=\"col-12 d-lg-inline-block d-none\">\n                <h4 class=\"justify-content-center d-block\">Usuarios Seguidos</h4>\n                <h5 *ngIf=\"lista?.length == 0\" class=\"text-center\">No sigues a ningún usuario</h5>\n                <div *ngIf=\"lista?.length > 0\" class=\"alinear\">\n                    <div class=\" justify-content-center\">\n                        <ngb-pagination [(page)]=\"page\" [pageSize]=\"pageSize\" [collectionSize]=\"lista?.length\">\n                        </ngb-pagination>\n                    </div>\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\"\n                            *ngFor=\"let list of lista | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\">\n                            Username :\n                            {{list?.username}}\n                            <button (click)=\"open(content,list._id)\" class=\"btn btn-primary float-right\">Ver\n                                más</button>\n                        </li>\n                    </ul>\n                </div>\n\n            </div>\n        </div>\n        <ng-template #users let-modal>\n            <div class=\"col-12\" [ngClass]=\"{ 'noHidden' : menuAux }\">\n                <h4 class=\"justify-content-center d-block\">Usuarios Seguidos</h4>\n                <h5 *ngIf=\"lista?.length == 0\" class=\"text-center\">No sigues a ningún usuario</h5>\n                <div *ngIf=\"lista?.length > 0\" class=\"alinear\">\n                    <div class=\" justify-content-center\">\n                        <ngb-pagination [(page)]=\"page2\" [pageSize]=\"pageSize2\" [collectionSize]=\"lista?.length\">\n                        </ngb-pagination>\n                    </div>\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\"\n                            *ngFor=\"let list of lista | slice: (page2-1) * pageSize2 : (page2-1) * pageSize2 + pageSize2\">\n                            Username :\n                            {{list?.username}}\n                            <button (click)=\"open(content,list._id)\" class=\"btn btn-primary float-right\">Ver\n                                más</button>\n                        </li>\n                    </ul>\n                </div>\n\n            </div>\n        </ng-template>\n        <ng-template #content let-modal>\n            <div class=\"row\">\n                <img src=\"../../../assets/img/user-placeholder.jpg\" class=\"d-inline-block sizeImage\"\n                    style=\"margin:0 auto; margin-bottom:15px\" alt=\"placeholder\">\n            </div>\n            <ul class=\"list-group text-center\">\n                <li class=\"list-group-item\">\n                    Username :{{detalles?.username}}\n                </li>\n                <li class=\"list-group-item\">\n                    Email : {{detalles?.email}}\n                </li>\n                <li class=\"list-group-item\">\n                    Nombre : {{detalles?.name}}\n                </li>\n                <li class=\"list-group-item\">\n                    Apellidos : {{detalles?.surname}}\n                </li>\n            </ul>\n            <hr>\n            <div *ngIf=\"listasPost.length > 0\">\n                <h4>Lista de Posts</h4>\n                <div class=\"col-lg-12 blogShort\"\n                    *ngFor=\"let post of listasPost | slice: (page3-1) * pageSize3 : (page3-1) * pageSize3 + pageSize3\">\n                    <app-post [post]=\"post\"></app-post>\n                </div>\n                <div class=\" justify-content-center\">\n                    <ngb-pagination [(page)]=\"page3\" [pageSize]=\"pageSize3\" [collectionSize]=\"listasPost?.length\">\n                    </ngb-pagination>\n                </div>\n            </div>\n        </ng-template>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row justify-content-center\" style=\"margin-top:50px\">\n    <!--<div class=\"col-md-3 col-12\">\n        <div class=\"col-12\">\n            <img src=\"#\">\n\n        </div>\n        <div class=\"col-12\">\n            Texto bienvenida.\n        </div>\n    </div>-->\n    <div class=\"col-12\">\n        <img src=\"../../../assets/img/banner.png\" class=\"col-6 offset-3\">\n    </div>\n    <div class=\"col-6\" style=\"border:1px solid green;border-radius:10px;\">\n        <h1>Log in</h1>\n        <hr><br>\n        <div *ngIf=\"errorMessage\">\n            <div class=\"alert alert-danger\" role=\"alert\">\n                {{errorMessage}}\n            </div>\n        </div>\n        <form (ngSubmit)=\"onSubmit()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input [(ngModel)]=\"user.email\" name=\"email\" type=\"email\" required class=\"form-control color-green\"\n                    id=\"email\" placeholder=\"Introduce tu email\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Contraseña</label>\n                <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" required\n                    class=\"form-control color-green\" id=\"password\" placeholder=\"Introduce tu contraseña\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n        </form>\n        <p>\n            <span>Don't have an account?&nbsp;</span>\n            <a [routerLink]=\"['/signup']\">Sign up!</a>\n        </p>\n    </div>\n</div>\n\n<ng-template #inicio let-modal id=\"inicio\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Explicación Sitio web</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"divtabla\">\n            <table [formGroup]=\"form\" class=\"table\">\n                <tr>\n                    <td>\n                        <textarea formControlName=\"comment\" rows=\"6\" cols=\"60\"></textarea>\n                    </td>\n                </tr>\n                <tr>\n                    <td><button class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"!form.valid\">Submit</button>\n                </tr>\n            </table>\n        </div>\n    </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/muro/muro.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/muro/muro.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMuroMuroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"Site\">\n    <div class=\"Site-content\">\n\n        <div class=\"col-12 row\" style=\"margin: 0 auto\">\n            <div class=\"col-12 row\">\n                <div class=\"col-8 offset-1\" style=\"margin: 0 auto\">\n                    <h2>Muro personal</h2>\n                </div>\n                <div class=\"col-3\" style=\"white-space:nowrap;\">\n                    <i class=\" fa fa-user-circle menuHead fa-3x iconSize offset-lg-3 col-3 text-center\"\n                        (click)=\"profile(perfil)\" aria-hidden=\"true\"></i>\n                    <i class=\"fa fa-plus menuHead fa-3x offset-2 iconSize col-2 text-center\" (click)=\" newPost(post)\"\n                        aria-hidden=\"true\"></i>\n                </div>\n            </div>\n            <div class=\"row col-12 m-0 p0\" style=\"margin-top: 15px;\">\n                <div class=\" col-12 row m-0 p-0\">\n                    <h3 class=\"justify-content-center\" *ngIf=\"posts?.length == 0\">No hay nada por aquí</h3>\n                    <div class=\"justify-content-center col-12\" *ngIf=\"posts?.length > 0\">\n                        <ngb-pagination [(page)]=\"page\" [pageSize]=\"pageSize\" [collectionSize]=\"posts?.length\">\n                        </ngb-pagination>\n                    </div>\n                    <div class=\"mb-3 col-12\"\n                        *ngFor=\"let post of posts | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\">\n                        <app-post [post]=\"post\"></app-post>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <ng-template #post let-modal>\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"modal-basic-title\">Añadir Post</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"divtabla\">\n                    <table [formGroup]=\"form\" class=\"table\">\n                        <tr>\n                            <th class=\"text-center\"><label>Titulo</label></th>\n                            <td><input type=\"text\" formControlName=\"title\">\n                            </td>\n                        </tr>\n                        <tr>\n                            <th class=\"text-center\"><label>Contenido</label></th>\n                            <td>\n                                <textarea formControlName=\"content\" rows=\"6\" cols=\"40\"></textarea>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td><button class=\"btn btn-primary\" (click)=\"onSubmit()\"\n                                    [disabled]=\"!form.valid\">Submit</button>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #perfil let-modal>\n            <div class=\"row\">\n                <img src=\"../../../assets/img/user-placeholder.jpg\" class=\"d-inline-block\"\n                    style=\"margin:0 auto; margin-bottom:15px\" alt=\"placeholder\">\n            </div>\n            <ul class=\"list-group text-center\">\n                <li class=\"list-group-item\">\n                    Username :{{user?.username}}\n                </li>\n                <li class=\"list-group-item\">\n                    Email : {{user?.email}}\n                </li>\n                <li class=\"list-group-item\">\n                    Nombre : {{user?.name}}\n                </li>\n                <li class=\"list-group-item\">\n                    Apellidos : {{user?.surname}}\n                </li>\n            </ul>\n        </ng-template>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPostPostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12 mb-2\">\n    <div class=\"card gedf-card\">\n        <div class=\"card-header\">\n            <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"d-flex justify-content-between align-items-center\">\n                    <div class=\"mr-2\">\n                        <img class=\"rounded-circle\" width=\"45\" src=\"../../../assets/img/user-placeholder.jpg\" alt=\"\">\n                        <!--https://picsum.photos/50/50-->\n                    </div>\n                    <div class=\"ml-2\">\n                        <div class=\"h5 m-0\">{{postCreator}}</div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"card-body\">\n            <span class=\"card-link\">\n                <h5 class=\"card-title\">{{post?.title}}</h5>\n            </span>\n\n            <p class=\"card-text\">\n                {{post?.content}}>\n            </p>\n        </div>\n        <div class=\"card-footer row\">\n            <span class=\"col-12 col-lg-3 footerPost\">Valoración media: {{media}}</span>\n            <span class=\"col-12 col-lg-3 offset-lg-1 footerPost\">Tu Valoración: <ngb-rating [(rate)]=\"rat\" [max]=\"5\"\n                    (rateChange)=\"sendRating($event)\" [readonly]=\"read\">\n                </ngb-rating></span>\n            <span class=\"col-6 offset-lg-1 col-lg-1 footerDetails\" style=\"white-space: nowrap;\"\n                (click)=\"openComment(comentario)\"><i class=\"fa fa-comment\"></i>\n                Añadir Comentario</span>\n            <span href=\"#\" class=\"col-6 col-lg-1 offset-lg-1 footerDetails\" style=\"white-space: nowrap;\"\n                (click)=\"openDetails(vermas)\"><i class=\"fa fa-info\"></i> Ver\n                Más</span>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #vermas let-modal>\n    <div class=\"col-12\">\n        <h4 class=\"text-center\">Comentarios:</h4>\n        <div *ngIf=\"post.comments.length > 0\" class=\"minHeight\">\n            <ngb-pagination [(page)]=\"page\" [pageSize]=\"pageSize\" [collectionSize]=\"post.comments?.length\">\n            </ngb-pagination>\n            <div *ngFor=\"let com of post.comments | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\"\n                style=\"border: 1px lightskyblue solid; border-radius:10px\" class=\"mb-2\">\n                <div class=\"card-header\">\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                        <div class=\"d-flex justify-content-between align-items-center\">\n                            <div class=\"mr-2\">\n                                <img class=\"rounded-circle\" width=\"45\" src=\"../../../assets/img/user-placeholder.jpg\"\n                                    alt=\"\">\n                            </div>\n                            <div class=\"ml-2\">\n                                <div class=\"h5 m-0\">{{com.user_email}}</div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"card-body\">\n                    <p class=\"card-text\">\n                        {{com.comment}}>\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"post.comments.length == 0\" class=\"minHeight\">\n            No hay comentarios\n        </div>\n    </div>\n</ng-template>\n\n\n<ng-template #comentario let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Añadir comentario</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"divtabla\">\n            <table [formGroup]=\"form\" class=\"table\">\n                <tr>\n                    <td>\n                        <textarea formControlName=\"comment\" rows=\"6\" cols=\"60\"></textarea>\n                    </td>\n                </tr>\n                <tr>\n                    <td><button class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"!form.valid\">Enviar</button>\n                </tr>\n            </table>\n        </div>\n    </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row justify-content-center\">\n\n    <div class=\"col-md-4\" style=\"border:1px solid green;border-radius:10px;\">\n        <h1>Sign up</h1>\n        <hr><br>\n        <div *ngIf=\"errorMessage\">\n            <div class=\"alert alert-danger\" role=\"alert\">\n                {{errorMessage}}\n            </div>\n        </div>\n        <form (ngSubmit)=\"onSubmit()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input [(ngModel)]=\"user.email\" name=\"email\" type=\"email\" required class=\"form-control color-green\"\n                    id=\"email\" placeholder=\"Introduce tu email\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input [(ngModel)]=\"user.username\" name=\"username\" type=\"text\" required class=\"form-control color-green\"\n                    id=\"username\" placeholder=\"Introduce tu nombre de usuario\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" required\n                    class=\"form-control color-green\" id=\"password\" placeholder=\"Introduce tu contraseña\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input [(ngModel)]=\"user.name\" name=\"name\" type=\"text\" required class=\"form-control color-green\"\n                    id=\"name\" placeholder=\"Introduce tu nombre\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"surname\">Surname</label>\n                <input [(ngModel)]=\"user.surname\" name=\"surname\" type=\"text\" required class=\"form-control color-green\"\n                    id=\"surname\" placeholder=\"Introduce tus apellidos\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n            <a [routerLink]=\"['/']\" class=\"btn btn-success\">Cancelar</a>\n        </form>\n        <p>\n            <span>Already have an account?&nbsp;</span>\n            <a [routerLink]=\"['/login']\">Log in!</a>\n        </p>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\" justify-content-center\" *ngIf=\"users?.length > 0\">\n        <ngb-pagination [(page)]=\"page\" [pageSize]=\"pageSize\" [collectionSize]=\"users?.length\"></ngb-pagination>\n    </div>\n    <table *ngIf=\"users?.length > 0; else vacio\" class=\"col-12 row table text-center\" style=\"margin: 0 auto\">\n        <tr class=\"row col-12 \">\n            <th class=\"d-none d-lg-inline-block col-lg-2 offset-lg-1 celdaResponsive\">\n                Nombre de usuario\n            </th>\n            <th class=\"d-none d-lg-inline-block col-lg-2\">\n                Email\n            </th>\n            <th class=\"d-none d-lg-inline-block col-lg-2\">\n                Nombre\n            </th>\n            <th class=\"d-none d-lg-inline-block col-lg-2\">\n                Apellidos\n            </th>\n            <th class=\"d-none d-lg-inline-block col-lg-2\">\n                Actions\n            </th>\n        </tr>\n        <tr *ngFor=\"let user of users| slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\" app-follow\n            [user]=\"user\" class=\"row col-12 filaResponsive\"></tr>\n    </table>\n    <ng-template #vacio>\n        <div>\n            No se ha encontrado ningún resultado.\n        </div>\n    </ng-template>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _components_muro_muro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/muro/muro.component */
    "./src/app/components/muro/muro.component.ts");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/components/search/search.component.ts");
    /* harmony import */


    var _components_cookies_cookies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/cookies/cookies.component */
    "./src/app/components/cookies/cookies.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");

    var routes = [{
      path: "",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }, {
      path: "login",
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: "muro/:name",
      component: _components_muro_muro_component__WEBPACK_IMPORTED_MODULE_6__["MuroComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }, {
      path: "users/:field/:value",
      component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }, {
      path: "cms/:page",
      component: _components_cookies_cookies_component__WEBPACK_IMPORTED_MODULE_8__["CookiesComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }, {
      path: "signup",
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\r\n   margin:0 auto; \r\n   background-color:#336600; \r\n   margin-bottom:5px;\r\n   color:white;\r\n}\r\n\r\n.todo {\r\n    min-height:100%!important;\r\n}\r\n\r\nfooter {\r\n    clear: both;\r\n    position: relative;\r\n    height: 200px;\r\n    margin-top: -200px;\r\n}\r\n\r\n.style-footer {\r\n    padding: 1rem;\r\n}\r\n\r\n@media (min-width:991px){\r\n    .position-header {\r\n        position:fixed; \r\n        top:0px; \r\n        left:0px;\r\n        width:100%; \r\n        z-index:10;\r\n    }\r\n\r\n    .position-content {\r\n        margin-top:82px;\r\n    }\r\n\r\n    .position-footer {\r\n        position:fixed; \r\n        bottom:0px; \r\n        left:0px;\r\n        width:100%; \r\n        z-index:10;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxhQUFhO0dBQ2Isd0JBQXdCO0dBQ3hCLGlCQUFpQjtHQUNqQixXQUFXO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsT0FBTztRQUNQLFFBQVE7UUFDUixVQUFVO1FBQ1YsVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxVQUFVO1FBQ1YsUUFBUTtRQUNSLFVBQVU7UUFDVixVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgIG1hcmdpbjowIGF1dG87IFxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzY2MDA7IFxyXG4gICBtYXJnaW4tYm90dG9tOjVweDtcclxuICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi50b2RvIHtcclxuICAgIG1pbi1oZWlnaHQ6MTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjAwcHg7XHJcbn1cclxuXHJcbi5zdHlsZS1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6OTkxcHgpe1xyXG4gICAgLnBvc2l0aW9uLWhlYWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246Zml4ZWQ7IFxyXG4gICAgICAgIHRvcDowcHg7IFxyXG4gICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgIHdpZHRoOjEwMCU7IFxyXG4gICAgICAgIHotaW5kZXg6MTA7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvc2l0aW9uLWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6ODJweDtcclxuICAgIH1cclxuXHJcbiAgICAucG9zaXRpb24tZm9vdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjpmaXhlZDsgXHJcbiAgICAgICAgYm90dG9tOjBweDsgXHJcbiAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgd2lkdGg6MTAwJTsgXHJcbiAgICAgICAgei1pbmRleDoxMDtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/@ngrx/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(store, router) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.store = store;
        this.router = router;
        this.title = 'Red Social del palo';
        this.hidden = true;
        this.router.events.subscribe(function (x) {
          if (location.href.includes('login') || location.href.includes('signup')) {
            _this.hidden = true;
          } else {
            _this.hidden = false;
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/@ngrx/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/@ngrx/store.js");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_post_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/post/post.component */
    "./src/app/components/post/post.component.ts");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/components/search/search.component.ts");
    /* harmony import */


    var _store_app_states__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./store/app.states */
    "./src/app/store/app.states.ts");
    /* harmony import */


    var _store_auth_auth_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./store/auth/auth.effects */
    "./src/app/store/auth/auth.effects.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/token.interceptor */
    "./src/app/services/token.interceptor.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _components_muro_muro_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/muro/muro.component */
    "./src/app/components/muro/muro.component.ts");
    /* harmony import */


    var _components_follow_follow_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/follow/follow.component */
    "./src/app/components/follow/follow.component.ts");
    /* harmony import */


    var _components_cookies_cookies_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/cookies/cookies.component */
    "./src/app/components/cookies/cookies.component.ts");
    /*const cookieConfig: NgcCookieConsentConfig =
    {
      "cookie": {
        "domain": "random.random"
      },
      "position": "bottom",
      "theme": "classic",
      "palette": {
        "popup": {
          "background": "#000000",
          "text": "#ffffff"
        },
        "button": {
          "background": "#f1d600",
          "text": "#000000"
        }
      },
      "type": "info",
      "content": {
        "message": "This website uses cookies to ensure you get the best experience on our website.",
        "dismiss": "Got it!",
        "deny": "Refuse cookies",
        "link": "Learn more",
        "href": "#",
        "policy": "Cookie Policy"
      }
    }*/


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_17__["PostComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"], _components_muro_muro_component__WEBPACK_IMPORTED_MODULE_26__["MuroComponent"], _components_follow_follow_component__WEBPACK_IMPORTED_MODULE_27__["FollowComponent"], _components_cookies_cookies_component__WEBPACK_IMPORTED_MODULE_28__["CookiesComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([_store_auth_auth_effects__WEBPACK_IMPORTED_MODULE_20__["AuthEffects"]]), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store_app_states__WEBPACK_IMPORTED_MODULE_19__["reducers"], {}), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({
        maxAge: 10
      }), angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
        timeOut: 2000,
        positionClass: 'toast-top-right'
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]],
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_24__["TokenInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_24__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/cookies/cookies.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/cookies/cookies.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCookiesCookiesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29va2llcy9jb29raWVzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/cookies/cookies.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/cookies/cookies.component.ts ***!
    \*********************************************************/

  /*! exports provided: CookiesComponent */

  /***/
  function srcAppComponentsCookiesCookiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CookiesComponent", function () {
      return CookiesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/@ngrx/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_cookies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/cookies.service */
    "./src/app/services/cookies.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CookiesComponent =
    /*#__PURE__*/
    function () {
      function CookiesComponent(store, CookiesService, sanitizer, activatedRoute) {
        var _this2 = this;

        _classCallCheck(this, CookiesComponent);

        this.store = store;
        this.CookiesService = CookiesService;
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.myContent = "Cargando";
        activatedRoute.params.subscribe(function (val) {
          _this2.params = _this2.activatedRoute.snapshot.params;

          _this2.subs.add(_this2.store.subscribe(function (x) {
            return _this2.state = x;
          }));

          _this2.subs.add(_this2.CookiesService.getPage(_this2.params).subscribe(function (x) {
            _this2.myContent = _this2.sanitizer.bypassSecurityTrustHtml(x.body);
          }));
        });
      }

      _createClass(CookiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CookiesComponent;
    }();

    CookiesComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: src_app_services_cookies_service__WEBPACK_IMPORTED_MODULE_4__["CookiesService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }];
    };

    CookiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cookies',
      template: '<div class="Site"><div class="Site-content"[innerHTML]="myContent"></div></div>',
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cookies.component.css */
      "./src/app/components/cookies/cookies.component.css")).default]
    })], CookiesComponent);
    /***/
  },

  /***/
  "./src/app/components/follow/follow.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/follow/follow.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFollowFollowComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media (max-width:991px){\r\n    .celdaResponsive{\r\n        border:none!important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb2xsb3cvZm9sbG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb2xsb3cvZm9sbG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDo5OTFweCl7XHJcbiAgICAuY2VsZGFSZXNwb25zaXZle1xyXG4gICAgICAgIGJvcmRlcjpub25lIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/follow/follow.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/follow/follow.component.ts ***!
    \*******************************************************/

  /*! exports provided: FollowComponent */

  /***/
  function srcAppComponentsFollowFollowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowComponent", function () {
      return FollowComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_accesodb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/accesodb.service */
    "./src/app/services/accesodb.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/@ngrx/store.js");
    /* harmony import */


    var src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/store/auth/auth.actions */
    "./src/app/store/auth/auth.actions.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var FollowComponent =
    /*#__PURE__*/
    function () {
      function FollowComponent(db, store) {
        _classCallCheck(this, FollowComponent);

        this.db = db;
        this.store = store;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
      }

      _createClass(FollowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.subs.add(this.store.subscribe(function (x) {
            return _this3.state = x;
          }));
          this.follow = this.comprobar(this.user._id);
        }
      }, {
        key: "followUser",
        value: function followUser(id) {
          var _this4 = this;

          var pay = [];
          this.subs.add(this.db.setFollow(id).subscribe(function (x) {
            _this4.follow = false;

            _this4.subs.add(_this4.db.getProfile().subscribe(function (x) {
              pay = x.follows;
              var payload = {
                follows: pay
              };

              _this4.store.dispatch(new src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["Follows"](payload));
            }));
          }));
        }
      }, {
        key: "unfollowUser",
        value: function unfollowUser(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this5 = this;

            var pay;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    pay = [];
                    this.subs.add(this.db.unsetFollow(id).subscribe(function (x) {
                      _this5.follow = true;

                      _this5.subs.add(_this5.db.getProfile().subscribe(function (x) {
                        pay = x.follows;
                        var payload = {
                          follows: pay
                        };

                        _this5.store.dispatch(new src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["Follows"](payload));
                      }));
                    }));

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "comprobar",
        value: function comprobar(id) {
          var result = true;

          if (this.state.auth.user != undefined) {
            this.state.auth.user.follows.forEach(function (element) {
              if (element._id == id) {
                result = false;
                return 0;
              }
            });
            return result;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }]);

      return FollowComponent;
    }();

    FollowComponent.ctorParameters = function () {
      return [{
        type: src_app_services_accesodb_service__WEBPACK_IMPORTED_MODULE_2__["AccesodbService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('user')], FollowComponent.prototype, "user", void 0);
    FollowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tr [app-follow]',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./follow.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow/follow.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./follow.component.css */
      "./src/app/components/follow/follow.component.css")).default]
    })], FollowComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a{\r\n    color:'#0000FF';\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY29sb3I6JyMwMDAwRkYnO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(router) {
        _classCallCheck(this, FooterComponent);

        this.router = router;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "gotoCookies",
        value: function gotoCookies() {
          this.router.navigateByUrl('/cms/cookies');
        }
      }, {
        key: "gotoWarning",
        value: function gotoWarning() {
          this.router.navigateByUrl('/cms/warning');
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/header/header.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".noHidden {\r\n    display:initial;\r\n}\r\n\r\n.color-white {\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.button-style {\r\n    border: 1px solid white;\r\n    border-radius: 5px;\r\n}\r\n\r\n@media (min-width:992px) {\r\n    .menuHead {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width:991px) {\r\n\r\n    .marginResponsive {\r\n        margin-top:10px;\r\n        margin-bottom:10px;\r\n    }\r\n    .menuBotones {\r\n        display:none;\r\n        \r\n    }\r\n\r\n    .container {\r\n        padding-left: 1rem!important;\r\n        padding-right: 1rem!important;\r\n        width: 100%;\r\n    }\r\n\r\n    .noHidden {\r\n        display: initial;\r\n        position: absolute;\r\n        right:0;\r\n        top:50px;\r\n        min-width:120px!important;\r\n        z-index:10;\r\n        background-color: #336600;\r\n        color: white;\r\n        border: 1px solid black;\r\n    }\r\n    .menuHead {\r\n        text-align: right;\r\n        margin-bottom:10px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7O0lBRWhCOztJQUVBO1FBQ0ksNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3QixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxRQUFRO1FBQ1IseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9IaWRkZW4ge1xyXG4gICAgZGlzcGxheTppbml0aWFsO1xyXG59XHJcblxyXG4uY29sb3Itd2hpdGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5idXR0b24tc3R5bGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjk5MnB4KSB7XHJcbiAgICAubWVudUhlYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KSB7XHJcblxyXG4gICAgLm1hcmdpblJlc3BvbnNpdmUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudUJvdG9uZXMge1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW0haW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0haW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5ub0hpZGRlbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICB0b3A6NTBweDtcclxuICAgICAgICBtaW4td2lkdGg6MTIwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIHotaW5kZXg6MTA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNjYwMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICAubWVudUhlYWQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/@ngrx/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_accesodb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/accesodb.service */
    "./src/app/services/accesodb.service.ts");
    /* harmony import */


    var src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/store/auth/auth.actions */
    "./src/app/store/auth/auth.actions.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(store, router, db) {
        _classCallCheck(this, HeaderComponent);

        this.store = store;
        this.router = router;
        this.db = db;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.menuAux = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.options = [{
            name: "Username",
            value: "username"
          }, {
            name: "Email",
            value: "email"
          }, {
            name: "Apellidos",
            value: "surname"
          }];
          this.subs.add(this.store.subscribe(function (x) {
            return _this6.state = x;
          }));
          this.headForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            select: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('name', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
        }
      }, {
        key: "gotoMuro",
        value: function gotoMuro() {
          this.router.navigateByUrl('/muro/self');
        }
      }, {
        key: "gotoHome",
        value: function gotoHome() {
          this.router.navigateByUrl('/');
        }
      }, {
        key: "search",
        value: function search() {
          this.router.navigateByUrl('/users/' + this.headForm.value.select + '/' + this.headForm.value.search);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.db.logout();
          this.store.dispatch(new src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__["LogOut"]());
          this.router.navigateByUrl('/login');
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.menuAux = !this.menuAux;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_accesodb_service__WEBPACK_IMPORTED_MODULE_6__["AccesodbService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/components/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " /*.container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 25%;\r\n    grid-template-rows: 2fr;\r\n    grid-column-gap: 20px;\r\n    grid-row-gap: 20px;\r\n    justify-items: stretch;\r\n    align-items: stretch;\r\n    margin-top: 20px;\r\n }*/\r\n\r\n .blogShort{ border-bottom:1px solid #ddd;}\r\n\r\n .textCenter {\r\n    text-align: center;\r\n }\r\n\r\n .justify-content-center {\r\n    display: -webkit-box !important;\r\n    display: flex !important;\r\n    -webkit-box-pack: center !important;\r\n            justify-content: center !important;\r\n}\r\n\r\n .alinear {\r\n   margin-top: 42px;\r\n}\r\n\r\n .position {\r\n   position:fixed;\r\n   top: 17%;\r\n   right:5px;\r\n}\r\n\r\n .sizeImage {\r\n   width:200px;\r\n   height: auto;\r\n}\r\n\r\n @media (max-width:991px){\r\n   .container {\r\n      width:100%;\r\n      padding-left: 1rem;\r\n      padding-right: 1rem;\r\n   }\r\n\r\n   .position {\r\n      position: relative;\r\n   }\r\n   \r\n   .sizeImage{\r\n      width: 100px;\r\n      max-width:100px;\r\n      height: auto;\r\n   }\r\n   /*.noHidden {\r\n        display: inline-block;\r\n        position: absolute;\r\n        right:0;\r\n        top:200px;\r\n        min-width:200px!important;\r\n        z-index:10;\r\n        background-color: white;\r\n        color: black;\r\n        border: 1px solid black;\r\n    }*/\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQzs7Ozs7Ozs7O0dBU0U7O0NBRUYsWUFBWSw0QkFBNEIsQ0FBQzs7Q0FFekM7SUFDRyxrQkFBa0I7Q0FDckI7O0NBQ0E7SUFDRywrQkFBd0I7SUFBeEIsd0JBQXdCO0lBQ3hCLG1DQUFrQztZQUFsQyxrQ0FBa0M7QUFDdEM7O0NBRUE7R0FDRyxnQkFBZ0I7QUFDbkI7O0NBRUE7R0FDRyxjQUFjO0dBQ2QsUUFBUTtHQUNSLFNBQVM7QUFDWjs7Q0FDQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0FBQ2Y7O0NBRUE7R0FDRztNQUNHLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsbUJBQW1CO0dBQ3RCOztHQUVBO01BQ0csa0JBQWtCO0dBQ3JCOztHQUVBO01BQ0csWUFBWTtNQUNaLGVBQWU7TUFDZixZQUFZO0dBQ2Y7R0FDQTs7Ozs7Ozs7OztNQVVHO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjUlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnI7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICBncmlkLXJvdy1nYXA6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gfSovXHJcblxyXG4gLmJsb2dTaG9ydHsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDt9XHJcblxyXG4gLnRleHRDZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFsaW5lYXIge1xyXG4gICBtYXJnaW4tdG9wOiA0MnB4O1xyXG59XHJcblxyXG4ucG9zaXRpb24ge1xyXG4gICBwb3NpdGlvbjpmaXhlZDtcclxuICAgdG9wOiAxNyU7XHJcbiAgIHJpZ2h0OjVweDtcclxufVxyXG4uc2l6ZUltYWdlIHtcclxuICAgd2lkdGg6MjAwcHg7XHJcbiAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAuY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICB9XHJcblxyXG4gICAucG9zaXRpb24ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5zaXplSW1hZ2V7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgbWF4LXdpZHRoOjEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgIH1cclxuICAgLyoubm9IaWRkZW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICB0b3A6MjAwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOjIwMHB4IWltcG9ydGFudDtcclxuICAgICAgICB6LWluZGV4OjEwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIH0qL1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/@ngrx/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services_accesodb_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/accesodb.service */
    "./src/app/services/accesodb.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(store, router, http, AuthService, modalService, bd, activatedRoute) {
        _classCallCheck(this, HomeComponent);

        this.store = store;
        this.router = router;
        this.http = http;
        this.AuthService = AuthService;
        this.modalService = modalService;
        this.bd = bd;
        this.activatedRoute = activatedRoute;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.lista = [];
        this.listas = [];
        this.listasPost = [];
        this.listaPost = [];
        this.menuAux = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.page = 1;
          this.pageSize = 8;
          this.page2 = 1;
          this.pageSize2 = 5;
          this.page3 = 1;
          this.pageSize3 = 1;
          this.listaPost = [];
          this.subs.add(this.store.subscribe(function (x) {
            _this7.state = x;
          }));
          this.subs.add(this.AuthService.getFollowers().subscribe(function (x) {
            _this7.lista = x;
          }));
          this.subs.add(this.bd.getFollowedPosts().subscribe(function (x) {
            _this7.posts = x;

            _this7.posts.forEach(function (y) {
              var a = _this7.lista.find(function (x) {
                return x._id == y.creator_id && x.email != _this7.state.auth.user.email;
              });

              if (a != undefined) {
                y.creator = a.email;

                _this7.listaPost.push(y);
              }
            });
          }));
          this.pocos = false;
        }
      }, {
        key: "open",
        value: function open(content, id) {
          this.listasPost = [];
          this.detalles = this.lista.find(function (element) {
            return element._id == id;
          });
          this.listasPost = this.posts.filter(function (element) {
            return element.creator_id == id;
          });
          this.modalService.open(content, {
            size: 'lg'
          });
        }
      }, {
        key: "swap",
        value: function swap() {
          this.pocos = !this.pocos;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }, {
        key: "openUsers",
        value: function openUsers(content) {
          this.modalService.open(content, {
            size: 'lg'
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]
      }, {
        type: src_app_services_accesodb_service__WEBPACK_IMPORTED_MODULE_8__["AccesodbService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".justify-content-center {\r\n    display: -webkit-box !important;\r\n    display: flex !important;\r\n    -webkit-box-pack: center !important;\r\n            justify-content: center !important;\r\n}\r\n\r\n.color-green{\r\n    background-color: #ecffe6;\r\n}\r\n\r\n.imagen {\r\n    margin: 0 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQXdCO0lBQXhCLHdCQUF3QjtJQUN4QixtQ0FBa0M7WUFBbEMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2xvci1ncmVlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2ZmZTY7XHJcbn1cclxuXHJcbi5pbWFnZW4ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/@ngrx/store.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(store, router, authService, toastr, modalService) {
        _classCallCheck(this, LoginComponent);

        this.store = store;
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.modalService = modalService;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.subs.add(this.store.subscribe(function (o) {
            _this8.state = o;
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this9 = this;

          var payload = {
            email: this.user.email,
            password: this.user.password,
            follows: this.user.follows
          };
          var c;
          this.authService.logIn(payload.email, payload.password);
          setTimeout(function (x) {
            c = _this9.state.auth.isAuthenticated;

            if (c) {
              _this9.router.navigateByUrl('/');
            } else {
              _this9.toastr.error('Usuario o contraseña incorrectos');
            }
          }, 1000);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/muro/muro.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/muro/muro.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMuroMuroComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".justify-content-center {\r\n    display: -webkit-box !important;\r\n    display: flex !important;\r\n    -webkit-box-pack: center !important;\r\n            justify-content: center !important;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  max-width: 300px;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\n.title {\r\n  color: grey;\r\n  font-size: 18px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  color: black;\r\n}\r\n\r\n@media (max-width:767px){\r\n    .iconSize {\r\n        font-size: 40px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tdXJvL211cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUF3QjtJQUF4Qix3QkFBd0I7SUFDeEIsbUNBQWtDO1lBQWxDLGtDQUFrQztBQUN0Qzs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBR0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXVyby9tdXJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVzdGlmeS1jb250ZW50LWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLmljb25TaXplIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/muro/muro.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/muro/muro.component.ts ***!
    \***************************************************/

  /*! exports provided: MuroComponent */

  /***/
  function srcAppComponentsMuroMuroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MuroComponent", function () {
      return MuroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/@ngrx/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_accesodb_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/accesodb.service */
    "./src/app/services/accesodb.service.ts");

    var MuroComponent =
    /*#__PURE__*/
    function () {
      function MuroComponent(store, router, http, modalService, accesodbService, activatedRoute) {
        _classCallCheck(this, MuroComponent);

        this.store = store;
        this.router = router;
        this.http = http;
        this.modalService = modalService;
        this.accesodbService = accesodbService;
        this.activatedRoute = activatedRoute;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.newP = false;
      }

      _createClass(MuroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.params = this.activatedRoute.snapshot.params;
          this.page = 1;
          this.pageSize = 4;
          this.subs.add(this.store.subscribe(function (x) {
            return _this10.state = x;
          }));

          if (this.params.name == "self") {
            this.subs.add(this.http.get('http://localhost:3000/post/own').subscribe(function (x) {
              _this10.posts = x;
            }));
            this.subs.add(this.http.get('http://localhost:3000/users/me').subscribe(function (x) {
              _this10.user = x;
            }));
            this.newP = true;
          } else {
            this.subs.add(this.http.get('http://localhost:3000/post/own').subscribe(function (x) {
              _this10.posts = x;
            }));
            this.subs.add(this.http.get('http://localhost:3000/users/me').subscribe(function (x) {
              _this10.user = x;
            }));
            this.newP = false;
          }

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
          });
        }
      }, {
        key: "newPost",
        value: function newPost(content) {
          this.modalService.open(content);
        }
      }, {
        key: "profile",
        value: function profile(content) {
          this.modalService.open(content);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this11 = this;

            var a;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.accesodbService.postPost(this.form.value).subscribe(function (x) {
                      a = x;

                      _this11.posts.push(a);
                    });

                  case 2:
                    this.form.reset();

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }]);

      return MuroComponent;
    }();

    MuroComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
      }, {
        type: src_app_services_accesodb_service__WEBPACK_IMPORTED_MODULE_8__["AccesodbService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    MuroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-muro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./muro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/muro/muro.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./muro.component.css */
      "./src/app/components/muro/muro.component.css")).default]
    })], MuroComponent);
    /***/
  },

  /***/
  "./src/app/components/post/post.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/post/post.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPostPostComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footerPost {\r\n    text-align: center;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.footerDetails {\r\n    text-align: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n.card-header {\r\n    background-color: #66ff33;\r\n}\r\n\r\n.minHeight {\r\n    min-height:400px;\r\n}\r\n\r\n.card-footer {\r\n    background-color: #c6ffb3;\r\n}\r\n\r\nngb-rating:focus {\r\n     outline:0 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtLQUNLLG9CQUFvQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyUG9zdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5mb290ZXJEZXRhaWxzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2ZmYzMztcclxufVxyXG5cclxuLm1pbkhlaWdodCB7XHJcbiAgICBtaW4taGVpZ2h0OjQwMHB4O1xyXG59XHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZmZmIzO1xyXG59XHJcbm5nYi1yYXRpbmc6Zm9jdXMge1xyXG4gICAgIG91dGxpbmU6MCAhaW1wb3J0YW50O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/post/post.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/post/post.component.ts ***!
    \***************************************************/

  /*! exports provided: PostComponent */

  /***/
  function srcAppComponentsPostPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/@ngrx/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_accesodb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/accesodb.service */
    "./src/app/services/accesodb.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var PostComponent =
    /*#__PURE__*/
    function () {
      function PostComponent(store, db, router, modalService, toastr) {
        _classCallCheck(this, PostComponent);

        this.store = store;
        this.db = db;
        this.router = router;
        this.modalService = modalService;
        this.toastr = toastr;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.read = true;
      }

      _createClass(PostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.page = 1;
          this.pageSize = 5;
          this.subs.add(this.db.getOnePost(this.post._id).subscribe(function (x) {
            _this12.post = x;
            _this12.media = _this12.mean(x.rating);

            if (isNaN(_this12.media)) {
              _this12.media = 0;
            }
          }));
          this.subs.add(this.db.getProfile().subscribe(function (x) {
            return _this12.user = x;
          }));
          this.subs.add(this.store.subscribe(function (x) {
            return _this12.state = x;
          }));
          this.subs.add(this.db.getUsers().subscribe(function (x) {
            x.forEach(function (element) {
              if (element._id == _this12.post.creator_id) {
                _this12.postCreator = element.email;
                return 0;
              }
            });
          }));
          this.subs.add(this.db.getRatings().subscribe(function (x) {
            x.forEach(function (element) {
              if (_this12.user) {
                if (element.post_id == _this12.post._id && element.user_id == _this12.user._id) {
                  _this12.rat = element.rating;
                  return 0;
                }
              }
            });
            _this12.read = false;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }, {
        key: "sendRating",
        value: function sendRating(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this13 = this;

            var payload, a;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    payload = {
                      post: this.post._id,
                      rating: event
                    };
                    _context3.next = 3;
                    return this.subs.add(this.db.setRatings(payload).subscribe(function (x) {
                      _this13.post = x;
                      _this13.media = _this13.mean(x.rating);
                    }));

                  case 3:
                    a = _context3.sent;

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "openDetails",
        value: function openDetails(content) {
          var value = this.post.rating;
          this.modalService.open(content, {
            size: 'xl'
          });
        }
      }, {
        key: "openComment",
        value: function openComment(content) {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
          });
          this.modalService.open(content);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this14 = this;

          var comentario = {
            user_email: this.user.email,
            comment: this.form.value.comment
          };
          this.db.setComment({
            comment: this.form.value.comment,
            post: this.post._id
          }).subscribe(function (x) {
            _this14.post.comments.push(comentario);

            _this14.form.reset();

            _this14.toastr.success("Comentario añadido");
          });
        }
      }, {
        key: "mean",
        value: function mean(array) {
          var sum = 0;
          array.forEach(function (x) {
            sum += parseInt(x.rating);
          });
          return sum / array.length;
        }
      }, {
        key: "checkComments",
        value: function checkComments() {
          if (this.post.comments.length > 0) {
            return true;
          } else return false;
        }
      }]);

      return PostComponent;
    }();

    PostComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: src_app_services_accesodb_service__WEBPACK_IMPORTED_MODULE_4__["AccesodbService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('post')], PostComponent.prototype, "post", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post.component.css */
      "./src/app/components/post/post.component.css")).default]
    })], PostComponent);
    /***/
  },

  /***/
  "./src/app/components/register/register.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/register/register.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".color-green{\r\n    background-color: #ecffe6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLWdyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZmZlNjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/@ngrx/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(store, router, AuthService, toastr) {
        _classCallCheck(this, RegisterComponent);

        this.store = store;
        this.router = router;
        this.AuthService = AuthService;
        this.toastr = toastr;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.subs.add(this.store.subscribe(function (o) {
            _this15.state = o;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this16 = this;

          var payload = {
            username: this.user.username,
            email: this.user.email,
            password: this.user.password,
            name: this.user.name,
            surname: this.user.surname
          };
          this.subs.add(this.AuthService.signUp(payload).subscribe(function (x) {
            if (x.username != undefined) {
              _this16.router.navigateByUrl('/login');
            } else {
              _this16.toastr.error("Ha ocurrido un error (Nombre de usuario o e-mail en uso)");

              _this16.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
            }
          }));
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/components/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/components/search/search.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/search/search.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSearchSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n    min-height: 100%;\r\n}\r\n\r\n\r\n.justify-content-center {\r\n    display: -webkit-box !important;\r\n    display: flex !important;\r\n    -webkit-box-pack: center !important;\r\n            justify-content: center !important;\r\n}\r\n\r\n\r\n@media (max-width:991px){\r\n    .filaResponsive {\r\n        border:1px solid lightskyblue!important;\r\n        border-radius: 10px;\r\n        margin-bottom: 10px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksK0JBQXdCO0lBQXhCLHdCQUF3QjtJQUN4QixtQ0FBa0M7WUFBbEMsa0NBQWtDO0FBQ3RDOzs7QUFFQTtJQUNJO1FBQ0ksdUNBQXVDO1FBQ3ZDLG1CQUFtQjtRQUNuQixtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KXtcclxuICAgIC5maWxhUmVzcG9uc2l2ZSB7XHJcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBsaWdodHNreWJsdWUhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/search/search.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/search/search.component.ts ***!
    \*******************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/@ngrx/store.js");
    /* harmony import */


    var src_app_services_accesodb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/accesodb.service */
    "./src/app/services/accesodb.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent(store, db, activatedRoute) {
        _classCallCheck(this, SearchComponent);

        this.store = store;
        this.db = db;
        this.activatedRoute = activatedRoute;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.page = 1;
          this.pageSize = 10;
          this.subs.add(this.store.subscribe(function (x) {
            return _this17.state = x;
          }));
          this.params = this.activatedRoute.snapshot.params;
          this.subs.add(this.db.getUsersByFilter(this.params.field, this.params.value).subscribe(function (x) {
            _this17.users = x;
            _this17.users = _this17.users.filter(function (x) {
              return x.email != _this17.state.auth.user.email;
            });
            _this17.collectionSize = _this17.users.length;
          }));
          this.subs.add(this.subs.add(this.db.getProfile().subscribe(function (x) {
            _this17.user = x;
          })));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: src_app_services_accesodb_service__WEBPACK_IMPORTED_MODULE_3__["AccesodbService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.css */
      "./src/app/components/search/search.component.css")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/services/accesodb.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/accesodb.service.ts ***!
    \**********************************************/

  /*! exports provided: AccesodbService */

  /***/
  function srcAppServicesAccesodbServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccesodbService", function () {
      return AccesodbService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AccesodbService =
    /*#__PURE__*/
    function () {
      function AccesodbService(http) {
        _classCallCheck(this, AccesodbService);

        this.http = http;
      }

      _createClass(AccesodbService, [{
        key: "postPost",
        value: function postPost(payload) {
          return this.http.post('http://localhost:3000/post', payload);
        }
      }, {
        key: "getUsersByFilter",
        value: function getUsersByFilter(field, value) {
          return this.http.get('http://localhost:3000/users/search/' + field + "/" + value);
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          return this.http.get('http://localhost:3000/users/me');
        }
      }, {
        key: "setFollow",
        value: function setFollow(id) {
          var payload = {
            _id: id
          };
          return this.http.post('http://localhost:3000/users/follow', payload);
        }
      }, {
        key: "unsetFollow",
        value: function unsetFollow(id) {
          var payload = {
            _id: id
          };
          return this.http.post('http://localhost:3000/users/unfollow', payload);
        }
      }, {
        key: "getPosts",
        value: function getPosts() {
          return this.http.get('http://localhost:3000/post');
        }
      }, {
        key: "getOnePost",
        value: function getOnePost(id) {
          var payload = {
            post: id
          };
          return this.http.post('http://localhost:3000/post/single', payload);
        }
      }, {
        key: "getFollowedPosts",
        value: function getFollowedPosts() {
          return this.http.get('http://localhost:3000/post/followed');
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.http.get('http://localhost:3000/users');
        }
      }, {
        key: "logout",
        value: function logout() {
          return this.http.post('http://localhost:3000/users/me/logoutall', null);
        }
      }, {
        key: "getRatings",
        value: function getRatings() {
          return this.http.get('http://localhost:3000/rating');
        }
      }, {
        key: "setRatings",
        value: function setRatings(payload) {
          return this.http.post('http://localhost:3000/rating', payload);
        }
      }, {
        key: "setComment",
        value: function setComment(payload) {
          return this.http.post('http://localhost:3000/post/comment', payload);
        }
      }]);

      return AccesodbService;
    }();

    AccesodbService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AccesodbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AccesodbService);
    /***/
  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/@ngrx/store.js");

    var AuthGuardService =
    /*#__PURE__*/
    function () {
      function AuthGuardService(auth, router, store) {
        _classCallCheck(this, AuthGuardService);

        this.auth = auth;
        this.router = router;
        this.store = store;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          var _this18 = this;

          this.store.subscribe(function (o) {
            return _this18.state = o;
          });
          this.state;

          if (this.state.auth.isAuthenticated === true && this.auth.getToken() != null) {
            return true;
          } else this.router.navigateByUrl('/login');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/@ngrx/store.js");
    /* harmony import */


    var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../store/auth/auth.actions */
    "./src/app/store/auth/auth.actions.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, store) {
        var _this19 = this;

        _classCallCheck(this, AuthService);

        this.http = http;
        this.store = store;
        this.BASE_URL = 'http://localhost:3000';
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.subs.add(store.subscribe(function (o) {
          return _this19.state = o.auth;
        }));
      }

      _createClass(AuthService, [{
        key: "getToken",
        value: function getToken() {
          if (this.state.user != null) {
            return this.state.user.token;
          }

          if (localStorage.getItem('token')) {
            return localStorage.getItem('token');
          }

          return null;
        }
      }, {
        key: "logIn",
        value: function logIn(email, password) {
          var _this20 = this;

          var c;
          this.http.post('http://localhost:3000/users/login', {
            'email': email,
            'password': password
          }).subscribe(function (x) {
            c = x;

            if (c != {}) {
              c.user.pw = "";
              c.user.token = c.token;

              _this20.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_5__["LogInSuccess"](c.user));
            } else {
              var payload;

              _this20.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_5__["LogInFailure"](payload));
            }
          });
        }
      }, {
        key: "signUp",
        value: function signUp(payload) {
          /*const body = {
            name: name,
            username: username,
            email: email,
            password: password
          }*/
          var url = "http://localhost:3000/users";
          return this.http.post(url, payload);
        }
      }, {
        key: "getFollowers",
        value: function getFollowers() {
          return this.http.get('http://localhost:3000/users/followed');
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthService);
    /***/
  },

  /***/
  "./src/app/services/cookies.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/cookies.service.ts ***!
    \*********************************************/

  /*! exports provided: CookiesService */

  /***/
  function srcAppServicesCookiesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CookiesService", function () {
      return CookiesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CookiesService =
    /*#__PURE__*/
    function () {
      function CookiesService(http) {
        _classCallCheck(this, CookiesService);

        this.http = http;
      }

      _createClass(CookiesService, [{
        key: "postPage",
        value: function postPage() {}
      }, {
        key: "getPage",
        value: function getPage(params) {
          return this.http.get('http://localhost:3000/page/' + params.page);
        }
      }]);

      return CookiesService;
    }();

    CookiesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CookiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CookiesService);
    /***/
  },

  /***/
  "./src/app/services/token.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/token.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: TokenInterceptor, ErrorInterceptor */

  /***/
  function srcAppServicesTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/Observable */
    "./node_modules/rxjs-compat/_esm2015/Observable.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TokenInterceptor =
    /*#__PURE__*/
    function () {
      function TokenInterceptor(injector) {
        _classCallCheck(this, TokenInterceptor);

        this.injector = injector;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          this.authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]);
          var token = this.authService.getToken();

          if (request.url.includes('users/login')) {
            return next.handle(request);
          }

          request = request.clone({
            setHeaders: {
              'Authorization': "".concat(token),
              'Content-Type': 'application/json'
            }
          });
          return next.handle(request);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptor);

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(router) {
        _classCallCheck(this, ErrorInterceptor);

        this.router = router;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this21 = this;

          return next.handle(request).catch(function (response) {
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && response.status === 401) {
              localStorage.removeItem('token');

              _this21.router.navigateByUrl('/log-in');
            }

            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(response);
          });
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/store/app.states.ts":
  /*!*************************************!*\
    !*** ./src/app/store/app.states.ts ***!
    \*************************************/

  /*! exports provided: reducers, selectAuthState */

  /***/
  function srcAppStoreAppStatesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAuthState", function () {
      return selectAuthState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth/auth.reducer */
    "./src/app/store/auth/auth.reducer.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/@ngrx/store.js");

    var reducers = {
      auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
    };
    var selectAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('auth');
    /***/
  },

  /***/
  "./src/app/store/auth/auth.actions.ts":
  /*!********************************************!*\
    !*** ./src/app/store/auth/auth.actions.ts ***!
    \********************************************/

  /*! exports provided: AuthActionTypes, LogIn, LogInSuccess, LogInFailure, SignUp, SignUpSuccess, SignUpFailure, Follows, Cookies, LogOut */

  /***/
  function srcAppStoreAuthAuthActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function () {
      return AuthActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogIn", function () {
      return LogIn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogInSuccess", function () {
      return LogInSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogInFailure", function () {
      return LogInFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUp", function () {
      return SignUp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpSuccess", function () {
      return SignUpSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpFailure", function () {
      return SignUpFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Follows", function () {
      return Follows;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cookies", function () {
      return Cookies;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogOut", function () {
      return LogOut;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AuthActionTypes;

    (function (AuthActionTypes) {
      AuthActionTypes["LOGIN"] = "[Auth] Login";
      AuthActionTypes["LOGIN_SUCCESS"] = "[Auth] Login Success";
      AuthActionTypes["LOGIN_FAILURE"] = "[Auth] Login Failure";
      AuthActionTypes["SIGNUP"] = "[Auth] Signup";
      AuthActionTypes["SIGNUP_SUCCESS"] = "[Auth] Signup Success";
      AuthActionTypes["SIGNUP_FAILURE"] = "[Auth] Signup Failure";
      AuthActionTypes["LOGOUT"] = "[Auth] Logout";
      AuthActionTypes["FOLLOWS"] = "[Auth] Update Follows";
      AuthActionTypes["COOKIES"] = "[Auth] Update Cookie Policy";
    })(AuthActionTypes || (AuthActionTypes = {}));

    var LogIn = function LogIn(payload) {
      _classCallCheck(this, LogIn);

      this.payload = payload;
      this.type = AuthActionTypes.LOGIN;
    };

    var LogInSuccess = function LogInSuccess(payload) {
      _classCallCheck(this, LogInSuccess);

      this.payload = payload;
      this.type = AuthActionTypes.LOGIN_SUCCESS;
    };

    var LogInFailure = function LogInFailure(payload) {
      _classCallCheck(this, LogInFailure);

      this.payload = payload;
      this.type = AuthActionTypes.LOGIN_FAILURE;
    };

    var SignUp = function SignUp(payload) {
      _classCallCheck(this, SignUp);

      this.payload = payload;
      this.type = AuthActionTypes.SIGNUP;
    };

    var SignUpSuccess = function SignUpSuccess(payload) {
      _classCallCheck(this, SignUpSuccess);

      this.payload = payload;
      this.type = AuthActionTypes.SIGNUP_SUCCESS;
    };

    var SignUpFailure = function SignUpFailure(payload) {
      _classCallCheck(this, SignUpFailure);

      this.payload = payload;
      this.type = AuthActionTypes.SIGNUP_FAILURE;
    };

    var Follows = function Follows(payload) {
      _classCallCheck(this, Follows);

      this.payload = payload;
      this.type = AuthActionTypes.FOLLOWS;
    };

    var Cookies = function Cookies(payload) {
      _classCallCheck(this, Cookies);

      this.payload = payload;
      this.type = AuthActionTypes.COOKIES;
    };

    var LogOut = function LogOut() {
      _classCallCheck(this, LogOut);

      this.type = AuthActionTypes.LOGOUT;
    };
    /***/

  },

  /***/
  "./src/app/store/auth/auth.effects.ts":
  /*!********************************************!*\
    !*** ./src/app/store/auth/auth.effects.ts ***!
    \********************************************/

  /*! exports provided: AuthEffects */

  /***/
  function srcAppStoreAuthAuthEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthEffects", function () {
      return AuthEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/@ngrx/effects.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/observable/of */
    "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/add/operator/switchMap */
    "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var rxjs_Rx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/Rx */
    "./node_modules/rxjs-compat/_esm2015/Rx.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _auth_auth_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../auth/auth.actions */
    "./src/app/store/auth/auth.actions.ts");

    var AuthEffects = function AuthEffects(actions, authService, router) {
      var _this22 = this;

      _classCallCheck(this, AuthEffects);

      this.actions = actions;
      this.authService = authService;
      this.router = router; // effects go here

      /*@Effect()
      LogIn: Observable<any> = this.actions
          .ofType(AuthActionTypes.LOGIN)
          .map((action: LogIn) => action.payload)
          .switchMap(payload => {
              return this.authService.logIn(payload.email, payload.password)
                  .pipe(map((user: User) => {
                      localStorage.setItem('token', payload.token);
                      return new LogInSuccess({ token: payload.token, email: payload.user.email });
                  }))
                  .catch((error) => {
                      return Observable.of(new LogInFailure({ error: error }));
                  });
          });*/

      this.LogInSuccess = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_auth_auth_actions__WEBPACK_IMPORTED_MODULE_12__["AuthActionTypes"].LOGIN_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (user) {}));
      this.LogInFailure = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_auth_auth_actions__WEBPACK_IMPORTED_MODULE_12__["AuthActionTypes"].LOGIN_FAILURE));
      this.SignUp = this.actions.ofType(_auth_auth_actions__WEBPACK_IMPORTED_MODULE_12__["AuthActionTypes"].SIGNUP).map(function (action) {
        return action.payload;
      }).switchMap(function (payload) {
        return _this22.authService.signUp(payload).map(function (user) {
          return new _auth_auth_actions__WEBPACK_IMPORTED_MODULE_12__["SignUpSuccess"]({
            token: user.token,
            email: payload.email
          });
        }).catch(function (error) {
          return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].of(new _auth_auth_actions__WEBPACK_IMPORTED_MODULE_12__["SignUpFailure"]({
            error: error
          }));
        });
      });
      this.SignUpSuccess = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_auth_auth_actions__WEBPACK_IMPORTED_MODULE_12__["AuthActionTypes"].SIGNUP_SUCCESS));
      this.SignUpFailure = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_auth_auth_actions__WEBPACK_IMPORTED_MODULE_12__["AuthActionTypes"].SIGNUP_FAILURE));
      this.LogOut = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_auth_auth_actions__WEBPACK_IMPORTED_MODULE_12__["AuthActionTypes"].LOGOUT));
    };

    AuthEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
      dispatch: false
    })], AuthEffects.prototype, "LogInSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
      dispatch: false
    })], AuthEffects.prototype, "LogInFailure", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()], AuthEffects.prototype, "SignUp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
      dispatch: false
    })], AuthEffects.prototype, "SignUpSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
      dispatch: false
    })], AuthEffects.prototype, "SignUpFailure", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
      dispatch: false
    })], AuthEffects.prototype, "LogOut", void 0);
    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthEffects);
    /***/
  },

  /***/
  "./src/app/store/auth/auth.reducer.ts":
  /*!********************************************!*\
    !*** ./src/app/store/auth/auth.reducer.ts ***!
    \********************************************/

  /*! exports provided: initialState, reducer */

  /***/
  function srcAppStoreAuthAuthReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.actions */
    "./src/app/store/auth/auth.actions.ts");

    var initialState = {
      isAuthenticated: false,
      user: null,
      errorMessage: null,
      cookies: false
    };

    function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGIN_SUCCESS:
          {
            return Object.assign({}, state, {
              isAuthenticated: true,
              user: {
                token: action.payload.token,
                email: action.payload.email,
                follows: action.payload.follows
              },
              errorMessage: null
            });
          }
          ;

        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGIN_FAILURE:
          {
            return Object.assign({}, state, {
              errorMessage: 'Incorrect email and/or password.'
            });
          }

        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].SIGNUP_SUCCESS:
          {
            return Object.assign({}, state, {
              isAuthenticated: true,
              user: {
                token: action.payload.token,
                email: action.payload.email
              },
              errorMessage: null
            });
          }

        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].SIGNUP_FAILURE:
          {
            return Object.assign({}, state, {
              errorMessage: 'That email/username is already in use.'
            });
          }

        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGOUT:
          {
            return Object.assign({}, state, {
              isAuthenticated: false,
              user: null,
              errorMessage: null,
              cookies: false
            });
          }

        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].FOLLOWS:
          {
            return Object.assign({}, state, {
              user: Object.assign({}, state.user, {
                follows: action.payload.follows
              })
            });
          }

        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].COOKIES:
          {
            return Object.assign({}, state, {
              cookies: action.payload.cookies
            });
          }

        default:
          return Object.assign({}, state);
      }
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\mean\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map