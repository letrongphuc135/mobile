(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./public/assets/customer/plugins/jquery-ui/jquery-ui.min.js":
/*!*******************************************************************!*\
  !*** ./public/assets/customer/plugins/jquery-ui/jquery-ui.min.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery UI - v1.12.1 - 2017-04-10
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/mouse.js, widgets/slider.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (t) {
  function e(t) {
    for (var e = t.css("visibility"); "inherit" === e;) {
      t = t.parent(), e = t.css("visibility");
    }

    return "hidden" !== e;
  }

  t.ui = t.ui || {}, t.ui.version = "1.12.1";
  var i = 0,
      s = Array.prototype.slice;
  t.cleanData = function (e) {
    return function (i) {
      var s, n, o;

      for (o = 0; null != (n = i[o]); o++) {
        try {
          s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove");
        } catch (a) {}
      }

      e(i);
    };
  }(t.cleanData), t.widget = function (e, i, s) {
    var n,
        o,
        a,
        r = {},
        l = e.split(".")[0];
    e = e.split(".")[1];
    var h = l + "-" + e;
    return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function (e) {
      return !!t.data(e, h);
    }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function (t, e) {
      return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e);
    }, t.extend(o, n, {
      version: s.version,
      _proto: t.extend({}, s),
      _childConstructors: []
    }), a = new i(), a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
      return t.isFunction(s) ? (r[e] = function () {
        function t() {
          return i.prototype[e].apply(this, arguments);
        }

        function n(t) {
          return i.prototype[e].apply(this, t);
        }

        return function () {
          var e,
              i = this._super,
              o = this._superApply;
          return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e;
        };
      }(), void 0) : (r[e] = s, void 0);
    }), o.prototype = t.widget.extend(a, {
      widgetEventPrefix: n ? a.widgetEventPrefix || e : e
    }, r, {
      constructor: o,
      namespace: l,
      widgetName: e,
      widgetFullName: h
    }), n ? (t.each(n._childConstructors, function (e, i) {
      var s = i.prototype;
      t.widget(s.namespace + "." + s.widgetName, o, i._proto);
    }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o;
  }, t.widget.extend = function (e) {
    for (var i, n, o = s.call(arguments, 1), a = 0, r = o.length; r > a; a++) {
      for (i in o[a]) {
        n = o[a][i], o[a].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
      }
    }

    return e;
  }, t.widget.bridge = function (e, i) {
    var n = i.prototype.widgetFullName || e;

    t.fn[e] = function (o) {
      var a = "string" == typeof o,
          r = s.call(arguments, 1),
          l = this;
      return a ? this.length || "instance" !== o ? this.each(function () {
        var i,
            s = t.data(this, n);
        return "instance" === o ? (l = s, !1) : s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, r), i !== s && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + o + "'");
      }) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))), this.each(function () {
        var e = t.data(this, n);
        e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new i(o, this));
      })), l;
    };
  }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      classes: {},
      disabled: !1,
      create: null
    },
    _createWidget: function _createWidget(e, s) {
      s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function remove(t) {
          t.target === s && this.destroy();
        }
      }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: function _getCreateOptions() {
      return {};
    },
    _getCreateEventData: t.noop,
    _create: t.noop,
    _init: t.noop,
    destroy: function destroy() {
      var e = this;
      this._destroy(), t.each(this.classesElementLookup, function (t, i) {
        e._removeClass(i, t);
      }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
    },
    _destroy: t.noop,
    widget: function widget() {
      return this.element;
    },
    option: function option(e, i) {
      var s,
          n,
          o,
          a = e;
      if (0 === arguments.length) return t.widget.extend({}, this.options);
      if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) {
        for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) {
          n[s[o]] = n[s[o]] || {}, n = n[s[o]];
        }

        if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
        n[e] = i;
      } else {
        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
        a[e] = i;
      }
      return this._setOptions(a), this;
    },
    _setOptions: function _setOptions(t) {
      var e;

      for (e in t) {
        this._setOption(e, t[e]);
      }

      return this;
    },
    _setOption: function _setOption(t, e) {
      return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this;
    },
    _setOptionClasses: function _setOptionClasses(e) {
      var i, s, n;

      for (i in e) {
        n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
          element: s,
          keys: i,
          classes: e,
          add: !0
        })));
      }
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
    },
    enable: function enable() {
      return this._setOptions({
        disabled: !1
      });
    },
    disable: function disable() {
      return this._setOptions({
        disabled: !0
      });
    },
    _classes: function _classes(e) {
      function i(i, o) {
        var a, r;

        for (r = 0; i.length > r; r++) {
          a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]);
        }
      }

      var s = [],
          n = this;
      return e = t.extend({
        element: this.element,
        classes: this.options.classes || {}
      }, e), this._on(e.element, {
        remove: "_untrackClassesElement"
      }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ");
    },
    _untrackClassesElement: function _untrackClassesElement(e) {
      var i = this;
      t.each(i.classesElementLookup, function (s, n) {
        -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()));
      });
    },
    _removeClass: function _removeClass(t, e, i) {
      return this._toggleClass(t, e, i, !1);
    },
    _addClass: function _addClass(t, e, i) {
      return this._toggleClass(t, e, i, !0);
    },
    _toggleClass: function _toggleClass(t, e, i, s) {
      s = "boolean" == typeof s ? s : i;
      var n = "string" == typeof t || null === t,
          o = {
        extra: n ? e : i,
        keys: n ? t : e,
        element: n ? this.element : t,
        add: s
      };
      return o.element.toggleClass(this._classes(o), s), this;
    },
    _on: function _on(e, i, s) {
      var n,
          o = this;
      "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
        function r() {
          return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
        }

        "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
        var l = s.match(/^([\w:-]*)\s*(.*)$/),
            h = l[1] + o.eventNamespace,
            c = l[2];
        c ? n.on(h, c, r) : i.on(h, r);
      });
    },
    _off: function _off(e, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get());
    },
    _delay: function _delay(t, e) {
      function i() {
        return ("string" == typeof t ? s[t] : t).apply(s, arguments);
      }

      var s = this;
      return setTimeout(i, e || 0);
    },
    _hoverable: function _hoverable(e) {
      this.hoverable = this.hoverable.add(e), this._on(e, {
        mouseenter: function mouseenter(e) {
          this._addClass(t(e.currentTarget), null, "ui-state-hover");
        },
        mouseleave: function mouseleave(e) {
          this._removeClass(t(e.currentTarget), null, "ui-state-hover");
        }
      });
    },
    _focusable: function _focusable(e) {
      this.focusable = this.focusable.add(e), this._on(e, {
        focusin: function focusin(e) {
          this._addClass(t(e.currentTarget), null, "ui-state-focus");
        },
        focusout: function focusout(e) {
          this._removeClass(t(e.currentTarget), null, "ui-state-focus");
        }
      });
    },
    _trigger: function _trigger(e, i, s) {
      var n,
          o,
          a = this.options[e];
      if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) {
        n in i || (i[n] = o[n]);
      }
      return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
    }
  }, t.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (e, i) {
    t.Widget.prototype["_" + e] = function (s, n, o) {
      "string" == typeof n && (n = {
        effect: n
      });
      var a,
          r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
      n = n || {}, "number" == typeof n && (n = {
        duration: n
      }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
        t(this)[e](), o && o.call(s[0]), i();
      });
    };
  }), t.widget, function () {
    function e(t, e, i) {
      return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)];
    }

    function i(e, i) {
      return parseInt(t.css(e, i), 10) || 0;
    }

    function s(e) {
      var i = e[0];
      return 9 === i.nodeType ? {
        width: e.width(),
        height: e.height(),
        offset: {
          top: 0,
          left: 0
        }
      } : t.isWindow(i) ? {
        width: e.width(),
        height: e.height(),
        offset: {
          top: e.scrollTop(),
          left: e.scrollLeft()
        }
      } : i.preventDefault ? {
        width: 0,
        height: 0,
        offset: {
          top: i.pageY,
          left: i.pageX
        }
      } : {
        width: e.outerWidth(),
        height: e.outerHeight(),
        offset: e.offset()
      };
    }

    var n,
        o = Math.max,
        a = Math.abs,
        r = /left|center|right/,
        l = /top|center|bottom/,
        h = /[\+\-]\d+(\.[\d]+)?%?/,
        c = /^\w+/,
        u = /%$/,
        d = t.fn.position;
    t.position = {
      scrollbarWidth: function scrollbarWidth() {
        if (void 0 !== n) return n;
        var e,
            i,
            s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            o = s.children()[0];
        return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i;
      },
      getScrollInfo: function getScrollInfo(e) {
        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
            s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
            n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
            o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
        return {
          width: o ? t.position.scrollbarWidth() : 0,
          height: n ? t.position.scrollbarWidth() : 0
        };
      },
      getWithinInfo: function getWithinInfo(e) {
        var i = t(e || window),
            s = t.isWindow(i[0]),
            n = !!i[0] && 9 === i[0].nodeType,
            o = !s && !n;
        return {
          element: i,
          isWindow: s,
          isDocument: n,
          offset: o ? t(e).offset() : {
            left: 0,
            top: 0
          },
          scrollLeft: i.scrollLeft(),
          scrollTop: i.scrollTop(),
          width: i.outerWidth(),
          height: i.outerHeight()
        };
      }
    }, t.fn.position = function (n) {
      if (!n || !n.of) return d.apply(this, arguments);
      n = t.extend({}, n);

      var u,
          p,
          f,
          g,
          m,
          _,
          v = t(n.of),
          b = t.position.getWithinInfo(n.within),
          y = t.position.getScrollInfo(b),
          w = (n.collision || "flip").split(" "),
          k = {};

      return _ = s(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], function () {
        var t,
            e,
            i = (n[this] || "").split(" ");
        1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]];
      }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(k.at, p, f), m.left += u[0], m.top += u[1], this.each(function () {
        var s,
            r,
            l = t(this),
            h = l.outerWidth(),
            c = l.outerHeight(),
            d = i(this, "marginLeft"),
            _ = i(this, "marginTop"),
            x = h + d + i(this, "marginRight") + y.width,
            C = c + _ + i(this, "marginBottom") + y.height,
            D = t.extend({}, m),
            T = e(k.my, l.outerWidth(), l.outerHeight());

        "right" === n.my[0] ? D.left -= h : "center" === n.my[0] && (D.left -= h / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), D.left += T[0], D.top += T[1], s = {
          marginLeft: d,
          marginTop: _
        }, t.each(["left", "top"], function (e, i) {
          t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
            targetWidth: p,
            targetHeight: f,
            elemWidth: h,
            elemHeight: c,
            collisionPosition: s,
            collisionWidth: x,
            collisionHeight: C,
            offset: [u[0] + T[0], u[1] + T[1]],
            my: n.my,
            at: n.at,
            within: b,
            elem: l
          });
        }), n.using && (r = function r(t) {
          var e = g.left - D.left,
              i = e + p - h,
              s = g.top - D.top,
              r = s + f - c,
              u = {
            target: {
              element: v,
              left: g.left,
              top: g.top,
              width: p,
              height: f
            },
            element: {
              element: l,
              left: D.left,
              top: D.top,
              width: h,
              height: c
            },
            horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
            vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
          };
          h > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(s + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u);
        }), l.offset(t.extend(D, {
          using: r
        }));
      });
    }, t.ui.position = {
      fit: {
        left: function left(t, e) {
          var i,
              s = e.within,
              n = s.isWindow ? s.scrollLeft : s.offset.left,
              a = s.width,
              r = t.left - e.collisionPosition.marginLeft,
              l = n - r,
              h = r + e.collisionWidth - a - n;
          e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left);
        },
        top: function top(t, e) {
          var i,
              s = e.within,
              n = s.isWindow ? s.scrollTop : s.offset.top,
              a = e.within.height,
              r = t.top - e.collisionPosition.marginTop,
              l = n - r,
              h = r + e.collisionHeight - a - n;
          e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top);
        }
      },
      flip: {
        left: function left(t, e) {
          var i,
              s,
              n = e.within,
              o = n.offset.left + n.scrollLeft,
              r = n.width,
              l = n.isWindow ? n.scrollLeft : n.offset.left,
              h = t.left - e.collisionPosition.marginLeft,
              c = h - l,
              u = h + e.collisionWidth - r - l,
              d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
              p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
              f = -2 * e.offset[0];
          0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > a(s)) && (t.left += d + p + f));
        },
        top: function top(t, e) {
          var i,
              s,
              n = e.within,
              o = n.offset.top + n.scrollTop,
              r = n.height,
              l = n.isWindow ? n.scrollTop : n.offset.top,
              h = t.top - e.collisionPosition.marginTop,
              c = h - l,
              u = h + e.collisionHeight - r - l,
              d = "top" === e.my[1],
              p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
              f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
              g = -2 * e.offset[1];
          0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, (i > 0 || u > a(i)) && (t.top += p + f + g));
        }
      },
      flipfit: {
        left: function left() {
          t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
        },
        top: function top() {
          t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
        }
      }
    };
  }(), t.ui.position, t.extend(t.expr[":"], {
    data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
      return function (i) {
        return !!t.data(i, e);
      };
    }) : function (e, i, s) {
      return !!t.data(e, s[3]);
    }
  }), t.fn.extend({
    disableSelection: function () {
      var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function () {
        return this.on(t + ".ui-disableSelection", function (t) {
          t.preventDefault();
        });
      };
    }(),
    enableSelection: function enableSelection() {
      return this.off(".ui-disableSelection");
    }
  }), t.ui.focusable = function (i, s) {
    var n,
        o,
        a,
        r,
        l,
        h = i.nodeName.toLowerCase();
    return "area" === h ? (n = i.parentNode, o = n.name, i.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(h) ? (r = !i.disabled, r && (l = t(i).closest("fieldset")[0], l && (r = !l.disabled))) : r = "a" === h ? i.href || s : s, r && t(i).is(":visible") && e(t(i)));
  }, t.extend(t.expr[":"], {
    focusable: function focusable(e) {
      return t.ui.focusable(e, null != t.attr(e, "tabindex"));
    }
  }), t.ui.focusable, t.fn.form = function () {
    return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
  }, t.ui.formResetMixin = {
    _formResetHandler: function _formResetHandler() {
      var e = t(this);
      setTimeout(function () {
        var i = e.data("ui-form-reset-instances");
        t.each(i, function () {
          this.refresh();
        });
      });
    },
    _bindFormResetHandler: function _bindFormResetHandler() {
      if (this.form = this.element.form(), this.form.length) {
        var t = this.form.data("ui-form-reset-instances") || [];
        t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t);
      }
    },
    _unbindFormResetHandler: function _unbindFormResetHandler() {
      if (this.form.length) {
        var e = this.form.data("ui-form-reset-instances");
        e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
      }
    }
  }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function (e, i) {
    function s(e, i, s, o) {
      return t.each(n, function () {
        i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
      }), i;
    }

    var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
        o = i.toLowerCase(),
        a = {
      innerWidth: t.fn.innerWidth,
      innerHeight: t.fn.innerHeight,
      outerWidth: t.fn.outerWidth,
      outerHeight: t.fn.outerHeight
    };
    t.fn["inner" + i] = function (e) {
      return void 0 === e ? a["inner" + i].call(this) : this.each(function () {
        t(this).css(o, s(this, e) + "px");
      });
    }, t.fn["outer" + i] = function (e, n) {
      return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function () {
        t(this).css(o, s(this, e, !0, n) + "px");
      });
    };
  }), t.fn.addBack = function (t) {
    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
  }), t.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }, t.ui.escapeSelector = function () {
    var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
    return function (e) {
      return e.replace(t, "\\$1");
    };
  }(), t.fn.labels = function () {
    var e, i, s, n, o;
    return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n));
  }, t.fn.scrollParent = function (e) {
    var i = this.css("position"),
        s = "absolute" === i,
        n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        o = this.parents().filter(function () {
      var e = t(this);
      return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
    }).eq(0);
    return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document);
  }, t.extend(t.expr[":"], {
    tabbable: function tabbable(e) {
      var i = t.attr(e, "tabindex"),
          s = null != i;
      return (!s || i >= 0) && t.ui.focusable(e, s);
    }
  }), t.fn.extend({
    uniqueId: function () {
      var t = 0;
      return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++t);
        });
      };
    }(),
    removeUniqueId: function removeUniqueId() {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
      });
    }
  }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  var n = !1;
  t(document).on("mouseup", function () {
    n = !1;
  }), t.widget("ui.mouse", {
    version: "1.12.1",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function _mouseInit() {
      var e = this;
      this.element.on("mousedown." + this.widgetName, function (t) {
        return e._mouseDown(t);
      }).on("click." + this.widgetName, function (i) {
        return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
      }), this.started = !1;
    },
    _mouseDestroy: function _mouseDestroy() {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function _mouseDown(e) {
      if (!n) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
        var i = this,
            s = 1 === e.which,
            o = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
        return s && !o && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          i.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
          return i._mouseMove(t);
        }, this._mouseUpDelegate = function (t) {
          return i._mouseUp(t);
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), n = !0, !0)) : !0;
      }
    },
    _mouseMove: function _mouseMove(e) {
      if (this._mouseMoved) {
        if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
        if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;else if (!this.ignoreMissingWhich) return this._mouseUp(e);
      }

      return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
    },
    _mouseUp: function _mouseUp(e) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, n = !1, e.preventDefault();
    },
    _mouseDistanceMet: function _mouseDistanceMet(t) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function _mouseDelayMet() {
      return this.mouseDelayMet;
    },
    _mouseStart: function _mouseStart() {},
    _mouseDrag: function _mouseDrag() {},
    _mouseStop: function _mouseStop() {},
    _mouseCapture: function _mouseCapture() {
      return !0;
    }
  }), t.widget("ui.slider", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      classes: {
        "ui-slider": "ui-corner-all",
        "ui-slider-handle": "ui-corner-all",
        "ui-slider-range": "ui-corner-all ui-widget-header"
      },
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function _create() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1;
    },
    _refresh: function _refresh() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    },
    _createHandles: function _createHandles() {
      var e,
          i,
          s = this.options,
          n = this.element.find(".ui-slider-handle"),
          o = "<span tabindex='0'></span>",
          a = [];

      for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) {
        a.push(o);
      }

      this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
        t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
      });
    },
    _createRange: function _createRange() {
      var e = this.options;
      e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
        left: "",
        bottom: ""
      })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null);
    },
    _setupEvents: function _setupEvents() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
    },
    _destroy: function _destroy() {
      this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
    },
    _mouseCapture: function _mouseCapture(e) {
      var i,
          s,
          n,
          o,
          a,
          r,
          l,
          h,
          c = this,
          u = this.options;
      return u.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), i = {
        x: e.pageX,
        y: e.pageY
      }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
        var i = Math.abs(s - c.values(e));
        (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e);
      }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
        left: 0,
        top: 0
      } : {
        left: e.pageX - l.left - o.width() / 2,
        top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0));
    },
    _mouseStart: function _mouseStart() {
      return !0;
    },
    _mouseDrag: function _mouseDrag(t) {
      var e = {
        x: t.pageX,
        y: t.pageY
      },
          i = this._normValueFromMouse(e);

      return this._slide(t, this._handleIndex, i), !1;
    },
    _mouseStop: function _mouseStop(t) {
      return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
    },
    _detectOrientation: function _detectOrientation() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
    },
    _normValueFromMouse: function _normValueFromMouse(t) {
      var e, i, s, n, o;
      return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o);
    },
    _uiHash: function _uiHash(t, e, i) {
      var s = {
        handle: this.handles[t],
        handleIndex: t,
        value: void 0 !== e ? e : this.value()
      };
      return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s;
    },
    _hasMultipleValues: function _hasMultipleValues() {
      return this.options.values && this.options.values.length;
    },
    _start: function _start(t, e) {
      return this._trigger("start", t, this._uiHash(e));
    },
    _slide: function _slide(t, e, i) {
      var s,
          n,
          o = this.value(),
          a = this.values();
      this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
    },
    _stop: function _stop(t, e) {
      this._trigger("stop", t, this._uiHash(e));
    },
    _change: function _change(t, e) {
      this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)));
    },
    value: function value(t) {
      return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value();
    },
    values: function values(e, i) {
      var s, n, o;
      if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
      if (!arguments.length) return this._values();
      if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();

      for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) {
        s[o] = this._trimAlignValue(n[o]), this._change(null, o);
      }

      this._refreshValue();
    },
    _setOption: function _setOption(e, i) {
      var s,
          n = 0;

      switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
        case "orientation":
          this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
          break;

        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;

        case "values":
          for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) {
            this._change(null, s);
          }

          this._animateOff = !1;
          break;

        case "step":
        case "min":
        case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
          break;

        case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1;
      }
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
    },
    _value: function _value() {
      var t = this.options.value;
      return t = this._trimAlignValue(t);
    },
    _values: function _values(t) {
      var e, i, s;
      if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);

      if (this._hasMultipleValues()) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) {
          i[s] = this._trimAlignValue(i[s]);
        }

        return i;
      }

      return [];
    },
    _trimAlignValue: function _trimAlignValue(t) {
      if (this._valueMin() >= t) return this._valueMin();
      if (t >= this._valueMax()) return this._valueMax();
      var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i;
      return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5));
    },
    _calculateNewMax: function _calculateNewMax() {
      var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step,
          s = Math.round((t - e) / i) * i;

      t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()));
    },
    _precision: function _precision() {
      var t = this._precisionOf(this.options.step);

      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
    },
    _precisionOf: function _precisionOf(t) {
      var e = "" + t,
          i = e.indexOf(".");
      return -1 === i ? 0 : e.length - i - 1;
    },
    _valueMin: function _valueMin() {
      return this.options.min;
    },
    _valueMax: function _valueMax() {
      return this.max;
    },
    _refreshRange: function _refreshRange(t) {
      "vertical" === t && this.range.css({
        width: "",
        left: ""
      }), "horizontal" === t && this.range.css({
        height: "",
        bottom: ""
      });
    },
    _refreshValue: function _refreshValue() {
      var e,
          i,
          s,
          n,
          o,
          a = this.options.range,
          r = this.options,
          l = this,
          h = this._animateOff ? !1 : r.animate,
          c = {};
      this._hasMultipleValues() ? this.handles.each(function (s) {
        i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
          left: i + "%"
        }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
          width: i - e + "%"
        }, {
          queue: !1,
          duration: r.animate
        })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
          bottom: i + "%"
        }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
          height: i - e + "%"
        }, {
          queue: !1,
          duration: r.animate
        }))), e = i;
      }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
        width: i + "%"
      }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
        width: 100 - i + "%"
      }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
        height: i + "%"
      }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
        height: 100 - i + "%"
      }, r.animate));
    },
    _handleEvents: {
      keydown: function keydown(e) {
        var i,
            s,
            n,
            o,
            a = t(e.target).data("ui-slider-handle-index");

        switch (e.keyCode) {
          case t.ui.keyCode.HOME:
          case t.ui.keyCode.END:
          case t.ui.keyCode.PAGE_UP:
          case t.ui.keyCode.PAGE_DOWN:
          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return;
        }

        switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
          case t.ui.keyCode.HOME:
            n = this._valueMin();
            break;

          case t.ui.keyCode.END:
            n = this._valueMax();
            break;

          case t.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
            break;

          case t.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
            break;

          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
            if (s === this._valueMax()) return;
            n = this._trimAlignValue(s + o);
            break;

          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (s === this._valueMin()) return;
            n = this._trimAlignValue(s - o);
        }

        this._slide(e, a, n);
      },
      keyup: function keyup(e) {
        var i = t(e.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"));
      }
    }
  });
  var o = "ui-effects-",
      a = "ui-effects-style",
      r = "ui-effects-animated",
      l = t;
  t.effects = {
    effect: {}
  }, function (t, e) {
    function i(t, e, i) {
      var s = u[e.type] || {};
      return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t);
    }

    function s(i) {
      var s = h(),
          n = s._rgba = [];
      return i = i.toLowerCase(), f(l, function (t, o) {
        var a,
            r = o.re.exec(i),
            l = r && o.parse(r),
            h = o.space || "rgba";
        return l ? (a = s[h](l), s[c[h].cache] = a[c[h].cache], n = s._rgba = a._rgba, !1) : e;
      }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i];
    }

    function n(t, e, i) {
      return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t;
    }

    var o,
        a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        l = [{
      re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      parse: function parse(t) {
        return [t[1], t[2], t[3], t[4]];
      }
    }, {
      re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      parse: function parse(t) {
        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
      }
    }, {
      re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
      parse: function parse(t) {
        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
      }
    }, {
      re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
      parse: function parse(t) {
        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
      }
    }, {
      re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      space: "hsla",
      parse: function parse(t) {
        return [t[1], t[2] / 100, t[3] / 100, t[4]];
      }
    }],
        h = t.Color = function (e, i, s, n) {
      return new t.Color.fn.parse(e, i, s, n);
    },
        c = {
      rgba: {
        props: {
          red: {
            idx: 0,
            type: "byte"
          },
          green: {
            idx: 1,
            type: "byte"
          },
          blue: {
            idx: 2,
            type: "byte"
          }
        }
      },
      hsla: {
        props: {
          hue: {
            idx: 0,
            type: "degrees"
          },
          saturation: {
            idx: 1,
            type: "percent"
          },
          lightness: {
            idx: 2,
            type: "percent"
          }
        }
      }
    },
        u = {
      "byte": {
        floor: !0,
        max: 255
      },
      percent: {
        max: 1
      },
      degrees: {
        mod: 360,
        floor: !0
      }
    },
        d = h.support = {},
        p = t("<p>")[0],
        f = t.each;

    p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
      e.cache = "_" + t, e.props.alpha = {
        idx: 3,
        type: "percent",
        def: 1
      };
    }), h.fn = t.extend(h.prototype, {
      parse: function parse(n, a, r, l) {
        if (n === e) return this._rgba = [null, null, null, null], this;
        (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
        var u = this,
            d = t.type(n),
            p = this._rgba = [];
        return a !== e && (n = [n, a, r, l], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
          p[e.idx] = i(n[e.idx], e);
        }), this) : "object" === d ? (n instanceof h ? f(c, function (t, e) {
          n[e.cache] && (u[e.cache] = n[e.cache].slice());
        }) : f(c, function (e, s) {
          var o = s.cache;
          f(s.props, function (t, e) {
            if (!u[o] && s.to) {
              if ("alpha" === t || null == n[t]) return;
              u[o] = s.to(u._rgba);
            }

            u[o][e.idx] = i(n[t], e, !0);
          }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])));
        }), this) : e;
      },
      is: function is(t) {
        var i = h(t),
            s = !0,
            n = this;
        return f(c, function (t, o) {
          var a,
              r = i[o.cache];
          return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function (t, i) {
            return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e;
          })), s;
        }), s;
      },
      _space: function _space() {
        var t = [],
            e = this;
        return f(c, function (i, s) {
          e[s.cache] && t.push(i);
        }), t.pop();
      },
      transition: function transition(t, e) {
        var s = h(t),
            n = s._space(),
            o = c[n],
            a = 0 === this.alpha() ? h("transparent") : this,
            r = a[o.cache] || o.to(a._rgba),
            l = r.slice();

        return s = s[o.cache], f(o.props, function (t, n) {
          var o = n.idx,
              a = r[o],
              h = s[o],
              c = u[n.type] || {};
          null !== h && (null === a ? l[o] = h : (c.mod && (h - a > c.mod / 2 ? a += c.mod : a - h > c.mod / 2 && (a -= c.mod)), l[o] = i((h - a) * e + a, n)));
        }), this[n](l);
      },
      blend: function blend(e) {
        if (1 === this._rgba[3]) return this;

        var i = this._rgba.slice(),
            s = i.pop(),
            n = h(e)._rgba;

        return h(t.map(i, function (t, e) {
          return (1 - s) * n[e] + s * t;
        }));
      },
      toRgbaString: function toRgbaString() {
        var e = "rgba(",
            i = t.map(this._rgba, function (t, e) {
          return null == t ? e > 2 ? 1 : 0 : t;
        });
        return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")";
      },
      toHslaString: function toHslaString() {
        var e = "hsla(",
            i = t.map(this.hsla(), function (t, e) {
          return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t;
        });
        return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")";
      },
      toHexString: function toHexString(e) {
        var i = this._rgba.slice(),
            s = i.pop();

        return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
          return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t;
        }).join("");
      },
      toString: function toString() {
        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
      }
    }), h.fn.parse.prototype = h.fn, c.hsla.to = function (t) {
      if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
      var e,
          i,
          s = t[0] / 255,
          n = t[1] / 255,
          o = t[2] / 255,
          a = t[3],
          r = Math.max(s, n, o),
          l = Math.min(s, n, o),
          h = r - l,
          c = r + l,
          u = .5 * c;
      return e = l === r ? 0 : s === r ? 60 * (n - o) / h + 360 : n === r ? 60 * (o - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a];
    }, c.hsla.from = function (t) {
      if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
      var e = t[0] / 360,
          i = t[1],
          s = t[2],
          o = t[3],
          a = .5 >= s ? s * (1 + i) : s + i - s * i,
          r = 2 * s - a;
      return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o];
    }, f(c, function (s, n) {
      var o = n.props,
          a = n.cache,
          l = n.to,
          c = n.from;
      h.fn[s] = function (s) {
        if (l && !this[a] && (this[a] = l(this._rgba)), s === e) return this[a].slice();
        var n,
            r = t.type(s),
            u = "array" === r || "object" === r ? s : arguments,
            d = this[a].slice();
        return f(o, function (t, e) {
          var s = u["object" === r ? t : e.idx];
          null == s && (s = d[e.idx]), d[e.idx] = i(s, e);
        }), c ? (n = h(c(d)), n[a] = d, n) : h(d);
      }, f(o, function (e, i) {
        h.fn[e] || (h.fn[e] = function (n) {
          var o,
              a = t.type(n),
              l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
              h = this[l](),
              c = h[i.idx];
          return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = n, this[l](h)));
        });
      });
    }), h.hook = function (e) {
      var i = e.split(" ");
      f(i, function (e, i) {
        t.cssHooks[i] = {
          set: function set(e, n) {
            var o,
                a,
                r = "";

            if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
              if (n = h(o || n), !d.rgba && 1 !== n._rgba[3]) {
                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style;) {
                  try {
                    r = t.css(a, "backgroundColor"), a = a.parentNode;
                  } catch (l) {}
                }

                n = n.blend(r && "transparent" !== r ? r : "_default");
              }

              n = n.toRgbaString();
            }

            try {
              e.style[i] = n;
            } catch (l) {}
          }
        }, t.fx.step[i] = function (e) {
          e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
        };
      });
    }, h.hook(a), t.cssHooks.borderColor = {
      expand: function expand(t) {
        var e = {};
        return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
          e["border" + s + "Color"] = t;
        }), e;
      }
    }, o = t.Color.names = {
      aqua: "#00ffff",
      black: "#000000",
      blue: "#0000ff",
      fuchsia: "#ff00ff",
      gray: "#808080",
      green: "#008000",
      lime: "#00ff00",
      maroon: "#800000",
      navy: "#000080",
      olive: "#808000",
      purple: "#800080",
      red: "#ff0000",
      silver: "#c0c0c0",
      teal: "#008080",
      white: "#ffffff",
      yellow: "#ffff00",
      transparent: [null, null, null, 0],
      _default: "#ffffff"
    };
  }(l), function () {
    function e(e) {
      var i,
          s,
          n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
          o = {};
      if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;) {
        i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
      } else for (i in n) {
        "string" == typeof n[i] && (o[i] = n[i]);
      }
      return o;
    }

    function i(e, i) {
      var s,
          o,
          a = {};

      for (s in i) {
        o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
      }

      return a;
    }

    var s = ["add", "remove", "toggle"],
        n = {
      border: 1,
      borderBottom: 1,
      borderColor: 1,
      borderLeft: 1,
      borderRight: 1,
      borderTop: 1,
      borderWidth: 1,
      margin: 1,
      padding: 1
    };
    t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
      t.fx.step[i] = function (t) {
        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (l.style(t.elem, i, t.end), t.setAttr = !0);
      };
    }), t.fn.addBack || (t.fn.addBack = function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t.effects.animateClass = function (n, o, a, r) {
      var l = t.speed(o, a, r);
      return this.queue(function () {
        var o,
            a = t(this),
            r = a.attr("class") || "",
            h = l.children ? a.find("*").addBack() : a;
        h = h.map(function () {
          var i = t(this);
          return {
            el: i,
            start: e(this)
          };
        }), o = function o() {
          t.each(s, function (t, e) {
            n[e] && a[e + "Class"](n[e]);
          });
        }, o(), h = h.map(function () {
          return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this;
        }), a.attr("class", r), h = h.map(function () {
          var e = this,
              i = t.Deferred(),
              s = t.extend({}, l, {
            queue: !1,
            complete: function complete() {
              i.resolve(e);
            }
          });
          return this.el.animate(this.diff, s), i.promise();
        }), t.when.apply(t, h.get()).done(function () {
          o(), t.each(arguments, function () {
            var e = this.el;
            t.each(this.diff, function (t) {
              e.css(t, "");
            });
          }), l.complete.call(a[0]);
        });
      });
    }, t.fn.extend({
      addClass: function (e) {
        return function (i, s, n, o) {
          return s ? t.effects.animateClass.call(this, {
            add: i
          }, s, n, o) : e.apply(this, arguments);
        };
      }(t.fn.addClass),
      removeClass: function (e) {
        return function (i, s, n, o) {
          return arguments.length > 1 ? t.effects.animateClass.call(this, {
            remove: i
          }, s, n, o) : e.apply(this, arguments);
        };
      }(t.fn.removeClass),
      toggleClass: function (e) {
        return function (i, s, n, o, a) {
          return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
            add: i
          } : {
            remove: i
          }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
            toggle: i
          }, s, n, o);
        };
      }(t.fn.toggleClass),
      switchClass: function switchClass(e, i, s, n, o) {
        return t.effects.animateClass.call(this, {
          add: i,
          remove: e
        }, s, n, o);
      }
    });
  }(), function () {
    function e(e, i, s, n) {
      return t.isPlainObject(e) && (i = e, e = e.effect), e = {
        effect: e
      }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e;
    }

    function i(e) {
      return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != _typeof(e) || e.effect ? !1 : !0 : !0;
    }

    function s(t, e) {
      var i = e.outerWidth(),
          s = e.outerHeight(),
          n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
          o = n.exec(t) || ["", 0, i, s, 0];
      return {
        top: parseFloat(o[1]) || 0,
        right: "auto" === o[2] ? i : parseFloat(o[2]),
        bottom: "auto" === o[3] ? s : parseFloat(o[3]),
        left: parseFloat(o[4]) || 0
      };
    }

    t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
      return function (i) {
        return !!t(i).data(r) || e(i);
      };
    }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
      save: function save(t, e) {
        for (var i = 0, s = e.length; s > i; i++) {
          null !== e[i] && t.data(o + e[i], t[0].style[e[i]]);
        }
      },
      restore: function restore(t, e) {
        for (var i, s = 0, n = e.length; n > s; s++) {
          null !== e[s] && (i = t.data(o + e[s]), t.css(e[s], i));
        }
      },
      setMode: function setMode(t, e) {
        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
      },
      createWrapper: function createWrapper(e) {
        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
        var i = {
          width: e.outerWidth(!0),
          height: e.outerHeight(!0),
          "float": e.css("float")
        },
            s = t("<div></div>").addClass("ui-effects-wrapper").css({
          fontSize: "100%",
          background: "transparent",
          border: "none",
          margin: 0,
          padding: 0
        }),
            n = {
          width: e.width(),
          height: e.height()
        },
            o = document.activeElement;

        try {
          o.id;
        } catch (a) {
          o = document.body;
        }

        return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({
          position: "relative"
        }), e.css({
          position: "relative"
        })) : (t.extend(i, {
          position: e.css("position"),
          zIndex: e.css("z-index")
        }), t.each(["top", "left", "bottom", "right"], function (t, s) {
          i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto");
        }), e.css({
          position: "relative",
          top: 0,
          left: 0,
          right: "auto",
          bottom: "auto"
        })), e.css(n), s.css(i).show();
      },
      removeWrapper: function removeWrapper(e) {
        var i = document.activeElement;
        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e;
      }
    }), t.extend(t.effects, {
      version: "1.12.1",
      define: function define(e, i, s) {
        return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s;
      },
      scaledDimensions: function scaledDimensions(t, e, i) {
        if (0 === e) return {
          height: 0,
          width: 0,
          outerHeight: 0,
          outerWidth: 0
        };
        var s = "horizontal" !== i ? (e || 100) / 100 : 1,
            n = "vertical" !== i ? (e || 100) / 100 : 1;
        return {
          height: t.height() * n,
          width: t.width() * s,
          outerHeight: t.outerHeight() * n,
          outerWidth: t.outerWidth() * s
        };
      },
      clipToBox: function clipToBox(t) {
        return {
          width: t.clip.right - t.clip.left,
          height: t.clip.bottom - t.clip.top,
          left: t.clip.left,
          top: t.clip.top
        };
      },
      unshift: function unshift(t, e, i) {
        var s = t.queue();
        e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue();
      },
      saveStyle: function saveStyle(t) {
        t.data(a, t[0].style.cssText);
      },
      restoreStyle: function restoreStyle(t) {
        t[0].style.cssText = t.data(a) || "", t.removeData(a);
      },
      mode: function mode(t, e) {
        var i = t.is(":hidden");
        return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e;
      },
      getBaseline: function getBaseline(t, e) {
        var i, s;

        switch (t[0]) {
          case "top":
            i = 0;
            break;

          case "middle":
            i = .5;
            break;

          case "bottom":
            i = 1;
            break;

          default:
            i = t[0] / e.height;
        }

        switch (t[1]) {
          case "left":
            s = 0;
            break;

          case "center":
            s = .5;
            break;

          case "right":
            s = 1;
            break;

          default:
            s = t[1] / e.width;
        }

        return {
          x: s,
          y: i
        };
      },
      createPlaceholder: function createPlaceholder(e) {
        var i,
            s = e.css("position"),
            n = e.position();
        return e.css({
          marginTop: e.css("marginTop"),
          marginBottom: e.css("marginBottom"),
          marginLeft: e.css("marginLeft"),
          marginRight: e.css("marginRight")
        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
          display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
          visibility: "hidden",
          marginTop: e.css("marginTop"),
          marginBottom: e.css("marginBottom"),
          marginLeft: e.css("marginLeft"),
          marginRight: e.css("marginRight"),
          "float": e.css("float")
        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(o + "placeholder", i)), e.css({
          position: s,
          left: n.left,
          top: n.top
        }), i;
      },
      removePlaceholder: function removePlaceholder(t) {
        var e = o + "placeholder",
            i = t.data(e);
        i && (i.remove(), t.removeData(e));
      },
      cleanUp: function cleanUp(e) {
        t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
      },
      setTransition: function setTransition(e, i, s, n) {
        return n = n || {}, t.each(i, function (t, i) {
          var o = e.cssUnit(i);
          o[0] > 0 && (n[i] = o[0] * s + o[1]);
        }), n;
      }
    }), t.fn.extend({
      effect: function effect() {
        function i(e) {
          function i() {
            l.removeData(r), t.effects.cleanUp(l), "hide" === s.mode && l.hide(), a();
          }

          function a() {
            t.isFunction(h) && h.call(l[0]), t.isFunction(e) && e();
          }

          var l = t(this);
          s.mode = u.shift(), t.uiBackCompat === !1 || o ? "none" === s.mode ? (l[c](), a()) : n.call(l[0], s, i) : (l.is(":hidden") ? "hide" === c : "show" === c) ? (l[c](), a()) : n.call(l[0], s, a);
        }

        var s = e.apply(this, arguments),
            n = t.effects.effect[s.effect],
            o = n.mode,
            a = s.queue,
            l = a || "fx",
            h = s.complete,
            c = s.mode,
            u = [],
            d = function d(e) {
          var i = t(this),
              s = t.effects.mode(i, c) || o;
          i.data(r, !0), u.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e();
        };

        return t.fx.off || !n ? c ? this[c](s.duration, h) : this.each(function () {
          h && h.call(this);
        }) : a === !1 ? this.each(d).each(i) : this.queue(l, d).queue(l, i);
      },
      show: function (t) {
        return function (s) {
          if (i(s)) return t.apply(this, arguments);
          var n = e.apply(this, arguments);
          return n.mode = "show", this.effect.call(this, n);
        };
      }(t.fn.show),
      hide: function (t) {
        return function (s) {
          if (i(s)) return t.apply(this, arguments);
          var n = e.apply(this, arguments);
          return n.mode = "hide", this.effect.call(this, n);
        };
      }(t.fn.hide),
      toggle: function (t) {
        return function (s) {
          if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
          var n = e.apply(this, arguments);
          return n.mode = "toggle", this.effect.call(this, n);
        };
      }(t.fn.toggle),
      cssUnit: function cssUnit(e) {
        var i = this.css(e),
            s = [];
        return t.each(["em", "px", "%", "pt"], function (t, e) {
          i.indexOf(e) > 0 && (s = [parseFloat(i), e]);
        }), s;
      },
      cssClip: function cssClip(t) {
        return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this);
      },
      transfer: function transfer(e, i) {
        var s = t(this),
            n = t(e.to),
            o = "fixed" === n.css("position"),
            a = t("body"),
            r = o ? a.scrollTop() : 0,
            l = o ? a.scrollLeft() : 0,
            h = n.offset(),
            c = {
          top: h.top - r,
          left: h.left - l,
          height: n.innerHeight(),
          width: n.innerWidth()
        },
            u = s.offset(),
            d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
          top: u.top - r,
          left: u.left - l,
          height: s.innerHeight(),
          width: s.innerWidth(),
          position: o ? "fixed" : "absolute"
        }).animate(c, e.duration, e.easing, function () {
          d.remove(), t.isFunction(i) && i();
        });
      }
    }), t.fx.step.clip = function (e) {
      e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
        top: e.pos * (e.end.top - e.start.top) + e.start.top,
        right: e.pos * (e.end.right - e.start.right) + e.start.right,
        bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
        left: e.pos * (e.end.left - e.start.left) + e.start.left
      });
    };
  }(), function () {
    var e = {};
    t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
      e[i] = function (e) {
        return Math.pow(e, t + 2);
      };
    }), t.extend(e, {
      Sine: function Sine(t) {
        return 1 - Math.cos(t * Math.PI / 2);
      },
      Circ: function Circ(t) {
        return 1 - Math.sqrt(1 - t * t);
      },
      Elastic: function Elastic(t) {
        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
      },
      Back: function Back(t) {
        return t * t * (3 * t - 2);
      },
      Bounce: function Bounce(t) {
        for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;) {
          ;
        }

        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
      }
    }), t.each(e, function (e, i) {
      t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
        return 1 - i(1 - t);
      }, t.easing["easeInOut" + e] = function (t) {
        return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
      };
    });
  }();
  var h = t.effects;
  t.effects.define("blind", "hide", function (e, i) {
    var s = {
      up: ["bottom", "top"],
      vertical: ["bottom", "top"],
      down: ["top", "bottom"],
      left: ["right", "left"],
      horizontal: ["right", "left"],
      right: ["left", "right"]
    },
        n = t(this),
        o = e.direction || "up",
        a = n.cssClip(),
        r = {
      clip: t.extend({}, a)
    },
        l = t.effects.createPlaceholder(n);
    r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), r.clip = a), l && l.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("bounce", function (e, i) {
    var s,
        n,
        o,
        a = t(this),
        r = e.mode,
        l = "hide" === r,
        h = "show" === r,
        c = e.direction || "up",
        u = e.distance,
        d = e.times || 5,
        p = 2 * d + (h || l ? 1 : 0),
        f = e.duration / p,
        g = e.easing,
        m = "up" === c || "down" === c ? "top" : "left",
        _ = "up" === c || "left" === c,
        v = 0,
        b = a.queue().length;

    for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), h && (n = {
      opacity: 1
    }, n[m] = o, a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)), l && (u /= Math.pow(2, d - 1)), n = {}, n[m] = o; d > v; v++) {
      s = {}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = l ? 2 * u : u / 2;
    }

    l && (s = {
      opacity: 0
    }, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1);
  }), t.effects.define("clip", "hide", function (e, i) {
    var s,
        n = {},
        o = t(this),
        a = e.direction || "vertical",
        r = "both" === a,
        l = r || "horizontal" === a,
        h = r || "vertical" === a;
    s = o.cssClip(), n.clip = {
      top: h ? (s.bottom - s.top) / 2 : s.top,
      right: l ? (s.right - s.left) / 2 : s.right,
      bottom: h ? (s.bottom - s.top) / 2 : s.bottom,
      left: l ? (s.right - s.left) / 2 : s.left
    }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("drop", "hide", function (e, i) {
    var s,
        n = t(this),
        o = e.mode,
        a = "show" === o,
        r = e.direction || "left",
        l = "up" === r || "down" === r ? "top" : "left",
        h = "up" === r || "left" === r ? "-=" : "+=",
        c = "+=" === h ? "-=" : "+=",
        u = {
      opacity: 0
    };
    t.effects.createPlaceholder(n), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, u[l] = h + s, a && (n.css(u), u[l] = c + s, u.opacity = 1), n.animate(u, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("explode", "hide", function (e, i) {
    function s() {
      b.push(this), b.length === u * d && n();
    }

    function n() {
      p.css({
        visibility: "visible"
      }), t(b).remove(), i();
    }

    var o,
        a,
        r,
        l,
        h,
        c,
        u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
        d = u,
        p = t(this),
        f = e.mode,
        g = "show" === f,
        m = p.show().css("visibility", "hidden").offset(),
        _ = Math.ceil(p.outerWidth() / d),
        v = Math.ceil(p.outerHeight() / u),
        b = [];

    for (o = 0; u > o; o++) {
      for (l = m.top + o * v, c = o - (u - 1) / 2, a = 0; d > a; a++) {
        r = m.left + a * _, h = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
          position: "absolute",
          visibility: "visible",
          left: -a * _,
          top: -o * v
        }).parent().addClass("ui-effects-explode").css({
          position: "absolute",
          overflow: "hidden",
          width: _,
          height: v,
          left: r + (g ? h * _ : 0),
          top: l + (g ? c * v : 0),
          opacity: g ? 0 : 1
        }).animate({
          left: r + (g ? 0 : h * _),
          top: l + (g ? 0 : c * v),
          opacity: g ? 1 : 0
        }, e.duration || 500, e.easing, s);
      }
    }
  }), t.effects.define("fade", "toggle", function (e, i) {
    var s = "show" === e.mode;
    t(this).css("opacity", s ? 0 : 1).animate({
      opacity: s ? 1 : 0
    }, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("fold", "hide", function (e, i) {
    var s = t(this),
        n = e.mode,
        o = "show" === n,
        a = "hide" === n,
        r = e.size || 15,
        l = /([0-9]+)%/.exec(r),
        h = !!e.horizFirst,
        c = h ? ["right", "bottom"] : ["bottom", "right"],
        u = e.duration / 2,
        d = t.effects.createPlaceholder(s),
        p = s.cssClip(),
        f = {
      clip: t.extend({}, p)
    },
        g = {
      clip: t.extend({}, p)
    },
        m = [p[c[0]], p[c[1]]],
        _ = s.queue().length;
    l && (r = parseInt(l[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), s.queue(function (i) {
      d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i();
    }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, _, 4);
  }), t.effects.define("highlight", "show", function (e, i) {
    var s = t(this),
        n = {
      backgroundColor: s.css("backgroundColor")
    };
    "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
      backgroundImage: "none",
      backgroundColor: e.color || "#ffff99"
    }).animate(n, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("size", function (e, i) {
    var s,
        n,
        o,
        a = t(this),
        r = ["fontSize"],
        l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
        c = e.mode,
        u = "effect" !== c,
        d = e.scale || "both",
        p = e.origin || ["middle", "center"],
        f = a.css("position"),
        g = a.position(),
        m = t.effects.scaledDimensions(a),
        _ = e.from || m,
        v = e.to || t.effects.scaledDimensions(a, 0);

    t.effects.createPlaceholder(a), "show" === c && (o = _, _ = v, v = o), n = {
      from: {
        y: _.height / m.height,
        x: _.width / m.width
      },
      to: {
        y: v.height / m.height,
        x: v.width / m.width
      }
    }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, l, n.from.y, _), v = t.effects.setTransition(a, l, n.to.y, v)), n.from.x !== n.to.x && (_ = t.effects.setTransition(a, h, n.from.x, _), v = t.effects.setTransition(a, h, n.to.x, v))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _), v = t.effects.setTransition(a, r, n.to.y, v)), p && (s = t.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left, v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), a.css(_), ("content" === d || "both" === d) && (l = l.concat(["marginTop", "marginBottom"]).concat(r), h = h.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function () {
      var i = t(this),
          s = t.effects.scaledDimensions(i),
          o = {
        height: s.height * n.from.y,
        width: s.width * n.from.x,
        outerHeight: s.outerHeight * n.from.y,
        outerWidth: s.outerWidth * n.from.x
      },
          a = {
        height: s.height * n.to.y,
        width: s.width * n.to.x,
        outerHeight: s.height * n.to.y,
        outerWidth: s.width * n.to.x
      };
      n.from.y !== n.to.y && (o = t.effects.setTransition(i, l, n.from.y, o), a = t.effects.setTransition(i, l, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, h, n.from.x, o), a = t.effects.setTransition(i, h, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function () {
        u && t.effects.restoreStyle(i);
      });
    })), a.animate(v, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: function complete() {
        var e = a.offset();
        0 === v.opacity && a.css("opacity", _.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i();
      }
    });
  }), t.effects.define("scale", function (e, i) {
    var s = t(this),
        n = e.mode,
        o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
        a = t.extend(!0, {
      from: t.effects.scaledDimensions(s),
      to: t.effects.scaledDimensions(s, o, e.direction || "both"),
      origin: e.origin || ["middle", "center"]
    }, e);
    e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i);
  }), t.effects.define("puff", "hide", function (e, i) {
    var s = t.extend(!0, {}, e, {
      fade: !0,
      percent: parseInt(e.percent, 10) || 150
    });
    t.effects.effect.scale.call(this, s, i);
  }), t.effects.define("pulsate", "show", function (e, i) {
    var s = t(this),
        n = e.mode,
        o = "show" === n,
        a = "hide" === n,
        r = o || a,
        l = 2 * (e.times || 5) + (r ? 1 : 0),
        h = e.duration / l,
        c = 0,
        u = 1,
        d = s.queue().length;

    for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1); l > u; u++) {
      s.animate({
        opacity: c
      }, h, e.easing), c = 1 - c;
    }

    s.animate({
      opacity: c
    }, h, e.easing), s.queue(i), t.effects.unshift(s, d, l + 1);
  }), t.effects.define("shake", function (e, i) {
    var s = 1,
        n = t(this),
        o = e.direction || "left",
        a = e.distance || 20,
        r = e.times || 3,
        l = 2 * r + 1,
        h = Math.round(e.duration / l),
        c = "up" === o || "down" === o ? "top" : "left",
        u = "up" === o || "left" === o,
        d = {},
        p = {},
        f = {},
        g = n.queue().length;

    for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, h, e.easing); r > s; s++) {
      n.animate(p, h, e.easing).animate(f, h, e.easing);
    }

    n.animate(p, h, e.easing).animate(d, h / 2, e.easing).queue(i), t.effects.unshift(n, g, l + 1);
  }), t.effects.define("slide", "show", function (e, i) {
    var s,
        n,
        o = t(this),
        a = {
      up: ["bottom", "top"],
      down: ["top", "bottom"],
      left: ["right", "left"],
      right: ["left", "right"]
    },
        r = e.mode,
        l = e.direction || "left",
        h = "up" === l || "down" === l ? "top" : "left",
        c = "up" === l || "left" === l,
        u = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
        d = {};
    t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[h], d[h] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[l][1]] = d.clip[a[l][0]], "show" === r && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = s, d[h] = n), o.animate(d, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  });
  var h;
  t.uiBackCompat !== !1 && (h = t.effects.define("transfer", function (e, i) {
    t(this).transfer(e, i);
  }));
});

/***/ })

}]);