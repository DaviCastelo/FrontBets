"use strict";
exports.id = 104;
exports.ids = [104];
exports.modules = {

/***/ 6207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.30a29fc3.png","height":499,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAq0lEQVR42mOAgVfPTzKC6AcfzwJpHOD55wdMGIJfv94D6/j86Ybq1y+PfR59vGC6+dOG5h8vr3KjKLx+ZUfA+1fXfR+8OxnXfLV30////1nAEmeOLWcE0yeWST28uM2mbknN8rzl5aVgyVlRzAwhsUFgBTFR/g6e0T5LPXOD+v7fvgp2y9IpjYwM7r4uYAVWznY6fkHu+jArJ/WUIXyjZWeJ4OR6Mk2YjpAEAL05RRq2hFytAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 9104:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7553);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6207);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1301);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_fa__WEBPACK_IMPORTED_MODULE_4__, _services_api__WEBPACK_IMPORTED_MODULE_7__]);
([react_icons_fa__WEBPACK_IMPORTED_MODULE_4__, _services_api__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const NavBar = ()=>{
    const [searchVisible, setSearchVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const handleSearchClick = ()=>{
        setSearchVisible(!searchVisible);
    };
    const handleSearchChange = (e)=>{
        setSearchQuery(e.target.value);
    };
    const handleLogout = async ()=>{
        try {
            await _services_api__WEBPACK_IMPORTED_MODULE_7__/* ["default"].post */ .Z.post("/logout");
            router.push("/login");
        } catch (error) {
            console.error("Erro ao fazer logout", error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .HeaderContainer */ .gM, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .HeaderBox */ ._u, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Menu */ .v2, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .MenuItems */ .sd, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .MenuItem */ .sN, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        alt: "Logo",
                                        src: _public_logo_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                        width: 54,
                                        height: 54
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .MenuItem */ .sN, {
                                children: [
                                    searchVisible && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .SearchBox */ .Rj, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                placeholder: "Buscar...",
                                                value: searchQuery,
                                                onChange: handleSearchChange
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSearch, {
                                                onClick: handleSearchClick,
                                                style: {
                                                    cursor: "pointer",
                                                    color: "#aaa"
                                                }
                                            })
                                        ]
                                    }),
                                    !searchVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSearch, {
                                        onClick: handleSearchClick,
                                        style: {
                                            cursor: "pointer",
                                            color: "white"
                                        }
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .MenuItems */ .sd, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .MenuItem */ .sN, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/perfil",
                                    style: {
                                        textDecoration: "none"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .ProfileButton */ .BF, {
                                        children: [
                                            "Perfil",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaUserCircle, {})
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .MenuItem */ .sN, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSignOutAlt, {
                                    onClick: handleLogout,
                                    style: {
                                        cursor: "pointer",
                                        color: "white",
                                        marginRight: "2rem",
                                        padding: 0
                                    }
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BF": () => (/* binding */ ProfileButton),
/* harmony export */   "Rj": () => (/* binding */ SearchBox),
/* harmony export */   "_u": () => (/* binding */ HeaderBox),
/* harmony export */   "gM": () => (/* binding */ HeaderContainer),
/* harmony export */   "sN": () => (/* binding */ MenuItem),
/* harmony export */   "sd": () => (/* binding */ MenuItems),
/* harmony export */   "v2": () => (/* binding */ Menu)
/* harmony export */ });
/* unused harmony exports Logo, StyledLink */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeaderContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().header)`
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: center;
  background-color: #292929;
  top: 0;
  z-index: 100;

  @media screen and (max-width: 850px) {
    position: absolute;
  }
`;
const HeaderBox = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Menu = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Logo = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  width: 10rem;
  height: auto;
`;
const MenuItem = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem 0rem 0.5rem 1.5rem;
  color: #1e2952 !important;
  text-decoration: none;
  display: flex;
  
  
  @media screen and (max-width: 850px) {
    font-size: 1.4rem;
    font-weight: 700;
  }

  @media screen and (max-width: 600px) {
    padding: 0.2rem;
  }
`;
const StyledLink = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  text-decoration: none;
  color: #dedede;
  letter-spacing: 0rem;
  border-bottom: none;

  &:hover {
    border-bottom: 2px solid #006b2d;
  }
`;
const MenuItems = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ProfileButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;

  svg {
    font-size: 1.5rem;
    margin-left: 0.5rem;
  }
`;
const SearchBox = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  align-items: center;
  position: absolute;
  top: 1vh;
  background-color: #555555;
  border-radius: 4px;
  padding: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 101;

  input {
    border: none;
    outline: none;
    padding: 0.3rem;
    font-size: .7rem;
    width: 180px;  
    border-radius: 4px;
    padding-left: 2rem;  
    background-color: #555555;
    color: white;
  }

  input::placeholder {
    color: #aaa;
  }

  svg {
    position: absolute;
    left: 10px;  
    font-size: 1.1rem;
    cursor: pointer;
    color: #aaa;
  }
`;


/***/ }),

/***/ 9616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const apiUrl = process.env.REACT_APP_API_URL;
const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;