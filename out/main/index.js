(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./resources/icon.png?asset": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "static/image/icon.943b7a7d.png";

}),
"child_process": (function (module) {
module.exports = require("child_process");

}),
"electron": (function (module) {
module.exports = require("electron");

}),
"fs": (function (module) {
module.exports = require("fs");

}),
"fs/promises": (function (module) {
module.exports = require("fs/promises");

}),
"os": (function (module) {
module.exports = require("os");

}),
"path": (function (module) {
module.exports = require("path");

}),
"./node_modules/@electron-toolkit/utils/dist/index.mjs": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  electronApp: () => (electronApp),
  ipcHelper: () => (ipcHelper),
  is: () => (is),
  optimizer: () => (optimizer),
  platform: () => (platform)
});
/* ESM import */var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("electron");


const is = {
  dev: !electron__WEBPACK_IMPORTED_MODULE_0__.app.isPackaged
};

const platform = {
  isWindows: process.platform === "win32",
  isMacOS: process.platform === "darwin",
  isLinux: process.platform === "linux"
};

const electronApp = {
  setAppUserModelId(id) {
    if (platform.isWindows)
      electron__WEBPACK_IMPORTED_MODULE_0__.app.setAppUserModelId(is.dev ? process.execPath : id);
  },
  setAutoLaunch(auto) {
    if (platform.isLinux)
      return false;
    const isOpenAtLogin = () => {
      return electron__WEBPACK_IMPORTED_MODULE_0__.app.getLoginItemSettings().openAtLogin;
    };
    if (isOpenAtLogin() !== auto) {
      electron__WEBPACK_IMPORTED_MODULE_0__.app.setLoginItemSettings({
        openAtLogin: auto,
        path: process.execPath
      });
      return isOpenAtLogin() === auto;
    } else {
      return true;
    }
  },
  skipProxy() {
    return electron__WEBPACK_IMPORTED_MODULE_0__.session.defaultSession.setProxy({ mode: "direct" });
  }
};

let listeners = [];
let handlers = [];
const ipcHelper = {
  handle(channel, listener) {
    handlers.push(channel);
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.handle(channel, listener);
  },
  on(channel, listener) {
    listeners.push(channel);
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(channel, listener);
    return this;
  },
  removeAllListeners() {
    listeners.forEach((c) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.removeAllListeners(c));
    listeners = [];
    return this;
  },
  removeAllHandlers() {
    handlers.forEach((c) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.removeHandler(c));
    handlers = [];
  },
  removeListeners(channels) {
    channels.forEach((c) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.removeAllListeners(c));
    return this;
  },
  removeHandlers(channels) {
    channels.forEach((c) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.removeHandler(c));
  }
};

const optimizer = {
  watchWindowShortcuts(window, shortcutOptions) {
    if (!window)
      return;
    const { webContents } = window;
    const { escToCloseWindow = false, zoom = false } = shortcutOptions || {};
    webContents.on("before-input-event", (event, input) => {
      if (input.type === "keyDown") {
        if (!is.dev) {
          if (input.code === "KeyR" && (input.control || input.meta))
            event.preventDefault();
        } else {
          if (input.code === "F12") {
            if (webContents.isDevToolsOpened()) {
              webContents.closeDevTools();
            } else {
              webContents.openDevTools({ mode: "undocked" });
              console.log("Open dev tool...");
            }
          }
        }
        if (escToCloseWindow) {
          if (input.code === "Escape" && input.key !== "Process") {
            window.close();
            event.preventDefault();
          }
        }
        if (!zoom) {
          if (input.code === "Minus" && (input.control || input.meta))
            event.preventDefault();
          if (input.code === "Equal" && input.shift && (input.control || input.meta))
            event.preventDefault();
        }
      }
    });
  },
  registerFramelessWindowIpc() {
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on("win:invoke", (event, action) => {
      const win = electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow.fromWebContents(event.sender);
      if (win) {
        if (action === "show") {
          win.show();
        } else if (action === "showInactive") {
          win.showInactive();
        } else if (action === "min") {
          win.minimize();
        } else if (action === "max") {
          const isMaximized = win.isMaximized();
          if (isMaximized) {
            win.unmaximize();
          } else {
            win.maximize();
          }
        } else if (action === "close") {
          win.close();
        }
      }
    });
  }
};




}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "/";
})();
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _electron_toolkit_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@electron-toolkit/utils/dist/index.mjs");
/* ESM import */var child_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("child_process");
/* ESM import */var child_process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("electron");
/* ESM import */var electron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var fs_promises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fs/promises");
/* ESM import */var fs_promises__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_3__);
/* ESM import */var os__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("os");
/* ESM import */var os__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_4__);
/* ESM import */var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("path");
/* ESM import */var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* ESM import */var _resources_icon_png_asset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./resources/icon.png?asset");
/* ESM import */var fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("fs");
/* ESM import */var fs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_7__);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
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
                    op = [
                        0
                    ];
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
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}









//  import { Installer } from "@webos-tools/cli/APIs";
// console.log(Installer);
function createWindow() {
    /* 	Installer.list().then((res) => {
			console.log(res);
		});  */ // Create the browser window.
    var mainWindow = new electron__WEBPACK_IMPORTED_MODULE_2__.BrowserWindow(_object_spread_props(_object_spread({
        width: 1115,
        height: 850,
        show: false,
        autoHideMenuBar: true,
        frame: false
    }, process.platform === "linux" ? {
        icon: _resources_icon_png_asset__WEBPACK_IMPORTED_MODULE_6__
    } : {}), {
        webPreferences: {
            preload: (0,path__WEBPACK_IMPORTED_MODULE_5__.join)(__dirname, "../preload/index.js"),
            sandbox: false,
            contextIsolation: true
        },
        title: "FlashPack"
    }));
    // mainWindow.title = 'Electron-Rsbuild app'
    mainWindow.on("ready-to-show", function() {
        mainWindow.show();
    });
    mainWindow.webContents.setWindowOpenHandler(function(details) {
        electron__WEBPACK_IMPORTED_MODULE_2__.shell.openExternal(details.url);
        return {
            action: "deny"
        };
    });
    // HMR for renderer base on electron-rsbuild cli.
    // Load the remote URL for development or the local html file for production.
    if (_electron_toolkit_utils__WEBPACK_IMPORTED_MODULE_0__.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
        mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
    } else {
        mainWindow.loadFile((0,path__WEBPACK_IMPORTED_MODULE_5__.join)(__dirname, "../renderer/index.html"));
    }
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron__WEBPACK_IMPORTED_MODULE_2__.app.whenReady().then(function() {
    // Set app user model id for windows
    _electron_toolkit_utils__WEBPACK_IMPORTED_MODULE_0__.electronApp.setAppUserModelId("com.electron");
    // Default open or close DevTools by F12 in development
    // and ignore CommandOrControl + R in production.
    // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
    electron__WEBPACK_IMPORTED_MODULE_2__.app.on("browser-window-created", function(_, window) {
        _electron_toolkit_utils__WEBPACK_IMPORTED_MODULE_0__.optimizer.watchWindowShortcuts(window);
    });
    // IPC test
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcMain.on("ping", function(event) {
        event.reply("pong", {
            message: "copy that.",
            time: new Date().getTime()
        });
        console.log("pong");
    });
    // Window controls
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcMain.on("window-minimize", function(event) {
        var window = electron__WEBPACK_IMPORTED_MODULE_2__.BrowserWindow.fromWebContents(event.sender);
        console.log(window, "here");
        window === null || window === void 0 ? void 0 : window.minimize();
    });
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcMain.on("window-maximize", function(event) {
        var window = electron__WEBPACK_IMPORTED_MODULE_2__.BrowserWindow.fromWebContents(event.sender);
        if (window === null || window === void 0 ? void 0 : window.isMaximized()) {
            window.unmaximize();
        } else {
            window === null || window === void 0 ? void 0 : window.maximize();
        }
    });
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcMain.on("window-close", function(event) {
        var window = electron__WEBPACK_IMPORTED_MODULE_2__.BrowserWindow.fromWebContents(event.sender);
        window === null || window === void 0 ? void 0 : window.close();
    });
    // OS utilities
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcMain.handle("get-home-dir", function() {
        return (0,os__WEBPACK_IMPORTED_MODULE_4__.homedir)();
    });
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcMain.handle("get-hard-drive-dir", function() {
        return (0,fs_promises__WEBPACK_IMPORTED_MODULE_3__.readdir)((0,os__WEBPACK_IMPORTED_MODULE_4__.homedir)());
    });
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcMain.handle("get-webos-ipk-dir", function() {
        return (0,path__WEBPACK_IMPORTED_MODULE_5__.join)((0,os__WEBPACK_IMPORTED_MODULE_4__.homedir)(), "dev", "webos", "ipks");
    });
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcMain.handle("get-webos-sdk-dir", function() {
        var projectRoot = (0,path__WEBPACK_IMPORTED_MODULE_5__.resolve)(__dirname, "../..");
        var NODE_MODULES_DIR = "".concat((0,path__WEBPACK_IMPORTED_MODULE_5__.join)(projectRoot, "node_modules"), "/");
        var WEBOS_CLI_DIR = "".concat(NODE_MODULES_DIR, "@webos-tools/cli/bin/");
        return WEBOS_CLI_DIR;
    });
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcMain.handle("create-env", function(_, env) {
        var envPath = path__WEBPACK_IMPORTED_MODULE_5___default().join(process.cwd(), ".env");
        var envContent = "";
        if (env && (typeof env === "undefined" ? "undefined" : _type_of(env)) === "object") {
            envContent = Object.entries(env).map(function(param) {
                var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                return "".concat(key.toString(), "=").concat(String(value !== null && value !== void 0 ? value : ""));
            }).join("\n");
        }
        fs__WEBPACK_IMPORTED_MODULE_7___default().writeFileSync(envPath, envContent);
        return _object_spread({}, env);
    });
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcMain.handle("upgrade-webos", function(event, deviceName) {
        return _async_to_generator(function() {
            var uiStore, storeState, ipkName, ipkDir, sdkDir, ipkPath, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            event.sender.executeJavaScript("\n				(() => {\n					const stored = localStorage.getItem('ui-storage');\n					return stored ? JSON.parse(stored) : null;\n				})()\n			")
                        ];
                    case 1:
                        uiStore = _state.sent();
                        storeState = (uiStore === null || uiStore === void 0 ? void 0 : uiStore.state) || {};
                        ipkName = storeState.ipkName || "a.ipk";
                        ipkDir = storeState.ipkDir || "";
                        sdkDir = storeState.sdkDir || "";
                        if (!ipkDir || !deviceName) {
                            throw new Error("IPK directory and device name are required");
                        }
                        ipkPath = (0,path__WEBPACK_IMPORTED_MODULE_5__.join)(ipkDir, ipkName);
                        // Run ares-install command
                        return [
                            2,
                            new Promise(function(resolve, reject) {
                                var aresInstall = (0,child_process__WEBPACK_IMPORTED_MODULE_1__.spawn)("ares-install", [
                                    "--device",
                                    deviceName,
                                    ipkPath
                                ]);
                                var output = "";
                                var errorOutput = "";
                                aresInstall.stdout.on("data", function(data) {
                                    output += data.toString();
                                    console.log(data.toString());
                                });
                                aresInstall.stderr.on("data", function(data) {
                                    errorOutput += data.toString();
                                    console.error(data.toString());
                                });
                                aresInstall.on("close", function(code) {
                                    if (code === 0) {
                                        resolve({
                                            success: true,
                                            output: output,
                                            deviceName: deviceName
                                        });
                                    } else {
                                        reject({
                                            success: false,
                                            error: errorOutput || "Installation failed",
                                            code: code
                                        });
                                    }
                                });
                                aresInstall.on("error", function(error) {
                                    reject({
                                        success: false,
                                        error: error.message
                                    });
                                });
                            })
                        ];
                    case 2:
                        error = _state.sent();
                        console.error("Error upgrading WebOS:", error);
                        throw error;
                    case 3:
                        return [
                            2
                        ];
                }
            });
        })();
    });
    // Dialog handlers
    electron__WEBPACK_IMPORTED_MODULE_2__.ipcMain.handle("show-open-dialog", function(event, options) {
        return _async_to_generator(function() {
            var window, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        window = electron__WEBPACK_IMPORTED_MODULE_2__.BrowserWindow.fromWebContents(event.sender);
                        if (!window) {
                            throw new Error("Window not found");
                        }
                        return [
                            4,
                            electron__WEBPACK_IMPORTED_MODULE_2__.dialog.showOpenDialog(window, options)
                        ];
                    case 1:
                        result = _state.sent();
                        return [
                            2,
                            result
                        ];
                }
            });
        })();
    });
    createWindow();
    electron__WEBPACK_IMPORTED_MODULE_2__.app.on("activate", function() {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron__WEBPACK_IMPORTED_MODULE_2__.BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron__WEBPACK_IMPORTED_MODULE_2__.app.on("window-all-closed", function() {
    if (process.platform !== "darwin") {
        electron__WEBPACK_IMPORTED_MODULE_2__.app.quit();
    }
}); // In this file you can include the rest of your app"s specific main process
 // code. You can also put them in separate files and require them here.

})();

module.exports = __webpack_exports__;
})()
;
//# sourceMappingURL=index.js.map