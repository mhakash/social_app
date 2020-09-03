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
      marginLeft: 10,
      minWidth: 100
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hc3Npc3RhbmNlL2ZpcnN0U3RlcC5qc3giXSwibmFtZXMiOlsiY2F0ZWdvcmllcyIsIkZpcnN0U3RlcCIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJzZXRTdGVwIiwic2V0Rm9ybURhdGEiLCJoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDYXRlZ29yeUNoYW5nZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtaW5XaWR0aCIsIm1hcCIsImN0ZyIsImluZGV4IiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLG9CQURpQixFQUVqQix1QkFGaUIsRUFHakIsbUJBSGlCLEVBSWpCLGtCQUppQixFQUtqQixhQUxpQixFQU1qQiwwQkFOaUIsRUFPakIsT0FQaUIsRUFRakIsaUJBUmlCLENBQW5COztBQVdBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXFEO0FBQUEsTUFBbERDLFFBQWtELFFBQWxEQSxRQUFrRDtBQUFBLE1BQXhDQyxXQUF3QyxRQUF4Q0EsV0FBd0M7QUFBQSxNQUEzQkMsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFDckUsTUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDQyxLQUFELEVBQVc7QUFDekNGLGVBQVcsQ0FBQyxhQUFELEVBQWdCRSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBN0IsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDSCxLQUFELEVBQVc7QUFDdENGLGVBQVcsQ0FBQyxVQUFELEVBQWFFLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUExQixDQUFYO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUdFLE1BQUMsc0RBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxjQUFVLEVBQUMsUUFGYjtBQUdFLFNBQUssRUFBRTtBQUFFRSxlQUFTLEVBQUUsRUFBYjtBQUFpQkMsa0JBQVksRUFBRTtBQUEvQixLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBREYsQ0FMRixFQVdFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBYSxTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRSxFQUFkO0FBQWtCQyxjQUFRLEVBQUU7QUFBNUIsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBUSxTQUFLLEVBQUVaLFFBQWY7QUFBeUIsWUFBUSxFQUFFUSxvQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBVSxTQUFLLEVBQUMsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURGLEVBS0dWLFVBQVUsQ0FBQ2UsR0FBWCxDQUFlLFVBQUNDLEdBQUQsRUFBTUMsS0FBTjtBQUFBLFdBQ2QsTUFBQywwREFBRDtBQUFVLFNBQUcsRUFBRUEsS0FBZjtBQUFzQixXQUFLLEVBQUVELEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0EsR0FESCxDQURjO0FBQUEsR0FBZixDQUxILENBREYsQ0FERixDQVhGLENBSEYsRUErQkUsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQS9CRixFQWlDRSxNQUFDLDJEQUFEO0FBQ0UsZ0JBQVksRUFBRWIsV0FEaEI7QUFFRSxlQUFXLEVBQUMseUNBRmQ7QUFHRSxhQUFTLE1BSFg7QUFJRSxhQUFTLE1BSlg7QUFLRSxXQUFPLEVBQUMsVUFMVjtBQU1FLFVBQU0sRUFBQyxPQU5UO0FBT0UsUUFBSSxFQUFFLENBUFI7QUFRRSxZQUFRLEVBQUVHLHVCQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQ0YsRUE0Q0U7QUFBSyxTQUFLLEVBQUU7QUFBRVksY0FBUSxFQUFFLFVBQVo7QUFBd0JDLFlBQU0sRUFBRSxFQUFoQztBQUFvQ0MsV0FBSyxFQUFFO0FBQTNDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNaEIsT0FBTyxDQUFDLENBQUQsQ0FBYjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQTVDRixDQURGO0FBa0RELENBM0REOztLQUFNSCxTO0FBNkRTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hc3Npc3RhbmNlLmE1MTBlMDM5MDc1NTI3YzQwYTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIFRleHRGaWVsZCxcclxuICBGb3JtQ29udHJvbCxcclxuICBTZWxlY3QsXHJcbiAgTWVudUl0ZW0sXHJcbiAgR3JpZCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgXCJTZXh1YWwgSGFycmFzc21lbnRcIixcclxuICBcIkdlbmRlciBEaXNjcmltaW5hdGlvblwiLFxyXG4gIFwiRG9tZXN0aWMgVmlvbGVuY2VcIixcclxuICBcIlJhZ2dpbmcvQnVsbHlpbmdcIixcclxuICBcIkV2ZSBUZWFzaW5nXCIsXHJcbiAgXCJTb2NpYWwgTWVkaWEgSGFycmFzc21lbnRcIixcclxuICBcIkRvd3J5XCIsXHJcbiAgXCJTbmF0Y2hpbmcvVGhlZnRcIixcclxuXTtcclxuXHJcbmNvbnN0IEZpcnN0U3RlcCA9ICh7IGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgc2V0U3RlcCwgc2V0Rm9ybURhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRGb3JtRGF0YShcImRlc2NyaXB0aW9uXCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEZvcm1EYXRhKFwiY2F0ZWdvcnlcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5TdGVwIDE8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogMTAsIG1hcmdpbkJvdHRvbTogMTAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cclxuICAgICAgICAgICAgUGxlYXNlIHNlbGVjdCBhIGNhdGVnb3J5IG9mIHlvdXIgcHJvYmxlbTpcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAsIG1pbldpZHRoOiAxMDAgfX0+XHJcbiAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2NhdGVnb3J5fSBvbkNoYW5nZT17aGFuZGxlQ2F0ZWdvcnlDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGVtPk5vbmU8L2VtPlxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY3RnLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aW5kZXh9IHZhbHVlPXtjdGd9PlxyXG4gICAgICAgICAgICAgICAgICB7Y3RnfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+UGxlYXNlIGRlc2NyaWJlIHlvdXIgcHJvYmxlbTo8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgZmV3IGxpbmVzIGFib3V0IHlvdXIgcHJvYmxlbS4uLlwiXHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgcm93cz17NH1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGVzY3JpcHRpb25DaGFuZ2V9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGJvdHRvbTogMTAsIHJpZ2h0OiAxMCB9fT5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFN0ZXAoMil9Pk5leHQ8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaXJzdFN0ZXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=