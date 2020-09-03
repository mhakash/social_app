webpackHotUpdate_N_E("pages/assistance",{

/***/ "./components/assistance/firstStep.jsx":
/*!*********************************************!*\
  !*** ./components/assistance/firstStep.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _this = undefined,
    _jsxFileName = "D:\\Reading stuffs\\Sketches\\Tracthon\\components\\assistance\\firstStep.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var categories = ["Sexual Harrassment", "Gender Discrimination", "Domestic Violence", "Ragging/Bullying", "Eve Teasing", "Social Media Harrassment", "Dowry", "Snatching/Theft"];

var FirstStep = function FirstStep(_ref) {
  var category = _ref.category,
      description = _ref.description,
      setStep = _ref.setStep,
      setFormData = _ref.setFormData;

  var handleDescriptionChange = function handleDescriptionChange(event) {
    setFormData("description", event.target.value);
  };

  var handleCategoryChange = function handleCategoryChange(event) {
    setFormData("category", event.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Step 1"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    alignItems: "center",
    style: {
      marginTop: 10,
      marginBottom: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Please select a category of your problem:")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    style: {
      marginLeft: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    value: category,
    onChange: handleCategoryChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("em", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "None")), categories.map(function (ctg, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      key: index,
      value: ctg,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, ctg);
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, "Please describe your problem:"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    defaultValue: description,
    placeholder: "Write a few lines about your problem...",
    fullWidth: true,
    multiline: true,
    variant: "outlined",
    margin: "dense",
    rows: 4,
    onChange: handleDescriptionChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), __jsx("div", {
    style: {
      position: "absolute",
      bottom: 10,
      right: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      return setStep(2);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, "Next")));
};

_c = FirstStep;
/* harmony default export */ __webpack_exports__["default"] = (FirstStep);

var _c;

$RefreshReg$(_c, "FirstStep");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hc3Npc3RhbmNlL2ZpcnN0U3RlcC5qc3giXSwibmFtZXMiOlsiY2F0ZWdvcmllcyIsIkZpcnN0U3RlcCIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJzZXRTdGVwIiwic2V0Rm9ybURhdGEiLCJoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDYXRlZ29yeUNoYW5nZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXAiLCJjdGciLCJpbmRleCIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQixvQkFEaUIsRUFFakIsdUJBRmlCLEVBR2pCLG1CQUhpQixFQUlqQixrQkFKaUIsRUFLakIsYUFMaUIsRUFNakIsMEJBTmlCLEVBT2pCLE9BUGlCLEVBUWpCLGlCQVJpQixDQUFuQjs7QUFXQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFxRDtBQUFBLE1BQWxEQyxRQUFrRCxRQUFsREEsUUFBa0Q7QUFBQSxNQUF4Q0MsV0FBd0MsUUFBeENBLFdBQXdDO0FBQUEsTUFBM0JDLE9BQTJCLFFBQTNCQSxPQUEyQjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQ3JFLE1BQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pDRixlQUFXLENBQUMsYUFBRCxFQUFnQkUsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQTdCLENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0gsS0FBRCxFQUFXO0FBQ3RDRixlQUFXLENBQUMsVUFBRCxFQUFhRSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBMUIsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFHRSxNQUFDLHNEQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsY0FBVSxFQUFDLFFBRmI7QUFHRSxTQUFLLEVBQUU7QUFBRUUsZUFBUyxFQUFFLEVBQWI7QUFBaUJDLGtCQUFZLEVBQUU7QUFBL0IsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQURGLENBTEYsRUFXRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUVDLGdCQUFVLEVBQUU7QUFBZCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFRLFNBQUssRUFBRVgsUUFBZjtBQUF5QixZQUFRLEVBQUVRLG9CQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFVLFNBQUssRUFBQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBREYsRUFLR1YsVUFBVSxDQUFDYyxHQUFYLENBQWUsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOO0FBQUEsV0FDZCxNQUFDLDBEQUFEO0FBQVUsU0FBRyxFQUFFQSxLQUFmO0FBQXNCLFdBQUssRUFBRUQsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQSxHQURILENBRGM7QUFBQSxHQUFmLENBTEgsQ0FERixDQURGLENBWEYsQ0FIRixFQStCRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBL0JGLEVBaUNFLE1BQUMsMkRBQUQ7QUFDRSxnQkFBWSxFQUFFWixXQURoQjtBQUVFLGVBQVcsRUFBQyx5Q0FGZDtBQUdFLGFBQVMsTUFIWDtBQUlFLGFBQVMsTUFKWDtBQUtFLFdBQU8sRUFBQyxVQUxWO0FBTUUsVUFBTSxFQUFDLE9BTlQ7QUFPRSxRQUFJLEVBQUUsQ0FQUjtBQVFFLFlBQVEsRUFBRUcsdUJBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpDRixFQTRDRTtBQUFLLFNBQUssRUFBRTtBQUFFVyxjQUFRLEVBQUUsVUFBWjtBQUF3QkMsWUFBTSxFQUFFLEVBQWhDO0FBQW9DQyxXQUFLLEVBQUU7QUFBM0MsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1mLE9BQU8sQ0FBQyxDQUFELENBQWI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0E1Q0YsQ0FERjtBQWtERCxDQTNERDs7S0FBTUgsUztBQTZEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXNzaXN0YW5jZS40YTNlMThkNDEzOGQ5NzYzZjc3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgVHlwb2dyYXBoeSxcclxuICBUZXh0RmllbGQsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgU2VsZWN0LFxyXG4gIE1lbnVJdGVtLFxyXG4gIEdyaWQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCBjYXRlZ29yaWVzID0gW1xyXG4gIFwiU2V4dWFsIEhhcnJhc3NtZW50XCIsXHJcbiAgXCJHZW5kZXIgRGlzY3JpbWluYXRpb25cIixcclxuICBcIkRvbWVzdGljIFZpb2xlbmNlXCIsXHJcbiAgXCJSYWdnaW5nL0J1bGx5aW5nXCIsXHJcbiAgXCJFdmUgVGVhc2luZ1wiLFxyXG4gIFwiU29jaWFsIE1lZGlhIEhhcnJhc3NtZW50XCIsXHJcbiAgXCJEb3dyeVwiLFxyXG4gIFwiU25hdGNoaW5nL1RoZWZ0XCIsXHJcbl07XHJcblxyXG5jb25zdCBGaXJzdFN0ZXAgPSAoeyBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIHNldFN0ZXAsIHNldEZvcm1EYXRhIH0pID0+IHtcclxuICBjb25zdCBoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0Rm9ybURhdGEoXCJkZXNjcmlwdGlvblwiLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRGb3JtRGF0YShcImNhdGVnb3J5XCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+U3RlcCAxPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBjb250YWluZXJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwLCBtYXJnaW5Cb3R0b206IDEwIH19XHJcbiAgICAgID5cclxuICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XHJcbiAgICAgICAgICAgIFBsZWFzZSBzZWxlY3QgYSBjYXRlZ29yeSBvZiB5b3VyIHByb2JsZW06XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDEwIH19PlxyXG4gICAgICAgICAgICA8U2VsZWN0IHZhbHVlPXtjYXRlZ29yeX0gb25DaGFuZ2U9e2hhbmRsZUNhdGVnb3J5Q2hhbmdlfT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxlbT5Ob25lPC9lbT5cclxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG5cclxuICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGN0ZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17Y3RnfT5cclxuICAgICAgICAgICAgICAgICAge2N0Z31cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlBsZWFzZSBkZXNjcmliZSB5b3VyIHByb2JsZW06PC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBhIGZldyBsaW5lcyBhYm91dCB5b3VyIHByb2JsZW0uLi5cIlxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURlc2NyaXB0aW9uQ2hhbmdlfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBib3R0b206IDEwLCByaWdodDogMTAgfX0+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTdGVwKDIpfT5OZXh0PC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RTdGVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9