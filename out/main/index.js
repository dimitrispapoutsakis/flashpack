(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./resources/icon.png?asset": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "static/image/icon.943b7a7d.png";

}),
"electron": (function (module) {
module.exports = require("electron");

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
/* ESM import */var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("electron");
/* ESM import */var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("path");
/* ESM import */var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var os__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("os");
/* ESM import */var os__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_3__);
/* ESM import */var _resources_icon_png_asset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./resources/icon.png?asset");
/* ESM import */var fs_promises__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fs/promises");
/* ESM import */var fs_promises__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_5__);
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






//  import { Installer } from "@webos-tools/cli/APIs";
// console.log(Installer);
function createWindow() {
    /* 	Installer.list().then((res) => {
			console.log(res);
		});  */ // Create the browser window.
    var mainWindow = new electron__WEBPACK_IMPORTED_MODULE_1__.BrowserWindow(_object_spread_props(_object_spread({
        width: 1115,
        height: 850,
        show: false,
        autoHideMenuBar: true,
        frame: false
    }, process.platform === "linux" ? {
        icon: _resources_icon_png_asset__WEBPACK_IMPORTED_MODULE_4__
    } : {}), {
        webPreferences: {
            preload: (0,path__WEBPACK_IMPORTED_MODULE_2__.join)(__dirname, "../preload/index.js"),
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
        electron__WEBPACK_IMPORTED_MODULE_1__.shell.openExternal(details.url);
        return {
            action: "deny"
        };
    });
    // HMR for renderer base on electron-rsbuild cli.
    // Load the remote URL for development or the local html file for production.
    if (_electron_toolkit_utils__WEBPACK_IMPORTED_MODULE_0__.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
        mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
    } else {
        mainWindow.loadFile((0,path__WEBPACK_IMPORTED_MODULE_2__.join)(__dirname, "../renderer/index.html"));
    }
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron__WEBPACK_IMPORTED_MODULE_1__.app.whenReady().then(function() {
    // Set app user model id for windows
    _electron_toolkit_utils__WEBPACK_IMPORTED_MODULE_0__.electronApp.setAppUserModelId("com.electron");
    // Default open or close DevTools by F12 in development
    // and ignore CommandOrControl + R in production.
    // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
    electron__WEBPACK_IMPORTED_MODULE_1__.app.on("browser-window-created", function(_, window) {
        _electron_toolkit_utils__WEBPACK_IMPORTED_MODULE_0__.optimizer.watchWindowShortcuts(window);
    });
    // IPC test
    electron__WEBPACK_IMPORTED_MODULE_1__.ipcMain.on("ping", function(event) {
        event.reply("pong", {
            message: "copy that.",
            time: new Date().getTime()
        });
        console.log("pong");
    });
    // Window controls
    electron__WEBPACK_IMPORTED_MODULE_1__.ipcMain.on("window-minimize", function(event) {
        var window = electron__WEBPACK_IMPORTED_MODULE_1__.BrowserWindow.fromWebContents(event.sender);
        console.log(window, "here");
        window === null || window === void 0 ? void 0 : window.minimize();
    });
    electron__WEBPACK_IMPORTED_MODULE_1__.ipcMain.on("window-maximize", function(event) {
        var window = electron__WEBPACK_IMPORTED_MODULE_1__.BrowserWindow.fromWebContents(event.sender);
        if (window === null || window === void 0 ? void 0 : window.isMaximized()) {
            window.unmaximize();
        } else {
            window === null || window === void 0 ? void 0 : window.maximize();
        }
    });
    electron__WEBPACK_IMPORTED_MODULE_1__.ipcMain.on("window-close", function(event) {
        var window = electron__WEBPACK_IMPORTED_MODULE_1__.BrowserWindow.fromWebContents(event.sender);
        window === null || window === void 0 ? void 0 : window.close();
    });
    // OS utilities
    electron__WEBPACK_IMPORTED_MODULE_1__.ipcMain.handle("get-home-dir", function() {
        return (0,os__WEBPACK_IMPORTED_MODULE_3__.homedir)();
    });
    electron__WEBPACK_IMPORTED_MODULE_1__.ipcMain.handle("get-hard-drive-dir", function() {
        return (0,fs_promises__WEBPACK_IMPORTED_MODULE_5__.readdir)((0,os__WEBPACK_IMPORTED_MODULE_3__.homedir)());
    });
    electron__WEBPACK_IMPORTED_MODULE_1__.ipcMain.handle('get-webos-sdk-dir', function() {
        return (0,path__WEBPACK_IMPORTED_MODULE_2__.join)((0,os__WEBPACK_IMPORTED_MODULE_3__.homedir)(), "dev", "webos", "ipks");
    });
    createWindow();
    electron__WEBPACK_IMPORTED_MODULE_1__.app.on("activate", function() {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron__WEBPACK_IMPORTED_MODULE_1__.BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron__WEBPACK_IMPORTED_MODULE_1__.app.on("window-all-closed", function() {
    if (process.platform !== "darwin") {
        electron__WEBPACK_IMPORTED_MODULE_1__.app.quit();
    }
}); // In this file you can include the rest of your app"s specific main process
 // code. You can also put them in separate files and require them here.

})();

module.exports = __webpack_exports__;
})()
;
//# sourceMappingURL=index.js.map