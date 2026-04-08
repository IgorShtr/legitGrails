(function (Flits) {
    var flitsList = (function (t) {
        var e = {};
        function r(n) {
            if (e[n]) return e[n].exports;
            var i = (e[n] = { i: n, l: !1, exports: {} });
            return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
        }
        return (
            (r.m = t),
            (r.c = e),
            (r.i = function (t) {
                return t;
            }),
            (r.d = function (t, e, n) {
                r.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: n });
            }),
            (r.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return r.d(e, "a", e), e;
            }),
            (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (r.p = ""),
            r((r.s = 11))
        );
    })([
        function (t, e, r) {
            var n = r(4),
                i = /\s+/;
            Object.prototype.toString;
            function s(t) {
                if (!t || !t.nodeType) throw new Error("A DOM element reference is required");
                (this.el = t), (this.list = t.classList);
            }
            (t.exports = function (t) {
                return new s(t);
            }),
                (s.prototype.add = function (t) {
                    if (this.list) return this.list.add(t), this;
                    var e = this.array();
                    return ~n(e, t) || e.push(t), (this.el.className = e.join(" ")), this;
                }),
                (s.prototype.remove = function (t) {
                    if (this.list) return this.list.remove(t), this;
                    var e = this.array(),
                        r = n(e, t);
                    return ~r && e.splice(r, 1), (this.el.className = e.join(" ")), this;
                }),
                (s.prototype.toggle = function (t, e) {
                    return this.list
                        ? (void 0 !== e ? e !== this.list.toggle(t, e) && this.list.toggle(t) : this.list.toggle(t), this)
                        : (void 0 !== e ? (e ? this.add(t) : this.remove(t)) : this.has(t) ? this.remove(t) : this.add(t), this);
                }),
                (s.prototype.array = function () {
                    var t = (this.el.getAttribute("class") || "").replace(/^\s+|\s+$/g, "").split(i);
                    return "" === t[0] && t.shift(), t;
                }),
                (s.prototype.has = s.prototype.contains = function (t) {
                    return this.list ? this.list.contains(t) : !!~n(this.array(), t);
                });
        },
        function (t, e, r) {
            var n = window.addEventListener ? "addEventListener" : "attachEvent",
                i = window.removeEventListener ? "removeEventListener" : "detachEvent",
                s = "addEventListener" !== n ? "on" : "",
                a = r(5);
            (e.bind = function (t, e, r, i) {
                t = a(t);
                for (var o = 0; o < t.length; o++) t[o][n](s + e, r, i || !1);
            }),
                (e.unbind = function (t, e, r, n) {
                    t = a(t);
                    for (var o = 0; o < t.length; o++) t[o][i](s + e, r, n || !1);
                });
        },
        function (t, e) {
            t.exports = function (t) {
                return function (e, r, n) {
                    var i = this;
                    (this._values = {}), (this.found = !1), (this.filtered = !1);
                    (this.values = function (e, r) {
                        if (void 0 === e) return i._values;
                        for (var n in e) i._values[n] = e[n];
                        !0 !== r && t.templater.set(i, i.values());
                    }),
                        (this.show = function () {
                            t.templater.show(i);
                        }),
                        (this.hide = function () {
                            t.templater.hide(i);
                        }),
                        (this.matching = function () {
                            return (t.filtered && t.searched && i.found && i.filtered) || (t.filtered && !t.searched && i.filtered) || (!t.filtered && t.searched && i.found) || (!t.filtered && !t.searched);
                        }),
                        (this.visible = function () {
                            return !(!i.elm || i.elm.parentNode != t.list);
                        }),
                        (function (e, r, n) {
                            if (void 0 === r) n ? i.values(e, n) : i.values(e);
                            else {
                                i.elm = r;
                                var s = t.templater.get(i, e);
                                i.values(s);
                            }
                        })(e, r, n);
                };
            };
        },
        function (t, e) {
            t.exports = function (t, e, r, n) {
                return ((n = n || {}).test && n.getElementsByClassName) || (!n.test && document.getElementsByClassName)
                    ? ((a = t), (o = e), r ? a.getElementsByClassName(o)[0] : a.getElementsByClassName(o))
                    : (n.test && n.querySelector) || (!n.test && document.querySelector)
                    ? ((i = t), (s = "." + (s = e)), r ? i.querySelector(s) : i.querySelectorAll(s))
                    : (function (t, e, r) {
                          for (var n = [], i = t.getElementsByTagName("*"), s = i.length, a = new RegExp("(^|\\s)" + e + "(\\s|$)"), o = 0, l = 0; o < s; o++)
                              if (a.test(i[o].className)) {
                                  if (r) return i[o];
                                  (n[l] = i[o]), l++;
                              }
                          return n;
                      })(t, e, r);
                var i, s, a, o;
            };
        },
        function (t, e) {
            var r = [].indexOf;
            t.exports = function (t, e) {
                if (r) return t.indexOf(e);
                for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;
                return -1;
            };
        },
        function (t, e) {
            t.exports = function (t) {
                if (void 0 === t) return [];
                if (null === t) return [null];
                if (t === window) return [window];
                if ("string" == typeof t) return [t];
                if (((e = t), "[object Array]" === Object.prototype.toString.call(e))) return t;
                var e;
                if ("number" != typeof t.length) return [t];
                if ("function" == typeof t && t instanceof Function) return [t];
                for (var r = [], n = 0; n < t.length; n++) (Object.prototype.hasOwnProperty.call(t, n) || n in t) && r.push(t[n]);
                return r.length ? r : [];
            };
        },
        function (t, e) {
            t.exports = function (t) {
                return (t = (t = null === (t = void 0 === t ? "" : t) ? "" : t).toString());
            };
        },
        function (t, e) {
            t.exports = function (t) {
                for (var e, r = Array.prototype.slice.call(arguments, 1), n = 0; (e = r[n]); n++) if (e) for (var i in e) t[i] = e[i];
                return t;
            };
        },
        function (t, e) {
            t.exports = function (t) {
                var e = function (r, n, i) {
                    var s = r.splice(0, 50);
                    (i = (i = i || []).concat(t.add(s))),
                        r.length > 0
                            ? setTimeout(function () {
                                  e(r, n, i);
                              }, 1)
                            : (t.update(), n(i));
                };
                return e;
            };
        },
        function (t, e) {
            t.exports = function (t) {
                return (
                    (t.handlers.filterStart = t.handlers.filterStart || []),
                    (t.handlers.filterComplete = t.handlers.filterComplete || []),
                    function (e) {
                        if ((t.trigger("filterStart"), (t.i = 1), t.reset.filter(), void 0 === e)) t.filtered = !1;
                        else {
                            t.filtered = !0;
                            for (var r = t.items, n = 0, i = r.length; n < i; n++) {
                                var s = r[n];
                                e(s) ? (s.filtered = !0) : (s.filtered = !1);
                            }
                        }
                        return t.update(), t.trigger("filterComplete"), t.visibleItems;
                    }
                );
            };
        },
        function (t, e, r) {
            r(0);
            var n = r(1),
                i = r(7),
                s = r(6),
                a = r(3),
                o = r(19);
            t.exports = function (t, e) {
                e = i({ location: 0, distance: 100, threshold: 0.4, multiSearch: !0, searchClass: "fuzzy-search" }, (e = e || {}));
                var r = {
                    search: function (n, i) {
                        for (var s = e.multiSearch ? n.replace(/ +$/, "").split(/ +/) : [n], a = 0, o = t.items.length; a < o; a++) r.item(t.items[a], i, s);
                    },
                    item: function (t, e, n) {
                        for (var i = !0, s = 0; s < n.length; s++) {
                            for (var a = !1, o = 0, l = e.length; o < l; o++) r.values(t.values(), e[o], n[s]) && (a = !0);
                            a || (i = !1);
                        }
                        t.found = i;
                    },
                    values: function (t, r, n) {
                        if (t.hasOwnProperty(r)) {
                            var i = s(t[r]).toLowerCase();
                            if (o(i, n, e)) return !0;
                        }
                        return !1;
                    },
                };
                return (
                    n.bind(a(t.listContainer, e.searchClass), "keyup", function (e) {
                        var n = e.target || e.srcElement;
                        t.search(n.value, r.search);
                    }),
                    function (e, n) {
                        t.search(e, n, r.search);
                    }
                );
            };
        },
        function (t, e, r) {
            var n = r(18),
                i = r(3),
                s = r(7),
                a = r(4),
                o = r(1),
                l = r(6),
                u = r(0),
                c = r(17),
                f = r(5);
            t.exports = function (t, e, h) {
                var d,
                    v = this,
                    m = r(2)(v),
                    g = r(8)(v),
                    p = r(12)(v);
                (d = {
                    start: function () {
                        (v.listClass = "list"),
                            (v.searchClass = "search"),
                            (v.sortClass = "sort"),
                            (v.page = 1e4),
                            (v.Item = r(2)(v)),
                            (v.i = 1),
                            (v.items = []),
                            (v.visibleItems = []),
                            (v.matchingItems = []),
                            (v.searched = !1),
                            (v.filtered = !1),
                            (v.searchColumns = void 0),
                            (v.handlers = { updated: [] }),
                            (v.valueNames = []),
                            (v.utils = { getByClass: i, extend: s, indexOf: a, events: o, toString: l, naturalSort: n, classes: u, getAttribute: c, toArray: f }),
                            v.utils.extend(v, e),
                            (v.listContainer = "string" == typeof t ? document.getElementById(t) : t),
                            v.listContainer &&
                                ((v.list = i(v.listContainer, v.listClass, !0)),
                                (v.parse = r(13)(v)),
                                (v.templater = r(16)(v)),
                                (v.search = r(14)(v)),
                                (v.filter = r(9)(v)),
                                (v.sort = r(15)(v)),
                                (v.fuzzySearch = r(10)(v, e.fuzzySearch)),
                                this.handlers(),
                                this.items(),
                                this.pagination(),
                                v.update());
                    },
                    handlers: function () {
                        for (var t in v.handlers) v[t] && v.on(t, v[t]);
                    },
                    items: function () {
                        v.parse(v.list), void 0 !== h && v.add(h);
                    },
                    pagination: function () {
                        if (void 0 !== e.pagination) {
                            !0 === e.pagination && (e.pagination = [{}]), void 0 === e.pagination[0] && (e.pagination = [e.pagination]);
                            for (var t = 0, r = e.pagination.length; t < r; t++) p(e.pagination[t]);
                        }
                    },
                }),
                    (this.reIndex = function () {
                        (v.items = []), (v.visibleItems = []), (v.matchingItems = []), (v.searched = !1), (v.filtered = !1), v.parse(v.list);
                    }),
                    (this.toJSON = function () {
                        for (var t = [], e = 0, r = v.items.length; e < r; e++) t.push(v.items[e].values());
                        return t;
                    }),
                    (this.add = function (t, e) {
                        if (0 !== t.length) {
                            if (!e) {
                                var r = [],
                                    n = !1;
                                void 0 === t[0] && (t = [t]);
                                for (var i = 0, s = t.length; i < s; i++) {
                                    var a;
                                    (n = v.items.length > v.page), (a = new m(t[i], void 0, n)), v.items.push(a), r.push(a);
                                }
                                return v.update(), r;
                            }
                            g(t, e);
                        }
                    }),
                    (this.show = function (t, e) {
                        return (this.i = t), (this.page = e), v.update(), v;
                    }),
                    (this.remove = function (t, e, r) {
                        for (var n = 0, i = 0, s = v.items.length; i < s; i++) v.items[i].values()[t] == e && (v.templater.remove(v.items[i], r), v.items.splice(i, 1), s--, i--, n++);
                        return v.update(), n;
                    }),
                    (this.get = function (t, e) {
                        for (var r = [], n = 0, i = v.items.length; n < i; n++) {
                            var s = v.items[n];
                            s.values()[t] == e && r.push(s);
                        }
                        return r;
                    }),
                    (this.size = function () {
                        return v.items.length;
                    }),
                    (this.clear = function () {
                        return v.templater.clear(), (v.items = []), v;
                    }),
                    (this.on = function (t, e) {
                        return v.handlers[t].push(e), v;
                    }),
                    (this.off = function (t, e) {
                        var r = v.handlers[t],
                            n = a(r, e);
                        return n > -1 && r.splice(n, 1), v;
                    }),
                    (this.trigger = function (t) {
                        for (var e = v.handlers[t].length; e--; ) v.handlers[t][e](v);
                        return v;
                    }),
                    (this.reset = {
                        filter: function () {
                            for (var t = v.items, e = t.length; e--; ) t[e].filtered = !1;
                            return v;
                        },
                        search: function () {
                            for (var t = v.items, e = t.length; e--; ) t[e].found = !1;
                            return v;
                        },
                    }),
                    (this.update = function () {
                        var t = v.items,
                            e = t.length;
                        (v.visibleItems = []), (v.matchingItems = []), v.templater.clear();
                        for (var r = 0; r < e; r++)
                            t[r].matching() && v.matchingItems.length + 1 >= v.i && v.visibleItems.length < v.page
                                ? (t[r].show(), v.visibleItems.push(t[r]), v.matchingItems.push(t[r]))
                                : t[r].matching()
                                ? (v.matchingItems.push(t[r]), t[r].hide())
                                : t[r].hide();
                        return v.trigger("updated"), v;
                    }),
                    d.start();
            };
        },
        function (t, e, r) {
            var n = r(0),
                i = r(1),
                s = r(11);
            t.exports = function (t) {
                var e = function (e, i) {
                        var s,
                            o = t.matchingItems.length,
                            l = t.i,
                            u = t.page,
                            c = Math.ceil(o / u),
                            f = Math.ceil(l / u),
                            h = i.innerWindow || 2,
                            d = i.left || i.outerWindow || 0,
                            v = i.right || i.outerWindow || 0;
                        (v = c - v), e.clear();
                        for (var m = 1; m <= c; m++) {
                            var g = f === m ? "active" : "";
                            r.number(m, d, v, f, h)
                                ? ((s = e.add({ page: m, dotted: !1 })[0]), g && n(s.elm).add(g), a(s.elm, m, u))
                                : r.dotted(e, m, d, v, f, h, e.size()) && ((s = e.add({ page: "...", dotted: !0 })[0]), n(s.elm).add("disabled"));
                        }
                    },
                    r = {
                        number: function (t, e, r, n, i) {
                            return this.left(t, e) || this.right(t, r) || this.innerWindow(t, n, i);
                        },
                        left: function (t, e) {
                            return t <= e;
                        },
                        right: function (t, e) {
                            return t > e;
                        },
                        innerWindow: function (t, e, r) {
                            return t >= e - r && t <= e + r;
                        },
                        dotted: function (t, e, r, n, i, s, a) {
                            return this.dottedLeft(t, e, r, n, i, s) || this.dottedRight(t, e, r, n, i, s, a);
                        },
                        dottedLeft: function (t, e, r, n, i, s) {
                            return e == r + 1 && !this.innerWindow(e, i, s) && !this.right(e, n);
                        },
                        dottedRight: function (t, e, r, n, i, s, a) {
                            return !t.items[a - 1].values().dotted && e == n && !this.innerWindow(e, i, s) && !this.right(e, n);
                        },
                    },
                    a = function (e, r, n) {
                        i.bind(e, "click", function () {
                            t.show((r - 1) * n + 1, n);
                        });
                    };
                return function (r) {
                    var n = new s(t.listContainer.id, {
                        listClass: r.paginationClass || "pagination",
                        item: "<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",
                        valueNames: ["page", "dotted"],
                        searchClass: "pagination-search-that-is-not-supposed-to-exist",
                        sortClass: "pagination-sort-that-is-not-supposed-to-exist",
                    });
                    t.on("updated", function () {
                        e(n, r);
                    }),
                        e(n, r);
                };
            };
        },
        function (t, e, r) {
            t.exports = function (t) {
                var e = r(2)(t),
                    n = function (r, n) {
                        for (var i = 0, s = r.length; i < s; i++) t.items.push(new e(n, r[i]));
                    },
                    i = function (e, r) {
                        var s = e.splice(0, 50);
                        n(s, r),
                            e.length > 0
                                ? setTimeout(function () {
                                      i(e, r);
                                  }, 1)
                                : (t.update(), t.trigger("parseComplete"));
                    };
                return (
                    (t.handlers.parseComplete = t.handlers.parseComplete || []),
                    function () {
                        var e = (function (t) {
                                for (var e = t.childNodes, r = [], n = 0, i = e.length; n < i; n++) void 0 === e[n].data && r.push(e[n]);
                                return r;
                            })(t.list),
                            r = t.valueNames;
                        t.indexAsync ? i(e, r) : n(e, r);
                    }
                );
            };
        },
        function (t, e) {
            t.exports = function (t) {
                var e,
                    r,
                    n,
                    i,
                    s = {
                        resetList: function () {
                            (t.i = 1), t.templater.clear(), (i = void 0);
                        },
                        setOptions: function (t) {
                            2 == t.length && t[1] instanceof Array ? (r = t[1]) : 2 == t.length && "function" == typeof t[1] ? ((r = void 0), (i = t[1])) : 3 == t.length ? ((r = t[1]), (i = t[2])) : (r = void 0);
                        },
                        setColumns: function () {
                            0 !== t.items.length && void 0 === r && (r = void 0 === t.searchColumns ? s.toArray(t.items[0].values()) : t.searchColumns);
                        },
                        setSearchString: function (e) {
                            (e = (e = t.utils.toString(e).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&")), (n = e);
                        },
                        toArray: function (t) {
                            var e = [];
                            for (var r in t) e.push(r);
                            return e;
                        },
                    },
                    a = {
                        list: function () {
                            for (var e = 0, r = t.items.length; e < r; e++) a.item(t.items[e]);
                        },
                        item: function (t) {
                            t.found = !1;
                            for (var e = 0, n = r.length; e < n; e++) if (a.values(t.values(), r[e])) return void (t.found = !0);
                        },
                        values: function (r, i) {
                            return !!(r.hasOwnProperty(i) && ((e = t.utils.toString(r[i]).toLowerCase()), "" !== n && e.search(n) > -1));
                        },
                        reset: function () {
                            t.reset.search(), (t.searched = !1);
                        },
                    },
                    o = function (e) {
                        return (
                            t.trigger("searchStart"),
                            s.resetList(),
                            s.setSearchString(e),
                            s.setOptions(arguments),
                            s.setColumns(),
                            "" === n ? a.reset() : ((t.searched = !0), i ? i(n, r) : a.list()),
                            t.update(),
                            t.trigger("searchComplete"),
                            t.visibleItems
                        );
                    };
                return (
                    (t.handlers.searchStart = t.handlers.searchStart || []),
                    (t.handlers.searchComplete = t.handlers.searchComplete || []),
                    t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "keyup", function (e) {
                        var r = e.target || e.srcElement;
                        ("" === r.value && !t.searched) || o(r.value);
                    }),
                    t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "input", function (t) {
                        "" === (t.target || t.srcElement).value && o("");
                    }),
                    o
                );
            };
        },
        function (t, e) {
            t.exports = function (t) {
                var e = {
                        els: void 0,
                        clear: function () {
                            for (var r = 0, n = e.els.length; r < n; r++) t.utils.classes(e.els[r]).remove("asc"), t.utils.classes(e.els[r]).remove("desc");
                        },
                        getOrder: function (e) {
                            var r = t.utils.getAttribute(e, "data-order");
                            return "asc" == r || "desc" == r ? r : t.utils.classes(e).has("desc") ? "asc" : t.utils.classes(e).has("asc") ? "desc" : "asc";
                        },
                        getInSensitive: function (e, r) {
                            var n = t.utils.getAttribute(e, "data-insensitive");
                            r.insensitive = "false" !== n;
                        },
                        setOrder: function (r) {
                            for (var n = 0, i = e.els.length; n < i; n++) {
                                var s = e.els[n];
                                if (t.utils.getAttribute(s, "data-sort") === r.valueName) {
                                    var a = t.utils.getAttribute(s, "data-order");
                                    "asc" == a || "desc" == a ? a == r.order && t.utils.classes(s).add(r.order) : t.utils.classes(s).add(r.order);
                                }
                            }
                        },
                    },
                    r = function () {
                        t.trigger("sortStart");
                        var r = {},
                            n = arguments[0].currentTarget || arguments[0].srcElement || void 0;
                        n
                            ? ((r.valueName = t.utils.getAttribute(n, "data-sort")), e.getInSensitive(n, r), (r.order = e.getOrder(n)))
                            : (((r = arguments[1] || r).valueName = arguments[0]), (r.order = r.order || "asc"), (r.insensitive = void 0 === r.insensitive || r.insensitive)),
                            e.clear(),
                            e.setOrder(r);
                        var i,
                            s = r.sortFunction || t.sortFunction || null,
                            a = "desc" === r.order ? -1 : 1;
                        (i = s
                            ? function (t, e) {
                                  return s(t, e, r) * a;
                              }
                            : function (e, n) {
                                  var i = t.utils.naturalSort;
                                  return (i.alphabet = t.alphabet || r.alphabet || void 0), !i.alphabet && r.insensitive && (i = t.utils.naturalSort.caseInsensitive), i(e.values()[r.valueName], n.values()[r.valueName]) * a;
                              }),
                            t.items.sort(i),
                            t.update(),
                            t.trigger("sortComplete");
                    };
                return (
                    (t.handlers.sortStart = t.handlers.sortStart || []),
                    (t.handlers.sortComplete = t.handlers.sortComplete || []),
                    (e.els = t.utils.getByClass(t.listContainer, t.sortClass)),
                    t.utils.events.bind(e.els, "click", r),
                    t.on("searchStart", e.clear),
                    t.on("filterStart", e.clear),
                    r
                );
            };
        },
        function (t, e) {
            var r = function (t) {
                var e,
                    r = this;
                (this.clearSourceItem = function (e, r) {
                    for (var n = 0, i = r.length; n < i; n++) {
                        var s;
                        if (r[n].data) for (var a = 0, o = r[n].data.length; a < o; a++) e.setAttribute("data-" + r[n].data[a], "");
                        else r[n].attr && r[n].name ? (s = t.utils.getByClass(e, r[n].name, !0)) && s.setAttribute(r[n].attr, "") : (s = t.utils.getByClass(e, r[n], !0)) && (s.innerHTML = "");
                        s = void 0;
                    }
                    return e;
                }),
                    (this.getItemSource = function (e) {
                        if (void 0 === e) {
                            for (var r = t.list.childNodes, n = 0, i = r.length; n < i; n++) if (void 0 === r[n].data) return r[n].cloneNode(!0);
                        } else {
                            if (/<tr[\s>]/g.exec(e)) {
                                var s = document.createElement("tbody");
                                return (s.innerHTML = e), s.firstChild;
                            }
                            if (-1 !== e.indexOf("<")) {
                                var a = document.createElement("div");
                                return (a.innerHTML = e), a.firstChild;
                            }
                            var o = document.getElementById(t.item);
                            if (o) return o;
                        }
                    }),
                    (this.get = function (e, n) {
                        r.create(e);
                        for (var i = {}, s = 0, a = n.length; s < a; s++) {
                            var o;
                            if (n[s].data) for (var l = 0, u = n[s].data.length; l < u; l++) i[n[s].data[l]] = t.utils.getAttribute(e.elm, "data-" + n[s].data[l]);
                            else
                                n[s].attr && n[s].name
                                    ? ((o = t.utils.getByClass(e.elm, n[s].name, !0)), (i[n[s].name] = o ? t.utils.getAttribute(o, n[s].attr) : ""))
                                    : ((o = t.utils.getByClass(e.elm, n[s], !0)), (i[n[s]] = o ? o.innerHTML : ""));
                            o = void 0;
                        }
                        return i;
                    }),
                    (this.set = function (e, n) {
                        var i = function (r, n) {
                            var i,
                                s = (function (e) {
                                    for (var r = 0, n = t.valueNames.length; r < n; r++)
                                        if (t.valueNames[r].data) {
                                            for (var i = t.valueNames[r].data, s = 0, a = i.length; s < a; s++) if (i[s] === e) return { data: e };
                                        } else {
                                            if (t.valueNames[r].attr && t.valueNames[r].name && t.valueNames[r].name == e) return t.valueNames[r];
                                            if (t.valueNames[r] === e) return e;
                                        }
                                })(r);
                            s &&
                                (s.data ? e.elm.setAttribute("data-" + s.data, n) : s.attr && s.name ? (i = t.utils.getByClass(e.elm, s.name, !0)) && i.setAttribute(s.attr, n) : (i = t.utils.getByClass(e.elm, s, !0)) && (i.innerHTML = n),
                                (i = void 0));
                        };
                        if (!r.create(e)) for (var s in n) n.hasOwnProperty(s) && i(s, n[s]);
                    }),
                    (this.create = function (t) {
                        if (void 0 !== t.elm) return !1;
                        if (void 0 === e) throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");
                        var n = e.cloneNode(!0);
                        return n.removeAttribute("id"), (t.elm = n), r.set(t, t.values()), !0;
                    }),
                    (this.remove = function (e) {
                        e.elm.parentNode === t.list && t.list.removeChild(e.elm);
                    }),
                    (this.show = function (e) {
                        r.create(e), t.list.appendChild(e.elm);
                    }),
                    (this.hide = function (e) {
                        void 0 !== e.elm && e.elm.parentNode === t.list && t.list.removeChild(e.elm);
                    }),
                    (this.clear = function () {
                        if (t.list.hasChildNodes()) for (; t.list.childNodes.length >= 1; ) t.list.removeChild(t.list.firstChild);
                    }),
                    (e = r.getItemSource(t.item)) && (e = r.clearSourceItem(e, t.valueNames));
            };
            t.exports = function (t) {
                return new r(t);
            };
        },
        function (t, e) {
            t.exports = function (t, e) {
                var r = (t.getAttribute && t.getAttribute(e)) || null;
                if (!r) for (var n = t.attributes.length, i = 0; i < n; i++) void 0 !== e[i] && e[i].nodeName === e && (r = e[i].nodeValue);
                return r;
            };
        },
        function (t, e, r) {
            "use strict";
            var n,
                i,
                s = 0;
            function a(t) {
                return t >= 48 && t <= 57;
            }
            function o(t, e) {
                for (var r = (t += "").length, n = (e += "").length, o = 0, l = 0; o < r && l < n; ) {
                    var u = t.charCodeAt(o),
                        c = e.charCodeAt(l);
                    if (a(u)) {
                        if (!a(c)) return u - c;
                        for (var f = o, h = l; 48 === u && ++f < r; ) u = t.charCodeAt(f);
                        for (; 48 === c && ++h < n; ) c = e.charCodeAt(h);
                        for (var d = f, v = h; d < r && a(t.charCodeAt(d)); ) ++d;
                        for (; v < n && a(e.charCodeAt(v)); ) ++v;
                        var m = d - f - v + h;
                        if (m) return m;
                        for (; f < d; ) if ((m = t.charCodeAt(f++) - e.charCodeAt(h++))) return m;
                        (o = d), (l = v);
                    } else {
                        if (u !== c) return u < s && c < s && -1 !== i[u] && -1 !== i[c] ? i[u] - i[c] : u - c;
                        ++o, ++l;
                    }
                }
                return r - n;
            }
            (o.caseInsensitive = o.i = function (t, e) {
                return o(("" + t).toLowerCase(), ("" + e).toLowerCase());
            }),
                Object.defineProperties(o, {
                    alphabet: {
                        get: function () {
                            return n;
                        },
                        set: function (t) {
                            i = [];
                            var e = 0;
                            if ((n = t)) for (; e < n.length; e++) i[n.charCodeAt(e)] = e;
                            for (s = i.length, e = 0; e < s; e++) void 0 === i[e] && (i[e] = -1);
                        },
                    },
                }),
                (t.exports = o);
        },
        function (t, e) {
            t.exports = function (t, e, r) {
                var n = r.location || 0,
                    i = r.distance || 100,
                    s = r.threshold || 0.4;
                if (e === t) return !0;
                if (e.length > 32) return !1;
                var a = n,
                    o = (function () {
                        var t,
                            r = {};
                        for (t = 0; t < e.length; t++) r[e.charAt(t)] = 0;
                        for (t = 0; t < e.length; t++) r[e.charAt(t)] |= 1 << (e.length - t - 1);
                        return r;
                    })();
                function l(t, r) {
                    var n = t / e.length,
                        s = Math.abs(a - r);
                    return i ? n + s / i : s ? 1 : n;
                }
                var u = s,
                    c = t.indexOf(e, a);
                -1 != c && ((u = Math.min(l(0, c), u)), -1 != (c = t.lastIndexOf(e, a + e.length)) && (u = Math.min(l(0, c), u)));
                var f,
                    h,
                    d = 1 << (e.length - 1);
                c = -1;
                for (var v, m = e.length + t.length, g = 0; g < e.length; g++) {
                    for (f = 0, h = m; f < h; ) l(g, a + h) <= u ? (f = h) : (m = h), (h = Math.floor((m - f) / 2 + f));
                    m = h;
                    var p = Math.max(1, a - h + 1),
                        C = Math.min(a + h, t.length) + e.length,
                        y = Array(C + 2);
                    y[C + 1] = (1 << g) - 1;
                    for (var b = C; b >= p; b--) {
                        var w = o[t.charAt(b - 1)];
                        if (((y[b] = 0 === g ? ((y[b + 1] << 1) | 1) & w : (((y[b + 1] << 1) | 1) & w) | ((v[b + 1] | v[b]) << 1) | 1 | v[b + 1]), y[b] & d)) {
                            var x = l(g, b - 1);
                            if (x <= u) {
                                if (((u = x), !((c = b - 1) > a))) break;
                                p = Math.max(1, 2 * a - c);
                            }
                        }
                    }
                    if (l(g + 1, a) > u) break;
                    v = y;
                }
                return !(c < 0);
            };
        },
    ]);
    (function (factory) {
        "use strict";
        if (typeof define === "function" && define.amd) {
            define(["Flits"], factory);
        } else if (typeof exports !== "undefined") {
            module.exports = factory(require("Flits"));
        } else {
            factory(Flits);
        }
    })(function (Flits) {
        "use strict";
        var FlitsSlider = window.FlitsSlider || {};
        FlitsSlider = (function () {
            var instanceUid = 0;
            function FlitsSlider(element, settings) {
                var _this = this,
                    dataSettings;
                _this.defaults = {
                    appendArrows: Flits(element),
                    appendDots: Flits(element),
                    arrows: true,
                    nextArrow:
                        '<button type="button" class="flits-slider-next flits-slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 13.77 25"><path id="Layer_2" data-name="Layer 2" d="M13.4,11.61,2.16.37A1.26,1.26,0,0,0,.37,2.15L10.72,12.5.37,22.85a1.26,1.26,0,0,0,1.79,1.78L13.4,13.39A1.26,1.26,0,0,0,13.4,11.61Z" transform="translate(0 0)"/></svg></button>',
                    prevArrow:
                        '<button type="button" class="flits-slider-prev flits-slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 13.77 25"><path id="Layer_2" data-name="Layer 2" d="M.37,13.39,11.61,24.63a1.26,1.26,0,0,0,1.79-1.78L3,12.5,13.4,2.15A1.26,1.26,0,0,0,11.61.37L.37,11.61A1.26,1.26,0,0,0,.37,13.39Z" transform="translate(0 0)"/></svg></button>',
                    dots: true,
                    dotsClass: "flits-slider-dots",
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    initialSlide: 0,
                    prevBtn: null,
                    nextBtn: null,
                    customPaging: function (slider, i) {
                        return Flits('<button type="button" />').text(i + 1);
                    },
                    speed: 300,
                    scrolling: false,
                    dragging: false,
                    respondTo: "window",
                    responsive: null,
                    initialSlide: 0,
                    mobileFirst: false,
                };
                _this.initials = {
                    currentSlide: 0,
                    listWidth: null,
                    listHeight: null,
                    slides: null,
                    slideCount: null,
                    list: null,
                    slideTrack: null,
                    itemClass: "flits-slider-slide",
                    _prevArrow: null,
                    _nextArrow: null,
                    _dots: null,
                    slideWidth: null,
                    unslicked: false,
                    mouseDown: false,
                };
                Flits.extend(_this, _this.initials);
                _this.windowWidth = 0;
                _this.breakpoints = [];
                _this.breakpointSettings = [];
                _this.activeBreakpoint = null;
                _this.respondTo = null;
                _this.slidesCache = null;
                _this.slider = Flits(element);
                dataSettings = Flits(element).data("flits-slider") || {};
                _this.options = Flits.extend({}, _this.defaults, settings, dataSettings);
                _this.currentSlide = _this.options.initialSlide;
                _this.originalSettings = _this.options;
                _this.changeSlide = Flits.proxy(_this.changeSlide, _this);
                _this.swipeHandler = Flits.proxy(_this.swipeHandler, _this);
                _this.instanceUid = instanceUid++;
                _this.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
                _this.registerBreakpoints();
                _this.init(true);
            }
            return FlitsSlider;
        })();
        FlitsSlider.prototype.addSlide = FlitsSlider.prototype.sliderAdd = function (markup, index, addBefore) {
            var _this = this;
            if (typeof index === "boolean") {
                addBefore = index;
                index = null;
            } else if (index < 0 || index >= _this.slideCount) {
                return false;
            }
            _this.unload();
            if (typeof index === "number") {
                if (index === 0 && _this.slides.length === 0) {
                    Flits(markup).appendTo(_this.slideTrack);
                } else if (addBefore) {
                    Flits(markup).insertBefore(_this.slides.eq(index));
                } else {
                    Flits(markup).insertAfter(_this.slides.eq(index));
                }
            } else {
                if (addBefore === true) {
                    Flits(markup).prependTo(_this.slideTrack);
                } else {
                    Flits(markup).appendTo(_this.slideTrack);
                }
            }
            _this.slides = _this.slideTrack.children(this.options.slide);
            _this.slideTrack.children(this.options.slide).detach();
            _this.slideTrack.append(_this.slides);
            _this.slides.each(function (index, element) {
                Flits(element).attr("data-flits-slider-index", index);
            });
            _this.slidesCache = _this.slides;
            _this.reinit();
        };
        FlitsSlider.prototype.applyTransition = function (targetLeft) {
            var _this = this,
                animType,
                transformType,
                transitionType,
                targetLeft,
                transition = {},
                animProps = {},
                bodyStyle = document.body.style;
            if (bodyStyle.OTransform !== undefined) {
                animType = "OTransform";
                transformType = "-o-transform";
                transitionType = "OTransition";
                if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) animType = false;
            }
            if (bodyStyle.MozTransform !== undefined) {
                animType = "MozTransform";
                transformType = "-moz-transform";
                transitionType = "MozTransition";
                if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) animType = false;
            }
            if (bodyStyle.webkitTransform !== undefined) {
                animType = "webkitTransform";
                transformType = "-webkit-transform";
                transitionType = "webkitTransition";
                if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) animType = false;
            }
            if (bodyStyle.msTransform !== undefined) {
                animType = "msTransform";
                transformType = "-ms-transform";
                transitionType = "msTransition";
                if (bodyStyle.msTransform === undefined) animType = false;
            }
            if (bodyStyle.transform !== undefined && animType !== false) {
                animType = "transform";
                transformType = "transform";
                transitionType = "transition";
            }
            transition[transitionType] = transformType + " " + _this.options.speed + "ms " + "ease";
            _this.slideTrack.css(transition);
            transition[transitionType] = "";
            targetLeft = Math.ceil(targetLeft);
            animProps[animType] = "translate3d(" + targetLeft + "px, 0px, 0px)";
            _this.slideTrack.css(animProps);
            setTimeout(function () {
                _this.slideTrack.css(transition);
            }, _this.options.speed);
        };
        FlitsSlider.prototype.buildArrows = function () {
            var _this = this;
            if (_this.options.arrows === true) {
                _this._prevArrow = Flits(_this.options.prevArrow).addClass("flits-slider-arrow");
                _this._nextArrow = Flits(_this.options.nextArrow).addClass("flits-slider-arrow");
                if (_this.slideCount > _this.options.slidesToShow) {
                    _this._prevArrow.removeClass("flits-slider-hidden");
                    _this._nextArrow.removeClass("flits-slider-hidden");
                    if (_this.htmlExpr.test(_this.options.prevArrow)) {
                        _this._prevArrow.prependTo(_this.options.appendArrows);
                    }
                    if (_this.htmlExpr.test(_this.options.nextArrow)) {
                        _this._nextArrow.appendTo(_this.options.appendArrows);
                    }
                } else {
                    _this._nextArrow.add(_this._nextArrow).addClass("flits-slider-hidden").attr({ "aria-disabled": "true", tabindex: "-1" });
                }
            }
        };
        FlitsSlider.prototype.buildDots = function () {
            var _this = this,
                i,
                dot;
            if (_this.options.dots === true && _this.slideCount > _this.options.slidesToShow) {
                _this.slider.addClass("flits-slider-dotted");
                dot = Flits("<ul />").addClass(_this.options.dotsClass);
                for (i = 0; i < _this.getDotCount(); i++) {
                    dot.append(Flits("<li />").append(_this.options.customPaging.call(this, _this, i)));
                }
                _this._dots = dot.appendTo(_this.options.appendDots);
                _this._dots.find("li").first().addClass("flits-slider-active");
            }
        };
        FlitsSlider.prototype.buildOut = function () {
            var _this = this;
            _this.slides = _this.slider.children().addClass("flits-slider-slide");
            _this.slideCount = _this.slides.length;
            _this.slides.each(function (index, element) {
                Flits(element)
                    .attr("data-flits-slider-index", index)
                    .data("originalStyling", Flits(element).attr("style") || "");
            });
            _this.slider.addClass("flits-slider");
            _this.slideTrack = _this.slideCount === 0 ? Flits('<div class="flits-slider-track"/>').appendTo(_this.slider) : _this.slides.wrapAll('<div class="flits-slider-track"/>').parent();
            if (_this.slideCount <= _this.options.slidesToShow) {
                _this.slideTrack.addClass("flits-slider-track-center");
            }
            _this.list = _this.slideTrack.wrap('<div class="flits-slider-list"/>').parent();
            _this.slideTrack.css("opacity", 0);
            if (_this.options.scrolling === true && _this.slideCount > _this.options.slidesToShow) {
                _this.list.addClass("flits-slider-list-scroll");
            }
            if (_this.options.dragging === true && _this.slideCount > _this.options.slidesToShow) {
                _this.list.addClass("flits-slider-draggable");
            }
            _this.buildArrows();
            _this.buildDots();
            _this.updateDots();
            _this.setSlideClasses(typeof _this.currentSlide === "number" ? _this.currentSlide : 0);
        };
        FlitsSlider.prototype.changeSlide = function (event) {
            var _this = this,
                target = Flits(event.currentTarget),
                indexOffset,
                slideOffset,
                unevenOffset;
            if (target.is("a")) {
                event.preventDefault();
            }
            if (!target.is("li")) {
                target = target.closest("li");
            }
            switch (event.data.message) {
                case "previous":
                    if (_this.slideCount > _this.options.slidesToShow) {
                        _this.slideHandler(_this.currentSlide - _this.options.slidesToShow, false);
                    }
                    break;
                case "next":
                    if (_this.slideCount > _this.options.slidesToShow) {
                        _this.slideHandler(_this.currentSlide + _this.options.slidesToShow, false);
                    }
                    break;
                case "scrollPrevious":
                    if (_this.slideCount > _this.options.slidesToShow) {
                        _this.list.animate({ scrollLeft: (_this.currentSlide - _this.options.slidesToShow) * _this.slideWidth }, _this.options.speed);
                    }
                    break;
                case "scrollNext":
                    if (_this.slideCount > _this.options.slidesToShow) {
                        _this.list.animate({ scrollLeft: (_this.currentSlide + _this.options.slidesToShow) * _this.slideWidth }, _this.options.speed);
                    }
                    break;
                case "index":
                    var index = event.data.index === 0 ? 0 : event.data.index || target.index() * _this.options.slidesToShow;
                    _this.slideHandler(_this.checkNavigable(index), false);
                    break;
                case "slideDots":
                    var index = event.data.index === 0 ? 0 : event.data.index || target.index() * _this.options.slidesToShow;
                    if (_this.slideCount > _this.options.slidesToShow) {
                        _this.list.animate({ scrollLeft: parseInt(index) * _this.slideWidth }, _this.options.speed);
                    }
                default:
                    return;
            }
        };
        FlitsSlider.prototype.checkNavigable = function (index) {
            var _this = this,
                navigables,
                prevNavigable;
            navigables = _this.getNavigableIndexes();
            prevNavigable = 0;
            if (index > navigables[navigables.length - 1]) {
                index = navigables[navigables.length - 1];
            } else {
                for (var n in navigables) {
                    if (index < navigables[n]) {
                        index = prevNavigable;
                        break;
                    }
                    prevNavigable = navigables[n];
                }
            }
            return index;
        };
        FlitsSlider.prototype.checkResponsive = function (initial, forceUpdate) {
            var _this = this,
                breakpoint,
                targetBreakpoint,
                respondToWidth,
                triggerBreakpoint = false;
            var sliderWidth = _this.slider.width();
            var windowWidth = window.innerWidth || Flits(window).width();
            if (_this.respondTo === "window") {
                respondToWidth = windowWidth;
            } else if (_this.respondTo === "slider") {
                respondToWidth = sliderWidth;
            } else if (_this.respondTo === "min") {
                respondToWidth = Math.min(windowWidth, sliderWidth);
            }
            if (_this.options.responsive && _this.options.responsive.length && _this.options.responsive !== null) {
                targetBreakpoint = null;
                for (breakpoint in _this.breakpoints) {
                    if (_this.breakpoints.hasOwnProperty(breakpoint)) {
                        if (_this.originalSettings.mobileFirst === false) {
                            if (respondToWidth < _this.breakpoints[breakpoint]) {
                                targetBreakpoint = _this.breakpoints[breakpoint];
                            }
                        } else {
                            if (respondToWidth > _this.breakpoints[breakpoint]) {
                                targetBreakpoint = _this.breakpoints[breakpoint];
                            }
                        }
                    }
                }
                if (targetBreakpoint !== null) {
                    if (_this.activeBreakpoint !== null) {
                        if (targetBreakpoint !== _this.activeBreakpoint || forceUpdate) {
                            _this.activeBreakpoint = targetBreakpoint;
                            if (_this.breakpointSettings[targetBreakpoint] === "unslick") {
                                _this.unslick(targetBreakpoint);
                            } else {
                                _this.options = Flits.extend({}, _this.originalSettings, _this.breakpointSettings[targetBreakpoint]);
                                if (initial === true) {
                                    _this.currentSlide = _this.options.initialSlide;
                                }
                                _this.refresh(initial);
                            }
                            triggerBreakpoint = targetBreakpoint;
                        }
                    } else {
                        _this.activeBreakpoint = targetBreakpoint;
                        if (_this.breakpointSettings[targetBreakpoint] === "unslick") {
                            _this.unslick(targetBreakpoint);
                        } else {
                            _this.options = Flits.extend({}, _this.originalSettings, _this.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _this.currentSlide = _this.options.initialSlide;
                            }
                            _this.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    if (_this.activeBreakpoint !== null) {
                        _this.activeBreakpoint = null;
                        _this.options = _this.originalSettings;
                        if (initial === true) {
                            _this.currentSlide = _this.options.initialSlide;
                        }
                        _this.refresh(initial);
                        triggerBreakpoint = targetBreakpoint;
                    }
                }
                if (!initial && triggerBreakpoint !== false) {
                    _this.slider.trigger("breakpoint", [_this, triggerBreakpoint]);
                }
            }
        };
        FlitsSlider.prototype.cleanUpEvents = function () {
            var _this = this;
            if (_this.options.dots && _this._dots !== null) {
                Flits("li", _this._dots).off("click.flitsSlider", _this.changeSlide);
            }
            if (_this.options.arrows === true && _this.slideCount > _this.options.slidesToShow) {
                _this._prevArrow && _this._prevArrow.off("click.flitsSlider", _this.changeSlide);
                _this._nextArrow && _this._nextArrow.off("click.flitsSlider", _this.changeSlide);
            }
            if (_this.options.scrolling === true && _this.slideCount > _this.options.slidesToShow) {
                _this.list.off("scroll.flitsSlider", function (event) {
                    event.preventDefault();
                    var indexes = _this.getNavigableIndexes();
                    indexes.forEach(function (e, v) {
                        if (e * _this.slideWidth <= event.originalEvent.currentTarget.scrollLeft) {
                            _this.currentSlide = e;
                            _this.setSlideClasses(_this.currentSlide);
                            _this.updateDots();
                            _this.updateArrows();
                        }
                    });
                });
            }
            if (_this.options.dragging === true && _this.slideCount > _this.options.slidesToShow) {
                _this.list.off("mousedown.flitsSlider", _this.swipeHandler);
                _this.list.off("mousemove.flitsSlider", _this.swipeHandler);
                _this.list.off("mouseup.flitsSlider", _this.swipeHandler);
                _this.list.off("mouseleave.flitsSlider", _this.swipeHandler);
            }
        };
        FlitsSlider.prototype.destroy = function (refresh) {
            var _this = this;
            _this.cleanUpEvents();
            if (_this._dots) {
                _this._dots.remove();
            }
            if (_this._prevArrow && _this._prevArrow.length) {
                _this._prevArrow.removeClass("flits-slider-disabled flits-slider-arrow flits-slider-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
                if (_this.htmlExpr.test(_this.options.prevArrow)) {
                    _this._prevArrow.remove();
                }
            }
            if (_this._nextArrow && _this._nextArrow.length) {
                _this._nextArrow.removeClass("flits-slider-disabled flits-slider-arrow flits-slider-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
                if (_this.htmlExpr.test(_this.options.nextArrow)) {
                    _this._nextArrow.remove();
                }
            }
            if (_this.slides) {
                _this.slides
                    .removeClass("flits-slider-slide flits-slider-slide-current flits-slider-slide-active")
                    .removeAttr("data-flits-slider-index")
                    .each(function () {
                        Flits(this).attr("style", Flits(this).data("originalStyling"));
                    });
                _this.slideTrack.children(this.options.slide).detach();
                _this.slideTrack.detach();
                _this.list.detach();
                _this.slider.append(_this.slides);
            }
            _this.slider.removeClass("flits-slider");
            _this.slider.removeClass("flits-slider-initialized");
            _this.slider.removeClass("flits-slider-dotted");
            _this.unslicked = true;
            if (!refresh) {
                _this.slider.trigger("destroy", [_this]);
            }
        };
        FlitsSlider.prototype.getDotCount = function () {
            var _this = this,
                count;
            count = _this.slideCount / _this.options.slidesToShow;
            return count;
        };
        FlitsSlider.prototype.getLeft = function (slideIndex) {
            var _this = this,
                targetLeft,
                slideOffset;
            slideOffset = 0;
            if (slideIndex + _this.options.slidesToShow > _this.slideCount) {
                slideOffset = (slideIndex + _this.options.slidesToShow - _this.slideCount) * _this.slideWidth;
            }
            if (_this.slideCount <= _this.options.slidesToShow) {
                slideOffset = 0;
            }
            targetLeft = slideIndex * _this.slideWidth * -1 + slideOffset;
            return targetLeft;
        };
        FlitsSlider.prototype.getNavigableIndexes = function () {
            var _this = this,
                breakPoint = 0,
                counter = 0,
                indexes = [],
                max;
            max = _this.slideCount;
            while (breakPoint < max) {
                indexes.push(breakPoint);
                breakPoint = counter + _this.options.slidesToShow;
                counter += _this.options.slidesToShow;
            }
            return indexes;
        };
        FlitsSlider.prototype.goTo = FlitsSlider.prototype.sliderGoTo = function (slide) {
            var _this = this;
            if (_this.options.scrolling) {
                _this.list.animate({ scrollLeft: parseInt(slide) * _this.slideWidth }, _this.options.speed);
            } else {
                _this.changeSlide({ data: { message: "index", index: parseInt(slide) } });
            }
        };
        FlitsSlider.prototype.init = function (creation) {
            var _this = this;
            if (!Flits(_this.slider).hasClass("flits-slider-initialized")) {
                Flits(_this.slider).addClass("flits-slider-initialized");
                _this.buildOut();
                _this.loadSlider();
                _this.initializeEvents();
                _this.updateArrows();
                _this.updateDots();
                _this.checkResponsive(true);
                _this.slider.trigger("sliderInit", [_this]);
            }
        };
        FlitsSlider.prototype.initArrowEvents = function () {
            var _this = this;
            var scroll,
                _scroll = null;
            var scrollCount,
                _scrollCount = null;
            if (_this.options.arrows === true && _this.slideCount > _this.options.slidesToShow) {
                if (!_this.options.scrolling) {
                    _this._prevArrow.off("click.flitsSlider").on("click.flitsSlider", { message: "previous" }, _this.changeSlide);
                    _this._nextArrow.off("click.flitsSlider").on("click.flitsSlider", { message: "next" }, _this.changeSlide);
                } else {
                    _this._prevArrow.off("click.flitsSlider").on("click.flitsSlider", { message: "scrollPrevious" }, _this.changeSlide);
                    _this._nextArrow.off("click.flitsSlider").on("click.flitsSlider", { message: "scrollNext" }, _this.changeSlide);
                }
            }
        };
        FlitsSlider.prototype.initDotEvents = function () {
            var _this = this;
            if (_this.options.dots === true && _this.slideCount > _this.options.slidesToShow) {
                if (!_this.options.scrolling) {
                    Flits("li", _this._dots).on("click.flitsSlider", { message: "index" }, _this.changeSlide);
                } else {
                    Flits("li", _this._dots).on("click.flitsSlider", { message: "slideDots" }, _this.changeSlide);
                }
            }
        };
        FlitsSlider.prototype.initDragEvents = function () {
            var _this = this;
            if (_this.options.dragging === true && _this.slideCount > _this.options.slidesToShow) {
                _this.list.on("mousedown.flitsSlider", { action: "start" }, _this.swipeHandler);
                _this.list.on("mousemove.flitsSlider", { action: "move" }, _this.swipeHandler);
                _this.list.on("mouseup.flitsSlider", { action: "end" }, _this.swipeHandler);
                _this.list.on("mouseleave.flitsSlider", { action: "end" }, _this.swipeHandler);
            }
        };
        FlitsSlider.prototype.initScrollEvents = function () {
            var _this = this,
                remainder;
            if (_this.options.scrolling === true && _this.slideCount > _this.options.slidesToShow) {
                _this.list.off("scroll.flitsSlider").on("scroll.flitsSlider", function (event) {
                    event.preventDefault();
                    var indexes = _this.getNavigableIndexes();
                    indexes.forEach(function (e, v) {
                        var index = e;
                        if (index >= 0 && index <= _this.slideCount - _this.options.slidesToShow) {
                        } else if (_this.slider.find(".flits-slider-slide").length <= _this.options.slidesToShow) {
                        } else {
                            remainder = _this.slideCount % _this.options.slidesToShow;
                            if (remainder != 0) {
                                index = index - (_this.options.slidesToShow - remainder);
                            }
                        }
                        if (index * _this.slideWidth <= Math.ceil(event.originalEvent.currentTarget.scrollLeft)) {
                            _this.currentSlide = e;
                            _this.setSlideClasses(_this.currentSlide);
                            _this.updateDots();
                            _this.updateArrows();
                        }
                    });
                });
            }
        };
        FlitsSlider.prototype.initUI = function () {
            var _this = this;
            if (_this.options.arrows === true && _this.slideCount > _this.options.slidesToShow) {
                _this._prevArrow.show();
                _this._nextArrow.show();
            }
            if (_this.options.dots === true && _this.slideCount > _this.options.slidesToShow) {
                _this._dots.show();
            }
        };
        FlitsSlider.prototype.initializeEvents = function () {
            var _this = this;
            _this.initArrowEvents();
            _this.initDragEvents();
            _this.initDotEvents();
            _this.initScrollEvents();
            Flits(window).on("resize.flitsSlider.flitsSlider" + _this.instanceUid, Flits.proxy(_this.resize, _this));
        };
        FlitsSlider.prototype.loadSlider = function () {
            var _this = this;
            _this.setDimensions();
            _this.slideTrack.css({ opacity: 1 });
            _this.initUI();
        };
        FlitsSlider.prototype.next = FlitsSlider.prototype.sliderNext = function () {
            var _this = this;
            _this.changeSlide({ data: { message: "next" } });
        };
        FlitsSlider.prototype.prev = FlitsSlider.prototype.sliderPrev = function () {
            var _this = this;
            _this.changeSlide({ data: { message: "previous" } });
        };
        FlitsSlider.prototype.refresh = function (initializing) {
            var _this = this,
                currentSlide;
            if (_this.slideCount <= _this.options.slidesToShow) {
                _this.currentSlide = 0;
            }
            currentSlide = _this.currentSlide;
            _this.destroy(true);
            Flits.extend(_this, _this.initials, { currentSlide: currentSlide });
            _this.init();
            if (!initializing) {
                if (_this.options.scrolling) {
                    _this.list.animate({ scrollLeft: currentSlide * _this.slideWidth }, _this.options.speed);
                } else {
                    _this.changeSlide({ data: { message: "index", index: currentSlide } });
                }
            }
        };
        FlitsSlider.prototype.registerBreakpoints = function () {
            var _this = this,
                breakpoint,
                currentBreakpoint,
                l,
                responsiveSettings = _this.options.responsive || null;
            if (Flits.type(responsiveSettings) === "array" && responsiveSettings.length) {
                _this.respondTo = _this.options.respondTo || "window";
                for (breakpoint in responsiveSettings) {
                    l = _this.breakpoints.length - 1;
                    if (responsiveSettings.hasOwnProperty(breakpoint)) {
                        currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
                        while (l >= 0) {
                            if (_this.breakpoints[l] && _this.breakpoints[l] === currentBreakpoint) {
                                _this.breakpoints.splice(l, 1);
                            }
                            l--;
                        }
                        _this.breakpoints.push(currentBreakpoint);
                        _this.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                    }
                }
                _this.breakpoints.sort(function (a, b) {
                    return _this.options.mobileFirst ? a - b : b - a;
                });
            }
        };
        FlitsSlider.prototype.reinit = function () {
            var _this = this;
            _this.slides = _this.slideTrack.children(_this.options.slide).addClass("flits-slider-slide");
            _this.slideCount = _this.slides.length;
            if (_this.currentSlide >= _this.slideCount && _this.currentSlide !== 0) {
                _this.currentSlide = _this.currentSlide - _this.options.slidesToShow;
            }
            if (_this.slideCount <= _this.options.slidesToShow) {
                _this.currentSlide = 0;
            }
            _this.registerBreakpoints();
            _this.buildArrows();
            _this.updateArrows();
            _this.initArrowEvents();
            _this.buildDots();
            _this.updateDots();
            _this.initDotEvents();
            _this.checkResponsive(false, true);
            _this.setSlideClasses(typeof _this.currentSlide === "number" ? _this.currentSlide : 0);
            _this.setPosition();
            _this.slider.trigger("reInit", [_this]);
        };
        FlitsSlider.prototype.resize = function () {
            var _this = this;
            if (Flits(window).width() !== _this.windowWidth) {
                clearTimeout(_this.windowDelay);
                _this.windowDelay = window.setTimeout(function () {
                    _this.windowWidth = Flits(window).width();
                    _this.checkResponsive();
                    if (!_this.unslicked) {
                        _this.setPosition();
                    }
                }, 50);
            }
        };
        FlitsSlider.prototype.setDimensions = function () {
            var _this = this;
            _this.listWidth = _this.list.width();
            _this.listHeight = _this.list.height();
            _this.slideWidth = Math.ceil(_this.listWidth / _this.options.slidesToShow);
            _this.slideTrack.width(Math.ceil(_this.slideWidth * _this.slideTrack.children(".flits-slider-slide").length));
            var offset = _this.slides.first().outerWidth(true) - _this.slides.first().width();
            _this.slideTrack.children(".flits-slider-slide").width(_this.slideWidth - offset);
        };
        FlitsSlider.prototype.setPosition = function () {
            var _this = this;
            _this.setDimensions();
            _this.slider.trigger("setPosition", [_this]);
        };
        FlitsSlider.prototype.setSlideClasses = function (index) {
            var _this = this,
                allSlides,
                indexOffset,
                remainder;
            allSlides = _this.slider.find(".flits-slider-slide").removeClass("flits-slider-slide-active flits-slider-slide-current");
            _this.slides.eq(index).addClass("flits-slider-slide-current");
            if (index >= 0 && index <= _this.slideCount - _this.options.slidesToShow) {
                _this.slides.slice(index, index + _this.options.slidesToShow).addClass("flits-slider-slide-active");
            } else if (allSlides.length <= _this.options.slidesToShow) {
                allSlides.addClass("flits-slider-slide-active");
            } else {
                remainder = _this.slideCount % _this.options.slidesToShow;
                indexOffset = index;
                if (_this.slideCount - index < _this.options.slidesToShow) {
                    allSlides
                        .slice(indexOffset - (_this.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass("flits-slider-slide-active")
                        .attr("aria-hidden", "false");
                } else {
                    allSlides
                        .slice(indexOffset, indexOffset + _this.options.slidesToShow)
                        .addClass("flits-slider-slide-active")
                        .attr("aria-hidden", "false");
                }
            }
        };
        FlitsSlider.prototype.slideHandler = function (index, isScroll) {
            var _this = this;
            var targetLeft, slideLeft, oldSlide, targetSlide;
            targetSlide = index;
            targetLeft = _this.getLeft(targetSlide);
            slideLeft = _this.getLeft(_this.currentSlide);
            if (targetSlide < 0) {
                targetLeft = slideLeft;
                targetSlide = _this.currentSlide;
            } else if (targetSlide >= _this.slideCount) {
                targetSlide = targetSlide - _this.options.slidesToShow;
            }
            if (!isScroll) {
                _this.applyTransition(targetLeft);
            } else {
                _this.list.animate({ scrollLeft: targetLeft }, _this.options.speed);
            }
            oldSlide = _this.currentSlide;
            _this.currentSlide = targetSlide;
            _this.setSlideClasses(_this.currentSlide);
            _this.updateDots();
            _this.updateArrows();
        };
        FlitsSlider.prototype.swipeHandler = function (event) {
            var _this = this;
            switch (event.data.action) {
                case "start":
                    _this.mouseDown = true;
                    _this.startX = event.pageX - _this.list.offset().left;
                    _this.scrollLeft = _this.list.scrollLeft();
                    break;
                case "move":
                    event.preventDefault();
                    if (!_this.mouseDown) {
                        return;
                    }
                    var dragX = event.pageX - _this.list.offset().left;
                    var dragScroll = dragX - _this.startX;
                    _this.list.scrollLeft(_this.scrollLeft - dragScroll);
                    break;
                case "end":
                    _this.mouseDown = false;
                    break;
                default:
                    break;
            }
        };
        FlitsSlider.prototype.unload = function () {
            var _this = this;
            if (_this._dots) {
                _this._dots.remove();
            }
            if (_this._prevArrow && _this.htmlExpr.test(_this.options.prevArrow)) {
                _this._prevArrow.remove();
            }
            if (_this._nextArrow && _this.htmlExpr.test(_this.options.nextArrow)) {
                _this._nextArrow.remove();
            }
            _this.slides.removeClass("flits-slider-slide flits-slider-slide-current flits-slider-slide-active").attr("aria-hidden", "true").css("width", "");
        };
        FlitsSlider.prototype.unslick = function (fromBreakpoint) {
            var _this = this;
            _this.slider.trigger("unslick", [_this, fromBreakpoint]);
            _this.destroy();
        };
        FlitsSlider.prototype.updateArrows = function () {
            var _this = this,
                centerOffset;
            centerOffset = Math.floor(_this.options.slidesToShow / 2);
            if (_this.options.arrows === true && _this.slideCount > _this.options.slidesToShow) {
                _this._prevArrow.removeClass("flits-slider-disabled").attr("aria-disabled", "false");
                _this._nextArrow.removeClass("flits-slider-disabled").attr("aria-disabled", "false");
                if (_this.currentSlide === 0) {
                    _this._prevArrow.addClass("flits-slider-disabled").attr("aria-disabled", "true");
                    _this._nextArrow.removeClass("flits-slider-disabled").attr("aria-disabled", "false");
                } else if (_this.currentSlide >= _this.slideCount - _this.options.slidesToShow) {
                    _this._nextArrow.addClass("flits-slider-disabled").attr("aria-disabled", "true");
                    _this._prevArrow.removeClass("flits-slider-disabled").attr("aria-disabled", "false");
                } else if (_this.currentSlide >= _this.slideCount - 1) {
                    _this._nextArrow.addClass("flits-slider-disabled").attr("aria-disabled", "true");
                    _this._prevArrow.removeClass("flits-slider-disabled").attr("aria-disabled", "false");
                }
            }
        };
        FlitsSlider.prototype.updateDots = function () {
            var _this = this;
            if (_this._dots !== null) {
                _this._dots.find("li").removeClass("flits-slider-active").end();
                _this._dots
                    .find("li")
                    .eq(Math.floor(_this.currentSlide / _this.options.slidesToShow))
                    .addClass("flits-slider-active");
            }
        };
        Flits.fn.flitsSlider = function () {
            var _this = this,
                opt = arguments[0],
                args = Array.prototype.slice.call(arguments, 1),
                l = _this.length,
                i,
                ret;
            for (i = 0; i < l; i++) {
                if (typeof opt == "object" || typeof opt == "undefined") _this[i].flitsSlider = new FlitsSlider(_this[i], opt);
                else ret = _this[i].flitsSlider[opt].apply(_this[i].flitsSlider, args);
                if (typeof ret != "undefined") return ret;
            }
            return _this;
        };
    });
    var AccountPage = (Flits.AccountPage = function (options) {
        Flits.AccountPage.settings = {};
        var settings = {
            active_tab: "#profile",
            bdayInterval: null,
            dobCountDown: null,
            timePickerInterval: null,
            timePickerOption: {},
            recentlyViewTemplate: false,
            wishlistTemplate: false,
            earnChartColor: "#25d872",
            spendChartColor: "#ea1c2c",
            currentChartColor: "#0033cc",
            referChartColor: "#25d872",
        };
        settings = Flits.extend(Flits.AccountPage.settings, settings, options);
        Flits.dispatchEvent("Flits:AccountPage:Loaded", { settings: settings });
        Flits.AccountPage.settings.timePickerInterval = setInterval(function () {
            Flits.dispatchEvent("Flits:clockAndGreeting:Before");
            Flits(".flits-greeting-title").greeting();
            Flits(".flits-current-time").html(Flits.getTimePicker(Flits.AccountPage.settings.timePickerOption));
            Flits.dispatchEvent("Flits:clockAndGreeting:After");
            Flits(".flits-skeleton-greeting-header").removeClass("flits-skeleton-greeting-header");
            Flits(".flits-skeleton-user-box .flits-skeleton-time.flits-skeleton-box").removeClass("flits-skeleton-box");
            Flits(".flits-skeleton-user-box .flits-skeleton-time").removeClass("flits-skeleton-time");
            Flits(".flits-greeting-title.flits-skeleton-box").removeClass("flits-skeleton-box");
            Flits(".flits-greeting-title.flits-skeleton-greeting-mobile").removeClass("flits-skeleton-greeting-mobile");
            Flits(".flits-skeleton-user-box .flits-skeleton-user-name.flits-skeleton-box").removeClass("flits-skeleton-box");
            Flits(".flits-skeleton-user-box .flits-skeleton-user-name").removeClass("flits-skeleton-user-name");
            Flits(".flits-user-name.flits-skeleton-box").removeClass("flits-skeleton-box");
            Flits(".flits-user-name.flits-skeleton-user-name-mobile").removeClass("flits-skeleton-user-name-mobile");
            Flits(".flits-skeleton-user-box").removeClass("flits-skeleton-user-box");
        }, 1000);
        Flits.setPhoneCountryCode();
        Flits(".flits-skeleton-account-container").removeClass("flits-skeleton-account-container");
        Flits(".flits-skeleton-desktop").removeClass("flits-skeleton-desktop");
        Flits(".flits-skeleton-mobile").removeClass("flits-skeleton-mobile");
        Flits(".flits-skeleton-slider-menu-nav").removeClass("flits-skeleton-slider-menu-nav");
        Flits(".flits-skeleton-mobile-account-body").removeClass("flits-skeleton-mobile-account-body");
        Flits(".flits-skeleton-account-body").removeClass("flits-skeleton-account-body");
        Flits(".flits-user-avatar.flits-skeleton-box, .flits-greeting-header.flits-skeleton-box").removeClass("flits-skeleton-box");
        Flits(".flits-skeleton-menu-nav").removeClass("flits-skeleton-menu-nav");
        Flits(".flits-skeleton-navigation-header").removeClass("flits-skeleton-navigation-header");
        Flits(".flits-skeleton-user-avatar").removeClass("flits-skeleton-user-avatar");
        var hash = window.location.hash;
        if (hash.length) {
            Flits.navigationFunc(hash);
        } else {
            Flits.navigationFunc(Flits.AccountPage.settings.active_tab);
        }
        if (Flits(".flits-mobile-view .flits-menu-items").hasClass("flits-slider-initialized")) {
            var activeMenuIndex = Flits(".flits-mobile-view .flits-menu-items .flits-menu-active").attr("data-flits-slider-index");
            if (activeMenuIndex != undefined) {
                Flits(".flits-mobile-view .flits-menu-items").flitsSlider("sliderGoTo", parseInt(activeMenuIndex));
            }
        }
        Flits("#flits-section-skeleton-style").remove();
        let current_customer = Flits.customer_id;
        let last_customer = Flits.getLocalStorage("last_cutomer_id");
        let localStorageArr = {
            customer_attachment_url: "",
            customer_email: "",
            customer_link: "",
            customer_message: "",
            customer_name: "",
            customer_phone: "",
            customer_reason: "",
            flits_before_login_url: "",
            flits_recently_products: [],
            last_wishlist_product_update: "",
            login_status: "",
            order_date: "",
            order_link: "",
            order_name: "",
            order_number: "",
            order_page_no: 1,
            order_payment_status: "",
            order_fulfillment_status: "",
            order_total: "",
            total_order_count: undefined,
        };
        if (last_customer != undefined && current_customer != last_customer) {
            Flits.each(localStorageArr, function (key, value) {
                Flits.setLocalStorage(key, value);
            });
        }
        Flits.setLocalStorage("last_cutomer_id", Flits.customer_id);
        let creditResp = null;
        let creditEvent = false;
        let earnRuleResp = null;
        let earnRuleEvent = false;
        let rulesModuleCall = false;
        let referResp = null;
        let referEvent = false;
        let referModuleCall = false;
        function earnCreditChartFunc() {
            if (creditEvent && earnRuleEvent && rulesModuleCall) {
                let earnCredit = Flits.formatMoney(Math.abs(creditResp.total_earned_credits), Flits.money_format);
                let earnValue = (earnRuleResp.earnedRuleCount * 100) / earnRuleResp.earnRuleLength;
                earnValue = isNaN(earnValue) ? 0 : earnValue;
                setTimeout(function () {
                    Flits(".flits-how-to-earn-chart").donutChart({
                        seriesData: [{ name: "rules-earn", value: earnValue, color: Flits.AccountPage.settings.earnChartColor }],
                        title: earnCredit,
                        textStyle: { fontWeight: "bold", color: Flits.AccountPage.settings.earnChartColor },
                    });
                }, 10);
            }
        }
        function saveCurrentCreditChartFunc() {
            if (creditEvent && rulesModuleCall) {
                let saveCredit = Flits.formatMoney(Math.abs(creditResp.total_spent_credits), Flits.money_format);
                let saveValue = (Math.abs(creditResp.total_spent_credits) * 100) / creditResp.total_earned_credits;
                saveValue = isNaN(saveValue) ? 0 : saveValue;
                setTimeout(function () {
                    Flits(".flits-how-to-spend-save-chart").donutChart({
                        seriesData: [{ name: "spend-save-credit", value: saveValue, color: Flits.AccountPage.settings.spendChartColor }],
                        title: saveCredit,
                        textStyle: { fontWeight: "bold", color: Flits.AccountPage.settings.spendChartColor },
                    });
                }, 10);
                let currentCredit = Flits.formatMoney(Math.abs(creditResp.credits), Flits.money_format);
                let currentValue = (creditResp.credits * 100) / creditResp.total_earned_credits;
                currentValue = isNaN(currentValue) ? 0 : currentValue;
                setTimeout(function () {
                    Flits(".flits-how-to-spend-current-chart").donutChart({
                        seriesData: [{ name: "current-credit", value: currentValue, color: Flits.AccountPage.settings.currentChartColor }],
                        title: currentCredit,
                        textStyle: { fontWeight: "bold", color: Flits.AccountPage.settings.currentChartColor },
                    });
                }, 10);
            }
        }
        function referFriendChartFunc() {
            if (creditEvent && referEvent && referModuleCall) {
                let earnCredit = Flits.formatMoney(Math.abs(creditResp.total_earned_credits), Flits.money_format);
                let saveValue = (referResp.earnedRuleCount * 100) / referResp.earnRuleLength;
                isNaN(saveValue) ? (saveValue = 0) : saveValue;
                setTimeout(function () {
                    Flits(".flits-refer-friend-save-chart").donutChart({
                        seriesData: [{ name: "refer-earn-credit", value: saveValue, color: Flits.AccountPage.settings.referChartColor }],
                        title: earnCredit,
                        textStyle: { fontWeight: "bold", color: Flits.AccountPage.settings.referChartColor },
                    });
                }, 10);
            }
        }
        Flits(document).on("Flits:storeCredit:AjaxSuccessful", function (event) {
            let resp = event.detail.resp;
            if (resp.status) {
                creditEvent = true;
                creditResp = resp.customer;
                earnCreditChartFunc();
                saveCurrentCreditChartFunc();
                referFriendChartFunc();
            }
        });
        Flits(document).on("Flits:howToEarnRules:Successful", function (event) {
            earnRuleEvent = true;
            earnRuleResp = event.detail;
            earnCreditChartFunc();
        });
        Flits(document).on("Flits:referFriendRules:Successful", function (event) {
            referEvent = true;
            referResp = event.detail;
            referFriendChartFunc();
        });
        Flits(document).on("Flits:profileTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-desktop-view #flits_tab_profile").html(Flits(resp).filter(".flits-profile-module").find(".flits-desktop-content").html());
            Flits(".flits-mobile-view #flits_mobile_tab_profile").html(Flits(resp).filter(".flits-profile-module").find(".flits-mobile-content").html());
            Flits.myProfile();
            Flits.birthdayCountDown();
        });
        Flits(document).on("Flits:recentlyViewTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-desktop-view #flits_tab_recentlyView").html(Flits(resp).filter(".flits-recently-view-module").find(".flits-desktop-content").html());
            Flits(".flits-mobile-view #flits_mobile_tab_recentlyView").html(Flits(resp).filter(".flits-recently-view-module").find(".flits-mobile-content").html());
            Flits.recentlyView();
        });
        Flits(document).on("Flits:changePasswordTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-desktop-view #flits_tab_changePassword").html(Flits(resp).filter(".flits-change-password-module").find(".flits-desktop-content").html());
            Flits(".flits-mobile-view #flits_mobile_tab_changePassword").html(Flits(resp).filter(".flits-change-password-module").find(".flits-mobile-content").html());
            Flits.changePassword();
        });
        Flits(document).on("Flits:deliveryAddressTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-desktop-view #flits_tab_address").html(Flits(resp).filter(".flits-desktop-content").html());
            Flits(".flits-mobile-view #flits_mobile_tab_address").html(Flits(resp).filter(".flits-mobile-content").html());
            Flits.deliveryAddress();
        });
        Flits(document).on("Flits:orderTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-desktop-view #flits_tab_order").html(Flits(resp).filter(".flits-desktop-content").html());
            Flits(".flits-mobile-view #flits_mobile_tab_order").html(Flits(resp).filter(".flits-mobile-content").html());
            Flits.order();
            if (Flits.Metafields.IS_ORDER_CONTACT_US_ENABLE == 1) {
                Flits.contactUS();
            }
        });
        let storeCreditRespData = null;
        let storeCreditAjaxCall = false;
        let storeCreditTemplateCall = false;
        function storeCreditModuleFunc() {
            if (storeCreditAjaxCall && storeCreditTemplateCall) {
                var settings = { data: storeCreditRespData };
                Flits(document).on("Flits:storeCredit:Loaded", function () {
                    settings = Flits.extend(Flits.storeCredit.settings, settings, options);
                });
                Flits.storeCredit();
            }
        }
        Flits(document).on("Flits:storeCreditTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-desktop-view #flits_tab_storeCredit").html(Flits(resp).filter(".flits-store-credit-module").find(".flits-desktop-content").html());
            Flits(".flits-mobile-view #flits_mobile_tab_storeCredit").html(Flits(resp).filter(".flits-store-credit-module").find(".flits-mobile-content").html());
            storeCreditTemplateCall = true;
            storeCreditModuleFunc();
        });
        let rulesRespData = null;
        let rulesAjaxCall = false;
        let rulesTemplateCall = false;
        function rulesModuleFunc() {
            if (rulesAjaxCall && rulesTemplateCall) {
                var settings = { data: rulesRespData };
                Flits(document).on("Flits:howToEarnCredit:Loaded", function () {
                    settings = Flits.extend(Flits.howToEarnCredit.settings, settings, options);
                });
                Flits.howToEarnCredit();
                rulesModuleCall = true;
                earnCreditChartFunc();
                saveCurrentCreditChartFunc();
            }
        }
        Flits(document).on("Flits:rulesTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-desktop-view #flits_tab_howToEarn").html(Flits(resp).filter(".flits-how-to-earn-module").find(".flits-desktop-content").html());
            Flits(".flits-mobile-view #flits_mobile_tab_howToEarn").html(Flits(resp).filter(".flits-how-to-earn-module").find(".flits-mobile-content").html());
            Flits(".flits-desktop-view #flits_tab_howToSpend").html(Flits(resp).filter(".flits-how-to-spend-module").find(".flits-desktop-content").html());
            Flits(".flits-mobile-view #flits_mobile_tab_howToSpend").html(Flits(resp).filter(".flits-how-to-spend-module").find(".flits-mobile-content").html());
            Flits(".flits-desktop-view #flits_tab_fromAdmin").html(Flits(resp).filter(".flits-from-store-admin-module").find(".flits-desktop-content").html());
            Flits(".flits-mobile-view #flits_mobile_tab_fromAdmin").html(Flits(resp).filter(".flits-from-store-admin-module").find(".flits-mobile-content").html());
            rulesTemplateCall = true;
            rulesModuleFunc();
        });
        let referRespData = null;
        let referAjaxCall = false;
        let referTemplateCall = false;
        function referFriendModuleFunc() {
            if (referAjaxCall && referTemplateCall) {
                var settings = { data: referRespData };
                Flits(document).on("Flits:referCredit:Loaded", function () {
                    settings = Flits.extend(Flits.referCredit.settings, settings, options);
                });
                Flits.referCredit();
                referModuleCall = true;
                referFriendChartFunc();
            }
        }
        Flits(document).on("Flits:referFriendTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-desktop-view #flits_tab_referFriend").html(Flits(resp).filter(".flits-desktop-content").html());
            Flits(".flits-mobile-view #flits_mobile_tab_referFriend").html(Flits(resp).filter(".flits-mobile-content").html());
            referTemplateCall = true;
            referFriendModuleFunc();
        });
        let wishlistRespData = null;
        let wishlistAjaxCall = false;
        let wishlistTemplateCall = false;
        function wishlistModuleFunc() {
            if (wishlistAjaxCall && wishlistTemplateCall) {
                var settings = { wishlistServerData: wishlistRespData };
                Flits(document).on("Flits:Wishlist:Loaded", function () {
                    settings = Flits.extend(Flits.Wishlist.settings, settings, options);
                });
                Flits.Wishlist();
            }
        }
        Flits(document).on("Flits:wishlistTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-desktop-view #flits_tab_wishlist").html(Flits(resp).filter(".flits-desktop-content").html());
            Flits(".flits-mobile-view #flits_mobile_tab_wishlist").html(Flits(resp).filter(".flits-mobile-content").html());
            wishlistTemplateCall = true;
            wishlistModuleFunc();
        });
        let topOrderRespData = null;
        let topOrderAjaxCall = false;
        let topOrderTemplateCall = false;
        function topOrderModuleFunc() {
            if (topOrderAjaxCall && topOrderTemplateCall) {
                var settings = { data: topOrderRespData };
                Flits(document).on("Flits:topOrder:Loaded", function () {
                    settings = Flits.extend(Flits.topOrder.settings, settings, options);
                });
                Flits.topOrder();
            }
        }
        Flits(document).on("Flits:topOrderTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-desktop-view #flits_tab_topOrder").html(Flits(resp).filter(".flits-desktop-content").html());
            Flits(".flits-mobile-view #flits_mobile_tab_topOrder").html(Flits(resp).filter(".flits-mobile-content").html());
            topOrderTemplateCall = true;
            topOrderModuleFunc();
        });
        Flits(document).on("Flits:customer:AjaxSuccessful", function (event) {
            let resp = event.detail.resp;
            if (resp.status) {
                if (Flits.Metafields.IS_STORE_CREDIT_PAID == 1 && Flits.Metafields.is_store_credit_enable == 1) {
                    if (Flits.Metafields.IS_HOW_TO_EARN_CREDIT_DISPLAY == 1) {
                        Flits.services.settings.rulesService(function (resp) {
                            rulesRespData = resp;
                            rulesAjaxCall = true;
                            rulesModuleFunc();
                        });
                    }
                    Flits.services.settings.storeCreditService(function (resp) {
                        storeCreditRespData = resp;
                        storeCreditAjaxCall = true;
                        storeCreditModuleFunc();
                    });
                    if (Flits.Metafields.IS_REFER_PROGRAM_ON == 1) {
                        Flits.services.settings.referCreditService(function (resp) {
                            referRespData = resp;
                            referAjaxCall = true;
                            referFriendModuleFunc();
                        });
                        Flits.get(
                            "/account?view=flits_referFriend_template",
                            function (resp) {
                                Flits.dispatchEvent("Flits:referFriendTemplate:Loaded", { resp: resp });
                            },
                            "html"
                        );
                    } else {
                        Flits("#flits_tab_referFriend").remove();
                        Flits("#flits_mobile_tab_referFriend").remove();
                    }
                    Flits.get(
                        "/account?view=flits_storeCredit_template",
                        function (resp) {
                            Flits.dispatchEvent("Flits:storeCreditTemplate:Loaded", { resp: resp });
                            if (Flits.Metafields.IS_HOW_TO_EARN_CREDIT_DISPLAY == 1) {
                                Flits.dispatchEvent("Flits:rulesTemplate:Loaded", { resp: resp });
                            } else {
                                Flits("#flits_tab_howToEarn").remove();
                                Flits("#flits_mobile_tab_howToEarn").remove();
                                Flits("#flits_tab_howToSpend").remove();
                                Flits("#flits_mobile_tab_howToSpend").remove();
                                Flits("#flits_tab_fromAdmin").remove();
                                Flits("#flits_mobile_tab_fromAdmin").remove();
                                Flits('[data-flits-redirect="#howToEarn"], [data-flits-redirect="#howToSpend"]').addClass("flits-hide");
                                Flits(".flits-refer-friend-save-chart").parents(".flits-chart-container").addClass("flits-visible-hidden");
                            }
                        },
                        "html"
                    );
                } else {
                    Flits("#flits_tab_storeCredit").remove();
                    Flits("#flits_mobile_tab_storeCredit").remove();
                    Flits("#flits_tab_howToEarn").remove();
                    Flits("#flits_mobile_tab_howToEarn").remove();
                    Flits("#flits_tab_howToSpend").remove();
                    Flits("#flits_mobile_tab_howToSpend").remove();
                    Flits("#flits_tab_fromAdmin").remove();
                    Flits("#flits_mobile_tab_fromAdmin").remove();
                    Flits("#flits_tab_referFriend").remove();
                    Flits("#flits_mobile_tab_referFriend").remove();
                }
            } else {
                let error = Flits.t("Flits.locals.general.getting_customer_details", "Getting/Syncing Customer Details");
                Flits(
                    ".flits-store-credit-module-loader .flits-loading-text, .flits-how-to-earn-module-loader .flits-loading-text, .flits-how-to-spend-module-loader .flits-loading-text, .flits-refer-friend-module-loader .flits-loading-text, .flits-from-admin-module-loader .flits-loading-text"
                ).html(error);
                setTimeout(function () {
                    Flits.services.settings.customerSevices();
                }, 30000);
            }
        });
        Flits.services.settings.customerSevices();
        Flits.get(
            "/account?view=flits_profile_template",
            function (resp) {
                Flits.dispatchEvent("Flits:profileTemplate:Loaded", { resp: resp });
                if (Flits.Metafields.is_recently_view_enable == 1) {
                    Flits.dispatchEvent("Flits:recentlyViewTemplate:Loaded", { resp: resp });
                } else {
                    Flits("#flits_tab_recentlyView").remove();
                    Flits("#flits_mobile_tab_recentlyView").remove();
                }
                Flits.dispatchEvent("Flits:changePasswordTemplate:Loaded", { resp: resp });
            },
            "html"
        );
        Flits.get(
            "/account?view=flits_address_template",
            function (resp) {
                Flits.dispatchEvent("Flits:deliveryAddressTemplate:Loaded", { resp: resp });
            },
            "html"
        );
        Flits.get(
            "/account?view=flits_order_template",
            function (resp) {
                Flits.dispatchEvent("Flits:orderTemplate:Loaded", { resp: resp });
            },
            "html"
        );
        if (Flits.Metafields.IS_ADVANCE_DASHBOARD_PAID == 1 && Flits.Metafields.IS_ADVANCE_DASHBOARD_ENABLE == 1) {
            Flits.services.settings.topOrderService(function (resp) {
                topOrderRespData = resp;
                topOrderAjaxCall = true;
                topOrderModuleFunc();
            });
            Flits.get(
                "/account?view=flits_topOrder_template",
                function (resp) {
                    Flits.dispatchEvent("Flits:topOrderTemplate:Loaded", { resp: resp });
                },
                "html"
            );
        } else {
            Flits("#flits_tab_topOrder").remove();
            Flits("#flits_mobile_tab_topOrder").remove();
        }
        if (Flits.Metafields.IS_WISHLIST_PAID == 1 && Flits.Metafields.IS_WISHLIST_ENABLE == 1) {
            Flits.services.settings.wishlistService(function (resp) {
                wishlistRespData = resp;
                wishlistAjaxCall = true;
                wishlistModuleFunc();
            });
            Flits.get(
                "/account?view=flits_wishlist_template",
                function (resp) {
                    Flits.dispatchEvent("Flits:wishlistTemplate:Loaded", { resp: resp });
                },
                "html"
            );
        } else {
            Flits("#flits_tab_wishlist").remove();
            Flits("#flits_mobile_tab_wishlist").remove();
        }
        var multiLangInterval = setInterval(function () {
            var translateLangArray = Flits("[data-flits-lang]").not("[data-flits-translation=true]");
            if (translateLangArray.length > 0) {
                Flits.multiLanguage();
            }
        }, 100);
        Flits(document).on("click", ".flits-menu-items .flits-menu-item", function (e) {
            if (!Flits(this).hasClass("flits-external-link")) {
                let targetAttr = Flits(this).find("a").attr("href");
                if (targetAttr.search("#") != 0) {
                } else {
                    Flits.navigationFunc(targetAttr);
                }
            }
        });
        Flits(document).on("click", ".flits-pagination-div .flits-pagination-btn", function () {
            let paginationOf = Flits(this).parents(".flits-pagination-div").attr("data-flits-pagination");
            let btnAttr = Flits(this).attr("data-flits-btn");
            let position = Flits('.flits-pagination-div[data-flits-pagination="' + paginationOf + '"] .flits-pagination li').index(Flits('.flits-pagination-div[data-flits-pagination="' + paginationOf + '"] .flits-pagination li.active'));
            let liList = Flits('.flits-pagination-div[data-flits-pagination="' + paginationOf + '"] .flits-pagination li');
            if (btnAttr == "flits-prev-btn") {
                Flits(liList[position - 1]).trigger("click");
            } else {
                Flits(liList[position + 1]).trigger("click");
            }
        });
        Flits(document).on("click", ".flits-add-to-cart", function () {
            let el = Flits(this);
            let quantity = parseInt(Flits(el).parents(".flits-product-card").find('input[name="product_quantity_input"]').val());
            let maxLimit = parseInt(Flits(el).parents(".flits-product-card").find('input[name="product_quantity_input"]').attr("max"));
            let id = Flits(el).parents(".flits-product-card").find(".flits-variant-select").val();
            let interval = 0;
            if (cartOrder[id]) {
                if (quantity + parseInt(cartOrder[id].cart_quantity) > maxLimit) {
                    quantity = maxLimit - parseInt(cartOrder[id].cart_quantity);
                    quantity == 0 ? (quantity = maxLimit) : quantity;
                    interval = 3000;
                    flitsSnackbar.show({ text: Flits.t("Flits.locals.general.cart_updated", "Some items are no longer available. Your cart has been updated."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
                }
            }
            let data = "id=" + id + "&quantity=" + quantity;
            setTimeout(function () {
                Flits.addToCart(data);
            }, interval);
        });
        Flits(document).on("change", ".flits-variant-select", function () {
            Flits.variantOnChange(this);
            Flits(this).attr("value", this.value);
        });
        Flits(document).on("click", ".flits-quantity-btn", function () {
            Flits.productQuntityAdjust(this);
        });
        Flits(document).on("keypress", '.flits-product-quantity input[name="product_quantity_input"]', function (event) {
            Flits.phoneNumberBind(this);
            return Flits.isNumber(event);
        });
        Flits(document).on("input", '.flits-product-quantity input[name="product_quantity_input"]', function (event) {
            if (/^0/.test(this.value) || /^\s*$/.test(this.value)) {
                this.value = this.value.replace(/^0/, "1");
                this.value = this.value.replace(/^\s*$/, "1");
            }
        });
        Flits(document).on("keyup", '.flits-product-quantity input[name="product_quantity_input"]', function (event) {
            let maxLimit = parseInt(Flits(this).attr("max"));
            if (parseInt(this.value) > maxLimit) {
                Flits(this).val(maxLimit);
                flitsSnackbar.show({
                    text: Flits.t("Flits.locals.general.cant_add_more_quantity", "You have reached the maximum limit. You cannot add any more items."),
                    pos: "bottom-center",
                    showAction: false,
                    customClass: "flits-alert-error",
                });
            }
        });
        Flits(document).on("click", ".flits-redirect-link", function () {
            let redirectTo = Flits(this).attr("data-flits-redirect");
            Flits.navigationFunc(redirectTo);
        });
        Flits(document).on("click", ".flits-refer-friend-unlock-badge", function () {
            Flits(".flits-link-share-btn-box, .flits-referral-link-input-wrap").addClass("flits-highlight");
            setTimeout(function () {
                Flits(".flits-link-share-btn-box, .flits-referral-link-input-wrap").removeClass("flits-highlight");
            }, 3000);
        });
    });
    var myProfile = (Flits.myProfile = function (options) {
        Flits.myProfile.settings = {};
        var settings = { phoneValid: true, emailValid: true, phoneNumber: "", shopCountryName: Flits.shopCountryName, gender: null, firstName: "", lasName: "", alertIcon: '<span class="flits-error-icon"></span>' };
        settings = Flits.extend(Flits.myProfile.settings, settings, options);
        Flits.dispatchEvent("Flits:myProfile:Loaded", { settings: settings });
        let dob = Flits("[data-flits-birthdate]").attr("data-flits-birthdate");
        let bDay = new Date(dob).getDate();
        bDay = bDay < 10 ? "0" + bDay : bDay;
        let bMonth = new Date(dob).getMonth() + 1;
        bMonth = bMonth < 10 ? "0" + bMonth : bMonth;
        let bYear = new Date(dob).getFullYear();
        function optionGenerate(start, end, selectVal, elem) {
            for (i = start; i <= end; i++) {
                let opt = Flits("<option/>");
                let val = i < 10 ? "0" + i : i;
                opt.attr("value", val);
                opt.html(val);
                if (selectVal == val) {
                    opt.attr("selected", true);
                }
                Flits(elem).append(opt);
            }
        }
        optionGenerate(1, 31, bDay, ".flits-dd-select select");
        optionGenerate(1, 12, bMonth, ".flits-mm-select select");
        optionGenerate(1920, new Date().getFullYear(), bYear, ".flits-yy-select select");
        Flits.each(Flits.setPhoneCountryCode.settings.countryOptionArr, function (key, value) {
            Flits(".flits-profile-phone-with-country-div .flits-country-drpdown select").append(value.clone());
        });
        Flits.myProfile.settings.phoneNumber = Flits('.flits-profile-form .flits-input[name="phone"]').val();
        Flits.phoneNumberBind(".flits-profile-form .flits-input[name='phone']");
        function phoneWithContry() {
            let numberDetails;
            let countryIndex;
            let onlyNumber;
            let areaCode;
            if (Flits('.flits-profile-form .flits-input[name="phone"]').val()) {
                numberDetails = new libphonenumber.parsePhoneNumber(Flits('.flits-profile-form .flits-input[name="phone"]').val());
                countryIndex = Flits('.flits-profile-phone-with-country-div .flits-country-drpdown select option[data-country-iso-code="' + numberDetails.country + '"]').val();
                areaCode = Flits('.flits-profile-phone-with-country-div .flits-country-drpdown select option[data-country-iso-code="' + numberDetails.country + '"]').attr("data-country-code");
                onlyNumber = numberDetails.number.replace(areaCode, "");
                Flits(".flits-profile-phone-with-country-div .flits-country-drpdown select").val(countryIndex);
                Flits('.flits-profile-form .flits-input[name="phone"]').val(onlyNumber);
            } else {
                Flits.shopCountryName = Flits.shopCountryName.replace("&amp;", "&");
                if (Flits('.flits-profile-phone-with-country-div .flits-country-drpdown select option[data-country-name="' + Flits.shopCountryName + '"]')) {
                    countryIndex = Flits('.flits-profile-phone-with-country-div .flits-country-drpdown select option[data-country-name="' + Flits.shopCountryName + '"]').val();
                    Flits(".flits-profile-phone-with-country-div .flits-country-drpdown select").val(countryIndex);
                } else {
                    let defualtCountry = Flits.defualtCountry;
                    countryIndex = Flits('.flits-profile-phone-with-country-div .flits-country-drpdown select option[data-country-iso-code="' + defualtCountry + '"]').val();
                    Flits(".flits-profile-phone-with-country-div .flits-country-drpdown select").val(countryIndex);
                }
            }
            Flits(".flits-profile-phone-with-country-div .flits-country-drpdown select").trigger("change");
        }
        function profileNonEditForm() {
            Flits(".flits-profile-cancel-button, .flits-edit-form-btn-grp").addClass("flits-hide");
            Flits(".flits-profile-edit-button").removeClass("flits-hide");
            Flits(".flits-profile-form").addClass("flits-read-input");
            Flits(".flits-profile-form .flits-input").attr("disabled", true);
            Flits(".flits-profile-phone-with-country-div").addClass("flits-readonly-mode");
            Flits('.flits-profile-form .flits-input[name="phone"]').attr("value", Flits.myProfile.settings.phoneNumber);
            Flits('.flits-profile-form .flits-input[name="phone"]').val(Flits.myProfile.settings.phoneNumber);
            if (Flits.myProfile.settings.gender != null) {
                Flits('.flits-profile-form .flits-gender-radio .flits-input[value="' + Flits.myProfile.settings.gender + '"]').prop("checked", true);
            }
            let selectGender = Flits(".flits-profile-form .flits-gender-select").attr("data-flits-gender");
            Flits(".flits-profile-form .flits-gender-select").val(selectGender);
        }
        function getProfileErrorMsg(comment) {
            switch (comment) {
                case "phone is invalid":
                    return Flits.t("Flits.locals.profile_page.invalid_contact_number", "Contact number is not valid");
                    break;
                case "phone has already been taken":
                    return Flits.t("Flits.locals.profile_page.contact_number_already_taken", "This contact number is already in use. Please enter a different contact number.");
                    break;
                case "email is invalid":
                    return Flits.t("Flits.locals.profile_page.invalid_email", "Email is not valid");
                    break;
                case "email has already been taken":
                    return Flits.t("Flits.locals.profile_page.email_already_taken", "This email is already in use. Please enter a different email address.");
                    break;
                case "email contains an invalid domain name":
                    return Flits.t("Flits.locals.profile_page.invalid_email_domain", "Email contains an invalid domain name");
                    break;
                default:
                    return comment;
                    break;
            }
        }
        function setResponseValue(data) {
            Flits(".flits-greeting-text .flits-user-name").text(Flits.myProfile.settings.firstName);
            Flits(".flits-menu-nav .flits-navigation-header .flits-user-name").text(Flits.myProfile.settings.firstName + " " + Flits.myProfile.settings.lastName);
            Flits(".flits-navigation-header .flits-user-name").attr("data-tippy-content", Flits.myProfile.settings.firstName + " " + Flits.myProfile.settings.lastName);
            Flits(".flits-mobile-view .flits-navigation-header .flits-user-name").text(Flits.myProfile.settings.firstName);
            let initial1 = Flits.myProfile.settings.firstName != "" ? Flits.myProfile.settings.firstName[0] : "";
            let initial2 = Flits.myProfile.settings.lastName != "" ? Flits.myProfile.settings.lastName[0] : "";
            let nameInitials = initial1 + "" + initial2;
            Flits(".flits-user-avatar").attr("data-flits-name", nameInitials);
            Flits('.flits-profile-form .flits-input[name="first_name"]').attr("value", Flits.myProfile.settings.firstName);
            Flits('.flits-profile-form .flits-input[name="first_name"]').val(Flits.myProfile.settings.firstName);
            Flits('.flits-profile-form .flits-input[name="last_name"]').attr("value", Flits.myProfile.settings.lastName);
            Flits('.flits-profile-form .flits-input[name="last_name"]').val(Flits.myProfile.settings.lastName);
            Flits('.flits-profile-form .flits-input[name="email"]').attr("value", data.email);
            Flits('.flits-profile-form .flits-input[name="phone"]').attr("value", data.phone);
            Flits(".flits-profile-form .flits-dob-wrap .flits-input option").removeAttr("selected");
            Flits("[data-flits-birthdate]").attr("data-flits-birthdate", data.birthdate);
            if (data.birthdate) {
                Flits('.flits-profile-form .flits-input[name="birthday"] option[value="' + data.birthdate.split("-")[2] + '"]').prop("selected", true);
                Flits('.flits-profile-form .flits-input[name="birthday"] option[value="' + data.birthdate.split("-")[2] + '"]').attr("selected", true);
                Flits('.flits-profile-form .flits-input[name="birthday"]').val(data.birthdate.split("-")[2]);
                Flits('.flits-profile-form .flits-input[name="birthmonth"] option[value="' + data.birthdate.split("-")[1] + '"]').prop("selected", true);
                Flits('.flits-profile-form .flits-input[name="birthmonth"] option[value="' + data.birthdate.split("-")[1] + '"]').attr("selected", true);
                Flits('.flits-profile-form .flits-input[name="birthmonth"]').val(data.birthdate.split("-")[1]);
                Flits('.flits-profile-form .flits-input[name="birthyear"] option[value="' + data.birthdate.split("-")[0] + '"]').prop("selected", true);
                Flits('.flits-profile-form .flits-input[name="birthyear"] option[value="' + data.birthdate.split("-")[0] + '"]').attr("selected", true);
                Flits('.flits-profile-form .flits-input[name="birthyear"]').val(data.birthdate.split("-")[0]);
                Flits(".flits-birthday-redirect").addClass("flits-hide");
                Flits(".flits-birthday-unlock-badge").addClass("flits-hide");
            } else {
                Flits('.flits-profile-form .flits-input[name="birthday"] option[value="dd"]').prop("selected", true);
                Flits('.flits-profile-form .flits-input[name="birthday"] option[value="dd"]').attr("selected", true);
                Flits('.flits-profile-form .flits-input[name="birthday"]').val("dd");
                Flits('.flits-profile-form .flits-input[name="birthmonth"] option[value="mm"]').prop("selected", true);
                Flits('.flits-profile-form .flits-input[name="birthmonth"] option[value="mm"]').attr("selected", true);
                Flits('.flits-profile-form .flits-input[name="birthmonth"]').val("mm");
                Flits('.flits-profile-form .flits-input[name="birthyear"] option[value="yyyy"]').prop("selected", true);
                Flits('.flits-profile-form .flits-input[name="birthyear"] option[value="yyyy"]').attr("selected", true);
                Flits('.flits-profile-form .flits-input[name="birthyear"]').val("yyyy");
            }
            Flits.birthdayCountDown();
            Flits('.flits-profile-form .flits-gender-radio .flits-input[name="gender"]').removeAttr("checked");
            Flits('.flits-profile-form .flits-gender-radio .flits-input[value="' + data.gender + '"]').prop("checked", true);
            Flits.myProfile.settings.gender = data.gender;
            let genderVal;
            data.gender == null ? (genderVal = "none") : (genderVal = data.gender);
            Flits(".flits-profile-form .flits-gender-select").attr("data-flits-gender", genderVal);
        }
        Flits(".flits-profile-form input[type='tel'][name='phone']").keypress(function (event) {
            Flits(this).removeClass("flits-input-error");
            Flits(this).parents(".flits-profile-form-container").find(".flits-profile-phone-alert").html("");
            return Flits.isNumber(event);
        });
        Flits(".flits-profile-form [name='email']").keypress(function (event) {
            Flits(this).removeClass("flits-input-error");
            Flits(this).parents(".flits-profile-form-container").find(".flits-profile-email-alert").html("");
        });
        Flits(".flits-profile-form .flits-gender-select").on("change", function () {
            var changeValue = Flits(this).val();
            Flits('.flits-profile-form .flits-gender-radio .flits-input[value="' + changeValue + '"]').prop("checked", true);
        });
        Flits(".flits-gender-radio :radio").on("click", function () {
            var changeValue = Flits(this).val();
            Flits(".flits-profile-form .flits-gender-select").val(changeValue);
        });
        Flits(document).on("click", ".flits-profile-edit-button", function () {
            Flits(".flits-profile-edit-button").addClass("flits-hide");
            Flits(".flits-profile-cancel-button, .flits-edit-form-btn-grp").removeClass("flits-hide");
            Flits(".flits-profile-form").removeClass("flits-read-input");
            Flits(".flits-profile-form .flits-input").attr("disabled", false);
            Flits('.flits-profile-form .flits-input[name="email"], .flits-profile-form .flits-input[name="referby"], .flits-profile-phone-with-country-div .flits-country-code-textbox').attr("disabled", true);
            Flits(".flits-profile-phone-with-country-div").removeClass("flits-readonly-mode");
            phoneWithContry();
        });
        Flits(document).on("click", ".flits-profile-cancel-button", function () {
            Flits(this).parents(".flits-profile-form-container").find(".flits-profile-form")[0].reset();
            Flits(this).parents(".flits-profile-form-container").find(".flits-input-error").removeClass("flits-input-error");
            Flits(this).parents(".flits-profile-form-container").find(".flits-form-alert").html("");
            profileNonEditForm();
            Flits(".flits-profile-phone-with-country-div .flits-country-drpdown select").trigger("change");
        });
        Flits(".flits-profile-save-button").on("click", function () {
            let phoneValue = Flits(this).parents(".flits-profile-form-container").find('.flits-profile-form input[name="phone"]').val();
            let countryValue = Flits(this).parents(".flits-profile-form-container").find(".flits-profile-phone-with-country-div .flits-country-code-textbox").val();
            let phoneNumber = countryValue + phoneValue;
            let emailValue = Flits(this).parents(".flits-profile-form-container").find('.flits-profile-form input[name="email"]').val();
            if (!Flits.validateEmail(emailValue)) {
                Flits.myProfile.settings.emailValid = false;
                Flits(this).parents(".flits-profile-form-container").find('.flits-profile-form input[name="email"]').addClass("flits-input-error");
                Flits(this)
                    .parents(".flits-profile-form-container")
                    .find(".flits-profile-email-alert")
                    .html(Flits.myProfile.settings.alertIcon + Flits.t("Flits.locals.profile_page.invalid_email", "Email is not valid"));
            } else {
                Flits.myProfile.settings.emailValid = true;
            }
            Flits.myProfile.settings.phoneValid = true;
            if (phoneValue.length > 0) {
                if (!Flits.validatePhone(phoneNumber)) {
                    Flits.myProfile.settings.phoneValid = false;
                    Flits(this).parents(".flits-profile-form-container").find('.flits-profile-form input[name="phone"]').addClass("flits-input-error");
                    Flits(this)
                        .parents(".flits-profile-form-container")
                        .find(".flits-profile-phone-alert")
                        .html(Flits.myProfile.settings.alertIcon + Flits.t("Flits.locals.profile_page.invalid_contact_number", "Contact number is not valid"));
                }
            }
            if (Flits.myProfile.settings.phoneValid && Flits.myProfile.settings.emailValid) {
                Flits(this).parents(".flits-profile-form-container").find(".flits-input-error").removeClass("flits-input-error");
                Flits(this).parents(".flits-profile-form-container").find(".flits-form-alert").html("");
                Flits(this).parents(".flits-profile-form-container").find(".flits-profile-form").submit();
            }
        });
        Flits(".flits-profile-form").submit(function (event) {
            var formSelector = Flits(this);
            event.preventDefault();
            let form = Flits(this);
            let params = form.serializeArray();
            let dob = null;
            let mob = null;
            let yob = null;
            let spliceIndex = [];
            let firstName;
            let lastName;
            for (let i = 0; params.length > i; i++) {
                if (params[i].name == "birthday") {
                    if (params[i].value != "dd") {
                        dob = params[i].value;
                    }
                    spliceIndex.push(i);
                } else if (params[i].name == "birthmonth") {
                    if (params[i].value != "mm") {
                        mob = params[i].value;
                    }
                    spliceIndex.push(i);
                } else if (params[i].name == "birthyear") {
                    if (params[i].value != "yyyy") {
                        yob = params[i].value;
                    }
                    spliceIndex.push(i);
                }
                if (params[i].name == "first_name") {
                    firstName = params[i].value.trim();
                }
                if (params[i].name == "last_name") {
                    lastName = params[i].value.trim();
                }
            }
            Flits.each(spliceIndex, function (i, v) {
                if (i != 0) {
                    params.splice(v - i, 1);
                } else {
                    params.splice(v, 1);
                }
            });
            if (yob != null && mob != null && dob != null) {
                let birthDate = yob + "-" + mob + "-" + dob;
                params.push({ name: "birthdate", value: birthDate });
            }
            let index = params.findIndex(function (data) {
                return data.name == "phone";
            });
            let number = Flits(formSelector).find('.flits-input[name="phone"]').val();
            let country = Flits(formSelector).find(".flits-profile-phone-with-country-div .flits-country-code-textbox").val();
            if (number.length != 0) {
                params[index].value = country + number;
            }
            let url = Flits.base_url + "/" + Flits.customer_id + form.attr("action");
            let method = form.attr("method");
            params.push({ name: "customer_hash", value: Flits.customerHash }, { name: "token", value: Flits.token });
            flitsSnackbar.show({ text: Flits.t("Flits.locals.profile_page.save_details", "Saving profile details..."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
            Flits.dispatchEvent("Flits:myProfile:BeforeUpdate", { params: params });
            Flits.ajax({ method: method, url: url, data: params })
                .done(function (resp) {
                    if (resp.status) {
                        Flits.myProfile.settings.phoneNumber = resp.customer.phone;
                        Flits.myProfile.settings.firstName = firstName;
                        Flits.myProfile.settings.lastName = lastName;
                        setResponseValue(resp.customer);
                        profileNonEditForm();
                        Flits.dispatchEvent("Flits:myProfile:Updated", { resp: resp });
                        let popDom = Flits(".flits-profile-popup").clone(true)[0];
                        Flits(popDom).removeClass("flits-template");
                        flitsSnackbar.show({ content: popDom, pos: "snackbar-center", showAction: false, duration: 3000, container: Flits("body"), customClass: "flits-snackbar-overlay" });
                    } else {
                        let error_text = "";
                        let errors = "";
                        if (resp.response) {
                            errors = JSON.parse(resp.response).errors;
                            let error_key = Object.keys(errors)[0];
                            error_text = errors[Object.keys(errors)[0]][0];
                            error_text = getProfileErrorMsg(error_key + " " + error_text);
                        } else {
                            errors = resp.error;
                            error_text = errors;
                        }
                        flitsSnackbar.show({ text: error_text, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    }
                })
                .fail(function (resp) {
                    flitsSnackbar.show({ text: Flits.t("Flits.locals.general.something_went_wrong", "Something went wrong. Please try again."), pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                })
                .always(function () {});
        });
    });
    var deliveryAddress = (Flits.deliveryAddress = function (options) {
        Flits.deliveryAddress.settings = {};
        var settings = { alertIcon: '<span class="flits-error-icon"></span>', perPageLimit: 6, totalAddress: 0, addressList: null, addressMobileList: null, pageNo: 1, totaPages: 0 };
        settings = Flits.extend(Flits.deliveryAddress.settings, settings, options);
        Flits.dispatchEvent("Flits:deliveryAddress:Loaded", { settings: settings });
        Flits.deliveryAddress.settings.totalAddress = parseInt(Flits("div[data-address-count]").attr("data-address-count"));
        Flits.deliveryAddress.settings.totaPages = Math.ceil(Flits.deliveryAddress.settings.totalAddress / Flits.deliveryAddress.settings.perPageLimit);
        Flits(".flits-address-badge").html(Flits.deliveryAddress.settings.totalAddress);
        Flits(".flits-address-badge").removeClass("flits-menu-badge-hide");
        var form = Flits(".flits-address-form-new");
        Flits(".flits-address-list-pagination-row").html("");
        Flits(".flits-address-lits-container").removeClass("flits-hide");
        Flits(".flits-address-loader").hide();
        Flits(".flits-address-add-save-button").attr("data-flits-add-text", Flits.t("Flits.locals.address_page.save_button", "Save"));
        Flits(".flits-address-add-save-button").attr("data-flits-update-text", Flits.t("Flits.locals.address_page.save_button", "Save"));
        Flits.each(Flits.setPhoneCountryCode.settings.countryOptionArr, function (key, value) {
            Flits(".flits-address-phone-with-country-div .flits-country-drpdown select").append(value.clone());
        });
        function addressAppend(addressDesk, addressMob, page) {
            let index = page * Flits.deliveryAddress.settings.perPageLimit - Flits.deliveryAddress.settings.perPageLimit;
            for (i = 0; i < addressDesk.length; i++) {
                if (!Flits(addressDesk[i]).hasClass("flits-default-hidden-card")) {
                    var newItem = new Flits.deliveryAddress.settings.addressList.Item(["flits-id"], addressDesk[i]);
                    newItem._values["flits-id"] = newItem.elm.dataset.flitsId;
                    Flits.deliveryAddress.settings.addressList.items.splice(index + i, 0, newItem);
                    Flits.deliveryAddress.settings.addressList.update();
                }
            }
            for (i = 0; i < addressMob.length; i++) {
                if (!Flits(addressMob[i]).hasClass("flits-default-hidden-card")) {
                    var newItemMobile = new Flits.deliveryAddress.settings.addressMobileList.Item(["flits-id"], addressMob[i]);
                    newItemMobile._values["flits-id"] = newItemMobile.elm.dataset.flitsId;
                    Flits.deliveryAddress.settings.addressMobileList.items.splice(index + i, 0, newItemMobile);
                    Flits.deliveryAddress.settings.addressMobileList.update();
                }
            }
            setAddressData();
        }
        function getAddress(page) {
            let url = "/account?view=flits_address_template";
            Flits.ajax({ url: url, method: "GET", data: { page: page } })
                .done(function (res) {
                    let addressRows = Flits(res).filter(".flits-desktop-content").find(".flits-address-list-pagination-row .flits-address-card");
                    let addressRowsMobile = Flits(res).filter(".flits-mobile-content").find(".flits-address-list-pagination-row .flits-address-card");
                    if (addressRows.length) {
                        addressAppend(addressRows, addressRowsMobile, page);
                    } else {
                        Flits.dispatchEvent("Flits:deliveryAddress:AllLoaded");
                        return false;
                    }
                })
                .fail(function (resp) {})
                .always(function () {});
        }
        function setAddressData() {
            Flits(".flits-address-list-pagination-row").removeClass("flits-hide");
            Flits(".flits-address-pagination").removeClass("flits-visible-hidden");
            Flits(".flits-address-pagination-loader").hide();
        }
        function setPagination() {
            var options = { page: Flits.deliveryAddress.settings.perPageLimit, pagination: { innerWindow: 1, left: 1, right: 1, paginationClass: "flits-pagination" }, item: Flits(".flits-address-card-template")[0].outerHTML };
            Flits.deliveryAddress.settings.addressList = new flitsList("flits-address-list", options).on("updated", function (list) {
                if (oldAddressListPageItem != list.i) {
                    oldAddressListPageItem = list.i;
                    Flits.deliveryAddress.settings.addressMobileList.show(Flits.deliveryAddress.settings.addressList.i, Flits.deliveryAddress.settings.addressList.page);
                }
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-delivery-address"]');
            });
            let oldAddressListPageItem = Flits.deliveryAddress.settings.addressList.i;
            Flits.deliveryAddress.settings.addressMobileList = new flitsList("flits-address-mobile-list", options).on("updated", function (list) {
                if (oldAddressMobileListPageItem != list.i) {
                    oldAddressMobileListPageItem = list.i;
                    Flits.deliveryAddress.settings.addressList.show(Flits.deliveryAddress.settings.addressMobileList.i, Flits.deliveryAddress.settings.addressMobileList.page);
                }
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-delivery-address-mobile"]');
            });
            let oldAddressMobileListPageItem = Flits.deliveryAddress.settings.addressMobileList.i;
            Flits.paginationDisabled(Flits.deliveryAddress.settings.addressList, '.flits-pagination-div[data-flits-pagination="flits-delivery-address"]');
            Flits.paginationDisabled(Flits.deliveryAddress.settings.addressMobileList, '.flits-pagination-div[data-flits-pagination="flits-delivery-address-mobile"]');
        }
        if (Flits.deliveryAddress.settings.totalAddress == 0) {
            Flits(".flits-address-pagination-loader").hide();
        } else if (Flits.deliveryAddress.settings.totalAddress >= 2) {
            Flits(".flits-address-list-pagination-row").addClass("flits-hr");
        }
        setPagination();
        if (Flits.deliveryAddress.settings.totaPages >= 1) {
            for (i = 1; i <= Flits.deliveryAddress.settings.totaPages; i++) {
                getAddress(i);
            }
        }
        function shopifySetup() {
            if (Flits) {
                if (Flits.CountryProvinceSelector) {
                    new Flits.CountryProvinceSelector("AddressCountryNew", "AddressProvinceNew", { hideElement: "AddressProvinceContainerNew" });
                    new Flits.CountryProvinceSelector("AddressCountryNewMobile", "AddressProvinceNewMobile", { hideElement: "AddressProvinceContainerNewMobile" });
                }
            }
        }
        shopifySetup();
        Flits.phoneNumberBind('.flits-input[name="address[phone]"]');
        function phoneWithContry() {
            let numberDetails;
            let countryIndex;
            let onlyNumber;
            let areaCode;
            if (form.find('.flits-input[name="address[phone]"]').val()) {
                numberDetails = new libphonenumber.parsePhoneNumber(form.find('.flits-input[name="address[phone]"]').val());
                countryIndex = Flits('.flits-address-phone-with-country-div .flits-country-drpdown select option[data-country-iso-code="' + numberDetails.country + '"]').val();
                areaCode = Flits('.flits-address-phone-with-country-div .flits-country-drpdown select option[data-country-iso-code="' + numberDetails.country + '"]').attr("data-country-code");
                onlyNumber = numberDetails.number.replace(areaCode, "");
                Flits(".flits-address-phone-with-country-div .flits-country-drpdown select").val(countryIndex);
                form.find('.flits-input[name="address[phone]"]').val(onlyNumber);
            } else {
                Flits.shopCountryName = Flits.shopCountryName.replace("&amp;", "&");
                if (Flits('.flits-address-phone-with-country-div .flits-country-drpdown select option[data-country-name="' + Flits.shopCountryName + '"]')) {
                    countryIndex = Flits('.flits-address-phone-with-country-div .flits-country-drpdown select option[data-country-name="' + Flits.shopCountryName + '"]').val();
                    Flits(".flits-address-phone-with-country-div .flits-country-drpdown select").val(countryIndex);
                } else {
                    let defualtCountry = Flits.defualtCountry;
                    countryIndex = Flits('.flits-address-phone-with-country-div .flits-country-drpdown select option[data-country-iso-code="' + defualtCountry + '"]').val();
                    Flits(".flits-address-phone-with-country-div .flits-country-drpdown select").val(countryIndex);
                }
            }
            Flits(".flits-address-phone-with-country-div .flits-country-drpdown select").trigger("change");
        }
        function addressForm(item) {
            item.attr("data-flits-first-name") == "null" ? item.attr("data-flits-first-name", "") : item.attr("data-flits-first-name");
            item.attr("data-flits-last-name") == "null" ? item.attr("data-flits-last-name", "") : item.attr("data-flits-last-name");
            item.attr("data-flits-address1") == "null" ? item.attr("data-flits-address1", "") : item.attr("data-flits-address1");
            item.attr("data-flits-address2") == "null" ? item.attr("data-flits-address2", "") : item.attr("data-flits-address2");
            item.attr("data-flits-company") == "null" ? item.attr("data-flits-company", "") : item.attr("data-flits-company");
            item.attr("data-flits-zip") == "null" ? item.attr("data-flits-zip", "") : item.attr("data-flits-zip");
            item.attr("data-flits-phone") == "null" ? item.attr("data-flits-phone", "") : item.attr("data-flits-phone");
            item.attr("data-flits-city") == "null" ? item.attr("data-flits-city", "") : item.attr("data-flits-city");
            item.attr("data-flits-country") == "null" ? item.attr("data-flits-country", "") : item.attr("data-flits-country");
            item.attr("data-flits-province") == "null" ? item.attr("data-flits-province", "") : item.attr("data-flits-province");
            form.find(".AddressFirstNameNew").val(item.attr("data-flits-first-name"));
            form.find(".AddressLastNameNew").val(item.attr("data-flits-last-name"));
            form.find(".AddressAddress1New").val(item.attr("data-flits-address1"));
            form.find(".AddressAddress2New").val(item.attr("data-flits-address2"));
            form.find(".AddressCompanyNew").val(item.attr("data-flits-company"));
            form.find(".AddressZipNew").val(item.attr("data-flits-zip"));
            form.find(".AddressPhoneNew").val(item.attr("data-flits-phone"));
            form.find(".AddressCityNew").val(item.attr("data-flits-city"));
            if (item.attr("data-flits-country") != "") {
                form.find('[name="address[country]"] option')
                    .filter(function () {
                        return this.text == item.attr("data-flits-country");
                    })
                    .prop("selected", true)
                    .attr("selected", true);
            }
            shopifySetup();
            if (item.attr("data-flits-province") != "") {
                form.find('[name="address[province]"] option')
                    .filter(function () {
                        return this.text == item.attr("data-flits-province");
                    })
                    .prop("selected", true)
                    .attr("selected", true);
            }
            item.attr("data-flits-default") == "true" ? form.find(".address_default_address_new").parent().hide() : form.find(".address_default_address_new").parent().show();
            form.find(".address_default_address_new").attr("checked", item.attr("data-flits-default") == "true" ? true : false);
            form.find(".flits-form-type").val("edit");
            form.find(".flits-address-form-title").html(Flits.t("Flits.locals.address_page.edit_address", "Edit Address"));
            form.attr("action", "/account/addresses" + "/" + item.attr("data-flits-id"));
            phoneWithContry();
        }
        function isPhoneValid(isDefaultBtnClick) {
            let phoneValue = form.find('.flits-input[name="address[phone]"]').val();
            let countryValue = form.find(".flits-address-phone-with-country-div .flits-country-code-textbox").val();
            let phoneNumber = countryValue + phoneValue;
            if (phoneValue.length > 0) {
                if (!Flits.validatePhone(phoneNumber)) {
                    Flits(".flits-address-card .flits-address-card-action").removeClass("flits-disabled");
                    form.find('.flits-input[name="address[phone]"]').addClass("flits-input-error");
                    form.find(".flits-address-phone-alert").html(Flits.deliveryAddress.settings.alertIcon + Flits.t("Flits.locals.address_page.invalid_contact_number", "Contact number is not valid"));
                    if (isDefaultBtnClick) {
                        flitsSnackbar.show({ text: Flits.t("Flits.locals.address_page.invalid_contact_number", "Contact number is not valid"), pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    }
                } else {
                    form.submit();
                    form.find('.flits-input[name="address[phone]"]').removeClass("flits-input-error");
                    form.find(".flits-address-phone-alert").html("");
                }
            } else {
                form.submit();
                form.find('.flits-input[name="address[phone]"]').removeClass("flits-input-error");
                form.find(".flits-address-phone-alert").html("");
            }
        }
        function getAddressErrorMsg(comment) {
            switch (comment) {
                case "first_name is too long (maximum is 255 characters)":
                    return Flits.t("Flits.locals.address_page.first_name_is_long", "First name is too long (maximum is 255 characters)");
                    break;
                case "last_name is too long (maximum is 255 characters)":
                    return Flits.t("Flits.locals.address_page.last_name_is_long", "Last name is too long (maximum is 255 characters)");
                    break;
                case "address1 is too long (maximum is 255 characters)":
                    return Flits.t("Flits.locals.address_page.address1_is_long", "Address1 is too long (maximum is 255 characters)");
                    break;
                case "address2 is too long (maximum is 255 characters)":
                    return Flits.t("Flits.locals.address_page.address2_is_long", "Address2 is too long (maximum is 255 characters)");
                    break;
                case "company is too long (maximum is 255 characters)":
                    return Flits.t("Flits.locals.address_page.company_name_is_long", "Company name is too long (maximum is 255 characters)");
                    break;
                case "city is too long (maximum is 255 characters)":
                    return Flits.t("Flits.locals.address_page.city_is_long", "City is too long (maximum is 255 characters)");
                    break;
                case "zip is too long (maximum is 255 characters)":
                    return Flits.t("Flits.locals.address_page.zip_is_long", "Zip is too long (maximum is 255 characters)");
                    break;
                case "signature has already been taken":
                    return Flits.t("Flits.locals.address_page.address_already_taken", "This address already exists.");
                    break;
                case "country is not a valid country":
                    return Flits.t("Flits.locals.address_page.country_invalid", "Country is not valid");
                    break;
                default:
                    return comment;
                    break;
            }
        }
        Flits(form).submit(function (event) {
            event.preventDefault();
            let form = Flits(this);
            let formType = form.find(".flits-form-type").val();
            let params = form.serializeArray();
            let index = params.findIndex(function (data) {
                return data.name == "address[phone]";
            });
            let number = form.find('.flits-input[name="address[phone]"]').val();
            let country = Flits(".flits-address-phone-with-country-div .flits-country-code-textbox").val();
            if (number.length != 0) {
                params[index].value = country + number;
            }
            let url = Flits.base_url + "/" + Flits.customer_id + form.attr("action");
            let method = form.attr("method");
            params.push({ name: "customer_hash", value: Flits.customerHash }, { name: "token", value: Flits.token });
            if (formType == "edit") {
                method = "PUT";
                params.push({ name: "_method", value: "PUT" });
                Flits.dispatchEvent("Flits:deliveryAddress:BeforeUpdate", { params: params });
                flitsSnackbar.show({ text: Flits.t("Flits.locals.address_page.updating_address", "Updating Address..."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default", duration: false });
            } else {
                Flits.dispatchEvent("Flits:deliveryAddress:BeforeAdd", { params: params });
                flitsSnackbar.show({ text: Flits.t("Flits.locals.address_page.adding_new_address", "Adding New Address..."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default", duration: false });
            }
            Flits.ajax({ method: method, url: url, data: params })
                .done(function (resp) {
                    if (resp.status) {
                        Flits.flitsSnackbarHide();
                        let adrs = resp.address.data;
                        let itemClone = Flits(".flits-address-card-template").clone();
                        itemClone.removeClass("flits-address-card-template");
                        if (formType == "edit") {
                            itemClone = Flits("div[data-flits-id='" + adrs.id + "']");
                        } else {
                            Flits.deliveryAddress.settings.totalAddress = parseInt(Flits.deliveryAddress.settings.totalAddress) + 1;
                            Flits(".flits-address-badge").html(Flits.deliveryAddress.settings.totalAddress);
                            if (Flits.deliveryAddress.settings.totalAddress >= 2) {
                                Flits(".flits-address-list-pagination-row").addClass("flits-hr");
                            } else {
                                Flits(".flits-address-list-pagination-row").removeClass("flits-hr");
                            }
                        }
                        adrs.first_name == null ? (adrs.first_name = "") : (adrs.first_name = adrs.first_name);
                        adrs.last_name == null ? (adrs.last_name = "") : (adrs.last_name = adrs.last_name);
                        adrs.address1 == null ? (adrs.address1 = "") : (adrs.address1 = adrs.address1);
                        adrs.address2 == null ? (adrs.address2 = "") : (adrs.address2 = adrs.address2);
                        adrs.company == null ? (adrs.company = "") : (adrs.company = adrs.company);
                        adrs.zip == null ? (adrs.zip = "") : (adrs.zip = adrs.zip);
                        adrs.phone == null ? (adrs.phone = "") : (adrs.phone = adrs.phone);
                        adrs.city == null ? (adrs.city = "") : (adrs.city = adrs.city);
                        adrs.country == null ? (adrs.country = "") : (adrs.country = adrs.country);
                        adrs.province == null ? (adrs.province = "") : (adrs.province = adrs.province);
                        adrs.province_code == null ? (adrs.province_code = "") : (adrs.province_code = adrs.province_code);
                        itemClone = Flits(itemClone);
                        itemClone.attr("data-flits-id", adrs.id);
                        itemClone.attr("data-flits-first-name", adrs.first_name);
                        itemClone.attr("data-flits-last-name", adrs.last_name);
                        itemClone.attr("data-flits-address1", adrs.address1);
                        itemClone.attr("data-flits-address2", adrs.address2);
                        itemClone.attr("data-flits-company", adrs.company);
                        itemClone.attr("data-flits-zip", adrs.zip);
                        itemClone.attr("data-flits-phone", adrs.phone);
                        itemClone.attr("data-flits-city", adrs.city);
                        itemClone.attr("data-flits-country", adrs.country);
                        itemClone.attr("data-flits-province", adrs.province);
                        itemClone.attr("data-flits-default", adrs.default ? "true" : "false");
                        itemClone.find(".flits-address-name").html(adrs.first_name + " " + adrs.last_name);
                        itemClone.find(".flits-company-name").html(adrs.company);
                        itemClone.find(".flits-address1-line").html(adrs.address1);
                        itemClone.find(".flits-address2-line").html(adrs.address2);
                        itemClone.find(".flits-city-deatils").html(adrs.zip + " " + adrs.city + " " + adrs.province_code);
                        itemClone.find(".flits-country").html(adrs.country_name);
                        itemClone.find(".flits-phone-number").html(adrs.phone);
                        if (Flits.deliveryAddress.settings.totalAddress > 1) {
                            Flits(".flits-address-list-pagination-row").removeClass("flits-hide");
                        }
                        if (adrs.default) {
                            if (formType == "edit") {
                                itemClone.each(function (index, item) {
                                    let addressStaticList = Flits(".flits-address-list-static-row")[index];
                                    let oldDefaultItem = Flits(addressStaticList).find(".flits-address-card.flits-default-address").removeClass("flits-default-address").attr("data-flits-default", false);
                                    if (index == 0) {
                                        var newItem = new Flits.deliveryAddress.settings.addressList.Item(["flits-id"], oldDefaultItem[0]);
                                        newItem._values["flits-id"] = newItem.elm.dataset.flitsId;
                                        Flits.deliveryAddress.settings.addressList.remove("flits-id", item.dataset.flitsId);
                                        Flits.deliveryAddress.settings.addressList.items.push(newItem);
                                        Flits.deliveryAddress.settings.addressList.update();
                                    } else if (index == 1) {
                                        var newItemMobile = new Flits.deliveryAddress.settings.addressMobileList.Item(["flits-id"], oldDefaultItem[0]);
                                        newItemMobile._values["flits-id"] = newItemMobile.elm.dataset.flitsId;
                                        Flits.deliveryAddress.settings.addressMobileList.remove("flits-id", item.dataset.flitsId);
                                        Flits.deliveryAddress.settings.addressMobileList.items.push(newItemMobile);
                                        Flits.deliveryAddress.settings.addressMobileList.update();
                                    }
                                    Flits(item).addClass("flits-default-address").attr("data-flits-default", true);
                                    Flits(addressStaticList).append(item);
                                    Flits(addressStaticList).find(".flits-address-card[data-flits-default='false']").remove();
                                });
                            } else {
                                Flits(".flits-address-list-static-row").each(function (index, item) {
                                    let addressStaticList = Flits(".flits-address-list-static-row")[index];
                                    if (Flits.deliveryAddress.settings.totalAddress > 1) {
                                        let oldDefaultItem = Flits(addressStaticList).find(".flits-address-card.flits-default-address").removeClass("flits-default-address").attr("data-flits-default", false);
                                        if (index == 0) {
                                            var newItem = new Flits.deliveryAddress.settings.addressList.Item(["flits-id"], oldDefaultItem[0]);
                                            newItem._values["flits-id"] = newItem.elm.dataset.flitsId;
                                            Flits.deliveryAddress.settings.addressList.items.push(newItem);
                                            Flits.deliveryAddress.settings.addressList.update();
                                        } else if (index == 1) {
                                            var newItemMobile = new Flits.deliveryAddress.settings.addressMobileList.Item(["flits-id"], oldDefaultItem[0]);
                                            newItemMobile._values["flits-id"] = newItemMobile.elm.dataset.flitsId;
                                            Flits.deliveryAddress.settings.addressMobileList.items.push(newItemMobile);
                                            Flits.deliveryAddress.settings.addressMobileList.update();
                                        }
                                    }
                                    Flits(itemClone).addClass("flits-default-address");
                                    Flits(addressStaticList).append(itemClone.clone());
                                    Flits(addressStaticList).find(".flits-address-card[data-flits-default='false']").remove();
                                });
                            }
                        } else {
                            if (formType == "edit") {
                                Flits.deliveryAddress.settings.addressList.update();
                                Flits.deliveryAddress.settings.addressMobileList.update();
                            } else {
                                var newItem = new Flits.deliveryAddress.settings.addressList.Item(["flits-id"], itemClone.clone()[0]);
                                newItem._values["flits-id"] = newItem.elm.dataset.flitsId;
                                Flits.deliveryAddress.settings.addressList.items.push(newItem);
                                Flits.deliveryAddress.settings.addressList.update();
                                var newItemMobile = new Flits.deliveryAddress.settings.addressMobileList.Item(["flits-id"], itemClone.clone()[0]);
                                newItemMobile._values["flits-id"] = newItemMobile.elm.dataset.flitsId;
                                Flits.deliveryAddress.settings.addressMobileList.items.push(newItemMobile);
                                Flits.deliveryAddress.settings.addressMobileList.update();
                            }
                        }
                        let popDom = Flits(".flits-address-popup-add-save").clone(true)[0];
                        Flits(popDom).removeClass("flits-template");
                        if (formType == "edit") {
                            Flits.dispatchEvent("Flits:deliveryAddress:Updated", { resp: resp });
                            Flits(popDom).find(".flits-snackbar-body").html(Flits.t("Flits.locals.address_page.address_updated_successfully", "Delivery address updated successfully"));
                            flitsSnackbar.show({ content: popDom, pos: "snackbar-center", showAction: false, container: Flits("body"), customClass: "flits-snackbar-overlay" });
                        } else {
                            Flits.dispatchEvent("Flits:deliveryAddress:Added", { resp: resp });
                            Flits(popDom).find(".flits-snackbar-body").html(Flits.t("Flits.locals.address_page.address_added_successfully", "Delivery address added successfully"));
                            flitsSnackbar.show({ content: popDom, pos: "snackbar-center", showAction: false, container: Flits("body"), customClass: "flits-snackbar-overlay" });
                        }
                        Flits(".flits-address-cancel-btn").trigger("click");
                    } else {
                        Flits.flitsSnackbarHide();
                        let error_text = "";
                        let errors = "";
                        if (resp.response) {
                            errors = JSON.parse(resp.response).errors;
                            let error_key = Object.keys(errors)[0];
                            error_text = errors[Object.keys(errors)[0]][0];
                            error_text = getAddressErrorMsg(error_key + " " + error_text);
                        } else {
                            errors = resp.error;
                            error_text = errors;
                        }
                        flitsSnackbar.show({ text: error_text, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    }
                    Flits(".flits-address-card .flits-address-card-action").removeClass("flits-disabled");
                })
                .fail(function (resp) {
                    Flits(".flits-address-card .flits-address-card-action").removeClass("flits-disabled");
                    flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                })
                .always(function () {});
        });
        Flits(document).on("click", ".flits-new-address-card", function (event) {
            form = Flits(this).parents(".flits-address-div").find(".flits-address-form-new");
            form.find(".address_default_address_new").parent().show();
            form.find(".address_default_address_new").attr("checked", false);
            Flits(this).parents(".flits-address-div").find(".flits-address-lits-container").addClass("flits-hide");
            Flits(this).parents(".flits-address-div").find(".flits-address-form").removeClass("flits-hide");
            form.find(".flits-form-type").val("new");
            form.attr("action", "/account/addresses");
            form.find(".flits-address-add-save-button").html(form.find(".flits-address-add-save-button").attr("data-flits-add-text"));
            form.find(".flits-address-form-title").html(form.find(".flits-address-form-title").attr("data-flits-original-text"));
            form.find('.flits-input[name="address[phone]"]').removeClass("flits-input-error");
            form.find(".flits-address-phone-alert").html("");
            form[0].reset();
            let countryVal = form.find('[name="address[country]"] option')[0];
            countryVal = Flits(countryVal).val();
            let countryName = form.find('[name="address[country]"] option')[1];
            if (countryVal.indexOf("---") == 0) {
                form.find('[name="address[country]"]').val(Flits(countryName).val());
            }
            shopifySetup();
            phoneWithContry();
        });
        Flits(document).on("click", ".flits-address-cancel-btn", function () {
            form = Flits(this).parents(".flits-address-div").find(".flits-address-form-new");
            form.find('.flits-input[name="address[phone]"]').removeClass("flits-input-error");
            form.find(".flits-address-phone-alert").html("");
            form[0].reset();
            Flits(this).parents(".flits-address-div").find(".flits-address-lits-container").removeClass("flits-hide");
            Flits(this).parents(".flits-address-div").find(".flits-address-form").addClass("flits-hide");
        });
        Flits(document).on("click", ".flits-address-edit-btn", function () {
            form = Flits(this).parents(".flits-address-div").find(".flits-address-form-new");
            let item = Flits(this).parents(".flits-address-card");
            Flits(this).parents(".flits-address-div").find(".flits-address-lits-container").addClass("flits-hide");
            Flits(this).parents(".flits-address-div").find(".flits-address-form").removeClass("flits-hide");
            form.find(".flits-address-add-save-button").html(form.find(".flits-address-add-save-button").attr("data-flits-update-text"));
            addressForm(item);
            Flits("html, body").animate({ scrollTop: form.position().top + 145 });
        });
        Flits(document).on("click", ".flits-address-remove-btn", function () {
            Flits(".flits-address-card .flits-address-card-action").addClass("flits-disabled");
            let el = Flits(this);
            let formId = el.parents(".flits-address-card ").data("flits-id");
            let popDom = Flits(".flits-address-popup-confirm").clone(true)[0];
            Flits(popDom).find('[data-flits-address-remove="yes"]').attr("flits-form-id", formId);
            Flits(popDom).removeClass("flits-template");
            flitsSnackbar.show({ content: popDom, pos: "snackbar-center", showAction: false, duration: false, container: Flits("body"), customClass: "flits-snackbar-overlay" });
        });
        Flits(document).on("click", ".flits-address-confirm", function () {
            form = Flits(this).parents(".flits-address-div").find(".flits-address-form-new");
            let el = Flits(this);
            let formId = Flits(el).attr("flits-form-id");
            Flits.dispatchEvent("Flits:deliveryAddress:BeforeRemove", { el: el, form_id: formId });
            if (Flits(this).attr("data-flits-address-remove") == "yes") {
                let url = "/account/addresses/" + formId;
                url = Flits.base_url + "/" + Flits.customer_id + url;
                flitsSnackbar.show({ text: Flits.t("Flits.locals.address_page.deleting_address", "Deleting Address..."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default", duration: false });
                Flits.ajax({ method: "DELETE", url: url, data: { customer_hash: Flits.customerHash, token: Flits.token, _mehtod: "DELETE" } })
                    .done(function (resp) {
                        if (resp.status) {
                            Flits.flitsSnackbarHide();
                            Flits.deliveryAddress.settings.addressList.remove("flits-id", formId);
                            Flits.deliveryAddress.settings.addressMobileList.remove("flits-id", formId);
                            Flits.deliveryAddress.settings.totalAddress = parseInt(Flits.deliveryAddress.settings.totalAddress) - 1;
                            Flits(".flits-address-badge").html(Flits.deliveryAddress.settings.totalAddress);
                            Flits.deliveryAddress.settings.totaPages = Math.ceil((Flits.deliveryAddress.settings.totalAddress - 1) / Flits.deliveryAddress.settings.perPageLimit);
                            let showItem = (Flits.deliveryAddress.settings.totaPages - 1) * Flits.deliveryAddress.settings.perPageLimit + 1;
                            if (Flits(".flits-desktop-view .flits-address-list-pagination-row .flits-address-card").not(".flits-default-hidden-card").length == 0) {
                                Flits.deliveryAddress.settings.addressList.i = showItem;
                                Flits(".flits-desktop-view .flits-address-pagination .flits-prev-btn").trigger("click");
                            }
                            if (Flits(".flits-mobile-view .flits-address-list-pagination-row .flits-address-card").not(".flits-default-hidden-card").length == 0) {
                                Flits.deliveryAddress.settings.addressMobileList.i = showItem;
                            }
                            Flits.deliveryAddress.settings.addressList.update();
                            Flits.deliveryAddress.settings.addressMobileList.update();
                            if (Flits.deliveryAddress.settings.totalAddress >= 2) {
                                Flits(".flits-address-list-pagination-row").addClass("flits-hr");
                            } else {
                                Flits(".flits-address-list-pagination-row").removeClass("flits-hr");
                            }
                            flitsSnackbar.show({ text: Flits.t("Flits.locals.address_page.address_deleted_successfully", "Address deleted successfully"), pos: "bottom-center", showAction: false, customClass: "flits-alert-success" });
                            Flits.dispatchEvent("Flits:deliveryAddress:Removed", { resp: resp });
                        } else {
                            flitsSnackbar.show({ text: resp.error, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                        }
                        Flits(".flits-address-card .flits-address-card-action").removeClass("flits-disabled");
                    })
                    .fail(function (resp) {
                        Flits(".flits-address-card .flits-address-card-action").removeClass("flits-disabled");
                        flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            } else {
                Flits(".flits-address-card .flits-address-card-action").removeClass("flits-disabled");
                Flits.flitsSnackbarHide();
            }
        });
        Flits(document).on("click", ".flits-address-default-btn", function () {
            Flits(".flits-address-card .flits-address-card-action").addClass("flits-disabled");
            form = Flits(this).parents(".flits-address-div").find(".flits-address-form-new");
            let item = Flits(this).parents(".flits-address-card");
            item.attr("data-flits-default", "true");
            addressForm(item);
            isPhoneValid(true);
        });
        Flits(document).on("click", ".flits-address-add-save-button", function () {
            form = Flits(this).parents(".flits-address-div").find(".flits-address-form-new");
            isPhoneValid(false);
        });
        Flits(".flits-address-form-new")
            .find('.flits-input[name="address[phone]"]')
            .keypress(function (event) {
                Flits(this).removeClass("flits-input-error");
                form.find(".flits-address-phone-alert").html("");
                return Flits.isNumber(event);
            });
    });
    var order = (Flits.order = function (options) {
        Flits.order.settings = {};
        var settings = { perPageLimit: 3, orderList: null, orderMobileList: null, totalOrder: 0, pageNo: Flits.getLocalStorage("order_page_no"), totaPages: 0, orderSize: 0, pageArray: [] };
        settings = Flits.extend(Flits.order.settings, settings, options);
        Flits.dispatchEvent("Flits:order:Loaded", { settings: settings });
        var showItem = 1;
        var isShowItem = true;
        Flits.order.settings.orderSize = parseInt(Flits("div[data-flits-order-size]").attr("data-flits-order-size"));
        Flits.order.settings.totalOrder = parseInt(Flits("div[data-flits-order-count]").attr("data-flits-order-count"));
        if (Flits.order.settings.totalOrder == 0 && Flits.order.settings.orderSize > 0) {
            Flits.order.settings.totalOrder = Flits.order.settings.orderSize;
        }
        Flits.order.settings.totaPages = Math.ceil(Flits.order.settings.totalOrder / Flits.order.settings.perPageLimit);
        Flits(".flits-order-badge").html(Flits.order.settings.totalOrder);
        Flits(".flits-order-badge").removeClass("flits-menu-badge-hide");
        Flits(".flits-order-div .flits-order-list").html("");
        var sliderOption = {
            dots: false,
            prevArrow:
                '<button type="button" class="flits-slider-prev flits-slick-arrow"><img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMy43NyAyNSI+PHRpdGxlPlByb2R1Y3QgUmlnaHQ8L3RpdGxlPjxwYXRoIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiIGQ9Ik0uMzcsMTMuMzksMTEuNjEsMjQuNjNhMS4yNiwxLjI2LDAsMCwwLDEuNzktMS43OEwzLDEyLjUsMTMuNCwyLjE1QTEuMjYsMS4yNiwwLDAsMCwxMS42MS4zN0wuMzcsMTEuNjFBMS4yNiwxLjI2LDAsMCwwLC4zNywxMy4zOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz48L3N2Zz4=" /></button>',
            nextArrow:
                '<button type="button" class="flits-slider-next flits-slider-arrow"><img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMy43NyAyNSI+PHRpdGxlPlByb2R1Y3QgUmlnaHQ8L3RpdGxlPjxwYXRoIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiIGQ9Ik0xMy40LDExLjYxLDIuMTYuMzdBMS4yNiwxLjI2LDAsMCwwLC4zNywyLjE1TDEwLjcyLDEyLjUuMzcsMjIuODVhMS4yNiwxLjI2LDAsMCwwLDEuNzksMS43OEwxMy40LDEzLjM5QTEuMjYsMS4yNiwwLDAsMCwxMy40LDExLjYxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPjwvc3ZnPg==" /></button>',
            slidesToShow: 3,
            scrolling: true,
            dragging: true,
            arrows: true,
            responsive: [
                { breakpoint: 1025, settings: { slidesToShow: 2 } },
                { breakpoint: 600, settings: { slidesToShow: 1 } },
            ],
        };
        function itemsSliderInit() {
            Flits(".flits-order-div .flits-line-items-slick").not(".flits-slider-initialized").flitsSlider(sliderOption);
        }
        function setOrdersSearch() {
            Flits(".flits-order-list-container").removeClass("flits-hide");
            Flits(".flits-order-loader").hide();
            Flits(".flits-order-loader").remove();
        }
        function setPagination() {
            var options = { i: showItem, page: Flits.order.settings.perPageLimit, pagination: { innerWindow: 1, left: 1, right: 1, paginationClass: "flits-pagination" } };
            Flits.order.settings.orderList = new flitsList("flits-order-list", options).on("updated", function (list) {
                itemsSliderInit();
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-order"]');
            });
            Flits.order.settings.orderMobileList = new flitsList("flits-order-mobile-list", options).on("updated", function (list) {
                itemsSliderInit();
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-order-mobile"]');
            });
            Flits(".flits-order-div .flits-line-items-slick").not(".flits-slider-initialized").flitsSlider(sliderOption);
            Flits.paginationDisabled(Flits.order.settings.orderList, '.flits-pagination-div[data-flits-pagination="flits-order"]');
            Flits.paginationDisabled(Flits.order.settings.orderMobileList, '.flits-pagination-div[data-flits-pagination="flits-order-mobile"]');
        }
        function ordersAppend(ordersDesk, ordersMob, page) {
            Flits(".flits-orders-temp .flits-orders-desktop").html(ordersDesk);
            Flits(".flits-orders-temp .flits-orders-mobile").html(ordersMob);
            Flits.dispatchEvent("Flits:order:contactUs");
            let orderRowsDesk = Flits(".flits-orders-temp .flits-orders-desktop").find(".flits-order-card").clone();
            let orderRowsMobile = Flits(".flits-orders-temp .flits-orders-mobile").find(".flits-order-card").clone();
            let index = page * Flits.order.settings.perPageLimit - Flits.order.settings.perPageLimit;
            for (i = 0; i < orderRowsDesk.length; i++) {
                var newItem = new Flits.order.settings.orderList.Item([], orderRowsDesk[i]);
                Flits.order.settings.orderList.items.splice(index + i, 1);
                Flits.order.settings.orderList.items.splice(index + i, 0, newItem);
            }
            for (i = 0; i < orderRowsMobile.length; i++) {
                var newItemMobile = new Flits.order.settings.orderMobileList.Item([], orderRowsMobile[i]);
                Flits.order.settings.orderMobileList.items.splice(index + i, 1);
                Flits.order.settings.orderMobileList.items.splice(index + i, 0, newItemMobile);
            }
            if (Flits.order.settings.orderList.items.length >= showItem && isShowItem) {
                isShowItem = false;
                Flits.order.settings.orderList.i = showItem;
                Flits.order.settings.orderList.update();
                Flits.order.settings.orderMobileList.i = showItem;
                Flits.order.settings.orderMobileList.update();
            } else {
                if (!isShowItem) {
                    Flits.order.settings.orderList.update();
                    Flits.order.settings.orderMobileList.update();
                }
            }
        }
        function getOrderAjax(page, check) {
            Flits.order.settings.pageArray.push(page);
            let url = "/account?view=flits_order_template";
            Flits.ajax({ url: url, method: "GET", data: { page: page } })
                .done(function (res) {
                    let orderRows = Flits(res).filter(".flits-desktop-content").find(".flits-order-card").not(".flits-skeleton-order-card");
                    let orderRowsMobile = Flits(res).filter(".flits-mobile-content").find(".flits-order-card").not(".flits-skeleton-order-card");
                    if (orderRows.length) {
                        ordersAppend(orderRows, orderRowsMobile, page);
                        if (check) {
                            page++;
                            extraOrder(page);
                        }
                    } else {
                        Flits.setLocalStorage("total_order_count", Flits.order.settings.orderList.items.length);
                        Flits.dispatchEvent("Flits:order:AllLoaded");
                        Flits.order.settings.pageArray = Flits.order.settings.pageArray.filter(function (el) {
                            return el != page;
                        });
                        return false;
                    }
                })
                .fail(function (resp) {})
                .always(function () {});
        }
        function getOrders(startPage, endPage) {
            for (i = startPage; i <= endPage; i++) {
                if (!Flits.order.settings.pageArray.find((x) => x == i)) {
                    getOrderAjax(i, false);
                    if (i == endPage) {
                        if (!Flits.order.settings.pageArray.find((x) => x == 1)) {
                            endPage = startPage - 1;
                            startPage = 1;
                            i = startPage - 1;
                        }
                    }
                }
            }
        }
        function extraOrder(page) {
            if (!Flits.order.settings.pageArray.find((x) => x == page)) {
                getOrderAjax(page, true);
            }
        }
        if (Flits.order.settings.orderSize > 0) {
            let skeletonOrderCount = 0;
            let pageNo = Flits.order.settings.pageNo;
            pageNo = pageNo == undefined ? 1 : pageNo;
            let totalOrderCount = Flits.getLocalStorage("total_order_count");
            skeletonOrderCount = Flits.order.settings.totalOrder;
            if (totalOrderCount != undefined) {
                skeletonOrderCount = Flits.order.settings.totalOrder > totalOrderCount ? Flits.order.settings.totalOrder : totalOrderCount;
            }
            for (i = 0; i < skeletonOrderCount; i++) {
                let skeletonDom = Flits(".flits-skeleton-order-template").clone();
                Flits(skeletonDom).removeClass("flits-skeleton-order-template");
                Flits(".flits-order-div .flits-order-list").append(skeletonDom);
                if (i == skeletonOrderCount - 1) {
                    Flits(".flits-skeleton-order-template").remove();
                }
            }
            showItem = (pageNo - 1) * Flits.order.settings.perPageLimit + 1;
            setPagination();
            setOrdersSearch();
            getOrderAjax(pageNo, false);
            if (pageNo > Flits.order.settings.totaPages) {
                getOrders(1, pageNo - 1);
                extraOrder(pageNo + 1);
            } else {
                getOrders(1, Flits.order.settings.totaPages);
                extraOrder(Flits.order.settings.totaPages + 1);
            }
        } else {
            Flits(".flits-order-empty").removeClass("flits-hide");
            Flits(".flits-order-loader").hide();
            Flits(".flits-order-loader").remove();
        }
        Flits(".flits-order-div .flits-pagination").bind("click", function (event) {
            Flits.setLocalStorage("order_page_no", parseInt(Flits(event.target).text()));
            Flits.dispatchEvent("Flits:order:pageClick", { pageNo: parseInt(Flits(event.target).text()) });
            Flits.dispatchEvent("Flits:order:contactUs");
        });
        Flits(document).on("click", ".flits-view-order-button", function () {
            Flits(this).toggleClass("flits-active");
            Flits(this).parents(".flits-order-card").toggleClass("flits-active");
            Flits(this).parents(".flits-order-card").find(".flits-collaps-order-details").slideToggle();
            if (Flits(this).parents(".flits-order-card").find(".flits-address-view-button").hasClass("flits-active")) {
                Flits(this).parents(".flits-order-card").find(".flits-address-view-button").toggleClass("flits-active");
                Flits(this).parents(".flits-order-card").find(".flits-address-breakdown").slideToggle();
            }
            Flits(this).parents(".flits-order-card").find(".flits-line-items-slick").flitsSlider("refresh");
            let hide_text = Flits.t("Flits.locals.order_page.hide_order_details", "Hide Order");
            let show_text = Flits.t("Flits.locals.order_page.show_order_details", "View Order");
            if (Flits(this).hasClass("flits-active")) {
                Flits(this).find("span").text(Flits(this).text().replace(show_text, hide_text));
            } else {
                Flits(this).find("span").text(Flits(this).text().replace(hide_text, show_text));
            }
        });
        Flits(document).on("click", ".flits-address-view-button", function () {
            Flits(this).toggleClass("flits-active");
            Flits(this).parents(".flits-order-card").find(".flits-address-breakdown").slideToggle();
        });
        Flits(document).on("click", ".flits-reorder-btn", function () {
            let items = flitsOrder[Flits(this).attr("data-flits-target")];
            let params = {};
            let noItem = 0;
            let soldOutItem = 0;
            params["items"] = [];
            if (items.length > 0) {
                for (let i = 0; items.length > i; i++) {
                    let item = items[i];
                    if (!item.item_variant_id) {
                        noItem++;
                    } else {
                        if (item.available == "true") {
                            if (parseInt(item.inventory_quantity) <= parseInt(item.quantity)) {
                                if (cartOrder[item.variant_id]) {
                                    if (parseInt(item.inventory_quantity) > parseInt(cartOrder[item.variant_id].cart_quantity)) {
                                        item.quantity = parseInt(item.inventory_quantity) - parseInt(cartOrder[item.variant_id].cart_quantity);
                                    } else {
                                        item.quantity = parseInt(item.inventory_quantity);
                                    }
                                    flitsSnackbar.show({
                                        text: Flits.t("Flits.locals.general.cart_updated", "Some items are no longer available. Your cart has been updated."),
                                        pos: "bottom-center",
                                        showAction: false,
                                        customClass: "flits-alert-default",
                                    });
                                }
                            } else {
                                if (cartOrder[item.variant_id]) {
                                    if (parseInt(item.inventory_quantity) <= parseInt(cartOrder[item.variant_id].cart_quantity) + parseInt(item.quantity)) {
                                        item.quantity = parseInt(item.inventory_quantity) - parseInt(cartOrder[item.variant_id].cart_quantity);
                                        flitsSnackbar.show({
                                            text: Flits.t("Flits.locals.general.cart_updated", "Some items are no longer available. Your cart has been updated."),
                                            pos: "bottom-center",
                                            showAction: false,
                                            customClass: "flits-alert-default",
                                        });
                                    }
                                }
                            }
                            params["items"].push({ id: item.variant_id, quantity: item.quantity });
                        } else {
                            soldOutItem++;
                        }
                    }
                }
                if (noItem == 1) {
                    flitsSnackbar.show({ text: Flits.t("Flits.locals.order_page.one_product_unavailable", "One of the products is unavailable"), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
                } else if (noItem > 1) {
                    flitsSnackbar.show({ text: Flits.t("Flits.locals.order_page.some_products_unavailable", "Some of the products are unavailable"), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
                }
                if (soldOutItem == 1) {
                    setTimeout(
                        function () {
                            flitsSnackbar.show({ text: Flits.t("Flits.locals.order_page.one_product_sold_out", "One of the products is sold out."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
                        },
                        noItem > 0 ? 1500 : 0
                    );
                } else if (soldOutItem > 1) {
                    setTimeout(
                        function () {
                            flitsSnackbar.show({ text: Flits.t("Flits.locals.order_page.some_products_sold_out", "Some of the products are sold out"), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
                        },
                        noItem > 0 ? 1500 : 0
                    );
                }
                Flits.dispatchEvent("Flits:order:BeforeReOrder", { params: params });
                setTimeout(
                    function () {
                        Flits.addToCart(params);
                    },
                    soldOutItem > 0 || noItem > 0 ? 2500 : 1000
                );
            }
        });
    });
    var contactUS = (Flits.contactUS = function (options) {
        Flits.contactUS.settings = {};
        var settings = {
            formId: window.flitsApp.formId,
            flitsFormId: window.flitsApp.flitsFormId,
            formError: false,
            contactUsHandle: "contact_us_order_list_" + Flits.customer_id,
            queue: "",
            alertIcon: '<span class="flits-error-icon"></span>',
            emailRequiredWarning: Flits.t("Flits.locals.order_contact_us.email_required_warning", "Email is required"),
            invalidEmailWarning: Flits.t("Flits.locals.order_contact_us.invalid_email_warning", "Please enter a valid email address"),
            invalidPhoneNumberWarning: Flits.t("Flits.locals.order_contact_us.invalid_contact_number_warning", "Please enter a valid contact number"),
            reasonRequiredWarning: Flits.t("Flits.locals.order_contact_us.reason_required_warning", "Please select a reason"),
            messageRequiredWarning: Flits.t("Flits.locals.order_contact_us.message_required_warning", "Message is required"),
            invalidAttachmentLinkWarning: Flits.t("Flits.locals.order_contact_us.invalid_attachment_link_warning", "Please enter a valid attachment link"),
            alreadyContactedMessage: Flits.t("Flits.locals.order_contact_us.already_contacted_message", "You have contacted us last on {{ date_time }}"),
            shopCountryName: Flits.shopCountryName,
            months: [
                Flits.t("Flits.locals.months.january", "January"),
                Flits.t("Flits.locals.months.february", "February"),
                Flits.t("Flits.locals.months.march", "March"),
                Flits.t("Flits.locals.months.april", "April"),
                Flits.t("Flits.locals.months.may", "May"),
                Flits.t("Flits.locals.months.june", "June"),
                Flits.t("Flits.locals.months.july", "July"),
                Flits.t("Flits.locals.months.august", "August"),
                Flits.t("Flits.locals.months.september", "September"),
                Flits.t("Flits.locals.months.october", "October"),
                Flits.t("Flits.locals.months.november", "November"),
                Flits.t("Flits.locals.months.december", "December"),
            ],
            noOfDay: 7,
            errorSelector: "flits-input-error",
            activeClassSelector: "flits-active",
            phoneValid: true,
            emailValid: false,
            reasonValid: false,
            messageValid: false,
            urlValid: true,
        };
        settings = Flits.extend(Flits.contactUS.settings, settings, options);
        Flits.dispatchEvent("Flits:contactUS:Loaded", { settings: settings });
        Flits.each(Flits.setPhoneCountryCode.settings.countryOptionArr, function (key, value) {
            Flits(".flits-contact-us-phone-number-country-div select").append(value);
        });
        Flits(document).on("Flits:myProfile:Updated", function () {
            Flits("#" + Flits.contactUS.settings.formId + " .flits-contact-form-first-name").attr("value", Flits(".flits-profile-form input[name='first_name']").val());
            Flits("#" + Flits.contactUS.settings.formId + " .flits-contact-form-last-name").attr("value", Flits(".flits-profile-form input[name='last_name']").val());
            Flits("#" + Flits.contactUS.settings.formId + " .flits-contact-form-email").attr("value", Flits(".flits-profile-form input[name='email']").val());
            Flits("#" + Flits.contactUS.settings.formId + " .flits-contact-form-phone").attr("value", Flits(".flits-profile-form input[name='phone']").val());
        });
        Flits("body").append(Flits("#flits-contact-us-form"));
        Flits("body").append(Flits("#flits-contact-us-form-success"));
        Flits.phoneNumberBind("#flits-contact-us-form .flits-contact-form-phone");
        updateContactUs();
        Flits(document).on("Flits:order:AllLoaded", function () {
            contactUsDone();
        });
        Flits(document).on("Flits:order:contactUs", function () {
            contactUsDone();
        });
        function messageOnChange(el) {
            Flits("#flits-msg-count").html(el.value.length + " / 250");
        }
        function emailValidationCheck(keyup) {
            let selector = ".flits-contact-form-email";
            let alertSelector = "#flits-alert-email";
            let statusVal = Flits(selector).val();
            if (keyup == 0) {
                if (statusVal.length == 0) {
                    Flits(selector).addClass(Flits.contactUS.settings.errorSelector);
                    Flits(alertSelector).html(Flits.contactUS.settings.alertIcon + Flits.contactUS.settings.emailRequiredWarning);
                    Flits.contactUS.settings.emailValid = false;
                } else if (!Flits.validateEmail(statusVal)) {
                    Flits(selector).addClass(Flits.contactUS.settings.errorSelector);
                    Flits(alertSelector).html(Flits.contactUS.settings.invalidEmailWarning);
                    Flits.contactUS.settings.emailValid = false;
                } else {
                    Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                    Flits(alertSelector).html("");
                    Flits.contactUS.settings.emailValid = true;
                }
            } else {
                Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                Flits(alertSelector).html("");
            }
        }
        function phoneValidationCheck(keyup) {
            let selector = ".flits-contact-form-phone";
            let countryVal = Flits(".flits-contact-us-phone-number-country-div").find(".flits-country-code-textbox").val();
            let alertSelector = "#flits-alert-phone";
            let statusVal = Flits(selector).val();
            let phoneNumber = countryVal + statusVal;
            if (keyup == 0) {
                if (statusVal.length > 0) {
                    if (!Flits.validatePhone(phoneNumber)) {
                        Flits(selector).addClass(Flits.contactUS.settings.errorSelector);
                        Flits(alertSelector).html(Flits.contactUS.settings.alertIcon + Flits.contactUS.settings.invalidPhoneNumberWarning);
                        Flits.contactUS.settings.phoneValid = false;
                    } else {
                        Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                        Flits(alertSelector).html(alertSelector).html("");
                        Flits.contactUS.settings.phoneValid = true;
                    }
                } else {
                    Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                    Flits(alertSelector).html(alertSelector).html("");
                    Flits.contactUS.settings.phoneValid = true;
                }
            } else {
                Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                Flits(alertSelector).html(alertSelector).html("");
            }
        }
        function reasonValidationCheck() {
            let selector = ".flits-contact-form-reason";
            let alertSelector = "#flits-alert-reason";
            let statusVal = Flits(selector).val();
            if (statusVal == null) {
                Flits(selector).addClass(Flits.contactUS.settings.errorSelector);
                Flits(alertSelector).html(Flits.contactUS.settings.alertIcon + Flits.contactUS.settings.reasonRequiredWarning);
                Flits.contactUS.settings.reasonValid = false;
            } else {
                Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                Flits(alertSelector).html(alertSelector).html("");
                Flits.contactUS.settings.reasonValid = true;
            }
        }
        function messageValidationCheck(keyup) {
            let selector = ".flits-contact-form-message";
            let alertSelector = "#flits-alert-message";
            let statusVal = Flits(selector).val();
            if (keyup == 0) {
                if (statusVal.trim().length == 0) {
                    Flits(selector).addClass(Flits.contactUS.settings.errorSelector);
                    Flits(alertSelector).html(Flits.contactUS.settings.alertIcon + Flits.contactUS.settings.messageRequiredWarning);
                    Flits.contactUS.settings.messageValid = false;
                } else {
                    Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                    Flits(alertSelector).html(alertSelector).html("");
                    Flits.contactUS.settings.messageValid = true;
                }
            } else {
                Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                Flits(alertSelector).html(alertSelector).html("");
            }
        }
        function urlValidationCheck(keyup) {
            let selector = ".flits-contact-form-url";
            let alertSelector = "#flits-alert-url";
            let statusVal = Flits(selector).val();
            if (keyup == 0) {
                if (statusVal.length > 0) {
                    if (!Flits.validateUrl(statusVal)) {
                        Flits(selector).addClass(Flits.contactUS.settings.errorSelector);
                        Flits(alertSelector).html(Flits.contactUS.settings.alertIcon + Flits.contactUS.settings.invalidAttachmentLinkWarning);
                        Flits.contactUS.settings.urlValid = false;
                    } else {
                        Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                        Flits(alertSelector).html(alertSelector).html("");
                        Flits.contactUS.settings.urlValid = true;
                    }
                } else {
                    Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                    Flits(alertSelector).html(alertSelector).html("");
                    Flits.contactUS.settings.urlValid = true;
                }
            } else {
                Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                Flits(alertSelector).html(alertSelector).html("");
            }
        }
        Flits(".flits-contact-form-phone").on("keyup", function (event) {
            phoneValidationCheck(1);
        });
        Flits(".flits-contact-form-phone").on("keypress", function (event) {
            return Flits.isNumber(event);
        });
        Flits(".flits-contact-form-email").on("keyup", function (event) {
            emailValidationCheck(1);
        });
        Flits(".flits-contact-form-url").on("keyup", function (event) {
            urlValidationCheck(1);
        });
        Flits(".flits-contact-form-message").on("keyup", function (event) {
            messageOnChange(this);
            messageValidationCheck(1);
        });
        Flits(".flits-contact-form-reason").on("change", function (event) {
            reasonValidationCheck(1);
        });
        function updateContactUs() {
            if (Flits.getLocalStorage(Flits.contactUS.settings.contactUsHandle) == null || Flits.getLocalStorage(Flits.contactUS.settings.contactUsHandle) == undefined) {
                Flits.setLocalStorage(Flits.contactUS.settings.contactUsHandle, []);
                Flits.contactUS.settings.queue = Flits.getLocalStorage(Flits.contactUS.settings.contactUsHandle);
            } else {
                Flits.contactUS.settings.queue = Flits.getLocalStorage(Flits.contactUS.settings.contactUsHandle);
            }
        }
        function contactFormSubmit() {
            emailValidationCheck(0);
            phoneValidationCheck(0);
            reasonValidationCheck(0);
            messageValidationCheck(0);
            urlValidationCheck(0);
            if (
                Flits.contactUS.settings.emailValid == true &&
                Flits.contactUS.settings.reasonValid == true &&
                Flits.contactUS.settings.messageValid == true &&
                Flits.contactUS.settings.phoneValid == true &&
                Flits.contactUS.settings.urlValid == true
            ) {
                formValueSet();
                let orderNumber = Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-number").val();
                let contactedAt = new Date();
                var index = Flits.contactUS.settings.queue.findIndex(function (data) {
                    return data.order_number == orderNumber;
                });
                if (index != -1) {
                    Flits.contactUS.settings.queue[index].contacted_at = contactedAt;
                } else {
                    Flits.contactUS.settings.queue.push({ order_number: orderNumber, contacted_at: contactedAt });
                }
                Flits.setLocalStorage(Flits.contactUS.settings.contactUsHandle, Flits.contactUS.settings.queue);
                Flits("#" + Flits.contactUS.settings.flitsFormId)[0].submit();
            }
        }
        function dateFormating(date) {
            let datetime = new Date(date);
            let formattedDate = datetime.getDate() + " " + Flits.contactUS.settings.months[datetime.getMonth()] + " " + datetime.getFullYear();
            let hours = datetime.getHours();
            let minutes = datetime.getMinutes();
            minutes = minutes < 10 ? "0" + minutes : minutes;
            let ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12;
            let formattedTime = hours + ":" + minutes + " " + ampm;
            return formattedDate + ", " + formattedTime;
        }
        function contactFormReset() {
            Flits("#" + Flits.contactUS.settings.formId)[0].reset();
            Flits("#" + Flits.contactUS.settings.flitsFormId)[0].reset();
            let classOne = Flits("#" + Flits.contactUS.settings.formId + "-email");
            let classTwo = Flits("#" + Flits.contactUS.settings.formId + "-phone");
            let classThree = Flits("#" + Flits.contactUS.settings.formId + "-reason");
            let classFour = Flits("#" + Flits.contactUS.settings.formId + "-message");
            let classFive = Flits("#" + Flits.contactUS.settings.formId + "-url");
            let allClasses = [classOne, classTwo, classThree, classFour, classFive];
            Flits.each(allClasses, function (id, el) {
                Flits(el).removeClass("flits-input-success");
                Flits(el).removeClass("flits-input-error");
            });
            Flits(".flits-form-alert").each(function (e, v) {
                Flits(v).html("");
            });
        }
        Flits("#flits-contactus-submit").on("click", function () {
            contactFormSubmit();
        });
        function formValueSet() {
            let customerName = Flits("#" + Flits.contactUS.settings.formId + "-first-name").val() + " " + Flits("#" + Flits.contactUS.settings.formId + "-last-name").val();
            let customerEmail = Flits("#" + Flits.contactUS.settings.formId + "-email").val();
            let customerCountry = Flits("#" + Flits.contactUS.settings.formId + " .flits-country-code-textbox").val();
            let customerMobile = Flits("#" + Flits.contactUS.settings.formId + "-phone").val();
            let customerPhoneNo = customerCountry + customerMobile;
            let customerReason = Flits("#" + Flits.contactUS.settings.formId + "-reason").val();
            let customerMessage = Flits("#" + Flits.contactUS.settings.formId + "-message").val();
            let customerAttachLink = Flits("#" + Flits.contactUS.settings.formId + "-url").val();
            if (customerName.trim().length == 0) {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-name").attr("disabled", true);
            } else {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-name").removeAttr("disabled");
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-name").val(customerName.trim());
            }
            if (customerEmail.length == 0) {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-email").attr("disabled", true);
            } else {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-email").removeAttr("disabled");
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-email").val(customerEmail);
            }
            if (customerMobile.length == 0) {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-phone").attr("disabled", true);
            } else {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-phone").removeAttr("disabled");
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-phone").val(customerPhoneNo);
            }
            if (customerMessage.trim().length == 0) {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-message").attr("disabled", true);
            } else {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-message").removeAttr("disabled");
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-message").val(customerMessage);
            }
            if (customerReason.trim().length == 0) {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-reason").attr("disabled", true);
            } else {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-reason").removeAttr("disabled");
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-reason").val(customerReason);
            }
            if (customerAttachLink.length == 0) {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-url").attr("disabled", true);
            } else {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-url").removeAttr("disabled");
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-url").val(customerAttachLink);
            }
            Flits.setLocalStorage("customer_name", customerName);
            Flits.setLocalStorage("customer_email", customerEmail);
            Flits.setLocalStorage("customer_phone", customerPhoneNo);
            Flits.setLocalStorage("customer_message", customerMessage);
            Flits.setLocalStorage("customer_reason", customerReason);
            Flits.setLocalStorage("customer_attachment_url", customerAttachLink);
        }
        function phoneWithContry() {
            let numberDetails;
            let countryIndex;
            let onlyNumber;
            let areaCode;
            if (Flits("#" + Flits.contactUS.settings.formId + "-phone").val()) {
                numberDetails = new libphonenumber.parsePhoneNumber(Flits("#" + Flits.contactUS.settings.formId + "-phone").val());
                countryIndex = Flits('.flits-contact-us-phone-number-country-div select option[data-country-iso-code="' + numberDetails.country + '"]').val();
                areaCode = Flits('.flits-contact-us-phone-number-country-div select option[data-country-iso-code="' + numberDetails.country + '"]').attr("data-country-code");
                onlyNumber = numberDetails.number.replace(areaCode, "");
                Flits(".flits-contact-us-phone-number-country-div select").val(countryIndex);
                Flits("#" + Flits.contactUS.settings.formId + "-phone").val(onlyNumber);
            } else {
                Flits.shopCountryName = Flits.shopCountryName.replace("&amp;", "&");
                if (Flits('.flits-contact-us-phone-number-country-div select option[data-country-name="' + Flits.shopCountryName + '"]')) {
                    countryIndex = Flits('.flits-contact-us-phone-number-country-div select option[data-country-name="' + Flits.shopCountryName + '"]').val();
                    Flits(".flits-contact-us-phone-number-country-div select").val(countryIndex);
                } else {
                    let defualtCountry = Flits.defualtCountry;
                    countryIndex = Flits('.flits-contact-us-phone-number-country-div select option[data-country-iso-code="' + defualtCountry + '"]').val();
                    Flits(".flits-contact-us-phone-number-country-div select").val(countryIndex);
                }
            }
            Flits(".flits-contact-us-phone-number-country-div select").trigger("change");
        }
        Flits(document).on("click", ".flits-contact-us-btn", function (event) {
            contactFormReset();
            phoneWithContry();
            let orderNumber = Flits(this).attr("data-flits-order-number");
            let orderName = Flits(this).attr("data-flits-order-name");
            let orderDate = Flits(this).attr("data-flits-order-date");
            let orderTotal = Flits(this).attr("data-flits-order-total");
            let orderFulfillmentStatus = Flits(this).attr("data-flits-order-fulfillment-status");
            let orderPaymentStatus = Flits(this).attr("data-flits-order-payment-status");
            let orderLink = Flits(this).attr("data-flits-order-link");
            let customerLink = Flits(this).attr("data-flits-customer-link");
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-number").val(orderNumber);
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-name").val(orderName);
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-date").val(orderDate);
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-total").val(orderTotal);
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-fulfillment-status").val(orderFulfillmentStatus);
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-payment-status").val(orderPaymentStatus);
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-link").val(orderLink);
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-link").val(customerLink);
            Flits.setLocalStorage("order_number", orderNumber);
            Flits.setLocalStorage("order_name", orderName);
            Flits.setLocalStorage("order_date", orderDate);
            Flits.setLocalStorage("order_total", orderTotal);
            Flits.setLocalStorage("order_fulfillment_status", orderFulfillmentStatus);
            Flits.setLocalStorage("order_payment_status", orderPaymentStatus);
            Flits.setLocalStorage("order_link", orderLink);
            Flits.setLocalStorage("customer_link", customerLink);
            Flits("body").css("overflow", "hidden");
            Flits("#flits-contact-us-form").addClass("active-popup");
        });
        Flits(document).on("click", ".flits-close-popup", function () {
            Flits("body").css("overflow", "auto");
            let modalId = Flits(this).parents(".flits-order-contact-us-popup").attr("id");
            if (modalId == "flits-contact-us-form") {
                Flits("#flits-contact-us-form").removeClass("active-popup");
            } else if (modalId == "flits-contact-us-form-success") {
                Flits("#flits-contact-us-form-success").removeClass("active-popup");
            }
        });
        Flits(document).on("click", ".flits-contactus-success-btn", function () {
            Flits("body").css("overflow", "auto");
            Flits("#flits-contact-us-form-success").removeClass("active-popup");
        });
        Flits(document).on("click", ".flits-notify-close", function () {
            let tooltipNo = Flits(this).parents(".flits-contact-us-tooltip ").attr("data-flits-order-number");
            Flits('.flits-contact-us-tooltip[data-flits-order-number="' + tooltipNo + '"]').removeClass("flits-tooltip-active");
        });
        if (Flits.contactUS.settings.formError == true) {
            Flits.contactUS.settings.formError = false;
            let existing = Flits.getLocalStorage(Flits.contactUS.settings.contactUsHandle);
            existing.pop();
            Flits.setLocalStorage(Flits.contactUS.settings.contactUsHandle, existing);
            Flits("#flits-contact-us-form").addClass("active-popup");
            Flits("body").css("overflow", "hidden");
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-name").val(Flits.getLocalStorage("customer_name"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-email").val(Flits.getLocalStorage("customer_email"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-phone").val(Flits.getLocalStorage("customer_phone"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-message").val(Flits.getLocalStorage("customer_message"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-reason").val(Flits.getLocalStorage("customer_reason"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-url").val(Flits.getLocalStorage("customer_attachment_url"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-number").val(Flits.getLocalStorage("order_number"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-name").val(Flits.getLocalStorage("order_name"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-date").val(Flits.getLocalStorage("order_date"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-total").val(Flits.getLocalStorage("order_total"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-fulfillment-status").val(Flits.getLocalStorage("order_fulfillment_status"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-payment-status").val(Flits.getLocalStorage("order_payment_status"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-link").val(Flits.getLocalStorage("order_link"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-link").val(Flits.getLocalStorage("customer_link"));
        } else {
            let newURL = location.href.split("?")[0];
            let urlString = window.location.href;
            let url = new URL(urlString);
            let c = url.searchParams.get("contact_posted");
            if (c) {
                window.history.pushState("object", document.title, newURL + "#order");
                Flits.navigationFunc("#order");
                Flits("#flits-contact-us-form-success").addClass("active-popup");
                Flits("body").css("overflow", "hidden");
            }
        }
        function contactUsDone() {
            let contactUsLocal = Flits.getLocalStorage(Flits.contactUS.settings.contactUsHandle);
            let filtered = contactUsLocal;
            contactUsLocal.forEach(function (item, index) {
                if (Flits.timeDiffer({ date1: item.contacted_at, date2: new Date(), type: "day" }) < Flits.contactUS.settings.noOfDay) {
                    let orderMessageText = Flits.contactUS.settings.alreadyContactedMessage.replace("{{ date_time }}", dateFormating(item.contacted_at));
                    if (Flits('.flits-contact-us-btn[data-flits-order-number="' + item.order_number + '"]')) {
                        Flits('.flits-contact-us-btn[data-flits-order-number="' + item.order_number + '"]').attr("data-flits-contact-done", true);
                        Flits('.flits-contact-us-btn[data-flits-order-number="' + item.order_number + '"]').attr("data-tippy-content", orderMessageText);
                        Flits('.flits-contact-us-btn[data-flits-order-number="' + item.order_number + '"]').attr("data-tippy-maxWidth", "220px");
                        Flits('.flits-contact-us-tooltip[data-flits-order-number="' + item.order_number + '"] .flits-notify-msg').html(orderMessageText);
                        Flits('.flits-contact-us-tooltip[data-flits-order-number="' + item.order_number + '"]').addClass("flits-tooltip-active");
                    }
                } else {
                }
            });
        }
    });
    var setPhoneCountryCode = (Flits.setPhoneCountryCode = function (options) {
        Flits.setPhoneCountryCode.settings = {};
        var settings = {
            countryOptionArr: [],
            country_list: [
                { countryName: "Afghanistan", code: "AF", phoneCode: "93" },
                { countryName: "Åland Islands", code: "AX", phoneCode: "358" },
                { countryName: "Albania", code: "AL", phoneCode: "355" },
                { countryName: "Algeria", code: "DZ", phoneCode: "213" },
                { countryName: "American Samoa", code: "AS", phoneCode: "1684" },
                { countryName: "Andorra", code: "AD", phoneCode: "376" },
                { countryName: "Angola", code: "AO", phoneCode: "244" },
                { countryName: "Anguilla", code: "AI", phoneCode: "1264" },
                { countryName: "Antigua & Barbuda", code: "AG", phoneCode: "1268" },
                { countryName: "Argentina", code: "AR", phoneCode: "54" },
                { countryName: "Armenia", code: "AM", phoneCode: "374" },
                { countryName: "Aruba", code: "AW", phoneCode: "297" },
                { countryName: "Australia", code: "AU", phoneCode: "61" },
                { countryName: "Austria", code: "AT", phoneCode: "43" },
                { countryName: "Azerbaijan", code: "AZ", phoneCode: "994" },
                { countryName: "Bahamas", code: "BS", phoneCode: "1242" },
                { countryName: "Bahrain", code: "BH", phoneCode: "973" },
                { countryName: "Bangladesh", code: "BD", phoneCode: "880" },
                { countryName: "Barbados", code: "BB", phoneCode: "1246" },
                { countryName: "Belarus", code: "BY", phoneCode: "375" },
                { countryName: "Belgium", code: "BE", phoneCode: "32" },
                { countryName: "Belize", code: "BZ", phoneCode: "501" },
                { countryName: "Benin", code: "BJ", phoneCode: "229" },
                { countryName: "Bermuda", code: "BM", phoneCode: "1441" },
                { countryName: "Bhutan", code: "BT", phoneCode: "975" },
                { countryName: "Bolivia", code: "BO", phoneCode: "591" },
                { countryName: "Bosnia & Herzegovina", code: "BA", phoneCode: "387" },
                { countryName: "Botswana", code: "BW", phoneCode: "267" },
                { countryName: "Brazil", code: "BR", phoneCode: "55" },
                { countryName: "British Indian Ocean Territory", code: "IO", phoneCode: "246" },
                { countryName: "British Virgin Islands", code: "VG", phoneCode: "1284" },
                { countryName: "Brunei", code: "BN", phoneCode: "673" },
                { countryName: "Bulgaria", code: "BG", phoneCode: "359" },
                { countryName: "Burkina Faso", code: "BF", phoneCode: "226" },
                { countryName: "Burundi", code: "BI", phoneCode: "257" },
                { countryName: "Cambodia", code: "KH", phoneCode: "855" },
                { countryName: "Cameroon", code: "CM", phoneCode: "237" },
                { countryName: "Canada", code: "CA", phoneCode: "1" },
                { countryName: "Cape Verde", code: "CV", phoneCode: "238" },
                { countryName: "Cayman Islands", code: "KY", phoneCode: "1345" },
                { countryName: "Central African Republic", code: "CF", phoneCode: "236" },
                { countryName: "Chad", code: "TD", phoneCode: "235" },
                { countryName: "Chile", code: "CL", phoneCode: "56" },
                { countryName: "China", code: "CN", phoneCode: "86" },
                { countryName: "Christmas Island", code: "CX", phoneCode: "61" },
                { countryName: "Cocos (Keeling) Islands", code: "CC", phoneCode: "61" },
                { countryName: "Colombia", code: "CO", phoneCode: "57" },
                { countryName: "Comoros", code: "KM", phoneCode: "269" },
                { countryName: "Cook Islands", code: "CK", phoneCode: "682" },
                { countryName: "Costa Rica", code: "CR", phoneCode: "506" },
                { countryName: "Croatia", code: "HR", phoneCode: "385" },
                { countryName: "Cuba", code: "CU", phoneCode: "53" },
                { countryName: "Curaçao", code: "CW", phoneCode: "5999" },
                { countryName: "Cyprus", code: "CY", phoneCode: "357" },
                { countryName: "Czechia", code: "CZ", phoneCode: "420" },
                { countryName: "DR Congo", code: "CD", phoneCode: "243" },
                { countryName: "Denmark", code: "DK", phoneCode: "45" },
                { countryName: "Djibouti", code: "DJ", phoneCode: "253" },
                { countryName: "Dominica", code: "DM", phoneCode: "1767" },
                { countryName: "Dominican Republic", code: "DO", phoneCode: "1809" },
                { countryName: "Dominican Republic", code: "DO", phoneCode: "1829" },
                { countryName: "Dominican Republic", code: "DO", phoneCode: "1849" },
                { countryName: "Ecuador", code: "EC", phoneCode: "593" },
                { countryName: "Egypt", code: "EG", phoneCode: "20" },
                { countryName: "El Salvador", code: "SV", phoneCode: "503" },
                { countryName: "Equatorial Guinea", code: "GQ", phoneCode: "240" },
                { countryName: "Eritrea", code: "ER", phoneCode: "291" },
                { countryName: "Estonia", code: "EE", phoneCode: "372" },
                { countryName: "Ethiopia", code: "ET", phoneCode: "251" },
                { countryName: "Falkland Islands", code: "FK", phoneCode: "500" },
                { countryName: "Faroe Islands", code: "FO", phoneCode: "298" },
                { countryName: "Fiji", code: "FJ", phoneCode: "679" },
                { countryName: "Finland", code: "FI", phoneCode: "358" },
                { countryName: "France", code: "FR", phoneCode: "33" },
                { countryName: "French Guiana", code: "GF", phoneCode: "594" },
                { countryName: "French Polynesia", code: "PF", phoneCode: "689" },
                { countryName: "Gabon", code: "GA", phoneCode: "241" },
                { countryName: "Gambia", code: "GM", phoneCode: "220" },
                { countryName: "Georgia", code: "GE", phoneCode: "995" },
                { countryName: "Germany", code: "DE", phoneCode: "49" },
                { countryName: "Ghana", code: "GH", phoneCode: "233" },
                { countryName: "Gibraltar", code: "GI", phoneCode: "350" },
                { countryName: "Greece", code: "GR", phoneCode: "30" },
                { countryName: "Greenland", code: "GL", phoneCode: "299" },
                { countryName: "Grenada", code: "GD", phoneCode: "1473" },
                { countryName: "Guadeloupe", code: "GP", phoneCode: "590" },
                { countryName: "Guam", code: "GU", phoneCode: "1671" },
                { countryName: "Guatemala", code: "GT", phoneCode: "502" },
                { countryName: "Guernsey", code: "GG", phoneCode: "44" },
                { countryName: "Guinea", code: "GN", phoneCode: "224" },
                { countryName: "Guinea-Bissau", code: "GW", phoneCode: "245" },
                { countryName: "Guyana", code: "GY", phoneCode: "592" },
                { countryName: "Haiti", code: "HT", phoneCode: "509" },
                { countryName: "Honduras", code: "HN", phoneCode: "504" },
                { countryName: "Hong Kong", code: "HK", phoneCode: "852" },
                { countryName: "Hungary", code: "HU", phoneCode: "36" },
                { countryName: "Iceland", code: "IS", phoneCode: "354" },
                { countryName: "India", code: "IN", phoneCode: "91" },
                { countryName: "Indonesia", code: "ID", phoneCode: "62" },
                { countryName: "Iran", code: "IR", phoneCode: "98" },
                { countryName: "Iraq", code: "IQ", phoneCode: "964" },
                { countryName: "Ireland", code: "IE", phoneCode: "353" },
                { countryName: "Isle of Man", code: "IM", phoneCode: "44" },
                { countryName: "Israel", code: "IL", phoneCode: "972" },
                { countryName: "Italy", code: "IT", phoneCode: "39" },
                { countryName: "Ivory Coast", code: "CI", phoneCode: "225" },
                { countryName: "Jamaica", code: "JM", phoneCode: "1876" },
                { countryName: "Japan", code: "JP", phoneCode: "81" },
                { countryName: "Jersey", code: "JE", phoneCode: "44" },
                { countryName: "Jordan", code: "JO", phoneCode: "962" },
                { countryName: "Kazakhstan", code: "KZ", phoneCode: "77" },
                { countryName: "Kazakhstan", code: "KZ", phoneCode: "76" },
                { countryName: "Kenya", code: "KE", phoneCode: "254" },
                { countryName: "Kiribati", code: "KI", phoneCode: "686" },
                { countryName: "Kosovo", code: "XK", phoneCode: "383" },
                { countryName: "Kuwait", code: "KW", phoneCode: "965" },
                { countryName: "Kyrgyzstan", code: "KG", phoneCode: "996" },
                { countryName: "Laos", code: "LA", phoneCode: "856" },
                { countryName: "Latvia", code: "LV", phoneCode: "371" },
                { countryName: "Lebanon", code: "LB", phoneCode: "961" },
                { countryName: "Lesotho", code: "LS", phoneCode: "266" },
                { countryName: "Liberia", code: "LR", phoneCode: "231" },
                { countryName: "Libya", code: "LY", phoneCode: "218" },
                { countryName: "Liechtenstein", code: "LI", phoneCode: "423" },
                { countryName: "Lithuania", code: "LT", phoneCode: "370" },
                { countryName: "Luxembourg", code: "LU", phoneCode: "352" },
                { countryName: "Macau", code: "MO", phoneCode: "853" },
                { countryName: "Macedonia", code: "MK", phoneCode: "389" },
                { countryName: "Madagascar", code: "MG", phoneCode: "261" },
                { countryName: "Malawi", code: "MW", phoneCode: "265" },
                { countryName: "Malaysia", code: "MY", phoneCode: "60" },
                { countryName: "Maldives", code: "MV", phoneCode: "960" },
                { countryName: "Mali", code: "ML", phoneCode: "223" },
                { countryName: "Malta", code: "MT", phoneCode: "356" },
                { countryName: "Marshall Islands", code: "MH", phoneCode: "692" },
                { countryName: "Martinique", code: "MQ", phoneCode: "596" },
                { countryName: "Mauritania", code: "MR", phoneCode: "222" },
                { countryName: "Mauritius", code: "MU", phoneCode: "230" },
                { countryName: "Mayotte", code: "YT", phoneCode: "262" },
                { countryName: "Mexico", code: "MX", phoneCode: "52" },
                { countryName: "Micronesia", code: "FM", phoneCode: "691" },
                { countryName: "Moldova", code: "MD", phoneCode: "373" },
                { countryName: "Monaco", code: "MC", phoneCode: "377" },
                { countryName: "Mongolia", code: "MN", phoneCode: "976" },
                { countryName: "Montenegro", code: "ME", phoneCode: "382" },
                { countryName: "Montserrat", code: "MS", phoneCode: "1664" },
                { countryName: "Morocco", code: "MA", phoneCode: "212" },
                { countryName: "Mozambique", code: "MZ", phoneCode: "258" },
                { countryName: "Myanmar", code: "MM", phoneCode: "95" },
                { countryName: "Namibia", code: "NA", phoneCode: "264" },
                { countryName: "Nauru", code: "NR", phoneCode: "674" },
                { countryName: "Nepal", code: "NP", phoneCode: "977" },
                { countryName: "Netherlands", code: "NL", phoneCode: "31" },
                { countryName: "New Caledonia", code: "NC", phoneCode: "687" },
                { countryName: "New Zealand", code: "NZ", phoneCode: "64" },
                { countryName: "Nicaragua", code: "NI", phoneCode: "505" },
                { countryName: "Niger", code: "NE", phoneCode: "227" },
                { countryName: "Nigeria", code: "NG", phoneCode: "234" },
                { countryName: "Niue", code: "NU", phoneCode: "683" },
                { countryName: "Norfolk Island", code: "NF", phoneCode: "672" },
                { countryName: "North Korea", code: "KP", phoneCode: "850" },
                { countryName: "Northern Mariana Islands", code: "MP", phoneCode: "1670" },
                { countryName: "Norway", code: "NO", phoneCode: "47" },
                { countryName: "Oman", code: "OM", phoneCode: "968" },
                { countryName: "Pakistan", code: "PK", phoneCode: "92" },
                { countryName: "Palau", code: "PW", phoneCode: "680" },
                { countryName: "Palestine", code: "PS", phoneCode: "970" },
                { countryName: "Panama", code: "PA", phoneCode: "507" },
                { countryName: "Papua New Guinea", code: "PG", phoneCode: "675" },
                { countryName: "Paraguay", code: "PY", phoneCode: "595" },
                { countryName: "Peru", code: "PE", phoneCode: "51" },
                { countryName: "Philippines", code: "PH", phoneCode: "63" },
                { countryName: "Pitcairn Islands", code: "PN", phoneCode: "64" },
                { countryName: "Poland", code: "PL", phoneCode: "48" },
                { countryName: "Portugal", code: "PT", phoneCode: "351" },
                { countryName: "Puerto Rico", code: "PR", phoneCode: "1787" },
                { countryName: "Puerto Rico", code: "PR", phoneCode: "1939" },
                { countryName: "Qatar", code: "QA", phoneCode: "974" },
                { countryName: "Republic of the Congo", code: "CG", phoneCode: "242" },
                { countryName: "Romania", code: "RO", phoneCode: "40" },
                { countryName: "Russia", code: "RU", phoneCode: "7" },
                { countryName: "Rwanda", code: "RW", phoneCode: "250" },
                { countryName: "Réunion", code: "RE", phoneCode: "262" },
                { countryName: "Saint Barthélemy", code: "BL", phoneCode: "590" },
                { countryName: "Saint Kitts & Nevis", code: "KN", phoneCode: "1869" },
                { countryName: "Saint Lucia", code: "LC", phoneCode: "1758" },
                { countryName: "Saint Martin", code: "MF", phoneCode: "590" },
                { countryName: "Saint Pierre & Miquelon", code: "PM", phoneCode: "508" },
                { countryName: "Saint Vincent & the Grenadines", code: "VC", phoneCode: "1784" },
                { countryName: "Samoa", code: "WS", phoneCode: "685" },
                { countryName: "San Marino", code: "SM", phoneCode: "378" },
                { countryName: "Saudi Arabia", code: "SA", phoneCode: "966" },
                { countryName: "Senegal", code: "SN", phoneCode: "221" },
                { countryName: "Serbia", code: "RS", phoneCode: "381" },
                { countryName: "Seychelles", code: "SC", phoneCode: "248" },
                { countryName: "Sierra Leone", code: "SL", phoneCode: "232" },
                { countryName: "Singapore", code: "SG", phoneCode: "65" },
                { countryName: "Sint Maarten", code: "SX", phoneCode: "1721" },
                { countryName: "Slovakia", code: "SK", phoneCode: "421" },
                { countryName: "Slovenia", code: "SI", phoneCode: "386" },
                { countryName: "Solomon Islands", code: "SB", phoneCode: "677" },
                { countryName: "Somalia", code: "SO", phoneCode: "252" },
                { countryName: "South Africa", code: "ZA", phoneCode: "27" },
                { countryName: "South Georgia", code: "GS", phoneCode: "500" },
                { countryName: "South Korea", code: "KR", phoneCode: "82" },
                { countryName: "South Sudan", code: "SS", phoneCode: "211" },
                { countryName: "Spain", code: "ES", phoneCode: "34" },
                { countryName: "Sri Lanka", code: "LK", phoneCode: "94" },
                { countryName: "Sudan", code: "SD", phoneCode: "249" },
                { countryName: "Suriname", code: "SR", phoneCode: "597" },
                { countryName: "Svalbard & Jan Mayen", code: "SJ", phoneCode: "4779" },
                { countryName: "Swaziland", code: "SZ", phoneCode: "268" },
                { countryName: "Sweden", code: "SE", phoneCode: "46" },
                { countryName: "Switzerland", code: "CH", phoneCode: "41" },
                { countryName: "Syria", code: "SY", phoneCode: "963" },
                { countryName: "São Tomé & Príncipe", code: "ST", phoneCode: "239" },
                { countryName: "Taiwan", code: "TW", phoneCode: "886" },
                { countryName: "Tajikistan", code: "TJ", phoneCode: "992" },
                { countryName: "Tanzania", code: "TZ", phoneCode: "255" },
                { countryName: "Thailand", code: "TH", phoneCode: "66" },
                { countryName: "Timor-Leste", code: "TL", phoneCode: "670" },
                { countryName: "Togo", code: "TG", phoneCode: "228" },
                { countryName: "Tokelau", code: "TK", phoneCode: "690" },
                { countryName: "Tonga", code: "TO", phoneCode: "676" },
                { countryName: "Trinidad & Tobago", code: "TT", phoneCode: "1868" },
                { countryName: "Tunisia", code: "TN", phoneCode: "216" },
                { countryName: "Turkey", code: "TR", phoneCode: "90" },
                { countryName: "Turkmenistan", code: "TM", phoneCode: "993" },
                { countryName: "Turks & Caicos Islands", code: "TC", phoneCode: "1649" },
                { countryName: "Tuvalu", code: "TV", phoneCode: "688" },
                { countryName: "Uganda", code: "UG", phoneCode: "256" },
                { countryName: "Ukraine", code: "UA", phoneCode: "380" },
                { countryName: "United Arab Emirates", code: "AE", phoneCode: "971" },
                { countryName: "United Kingdom", code: "GB", phoneCode: "44" },
                { countryName: "United States", code: "US", phoneCode: "1" },
                { countryName: "United States Virgin Islands", code: "VI", phoneCode: "1340" },
                { countryName: "Uruguay", code: "UY", phoneCode: "598" },
                { countryName: "Uzbekistan", code: "UZ", phoneCode: "998" },
                { countryName: "Vanuatu", code: "VU", phoneCode: "678" },
                { countryName: "Vatican City", code: "VA", phoneCode: "379" },
                { countryName: "Venezuela", code: "VE", phoneCode: "58" },
                { countryName: "Vietnam", code: "VN", phoneCode: "84" },
                { countryName: "Wallis & Futuna", code: "WF", phoneCode: "681" },
                { countryName: "Western Sahara", code: "EH", phoneCode: "212" },
                { countryName: "Yemen", code: "YE", phoneCode: "967" },
                { countryName: "Zambia", code: "ZM", phoneCode: "260" },
                { countryName: "Zimbabwe", code: "ZW", phoneCode: "263" },
            ],
            scaleSize: 1.25,
            flagSvgUrl: Flits.accountSettings.flagSvgUrl,
        };
        settings = Flits.extend(Flits.setPhoneCountryCode.settings, settings, options);
        Flits.dispatchEvent("Flits:setPhoneCountryCode:Loaded", { settings: settings });
        let scaleSize = Flits.setPhoneCountryCode.settings.scaleSize;
        let flagSvgSize = { w: 645 * scaleSize, h: 515 * scaleSize };
        let displayFlagSize = { w: 20 * scaleSize, h: 15 * scaleSize };
        let gap = { x: 5 * scaleSize, y: 5 * scaleSize };
        let posFlagSize = { w: displayFlagSize.w + gap.x, h: displayFlagSize.h + gap.y };
        function calcPos(letter, size) {
            return -(letter.toLowerCase().charCodeAt(0) - 97) * size;
        }
        function setFlagPositionFunc(iso) {
            var x = calcPos(iso[1], posFlagSize.w);
            var y = calcPos(iso[0], posFlagSize.h);
            return { x: x, y: y };
        }
        function flitsCountryFlagCss() {
            let flitsCountryFlagCss =
                ".flits-country-drpdown .flits-country-flag { " +
                "background-image: url(" +
                Flits.setPhoneCountryCode.settings.flagSvgUrl +
                ") !important;" +
                "background-repeat: no-repeat !important ;" +
                "background-size: " +
                flagSvgSize.w +
                "px " +
                flagSvgSize.h +
                "px !important;" +
                "width: " +
                displayFlagSize.w +
                "px !important;" +
                "height: " +
                displayFlagSize.h +
                "px !important;" +
                "}";
            Flits.styleCreate(flitsCountryFlagCss);
        }
        flitsCountryFlagCss();
        Flits.each(Flits.setPhoneCountryCode.settings.country_list, function (key, value) {
            let country_flag = value.code.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
            let optionElement = Flits("<option/>");
            optionElement.attr("data-country-iso-code", value.code);
            optionElement.attr("data-country-flag", country_flag);
            optionElement.attr("data-country-code", "+" + value.phoneCode);
            optionElement.attr("data-country-name", value.countryName);
            optionElement.attr("value", value.countryName);
            optionElement.html(value.countryName + " " + "(+" + value.phoneCode + ")");
            let flagPos = setFlagPositionFunc(value.code);
            optionElement.attr("data-x-pos", flagPos.x);
            optionElement.attr("data-y-pos", flagPos.y);
            Flits.setPhoneCountryCode.settings.countryOptionArr.push(optionElement.clone());
        });
        Flits(document).on("change", ".flits-profile-phone-with-country-div .flits-country-drpdown select", function (event) {
            let countryFlag = event.target.options[event.target.selectedIndex].dataset.countryFlag;
            let countryCode = event.target.options[event.target.selectedIndex].dataset.countryCode;
            let countryIsoCode = event.target.options[event.target.selectedIndex].dataset.countryIsoCode;
            let xPos = event.target.options[event.target.selectedIndex].dataset.xPos + "px ";
            let yPos = event.target.options[event.target.selectedIndex].dataset.yPos + "px";
            Flits(".flits-profile-phone-with-country-div .flits-country-flag").css("background-position", [xPos, yPos].join(""));
            Flits(".flits-profile-phone-with-country-div .flits-country-drpdown").attr("data-country-code", countryCode);
            Flits(".flits-profile-phone-with-country-div .flits-country-code-textbox").val(countryCode);
            Flits(".flits-profile-phone-with-country-div .flits-country-code-textbox").css("width", (countryCode.length + 2) * 8 + 10 + "px");
            Flits(".flits-profile-phone-with-country-div input[name='phone']").css("padding-left", (countryCode.length + 2) * 8 + "px");
        });
        Flits(document).on("change", ".flits-address-phone-with-country-div .flits-country-drpdown select", function (event) {
            let countryFlag = event.target.options[event.target.selectedIndex].dataset.countryFlag;
            let countryCode = event.target.options[event.target.selectedIndex].dataset.countryCode;
            let countryIsoCode = event.target.options[event.target.selectedIndex].dataset.countryIsoCode;
            let xPos = event.target.options[event.target.selectedIndex].dataset.xPos + "px ";
            let yPos = event.target.options[event.target.selectedIndex].dataset.yPos + "px";
            Flits(".flits-address-phone-with-country-div .flits-country-flag").css("background-position", [xPos, yPos].join(""));
            Flits(".flits-address-phone-with-country-div .flits-country-drpdown").attr("data-country-code", countryCode);
            Flits(".flits-address-phone-with-country-div .flits-country-code-textbox").val(countryCode);
            Flits(".flits-address-phone-with-country-div .flits-country-code-textbox").css("width", (countryCode.length + 2) * 8 + 10 + "px");
            Flits(".flits-address-phone-with-country-div input[name='address[phone]']").css("padding-left", (countryCode.length + 2) * 8 + "px");
        });
        Flits(document).on("change", ".flits-contact-us-phone-number-country-div select", function (event) {
            let countryFlag = event.target.options[event.target.selectedIndex].dataset.countryFlag;
            let countryCode = event.target.options[event.target.selectedIndex].dataset.countryCode;
            let countryIsoCode = event.target.options[event.target.selectedIndex].dataset.countryIsoCode;
            let xPos = event.target.options[event.target.selectedIndex].dataset.xPos + "px ";
            let yPos = event.target.options[event.target.selectedIndex].dataset.yPos + "px";
            Flits(".flits-contact-us-phone-number-country-div .flits-country-flag").css("background-position", [xPos, yPos].join(""));
            Flits(".flits-contact-us-phone-number-country-div .flits-country-drpdown").attr("data-country-code", countryCode);
            Flits(".flits-contact-us-phone-number-country-div .flits-country-code-textbox").val(countryCode);
            Flits(".flits-contact-us-phone-number-country-div .flits-country-code-textbox").css("width", (countryCode.length + 2) * 8 + 10 + 36 + "px");
            Flits(".flits-contact-us-phone-number-country-div .flits-contact-form-phone").css("padding-left", (countryCode.length + 2) * 8 + 10 + 28 + "px");
        });
    });
    var topOrder = (Flits.topOrder = function (options) {
        Flits.topOrder.settings = {};
        var settings = {
            topOrderList: null,
            topOrderMobileList: null,
            filterParent: true,
            perPageLimit: 4,
            noImage: "https://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c.gif",
            data: null,
        };
        settings = Flits.extend(Flits.topOrder.settings, settings, options);
        Flits.dispatchEvent("Flits:topOrder:Loaded", { settings: settings });
        Flits(document).on("Flits:topOrder:BindSuccessful", function () {
            Flits(".flits-mobile-view .flits-top-order-div .flits-navigation-header").addClass("flits-pb-30");
            Flits(".flits-top-order-list-container").removeClass("flits-hide");
            Flits(".flits-top-order-loader").hide();
            Flits(".flits-top-order-div .flits-filter-header, .flits-top-order-div .flits-header-title, .flits-top-order-div .flits-dropdown-filter").removeClass("flits-hide");
            topOrderFilter();
        });
        function viewTopProducts(data) {
            Flits(".flits-top-order-div .flits-top-order-list").attr("data-flits-top-order-count", data.orders_count);
            if (data.status && data.orders_count > 0) {
                let products = data.products;
                let moneyFormat = Flits.money_format;
                let productDatas = data.products_data;
                Flits.each(products, function (index, product) {
                    let itemClone = Flits(".flits-top-order-card-template").clone();
                    let itemCloneMobile = Flits(".flits-top-order-card-mobile-template").clone();
                    itemClone.removeClass("flits-top-order-card-template");
                    itemCloneMobile.removeClass("flits-top-order-card-mobile-template");
                    let todayDate = new Date();
                    let productDate = new Date(product.last_date);
                    let orderDay = Flits.timeDiffer({ date1: productDate, date2: todayDate, type: "day" });
                    itemClone.attr("data-flits-days", orderDay);
                    itemCloneMobile.attr("data-flits-days", orderDay);
                    let orderItemProduct = productDatas[product.id];
                    let image = "";
                    if (orderItemProduct.image == null) {
                        image = Flits.topOrder.settings.noImage;
                    } else {
                        image = orderItemProduct.image.src;
                    }
                    let extidx = image.lastIndexOf(".");
                    let extension = image.substr(extidx);
                    image = image.replace(extension, "_200x_crop_center" + extension);
                    itemClone.find(".flits-product-image-thumbnail img").attr("src", image);
                    itemClone.find(".flits-product-name").attr("data-tippy-content", orderItemProduct.title);
                    itemClone
                        .find(".flits-product-name")
                        .parent("a")
                        .attr("href", "/products/" + orderItemProduct.handle);
                    itemClone.find(".flits-product-name").html(orderItemProduct.title);
                    itemClone.attr("data-flits-product-price", parseInt(orderItemProduct.variants[0].price * 100));
                    itemClone.find(".flits-product-price").html(Flits.formatMoney(Math.abs(orderItemProduct.variants[0].price * 100), moneyFormat));
                    itemClone.find(".flits-product-quantity-count").html(product.count);
                    itemClone.attr("data-flits-product-quantity-count", product.count);
                    Flits(itemClone).find(".flits-add-to-cart").attr("data-flits-add-cart-text", Flits.t("Flits.locals.buttons.add_to_cart", "Add to Cart"));
                    Flits(itemClone).find(".flits-add-to-cart").attr("data-flits-sold-text", Flits.t("Flits.locals.buttons.sold_out", "Sold Out"));
                    itemCloneMobile.find(".flits-product-image-thumbnail img").attr("src", image);
                    itemCloneMobile.find(".flits-product-name").attr("data-tippy-content", orderItemProduct.title);
                    itemCloneMobile
                        .find(".flits-product-name")
                        .parent("a")
                        .attr("href", "/products/" + orderItemProduct.handle);
                    itemCloneMobile.find(".flits-product-name").html(orderItemProduct.title);
                    itemCloneMobile.attr("data-flits-product-price", parseInt(orderItemProduct.variants[0].price * 100));
                    itemCloneMobile.find(".flits-product-price").html(Flits.formatMoney(Math.abs(orderItemProduct.variants[0].price * 100), moneyFormat));
                    itemCloneMobile.find(".flits-product-quantity-count").html(product.count);
                    itemCloneMobile.attr("data-flits-product-quantity-count", product.count);
                    if (orderItemProduct.published_at !== null) {
                        Flits(itemCloneMobile).find(".flits-add-to-cart").attr("data-flits-add-cart-text", Flits.t("Flits.locals.buttons.add_to_cart", "Add to Cart"));
                        Flits(itemCloneMobile).find(".flits-add-to-cart").attr("data-flits-sold-text", Flits.t("Flits.locals.buttons.sold_out", "Sold Out"));
                        Flits.each(orderItemProduct.variants, function (var_index, variant) {
                            if (variant.title == "Default Title") {
                                itemClone.find(".flits-variant-select").parents(".flits-select-row").css("visibility", "hidden");
                                itemCloneMobile.find(".flits-variant-select").parents(".flits-select-row").css("visibility", "hidden");
                            }
                            let variantPrice = Flits.formatMoney(Math.abs(variant.price * 100), Flits.money_format);
                            var optionElement = Flits("<option/>");
                            var optionElementMobile = Flits("<option/>");
                            optionElement.html(variant.title);
                            optionElement.attr("value", variant.id);
                            optionElement.attr("data-flits-variant-price", variantPrice);
                            optionElementMobile.html(variant.title);
                            optionElementMobile.attr("value", variant.id);
                            optionElementMobile.attr("data-flits-variant-price", variantPrice);
                            Flits.ajax({ type: "GET", url: location.origin + "/products/" + orderItemProduct.handle + "?view=flits_product_variant_data&variant=" + variant.id })
                                .done(function (resp) {
                                    let parser = new DOMParser();
                                    let htmlDoc = parser.parseFromString(resp, "text/html");
                                    let response = JSON.parse(Flits(htmlDoc).text());
                                    if (!response.variant_available) {
                                        optionElement.html(variant.title + " - " + Flits.t("Flits.locals.buttons.sold_out", "Sold Out"));
                                        optionElement.attr("value", variant.id);
                                        optionElement.attr("data-flits-variant-price", variantPrice);
                                        optionElementMobile.html(variant.title + " - " + Flits.t("Flits.locals.buttons.sold_out", "Sold Out"));
                                        optionElementMobile.attr("value", variant.id);
                                        optionElementMobile.attr("data-flits-variant-price", variantPrice);
                                        itemClone.find(".flits-variant-select").append(optionElement);
                                        itemCloneMobile.find(".flits-variant-select").append(optionElementMobile);
                                        let selectedText = itemClone.find(".flits-variant-select option:selected").text();
                                        if (selectedText.indexOf(Flits.t("Flits.locals.buttons.sold_out", "Sold Out")) != -1) {
                                            let sold_out_text = itemClone.find(".flits-add-to-cart").attr("data-flits-sold-text");
                                            itemClone.find(".flits-add-to-cart").attr("disabled", true);
                                            itemClone.find(".flits-add-to-cart").text(sold_out_text);
                                            itemClone.find(".flits-product-quantity").addClass("flits-disabled");
                                        }
                                        let selectedTextMobile = itemCloneMobile.find(".flits-variant-select option:selected").text();
                                        if (selectedTextMobile.indexOf(Flits.t("Flits.locals.buttons.sold_out", "Sold Out")) != -1) {
                                            let sold_out_text = itemCloneMobile.find(".flits-add-to-cart").attr("data-flits-sold-text");
                                            itemCloneMobile.find(".flits-add-to-cart").attr("disabled", true);
                                            itemCloneMobile.find(".flits-add-to-cart").text(sold_out_text);
                                            itemCloneMobile.find(".flits-product-quantity").addClass("flits-disabled");
                                        }
                                    }
                                    if (response.variant_available && response.inventory_management == "shopify" && response.inventory_quantity > 0) {
                                        optionElement.attr("data-flits-inventory-quantity", response.inventory_quantity);
                                        optionElementMobile.attr("data-flits-inventory-quantity", response.inventory_quantity);
                                    }
                                    let selectedVariant = Flits(itemClone).find(".flits-variant-select option:selected").attr("data-flits-inventory-quantity");
                                    Flits(itemClone).find('.flits-product-quantity [name="product_quantity_input"]').attr("max", selectedVariant);
                                    Flits(itemCloneMobile).find('.flits-product-quantity [name="product_quantity_input"]').attr("max", selectedVariant);
                                })
                                .fail(function (resp) {})
                                .always(function () {});
                            itemClone.find(".flits-variant-select").append(optionElement);
                            itemCloneMobile.find(".flits-variant-select").append(optionElementMobile);
                        });
                    } else {
                        Flits(itemClone).find(".flits-add-to-cart").addClass("flits-secondary-btn flits-unavailable-btn").removeClass("flits-primary-btn flits-add-to-cart");
                        Flits(itemClone).find(".flits-unavailable-btn").attr("data-flits-unavailable-text", Flits.t("Flits.locals.buttons.product_unavailable_text", "Currently Unavailable"));
                        Flits(itemCloneMobile).find(".flits-add-to-cart").addClass("flits-secondary-btn flits-unavailable-btn").removeClass("flits-primary-btn flits-add-to-cart");
                        Flits(itemCloneMobile).find(".flits-unavailable-btn").attr("data-flits-unavailable-text", Flits.t("Flits.locals.buttons.product_unavailable_text", "Currently Unavailable"));
                        let product_unavailable_text = Flits(itemClone).find(".flits-unavailable-btn").attr("data-flits-unavailable-text");
                        Flits(itemClone).find(".flits-unavailable-btn").attr("disabled", !0);
                        Flits(itemClone).find(".flits-unavailable-btn").text(product_unavailable_text);
                        Flits(itemClone).addClass("flits-unavailable-top-order-product");
                        Flits(itemClone).find(".flits-product-name").parent("a").removeAttr("href");
                        Flits(itemCloneMobile).find(".flits-product-name").parent("a").removeAttr("href");
                        Flits(itemCloneMobile).find(".flits-unavailable-btn").attr("disabled", !0);
                        Flits(itemCloneMobile).find(".flits-unavailable-btn").text(product_unavailable_text);
                        Flits(itemCloneMobile).addClass("flits-unavailable-top-order-product");
                    }
                    Flits(".flits-top-order-div .flits-top-order-list").append(itemClone);
                    Flits(".flits-top-order-div .flits-top-order-mobile-list").append(itemCloneMobile);
                    if (index == products.length - 1) {
                        Flits.dispatchEvent("Flits:topOrder:BindSuccessful");
                    }
                });
            } else {
                Flits(".flits-top-order-empty").removeClass("flits-hide");
                Flits(".flits-top-order-loader").hide();
                Flits(".flits-top-order-div .flits-list-search").attr("disabled", true);
                Flits(".flits-top-order-div .flits-filter-select select").attr("disabled", true);
            }
        }
        viewTopProducts(Flits.topOrder.settings.data);
        function topOrderFilter() {
            var options = {
                valueNames: ["flits-product-name", { data: ["flits-days", "flits-product-price", "flits-product-quantity-count"] }],
                page: Flits.topOrder.settings.perPageLimit,
                pagination: { innerWindow: 1, left: 1, right: 1, paginationClass: "flits-pagination" },
                searchClass: "flits-list-search",
            };
            Flits.topOrder.settings.topOrderList = new flitsList("flits-top-order-list", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-top-order"]');
            });
            Flits.topOrder.settings.topOrderMobileList = new flitsList("flits-top-order-mobile-list", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-top-order-mobile"]');
            });
            Flits.paginationDisabled(Flits.topOrder.settings.topOrderList, '.flits-pagination-div[data-flits-pagination="flits-top-order"]');
            Flits.paginationDisabled(Flits.topOrder.settings.topOrderMobileList, '.flits-pagination-div[data-flits-pagination="flits-top-order-mobile"]');
        }
        Flits(document).on("change", ".flits-top-order-div .flits-filter-select select", function () {
            if (Flits(".flits-mobile-view").css("display") == "block") {
                Flits.topOrder.settings.filterParent = false;
            } else {
                Flits.topOrder.settings.filterParent = true;
            }
            var type = Flits("option:selected", this).attr("data-flits-type");
            if (type == "none") {
                Flits(this).parents(".flits-top-order-div .flits-filter-select").removeClass("flits-active");
            } else {
                Flits(this).parents(".flits-top-order-div .flits-filter-select").addClass("flits-active");
            }
            switch (type) {
                case "none":
                    if (Flits.topOrder.settings.filterParent) {
                        Flits.topOrder.settings.topOrderList.filter();
                    } else {
                        Flits.topOrder.settings.topOrderMobileList.filter();
                    }
                    break;
                case "sort":
                    var sort_type = Flits("option:selected", this).attr("data-flits-sort-type");
                    var sort = Flits("option:selected", this).attr("data-flits-sort");
                    if (Flits.topOrder.settings.filterParent) {
                        Flits.topOrder.settings.topOrderList.sort(sort, { order: sort_type });
                    } else {
                        Flits.topOrder.settings.topOrderMobileList.sort(sort, { order: sort_type });
                    }
                    break;
                case "days":
                    var days = Flits("option:selected", this).attr("data-flits-days");
                    if (Flits.topOrder.settings.filterParent) {
                        Flits.topOrder.settings.topOrderList.filter(function (item) {
                            if (parseInt(item.values()["flits-days"]) <= days) {
                                return true;
                            } else {
                                return false;
                            }
                        });
                    } else {
                        Flits.topOrder.settings.topOrderMobileList.filter(function (item) {
                            if (parseInt(item.values()["flits-days"]) <= days) {
                                return true;
                            } else {
                                return false;
                            }
                        });
                    }
                    break;
            }
            notFound();
        });
        function notFound() {
            if (Flits.topOrder.settings.filterParent) {
                Flits.topOrder.settings.topOrderList.update();
                if (Flits(".flits-top-order-div .flits-top-order-list .flits-top-order-card").length == 0) {
                    Flits(".flits-top-order-div .flits-no-result").removeClass("flits-hide");
                } else {
                    Flits(".flits-top-order-div .flits-no-result").addClass("flits-hide");
                }
            } else {
                Flits.topOrder.settings.topOrderMobileList.update();
                if (Flits(".flits-top-order-div .flits-top-order-mobile-list .flits-top-order-mobile-card").length == 0) {
                    Flits(".flits-top-order-div .flits-no-result-mobile").removeClass("flits-hide");
                } else {
                    Flits(".flits-top-order-div .flits-no-result-mobile").addClass("flits-hide");
                }
            }
        }
        Flits(document).on("input", ".flits-top-order-div .flits-search-fillter .flits-list-search", function (event) {
            if (Flits(".flits-mobile-view").css("display") == "block") {
                Flits.topOrder.settings.filterParent = false;
            } else {
                Flits.topOrder.settings.filterParent = true;
            }
            if (event.target.value) {
                Flits(".flits-top-order-div .flits-search-fillter .flits-clear-icon").removeClass("flits-hide");
            } else {
                Flits(".flits-top-order-div .flits-search-fillter .flits-clear-icon").addClass("flits-hide");
                if (Flits.topOrder.settings.filterParent) {
                    Flits.topOrder.settings.topOrderList.searched = false;
                    Flits.topOrder.settings.topOrderList.update();
                } else {
                    Flits.topOrder.settings.topOrderMobileList.searched = false;
                    Flits.topOrder.settings.topOrderMobileList.update();
                }
            }
            Flits.topOrder.settings.topOrderList.on("searchComplete", function () {
                notFound();
            });
            Flits.topOrder.settings.topOrderMobileList.on("searchComplete", function () {
                notFound();
            });
        });
        Flits(document).on("click", ".flits-top-order-div .flits-search-fillter .flits-clear-icon", function (event) {
            if (Flits(".flits-mobile-view").css("display") == "block") {
                Flits.topOrder.settings.filterParent = false;
            } else {
                Flits.topOrder.settings.filterParent = true;
            }
            Flits(".flits-top-order-div .flits-search-fillter .flits-list-search").val("");
            Flits(".flits-top-order-div .flits-search-fillter .flits-clear-icon").addClass("flits-hide");
            if (Flits.topOrder.settings.filterParent) {
                Flits.topOrder.settings.topOrderList.searched = false;
                Flits.topOrder.settings.topOrderList.update();
            } else {
                Flits.topOrder.settings.topOrderMobileList.searched = false;
                Flits.topOrder.settings.topOrderMobileList.update();
            }
            notFound();
        });
    });
    var Wishlist = (Flits.Wishlist = function (options) {
        Flits.Wishlist.settings = {};
        var settings = { wishlistHandle: "flits_wishlist_products", perPageLimit: 9, wishlistList: null, wishlistMobileList: null, wishlistServerData: null };
        settings = Flits.extend(Flits.Wishlist.settings, settings, options);
        Flits.dispatchEvent("Flits:Wishlist:Loaded", { settings: settings });
        Flits(document).on("Flits:WishlistDataBind:Successful", function () {
            var options = { valueNames: [{ data: ["flits-product-id"] }], page: Flits.Wishlist.settings.perPageLimit, pagination: { innerWindow: 1, left: 1, right: 1, paginationClass: "flits-pagination" } };
            Flits.Wishlist.settings.wishlistList = new flitsList("flits-wishlist-product-list", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-wishlist"]');
            });
            Flits.Wishlist.settings.wishlistMobileList = new flitsList("flits-wishlist-product-mobile-list", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-wishlist-mobile"]');
            });
            Flits.paginationDisabled(Flits.Wishlist.settings.wishlistList, '.flits-pagination-div[data-flits-pagination="flits-wishlist"]');
            Flits.paginationDisabled(Flits.Wishlist.settings.wishlistMobileList, '.flits-pagination-div[data-flits-pagination="flits-wishlist-mobile"]');
            setTimeout(function () {
                Flits(".flits-wishlist-container").removeClass("flits-hide");
                Flits(".flits-wishlist-loader").hide();
            }, 0);
        });
        let wishlistServerData = Flits.Wishlist.settings.wishlistServerData;
        Flits(".flits-wishlist-badge").html(wishlistServerData.count);
        Flits(".flits-wishlist-badge").removeClass("flits-menu-badge-hide");
        if (wishlistServerData != null && wishlistServerData.count > 0) {
            Flits.productDomDisplay(wishlistServerData, "flits-wishlist-product-list", 0);
        } else {
            setTimeout(function () {
                Flits(".flits-wishlist-empty").removeClass("flits-hide");
                Flits(".flits-wishlist-loader").hide();
            }, 700);
        }
        Flits(document).on("click", ".flits-remove-product", function () {
            let el = Flits(this);
            let removeFrom = Flits(this).parents(".flits-wishlist-div");
            let customerId = Flits.customer_id;
            let customerEmail = Flits.customer_email;
            let productId = Flits(el).attr("data-flits-product-id");
            let token = Flits.token;
            let params = { customer_hash: Flits.customerHash, token: token, customer_id: customerId, customer_email: customerEmail, product_id: productId };
            function removeWishlistProduct(params) {
                Flits.dispatchEvent("Flits:Wishlist:BeforeRemove", { el: el, params: params });
                Flits.ajax({ type: "DELETE", url: Flits.base_url + "/wishlist/remove_from_wishlist", contentType: "application/x-www-form-urlencoded", data: params })
                    .done(function (resp) {
                        Flits(".flits-wishlist-badge").html(resp.customer_wishlist_count);
                        if (resp.customer_wishlist_count == 0) {
                            Flits(removeFrom).find(".flits-wishlist-container").addClass("flits-hide");
                            Flits(removeFrom).find(".flits-wishlist-empty").removeClass("flits-hide");
                        }
                        Flits.setLocalStorage(Flits.Wishlist.settings.wishlistHandle, resp.products_handle);
                        if (Flits(removeFrom).find(".flits-remove-product[data-flits-product-id='" + productId + "']")) {
                            Flits(removeFrom)
                                .find(".flits-remove-product[data-flits-product-id='" + productId + "']")
                                .parents("[data-flits-product-handle]")
                                .remove();
                        }
                        Flits.dispatchEvent("Flits:Wishlist:Removed", { resp: resp });
                        flitsSnackbar.show({
                            text: "<p>" + Flits.t("Flits.locals.wishlisted_product_page.product_remove_from_wishlist", "Product removed from your wishlist") + "</p>",
                            pos: "bottom-center",
                            showAction: false,
                            customClass: "flits-alert-default",
                        });
                        if (Flits(".flits-mobile-view").css("display") == "block") {
                            if (Flits.Wishlist.settings.wishlistMobileList) {
                                Flits.Wishlist.settings.wishlistMobileList.remove("flits-product-id", productId);
                                Flits.Wishlist.settings.wishlistMobileList.update();
                            }
                        } else {
                            if (Flits.Wishlist.settings.wishlistList) {
                                Flits.Wishlist.settings.wishlistList.remove("flits-product-id", productId);
                                Flits.Wishlist.settings.wishlistList.update();
                            }
                        }
                        let noOfPage = Flits(removeFrom).find(".flits-pagination li").length;
                        if (Flits(removeFrom).find(".flits-wishlist-product-list .flits-product-item-card").length == 0) {
                            Flits(removeFrom)
                                .find(".flits-pagination li:nth-child(" + noOfPage + ")")
                                .trigger("click");
                        }
                    })
                    .fail(function (resp) {})
                    .always(function () {});
            }
            removeWishlistProduct(params);
        });
        let wl_functions = {
            replaceWishlistProduct: function (old_handle, product_data) {
                let image = "https://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c.gif";
                if (product_data.image != null) {
                    image = product_data.image.src;
                }
                let data = { customer_hash: Flits.customerHash, token: Flits.token, product_id: product_data.id, new_product_handle: product_data.handle, new_product_title: product_data.title, new_product_image: image };
                Flits.ajax({ method: "PUT", url: Flits.base_url + "/wishlist/replace_wishlist_product", data: data }).done(function (resp) {
                    if (resp.status) {
                        var local_storage_wl_handles = Flits.getLocalStorage(Flits.Wishlist.settings.wishlistHandle);
                        if (local_storage_wl_handles != undefined) {
                            local_storage_wl_handles = "," + local_storage_wl_handles + ",";
                            let handle_to_replace = "," + old_handle + ",";
                            let new_handle = "," + product_data.handle + ",";
                            if (local_storage_wl_handles.indexOf(handle_to_replace) != -1) {
                                let updated_wishlist_local_storage = local_storage_wl_handles.replace(handle_to_replace, new_handle);
                                updated_wishlist_local_storage = updated_wishlist_local_storage.slice(1, -1);
                                Flits.setLocalStorage(Flits.Wishlist.settings.wishlistHandle, updated_wishlist_local_storage);
                            }
                        }
                    }
                });
            },
            flitsGetProductDetailsFromWishlistResponse: function (handle) {
                var item_details = undefined;
                Flits.each(wishlistServerData.data, function (index, item) {
                    if (item.product_handle == handle) {
                        item_details = item;
                        return false;
                    }
                });
                return item_details;
            },
        };
        Flits.extend(Flits.Wishlist.settings, wl_functions);
    });
    var recentlyView = (Flits.recentlyView = function (options) {
        Flits.recentlyView.settings = {};
        var settings = { recentHandle: "flits_recently_products", perPageLimit: 9, recentViewList: null, recentViewMobileList: null };
        settings = Flits.extend(Flits.recentlyView.settings, settings, options);
        Flits.dispatchEvent("Flits:recentlyView:Loaded", { settings: settings });
        let recentViewData = Flits.getLocalStorage(Flits.recentlyView.settings.recentHandle);
        Flits(document).on("Flits:recentlyDataBind:Successful", function () {
            var options = { page: Flits.recentlyView.settings.perPageLimit, pagination: { innerWindow: 1, left: 1, right: 1, paginationClass: "flits-pagination" } };
            Flits.recentlyView.settings.recentViewList = new flitsList("flits-recently-view-product-list", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-recently-view"]');
            });
            Flits.recentlyView.settings.recentViewMobileList = new flitsList("flits-recently-view-product-mobile-list", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-recently-view-mobile"]');
            });
            Flits.paginationDisabled(Flits.recentlyView.settings.recentViewList, '.flits-pagination-div[data-flits-pagination="flits-recently-view"]');
            Flits.paginationDisabled(Flits.recentlyView.settings.recentViewMobileList, '.flits-pagination-div[data-flits-pagination="flits-recently-view-mobile"]');
            setTimeout(function () {
                Flits.recentlyView.settings.showAndHideSection("flits-recently-view-container", "flits-recently-view-loader");
            }, 0);
        });
        if (recentViewData != null && recentViewData.length > 0) {
            Flits.productDomDisplay(recentViewData, "flits-recently-view-product-list", 1);
        } else {
            setTimeout(function () {
                Flits.recentlyView.settings.showAndHideSection("flits-recently-view-empty", "flits-recently-view-loader");
            }, 700);
        }
        let rv_functions = {
            removeHandle: function (handle) {
                let updatedRecetViewData = recentViewData;
                Flits.each(updatedRecetViewData, function (key, value) {
                    if (value.product_handle == handle) {
                        updatedRecetViewData.splice(key, 1);
                        Flits.setLocalStorage(Flits.recentlyView.settings.recentHandle, updatedRecetViewData);
                        if (updatedRecetViewData.length <= 0) {
                            setTimeout(function () {
                                Flits.recentlyView.settings.showAndHideSection("flits-recently-view-empty", "flits-recently-view-container");
                            }, 0);
                        }
                        return false;
                    }
                });
            },
            replaceHandle: function (handle, new_handle) {
                let updatedRecetViewData = recentViewData;
                Flits.each(updatedRecetViewData, function (key, value) {
                    if (value.product_handle == handle) {
                        value.product_handle = new_handle;
                        Flits.setLocalStorage(Flits.recentlyView.settings.recentHandle, updatedRecetViewData);
                        return false;
                    }
                });
            },
            showAndHideSection: function (show_section, hide_section) {
                Flits("." + show_section).removeClass("flits-hide");
                Flits("." + hide_section).hide();
            },
        };
        Flits.extend(Flits.recentlyView.settings, rv_functions);
    });
    var storeCredit = (Flits.storeCredit = function (options) {
        Flits.storeCredit.settings = {};
        var settings = { storeCreditTableList: null, storeCreditTableMobileList: null, perPageLimit: 10, creditIdArray: {}, data: null };
        settings = Flits.extend(Flits.storeCredit.settings, settings, options);
        Flits.dispatchEvent("Flits:storeCredit:Loaded", { settings: settings });
        Flits(document).on("click", ".flits-credit-dropdown-btn", function () {
            Flits(this).parents(".flits-credit-table-item").find(".flits-credit-dropdown-contain").slideToggle();
            Flits(this).parents(".flits-credit-table-item").toggleClass("flits-credit-dropdown-active");
        });
        Flits(document).on("Flits:storeCredit:ListSuccessful", function (event) {
            var options = { valueNames: [{ data: ["crdr"] }], page: Flits.storeCredit.settings.perPageLimit, pagination: { innerWindow: 1, left: 1, right: 1, paginationClass: "flits-pagination" } };
            Flits.storeCredit.settings.storeCreditTableList = new flitsList("flits-store-credit-table", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-store-credit"]');
            });
            Flits.storeCredit.settings.storeCreditTableMobileList = new flitsList("flits-store-credit-mobile-table", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-store-credit-mobile"]');
            });
            Flits.paginationDisabled(Flits.storeCredit.settings.storeCreditTableList, '.flits-pagination-div[data-flits-pagination="flits-store-credit"]');
            Flits.paginationDisabled(Flits.storeCredit.settings.storeCreditTableMobileList, '.flits-pagination-div[data-flits-pagination="flits-store-credit-mobile"]');
            setTimeout(function () {
                Flits(".flits-store-credit-container").removeClass("flits-hide");
                Flits(".flits-store-credit-loader").hide();
            }, 700);
        });
        function getCreditCommentMsg(comment) {
            switch (comment) {
                case "Loyal Customer":
                    return Flits.t("Flits.locals.credit_page.loyal_customer", "Loyal Customer");
                    break;
                case "Repeat customer":
                    return Flits.t("Flits.locals.credit_page.repeat_customer", "Repeat Customer");
                    break;
                case "Fault in product":
                    return Flits.t("Flits.locals.credit_page.fault_in_product", "Fault in product");
                    break;
                case "Canceled order first time by customer":
                    return Flits.t("Flits.locals.credit_page.canceled_order_first_time_by_customer", "Canceled order first time by customer");
                    break;
                case "Delay in delivery time":
                    return Flits.t("Flits.locals.credit_page.delay_in_delivery_time", "Delay in delivery time");
                    break;
                case "Registration Credit":
                    return Flits.t("Flits.locals.credit_page.registration_credit", "Registration Credit");
                    break;
                case "Subscribe Credit":
                    return Flits.t("Flits.locals.credit_page.subscribe_credit", "Subscribe Credit");
                    break;
                case "First Order Credit":
                    return Flits.t("Flits.locals.credit_page.first_order_credit", "First Order Credit");
                    break;
                default:
                    if (comment && comment.includes("Spent in")) {
                        let additionalComment = "";
                        let isPosComment = false;
                        if (comment.indexOf("Order through POS.") != -1) {
                            comment = comment.replace("Order through POS.", "");
                            isPosComment = true;
                        }
                        let splitBy = " - ";
                        if (comment.includes(splitBy)) {
                            let resultComment = comment.split(splitBy);
                            comment = resultComment[0];
                            additionalComment = splitBy + resultComment[1];
                        }
                        comment = comment.replace("Spent in", "");
                        comment = comment.replace("Order.", "");
                        let orderNumber = comment.trim();
                        comment = Flits.t("Flits.locals.credit_page.spent_in_order", "Spent in {{ order_number }} order");
                        if (isPosComment) {
                            comment = Flits.t("Flits.locals.credit_page.spent_in_order_through_pos", "Spent in {{ order_number }} order through POS").replace("{{ order_number }}", orderNumber);
                        }
                        comment = comment.replace("{{ order_number }}", orderNumber);
                        return comment + additionalComment;
                    }
                    return comment;
                    break;
            }
        }
        function updateStoreCredit(data) {
            let customer = data;
            let log = customer.credit_log;
            Flits(".flits-credit-badge").html(Flits.formatMoney(Math.abs(customer.credits), Flits.money_format));
            Flits(".flits-credit-badge").removeClass("flits-menu-badge-hide");
            if (log.length > 0) {
                Flits.each(log, function (logIndex, logItem) {
                    let liClone = Flits(".flits-store-credit-transcation-table .flits-credit-table-item-template").clone();
                    liClone.removeClass("flits-credit-table-item-template");
                    liClone.attr("data-flits-store-credit-no", logItem.id);
                    let liCloneMobile = Flits(".flits-store-credit-transcation-mobile-table .flits-credit-table-item-mobile-template").clone();
                    liCloneMobile.removeClass("flits-credit-table-item-mobile-template");
                    liCloneMobile.attr("data-flits-store-credit-no", logItem.id);
                    let credits = logItem.credits;
                    if (credits > 0) {
                        liClone.find(".flits-crdr").addClass("flits-cr");
                        liClone.attr("data-crdr", "cr");
                        liCloneMobile.find(".flits-crdr").addClass("flits-cr");
                        liCloneMobile.attr("data-crdr", "cr");
                        credits = '<span class="flits-crdr-sign">+</span>' + Flits.formatMoney(Math.abs(credits), Flits.money_format);
                        if (Flits.storeCredit.settings.creditIdArray[logItem.rule_id]) {
                            if (logItem.rule_id == -2) {
                                Flits.each(logItem.metafields, function (metafieldIndex, metafieldItem) {
                                    if (Flits.storeCredit.settings.creditIdArray[metafieldItem.rule_id]) {
                                        Flits.storeCredit.settings.creditIdArray[metafieldItem.rule_id].credits = Flits.storeCredit.settings.creditIdArray[metafieldItem.rule_id].credits + metafieldItem.credits;
                                    } else {
                                        Flits.storeCredit.settings.creditIdArray[metafieldItem.rule_id] = { credits: metafieldItem.credits };
                                    }
                                });
                            }
                            Flits.storeCredit.settings.creditIdArray[logItem.rule_id].credits = Flits.storeCredit.settings.creditIdArray[logItem.rule_id].credits + logItem.credits;
                        } else {
                            if (logItem.rule_id == -2) {
                                Flits.each(logItem.metafields, function (metafieldIndex, metafieldItem) {
                                    if (Flits.storeCredit.settings.creditIdArray[metafieldItem.rule_id]) {
                                        Flits.storeCredit.settings.creditIdArray[metafieldItem.rule_id].credits = Flits.storeCredit.settings.creditIdArray[metafieldItem.rule_id].credits + metafieldItem.credits;
                                    } else {
                                        Flits.storeCredit.settings.creditIdArray[metafieldItem.rule_id] = { credits: metafieldItem.credits };
                                    }
                                });
                            }
                            Flits.storeCredit.settings.creditIdArray[logItem.rule_id] = { credits: logItem.credits };
                        }
                    } else {
                        liClone.find(".flits-crdr").addClass("flits-dr");
                        liClone.attr("data-crdr", "dr");
                        liCloneMobile.find(".flits-crdr").addClass("flits-dr");
                        liCloneMobile.attr("data-crdr", "dr");
                        credits = '<span class="flits-crdr-sign">-</span>' + Flits.formatMoney(Math.abs(credits), Flits.money_format);
                    }
                    let comment = getCreditCommentMsg(logItem.comment);
                    liClone.find(".flits-crdr").html(credits);
                    liClone.find(".flits-credit-comment").html(comment);
                    liClone.find(".flits-credit-comment").attr("data-tippy-content", comment);
                    liClone.find(".flits-credit-date").html(logItem.created_at);
                    liClone.find(".flits-credit-balance").html(Flits.formatMoney(Math.abs(logItem.current_credits), Flits.money_format));
                    liCloneMobile.find(".flits-crdr").html(credits);
                    liCloneMobile.find(".flits-credit-comment").html(comment);
                    liCloneMobile.find(".flits-credit-comment").attr("data-tippy-content", comment);
                    liCloneMobile.find(".flits-credit-date").html(logItem.created_at);
                    liCloneMobile.find(".flits-credit-balance").html(Flits.formatMoney(Math.abs(logItem.current_credits), Flits.money_format));
                    if (typeof logItem.metafields != "undefined" && logItem.metafields.length > 0) {
                        liClone.addClass("flits-credit-log-with-dropdown");
                        let creditDetailsDiv = liClone.find(".flits-credit-dropdown-contain");
                        liCloneMobile.addClass("flits-credit-log-with-dropdown");
                        let creditDetailsDivMobile = liCloneMobile.find(".flits-credit-dropdown-contain");
                        Flits.each(logItem.metafields, function (subLogIndex, subLogIem) {
                            let creditDetailsRowClone = creditDetailsDiv.find(".flits-credit-details-row-template").clone();
                            let creditDetailsRowMobileClone = creditDetailsDivMobile.find(".flits-credit-details-row-template").clone();
                            creditDetailsRowClone.removeClass("flits-credit-details-row-template");
                            creditDetailsRowMobileClone.removeClass("flits-credit-details-row-template");
                            let credits = subLogIem.credits;
                            if (credits > 0) {
                                credits = Flits.formatMoney(Math.abs(credits), Flits.money_format);
                            } else {
                                credits = Flits.formatMoney(Math.abs(credits), Flits.money_format);
                            }
                            creditDetailsRowClone.find(".flits-product-credit").html(credits);
                            creditDetailsRowClone.find(".flits-product-title").attr("href", "/products/" + subLogIem.product_handle + "?variant=" + subLogIem.variant_id);
                            creditDetailsRowClone.find(".flits-product-title").html(subLogIem.product_title);
                            creditDetailsRowClone.find(".flits-product-title").attr("data-tippy-content", subLogIem.product_title);
                            creditDetailsRowClone.find(".flits-product-tag-name").attr("href", "/search?q=" + subLogIem.tag);
                            creditDetailsRowClone.find(".flits-product-tag-name").html(subLogIem.tag);
                            creditDetailsRowMobileClone.find(".flits-product-credit").html(credits);
                            creditDetailsRowMobileClone.find(".flits-product-title").attr("href", "/products/" + subLogIem.product_handle + "?variant=" + subLogIem.variant_id);
                            creditDetailsRowMobileClone.find(".flits-product-title").html(subLogIem.product_title);
                            creditDetailsRowMobileClone.find(".flits-product-tag-name").attr("href", "/search?q=" + subLogIem.tag);
                            creditDetailsRowMobileClone.find(".flits-product-tag-name").html(subLogIem.tag);
                            creditDetailsDiv.append(creditDetailsRowClone);
                            creditDetailsDivMobile.append(creditDetailsRowMobileClone);
                        });
                        liClone.find(".flits-credit-details-row-template").remove();
                        liCloneMobile.find(".flits-credit-details-row-template").remove();
                        liClone.append(creditDetailsDiv);
                        liCloneMobile.append(creditDetailsDivMobile);
                    } else {
                        liClone.find(".flits-credit-details-row-template").removeClass("flits-credit-details-row-template");
                        liCloneMobile.find(".flits-credit-details-row-template").removeClass("flits-credit-details-row-template");
                    }
                    Flits(".flits-store-credit-transcation-table .flits-credit-table-body").append(liClone);
                    Flits(".flits-store-credit-transcation-mobile-table .flits-credit-table-body").append(liCloneMobile);
                    if (log.length - 1 == logIndex) {
                        Flits.dispatchEvent("Flits:storeCredit:ListSuccessful");
                    }
                });
            } else {
                setTimeout(function () {
                    Flits(".flits-store-credit-container").removeClass("flits-hide");
                    Flits(".flits-store-credit-transcation-table, .flits-store-credit-transcation-mobile-table").addClass("flits-hide");
                    Flits(".flits-store-credit-empty").removeClass("flits-hide");
                    Flits(".flits-store-credit-loader").hide();
                }, 700);
            }
        }
        let data = Flits.storeCredit.settings.data;
        if (data.status) {
            let customer = data.customer;
            let total = customer.total_earned_credits + Math.abs(customer.total_spent_credits) + customer.credits;
            let earnValue = (customer.total_earned_credits * 100) / total;
            let spentValue = (Math.abs(customer.total_spent_credits) * 100) / total;
            let currentValue = (customer.credits * 100) / total;
            isNaN(earnValue) ? (earnValue = 0) : earnValue;
            isNaN(spentValue) ? (spentValue = 0) : spentValue;
            isNaN(currentValue) ? (currentValue = 0) : currentValue;
            let currentCredit = Flits.formatMoney(Math.abs(customer.credits), Flits.money_format);
            Flits(".flits-store-credit-chart").donutChart({
                seriesData: [
                    { name: "earn", value: earnValue, color: Flits.AccountPage.settings.earnChartColor },
                    { name: "spent", value: spentValue, color: Flits.AccountPage.settings.spendChartColor },
                    { name: "current", value: currentValue, color: Flits.AccountPage.settings.currentChartColor },
                ],
                title: currentCredit,
                textStyle: { fontWeight: "bold", color: Flits.AccountPage.settings.currentChartColor },
            });
            Flits(".flits-earn-value").html(Flits.formatMoney(Math.abs(customer.total_earned_credits), Flits.money_format));
            Flits(".flits-spent-value").html(Flits.formatMoney(Math.abs(customer.total_spent_credits), Flits.money_format));
            Flits(".flits-current-value").html(Flits.formatMoney(Math.abs(customer.credits), Flits.money_format));
            updateStoreCredit(customer);
        } else {
            Flits(".flits-store-credit-chart").donutChart({ seriesData: [], title: Flits.formatMoney(Math.abs(00), Flits.money_format), textStyle: { fontWeight: "bold", color: Flits.AccountPage.settings.currentChartColor } });
            setTimeout(function () {
                Flits(".flits-store-credit-container").removeClass("flits-hide");
                Flits(".flits-store-credit-empty").removeClass("flits-hide");
                Flits(".flits-store-credit-loader").hide();
            }, 700);
        }
        Flits(".flits-credit-category-div [data-flits-value]").on("click", function () {
            var applyFilter = [];
            var value = Flits(this).data("flits-value");
            if (value != "crdr") {
                applyFilter.push(value);
            }
            Flits.storeCredit.settings.storeCreditTableList.filter(function (item) {
                if (applyFilter.length > 0) {
                    return applyFilter.indexOf(item.values().crdr) > -1;
                }
                return true;
            });
            Flits.storeCredit.settings.storeCreditTableMobileList.filter(function (item) {
                if (applyFilter.length > 0) {
                    return applyFilter.indexOf(item.values().crdr) > -1;
                }
                return true;
            });
        });
    });
    var howToEarnCredit = (Flits.howToEarnCredit = function (options) {
        Flits.howToEarnCredit.settings = {};
        var settings = {
            spentRange: [],
            rulesConfig: {
                register: {
                    icon:
                        "PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTAuNCAxODYuNyI+PHRpdGxlPlJlZ2lzdGVyPC90aXRsZT48cGF0aCBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiBkPSJNMTMzLjEsMTMxYTYsNiwwLDEsMCw5LjgtN2gwQTc4LjEsNzguMSwwLDAsMCwxMDEsOTMuMmE0OS43OCw0OS43OCwwLDAsMCwyNi42LTQzLjgsNDkuMyw0OS4zLDAsMSwwLTcyLDQzLjhDMjMuNCwxMDMuMywwLDEzMy4xLDAsMTY4LjRhNiw2LDAsMCwwLDUuOSw1LjksNiw2LDAsMCwwLDUuOS01LjlBNjYuMzgsNjYuMzgsMCwwLDEsMTMzLjEsMTMxWk00MC45LDQ5LjRBMzcuNCwzNy40LDAsMSwxLDc4LjMsODYuOSwzNy4zNCwzNy4zNCwwLDAsMSw0MC45LDQ5LjRaTTE5MC40LDE1Mi43YTYsNiwwLDAsMS01LjksNS45SDE2Mi4xVjE4MWE1LjkxLDUuOTEsMCwwLDEtNS45LDUuOSw2LDYsMCwwLDEtNS45LTUuOVYxNTguNkgxMjcuOWE2LDYsMCwwLDEsMC0xMS45aDIyLjRWMTI0LjNhNS45MSw1LjkxLDAsMCwxLDUuOS01LjksNiw2LDAsMCwxLDUuOSw1LjloMHYyMi40aDIyLjRhNi4wNiw2LjA2LDAsMCwxLDUuOSw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMC4yKSIgc3R5bGU9ImZpbGw6IzI1ZDg3MiIvPjwvc3ZnPg==",
                    linkTo: "none",
                    isDisplayEarnedCredits: false,
                },
                subscribe: {
                    icon:
                        "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTcuMjEgMTg3Ij48dGl0bGU+U3Vic2NyaWJlIEljb248L3RpdGxlPjxwYXRoIGQ9Ik0yMS40OSwzOC41MWE5LjQ3LDkuNDcsMCwwLDEtMy4yNi0xLjYyLDEuNjYsMS42NiwwLDAsMS0uNjctMS40LDEuNjQsMS42NCwwLDAsMSwuMzctMS4wNywxLjA4LDEuMDgsMCwwLDEsLjg2LS40NSwyLjQyLDIuNDIsMCwwLDEsMS4yLjQxLDksOSwwLDAsMCwyLjYyLDEuMzIsMTAuNzUsMTAuNzUsMCwwLDAsMywuNCw2LDYsMCwwLDAsMy4yNy0uNzRBMi40NCwyLjQ0LDAsMCwwLDMwLDMzLjE4YTEuODcsMS44NywwLDAsMC0xLTEuNzEsMTQuNzcsMTQuNzcsMCwwLDAtMy41NS0xLjE1QTIxLjM5LDIxLjM5LDAsMCwxLDIxLjI3LDI5YTUuODgsNS44OCwwLDAsMS0yLjQyLTEuODdBNC44Miw0LjgyLDAsMCwxLDE4LDI0LjI4LDUuNDgsNS40OCwwLDAsMSwxOSwyMWE2LjcsNi43LDAsMCwxLDIuOS0yLjIzQTEwLDEwLDAsMCwxLDI2LDE4YTEwLjIsMTAuMiwwLDAsMSw2LjgxLDIuMjIsMi4yOCwyLjI4LDAsMCwxLC41NC42MiwxLjgsMS44LDAsMCwxLC4xNi43OCwxLjU5LDEuNTksMCwwLDEtLjM3LDEuMDYsMS4wNiwxLjA2LDAsMCwxLS44Ni40NiwxLjYxLDEuNjEsMCwwLDEtLjU0LS4wOSw2LjEzLDYuMTMsMCwwLDEtLjY2LS4zMiw5LjQyLDkuNDIsMCwwLDAtMi4zMi0xLjNBNy45Miw3LjkyLDAsMCwwLDI2LDIxYTUuMzksNS4zOSwwLDAsMC0zLjE0LjgxQTIuNTYsMi41NiwwLDAsMCwyMS43MSwyNGEyLjA1LDIuMDUsMCwwLDAsMSwxLjg0QTExLjg5LDExLjg5LDAsMCwwLDI2LjE5LDI3YTIzLjI1LDIzLjI1LDAsMCwxLDQuMjIsMS4zLDYuMjQsNi4yNCwwLDAsMSwyLjQ4LDEuODJBNC40Myw0LjQzLDAsMCwxLDMzLjc3LDMzYTUuMzIsNS4zMiwwLDAsMS0xLDMuMiw2LjU5LDYuNTksMCwwLDEtMi44MywyLjE2LDEwLjc2LDEwLjc2LDAsMCwxLTQuMTkuNzdBMTQuNywxNC43LDAsMCwxLDIxLjQ5LDM4LjUxWm0xNy44My0xLjU5cS0yLjE5LTIuMTktMi4xOS02LjM5VjIwYTEuODQsMS44NCwwLDAsMSwuNS0xLjM2LDIsMiwwLDAsMSwyLjY4LDAsMS44OCwxLjg4LDAsMCwxLC41LDEuMzZWMzAuNzNhNS43Myw1LjczLDAsMCwwLDEuMjYsNCw0Ljc2LDQuNzYsMCwwLDAsMy42NywxLjM1LDQuNyw0LjcsMCwwLDAsMy42Ni0xLjM3LDUuNzYsNS43NiwwLDAsMCwxLjI1LTRWMjBhMS44OCwxLjg4LDAsMCwxLC41LTEuMzYsMiwyLDAsMCwxLDIuNjgsMCwxLjg0LDEuODQsMCwwLDEsLjUsMS4zNlYzMC41M2E4LjY4LDguNjgsMCwwLDEtMi4xOSw2LjM4cS0yLjE5LDIuMjEtNi40LDIuMlQzOS4zMiwzNi45MlpNNzQuMDksMzBhNS4yNiw1LjI2LDAsMCwxLDEsMy4yMSw1LDUsMCwwLDEtMS44OSw0LjEyQTguMTQsOC4xNCwwLDAsMSw2OCwzOC44NUg2MC40NmExLjgyLDEuODIsMCwwLDEtMS4zMi0uNDcsMS43MSwxLjcxLDAsMCwxLS40OS0xLjMxVjIwYTEuNzEsMS43MSwwLDAsMSwuNDktMS4zMSwxLjgyLDEuODIsMCwwLDEsMS4zMi0uNDdoNy4yNWE4LDgsMCwwLDEsNSwxLjQyLDQuNzIsNC43MiwwLDAsMSwxLjgyLDQsNC43OCw0Ljc4LDAsMCwxLS44NiwyLjg0LDUsNSwwLDAsMS0yLjM4LDEuNzVBNC45NCw0Ljk0LDAsMCwxLDc0LjA5LDMwWk02Mi4zMywyNi45aDQuNzZRNzEsMjYuOTMsNzEsMjRhMi40OCwyLjQ4LDAsMCwwLTEtMi4xNiw0LjkzLDQuOTMsMCwwLDAtMi45Mi0uN0g2Mi4zM1ptOC4yNCw4LjI3YTIuNzMsMi43MywwLDAsMCwuOTMtMi4yOCwyLjc5LDIuNzksMCwwLDAtLjk0LTIuMzEsNC44LDQuOCwwLDAsMC0zLS43Nkg2Mi4zM1YzNS45aDUuMjZhNC44NCw0Ljg0LDAsMCwwLDMtLjdabTEwLjkxLDMuMzFhOS4zOCw5LjM4LDAsMCwxLTMuMjYtMS42MiwxLjc3LDEuNzcsMCwwLDEtLjMtMi40NywxLjA4LDEuMDgsMCwwLDEsLjg2LS40NSwyLjM2LDIuMzYsMCwwLDEsMS4xOS40MUE5LjE1LDkuMTUsMCwwLDAsODIuNiwzNS43YTEwLjc1LDEwLjc1LDAsMCwwLDMsLjQsNiw2LDAsMCwwLDMuMjctLjc0QTIuNDQsMi40NCwwLDAsMCw5MCwzMy4xOGExLjg4LDEuODgsMCwwLDAtMS0xLjcxLDE0LjUxLDE0LjUxLDAsMCwwLTMuNTQtMS4xNUEyMS4zOSwyMS4zOSwwLDAsMSw4MS4yNiwyOWE1Ljg4LDUuODgsMCwwLDEtMi40Mi0xLjg3QTQuODIsNC44MiwwLDAsMSw3OCwyNC4yOCw1LjQ4LDUuNDgsMCwwLDEsNzksMjFhNi43LDYuNywwLDAsMSwyLjg1LTIuMjNBMTAsMTAsMCwwLDEsODYsMThhMTAuMjIsMTAuMjIsMCwwLDEsNi44MSwyLjIyLDIuMjgsMi4yOCwwLDAsMSwuNTQuNjIsMS44LDEuOCwwLDAsMSwuMTYuNzgsMS42NSwxLjY1LDAsMCwxLS4zNywxLjA2LDEuMDYsMS4wNiwwLDAsMS0uODYuNDYsMS41NywxLjU3LDAsMCwxLS41NC0uMDksNS4zMyw1LjMzLDAsMCwxLS42Ni0uMzIsOS42LDkuNiwwLDAsMC0yLjMyLTEuM0E3LjkyLDcuOTIsMCwwLDAsODYsMjFhNS4zOSw1LjM5LDAsMCwwLTMuMTQuODFBMi41NiwyLjU2LDAsMCwwLDgxLjcsMjRhMi4wNSwyLjA1LDAsMCwwLDEsMS44NEExMS45MiwxMS45MiwwLDAsMCw4Ni4xNywyN2EyMy4zOCwyMy4zOCwwLDAsMSw0LjIzLDEuMyw2LjMxLDYuMzEsMCwwLDEsMi41LDEuODYsNC40Myw0LjQzLDAsMCwxLC44NiwyLjgsNS4zMiw1LjMyLDAsMCwxLTEsMy4yLDYuNTksNi41OSwwLDAsMS0yLjgzLDIuMTYsMTAuOCwxMC44LDAsMCwxLTQuMTkuNzcsMTQuNywxNC43LDAsMCwxLTQuMjYtLjYyWm0xOS43NC0uNjhhOC42LDguNiwwLDAsMS0zLjQzLTMuNjgsMTIuNCwxMi40LDAsMCwxLTEuMi01LjYxQTEyLjI1LDEyLjI1LDAsMCwxLDk3Ljc5LDIzYTguNTgsOC41OCwwLDAsMSwzLjQzLTMuNjdBMTAuMjQsMTAuMjQsMCwwLDEsMTA2LjQzLDE4YTExLjMyLDExLjMyLDAsMCwxLDMuNjMuNTcsOS4zMSw5LjMxLDAsMCwxLDMsMS42NSwxLjU3LDEuNTcsMCwwLDEsLjUzLjYxLDEuODYsMS44NiwwLDAsMSwuMTUuNzksMS42OSwxLjY5LDAsMCwxLS4zNSwxLjA4LDEuMDgsMS4wOCwwLDAsMS0uODUuNDQsMi4xOSwyLjE5LDAsMCwxLTEuMi0uNDEsOC40NSw4LjQ1LDAsMCwwLTIuMzQtMS4zLDcuMjIsNy4yMiwwLDAsMC0yLjM5LS4zN0E1LjYyLDUuNjIsMCwwLDAsMTAyLDIzYTguNjMsOC42MywwLDAsMC0xLjU2LDUuNThBOC42OCw4LjY4LDAsMCwwLDEwMiwzNC4xNWE1LjYyLDUuNjIsMCwwLDAsNC42LDEuOSw2LjkzLDYuOTMsMCwwLDAsMi4zMi0uMzgsMTEuNTUsMTEuNTUsMCwwLDAsMi40MS0xLjI5LDQsNCwwLDAsMSwuNTktLjI5LDEuNTQsMS41NCwwLDAsMSwuNjEtLjEyLDEuMDgsMS4wOCwwLDAsMSwuODUuNDQsMS42OSwxLjY5LDAsMCwxLC4zNSwxLjA4LDEuODYsMS44NiwwLDAsMS0uMTUuNzcsMS41NSwxLjU1LDAsMCwxLS41My42Myw5LjMxLDkuMzEsMCwwLDEtMywxLjY1LDExLjMyLDExLjMyLDAsMCwxLTMuNjMuNTcsMTAuMzQsMTAuMzQsMCwwLDEtNS4yLTEuMjhabTMyLjY0LS4zMmExLjM5LDEuMzksMCwwLDEtLjU0LDEuMTFBMiwyLDAsMCwxLDEzMiwzOWExLjg2LDEuODYsMCwwLDEtLjg5LS4yMiwxLjkzLDEuOTMsMCwwLDEtLjcyLS42NWwtMy44OC01LjlBMy44OSwzLjg5LDAsMCwwLDEyNS4zMiwzMWEzLjQ0LDMuNDQsMCwwLDAtMS43MS0uMzhoLTIuODZ2Ni41NWExLjksMS45LDAsMCwxLS41LDEuMzgsMS43OSwxLjc5LDAsMCwxLTEuMzQuNTEsMS44MywxLjgzLDAsMCwxLTEuMzYtLjUxLDEuODYsMS44NiwwLDAsMS0uNTEtMS4zOFYyMGExLjc0LDEuNzQsMCwwLDEsLjQ4LTEuMzEsMS44MywxLjgzLDAsMCwxLDEuMzMtLjQ3aDcuM2E4LDgsMCwwLDEsNS4zMywxLjU2LDUuNiw1LjYsMCwwLDEsMS44Miw0LjUxLDUuNzIsNS43MiwwLDAsMS0xLjMsNCw2LjQ1LDYuNDUsMCwwLDEtMy44NCwyLDMuNjcsMy42NywwLDAsMSwxLjQ4LjczLDYuNDcsNi40NywwLDAsMSwxLjI2LDEuNDZsMi42Niw0LjA2YTEuOSwxLjksMCwwLDEsLjMsMVptLTUuMTEtMTAuNjJhMywzLDAsMCwwLDEtMi40NywzLDMsMCwwLDAtMS0yLjQ3LDUuMTQsNS4xNCwwLDAsMC0zLjEzLS43N2gtNC45djYuNTFoNC45YTQuOTMsNC45MywwLDAsMCwzLjEzLS43N1ptOS4xLDExLjYxYTEuODUsMS44NSwwLDAsMS0uNTItMS4zN1YyMEExLjc3LDEuNzcsMCwwLDEsMTM5LDE4LjEzaC4yMWExLjg3LDEuODcsMCwwLDEsMS4zOS41MUExLjg1LDEuODUsMCwwLDEsMTQxLjEsMjBWMzcuMTNhMS44OSwxLjg5LDAsMCwxLS41MSwxLjM3LDEuODQsMS44NCwwLDAsMS0xLjM5LjUyLDEuNzksMS43OSwwLDAsMS0xLjM1LS41MlpNMTYxLDMwYTUuMjUsNS4yNSwwLDAsMSwxLDMuMjEsNSw1LDAsMCwxLTEuODgsNC4xMiw4LjE0LDguMTQsMCwwLDEtNS4xOCwxLjQ5SDE0Ny40YTEuODQsMS44NCwwLDAsMS0xLjMzLS40NywxLjc0LDEuNzQsMCwwLDEtLjQ4LTEuMzFWMjBhMS43NCwxLjc0LDAsMCwxLC40OC0xLjMxLDEuODQsMS44NCwwLDAsMSwxLjMzLS40N2g3LjI0YTgsOCwwLDAsMSw1LDEuNDIsNC43MSw0LjcxLDAsMCwxLDEuODMsNCw0Ljc4LDQuNzgsMCwwLDEtLjg2LDIuODQsNSw1LDAsMCwxLTIuMzgsMS43NUE1LDUsMCwwLDEsMTYxLDMwWm0tMTEuNzYtMy4xSDE1NHEzLjg5LDAsMy44OS0yLjg5YTIuNTEsMi41MSwwLDAsMC0xLTIuMTYsNC45Myw0LjkzLDAsMCwwLTIuOTItLjdoLTQuNzZabTguMjQsOC4yN2EyLjczLDIuNzMsMCwwLDAsLjkzLTIuMjgsMi43NywyLjc3LDAsMCwwLS45NS0yLjMxLDQuNzUsNC43NSwwLDAsMC0zLS43NkgxNDkuMlYzNS45aDUuMjZhNC44Niw0Ljg2LDAsMCwwLDMtLjdaTTE2NiwzOC4zOGExLjc0LDEuNzQsMCwwLDEtLjQ4LTEuMzFWMjBhMS43NCwxLjc0LDAsMCwxLC40OC0xLjMxLDEuODMsMS44MywwLDAsMSwxLjMzLS40N2gxMC41NGEyLDIsMCwwLDEsMS4zMi4zOCwxLjMsMS4zLDAsMCwxLC40NiwxLjA4LDEuMzcsMS4zNywwLDAsMS0uNDYsMS4xMiwyLDIsMCwwLDEtMS4zMi40SDE2OS4ydjUuN2g4LjA5YTIsMiwwLDAsMSwxLjMxLjM4LDEuMzcsMS4zNywwLDAsMSwuNDcsMS4xMSwxLjMxLDEuMzEsMCwwLDEtLjQ3LDEuMDgsMiwyLDAsMCwxLTEuMzEuMzhIMTY5LjJ2Nmg4LjY3YTIsMiwwLDAsMSwxLjMyLjM5LDEuNDEsMS40MSwwLDAsMSwuNDYsMS4xMywxLjMsMS4zLDAsMCwxLS40NiwxLjA4LDIuMDUsMi4wNSwwLDAsMS0xLjMyLjM4SDE2Ny4zQTEuODMsMS44MywwLDAsMSwxNjYsMzguMzhaTTE4MS4xOCwwaC0xNjVBMTYuMjMsMTYuMjMsMCwwLDAsMCwxNi4yMVY1Ni4xQTE2LjIzLDE2LjIzLDAsMCwwLDE2LjIxLDcyLjMxaDY2Ljl2NTAuMjhsLTcuMDYtNy4wN0ExNS40NiwxNS40NiwwLDAsMCw1Mi4zNywxMzUuMnEuMzguNTcuODIsMS4xbDI4LjI2LDM0LjA4QTQ2LjMyLDQ2LjMyLDAsMCwwLDExNywxODdoMTcuNjZhNDEuMTQsNDEuMTQsMCwwLDAsNDAuOTMtNDAuOTNWMTExLjE2YTE1LjE1LDE1LjE1LDAsMCwwLTIyLjQ0LTEzLjMsMTUuMjQsMTUuMjQsMCwwLDAtMjAuNi02LjMzbC0uMTguMWExNS4xNCwxNS4xNCwwLDAsMC0xMy41LTguMSwxNS40MywxNS40MywwLDAsMC01LjQsMXYtMTJIMTgxYTE2LjIyLDE2LjIyLDAsMCwwLDE2LjIxLTE2LjJWMTYuMjFBMTUuOTIsMTUuOTIsMCwwLDAsMTgxLjU4LDBaTTEyOS40NSwxMTYuNzdhNSw1LDAsMCwwLDUtNXYtNi44NWE1LjQxLDUuNDEsMCwwLDEsMTAuODEsMFYxMThhNSw1LDAsMSwwLDEwLDB2LTYuODZhNS40LDUuNCwwLDAsMSwxMC44LDBoMHYzNC45MWEzMS4yMSwzMS4yMSwwLDAsMS0zMS4xNiwzMS4xNkgxMTcuMTlhMzYsMzYsMCwwLDEtMjcuODUtMTMuMDlMNjAuODgsMTI5Ljg2YTUuNDYsNS40NiwwLDAsMS0xLjI1LTQuMzYsNC43OCw0Ljc4LDAsMCwxLDIuNS0zLjc0LDUuNTIsNS41MiwwLDAsMSwzLjExLTEsNS42Nyw1LjY3LDAsMCwxLDQsMS42Nkw4MC42MiwxMzMuNmE3LjQxLDcuNDEsMCwwLDAsNy44OSwxLjY2LDcuMjksNy4yOSwwLDAsMCw0LjU3LTYuODVWNTUuMjdhNS41LDUuNSwwLDAsMSw1LjQxLTUuNCw0Ljg3LDQuODcsMCwwLDEsMy43NCwxLjY2LDUuNTcsNS41NywwLDAsMSwxLjY2LDMuNzR2NTAuMjhhNSw1LDAsMSwwLDEwLDBWOTguNjlhNS40MSw1LjQxLDAsMCwxLDEwLjgxLDB2MTMuMDlhNC42Myw0LjYzLDAsMCwwLDQuMjUsNVpNMTg3LDU2LjFhNiw2LDAsMCwxLTUuODIsNkgxMTMuNjVWNTUuMjdhMTUuMDksMTUuMDksMCwwLDAtNC41Ny0xMC44MSwxNC45MywxNC45MywwLDAsMC0xMC44LTQuMzZBMTUuMjYsMTUuMjYsMCwwLDAsODMuMTEsNTUuMjd2Ni44NkgxNi4yMWE1Ljg2LDUuODYsMCwwLDEtNS44Mi01LjlzMC0uMDcsMC0uMVYxNi4yMWE2LDYsMCwwLDEsNS44Mi02aDE2NUE1Ljg1LDUuODUsMCwwLDEsMTg3LDE2LjA5czAsLjA4LDAsLjEyVjU2LjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBzdHlsZT0iZmlsbDojMjVkODcyIi8+PC9zdmc+",
                    linkTo: "none",
                    isDisplayEarnedCredits: false,
                },
                order_number: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNSAyNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjUgMjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMjVEODcyO30KPC9zdHlsZT4KPHBhdGggaWQ9IkxheWVyXzIiIGNsYXNzPSJzdDAiIGQ9Ik0yMi4xLDE4LjRjMC0wLjMsMC4yLTAuNSwwLjUtMC41czAuNSwwLjIsMC41LDAuNWMwLDAuMy0wLjIsMC41LTAuNSwwLjVsMCwwCglDMjIuMywxOC45LDIyLjEsMTguNiwyMi4xLDE4LjR6IE0wLDIzLjV2LTEyQzAsMTEuMywwLjIsMTEsMC40LDExYzAsMCwwLDAsMC4xLDBoNi42VjUuNGMwLTAuMywwLjItMC41LDAuNS0wLjVoMy43CgljMC0yLjcsMi4yLTQuOSw0LjktNC45czQuOSwyLjIsNC45LDQuOWMwLDAsMCwwLDAsMGgzLjRjMC4zLDAsMC41LDAuMiwwLjUsMC41djE4LjJjMCwwLjgtMC43LDEuNS0xLjUsMS41SDEuNQoJQzAuNywyNSwwLDI0LjMsMCwyMy41eiBNMS41LDI0aDEwLjRjMC4zLDAsMC41LTAuMiwwLjUtMC41di0xLjdIMXYxLjhDMSwyMy44LDEuMiwyNCwxLjUsMjR6IE0yNCwyMy41di0xLjhIMTMuM3YxLjgKCWMwLDAuMiwwLDAuMy0wLjEsMC41aDEwLjNDMjMuOCwyNCwyNCwyMy44LDI0LDIzLjV6IE0xMi4zLDQuOWg3LjhjMC0yLjItMS44LTMuOS0zLjktMy45QzE0LjEsMSwxMi4zLDIuNywxMi4zLDQuOXogTTguMSwxMWg0LjcKCWMwLjMsMCwwLjUsMC4yLDAuNSwwLjVjMCwwLDAsMCwwLDB2OS4zSDI0VjUuOWgtMi45djIuMmgwLjVjMC4zLDAsMC41LDAuMiwwLjUsMC41YzAsMCwwLDAsMCwwYzAsMC4zLTAuMiwwLjUtMC41LDAuNWgtMgoJYy0wLjMsMC0wLjUtMC4yLTAuNS0wLjVjMC0wLjMsMC4yLTAuNSwwLjUtMC41YzAsMCwwLDAsMCwwaDAuNVY1LjloLTcuOHYyLjJoMC41YzAuMywwLDAuNSwwLjIsMC41LDAuNWMwLDAsMCwwLDAsMAoJYzAsMC4zLTAuMiwwLjUtMC41LDAuNWgtMS45Yy0wLjMsMC0wLjUtMC4yLTAuNS0wLjVjMC0wLjMsMC4yLTAuNSwwLjUtMC41YzAsMCwwLDAsMCwwaDAuNVY1LjlIOC4xVjExeiBNMSwxMnY4LjhoMTEuM1YxMkgxegoJIE0zLjcsMTQuOXYxYzAsMS42LDEuMywyLjksMi45LDIuOWMxLjYsMCwyLjktMS4zLDIuOS0yLjljMCwwLDAsMCwwLDB2LTFjMC4zLDAsMC41LTAuMiwwLjUtMC41cy0wLjItMC41LTAuNS0wLjVoLTEKCWMtMC4zLDAtMC41LDAuMi0wLjUsMC41czAuMiwwLjUsMC41LDAuNXYxYy0wLjIsMS4xLTEuMywxLjgtMi40LDEuNWMtMC43LTAuMi0xLjMtMC44LTEuNS0xLjV2LTFjMC4zLDAsMC41LTAuMiwwLjUtMC41CglTNSwxMy45LDQuNywxMy45aC0xYy0wLjMsMC0wLjUsMC4yLTAuNSwwLjVTMy40LDE0LjksMy43LDE0LjlMMy43LDE0LjlMMy43LDE0Ljl6IE0yMi42LDE2LjljMC4zLDAsMC41LTAuMiwwLjUtMC41YzAsMCwwLDAsMCwwdi00CgljMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My45QzIyLjEsMTYuNywyMi4zLDE2LjksMjIuNiwxNi45QzIyLjYsMTYuOSwyMi42LDE2LjksMjIuNiwxNi45TDIyLjYsMTYuOXoiLz4KPC9zdmc+Cg==",
                    linkTo: "/collections/all",
                    isDisplayEarnedCredits: false,
                },
                birthdate: {
                    icon:
                        "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNSAyNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyNWQ4NzI7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjQuOTMsMTIuODlhMiwyLDAsMCwwLTIuNDctMS40M2wtNC4yOCwxLjE1YTMzLjEsMzMuMSwwLDAsMC0yLjM2LTIuOTVMMjAuOSw0LjU4YTIsMiwwLDAsMCwuNTgtMS40MkEyLDIsMCwwLDAsMTgsMS43M2EuMzQuMzQsMCwwLDAsLjQ4LjQ4LDEuMzQsMS4zNCwwLDAsMSwuOTUtLjM5aDBhMS4zMywxLjMzLDAsMCwxLDEuMzQsMS4zNCwxLjMyLDEuMzIsMCwwLDEtLjM5Ljk0TDE1LjM0LDkuMThBMzIsMzIsMCwwLDAsMTIuNCw2LjgxbDEuMTQtNC4yN0EyLDIsMCwwLDAsMTIuMTEuMDcsMiwyLDAsMCwwLDkuNjUsMS40OWEuMzQuMzQsMCwwLDAsLjIzLjQyLjM0LjM0LDAsMCwwLC40Mi0uMjQsMS4zMywxLjMzLDAsMCwxLC42Mi0uODEsMS4zMiwxLjMyLDAsMCwxLDEuODMuNDksMS4zMywxLjMzLDAsMCwxLC4xNCwxTDExLjgsNi40MWMtMS4zMi0uODYtMi43LTEuNS0zLjYyLTEuMjdhMS4zNCwxLjM0LDAsMCwwLS45NCwxaDBMMCwyNC41NGEuMzMuMzMsMCwwLDAsLjA4LjM2LjMxLjMxLDAsMCwwLC4yNC4xbC4xMiwwTDE4LjksMTcuNzZoMGExLjMsMS4zLDAsMCwwLDEtLjk0Yy4yNC0uOS0uNDEtMi4yOS0xLjI3LTMuNjJsNC4wNi0xLjA5YTEuMzMsMS4zMywwLDAsMSwxLC4xNCwxLjMzLDEuMzMsMCwwLDEtLjMyLDIuNDUuMzQuMzQsMCwwLDAsLjA5LjY3bC4wOSwwYTIsMiwwLDAsMCwxLjQyLTIuNDZabS03LjYyLDQuNzYtMi42OSwxLjA2VjE2LjI3QTEwLjI3LDEwLjI3LDAsMCwwLDE3LjMxLDE3LjY1Wk0xMy45NCwxOWwtMi44MSwxLjFWMTMuM2EzLjgzLDMuODMsMCwwLDAsLjI4LjI5LDIyLjQ0LDIyLjQ0LDAsMCwwLDIuNTMsMi4yWm0tMy40OCwxLjM3LTIuODEsMS4xdi0xM2ExNi4zNCwxNi4zNCwwLDAsMCwyLjgxLDQuMVpNNywyMS43LDQuMTYsMjIuOHYtN2gwTDcsOC42NVpNMy40OSwxNy41NXY1LjUybC0yLjU2LDFabTE1LjcxLS45YS42NC42NCwwLDAsMS0uNTEuNDdjLS43NC4yMS0yLjI5LS4zNi00LjE4LTEuNzRsLS4wNiwwYTIzLjA5LDIzLjA5LDAsMCwxLTIuNTYtMi4yM2MtMy0zLTQuMzEtNS43NC00LTYuOGEuNzIuNzIsMCwwLDEsLjc0LS41NCw2Ljg1LDYuODUsMCwwLDEsMywxLjMzbC0uMzgsMS40MmEuMzQuMzQsMCwwLDAsLjY1LjE4bC4zMi0xLjJhMjYuNTIsMjYuNTIsMCwwLDEsMi42NiwyLjE1bC0uNjEuNjFjLS4zLjMuMTcuNzkuNDguNDhsLjYxLS42MWEyOS44NCwyOS44NCwwLDAsMSwyLjE0LDIuNjZsLTEuMTkuMzJhLjM0LjM0LDAsMCwwLC4xOC42NWwxLjQyLS4zOGMuODQsMS4yNywxLjQ5LDIuNTUsMS4zLDMuMjdaTTE1LjUxLDIuNDgsMTYsMWEuMzUuMzUsMCwwLDEsLjQzLS4yMi4zNC4zNCwwLDAsMSwuMjEuNDNsLS40OSwxLjUxYS4zMy4zMywwLDAsMS0uMzIuMjRsLS4xLDBBLjM0LjM0LDAsMCwxLDE1LjUxLDIuNDhabTUuMTMsNi4zYS4zNC4zNCwwLDAsMS0uMS40N2wtMS4zMy44N2EuMzQuMzQsMCwxLDEtLjM3LS41NmwxLjMzLS44N2EuMzQuMzQsMCwwLDEsLjQ3LjA5Wk0xNSw3YTEuMjIsMS4yMiwwLDAsMCwuODgtLjM3QTEuMjUsMS4yNSwwLDAsMCwxNSw0LjQ3YTEuMjksMS4yOSwwLDAsMC0uODkuMzZBMS4yNiwxLjI2LDAsMCwwLDE1LDdabS0uNDEtMS42NkEuNTguNTgsMCwwLDEsMTUsNS4xNGEuNi42LDAsMCwxLC40MS4xNy41OC41OCwwLDEsMS0uODIsMFptOC4yNCwxMS4xN2EuMzcuMzcsMCwwLDEtLjMuMTYuMzUuMzUsMCwwLDEtLjE3LDBMMjEsMTUuOGEuMzQuMzQsMCwwLDEtLjEyLS40Ni4zMy4zMywwLDAsMSwuNDYtLjEybDEuMzguNzlhLjM1LjM1LDAsMCwxLC4xMy40N1pNOC40LDIuNjVhLjM0LjM0LDAsMCwxLC4xMi0uNDZBLjM0LjM0LDAsMCwxLDksMi4zMWwuNzksMS4zOGEuMzMuMzMsMCwwLDEtLjI5LjVBLjM0LjM0LDAsMCwxLDkuMiw0Wk0yMiw4LjI4bDEuMzEuMzVoLjA5YS4zNC4zNCwwLDAsMCwuMzMtLjI1TDI0LDcuMDhhLjM2LjM2LDAsMCwwLDAtLjI1LjM0LjM0LDAsMCwwLS4yMS0uMTZsLTEuMzEtLjM1YS4zMy4zMywwLDAsMC0uNDEuMjRsLS4zNSwxLjMxYS4yOC4yOCwwLDAsMCwwLC4yNS4zMi4zMiwwLDAsMCwuMi4xNlptLjY4LTEuMjIuNjYuMTctLjE4LjY2LS42NS0uMThaIi8+PC9nPjwvZz48L3N2Zz4=",
                    linkTo: "none",
                    isDisplayEarnedCredits: true,
                },
                monthly_date: {
                    icon:
                        "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNSAyNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyNWQ4NzI7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PGcgaWQ9IkNhbGVuZGFyIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMi45MiwyLjVIMjAuODNWMS42N2ExLjY3LDEuNjcsMCwxLDAtMy4zMywwVjIuNUgxNC4xN1YxLjY3YTEuNjcsMS42NywwLDAsMC0zLjM0LDBWMi41SDcuNVYxLjY3YTEuNjcsMS42NywwLDEsMC0zLjMzLDBWMi41SDIuMDhBMi4wOCwyLjA4LDAsMCwwLDAsNC41OFYyMS4yNWEyLjA4LDIuMDgsMCwwLDAsMi4wOCwyLjA4SDEzLjc1YS40MS40MSwwLDAsMCwuNDItLjQxLjQyLjQyLDAsMCwwLS40Mi0uNDJIMi4wOEExLjI2LDEuMjYsMCwwLDEsLjgzLDIxLjI1VjguMzNIMjQuMTd2Ny4wOWEuNDEuNDEsMCwwLDAsLjQxLjQxLjQxLjQxLDAsMCwwLC40Mi0uNDFWNC41OEEyLjA4LDIuMDgsMCwwLDAsMjIuOTIsMi41Wm0tNC41OS0uODNhLjg1Ljg1LDAsMCwxLC44NC0uODQuODQuODQsMCwwLDEsLjgzLjg0djIuNWEuODMuODMsMCwwLDEtLjgzLjgzLjg0Ljg0LDAsMCwxLS44NC0uODNabS02LjY2LDBhLjgzLjgzLDAsMSwxLDEuNjYsMHYyLjVhLjgzLjgzLDAsMSwxLTEuNjYsMFpNNSwxLjY3QS44NC44NCwwLDAsMSw1LjgzLjgzYS44NS44NSwwLDAsMSwuODQuODR2Mi41QS44NC44NCwwLDAsMSw1LjgzLDUsLjgzLjgzLDAsMCwxLDUsNC4xN1pNMjQuMTcsNy41SC44M1Y0LjU4QTEuMjYsMS4yNiwwLDAsMSwyLjA4LDMuMzNINC4xN3YuODRhMS42NywxLjY3LDAsMCwwLDMuMzMsMFYzLjMzaDMuMzN2Ljg0YTEuNjcsMS42NywwLDAsMCwzLjM0LDBWMy4zM0gxNy41di44NGExLjY3LDEuNjcsMCwwLDAsMy4zMywwVjMuMzNoMi4wOWExLjI2LDEuMjYsMCwwLDEsMS4yNSwxLjI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExLjY3LDExLjI1YS44NC44NCwwLDAsMC0uODQtLjgzSDkuMTdhLjg0Ljg0LDAsMCwwLS44NC44M1YxMi41YS44NC44NCwwLDAsMCwuODQuODNoMS42NmEuODQuODQsMCwwLDAsLjg0LS44M1pNOS4xNywxMi41VjExLjI1aDEuNjZWMTIuNVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02LjY3LDExLjI1YS44NC44NCwwLDAsMC0uODQtLjgzSDQuMTdhLjg0Ljg0LDAsMCwwLS44NC44M1YxMi41YS44NC44NCwwLDAsMCwuODQuODNINS44M2EuODQuODQsMCwwLDAsLjg0LS44M1pNNC4xNywxMi41VjExLjI1SDUuODNWMTIuNVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMC44MywxMy4zM2EuODQuODQsMCwwLDAsLjg0LS44M1YxMS4yNWEuODQuODQsMCwwLDAtLjg0LS44M0gxOS4xN2EuODQuODQsMCwwLDAtLjg0LjgzVjEyLjVhLjg0Ljg0LDAsMCwwLC44NC44M1ptLTEuNjYtMi4wOGgxLjY2VjEyLjVIMTkuMTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTEuNjcsMTVhLjg0Ljg0LDAsMCwwLS44NC0uODNIOS4xN2EuODQuODQsMCwwLDAtLjg0LjgzdjEuMjVhLjg0Ljg0LDAsMCwwLC44NC44M2gxLjY2YS44NC44NCwwLDAsMCwuODQtLjgzWm0tMi41LDEuMjVWMTVoMS42NnYxLjI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYuNjcsMTVhLjg0Ljg0LDAsMCwwLS44NC0uODNINC4xN2EuODQuODQsMCwwLDAtLjg0LjgzdjEuMjVhLjg0Ljg0LDAsMCwwLC44NC44M0g1LjgzYS44NC44NCwwLDAsMCwuODQtLjgzWm0tMi41LDEuMjVWMTVINS44M3YxLjI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwLjgzLDE3LjkySDkuMTdhLjg0Ljg0LDAsMCwwLS44NC44M1YyMGEuODQuODQsMCwwLDAsLjg0LjgzaDEuNjZhLjg0Ljg0LDAsMCwwLC44NC0uODNWMTguNzVBLjg0Ljg0LDAsMCwwLDEwLjgzLDE3LjkyWk05LjE3LDIwVjE4Ljc1aDEuNjZWMjBaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTQuMTcsMTMuMzNoMS42NmEuODQuODQsMCwwLDAsLjg0LS44M1YxMS4yNWEuODQuODQsMCwwLDAtLjg0LS44M0gxNC4xN2EuODQuODQsMCwwLDAtLjg0LjgzVjEyLjVBLjg0Ljg0LDAsMCwwLDE0LjE3LDEzLjMzWm0wLTIuMDhoMS42NlYxMi41SDE0LjE3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEzLjMzLDE2LjI1YS44NC44NCwwLDAsMCwuODQuODMuNDEuNDEsMCwwLDAsLjQxLS40MS40MS40MSwwLDAsMC0uNDEtLjQyVjE1aDEuNjZhLjQyLjQyLDAsMCwwLC40Mi0uNDIuNDEuNDEsMCwwLDAtLjQyLS40MUgxNC4xN2EuODQuODQsMCwwLDAtLjg0LjgzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTUuODMsMTcuOTJINC4xN2EuODQuODQsMCwwLDAtLjg0LjgzVjIwYS44NC44NCwwLDAsMCwuODQuODNINS44M0EuODQuODQsMCwwLDAsNi42NywyMFYxOC43NUEuODQuODQsMCwwLDAsNS44MywxNy45MlpNNC4xNywyMFYxOC43NUg1LjgzVjIwWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE5LjU4LDE0LjE3QTUuNDIsNS40MiwwLDEsMCwyNSwxOS41OCw1LjQxLDUuNDEsMCwwLDAsMTkuNTgsMTQuMTdabTAsMTBhNC41OSw0LjU5LDAsMSwxLDQuNTktNC41OUE0LjU5LDQuNTksMCwwLDEsMTkuNTgsMjQuMTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjIsMTcuODRsLTMuMjQsMy4yNEwxNy4yOCwxOS42YS40Mi40MiwwLDAsMC0uNTksMCwuNDEuNDEsMCwwLDAsMCwuNThMMTguNDYsMjJBLjQxLjQxLDAsMCwwLDE5LDIybDMuNTQtMy41M2EuNDIuNDIsMCwwLDAtLjU5LS41OVoiLz48L2c+PC9nPjwvZz48L3N2Zz4=",
                    linkTo: "none",
                    isDisplayEarnedCredits: true,
                },
                product_review: {
                    icon:
                        "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMS4zMyAyMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyNWQ4NzI7fS5jbHMtMntvcGFjaXR5OjAuMzt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48ZyBpZD0iSWNvbnMiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIuOTEsMTcuNDVINy41N2EuMzYuMzYsMCwwLDEsLjIzLjA5TDEwLDE5LjcyYTEsMSwwLDAsMCwxLjM3LDBsMi4xNy0yLjE3YS4zNC4zNCwwLDAsMSwuMjMtLjFoNC42N2EyLjkxLDIuOTEsMCwwLDAsMi45MS0yLjkxVjkuMzdhMi45MSwyLjkxLDAsMCwwLTEuNDYtMi41MWwtLjMyLjU2YTIuMjUsMi4yNSwwLDAsMSwxLjEzLDEuOTV2NS4xN2EyLjI2LDIuMjYsMCwwLDEtMi4yNiwyLjI2SDEzLjc1YTEsMSwwLDAsMC0uNjguMjlMMTAuOSwxOS4yNmEuMzMuMzMsMCwwLDEtLjQ3LDBMOC4yNiwxNy4wOGExLDEsMCwwLDAtLjY4LS4yOEgyLjkxQTIuMjYsMi4yNiwwLDAsMSwuNjUsMTQuNTRWOS4zN0EyLjI1LDIuMjUsMCwwLDEsMS43OCw3LjQybC0uMzMtLjU2QTIuOTIsMi45MiwwLDAsMCwwLDkuMzd2NS4xN2EyLjkxLDIuOTEsMCwwLDAsMi45MSwyLjkxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMuNTUsMTQuODdINi4xNGExLDEsMCwwLDAsMS0xdi0uMzNoOC43MmEyLjkxLDIuOTEsMCwwLDAsMi45MS0yLjkxVjUuNDlhMS42MSwxLjYxLDAsMCwwLTEuNjEtMS42MUgxMy45YS4zMy4zMywwLDAsMS0uMzMtLjMzVjEuNjJhMS42MiwxLjYyLDAsMSwwLTMuMjMsMCwyLjIyLDIuMjIsMCwwLDEtLjY2LDEuNTksMi4yNiwyLjI2LDAsMCwxLTEuNi42N2gtMVYzLjU1YTEsMSwwLDAsMC0xLTFIMy41NWExLDEsMCwwLDAtMSwxVjEzLjlBMSwxLDAsMCwwLDMuNTUsMTQuODdabTIuOTEtMWEuMzIuMzIsMCwwLDEtLjMyLjMySDMuNTVhLjMzLjMzLDAsMCwxLS4zMi0uMzJWMTEuMzFhMS42MiwxLjYyLDAsMSwxLDMuMjMsMFpNOC4wOCw0LjUyYTIuOTIsMi45MiwwLDAsMCwyLjA2LS44NSwyLjg4LDIuODgsMCwwLDAsLjg1LTIsMSwxLDAsMSwxLDEuOTQsMFYzLjU1YTEsMSwwLDAsMCwxLDFoMy4yM2ExLDEsMCwwLDEsMSwxdjUuMTdhMi4yNywyLjI3LDAsMCwxLTIuMjcsMi4yN0g3LjExVjQuNTJabS00Ljg1LTFhLjMzLjMzLDAsMCwxLC4zMi0uMzJINi4xNGEuMzIuMzIsMCwwLDEsLjMyLjMyVjkuNzNhMi4yNiwyLjI2LDAsMCwwLTMuMjMsMFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00Ljg1LDEwLjM0YTEsMSwwLDEsMCwxLDFBMSwxLDAsMCwwLDQuODUsMTAuMzRabTAsMS4yOWEuMzIuMzIsMCwxLDEsMC0uNjQuMzIuMzIsMCwwLDEsMCwuNjRaIi8+PC9nPjwvZz48L2c+PC9zdmc+",
                    linkTo: "/collections/all",
                    isDisplayEarnedCredits: true,
                },
                product_tag: {
                    icon:
                        "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDcuNTYgMTg2Ljk5Ij48dGl0bGU+UHJvZHVjdCBUYWcgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTE0OS43Myw5MWEzLjQ4LDMuNDgsMCwwLDEsMS4xNS00Ljc4aDBhMjAsMjAsMCwwLDAsOS0xMi4yOSwzLjQ4LDMuNDgsMCwwLDEsNi43NywxLjY0QTI2LjgsMjYuOCwwLDAsMSwxNTQuNTIsOTIuMSwzLjQ4LDMuNDgsMCwwLDEsMTQ5LjczLDkxWm01Ny44NC00Ny4xMmE0LjY1LDQuNjUsMCwwLDEtNC42NSw0LjY0SDE4Mi42OUwxODMuNzgsODBoMHYuNjRhMjguNzcsMjguNzcsMCwwLDEtMiwxMCwyNy40LDI3LjQsMCwwLDEtNS4yMiw4Ljc1TDk4Ljg4LDE4Mi41OGExNCwxNCwwLDAsMS0xOS43LjY5TDQuNDIsMTEzLjU2YTE0LDE0LDAsMCwxLS42OS0xOS43MUw4MS4zNywxMC42QTMwLjQsMzAuNCwwLDAsMSwxMDAuMjMsMkwxNTgsMGEzMC40NSwzMC40NSwwLDAsMSw5LjE1LDEuNTEsMjAuNzgsMjAuNzgsMCwwLDEsNy43NSw0LjE4LDE2LjQ5LDE2LjQ5LDAsMCwxLDIuODIsMy41OCwyNy4xNCwyNy4xNCwwLDAsMSwyLDQuMjMsMzAuMSwzMC4xLDAsMCwxLDIsOS40NmwuNTcsMTYuMjJoMjAuNTZhNC42NSw0LjY1LDAsMCwxLDQuNzIsNC41OHYuMTJabS0zNC4xOSw0LjY1SDE0Mi41MWE0LjY1LDQuNjUsMCwwLDEsMC05LjNoMzAuNTVsLS41NS0xNS44OWExOS43LDE5LjcsMCwwLDAtLjg3LTQuODIsMTkuNDgsMTkuNDgsMCwwLDAtMS44OS00LjQxLDcuNjYsNy42NiwwLDAsMC0xLjE5LTEuNTcsMTIuNDYsMTIuNDYsMCwwLDAtNC4yNi0yLjE0LDIxLjQ4LDIxLjQ4LDAsMCwwLTYuMzEtMWwtNTcuNDQsMmEyMC4zOSwyMC4zOSwwLDAsMC0xMi4zOCw1LjUzaDBMMTAuNTMsMTAwLjE5YTQuNjcsNC42NywwLDAsMCwuMjMsNi41N2w3NC43Niw2OS43MWE0LjY2LDQuNjYsMCwwLDAsNi41Ni0uMjNMMTY5LjcyLDkzYTE4LjcyLDE4LjcyLDAsMCwwLDMuMzQtNS43NiwxOS45NCwxOS45NCwwLDAsMCwxLjQ0LTYuNjdaTTk4LjY2LDcwLjRhMi45LDIuOSwwLDAsMC00LjEuMTRoMEw1Ny42NSwxMTAuMTNhMi45MiwyLjkyLDAsMCwwLDQuMjUsNGgwTDk4LjgxLDc0LjVhMi45LDIuOSwwLDAsMC0uMTUtNC4xWm0xMi44OSwxNkw3NC42NCwxMjZhMi45MSwyLjkxLDAsMCwwLDQuMjQsNEwxMTUuOCw5MC4zNWEyLjkyLDIuOTIsMCwxLDAtNC4yNS00Wm0xOS4zNy0zMy41NUExMSwxMSwwLDAsMSwxNDMuNTIsMzVhMi45MSwyLjkxLDAsMCwwLDIuNjYtNS4xNywxNi44NCwxNi44NCwwLDEsMCw0LjU5LDI2LjQ2LDIuOTIsMi45MiwwLDEsMC00LjI1LTRoMGExMSwxMSwwLDAsMS0xNS41NC42bC0uMDYtLjA1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDEgMCkiIHN0eWxlPSJmaWxsOiMyNWQ4NzIiLz48L3N2Zz4=",
                    linkTo: "none",
                    isDisplayEarnedCredits: true,
                },
                referrer_friend: {
                    icon:
                        "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNSAyNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyNWQ4NzI7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjIuMiwxOC44YTIuNjgsMi42OCwwLDAsMCwxLjQxLTIuMzQsMi43NiwyLjc2LDAsMCwwLTUuNTIsMEEyLjY4LDIuNjgsMCwwLDAsMTkuNSwxOC44YTQuMTgsNC4xOCwwLDAsMC0yLjgsMy45MnYxLjg2YS40Mi40MiwwLDAsMCwuNDIuNDJoNy40NmEuNDIuNDIsMCwwLDAsLjQyLS40MlYyMi43MmE0LjE2LDQuMTYsMCwwLDAtMi44LTMuOTJabS0zLjI4LTIuMzRhMS45MywxLjkzLDAsMSwxLDEuOTMsMS44NkExLjksMS45LDAsMCwxLDE4LjkyLDE2LjQ2Wm01LjI1LDcuNzFIMTcuNTRWMjIuNzJhMy4zMiwzLjMyLDAsMCwxLDYuNjMsMFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMi4yMSw1YTIuNjcsMi42NywwLDAsMCwxLjQtMi4zNSwyLjc2LDIuNzYsMCwwLDAtNS41MiwwQTIuNjgsMi42OCwwLDAsMCwxOS41LDUsNC4xNCw0LjE0LDAsMCwwLDE2LjcsOXYxLjg3YS40MS40MSwwLDAsMCwuNDIuNDFoNy40NmEuNDEuNDEsMCwwLDAsLjQyLS40MVY5QTQuMTQsNC4xNCwwLDAsMCwyMi4yMSw1Wk0xOC45MiwyLjY5YTEuOTMsMS45MywwLDAsMSwzLjg2LDAsMS45MywxLjkzLDAsMCwxLTMuODYsMFptNS4yNSw3LjcxSDE3LjU0VjlhMy4zMiwzLjMyLDAsMCwxLDYuNjMsMFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMy40MywxMi4zMmwyLjM1LTJhLjQyLjQyLDAsMCwwLDAtLjU5LjQxLjQxLDAsMCwwLS41OSwwbC0yLjYsMi4yNEg5LjdhLjQxLjQxLDAsMCwwLS40Mi40MS40Mi40MiwwLDAsMCwuNDIuNDJoMi45NGwyLjYsMi4xNGEuNDcuNDcsMCwwLDAsLjU5LS4wNi40MS40MSwwLDAsMC0uMDYtLjU5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTcuMzEsMTEuMzJhMy4xNywzLjE3LDAsMCwwLC43OC0yLjA3LDMuMjIsMy4yMiwwLDAsMC02LjQ0LDAsMy4xNywzLjE3LDAsMCwwLC43OCwyLjA3LDQuNTcsNC41NywwLDAsMC0yLjQzLDR2Mi40NWEuNDIuNDIsMCwwLDAsLjQyLjQyaDguOWEuNDIuNDIsMCwwLDAsLjQyLS40MlYxNS4zM0E0LjU5LDQuNTksMCwwLDAsNy4zMSwxMS4zMlpNNC44Nyw2LjlBMi4zNSwyLjM1LDAsMSwxLDIuNDksOS4yNSwyLjM3LDIuMzcsMCwwLDEsNC44Nyw2LjlabS0uNDUsNS41LjQ1LDAsLjQ1LDB2MS45NWwtLjQ1LjU3LS40NS0uNTdabTQuNDksNUg3LjZ2LTJhLjQyLjQyLDAsMCwwLS44NCwwdjJIM3YtMmEuNDIuNDIsMCwwLDAtLjg0LDB2MkguODN2LTJhMy43NiwzLjc2LDAsMCwxLDIuMjktMy40MSwzLjUsMy41LDAsMCwwLC40Ny4yNXYyLjQ2bDEsMS4yMmEuNDEuNDEsMCwwLDAsLjY2LDBsMS0xLjIyVjEyLjE3YTMuNSwzLjUsMCwwLDAsLjQ3LS4yNSwzLjc2LDMuNzYsMCwwLDEsMi4yOSwzLjQxdjJaIi8+PC9nPjwvZz48L3N2Zz4=",
                    linkTo: "none",
                    isDisplayEarnedCredits: true,
                },
                referee_friend: {
                    icon:
                        "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNSAyNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyNWQ4NzI7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAuOTQsMTIuNWEuNzUuNzUsMCwwLDAtLjcxLS43OGgtMnYtLjM5YS43OS43OSwwLDAsMC0uNzktLjc4aC0yYS43NC43NCwwLDAsMC0uNy43OFYxMi41aDBhMS41NywxLjU3LDAsMCwwLDAsMy4xM2guMDhBMi41MSwyLjUxLDAsMCwwLDcuMiwxNy41OEg4LjQ1YTIuNTEsMi41MSwwLDAsMCwyLjQzLTEuOTVoLjA2YTEuNTcsMS41NywwLDAsMCwwLTMuMTNaTTQuNjksMTQuODRhLjc4Ljc4LDAsMCwxLDAtMS41NlptNS40Ny4yM0ExLjczLDEuNzMsMCwwLDEsOC40NSwxNi44SDcuMmExLjczLDEuNzMsMCwwLDEtMS43MS0xLjczVjExLjMzSDcuNDF2LjM5YS43OC43OCwwLDAsMCwuNzguNzhoMlptLjc4LS4yM1YxMy4yOGEuNzguNzgsMCwxLDEsMCwxLjU2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEyLjQ3LDguMjhhLjc4Ljc4LDAsMCwwLS44Mi0uMDdsLS41NC4yOS0uMjYtLjM4YTEuNTYsMS41NiwwLDAsMC0xLjMtLjdINy4wNWExLjU0LDEuNTQsMCwwLDAtMS4zOS44Ny44NS44NSwwLDAsMC0uMDkuMjJsLS4wOC0uMDhhLjc5Ljc5LDAsMCwwLS41NS0uMjNINC4zMkExLjIsMS4yLDAsMCwwLDMuMTMsOS4zOHYyLjM0YS4zOS4zOSwwLDAsMCwuMzkuMzkuNC40LDAsMCwwLC4zOS0uMzlWOS4zOEEuNDIuNDIsMCwwLDEsNC4zMiw5aC42MmwuNjcuNjdhLjM4LjM4LDAsMCwwLC42Ni0uMjcsMS41OSwxLjU5LDAsMCwxLC4wOS0uNzUuNzguNzgsMCwwLDEsLjY5LS40M2gyLjVhLjc3Ljc3LDAsMCwxLC42NS4zNWwuMjYuMzhhLjc5Ljc5LDAsMCwwLDEsLjI3TDEyLDguOTFsLS4yNiwxLjU3YS4xNS4xNSwwLDAsMCwwLC4wN3YxLjE3YS40LjQsMCwwLDAsLjM5LjM5LjM5LjM5LDAsMCwwLC4zOS0uMzlWMTAuNThMMTIuNzgsOWEuNzcuNzcsMCwwLDAtLjMxLS43NloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02LjY0LDEzLjI4YS40LjQsMCwxLDEtLjM5LjM5QS4zOS4zOSwwLDAsMSw2LjY0LDEzLjI4WiIvPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iOC45OCIgY3k9IjEzLjY3IiByPSIwLjM5Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOC4zMiwxNWwtLjEyLjExYS41Ni41NiwwLDAsMS0uNzgsMEw3LjMxLDE1YS4zOS4zOSwwLDAsMC0uNTYuNTVsLjEyLjEyYTEuMzgsMS4zOCwwLDAsMCwuOTQuMzksMS40LDEuNCwwLDAsMCwxLS4zOWwuMTEtLjEyQS4zOS4zOSwwLDAsMCw4LjMyLDE1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0LjA5LDEwLjI5YTMuMTIsMy4xMiwwLDAsMC01LjMxLDEuODJIMTUuNjFhNy44NSw3Ljg1LDAsMCwwLTItNC44M0wxNS4zLDUuNTlhMy4xMiwzLjEyLDAsMSwwLTEuMjEtMi40NkEzLjA1LDMuMDUsMCwwLDAsMTQuNzUsNUwxMy4wNiw2LjczYTcuODEsNy44MSwwLDEsMCwwLDExLjU0TDE0Ljc1LDIwYTMuMDYsMy4wNiwwLDAsMC0uNjYsMS45MiwzLjEzLDMuMTMsMCwxLDAsMS4yMS0yLjQ3bC0xLjY5LTEuNjlhNy44NSw3Ljg1LDAsMCwwLDItNC44M2gzLjE3YTMuMTEsMy4xMSwwLDAsMCwzLjEsMi43NCwzLjEzLDMuMTMsMCwwLDAsMi4yMS01LjM0Wk0xNy4yMS43OGEyLjM1LDIuMzUsMCwxLDEtMi4zNCwyLjM1QTIuMzUsMi4zNSwwLDAsMSwxNy4yMS43OFptMCwxOC43NWEyLjM1LDIuMzUsMCwxLDEtMi4zNCwyLjM1QTIuMzUsMi4zNSwwLDAsMSwxNy4yMSwxOS41M1ptLTkuNCwwYTcsNywwLDEsMSw3LTcsNyw3LDAsMCwxLTcsN1ptMTUuNzItNS4zN2EyLjM0LDIuMzQsMCwxLDEsMC0zLjMyQTIuMzUsMi4zNSwwLDAsMSwyMy41MywxNC4xNloiLz48L2c+PC9nPjwvc3ZnPg==",
                    linkTo: "none",
                    isDisplayEarnedCredits: false,
                },
                referrals_total_number: {
                    icon:
                        "PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNTYuNSAzNTYuNSI+PHRpdGxlPkVhcm4gY3JlZGl0IG9uIG51bWJlciBvZiByZWZlcnJhbHM8L3RpdGxlPjxwYXRoIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiIGQ9Ik0zMzMuNzgsMjAzLjI5YTE4LDE4LDAsMCwwLTIuOS4xNmwtMzAuNTktNDAuNzFhNjYuMTEsNjYuMTEsMCwwLDAsMjEuNTctNDVsMzcuMjYsMThhMjEuMjUsMjEuMjUsMCwwLDAtMS42NSw4LjMxLDIzLjc3LDIzLjc3LDAsMSwwLDIzLjc3LTIzLjc3aDBhMjIuNDYsMjIuNDYsMCwwLDAtMTUuMTQsNS41N2gtLjE2TDMyMS4wNywxMDQuM2E2NS4yOCw2NS4yOCwwLDAsMC0xMjkuNzQsNy4yMmwtMzUuMTQsMzBhNjQuOTEsNjQuOTEsMCwwLDAtMzYuMTYtMTVWOTUuNjdhMjMuNDMsMjMuNDMsMCwwLDAsMTcuODEtMjIuOSwyMy43NywyMy43NywwLDAsMC00Ny41MywwaDBhMjMuNDMsMjMuNDMsMCwwLDAsMTcuODEsMjIuOXYzMWE2NS4yNCw2NS4yNCwwLDEsMCw3MC4yOCw3Ni4xNmwyNi42NywyMC44NmEyNy40LDI3LjQsMCwwLDAtMS44LDkuMzNBMjMuNzcsMjMuNzcsMCwxLDAsMjI3LDIwOS4yNWgtLjA4YTIyLjkxLDIyLjkxLDAsMCwwLTE0LjQzLDVsLTMzLjM0LTI2YTY0LjgxLDY0LjgxLDAsMCwwLTE0Ljc1LTM4LjM2bDI4LTIzLjY5QTY0LjQzLDY0LjQzLDAsMCwwLDIyMi43MSwxNzBhMTIsMTIsMCwwLDAsMS4yNi44Niw1OSw1OSwwLDAsMCw3Ljc3LDMuNzcsMzAsMzAsMCwwLDAsNCwxLjQxLDM2LjQsMzYuNCwwLDAsMCw0LjE2LDEuMjYsMjQuNDQsMjQuNDQsMCwwLDAsNC4xNi44NiwzNS4zNSwzNS4zNSwwLDAsMCw0LjE2LjcxYzEuNDEuMTYsMi42Ny4zOSw0LjE2LjU1aDguNzljMS40MS0uMTYsMi42Ny0uMzEsNC4xNi0uNTVhNjUuNjUsNjUuNjUsMCwwLDAsMTYuMzktNC4zMSwzNS40NywzNS40NywwLDAsMCwzLjkyLTEuOCw0Mi4zLDQyLjMsMCwwLDAsMy43Ny0yLDQuMyw0LjMsMCwwLDAsMS40MS0xLjI2bC4xNi4zOSwyNi42NywzNS40NWE2NS40NCw2NS40NCwwLDAsMC00OS4xOCw2My4yMiw2Mi40OCw2Mi40OCwwLDAsMCwzLjYxLDIxLjF2LjE2bC0yMy43NywxNy44MUE2NS4zMiw2NS4zMiwwLDAsMCwxMjYuMzksMzM0SDk1LjMzYTIzLjQzLDIzLjQzLDAsMCwwLTIyLjktMTcuODFBMjMuNzcsMjMuNzcsMCwxLDAsOTUuMjUsMzQ2aDMxYTY0LjM5LDY0LjM5LDAsMCwwLDMwLjgzLDQ5LjQ5Yy4xNiwwLC4xNiwwLC4xNi4xNmEzMS45MSwzMS45MSwwLDAsMCwyLjksMS42NSwyMy42NCwyMy42NCwwLDAsMCw0LjQ3LDIuMmMxLjI2LjU1LDIuNTEsMS4xLDMuOTIsMS42NWExMiwxMiwwLDAsMCwzLjIyLDEuMSwyMi43MywyMi43MywwLDAsMCwzLjc3LDEuMSw1NS41Myw1NS41MywwLDAsMCwxNS42OSwyLDU2LjgxLDU2LjgxLDAsMCwwLDE1LjQ1LTJjLjg2LS4xNiwxLjY1LS4zOSwyLjUxLS41NWEzNy4yNywzNy4yNywwLDAsMCw2LjI4LTIuMiw3LjQ1LDcuNDUsMCwwLDAsMS42NS0uNzEsNDMuNDIsNDMuNDIsMCwwLDAsNi42Ny0zLjIyLDcuMTEsNy4xMSwwLDAsMCwxLjI2LS44Niw2NC4yNCw2NC4yNCwwLDAsMCwyOS44OC00MWwzOC43NSwxOC43NWExOS43NSwxOS43NSwwLDAsMC0xLjU3LDguMjRBMjMuNzcsMjMuNzcsMCwxLDAsMzE1LjgyLDM1OGgwYTIxLjgxLDIxLjgxLDAsMCwwLTE1LjE0LDUuOGwtNDQuMzItMjEuNDFhNi43Nyw2Ljc3LDAsMCwwLC4xNi0yLjIsNjMuMzgsNjMuMzgsMCwwLDAtMy42MS0yMS4yNmwyMy45Mi0xNy44MWE2NS4yOSw2NS4yOSwwLDEsMCwxMTMuNS02NC41NSw2NC41LDY0LjUsMCwwLDAtNTYuNTUtMzMuMjZabTU5LjM4LTU5LjIyYTExLjkyLDExLjkyLDAsMSwxLTQuMzEtOS4xOCwxMS44NSwxMS44NSwwLDAsMSw0LjMxLDkuMThaTTIxNy40NiwyMjUuOGExMS43OCwxMS43OCwwLDAsMSw5LjU3LTQuNzEsMTEuODksMTEuODksMCwwLDEsMCwyMy43NywxMS42OCwxMS42OCwwLDAsMS0xMS44NC0xMS42MVYyMzNhMTIsMTIsMCwwLDEsMi4yNy03LjIyWm0tMTE1LjIzLTE1M2ExMS44NCwxMS44NCwwLDEsMSwxMS44NCwxMS45MkExMi4wNiwxMi4wNiwwLDAsMSwxMDIuMjMsNzIuNzdabTY1LjM0LDExOC42OHYuMTZhNTMuNSw1My41LDAsMCwxLTEwNy0uMTZjMC0yOS4zNCwyNC4xNi01My4yNiw1My40OS01My4yNmE1Mi45NCw1Mi45NCwwLDAsMSwzNy40MSwxNS4zbC4zOS4zOWE1Mi4xMiw1Mi4xMiwwLDAsMSwxNS42OSwzNy41N1pNMjkyLjIxLDE1NmE1LjQ5LDUuNDksMCwwLDAtMy40NSwxLjFsLS4xNi4xNmE0Ni4xNSw0Ni4xNSwwLDAsMS04LjMxLDQuODZjLS44Ni41NS0xLjguODYtMi42NywxLjQxYTU0LjMzLDU0LjMzLDAsMCwxLTE1LjY5LDRjLTEuNzMuMjQtMy40NS4zMS01LjI2LjM5YTQxLjg2LDQxLjg2LDAsMCwxLTUuNDEtLjM5LDQ5LjcyLDQ5LjcyLDAsMCwxLTE1LjY5LTRjLS44Ni0uNTUtMS44LS44Ni0yLjktMS40MUE0Mi4xNSw0Mi4xNSwwLDAsMSwyMjEsMTU0LjE5YTUzLjM4LDUzLjM4LDAsMSwxLDcxLjE0LDBaTTcyLjUsMzUxLjg1QTExLjg0LDExLjg0LDAsMSwxLDg0LjQyLDM0MCwxMS45NCwxMS45NCwwLDAsMSw3Mi41LDM1MS44NVpNMjI3LDM3OS43N2E1Ni43OSw1Ni43OSwwLDAsMS0xMS44NCw3LjkyLDI1LDI1LDAsMCwxLTUuOCwyLjM1LDM4LjU2LDM4LjU2LDAsMCwxLTExLjg0LDIuOSwzNS42MSwzNS42MSwwLDAsMS0xMi4yNCwwLDM2LjQ0LDM2LjQ0LDAsMCwxLTExLjg0LTIuOSwxOC4zOSwxOC4zOSwwLDAsMS01LjczLTIuMzUsNTAuMDksNTAuMDksMCwwLDEtMTEuOTItNy45Miw1My41LDUzLjUsMCwxLDEsNzUuNTQtNC4yNGMtMS40MSwxLjQ5LTIuODIsMi45LTQuMzEsNC4yNFptNzkuMjItNS4xOGExMi4xMSwxMi4xMSwwLDAsMSw5LjczLTQuODYsMTEuODgsMTEuODgsMCwxLDEsLjA4LDIzLjc3aDBhMTIuMDcsMTIuMDcsMCwwLDEtMTEuOTItMTEuOTIsMTEuNjQsMTEuNjQsMCwwLDEsMi4xMi03Wm02My4yMi02Ni4xMmE0OC40Nyw0OC40NywwLDAsMS0xNC43NSw5LjMzLDUzLjE0LDUzLjE0LDAsMCwxLTIwLjg2LDQuMzFBNTQuMjcsNTQuMjcsMCwwLDEsMzEzLDMxNy44MWE1MS42Nyw1MS42NywwLDAsMS0xNC43NS05LjMzLDU2LjA4LDU2LjA4LDAsMCwxLTEzLjMzLTE4LjM1LDUzLjQ2LDUzLjQ2LDAsMSwxLDg0LjU2LDE4LjM1Wk0xOTEuMzQsMjk4LjM1YTIzLjc3LDIzLjc3LDAsMSwwLDIzLjc3LDIzLjc3aDBBMjMuOSwyMy45LDAsMCwwLDE5MS4zNCwyOTguMzVabTAsMzUuNjlhMTEuODQsMTEuODQsMCwxLDEsMTEuODQtMTEuODRBMTEuODMsMTEuODMsMCwwLDEsMTkxLjM0LDMzNFptMTcuMSwyMy43N0gxNzQuMDhjLTEwLjEyLDAtMTguMzUsNy45Mi0xOC4zNSwxNy44MXY0LjE2YTQ3LjE0LDQ3LjE0LDAsMCwwLDExLjkyLDcuOTJWMzc1LjYyYTYuMyw2LjMsMCwwLDEsNi41MS02aDM0LjM2YzMuNjEsMCw2LjY3LDIuNjcsNi42Nyw2djEyLjA4QTU2Ljc5LDU2Ljc5LDAsMCwwLDIyNywzNzkuNzd2LTQuMTZDMjI2Ljk1LDM2NS43MywyMTguNzEsMzU3LjgxLDIwOC40MywzNTcuODFabS0xMSwzNS4xNEEzNi40NCwzNi40NCwwLDAsMCwyMDkuMywzOTBhNTUuNjEsNTUuNjEsMCwwLDEtMTEuODQsMi45Wm0tMTIuMjQsMGEzNS42MSwzNS42MSwwLDAsMCwxMi4yNCwwLDc5LjY1LDc5LjY1LDAsMCwxLTEyLjI0LDBaTTE3My4yOSwzOTBhMzguNTYsMzguNTYsMCwwLDAsMTEuODQsMi45LDU2Ljc5LDU2Ljc5LDAsMCwxLTExLjg0LTIuOVptLTE2LDUuNTdhMi43OSwyLjc5LDAsMCwwLDEuMjYuODYsNS4yMyw1LjIzLDAsMCwwLDEuNjUuNzEsMjUuMjgsMjUuMjgsMCwwLDEtMi45LTEuNTdabTEzMy40Mi0yMjZhNC4zLDQuMywwLDAsMS0xLjQxLDEuMjZBNS40OCw1LjQ4LDAsMCwxLDI5MSwxNzBabS0yLTEyLjYzYTYsNiwwLDAsMSwzLjQ1LTEuMXYtMS44YTM3LjY0LDM3LjY0LDAsMCwxLTMuNDUsMi45Wk0yNTYuNiw3Mi43N2EyMy43NywyMy43NywwLDEsMCwyMy43NywyMy43N2gwQTIzLjgsMjMuOCwwLDAsMCwyNTYuNiw3Mi43N1ptMCwzNS42MWExMS44OCwxMS44OCwwLDEsMSwxMS45Mi0xMS45MiwxMS44NSwxMS44NSwwLDAsMS0xMS45MiwxMS45MlptLTUuMzMsNTkuMTRjMS44LjE2LDMuNjEuMzksNS40MS4zOWEzOS40OSwzOS40OSwwLDAsMCw1LjI2LS4zOUE2MC41Nyw2MC41NywwLDAsMSwyNTEuMjYsMTY3LjUyWm0yMi41MS0zNS4zSDIzOS40MmMtMTAuMjgsMC0xOC4zNSw3LjkyLTE4LjM1LDE3LjgxdjQuMTZhNDIuMTUsNDIuMTUsMCwwLDAsMTEuNjksNy45MlYxNTBjMC0zLjIyLDMuMDYtNiw2LjY3LTZoMzQuNDNhNi4yNCw2LjI0LDAsMCwxLDYuNTEsNnYxMi4wOGE0OSw0OSwwLDAsMCw4LjMxLTQuODZsLjE2LS4xNmE2LDYsMCwwLDEsMy40NS0xLjF2LTZhMTguMywxOC4zLDAsMCwwLTE4LjUxLTE3LjgxWm0tMTY0LjY0LDc4LjJWMjA1YTIzLjQ0LDIzLjQ0LDAsMCwxLTkuNzMtMi40M2wxLjczLTYuNjdhMjEuMTQsMjEuMTQsMCwwLDAsOS40OSwyLjUxYzMuMjksMCw1LjQ5LTEuMjYsNS40OS0zLjUzcy0xLjgtMy41My02LTQuOTRjLTYuMTItMi0xMC4yOC00Ljk0LTEwLjI4LTEwLjQzLDAtNSwzLjUzLTguOTQsOS42NS0xMC4ydi01LjQxSDExNXY1YTIxLjQ2LDIxLjQ2LDAsMCwxLDguMzEsMS44OGwtMS42NSw2LjQzYTE5LDE5LDAsMCwwLTguMjQtMmMtMy42OSwwLTQuOTQsMS41Ny00Ljk0LDMuMjIsMCwxLjg4LDIsMy4wNiw2LjksNC45NCw2LjgyLDIuNDMsOS41Nyw1LjU3LDkuNTcsMTAuNzVzLTMuNjEsOS40MS0xMC4yLDEwLjU5djUuOGgtNS42NVptMjE5LjcsODFWMjg2YTIzLjQ0LDIzLjQ0LDAsMCwxLTkuNzMtMi40M2wxLjczLTYuNjdhMjEuMTQsMjEuMTQsMCwwLDAsOS40OSwyLjUxYzMuMjIsMCw1LjQ5LTEuMjYsNS40OS0zLjUzcy0xLjgtMy41My02LTVjLTYuMTItMi0xMC4yOC00Ljk0LTEwLjI4LTEwLjQzLDAtNSwzLjUzLTksOS42NS0xMC4ydi01LjQxaDUuNTd2NWEyMS40NiwyMS40NiwwLDAsMSw4LjMxLDEuODhsLTEuNjUsNi40M2ExOSwxOSwwLDAsMC04LjI0LTJjLTMuNjksMC00Ljk0LDEuNTctNC45NCwzLjIyLDAsMS44OCwyLDMuMDYsNi45LDQuOTQsNi44MiwyLjQzLDkuNTcsNS41Nyw5LjU3LDEwLjY3cy0zLjYxLDkuNDEtMTAuMiwxMC41OXY1LjhoLTUuNjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDguNSAtNDkpIiBzdHlsZT0iZmlsbDojMjVkODcyIi8+PC9zdmc+",
                    linkTo: "none",
                    isDisplayEarnedCredits: true,
                },
                referrals_order_number: {
                    icon:
                        "PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTcgMTg3LjI0Ij48dGl0bGU+Q3JlZGl0IG9uIHJlZmVycmFsX3MgWCBvcmRlcjwvdGl0bGU+PHBhdGggaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiIgZD0iTTQyOC45LDg1LjFhNy41NSw3LjU1LDAsMSwxLTEyLjEtNlY2MC45YTEzLjYsMTMuNiwwLDAsMC0yNy4yLDBWNzlhNy40Myw3LjQzLDAsMCwxLDEuNiwxMC41LDcuNjcsNy42NywwLDAsMS02LjEsMy4xLDcuNTEsNy41MSwwLDAsMS03LjctNy40LDcuMiw3LjIsMCwwLDEsMy4xLTYuMlY2MC45YTIyLjcxLDIyLjcxLDAsMCwxLDQ1LjQsMFY3OUE3Ljg3LDcuODcsMCwwLDEsNDI4LjksODUuMVptMTEuNC0yMi43SDQyOC45djloMy44TDQ0Ni4yLDE0N0gzNjAuMWwxMy41LTc1LjVoMy44di05SDM2NkwzNDkuMywxNTZINDU3LjFabS00Ny43LDB2OWgyMS4ydi05Wm0tMTk1LjMsNTAtMjguOCwyOC44LTguNy04LjYsMTQuNC0xNC4zSDE2My42QTI2LjU5LDI2LjU5LDAsMCwwLDEzNywxNDQuOXYxMS42SDEyNC43VjE0NC44YTM4Ljg0LDM4Ljg0LDAsMCwxLDM4LjktMzguN2gxMEwxNTkuOSw5Mi40bDguNy04LjZaTTE2NC4xLDQ1LjJhNDUuMyw0NS4zLDAsMCwxLTQ1LjMsNDUuMiw2Ni41Niw2Ni41NiwwLDAsMC00NC43LDE3LjNBNDUuNzgsNDUuNzgsMCwwLDAsNjMuNCwxMDEsNzksNzksMCwwLDEsOTMuMSw4Mi40YTQ1LjIsNDUuMiwwLDEsMSw3MS0zNy4yWm0tMTIuMiwwYTMzLjEsMzMuMSwwLDEsMC0zMy4yLDMzaC4xQTMzLjE4LDMzLjE4LDAsMCwwLDE1MS45LDQ1LjJabTIwMC4yLDBhNDUuMyw0NS4zLDAsMCwxLTQ1LjMsNDUuMiw2Ni4xNyw2Ni4xNywwLDAsMC02Ni4yLDY2SDIyOC40YTc4LjI5LDc4LjI5LDAsMCwxLDUyLjgtNzMuOSw0NS4yOCw0NS4yOCwwLDEsMSw3MC45LTM3LjNabS0xMi4yLDBhMzMuMSwzMy4xLDAsMSwwLTMzLjIsMzNoLjFBMzMuMTgsMzMuMTgsMCwwLDAsMzM5LjksNDUuMlpNOTAuMSwxNDIuMWE0NSw0NSwwLDEsMS0xNi0zNC4zQTQ0LjQ3LDQ0LjQ3LDAsMCwxLDkwLjEsMTQyLjFabS0zMC44LDUuM2E5LjQ1LDkuNDUsMCwwLDAtNC40LTguNCwyMi4yOSwyMi4yOSwwLDAsMC01LjYtMi43LDIxLjI0LDIxLjI0LDAsMCwxLTUuNy0yLjcsMywzLDAsMCwxLTEuNS0yLjRjMC0xLjQuOS0yLjgsMy41LTMuMmE5LjcsOS43LDAsMCwxLDEuNy0uMSwxOS43MywxOS43MywwLDAsMSw4LjYsMmwxLjctNi43YTIxLjcxLDIxLjcxLDAsMCwwLTguNy0yVjExNkg0My4xdjUuN0MzNi43LDEyMi45LDMzLDEyNywzMywxMzIuM2MwLDUuMSwzLjQsOCw4LjUsMTAuMS43LjMsMS40LjUsMi4yLjgsNC40LDEuNSw2LjMsMi45LDYuMyw1LjJzLTIuMywzLjctNS43LDMuN2ExNy4yMiwxNy4yMiwwLDAsMS0zLjktLjQsMjEuNjUsMjEuNjUsMCwwLDEtNi0yLjJsLTEuOCw3YTIzLjY1LDIzLjY1LDAsMCwwLDEwLjEsMi42djUuNmg1Ljl2LTYuMWM3LTEuNCwxMC43LTUuOSwxMC43LTExLjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4xIDAuMDQpIiBzdHlsZT0iZmlsbDojMjVkODcyIi8+PC9zdmc+",
                    linkTo: "none",
                    isDisplayEarnedCredits: true,
                },
                referrals_total_spent: {
                    icon:
                        "PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODUuMzQgMTg3LjMiPjx0aXRsZT5FYXJuIGNyZWRpdCBvbiByZWZlcnJhbF9zIHNwZW50PC90aXRsZT48cGF0aCBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiBkPSJNMTY4LjQsODMuN2wtOC43LDguNkwxNzMuNCwxMDZoLTEwYTM4LjkyLDM4LjkyLDAsMCwwLTM4LjksMzguOHYxMS42aDEyLjNWMTQ0LjhhMjYuNzIsMjYuNzIsMCwwLDEsMjYuNi0yNi42SDE3NGwtMTQuNCwxNC4zLDguNyw4LjYsMjguOC0yOC44Wk0xMTguOCwwQTQ1LjEyLDQ1LjEyLDAsMCwwLDkzLjEsODIuNCw3OS40Nyw3OS40NywwLDAsMCw2My40LDEwMWE0NS4wNyw0NS4wNywwLDEsMCwxMC43LDYuNyw2NS45LDY1LjksMCwwLDEsNDQuNy0xNy4zLDQ1LjIsNDUuMiwwLDAsMCwwLTkwLjRabS03MCwxNTguNHY2LjFINDIuOXYtNS43YTIzLjY1LDIzLjY1LDAsMCwxLTEwLjEtMi42bDEuOC03YTIxLjY1LDIxLjY1LDAsMCwwLDYsMi4yLDE3LjIyLDE3LjIyLDAsMCwwLDMuOS40YzMuNCwwLDUuNy0xLjMsNS43LTMuN3MtMS45LTMuNy02LjMtNS4yYy0uOC0uMy0xLjUtLjUtMi4yLS44LTUuMi0yLjEtOC41LTUtOC41LTEwLjFzMy43LTkuMywxMC4xLTEwLjZ2LTUuNkg0OVYxMjFhMjIuMSwyMi4xLDAsMCwxLDguNywyTDU2LDEyOS43YTE5LjczLDE5LjczLDAsMCwwLTguNi0yLDkuNyw5LjcsMCwwLDAtMS43LjFjLTIuNi40LTMuNSwxLjgtMy41LDMuMmEzLDMsMCwwLDAsMS41LDIuNCwyOS43NCwyOS43NCwwLDAsMCw1LjcsMi43LDI4LjksMjguOSwwLDAsMSw1LjYsMi43LDkuNDUsOS40NSwwLDAsMSw0LjQsOC40Yy0uMSw1LjUtMy44LDEwLTEwLjYsMTEuMlptNzAtODAuMmEzMywzMywwLDEsMSwzMy4xLTMzLDMzLDMzLDAsMCwxLTMzLjEsMzNabTIzNy43LDUuNS04LjcsOC42TDM2MS41LDEwNmgtMTBhMzguOTIsMzguOTIsMCwwLDAtMzguOSwzOC44djExLjZoMTIuMlYxNDQuOGEyNi43MiwyNi43MiwwLDAsMSwyNi42LTI2LjZIMzYybC0xNC40LDE0LjMsOC43LDguNiwyOC45LTI4LjhaTTMwNi44LDBhNDUuMTksNDUuMTksMCwwLDAtMjUuNiw4Mi41LDc4LjUyLDc4LjUyLDAsMCwwLTUyLjgsNzMuOWgxMi4yYTY2LjE3LDY2LjE3LDAsMCwxLDY2LjItNjYsNDUuMiw0NS4yLDAsMSwwLDAtOTAuNFptMCw3OC4yYTMzLDMzLDAsMSwxLDMzLjEtMzNBMzMsMzMsMCwwLDEsMzA2LjgsNzguMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMTQgMCkiIHN0eWxlPSJmaWxsOiMyNWQ4NzIiLz48L3N2Zz4=",
                    linkTo: "none",
                    isDisplayEarnedCredits: true,
                },
                add_product_to_wishlist: {
                    icon:
                        "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNS45OSAyNC41Ij48dGl0bGU+d2lzaGxpc3RfaWNvbjwvdGl0bGU+PHBhdGggZD0iTTE3LjIyLjI1aDBhMy4yOCwzLjI4LDAsMCwwLTIsLjY1QTMuMjUsMy4yNSwwLDAsMCwxMy4zLjI1aDBBMy4yOCwzLjI4LDAsMCwwLDExLDUuODVsMS4yNiwxLjI2YTEuNiwxLjYsMCwwLDAtLjE5Ljc1VjExLjNhMS42MSwxLjYxLDAsMCwwLTIuMTUuMzMsMS42MSwxLjYxLDAsMCwwLTIuODMuNjYsMS42MSwxLjYxLDAsMCwwLS45NC0uM2gwYTEuNjUsMS42NSwwLDAsMC0xLjYxLDEuNjR2NC41MWE0LjE5LDQuMTksMCwwLDAsLjU1LDIuMDhMNi40MiwyMi42djEuNzlhLjM2LjM2LDAsMCwwLC43MiwwVjIyLjVhLjM2LjM2LDAsMCwwLDAtLjE4TDUuNjgsMTkuODZhMy40OCwzLjQ4LDAsMCwxLS40Ni0xLjcyVjEzLjYzYS45Mi45MiwwLDAsMSwuOS0uOTJoMGEuOS45LDAsMCwxLC45Ljg0djEuMzlhLjM2LjM2LDAsMSwwLC43MiwwVjEyLjY0YS45LjksMCwxLDEsMS43OSwwaDB2Mi4yN2EuMzYuMzYsMCwxLDAsLjcyLDBWMTIuNjdoMGEuOS45LDAsMCwxLDEuNzksMHYyLjNhLjM2LjM2LDAsMCwwLC43MiwwVjcuODZhLjkuOSwwLDAsMSwxLjc5LDB2OWEuMzYuMzYsMCwxLDAsLjcyLDBWMTQuNGExLjA4LDEuMDgsMCwwLDEsMS4xNSwxLjA3VjE4YTMuNDYsMy40NiwwLDAsMS0uNTQsMS44NmwtMS41MywyLjQxYS4zNi4zNiwwLDAsMC0uMDYuMTl2MS44OWEuMzYuMzYsMCwxLDAsLjcyLDBWMjIuNjFsMS40Ny0yLjMyQTQuMTgsNC4xOCwwLDAsMCwxNy4xNCwxOFYxNS40OGExLjgsMS44LDAsMCwwLTEuODctMS43OVY3Ljg2YTEuNjEsMS42MSwwLDAsMC0yLjU4LTEuM0wxMS40OCw1LjM0YTIuNTMsMi41MywwLDAsMS0uNzUtMS44QTIuNTYsMi41NiwwLDAsMSwxNSwxLjYzYS4zNi4zNiwwLDAsMCwuNDgsMEEyLjU2LDIuNTYsMCwwLDEsMTksNS4zNEwxNi4xMiw4LjI1YS4zNi4zNiwwLDEsMCwuNTEuNTFsMi45MS0yLjkxQTMuMjgsMy4yOCwwLDAsMCwxNy4yMi4yNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00LjUxIC0wLjI1KSIgc3R5bGU9ImZpbGw6IzU2YjQ2YiIvPjwvc3ZnPg==",
                    linkTo: "/collections/all",
                    isDisplayEarnedCredits: true,
                },
                admin_rule: {
                    icon:
                        "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzcuMTMgMTg2Ljk4Ij48dGl0bGU+YW5ub3VuY2VtZW50ICBWMjwvdGl0bGU+PHBhdGggZD0iTTExNS4yNiw1OS40N0M5NywzMi42Miw3Mi42NCwxOC4zNSw1OS44NywyNy4xYTE0LjY1LDE0LjY1LDAsMCwwLTMuNjEsMy42M2MwLC4xLTI5LjU1LDU5LjktMjkuNTUsNTkuOUwxMC4yMiwxMDEuODFBMjMuMywyMy4zLDAsMCwwLDQsMTM0LjE3SDRsLjc0LDEuMDlBMjMuMzUsMjMuMzUsMCwwLDAsMzcsMTQxLjQ2bDI2LjUsMzljMy45LDQuODEsMTEuMzgsOS41OSwyMC42Miw0QTE0LDE0LDAsMCwwLDkwLjMxLDE3NSwxNC43OSwxNC43OSwwLDAsMCw4OCwxNjMuODNMNjQuNjgsMTI5LjRzNTUuMTgtNC40LDU1LjM4LTQuNDhhMTMuMiwxMy4yLDAsMCwwLDQuODEtMi4wNmM2LjU2LTQuNDUsOC45MS0xMy44LDYuNjQtMjYuMzFDMTI5LjUxLDg1LDEyMy42Nyw3MiwxMTUuMjYsNTkuNDdaTTEwLjc3LDEzMS4yMSwxMCwxMzAuMTJhMTYuMDcsMTYuMDcsMCwwLDEsNC4yNi0yMi4zMmgwbDE0LjI1LTkuNywxOC44MSwyNy43LTE0LjI1LDkuNjlhMTYuMDksMTYuMDksMCwwLDEtMjIuMzUtNC4yNlpNODIuMDgsMTY3LjlhNy42Myw3LjYzLDAsMCwxLTEyLjY2LDguNTFMNDMsMTM3LjVsMTAuNjItNy4yMiwyLjgxLS4yMlpNNTQuMiwxMjMsMzMuNyw5Mi43OSw1My4yNSw1Mi45M2MxLjksMTEuMiw3LjQ1LDI0LjUsMTYuMzEsMzcuNTVzMTkuMTgsMjMuMTIsMjguODcsMjlaTTExNSwxMTguMmMtOS44NS0uNjQtMjUuOS0xMS43Ni0zOS40OS0zMS43OHMtMTgtMzktMTUtNDguNGE4Ljc5LDguNzksMCwwLDEsOC4yNS02LjE4YzkuNzgsMCwyNi40MiwxMS4xNyw0MC40LDMxLjc3LDcuODcsMTEuNTksMTMuNjEsMjMuNzIsMTUuMTcsMzQuMzIsMy4xMSwyMC4yNS05LjM2LDIwLjI1LTkuMzYsMjAuMjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAxIDApIiBzdHlsZT0iZmlsbDojMjVkODcyIi8+PHBhdGggZD0iTTg5LjQ4LDYwLjIzYTE5LjM3LDE5LjM3LDAsMCwwLTE0LjY4LDMsMy42NCwzLjY0LDAsMCwwLDQuMTMsNmgwQTEyLjM3LDEyLjM3LDAsMCwxLDkyLjgyLDg5LjdhMy42MSwzLjYxLDAsMCwwLDIuMDcsNi41OEEzLjU0LDMuNTQsMCwwLDAsOTcsOTUuNjZhMTkuNTgsMTkuNTgsMCwwLDAtNy4zMi0zNS40M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDEgMCkiIHN0eWxlPSJmaWxsOiMyNWQ4NzIiLz48cGF0aCBkPSJNMTE5LjcxLDM0LjM3aC4zNWEzLjYsMy42LDAsMCwwLDMuNTktMy4yM2wyLjc5LTI3LjA2YTMuNjEsMy42MSwwLDAsMC03LjE2LS45NGgwdi4yTDExNi41LDMwLjQyYTMuNTksMy41OSwwLDAsMCwzLjE5LDMuOTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAxIDApIiBzdHlsZT0iZmlsbDojMjVkODcyIi8+PHBhdGggZD0iTTE2Ni4zNiwyOC44MWEzLjYxLDMuNjEsMCwwLDAtNS0xTDEzNi4yMSw0NC4yN2EzLjYxLDMuNjEsMCwwLDAtMSw1LDMuODEsMy44MSwwLDAsMCw1LjE0LDFsMjUuMTQtMTYuNDlhMy42MSwzLjYxLDAsMCwwLC44OS01WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMSAwKSIgc3R5bGU9ImZpbGw6IzI1ZDg3MiIvPjxwYXRoIGQ9Ik0xNzQuMDUsNzIuODUsMTQ0LjgxLDY3LjZhMy42MSwzLjYxLDAsMSwwLTEuMjgsNy4xMWgwTDE3Mi43NSw4MGguNjRhMy42MSwzLjYxLDAsMCwwLC42NC03LjE4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMSAwKSIgc3R5bGU9ImZpbGw6IzI1ZDg3MiIvPjwvc3ZnPg==",
                    linkTo: "none",
                    isDisplayEarnedCredits: false,
                },
            },
            data: null,
        };
        settings = Flits.extend(Flits.howToEarnCredit.settings, settings, options);
        Flits.dispatchEvent("Flits:howToEarnCredit:Loaded", { settings: settings });
        var hash = window.location.hash;
        let allRules = Flits.howToEarnCredit.settings.data.rules.all_rules_data;
        let earnedRuleCount = 0;
        let howToEarnRuleLength = 0;
        let referFriendRuleLength = 0;
        let earnRuleLength = 0;
        let howToSpentRuleLength = 0;
        let adminRuleLength = 0;
        let notApplicableEarnRuleCount = 0;
        let rulesConfig = Flits.howToEarnCredit.settings.rulesConfig;
        let descriptionCloneTag;
        let creditLogAppended = false;
        let rulesCardAppended = false;
        let totalCreditAppended = true;
        Flits(".flits-how-to-earn-chart").donutChart({ seriesData: [], title: Flits.formatMoney(Math.abs(00), Flits.money_format), textStyle: { fontWeight: "bold", color: Flits.AccountPage.settings.earnChartColor } });
        Flits(".flits-how-to-spend-save-chart").donutChart({ seriesData: [], title: Flits.formatMoney(Math.abs(00), Flits.money_format), textStyle: { fontWeight: "bold", color: Flits.AccountPage.settings.spendChartColor } });
        Flits(".flits-how-to-spend-current-chart").donutChart({ seriesData: [], title: Flits.formatMoney(Math.abs(00), Flits.money_format), textStyle: { fontWeight: "bold", color: Flits.AccountPage.settings.currentChartColor } });
        function setRules(data) {
            let rules = data;
            let title;
            let description;
            let multilangTitle;
            let multilangDescription;
            let unlockText;
            Flits.each(rules, function (ruleIndex, ruleItem) {
                let ruleBoxClone = Flits(".flits-rule-card-template").clone();
                ruleBoxClone.removeClass("flits-rule-card-template");
                let credits;
                let notApplicableText = Flits.t("Flits.locals.how_to_earn_credit_page.rule_not_applicable", "*Not Applicable");
                if (ruleItem.is_default_rule) {
                    credits = ruleItem.credits;
                    if (ruleItem.is_fixed || ruleItem.module_on == "monthly_date") {
                        credits = Flits.formatMoney(Math.abs(credits), Flits.money_format);
                        unlockText = Flits.t("Flits.locals.how_to_earn_credit_page.unlock_fixed_credit", "Unlock {{ credit }}");
                    } else {
                        credits /= 100;
                        credits += "%";
                        unlockText = Flits.t("Flits.locals.how_to_earn_credit_page.unlock_some_percentage_credit", "Unlock {{ credit }} cashback");
                    }
                    unlockText = unlockText.replace("{{ credit }}", credits);
                    ruleBoxClone.find(".flits-unlock-badge").html(unlockText);
                    if (ruleItem.is_earned) {
                        ruleBoxClone.addClass("flits-rule-earned");
                        earnedRuleCount++;
                    }
                    switch (ruleItem.module_on) {
                        case "register":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.register_credit_rule_title", "Register credit");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.register_credit_rule_description", "Register and get {{ credit }} credit.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            !rulesConfig[ruleItem.module_on].isDisplayEarnedCredits ? ruleBoxClone.find(".flits-rule-earn-credit").addClass("flits-hide") : "";
                            if (!ruleItem.is_earned) {
                                ruleBoxClone.addClass("flits-rule-not-applicable");
                                ruleBoxClone.find(".flits-unlock-badge").html(notApplicableText);
                                notApplicableEarnRuleCount++;
                            }
                            break;
                        case "subscribe":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.subscribe_credit_rule_title", "Subscriber credit");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.subscribe_credit_rule_description", "Subscribe and get {{ credit }} credit.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            !rulesConfig[ruleItem.module_on].isDisplayEarnedCredits ? ruleBoxClone.find(".flits-rule-earn-credit").addClass("flits-hide") : "";
                            let isSubscribed = Flits.customer_accepts_marketing == "true" ? "1" : "0";
                            let isSubscribCreditEarned = ruleItem.is_earned ? "1" : "0";
                            switch (isSubscribed + isSubscribCreditEarned) {
                                case "00":
                                    ruleBoxClone.removeClass("flits-rule-not-applicable");
                                    ruleBoxClone.find(".flits-unlock-badge").html(unlockText).addClass("flits-accept-marketing");
                                    break;
                                case "10":
                                    ruleBoxClone.removeClass("flits-rule-earned");
                                    ruleBoxClone.addClass("flits-rule-not-applicable");
                                    ruleBoxClone.find(".flits-unlock-badge").html(notApplicableText);
                                    notApplicableEarnRuleCount++;
                                    break;
                                case "11":
                                    break;
                                case "01":
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case "order_number":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.specific_order_credit_rule_title", "Credit on specific order");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.specific_order_credit_rule_description", "Earn {{ credit }} credit on your order number {{ order_count }}");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits).replace("{{ order_count }}", ruleItem.column_value);
                            !rulesConfig[ruleItem.module_on].isDisplayEarnedCredits ? ruleBoxClone.find(".flits-rule-earn-credit").addClass("flits-hide") : "";
                            let orderCount = parseInt(Flits.customer_orders_count);
                            let columnValue = parseInt(ruleItem.column_value);
                            if (!ruleItem.is_earned) {
                                if (orderCount >= columnValue) {
                                    ruleBoxClone.removeClass("flits-rule-earned");
                                    ruleBoxClone.addClass("flits-rule-not-applicable");
                                    ruleBoxClone.find(".flits-unlock-badge").html(notApplicableText);
                                    notApplicableEarnRuleCount++;
                                }
                            }
                            if (ruleItem.relation == ">=") {
                                multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.specific_order_and_next_orders_credit_rule_title", "Credit on order number {{ order_count }} and next orders");
                                multilangDescription = Flits.t(
                                    "Flits.locals.how_to_earn_credit_page.specific_order_and_next_orders_credit_rule_description",
                                    "You can earn {{ credit }} credit on order number {{ order_count }} and next orders {{ order_count+1 }}, {{ order_count+2 }}..... {{ order_count+n }}"
                                );
                                title = multilangTitle.replace("{{ order_count }}", ruleItem.column_value);
                                description = multilangDescription
                                    .replace("{{ credit }}", credits)
                                    .replace("{{ order_count }}", ruleItem.column_value)
                                    .replace("{{ order_count+1 }}", parseInt(ruleItem.column_value) + 1)
                                    .replace("{{ order_count+2 }}", parseInt(ruleItem.column_value) + 2)
                                    .replace("{{ order_count+n }}", "n");
                                ruleBoxClone.removeClass("flits-rule-earned");
                                ruleBoxClone.removeClass("flits-rule-not-applicable");
                                ruleBoxClone.find(".flits-unlock-badge").html(unlockText);
                                ruleBoxClone.find(".flits-rule-earn-credit").removeClass("flits-hide");
                            }
                            ruleBoxClone.find(".flits-unlock-badge").attr("href", rulesConfig[ruleItem.module_on].linkTo).attr("target", "_blank");
                            break;
                        case "birthdate":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.birthdate_credit_rule_title", "Birthday credit*");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.birthdate_credit_rule_description_1", "Share your birthdate with us to get {{ credit }} credit on your birthday.");
                            let birthdayMultilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.birthdate_credit_rule_description_2", "{{ days }} day/s left for a birthday reward of {{ credit }} credit.");
                            let termsCondtionMultilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.birthdate_credit_rule_description_3", "*You can avail this credit only once in a year.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            let birthdayDescription = birthdayMultilangDescription.replace("{{ credit }}", credits);
                            !rulesConfig[ruleItem.module_on].isDisplayEarnedCredits ? ruleBoxClone.find(".flits-rule-earn-credit").addClass("flits-hide") : "";
                            ruleBoxClone.removeClass("flits-rule-earned");
                            ruleBoxClone.find(".flits-rule-redirect-link").attr("data-flits-redirect", "#profile");
                            ruleBoxClone.find(".flits-rule-redirect-link").addClass("flits-birthday-redirect");
                            ruleBoxClone.find(".flits-rule-redirect-link").append(Flits.t("Flits.locals.how_to_earn_credit_page.add_birthdate", "Add your Birthdate"));
                            ruleBoxClone.find(".flits-unlock-badge").addClass("flits-birthday-unlock-badge");
                            ruleBoxClone.find(".flits-birthday-unlock-badge").addClass("flits-redirect-link").attr("data-flits-redirect", "#profile");
                            if (!Flits("[data-flits-birthdate]").attr("data-flits-birthdate")) {
                                ruleBoxClone.find(".flits-rule-redirect-link").removeClass("flits-hide");
                            } else {
                                description = birthdayDescription;
                                ruleBoxClone.find(".flits-birthday-unlock-badge").addClass("flits-hide");
                            }
                            descriptionCloneTag = ruleBoxClone.find(".flits-rule-description").clone();
                            descriptionCloneTag.addClass("flits-birthday-rule-terms-condition flits-mt-10");
                            ruleBoxClone.find(".flits-rule-description").after(descriptionCloneTag);
                            ruleBoxClone.find(".flits-rule-description:not(.flits-birthday-rule-terms-condition)").addClass("flits-birthday-rule-description");
                            ruleBoxClone.find(".flits-birthday-rule-description").attr("data-flits-birthdate-count-text", birthdayDescription);
                            ruleBoxClone.find(".flits-birthday-rule-terms-condition").html(termsCondtionMultilangDescription);
                            break;
                        case "monthly_date":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.monthly_credit_rule_title", "Monthly credit");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.monthly_credit_rule_description", "You will get {{ credit }} credit on  {{ date }} of every month.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits).replace("{{ date }}", new Date(ruleItem.column_value).getDate());
                            !rulesConfig[ruleItem.module_on].isDisplayEarnedCredits ? ruleBoxClone.find(".flits-rule-earn-credit").addClass("flits-hide") : "";
                            ruleBoxClone.removeClass("flits-rule-earned");
                            ruleBoxClone.find(".flits-unlock-badge").addClass("flits-hide");
                            if (ruleItem.is_fixed) {
                                multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.special_day_credit_rule_title", "Bonus day credit");
                                multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.special_day_credit_rule_description", "Get special day credit on {{ date }}");
                                title = multilangTitle;
                                description = multilangDescription.replace(
                                    "{{ date }}",
                                    new Date(ruleItem.column_value).getDate() + "/" + (new Date(ruleItem.column_value).getMonth() + 1) + "/" + new Date(ruleItem.column_value).getFullYear()
                                );
                                if (Flits.timeDiffer({ date1: ruleItem.column_value, date2: new Date(), type: "day", isAbsDisabled: true }) < 0) {
                                    ruleBoxClone.addClass("flits-rule-not-applicable");
                                    ruleBoxClone.find(".flits-unlock-badge").html(notApplicableText);
                                    ruleBoxClone.find(".flits-unlock-badge").removeClass("flits-hide");
                                    notApplicableEarnRuleCount++;
                                }
                            }
                            break;
                        case "product_review":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.product_review_credit_rule_title", "Product review credit");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.product_review_credit_rule_description", "Write a product review and get {{ credit }} credit.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            !rulesConfig[ruleItem.module_on].isDisplayEarnedCredits ? ruleBoxClone.find(".flits-rule-earn-credit").addClass("flits-hide") : "";
                            ruleBoxClone.removeClass("flits-rule-earned");
                            ruleBoxClone.find(".flits-unlock-badge").attr("href", rulesConfig[ruleItem.module_on].linkTo).attr("target", "_blank");
                            break;
                        case "product_tag":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.product_tag_credit_rule_title", "Credit for specific product collection");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.product_tag_credit_rule_description", "Buy product/s with (any tag) {{ tag }} and get {{ credit }} credit.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            !rulesConfig[ruleItem.module_on].isDisplayEarnedCredits ? ruleBoxClone.find(".flits-rule-earn-credit").addClass("flits-hide") : "";
                            ruleBoxClone.removeClass("flits-rule-earned");
                            let productTagSpan = Flits("<span/>");
                            Flits(ruleItem.avails).each(function (index, item) {
                                let productTagAnchor = Flits('<a href="/search?q=' + item + '" target="_blank" class="flits-link">' + item + "</a>");
                                if (index > 0) {
                                    productTagSpan.append(",");
                                }
                                productTagSpan.append(productTagAnchor);
                            });
                            description = description.replace("{{ tag }}", productTagSpan.html());
                            ruleBoxClone
                                .find(".flits-unlock-badge")
                                .attr("href", "/search?q=" + ruleItem.avails[0])
                                .attr("target", "_blank");
                            break;
                        case "add_product_to_wishlist":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.wishlisted_product_credit_rule_title", "Wishlisted product credit");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.wishlisted_product_credit_rule_description", "You can earn {{ credit }} credit when you add product/s in wishlist.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            !rulesConfig[ruleItem.module_on].isDisplayEarnedCredits ? ruleBoxClone.find(".flits-rule-earn-credit").addClass("flits-hide") : "";
                            ruleBoxClone.removeClass("flits-rule-earned");
                            ruleBoxClone.find(".flits-unlock-badge").attr("href", rulesConfig[ruleItem.module_on].linkTo).attr("target", "_blank");
                            break;
                        case "cart":
                            multilangTitle = Flits.t("Flits.locals.how_to_spend_credit_page.spend_credit_on_cart_rule_title", "Spend on cart");
                            let cartRange = ruleItem.column_value;
                            let range = cartRange.split(":");
                            let minRange = Flits.formatMoney(Math.abs(range[0] * 100), Flits.money_format);
                            let maxRange = Flits.formatMoney(Math.abs(range[1] * 100), Flits.money_format);
                            if (ruleItem.is_fixed && range[1] != "-1") {
                                multilangDescription = Flits.t(
                                    "Flits.locals.how_to_spend_credit_page.spend_credit_on_cart_rule_description_1",
                                    "Your cart value is between {{ min_cart_value }}-{{ max_cart_value }}. Congratulations you are eligible to use {{ credit }} credit."
                                );
                                description = multilangDescription
                                    .replace("{{ min_cart_value }}-{{ max_cart_value }}", '{{ min_cart_value }}<span class="flits-divider">-</span>{{ max_cart_value }}')
                                    .replace("{{ min_cart_value }}", minRange)
                                    .replace("{{ max_cart_value }}", maxRange)
                                    .replace("{{ credit }}", credits);
                            } else if (ruleItem.is_fixed && range[1] == "-1") {
                                multilangDescription = Flits.t(
                                    "Flits.locals.how_to_spend_credit_page.spend_credit_on_cart_rule_description_3",
                                    "Your cart value is {{ min_cart_value }} (or more). Congratulations you can use {{ credit }} credit."
                                );
                                description = multilangDescription.replace("{{ min_cart_value }}", minRange).replace("{{ credit }}", credits);
                            } else if (!ruleItem.is_fixed && range[1] != "-1") {
                                multilangDescription = Flits.t(
                                    "Flits.locals.how_to_spend_credit_page.spend_credit_on_cart_rule_description_2",
                                    "Your cart value is between {{ min_cart_value }}-{{ max_cart_value }}. Congratulations you are eligible to use {{ credit }} of cart value as credit."
                                );
                                description = multilangDescription
                                    .replace("{{ min_cart_value }}-{{ max_cart_value }}", '{{ min_cart_value }}<span class="flits-divider">-</span>{{ max_cart_value }}')
                                    .replace("{{ min_cart_value }}", minRange)
                                    .replace("{{ max_cart_value }}", maxRange)
                                    .replace("{{ credit }}", credits);
                            } else if (!ruleItem.is_fixed && range[1] == "-1") {
                                multilangDescription = Flits.t(
                                    "Flits.locals.how_to_spend_credit_page.spend_credit_on_cart_rule_description_4",
                                    "Your cart value is {{ min_cart_value }} (or more). Congratulations you are eligible to use {{ credit }} of cart value as credit."
                                );
                                description = multilangDescription.replace("{{ min_cart_value }}", minRange).replace("{{ credit }}", credits);
                            }
                            break;
                        case "referrer_friend":
                            multilangTitle = Flits.t("Flits.locals.refer_friend_page.referrer_credit_rule_title", "Referral Program");
                            multilangDescription = Flits.t("Flits.locals.refer_friend_page.referrer_credit_rule_description", "Invite your friends and get {{ credit }} credit when they sign up.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            !rulesConfig[ruleItem.module_on].isDisplayEarnedCredits ? ruleBoxClone.find(".flits-rule-earn-credit").addClass("flits-hide") : "";
                            ruleBoxClone.removeClass("flits-rule-earned");
                            descriptionCloneTag = ruleBoxClone.find(".flits-rule-description").clone();
                            descriptionCloneTag.addClass("flits-referee-friend-rule-description flits-mt-10");
                            ruleBoxClone.find(".flits-rule-description").after(descriptionCloneTag);
                            ruleBoxClone.find(".flits-rule-description:not(.flits-referee-friend-rule-description)").addClass("flits-referrer-friend-rule-description");
                            break;
                        case "referee_friend":
                            multilangTitle = Flits.t("Flits.locals.refer_friend_page.referee_credit_rule_title", "Referral Program");
                            multilangDescription = Flits.t("Flits.locals.refer_friend_page.referee_credit_rule_description", "When your friends accept the invitation, they will get  {{ credit }} credit.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            !rulesConfig[ruleItem.module_on].isDisplayEarnedCredits ? ruleBoxClone.find(".flits-rule-earn-credit").addClass("flits-hide") : "";
                            if (!ruleItem.is_earned) {
                                ruleBoxClone.addClass("flits-rule-not-applicable");
                                ruleBoxClone.find(".flits-unlock-badge").html(notApplicableText);
                            }
                            break;
                        case "referrals_total_number":
                            multilangTitle = Flits.t("Flits.locals.refer_friend_page.credit_on_number_of_referrals_rule_title", "Credit on numbers of referrals");
                            multilangDescription = Flits.t("Flits.locals.refer_friend_page.credit_on_number_of_referrals_rule_description", "When you reach {{ referral_count }} referrals you get {{ credit }} credit.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits).replace("{{ referral_count }}", ruleItem.column_value);
                            !rulesConfig[ruleItem.module_on].isDisplayEarnedCredits ? ruleBoxClone.find(".flits-rule-earn-credit").addClass("flits-hide") : "";
                            if (!ruleItem.is_earned) {
                                ruleBoxClone.attr("data-flits-referrals-total-number", ruleItem.column_value);
                            }
                            break;
                        case "referrals_total_spent":
                            multilangTitle = Flits.t("Flits.locals.refer_friend_page.credit_on_referrals_total_spent_amount_rule_title", "Credit after referral's total spent amount");
                            multilangDescription = Flits.t(
                                "Flits.locals.refer_friend_page.credit_on_referrals_total_spent_amount_rule_description",
                                "You can earn {{ credit }} credit when your referral's total spent amount is {{ total_spent_amount }} or more."
                            );
                            title = multilangTitle;
                            let totalSpentAmount = Flits.formatMoney(Math.abs(parseInt(ruleItem.column_value) * 100), Flits.money_format);
                            description = multilangDescription.replace("{{ credit }}", credits).replace("{{ total_spent_amount }}", totalSpentAmount);
                            !rulesConfig[ruleItem.module_on].isDisplayEarnedCredits ? ruleBoxClone.find(".flits-rule-earn-credit").addClass("flits-hide") : "";
                            ruleBoxClone.removeClass("flits-rule-earned");
                            break;
                        case "referrals_order_number":
                            multilangTitle = Flits.t("Flits.locals.refer_friend_page.referrals_specific_order_credit_rule_title", "Credit on specific order by referee");
                            multilangDescription = Flits.t("Flits.locals.refer_friend_page.referrals_specific_order_credit_rule_description", "You can earn {{ credit }} credit on your referee's order number {{ order_count }}.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits).replace("{{ order_count }}", ruleItem.column_value);
                            if (ruleItem.relation == ">=") {
                                multilangTitle = Flits.t("Flits.locals.refer_friend_page.referrals_specific_order_and_next_orders_credit_rule_title", "Credit on referee's order number {{ order_count }} and next orders");
                                multilangDescription = Flits.t(
                                    "Flits.locals.refer_friend_page.referrals_specific_order_and_next_orders_credit_rule_description",
                                    "You can earn {{ credit }} credit on referee's order number {{ order_count }} and next orders {{ order_count+1 }}, {{ order_count+2 }}... {{ order_count+n }}"
                                );
                                title = multilangTitle.replace("{{ order_count }}", ruleItem.column_value);
                                description = multilangDescription
                                    .replace("{{ credit }}", credits)
                                    .replace("{{ order_count }}", ruleItem.column_value)
                                    .replace("{{ order_count+1 }}", parseInt(ruleItem.column_value) + 1)
                                    .replace("{{ order_count+2 }}", parseInt(ruleItem.column_value) + 2)
                                    .replace("{{ order_count+n }}", "n");
                            }
                            !rulesConfig[ruleItem.module_on].isDisplayEarnedCredits ? ruleBoxClone.find(".flits-rule-earn-credit").addClass("flits-hide") : "";
                            ruleBoxClone.removeClass("flits-rule-earned");
                            break;
                        default:
                            break;
                    }
                } else {
                    title = ruleItem.title;
                    description = ruleItem.description;
                    ruleBoxClone.find(".flits-unlock-badge").addClass("flits-hide");
                }
                ruleBoxClone.find(".flits-rule-title").html(title);
                if (ruleItem.module_on == "referrer_friend") {
                    ruleBoxClone.find(".flits-referrer-friend-rule-description").html(description);
                } else if (ruleItem.module_on == "referee_friend") {
                    Flits(".flits-referee-friend-rule-description").html(description);
                } else if (ruleItem.module_on == "birthdate") {
                    ruleBoxClone.find(".flits-birthday-rule-description").html(description);
                } else {
                    ruleBoxClone.find(".flits-rule-description").html(description);
                }
                if (ruleItem.mappedRuleIds) {
                    ruleBoxClone.attr("data-flits-rule-id-array", ruleItem.mappedRuleIds.toString());
                } else {
                    ruleBoxClone.attr("data-flits-rule-id-array", ruleItem.rule_id);
                }
                ruleBoxClone.attr("data-flits-rule-id", ruleItem.rule_id);
                if (rulesConfig[ruleItem.module_on]) {
                    let image = rulesConfig[ruleItem.module_on].icon == undefined ? "" : "data:image/svg+xml;base64," + rulesConfig[ruleItem.module_on].icon;
                    ruleBoxClone.find(".flits-rule-image").find("img").attr("src", image);
                }
                switch (ruleItem.tab_to_append) {
                    case "flits_earning_rules":
                        earnRuleLength++;
                        if (ruleItem.module_on.indexOf("refer") != -1) {
                            referFriendRuleLength++;
                            ruleBoxClone.find(".flits-unlock-badge").addClass("flits-refer-friend-unlock-badge");
                            if (ruleItem.module_on != "referee_friend") {
                                Flits(".flits-refer-friend-div .flits-rules-card").append(ruleBoxClone.clone());
                            }
                        } else {
                            howToEarnRuleLength++;
                            Flits(".flits-how-to-earn-div .flits-rules-card").append(ruleBoxClone);
                        }
                        break;
                    case "flits_spent_rules":
                        if (ruleItem.module_on == "cart") {
                            howToSpentRuleLength++;
                            let rangeValue = ruleItem.column_value.split(":");
                            let rangeValueFrom = parseInt(rangeValue[0]);
                            let rangeValueTo = parseInt(rangeValue[1]);
                            let rangeLLabelFrom = Flits.formatMoney(Math.abs(parseInt(rangeValue[0]) * 100), Flits.money_format);
                            let rangeLabelTo = parseInt(rangeValue[1]) == -1 ? "Max" : Flits.formatMoney(Math.abs(parseInt(rangeValue[1]) * 100), Flits.money_format);
                            let rangeLabel = rangeLLabelFrom + " - " + rangeLabelTo;
                            Flits.howToEarnCredit.settings.spentRange.push({ range: rangeValueFrom, range_label: rangeLabel });
                            let pTag = Flits("<p />");
                            pTag.addClass("flits-spend-rule-description flits-hide");
                            pTag.attr("data-flits-rule-for", rangeValueFrom);
                            pTag.html(description);
                            Flits(".flits-how-to-spend-div .flits-spend-rules-range-container").append(pTag);
                        }
                        break;
                    case "flits_from_admin_rules":
                        title = ruleItem.title;
                        description = ruleItem.description;
                        ruleBoxClone.find(".flits-rule-title").html(title);
                        ruleBoxClone.find(".flits-rule-description").html(description);
                        !rulesConfig["admin_rule"].isDisplayEarnedCredits ? ruleBoxClone.find(".flits-rule-earn-credit").addClass("flits-hide") : "";
                        image = rulesConfig["admin_rule"].icon == undefined ? "" : "data:image/svg+xml;base64," + rulesConfig["admin_rule"].icon;
                        ruleBoxClone.find(".flits-rule-image").find("img").attr("src", image);
                        adminRuleLength++;
                        Flits(".flits-from-admin-div .flits-rules-card").append(ruleBoxClone);
                        break;
                    default:
                        break;
                }
                if (rules.length - 1 == ruleIndex) {
                    Flits.dispatchEvent("Flits:howToEarnRules:Successful", { earnRuleLength: earnRuleLength, earnedRuleCount: earnedRuleCount });
                    Flits.dispatchEvent("Flits:howToSpentRules:Successful");
                    Flits.dispatchEvent("Flits:referFriendRules:Successful", { earnRuleLength: earnRuleLength, earnedRuleCount: earnedRuleCount });
                    Flits.dispatchEvent("Flits:adminRules:Successful");
                }
            });
            if (notApplicableEarnRuleCount > 0) {
                Flits(".flits-how-to-earn-not-applicable-note").removeClass("flits-hide");
            }
        }
        function totalEarnCreditDisplay() {
            if (creditLogAppended == true && rulesCardAppended == true && totalCreditAppended == true) {
                totalCreditAppended = false;
                let ruleIdCard = Flits(".flits-rule-card[data-flits-rule-id]");
                Flits.each(ruleIdCard, function (index, item) {
                    let id = Flits(item).attr("data-flits-rule-id");
                    let idArray = Flits(item).attr("data-flits-rule-id-array");
                    idArray = idArray.split(",");
                    if (Flits.storeCredit.settings.creditIdArray[parseInt(id)] || Flits.inArray(id, idArray) != -1) {
                        let totalCredits = 0;
                        Flits.each(idArray, function (i, el) {
                            if (Flits.storeCredit.settings.creditIdArray[parseInt(el)]) {
                                totalCredits += Flits.storeCredit.settings.creditIdArray[parseInt(el)].credits;
                            }
                        });
                        if (totalCredits > 0) {
                            let totalCreditsText = Flits.t("Flits.locals.how_to_earn_credit_page.total_earned_credit_by_rule", "Total earn credit till date: {{ credit }}");
                            totalCredits = Flits.formatMoney(Math.abs(totalCredits), Flits.money_format);
                            totalCreditsText = totalCreditsText.replace("{{ credit }}", totalCredits);
                            Flits(item).find(".flits-rule-earn-credit").html(totalCreditsText);
                        } else {
                            Flits(item).find(".flits-rule-earn-credit").addClass("flits-hide");
                        }
                    }
                });
            }
        }
        function showEmptyScreen() {
            setTimeout(function () {
                Flits(".flits-how-to-earn-container").removeClass("flits-hide");
                Flits(".flits-how-to-earn-empty").removeClass("flits-hide");
                Flits(".flits-how-to-earn-loader").hide();
            }, 700);
            setTimeout(function () {
                Flits(".flits-how-to-spend-container").removeClass("flits-hide");
                Flits(".flits-how-to-spend-empty").removeClass("flits-hide");
                Flits(".flits-mobile-account-box.flits-how-to-spend-div .flits-how-it-work-container").addClass("flits-hide");
                Flits(".flits-mobile-account-box.flits-how-to-spend-div .flits-navigation-header").removeClass("flits-pb-30");
                Flits(".flits-mobile-account-box.flits-how-to-spend-div .flits-how-to-spend-inner-container").removeClass("flits-hide");
                Flits(".flits-mobile-account-box.flits-how-to-spend-div .flits-spend-rules-range-container").addClass("flits-hide");
                Flits(".flits-how-to-spend-loader").hide();
            }, 700);
            Flits(".flits-from-admin-loader").hide();
            Flits("#flits_tab_fromAdmin").remove();
            Flits("#flits_mobile_tab_fromAdmin").remove();
        }
        Flits(document).on("Flits:storeCredit:AjaxSuccessful", function (event) {
            let resp = event.detail.resp;
            if (resp.status) {
                let customer = resp.customer;
                let currentCreditTitle = Flits.t("Flits.locals.how_to_spend_credit_page.still_you_have_remaining_credit", "You have {{ credit }} credit remaining").replace(
                    "{{ credit }}",
                    Flits.formatMoney(customer.credits, Flits.money_format)
                );
                if (customer.credits > 0) {
                    Flits(".flits-current-balance-title").html(currentCreditTitle);
                } else {
                    Flits(".flits-current-balance-title").addClass("flits-hide");
                    Flits(".flits-spend-credit-tag-line").html(
                        Flits.t("Flits.locals.how_to_earn_credit_page.header_line_html", "Earn More <strong>Spend More</strong>").replace("&lt;strong&gt;", "<strong>").replace("&lt;/strong&gt;", "</strong>")
                    );
                }
            } else {
                Flits(".flits-current-balance-title").addClass("flits-hide");
                Flits(".flits-spend-credit-tag-line").html(
                    Flits.t("Flits.locals.how_to_earn_credit_page.header_line_html", "Earn More <strong>Spend More</strong>").replace("&lt;strong&gt;", "<strong>").replace("&lt;/strong&gt;", "</strong>")
                );
            }
        });
        Flits(document).on("Flits:storeCredit:ListSuccessful", function () {
            creditLogAppended = true;
            totalEarnCreditDisplay();
        });
        Flits(document).on("Flits:howToEarnRules:Successful", function (event) {
            rulesCardAppended = true;
            totalEarnCreditDisplay();
            if (howToEarnRuleLength > 0) {
                setTimeout(function () {
                    Flits(".flits-how-to-earn-container").removeClass("flits-hide");
                    Flits(".flits-how-to-earn-div .flits-rules-card-list").removeClass("flits-hide");
                    Flits(".flits-how-to-earn-loader").hide();
                }, 700);
                setTimeout(function () {
                    Flits(window).on("load resize", function () {
                        Flits.sameHeight({ container: ".flits-how-to-earn-div .flits-rules-card", element: ".flits-how-to-earn-div .flits-rules-card .flits-rule-card" });
                    });
                }, 900);
            } else {
                setTimeout(function () {
                    Flits(".flits-how-to-earn-container").removeClass("flits-hide");
                    Flits(".flits-how-to-earn-empty").removeClass("flits-hide");
                    Flits(".flits-how-to-earn-loader").hide();
                }, 700);
            }
        });
        Flits(document).on("Flits:referFriendRules:Successful", function (event) {
            if (referFriendRuleLength > 0) {
                Flits(".flits-refer-friend-div .flits-refer-friend-rules-slick").flitsSlider({
                    slidesToShow: 3,
                    scrolling: true,
                    dragging: true,
                    prevArrow:
                        '<button type="button" class="flits-slider-prev flits-slider-arrow"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA4LjMgMTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDguMyAxNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMwMDY1RDE7fQo8L3N0eWxlPgo8cGF0aCBpZD0iTGF5ZXJfMiIgY2xhc3M9InN0MCIgZD0iTTAuMiw4TDcsMTQuOGMwLjMsMC4zLDAuOCwwLjMsMS4xLDBjMC4zLTAuMywwLjMtMC44LDAtMS4xTDEuOCw3LjVMOCwxLjNDOC4zLDEsOC4zLDAuNSw4LDAuMgoJQzcuNywwLDcuMywwLDcsMC4yTDAuMiw3QzAsNy4zLDAsNy43LDAuMiw4eiIvPgo8L3N2Zz4K" /></button>',
                    nextArrow:
                        '<button type="button" class="flits-slider-next flits-slider-arrow"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA4LjMgMTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDguMyAxNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMwMDY1RDE7fQo8L3N0eWxlPgo8cGF0aCBpZD0iTGF5ZXJfMiIgY2xhc3M9InN0MCIgZD0iTTgsOGwtNi43LDYuOGMtMC4zLDAuMy0wLjgsMC4zLTEuMSwwYy0wLjMtMC4zLTAuMy0wLjgsMC0xLjFsNi4yLTYuMkwwLjIsMS4zCgljLTAuMy0wLjMtMC4zLTAuOCwwLTEuMWMwLjMtMC4zLDAuOC0wLjMsMS4xLDBMOCw3QzguMiw3LjMsOC4yLDcuNyw4LDh6Ii8+Cjwvc3ZnPgo=" /></button>',
                    responsive: [{ breakpoint: 860, settings: { slidesToShow: 2 } }],
                });
                Flits(".flits-refer-friend-div .flits-refer-friend-rules-mobile-slick").flitsSlider({
                    slidesToShow: 2,
                    arrows: false,
                    scrolling: true,
                    dragging: true,
                    responsive: [
                        { breakpoint: 600, settings: { slidesToShow: 2 } },
                        { breakpoint: 530, settings: { slidesToShow: 1 } },
                    ],
                });
            }
        });
        Flits(document).on("Flits:howToSpentRules:Successful", function (event) {
            if (howToSpentRuleLength > 0) {
                let spentRange = Flits.howToEarnCredit.settings.spentRange.sort(Flits.nestedSort("range"));
                Flits.each(spentRange, function (index, value) {
                    let liTag = Flits("<li />");
                    if (spentRange.length == 1) {
                        Flits(".flits-spend-rules-range-container .flits-cart-range-note").hide();
                        let l = value.range_label.split("-");
                        for (i = 0; i < l.length; i++) {
                            liTag = Flits("<li />");
                            liTag.addClass("active");
                            liTag.attr("data-flits-range-for", value.range);
                            liTag.attr("data-flits-child", i + 1);
                            liTag.html(l[i]);
                            Flits(".flits-spend-rules-range-container .flits-cart-range-container ul.flits-cart-range-slider").append(liTag);
                        }
                        Flits(".flits-spend-rules-range-container .flits-spend-rule-description[data-flits-rule-for=" + value.range + "]").removeClass("flits-hide");
                        Flits("head").append('<style class="flits-cart-range-css">' + ".flits-account-container .flits-how-to-spend-div .flits-cart-range-container ul.flits-cart-range-slider li{pointer-events: none;}" + "</style>");
                    } else {
                        if (index == 0) {
                            liTag.addClass("active");
                            Flits(".flits-spend-rules-range-container .flits-spend-rule-description[data-flits-rule-for=" + value.range + "]").removeClass("flits-hide");
                        }
                        liTag.attr("data-flits-range-for", value.range);
                        liTag.attr("data-flits-child", index + 1);
                        let rangeLabel = Flits.formatMoney(Math.abs(value * 100), Flits.money_format);
                        liTag.html(value.range_label.replace("-", '<span class="flits-divider">-</span>'));
                        Flits(".flits-spend-rules-range-container .flits-cart-range-container ul.flits-cart-range-slider").append(liTag);
                    }
                });
                setTimeout(function () {
                    Flits(".flits-how-to-spend-div .flits-how-to-spend-container, .flits-how-to-spend-div .flits-how-to-spend-inner-container").removeClass("flits-hide");
                    Flits(".flits-how-to-spend-loader").hide();
                }, 700);
            } else {
                setTimeout(function () {
                    Flits(".flits-how-to-spend-container").removeClass("flits-hide");
                    Flits(".flits-how-to-spend-empty").removeClass("flits-hide");
                    Flits(".flits-mobile-account-box.flits-how-to-spend-div .flits-how-it-work-container").addClass("flits-hide");
                    Flits(".flits-mobile-account-box.flits-how-to-spend-div .flits-navigation-header").removeClass("flits-pb-30");
                    Flits(".flits-mobile-account-box.flits-how-to-spend-div .flits-how-to-spend-inner-container").removeClass("flits-hide");
                    Flits(".flits-mobile-account-box.flits-how-to-spend-div .flits-spend-rules-range-container").addClass("flits-hide");
                    Flits(".flits-how-to-spend-loader").hide();
                }, 700);
            }
        });
        Flits(document).on("Flits:adminRules:Successful", function (event) {
            if (adminRuleLength > 0) {
                setTimeout(function () {
                    Flits(".flits-from-admin-div .flits-from-admin-container, .flits-from-admin-div .flits-rules-card-list").removeClass("flits-hide");
                    Flits(".flits-from-admin-loader").hide();
                }, 700);
                setTimeout(function () {
                    Flits(window).on("load resize", function () {
                        Flits.sameHeight({ container: ".flits-from-admin-div .flits-rules-card", element: ".flits-from-admin-div .flits-rules-card .flits-rule-card" });
                    });
                }, 900);
            } else {
                Flits(".flits-from-admin-loader").hide();
                Flits("#flits_tab_fromAdmin").remove();
                Flits("#flits_mobile_tab_fromAdmin").remove();
            }
        });
        Flits(document).on("click", ".flits-cart-range-container ul.flits-cart-range-slider li", function () {
            Flits(this).parents("ul.flits-cart-range-slider").find("li.active").removeClass("active");
            Flits(this).addClass("active");
            let rangeNo = parseInt(Flits(this).attr("data-flits-range-for"));
            Flits(".flits-spend-rules-range-container .flits-spend-rule-description").addClass("flits-hide");
            Flits(".flits-spend-rules-range-container .flits-spend-rule-description[data-flits-rule-for=" + rangeNo + "]").removeClass("flits-hide");
        });
        Flits(document).on("click", ".flits-accept-marketing", function () {
            let selector = Flits(this);
            Flits(selector).addClass("flits-disabled");
            flitsSnackbar.show({
                text: Flits.t("Flits.locals.how_to_earn_credit_page.subscribing_email", "Your request to receive a mail subscription from the store is being accepted."),
                pos: "bottom-center",
                showAction: false,
                customClass: "flits-alert-success",
            });
            let url = Flits.base_url + "/" + Flits.customer_id + "/general_subscription_save";
            let params = [
                { name: "customer_hash", value: Flits.customerHash },
                { name: "token", value: Flits.token },
                { name: "accepts_marketing", value: true },
                { name: "credit_subject", value: "subscribe" },
            ];
            setTimeout(function () {
                Flits.ajax({ method: "POST", url: url, data: params })
                    .done(function (resp) {
                        if (resp.status) {
                            Flits(selector).addClass("flits-hide");
                            flitsSnackbar.show({
                                text: Flits.t("Flits.locals.how_to_earn_credit_page.subscribed_successfully", "Hurray! You will recieve subscriber credit in a short while."),
                                pos: "bottom-center",
                                showAction: false,
                                customClass: "flits-alert-success ",
                            });
                        }
                    })
                    .fail(function (resp) {
                        Flits(selector).removeClass("flits-disabled");
                        flitsSnackbar.show({ text: Flits.t("Flits.locals.general.something_went_wrong", "Something went wrong. Please try again."), pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            }, 4000);
        });
        if (allRules.length > 0) {
            let ruleList = allRules.filter((rule) => rule.tab_to_append == "flits_from_admin_rules");
            if (ruleList.length > 0) {
                let menuItemClone = Flits('.flits-menu-item a[href="#fromAdmin"]').parent(".flits-menu-item").clone().removeClass("flits-template");
                Flits('.flits-desktop-view .flits-menu-item a[href="#howToSpend"]').parent(".flits-menu-item").after(menuItemClone);
                if (Flits(".flits-mobile-view .flits-menu-items").hasClass("flits-slider-initialized")) {
                    let newIndex = Flits('.flits-mobile-view .flits-menu-item a[href="#howToSpend"]').parent(".flits-menu-item").attr("data-flits-slider-index");
                    newIndex = parseInt(newIndex) + 1;
                    Flits(".flits-mobile-view .flits-menu-items").flitsSlider("sliderAdd", menuItemClone.clone(), newIndex, true);
                }
                if (hash == "#fromAdmin") {
                    Flits.navigationFunc(hash);
                    let sliderIndex = parseInt(Flits('.flits-mobile-view .flits-menu-item a[href="#fromAdmin"]').parent(".flits-menu-item").attr("data-flits-slider-index"));
                    Flits(".flits-mobile-view .flits-menu-items").flitsSlider("sliderGoTo", parseInt(sliderIndex));
                }
            } else {
                if (hash == "#fromAdmin") {
                    Flits.navigationFunc(Flits.AccountPage.settings.active_tab);
                }
            }
            setRules(allRules);
        } else {
            showEmptyScreen();
        }
    });
    var referCredit = (Flits.referCredit = function (options) {
        Flits.referCredit.settings = {};
        var settings = { isNewToReferral: false, referFriendCreditTableList: null, referFriendCreditTableMobileList: null, perPageLimit: 10, data: null };
        settings = Flits.extend(Flits.referCredit.settings, settings, options);
        Flits.dispatchEvent("Flits:referCredit:Loaded", { settings: settings });
        Flits(".flits-refer-friend-save-chart").donutChart({ seriesData: [], title: Flits.formatMoney(Math.abs(00), Flits.money_format), textStyle: { fontWeight: "bold", color: Flits.AccountPage.settings.referChartColor } });
        Flits(".flits-refer-friend-div .flits-refer-friend-rules-slick").on("sliderInit", function () {
            Flits.sameHeight({ container: ".flits-refer-friend-div .flits-rules-card", element: ".flits-refer-friend-div .flits-rules-card .flits-rule-card" });
            Flits(window).on("resize", function () {
                Flits.sameHeight({ container: ".flits-refer-friend-div .flits-rules-card", element: ".flits-refer-friend-div .flits-rules-card .flits-rule-card" });
            });
        });
        Flits(document).on("Flits:referContainer:Display", function (event) {
            if (Flits(".flits-refer-friend-div .flits-refer-friend-rules-slick").hasClass("flits-slider-initialized")) {
                Flits(".flits-refer-friend-div .flits-refer-friend-rules-slick").flitsSlider("refresh");
            }
            if (Flits(".flits-refer-friend-div .flits-refer-friend-rules-mobile-slick").hasClass("flits-slider-initialized")) {
                Flits(".flits-refer-friend-div .flits-refer-friend-rules-mobile-slick").flitsSlider("refresh");
            }
        });
        Flits(document).on("Flits:referCredit:ListSuccessful", function (event) {
            var options = { page: Flits.referCredit.settings.perPageLimit, pagination: { innerWindow: 1, left: 1, right: 1, paginationClass: "flits-pagination" } };
            Flits.referCredit.settings.referFriendCreditTableList = new flitsList("flits-refer-friend-table", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-refer-friend"]');
            });
            Flits.referCredit.settings.referFriendCreditTableMobileList = new flitsList("flits-refer-friend-mobile-table", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-refer-friend-mobile"]');
            });
            Flits.paginationDisabled(Flits.referCredit.settings.referFriendCreditTableList, '.flits-pagination-div[data-flits-pagination="flits-refer-friend"]');
            Flits.paginationDisabled(Flits.referCredit.settings.referFriendCreditTableMobileList, '.flits-pagination-div[data-flits-pagination="flits-refer-friend-mobile"]');
            setTimeout(function () {
                Flits(".flits-refer-friend-container").removeClass("flits-hide");
                Flits(".flits-refer-friend-loader").hide();
                Flits.dispatchEvent("Flits:referContainer:Display");
            }, 700);
        });
        function updateReferCredit(resp) {
            let customer = resp.customer;
            let log = customer.credit_log;
            Flits(".flits-total-referral").html(resp.reached_referral_limit);
            if (customer.referral_code != "") {
                let shareableLink =
                    "https://" + location.host + "/account/register?flits_refer_code=" + encodeURIComponent(unescape(btoa(customer.referral_code))) + "&flits_inviter_name=" + encodeURIComponent(unescape(btoa(customer.name)));
                Flits('input[name="referral link"]').val(shareableLink);
            }
            if (resp.refer_by != "") {
                Flits(".flits-referby-row").removeClass("flits-hide");
                Flits('.flits-profile-form .flits-input[name="referby"]').val(resp.refer_by);
                Flits('.flits-profile-form .flits-input[name="referby"]').attr("value", resp.refer_by);
            }
            if (typeof navigator.share == "function") {
                Flits(".flits-share-btn[data-flits-share-platform='navigator_share']").removeClass("flits-hide");
            }
            if (resp.facebook_share) {
                Flits(".flits-share-btn[data-flits-share-platform='facebook']").removeClass("flits-hide");
            }
            if (resp.whatsapp_share) {
                Flits(".flits-share-btn[data-flits-share-platform='whatsapp']").removeClass("flits-hide");
            }
            if (typeof navigator.share != "function" && !resp.facebook_share && !resp.whatsapp_share) {
                Flits(".flits-link-share-btn-box").addClass("flits-hide");
                Flits(".flits-desktop-view .flits-link-share-container .flits-referral-link-input-wrap").addClass("flits-referral-link-full");
                Flits(".flits-mobile-view .flits-link-share-container .flits-referral-link-input-wrap").addClass("flits-mb-10");
            }
            if (log.length > 0) {
                Flits.each(log, function (logIndex, logItem) {
                    let liClone = Flits(".flits-refer-friend-transcation-table .flits-credit-table-item-template").clone();
                    liClone.removeClass("flits-credit-table-item-template");
                    liClone.attr("data-flits-referral-credit-no", logItem.id);
                    let liCloneMobile = Flits(".flits-refer-friend-transcation-mobile-table .flits-credit-table-item-mobile-template").clone();
                    liCloneMobile.removeClass("flits-credit-table-item-mobile-template");
                    liCloneMobile.attr("data-flits-store-credit-no", logItem.id);
                    let credits = logItem.credits;
                    credits = '<span class="flits-crdr-sign">+</span>' + Flits.formatMoney(Math.abs(credits), Flits.money_format);
                    let referrerName = Flits.t("Flits.locals.refer_friend_page.customer_deleted", "Customer Deleted");
                    let referrerEmail = "--";
                    if (logItem["referrer_customer"] != null) {
                        referrerName = logItem["referrer_customer"].name;
                        referrerEmail = logItem["referrer_customer"].email;
                    }
                    referrerName == "--" ? (referrerName = Flits.t("Flits.locals.refer_friend_page.customer_deleted", "Customer Deleted")) : (referrerName = referrerName);
                    referrerEmail == "--" ? (referrerEmail = Flits.t("Flits.locals.refer_friend_page.customer_deleted", "Customer Deleted")) : (referrerEmail = referrerEmail);
                    liClone.find(".flits-referral-customer-credit").html(credits);
                    liClone.find(".flits-referral-customer-name").html(referrerName).attr("data-tippy-content", referrerName);
                    liClone.find(".flits-referral-customer-email").html(referrerEmail).attr("data-tippy-content", referrerEmail);
                    liClone.find(".flits-referral-customer-credit-date").html(logItem.created_at);
                    liCloneMobile.find(".flits-referral-customer-credit").html(credits);
                    liCloneMobile.find(".flits-referral-customer-name").html(referrerName);
                    liCloneMobile.find(".flits-referral-customer-email").html(referrerEmail);
                    liCloneMobile.find(".flits-referral-customer-credit-date").html(logItem.created_at);
                    Flits(".flits-refer-friend-transcation-table .flits-credit-table-body").append(liClone);
                    Flits(".flits-refer-friend-transcation-mobile-table .flits-credit-table-body").append(liCloneMobile);
                    if (log.length - 1 == logIndex) {
                        Flits.dispatchEvent("Flits:referCredit:ListSuccessful");
                    }
                });
            } else {
                setTimeout(function () {
                    Flits(".flits-refer-friend-container").removeClass("flits-hide");
                    Flits(".flits-refer-friend-transcation-table, .flits-refer-friend-transcation-mobile-table").addClass("flits-hide");
                    Flits(".flits-refer-friend-empty").removeClass("flits-hide");
                    Flits(".flits-refer-friend-loader").hide();
                    Flits.dispatchEvent("Flits:referContainer:Display");
                }, 700);
            }
        }
        Flits(document).on("click", ".flits-copy-btn", function () {
            Flits.copyClipBoardCode(this);
            flitsSnackbar.show({ text: Flits.t("Flits.locals.refer_friend_page.referral_link_copied", "Link Copied"), pos: "bottom-center", showAction: false, customClass: "flits-alert-default", duration: 1500 });
        });
        Flits(document).on("click", ".flits-share-btn", function (event) {
            let platform = Flits(this).attr("data-flits-share-platform");
            let referralLink = Flits('input[name="referral link"]').val();
            let facebookDescription = encodeURIComponent(
                unescape(
                    Flits.t("Flits.locals.refer_friend_page.referral_program_invitation_message", "You can earn credit for creating an account with {{ shop_name }}. Use this link and get rewarded : {{ link }}")
                        .replace("{{ link }}", "")
                        .replace("{{ shop_name }}", Flits.shop_name)
                )
            );
            let encodedDescription = encodeURIComponent(
                unescape(
                    Flits.t("Flits.locals.refer_friend_page.referral_program_invitation_message", "You can earn credit for creating an account with {{ shop_name }}. Use this link and get rewarded : {{ link }}")
                        .replace("{{ link }}", referralLink)
                        .replace("{{ shop_name }}", Flits.shop_name)
                )
            );
            let description = Flits.t("Flits.locals.refer_friend_page.referral_program_invitation_message", "You can earn credit for creating an account with {{ shop_name }}. Use this link and get rewarded : {{ link }}")
                .replace("{{ link }}", referralLink)
                .replace("{{ shop_name }}", Flits.shop_name);
            let url = null;
            switch (platform) {
                case "facebook":
                    url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(unescape(referralLink)) + "&quote=" + facebookDescription;
                    break;
                case "whatsapp":
                    url = "https://api.whatsapp.com/send?text=" + encodedDescription;
                    break;
                case "navigator_share":
                    var data = { title: "Refer Freind", text: description };
                    let sharePromise = navigator.share(data);
                    return true;
                    break;
                default:
                case "facebook":
                    break;
            }
            if (url) {
                Flits.popupWindow(url, platform.charAt(0).toUpperCase() + platform.slice(1) + " Share", window, 700, 700);
            }
        });
        let data = Flits.referCredit.settings.data;
        let notApplicablereferRuleCount = 0;
        if (data.status) {
            let referTotalNumberRule = Flits(".flits-rule-card[data-flits-referrals-total-number]");
            Flits.each(referTotalNumberRule, function (index, item) {
                let columnValue = parseInt(Flits(item).attr("data-flits-referrals-total-number"));
                if (data.reached_referral_limit > columnValue) {
                    Flits(item).removeClass("flits-rule-earned");
                    Flits(item).addClass("flits-rule-not-applicable");
                    Flits(item).find(".flits-unlock-badge").html(Flits.t("Flits.locals.how_to_earn_credit_page.rule_not_applicable", "*Not Applicable"));
                    notApplicablereferRuleCount++;
                }
            });
            if (notApplicablereferRuleCount > 0) {
                Flits(".flits-refer-friend-not-applicable-note").removeClass("flits-hide");
            }
            updateReferCredit(data);
        } else {
            switch (data.error_code) {
                case 2:
                case 3:
                    break;
                default:
                    setTimeout(function () {
                        Flits(".flits-refer-friend-container").removeClass("flits-hide");
                        Flits(".flits-refer-friend-transcation-table, .flits-refer-friend-transcation-mobile-table").addClass("flits-hide");
                        Flits(".flits-refer-friend-empty").removeClass("flits-hide");
                        Flits(".flits-refer-friend-loader").hide();
                        Flits.dispatchEvent("Flits:referContainer:Display");
                    }, 700);
                    break;
            }
        }
    });
    var changePassword = (Flits.changePassword = function (options) {
        Flits.changePassword.settings = {};
        var settings = { passwordMatch: false };
        settings = Flits.extend(Flits.changePassword.settings, settings, options);
        Flits.dispatchEvent("Flits:changePassword:Loaded", { settings: settings });
        Flits(document).on("keyup", ".flits-form-change-password input[name=password]", function () {
            let parentSelector = Flits(this).parents(".flits-form-change-password");
            Flits(parentSelector).find(".flits-change-password-error").html("");
            Flits(parentSelector).find("input[name=password]").removeClass("flits-input-error");
            let inputLength = Flits(this).val().length;
            if (inputLength >= 6 && inputLength <= 40) {
                Flits(parentSelector).find(".flits-password-hint").hide();
            } else {
                Flits(parentSelector).find(".flits-password-hint").show();
            }
        });
        Flits(".flits-form-change-password input[name=password]").on("focus", function () {
            let parentSelector = Flits(this).parents(".flits-form-change-password");
            Flits(parentSelector).find(".flits-password-hint").show();
            Flits(parentSelector).find(".flits-password-hint").css("opacity", 1);
        });
        Flits(".flits-form-change-password input[name=password]").on("blur", function () {
            let parentSelector = Flits(this).parents(".flits-form-change-password");
            Flits(parentSelector).find(".flits-password-hint").hide();
            Flits(parentSelector).find(".flits-password-hint").css("opacity", 0);
        });
        Flits(document).on("keyup", ".flits-form-change-password input[name=password_confirmation]", function () {
            let parentSelector = Flits(this).parents(".flits-form-change-password");
            Flits(parentSelector).find(".flits-change-password-error").html("");
            Flits(parentSelector).find("input[name=password_confirmation]").removeClass("flits-input-error");
            let inputLength = Flits(this).val().length;
            if (inputLength >= 6 && inputLength <= 40) {
                Flits(parentSelector).find(".flits-confirm-password-hint").hide();
            } else {
                Flits(parentSelector).find(".flits-confirm-password-hint").show();
            }
        });
        Flits(".flits-form-change-password input[name=password_confirmation]").on("focus", function () {
            let parentSelector = Flits(this).parents(".flits-form-change-password");
            Flits(parentSelector).find(".flits-confirm-password-hint").show();
            Flits(parentSelector).find(".flits-confirm-password-hint").css("opacity", 1);
        });
        Flits(".flits-form-change-password input[name=password_confirmation]").on("blur", function () {
            let parentSelector = Flits(this).parents(".flits-form-change-password");
            Flits(parentSelector).find(".flits-confirm-password-hint").hide();
            Flits(parentSelector).find(".flits-confirm-password-hint").css("opacity", 0);
        });
        Flits(".flits-change-pass-button").on("click", function () {
            let parentSelector = Flits(this).parents(".flits-form-change-password");
            let password = Flits(parentSelector).find("input[name=password]")[0];
            let confirm_password = Flits(parentSelector).find("input[name=password_confirmation]")[0];
            let formSubmit = true;
            Flits(parentSelector).find(".flits-password-hint").hide();
            Flits(parentSelector).find(".flits-confirm-password-hint").hide();
            if (password.value.length == 0 || confirm_password.value.length == 0) {
                formSubmit = false;
                Flits(parentSelector).find(".flits-change-password-error").html(Flits.t("Flits.locals.update_password_page.password_empty_message", "The password is empty"));
                if (password.value.length == 0) {
                    Flits(parentSelector).find("input[name=password]").addClass("flits-input-error");
                } else {
                    Flits(parentSelector).find("input[name=password_confirmation]").addClass("flits-input-error");
                }
            } else {
                if (password.value.length >= 6 && password.value.length <= 40) {
                    if (password.value !== confirm_password.value) {
                        formSubmit = false;
                        Flits(parentSelector).find(".flits-change-password-error").html(Flits.t("Flits.locals.update_password_page.password_not_match", "Passwords didn't match. Try again."));
                        Flits(parentSelector).find("input[name=password_confirmation]").addClass("flits-input-error");
                    }
                } else {
                    formSubmit = false;
                    Flits(parentSelector).find(".flits-change-password-error").html(Flits.t("Flits.locals.update_password_page.password_hint_message", "Password must be between 6 to 40 characters"));
                    Flits(parentSelector).find("input[name=password]").addClass("flits-input-error");
                }
                if (confirm_password.value.length >= 6 && confirm_password.value.length <= 40) {
                } else {
                }
            }
            if (formSubmit) {
                Flits(parentSelector).submit();
            }
        });
        Flits(".flits-form-change-password").submit(function (event) {
            event.preventDefault();
            var formSelector = Flits(this);
            let form = Flits(this);
            let params = form.serializeArray();
            let url = Flits.base_url + "/" + Flits.customer_id + form.attr("action");
            let method = form.attr("method");
            params.push({ name: "customer_hash", value: Flits.customerHash }, { name: "token", value: Flits.token });
            flitsSnackbar.show({ text: Flits.t("Flits.locals.update_password_page.updating_password", "Updating password..."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
            Flits.dispatchEvent("Flits:ChangesPassword:BeforeUpdate", { params: params });
            Flits.ajax({ method: method, url: url, data: params })
                .done(function (resp) {
                    if (resp.status) {
                        let popDom = Flits(".flits-change-password-popup").clone(true)[0];
                        Flits(popDom).removeClass("flits-template");
                        Flits(popDom)
                            .find(".flits-snackbar-body")
                            .html(
                                Flits.t("Flits.locals.update_password_page.password_updated_successfully", "Your password for account {{ email }} has been successfully updated").replace(
                                    "{{ email }}",
                                    "<br> <strong> " + Flits(".flits-profile-form").find("input[name=email]").val() + "</strong> <br>"
                                )
                            );
                        flitsSnackbar.show({ content: popDom, pos: "snackbar-center", showAction: false, container: Flits("body"), customClass: "flits-snackbar-overlay" });
                        let login_form = Flits("<form/>");
                        login_form.attr("action", "/account/login");
                        login_form.attr("method", "post");
                        login_form.attr("autocomplete", "off");
                        login_form.append('<input type="email" name="customer[email]" class="flits-hide" autocomplete="off" value="' + Flits(".flits-profile-form").find("input[name=email]").val() + '">');
                        login_form.append('<input type="hidden" name="checkout_url"  class="flits-hide" autocomplete="off" value="' + location.href + '">');
                        login_form.append('<input type="password" name="customer[password]"  class="flits-hide" autocomplete="off" value="' + Flits(formSelector).find("input[name=password]").val() + '">');
                        Flits("body").append(login_form);
                        form[0].reset();
                        login_form.submit();
                        Flits.dispatchEvent("Flits:ChangesPassword:Updated", { resp: resp });
                    } else {
                        flitsSnackbar.show({ text: resp.error, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    }
                })
                .fail(function (resp) {
                    flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                })
                .always(function () {});
            return false;
        });
    });
    Flits.extend({
        navigationFunc: function (elem) {
            Flits.dispatchEvent("Flits:navigation:Before", { el: elem });
            var el = elem.replace("#", "");
            if (Flits('a[href="' + elem + '"]').length == 0 || Flits("#flits_tab_" + el).length == 0 || Flits("#flits_mobile_tab_" + el).length == 0) {
                elem = Flits.AccountPage.settings.active_tab;
                el = elem.replace("#", "");
            }
            let newURL = location.href.split("#")[0];
            window.history.pushState("object", document.title, newURL + elem);
            Flits(".flits-menu-items .flits-menu-item").removeClass("flits-menu-active");
            Flits('.flits-menu-items .flits-menu-item a[href="#' + el + '"]')
                .parent()
                .addClass("flits-menu-active");
            Flits(".flits-account-box.flits-account-box-active, .flits-mobile-account-box.flits-account-box-active").removeClass("flits-account-box-active");
            Flits("#flits_tab_" + el + ", #flits_mobile_tab_" + el).addClass("flits-account-box-active");
            Flits.dispatchEvent("Flits:navigation:After", { el: elem });
            Flits.onResize(el);
        },
        flitsSnackbarHide: function () {
            setTimeout(
                function () {
                    if (flitsSnackbar.current === this) {
                        flitsSnackbar.current.style.opacity = 0;
                        flitsSnackbar.current.style.top = "-100px";
                        flitsSnackbar.current.style.bottom = "-100px";
                    }
                }.bind(flitsSnackbar.snackbar),
                1
            );
        },
        getRules: function () {
            let url = Flits.base_url + "/" + Flits.customer_id + "/get_rule";
            let params = { customer_hash: Flits.customerHash, token: Flits.token, theme_id: Flits.theme.id };
            Flits.ajax({ type: "POST", url: url, data: params })
                .done(function (resp) {
                    Flits.dispatchEvent("Flits:rulesGet:AjaxSuccessful", { resp: resp });
                    Flits.dispatchEvent("Flits:howToEarnCredit:AjaxSuccessful", { resp: resp });
                })
                .fail(function (resp) {})
                .always(function () {});
        },
        nestedSort: (prop1, prop2 = null, direction = "asc") => (e1, e2) => {
            const a = prop2 ? e1[prop1][prop2] : e1[prop1],
                b = prop2 ? e2[prop1][prop2] : e2[prop1],
                sortOrder = direction === "asc" ? 1 : -1;
            return a < b ? -sortOrder : a > b ? sortOrder : 0;
        },
        multiLanguage: function () {
            let translateLangArray = Flits("[data-flits-lang]").not("[data-flits-translation=true]");
            Flits.each(translateLangArray, function (index, value) {
                let translateKey = Flits(value).attr("data-flits-lang");
                let translateDefault = Flits(value).attr("data-flits-lang-default");
                let translateValue = Flits.t("Flits.locals." + translateKey, translateDefault);
                let str = Flits(value).html();
                str = Flits(value).html(str).text();
                str = str.replace(translateDefault, translateValue).trim();
                Flits(value).html(str);
                Flits(value).attr("data-flits-translation", true);
            });
        },
        getTimePicker: function (options) {
            var settings = { datetime: new Date(), hour: true, minute: true, second: true, ampm: true, hours12: true, svgClock: true };
            settings = Flits.extend(true, settings, options);
            let Hh;
            let Mm;
            let Ss;
            let ap;
            let formattedTime;
            Hh = settings.datetime.getHours();
            Mm = settings.datetime.getMinutes();
            Ss = settings.datetime.getSeconds();
            Mm = Mm < 10 ? "0" + Mm : Mm;
            ap = Hh >= 12 ? "PM" : "AM";
            if (settings.hours12) {
                Hh = Hh % 12;
                Hh = Hh ? Hh : 12;
            }
            Hh = Hh < 10 ? "0" + Hh : Hh;
            Ss = Ss < 10 ? "0" + Ss : Ss;
            settings.hour ? Hh : (Hh = "");
            settings.minute ? (Mm = ":" + Mm) : (Mm = "");
            settings.second ? (Ss = ":" + Ss) : (Ss = "");
            settings.hours12 ? (settings.ampm ? ap : (ap = "")) : (ap = "");
            formattedTime = Hh + Mm + Ss + " " + ap;
            let hourAngle = 30 * (settings.datetime.getHours() % 12) + settings.datetime.getMinutes() / 2;
            let minuteAngle = 6 * settings.datetime.getMinutes();
            let secondAngle = 6 * settings.datetime.getSeconds();
            Flits("#flits-hourhand")
                .attr("transform", "rotate(" + hourAngle + " 10 10)")
                .addClass(!settings.hour ? "flits-hide" : "");
            Flits("#flits-minutehand")
                .attr("transform", "rotate(" + minuteAngle + " 10 10)")
                .addClass(!settings.minute ? "flits-hide" : "");
            Flits("#flits-secondhand")
                .attr("transform", "rotate(" + secondAngle + " 10 10)")
                .addClass(!settings.second ? "flits-hide" : "");
            !settings.svgClock ? Flits(".flits-svg-clock").addClass("flits-hide") : "";
            return formattedTime;
        },
        flitsClock: function () {
            let date = new Date();
            let hourAngle = 30 * (date.getHours() % 12) + date.getMinutes() / 2;
            let minuteAngle = 6 * date.getMinutes();
            let secondAngle = 6 * date.getSeconds();
            Flits("#flits-hourhand").attr("transform", "rotate(" + hourAngle + " 10 10)");
            Flits("#flits-minutehand").attr("transform", "rotate(" + minuteAngle + " 10 10)");
            Flits("#flits-secondhand").attr("transform", "rotate(" + secondAngle + " 10 10)");
        },
        productDomDisplay: function (data, selector, condtion) {
            if (condtion == 0) {
                let count = data.count;
                let products = data.data;
                let status = data.status;
                if (status && count > 0) {
                    products.forEach(domCloneFunction);
                }
            } else {
                if (data.length > 0) {
                    data.forEach(domCloneFunction);
                }
            }
            function domCloneFunction(item, index) {
                let appenSelector = Flits("." + selector);
                let clone_dom = Flits(".flits-product-card-template").clone();
                Flits(clone_dom).removeClass("flits-product-card-template");
                Flits(clone_dom).find(".flits-product-item-main").css("display", "none");
                let cloneskeleton_card = Flits(".flits-skeleton-product-card-template").clone();
                cloneskeleton_card.removeClass("flits-skeleton-product-card-template");
                Flits(clone_dom).append(cloneskeleton_card);
                Flits(clone_dom)
                    .find(".flits-product-image-thumbnail")
                    .attr("href", "/products/" + item.product_handle);
                Flits(clone_dom)
                    .find(".flits-product-name")
                    .parent("a")
                    .attr("href", "/products/" + item.product_handle);
                if (condtion == 0) {
                    Flits(clone_dom).find(".flits-remove-product").removeClass("flits-hide");
                    Flits(clone_dom).addClass("flits-wishlist-card");
                    Flits(clone_dom).find(".flits-add-to-cart").attr("data-flits-add-action-from", "wishlist");
                } else {
                    Flits(clone_dom).find(".flits-remove-product").remove();
                    Flits(clone_dom).addClass("flits-recently-view-card");
                    Flits(clone_dom).find(".flits-add-to-cart").attr("data-flits-add-action-from", "recentlyView");
                }
                Flits(clone_dom).find(".flits-add-to-cart").attr("data-flits-add-cart-text", Flits.t("Flits.locals.buttons.add_to_cart", "Add to Cart"));
                Flits(clone_dom).find(".flits-add-to-cart").attr("data-flits-sold-text", Flits.t("Flits.locals.buttons.sold_out", "Sold Out"));
                Flits(clone_dom).attr("data-flits-product-handle", item.product_handle);
                Flits(clone_dom).attr("data-flits-product-id", item.product_id);
                Flits(appenSelector).append(clone_dom);
            }
            var temp_element = Flits("." + selector + " .flits-product-item-card");
            temp_element.each(function (e, v) {
                Flits.getProductData(v);
                if (e == temp_element.length - 1) {
                    if (condtion == 1) {
                        Flits.dispatchEvent("Flits:recentlyDataBind:Successful");
                    } else {
                        Flits.dispatchEvent("Flits:WishlistDataBind:Successful");
                    }
                }
            });
        },
        getProductData: function (item) {
            var itemDom = item;
            let handle = Flits(item).attr("data-flits-product-handle");
            function ajaxCallPromise(url) {
                return Flits.ajax({
                    type: "GET",
                    url: url,
                    xhr: function () {
                        return (this._xhr_url = Flits.ajaxSettings.xhr());
                    },
                });
            }
            function getProductDataSuccess(resp) {
                fillProductData(resp);
                Flits.dispatchEvent("Flits:getShopifyProductData:complete", { handle: handle, resp: resp, item: item, status: true });
            }
            function firstTimeAjaxFail(resp) {
                var is_wishlist_data = false;
                Flits(item).hasClass("flits-wishlist-card") ? (is_wishlist_data = true) : is_wishlist_data;
                checkForProductHandleUpdate(handle, item, is_wishlist_data);
                Flits.dispatchEvent("Flits:getShopifyProductData:complete", { handle: handle, resp: resp, item: item, status: false });
            }
            function checkForProductHandleUpdate(handle, item, is_wishlist_data) {
                function productHandleChangedSuccess(productPageHtmlResponse) {
                    let url = this._xhr_url.responseURL;
                    function setupUpdatedProductHandleDataSuccess(resp) {
                        let new_handle = resp.product.handle;
                        Flits(item).attr("data-flits-product-handle", new_handle);
                        getProductDataSuccess(resp);
                        if (is_wishlist_data) {
                            Flits.Wishlist.settings.replaceWishlistProduct(handle, resp.product);
                        } else {
                            Flits.recentlyView.settings.replaceHandle(handle, new_handle);
                        }
                    }
                    ajaxCallPromise(url + ".json").done(setupUpdatedProductHandleDataSuccess);
                }
                function productHandleChangedFail(resp) {
                    if (is_wishlist_data) {
                        fillUnavailableProductData(handle, item);
                    } else {
                        Flits(item).remove();
                        Flits.recentlyView.settings.removeHandle(handle);
                    }
                }
                ajaxCallPromise("/products/" + handle)
                    .done(productHandleChangedSuccess)
                    .fail(productHandleChangedFail);
            }
            ajaxCallPromise("/products/" + handle + ".json")
                .done(getProductDataSuccess)
                .fail(firstTimeAjaxFail);
            function fillUnavailableProductData(handle, itemDom) {
                var product = Flits.Wishlist.settings.flitsGetProductDetailsFromWishlistResponse(handle);
                let image = "https://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c.gif";
                product.product_image != null && (image = product.product_image);
                Flits(itemDom).find(".flits-product-image-thumbnail img").attr("src", image);
                Flits(itemDom).find(".flits-product-item a").removeAttr("href");
                Flits(itemDom).find(".flits-product-name").html(product.product_title);
                Flits(itemDom).find(".flits-product-name").attr("data-tippy-content", product.product_title);
                Flits(itemDom)
                    .find(".flits-product-price")
                    .html(Flits.formatMoney(Math.abs(0 * 100), Flits.money_format));
                Flits(itemDom).find(".flits-remove-product").attr("data-flits-product-id", product.product_id);
                Flits(itemDom).find(".flits-remove-product").attr("data-flits-product-title", product.product_title);
                Flits(itemDom).find(".flits-remove-product").attr("data-flits-product-handle", product.product_handle);
                Flits(itemDom).find(".flits-add-to-cart").addClass("flits-secondary-btn flits-unavailable-btn").removeClass("flits-primary-btn flits-add-to-cart");
                Flits(itemDom).find(".flits-unavailable-btn").attr("data-remove", product.product_id);
                Flits(itemDom).find(".flits-unavailable-btn").attr("data-flits-unavailable-text", Flits.t("Flits.locals.buttons.product_unavailable_text", "Currently Unavailable"));
                let product_unavailable_text = Flits(itemDom).find(".flits-unavailable-btn").attr("data-flits-unavailable-text");
                Flits(itemDom).find(".flits-unavailable-btn").attr("disabled", !0);
                Flits(itemDom).find(".flits-unavailable-btn").text(product_unavailable_text);
                Flits(itemDom).find(".flits-product-skeleton-card").remove();
                Flits(itemDom).addClass("flits-unavailable-product");
                Flits(itemDom).find(".flits-product-item-main").css("display", "block");
            }
            function fillProductData(response) {
                let product = response.product;
                let image = "https://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c.gif";
                if (product.image != null) {
                    image = product.image.src;
                }
                let extidx = image.lastIndexOf(".");
                let extension = image.substr(extidx);
                image = image.replace(extension, "_200x_crop_center" + extension);
                Flits(itemDom).find("img").attr("src", image);
                let variantPriceValue = 0;
                product.variants.forEach(function (variant, variantIndex) {
                    let variantPrice = Flits.formatMoney(Math.abs(variant.price * 100), Flits.money_format);
                    let variantTitle = variant.title;
                    var optionElement = Flits("<option/>");
                    if (product.variants.length == 1 && variantTitle == "Default Title") {
                        optionElement.html(variantTitle);
                        optionElement.attr("value", variant.id);
                        optionElement.attr("data-flits-variant-price", variantPrice);
                        Flits(itemDom).find(".flits-select-row").css("visibility", "hidden");
                    } else {
                        optionElement.html(variantTitle);
                        optionElement.attr("value", variant.id);
                        optionElement.attr("data-flits-variant-price", variantPrice);
                    }
                    Flits.ajax({
                        type: "GET",
                        url: location.origin + "/products/" + product.handle + "?view=flits_product_variant_data&variant=" + variant.id,
                        success: function (resp) {
                            let parser = new DOMParser();
                            let htmlDoc = parser.parseFromString(resp, "text/html");
                            let response = JSON.parse(Flits(htmlDoc).text());
                            if (!response.variant_available) {
                                optionElement.html(variantTitle + " - " + Flits.t("Flits.locals.buttons.sold_out", "Sold Out"));
                                let selectedText = Flits(itemDom).find(".flits-variant-select option:selected").text();
                                if (selectedText.indexOf(Flits.t("Flits.locals.buttons.sold_out", "Sold Out")) != -1) {
                                    let sold_out_text = Flits(itemDom).find(".flits-add-to-cart").attr("data-flits-sold-text");
                                    Flits(itemDom).find(".flits-add-to-cart").addClass("flits-btn-danger");
                                    Flits(itemDom).find(".flits-add-to-cart").attr("disabled", true);
                                    Flits(itemDom).find(".flits-add-to-cart").text(sold_out_text);
                                    Flits(itemDom).find(".flits-product-quantity").addClass("flits-disabled");
                                }
                            }
                            if (response.variant_available && response.inventory_management == "shopify" && response.inventory_quantity > 0) {
                                optionElement.attr("data-flits-inventory-quantity", response.inventory_quantity);
                            }
                            let selectedVariant = Flits(itemDom).find(".flits-variant-select option:selected").attr("data-flits-inventory-quantity");
                            Flits(itemDom).find('.flits-product-quantity [name="product_quantity_input"]').attr("max", selectedVariant);
                        },
                        error: function () {},
                    })
                        .done(function (resp) {})
                        .fail(function (resp) {})
                        .always(function () {});
                    if (variantPriceValue <= 0) {
                        variantPriceValue = variantPrice;
                    }
                    Flits(itemDom).find(".flits-variant-select").append(optionElement);
                });
                Flits(itemDom).find(".flits-product-price").html(variantPriceValue);
                Flits(itemDom).find(".flits-product-name").text(product.title);
                Flits(itemDom).find(".flits-product-name").attr("data-tippy-content", product.title);
                Flits(itemDom).find(".flits-remove-product").attr("data-flits-product-id", product.id);
                Flits(itemDom).find(".flits-remove-product").attr("data-flits-product-title", product.title);
                Flits(itemDom).find(".flits-remove-product").attr("data-flits-product-handle", product.handle);
                Flits(itemDom).find(".flits-add-to-cart").attr("data-remove", product.id);
                Flits(itemDom).find(".flits-product-skeleton-card").remove();
                Flits(itemDom).find(".flits-product-item-main").css("display", "block");
            }
        },
        variantOnChange: function (evt) {
            let variantPrice = Flits("option:selected", evt).attr("data-flits-variant-price");
            let inventoryQuantity = Flits("option:selected", evt).attr("data-flits-inventory-quantity");
            let selectedVariantText = Flits("option:selected", evt).text();
            Flits(evt).parents(".flits-product-card").find('.flits-product-quantity input[name="product_quantity_input"]').val(1);
            inventoryQuantity == undefined
                ? Flits(evt).parents(".flits-product-card").find('.flits-product-quantity input[name="product_quantity_input"]').removeAttr("max")
                : Flits(evt).parents(".flits-product-card").find('.flits-product-quantity input[name="product_quantity_input"]').attr("max", inventoryQuantity);
            Flits(evt).parents(".flits-product-card").find(".flits-product-price").html(variantPrice);
            let addCartBtnText = "";
            let addCartBtn = Flits(evt).parents(".flits-product-card").find(".flits-add-to-cart");
            let quantityBtn = Flits(evt).parents(".flits-product-card").find(".flits-product-quantity");
            if (selectedVariantText.indexOf(Flits.t("Flits.locals.buttons.sold_out", "Sold Out")) != -1) {
                addCartBtnText = addCartBtn.attr("data-flits-sold-text");
                addCartBtn.attr("disabled", true);
                addCartBtn.addClass("flits-btn-danger");
                quantityBtn.addClass("flits-disabled");
            } else {
                addCartBtnText = addCartBtn.attr("data-flits-add-cart-text");
                addCartBtn.attr("disabled", false);
                addCartBtn.removeClass("flits-btn-danger");
                quantityBtn.removeClass("flits-disabled");
            }
            addCartBtn.text(addCartBtnText);
        },
        productQuntityAdjust: function (evt) {
            let el = evt;
            let quantitySelector = Flits(el).parents(".flits-product-quantity").find('input[name="product_quantity_input"]');
            let maxLimit = parseInt(Flits(el).parents(".flits-product-quantity").find('input[name="product_quantity_input"]').attr("max"));
            let qty = parseInt(quantitySelector.val());
            qty = validateQuantity(qty);
            let qtyMin = 1;
            if (Flits(el).attr("data-flits-qty-btn") == "plus") {
                if (maxLimit) {
                    if (maxLimit > qty) {
                        qty = qty + 1;
                    } else {
                        flitsSnackbar.show({
                            text: Flits.t("Flits.locals.general.cant_add_more_quantity", "You have reached the maximum limit. You cannot add any more items."),
                            pos: "bottom-center",
                            showAction: false,
                            customClass: "flits-alert-error",
                        });
                    }
                } else {
                    qty = qty + 1;
                }
            } else {
                qty = qty <= qtyMin ? qtyMin : qty - 1;
            }
            function validateQuantity(qty) {
                if (parseFloat(qty) == parseInt(qty) && !isNaN(qty)) {
                    return qty;
                } else {
                    return 1;
                }
            }
            quantitySelector.val(qty);
        },
        addToCart: function (params) {
            flitsSnackbar.show({ text: Flits.t("Flits.locals.cart_page.adding_items_to_cart", "Adding items to cart..."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default", duration: false });
            Flits.ajax({ type: "POST", url: "/cart/add.js", data: params, dataType: "json" })
                .done(function (resp) {
                    Flits.flitsSnackbarHide();
                    location.href = "/cart";
                })
                .fail(function (resp) {
                    flitsSnackbar.show({ text: resp.responseJSON.description, pos: "bottom-center", showAction: false, customClass: "flits-alert-error" });
                })
                .always(function () {});
        },
        loaderHide: function (selector) {
            Flits(selector).fadeOut(700);
        },
        loaderShow: function (selector) {
            Flits(selector).fadeIn();
        },
        setTemplateColor: function (colorOptions) {
            let colors = colorOptions;
            document.documentElement.style.setProperty("--navigationBGColor", colors.navigationBGColor);
            document.documentElement.style.setProperty("--navigationBorderColor", colors.navigationBorderColor);
            document.documentElement.style.setProperty("--navigationTextColor", colors.navigationTextColor);
            document.documentElement.style.setProperty("--navigationHoverBGColor", Flits.lightOrDark(colors.navigationBGColor));
            document.documentElement.style.setProperty("--contentBGColor", colors.contentBGColor);
            document.documentElement.style.setProperty("--contentTextColor", colors.contentTextColor);
            document.documentElement.style.setProperty("--primaryButtonBGColor", colors.primaryButtonBGColor);
            document.documentElement.style.setProperty("--primaryButtonHoverBGColor", Flits.lightOrDark(colors.primaryButtonBGColor));
            document.documentElement.style.setProperty("--primaryButtonTextColor", colors.primaryButtonTextColor);
            document.documentElement.style.setProperty("--secondaryButtonBGColor", colors.secondaryButtonBGColor);
            document.documentElement.style.setProperty("--secondaryButtonTextColor", colors.secondaryButtonTextColor);
            document.documentElement.style.setProperty("--badgeBGColor", colors.badgeBGColor);
            document.documentElement.style.setProperty("--badgeTextColor", colors.badgeTextColor);
            document.documentElement.style.setProperty("--linkColor", colors.linkColor);
        },
        validatePhone: function (data) {
            if (new libphonenumber.parsePhoneNumber(data).isValid()) {
                return true;
            }
            return false;
        },
        isNumber: function (evt) {
            evt = evt ? evt : window.event;
            var charCode = evt.which ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        },
        validateEmail: function (data) {
            let testData = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (testData.test(data)) {
                return true;
            }
            return false;
        },
        validateUrl: function (data) {
            let testData = /\b((http|https):\/\/?)[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?))/g;
            if (testData.test(data)) {
                return true;
            }
            return false;
        },
        phoneNumberBind: function (selector) {
            Flits(selector).bind("paste", function () {
                let data = Flits(this).val();
                let dataFull = data.replace(/[^\w\s]/gi, "").replace(/ /g, "");
                Flits(this).val(dataFull);
            });
            Flits(selector).on("input", function () {
                let data = Flits(this).val();
                let dataFull = data.replace(/[^\w\s]/gi, "").replace(/ /g, "");
                Flits(this).val(dataFull);
            });
        },
        watchForHover: function () {
            let hasHoverClass = false;
            let hoverClass = "flits-has-hover";
            let container = ".flits-account-container";
            let lastTouchTime = 0;
            function enableHover() {
                if (new Date() - lastTouchTime < 500) return;
                if (hasHoverClass) return;
                Flits(container).addClass(hoverClass);
                hasHoverClass = true;
            }
            function disableHover() {
                if (!hasHoverClass) return;
                Flits(container).removeClass(hoverClass);
                hasHoverClass = false;
            }
            function updateLastTouchTime() {
                lastTouchTime = new Date();
            }
            Flits(document).on("touchstart", function () {
                updateLastTouchTime();
                disableHover();
            });
            Flits(document).on("mousemove", function () {
                enableHover();
            });
        },
        paginationDisabled: function (list, selector) {
            let isFirst = list.i == 1;
            let isLast = list.i > list.matchingItems.length - list.page;
            Flits(selector + " .flits-prev-btn[disabled], " + selector + " .flits-next-btn[disabled]").attr("disabled", false);
            if (isFirst) {
                Flits(selector + " .flits-prev-btn").attr("disabled", true);
            }
            if (isLast) {
                Flits(selector + " .flits-next-btn").attr("disabled", true);
            }
            if (list.matchingItems.length <= list.page) {
                Flits(selector).addClass("flits-hide");
            } else {
                Flits(selector).removeClass("flits-hide");
            }
        },
        setSelectorByValue: function (selector, value) {
            for (let i = 0, count = selector.options.length; i < count; i++) {
                const option = selector.options[i];
                if (value == option.value || value == option.innerHTML) {
                    selector.selectedIndex = i;
                    return i;
                }
            }
        },
        postLink: function (path, options) {
            options = options || {};
            const method = options["method"] || "post";
            const params = options["parameters"] || {};
            const form = document.createElement("form");
            form.setAttribute("method", method);
            form.setAttribute("action", path);
            for (const key in params) {
                const hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", params[key]);
                form.appendChild(hiddenField);
            }
            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
        },
        CountryProvinceSelector: function (country_domid, province_domid, options) {
            this.countryEl = document.getElementById(country_domid);
            this.provinceEl = document.getElementById(province_domid);
            this.provinceContainer = document.getElementById(options["hideElement"] || province_domid);
            this.countryEl.addEventListener("change", this.countryHandler.bind(this));
            this.initCountry();
            this.initProvince();
        },
        flitsNewCode: function (e) {
            Flits.services();
            Flits.dispatchEvent("Flits:AccountPage:BeforeVisible");
            Flits.navigationBind();
            Flits.extraPageBind();
            Flits.setTemplateColor(Flits.accountSettings.colorSettings);
            Flits.AccountPage(window.flitsObjects.accountPage);
            Flits.dispatchEvent("Flits:AccountPage:Visible");
        },
        flitsSplitArrayIntoChunks: function (arr, len) {
            var chunks = [],
                i = 0,
                n = arr.length;
            while (i < n) {
                chunks.push(arr.slice(i, (i += len)));
            }
            return chunks;
        },
        flitsOldCode: function () {
            var accountPageSections = [];
            var accountSettings = window.flitsObjects.accountPage.accountSettings;
            if (accountSettings.isAccountPageInJSON != undefined && accountSettings.sections != undefined) {
                if (accountSettings.isAccountPageInJSON && accountSettings.sections.length > 0) {
                    accountPageSections = accountSettings.sections;
                }
            }
            if (accountPageSections.length > 0) {
                var accountSectionAppended = false;
                var sectionsChunkSize = 5;
                var sectionParentElement = Flits(".flits-code-snippet").parent();
                Flits.flitsSplitArrayIntoChunks(accountPageSections, sectionsChunkSize).forEach(function (accountPageSection) {
                    Flits.get(
                        "/account?sections=" + accountPageSection.join(","),
                        function (resp) {
                            for (const [key, sectionHTMLContent] of Object.entries(resp)) {
                                if (sectionHTMLContent) {
                                    sectionParentElement.append(sectionHTMLContent);
                                }
                                if (!accountSectionAppended) {
                                    Flits(".flits-code-snippet").remove();
                                    sectionAppended = true;
                                }
                            }
                        },
                        "json"
                    );
                });
            } else {
                Flits(".flits-code-snippet")
                    .parent()
                    .load("/account?view=flits .flits-old-code-snippet", function () {
                        Flits(".flits-code-snippet").remove();
                        Flits(".flits-old-code-snippet").show();
                    });
            }
        },
        accountSettingAjax: function () {
            let url = Flits.base_url + "/theme/" + Flits.theme.id;
            let params = { customer_hash: Flits.customerHash, token: Flits.token };
            let header = { "x-flits-token": Flits.token, version: "2.0" };
            Flits.setTemplateColor(Flits.accountSettings.colorSettings);
            Flits.ajax({ method: "GET", header: header, url: url, data: params })
                .done(function (resp) {
                    Flits.setLocalStorage("account_status", resp);
                    Flits.setLocalStorage("account_status_update_at", new Date());
                    if (resp.status) {
                        Flits.accountSettings.flagSvgUrl = resp.flagSvgUrl;
                        Flits.setLocalStorage("flag_svg_url", Flits.accountSettings.flagSvgUrl);
                        Flits.flitsNewCode();
                    } else {
                        Flits.flitsOldCode();
                    }
                })
                .fail(function (resp) {
                    Flits.setLocalStorage("account_status", resp.responseJSON);
                    if (resp.status == 404) {
                        Flits.flitsOldCode();
                    }
                })
                .always(function () {});
        },
        isTouchEnabled: function () {
            return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        },
        birthdayCountDown: function () {
            if (Flits.AccountPage.settings.bdayInterval) {
                clearInterval(Flits.AccountPage.settings.bdayInterval);
            }
            let dob = Flits("[data-flits-birthdate]").attr("data-flits-birthdate");
            if (dob) {
                let second = 1000;
                let minute = second * 60;
                let hour = minute * 60;
                let day = hour * 24;
                let currentYear = new Date().getFullYear();
                let bDay = new Date(dob).getDate();
                bDay = bDay < 10 ? "0" + bDay : bDay;
                let bMonth = new Date(dob).getMonth() + 1;
                bMonth = bMonth < 10 ? "0" + bMonth : bMonth;
                let birthday = currentYear + "-" + bMonth + "-" + bDay;
                let countDown = new Date(birthday).getTime();
                Flits.AccountPage.settings.bdayInterval = setInterval(function () {
                    let now = new Date().getTime();
                    let distance = countDown - now;
                    if (distance < 0) {
                        birthday = currentYear + 1 + "-" + bMonth + "-" + bDay;
                        countDown = new Date(birthday).getTime();
                        distance = countDown - now;
                    }
                    let remainingDays = Math.floor(distance / day);
                    let remainingHours = Math.floor((distance % day) / hour);
                    let remainingMinutes = Math.floor((distance % hour) / minute);
                    let remainingSeconds = Math.floor((distance % minute) / second);
                    Flits.AccountPage.settings.dobCountDown = remainingDays;
                    if (!Flits.isNull(remainingDays)) {
                        if (Flits(".flits-birthday-rule-description").attr("data-flits-birthdate-count-text")) {
                            birthdayCountText = Flits(".flits-birthday-rule-description").attr("data-flits-birthdate-count-text");
                            birthdayCountText = birthdayCountText.replace("{{ days }}", remainingDays);
                            Flits(".flits-birthday-rule-description").html(birthdayCountText);
                        }
                    }
                }, 0);
            }
        },
        sameHeight: function (options) {
            var options = options || {};
            var row = options.row || null;
            var element = options.element || null;
            var container = options.container || null;
            if (container) {
                var heights = [];
                var selector = Flits(element);
                selector.each(function () {
                    Flits(this).height("auto");
                });
                selector.each(function () {
                    var height = Flits(this).height();
                    heights.push(height);
                });
                var maxHeight = Math.max.apply(null, heights);
                selector.each(function () {
                    Flits(this).height(maxHeight);
                });
            }
        },
        services: function (options) {
            Flits.services.settings = {};
            var settings = { customerSevices: null, recentlyViewService: null, wishlistService: null, topOrderService: null, rulesService: null, storeCreditService: null, referCreditService: null };
            settings = Flits.extend(Flits.services.settings, settings, options);
            Flits.services.settings.customerSevices = function (callBack) {
                Flits.ajax({ type: "GET", url: Flits.base_url + "/customer/get", contentType: "application/x-www-form-urlencoded", data: { customer_hash: Flits.customerHash, token: Flits.token, customer_id: Flits.customer_id } })
                    .done(function (resp) {
                        Flits.dispatchEvent("Flits:customer:AjaxSuccessful", { resp: resp });
                        if (callBack) {
                            callBack(resp);
                        }
                    })
                    .fail(function (resp) {
                        flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            };
            Flits.services.settings.recentlyViewService = function (handle, callBack) {
                let data = Flits.getLocalStorage(handle);
                if (callBack) {
                    callBack(data);
                }
            };
            Flits.services.settings.wishlistService = function (callBack) {
                Flits.ajax({ type: "GET", url: Flits.base_url + "/wishlist", data: { customer_id: Flits.customer_id, customer_hash: Flits.customerHash, token: Flits.token }, contentType: "application/x-www-form-urlencoded" })
                    .done(function (resp) {
                        Flits.dispatchEvent("Flits:Wishlist:AjaxSuccessful", { resp: resp });
                        if (callBack) {
                            callBack(resp);
                        }
                    })
                    .fail(function (resp) {
                        flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            };
            Flits.services.settings.topOrderService = function (callBack) {
                Flits.ajax({ type: "GET", url: Flits.base_url + "/" + Flits.customer_id + "/top_product_from_all_order", contentType: "application/x-www-form-urlencoded", data: { customer_hash: Flits.customerHash, token: Flits.token } })
                    .done(function (resp) {
                        Flits.dispatchEvent("Flits:topOrder:AjaxSuccessful", { resp: resp });
                        if (callBack) {
                            callBack(resp);
                        }
                    })
                    .fail(function (resp) {
                        flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            };
            Flits.services.settings.rulesService = function (callBack) {
                Flits.ajax({ type: "POST", url: Flits.base_url + "/" + Flits.customer_id + "/get_rule", data: { customer_hash: Flits.customerHash, token: Flits.token, theme_id: Flits.theme.id } })
                    .done(function (resp) {
                        Flits.dispatchEvent("Flits:rulesGet:AjaxSuccessful", { resp: resp });
                        Flits.dispatchEvent("Flits:howToEarnCredit:AjaxSuccessful", { resp: resp });
                        if (callBack) {
                            callBack(resp);
                        }
                    })
                    .fail(function (resp) {
                        flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            };
            Flits.services.settings.storeCreditService = function (callBack) {
                Flits.ajax({ method: "GET", url: Flits.base_url + "/" + Flits.customer_id + "/credit/get_credit", data: { customer_hash: Flits.customerHash, token: Flits.token } })
                    .done(function (resp) {
                        Flits.dispatchEvent("Flits:storeCredit:AjaxSuccessful", { resp: resp });
                        if (callBack) {
                            callBack(resp);
                        }
                    })
                    .fail(function (resp) {
                        flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            };
            Flits.services.settings.referCreditService = function (callBack) {
                Flits.ajax({ method: "GET", url: Flits.base_url + "/" + Flits.customer_id + "/refer_friend/get_referral_data", data: { customer_hash: Flits.customerHash, token: Flits.token } })
                    .done(function (resp) {
                        Flits.dispatchEvent("Flits:referCredit:AjaxSuccessful", { resp: resp });
                        if (callBack) {
                            callBack(resp);
                        }
                    })
                    .fail(function (resp) {
                        flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            };
            Flits.dispatchEvent("Flits:services:Loaded", { settings: settings });
        },
        navigationBind: function (options) {
            var settings = {
                navs: [
                    {
                        title: Flits.t("Flits.locals.navigation.profile", "My Profile"),
                        url: "#profile",
                        target: 0,
                        menuClass: null,
                        badge: null,
                        icon:
                            '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 16 15.94"><path id="Layer_2" data-name="Layer 2" d="M16,16h-.78A7.22,7.22,0,1,0,.78,16H0A8,8,0,0,1,7.93,7.93H8a8,8,0,0,1,8,8ZM11.52,3.55A3.52,3.52,0,1,0,8,7.1,3.52,3.52,0,0,0,11.52,3.55Zm-.79,0A2.73,2.73,0,1,1,8,.79,2.73,2.73,0,0,1,10.73,3.55Z" transform="translate(0 -0.06)" /></svg>',
                        isShow: 1,
                        loader: { desktop_class: "flits-without-boxshadow", mobile_class: "flits-without-boxshadow" },
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.delivery_address", "Delivery Address"),
                        url: "#address",
                        target: 0,
                        menuClass: null,
                        badge: '<span class="flits-menu-badge flits-badge flits-address-badge flits-menu-badge-hide">0</span>',
                        icon:
                            '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 13.15 15.87"><path id="Layer_2" data-name="Layer 2" d="M6.6,16,1.9,11.3a6.64,6.64,0,0,1,0-9.4h0a6.73,6.73,0,0,1,9.4.3,6.53,6.53,0,0,1,0,9ZM2.5,2.5a5.73,5.73,0,0,0,0,8.2l4.1,4.1,4.1-4.1a5.73,5.73,0,0,0,0-8.2A5.92,5.92,0,0,0,2.5,2.5ZM6.6,8.7a2,2,0,1,1,2-2A2,2,0,0,1,6.6,8.7Zm0-3.3A1.29,1.29,0,0,0,5.4,6.6,1.16,1.16,0,0,0,6.6,7.8,1.16,1.16,0,0,0,7.8,6.6h0A1.22,1.22,0,0,0,6.6,5.4Z" transform="translate(0.05 -0.13)" /></svg>',
                        isShow: 1,
                        loader: { desktop_class: "flits-without-boxshadow", mobile_class: "flits-without-boxshadow" },
                        body_html: null,
                    },
                    { divider_html: '<div class="flits-menu-divider"></div>', isShow: 1 },
                    {
                        title: Flits.t("Flits.locals.navigation.my_orders", "My Orders"),
                        url: "#order",
                        target: 0,
                        menuClass: null,
                        badge: '<span class="flits-menu-badge flits-badge flits-order-badge flits-menu-badge-hide">0</span>',
                        icon:
                            '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 14.48 16.12"><path id="Layer_2" data-name="Layer 2" d="M3.86,6.32a.84.84,0,0,1,.42-.73V3a3,3,0,1,1,5.89,0V5.59a.83.83,0,0,1,.43.73.84.84,0,1,1-1.26-.73V3A2.11,2.11,0,1,0,5.13,3V5.59a.84.84,0,0,1-.42,1.57A.86.86,0,0,1,3.86,6.32Zm8.36-3H11v.84h.49L13,12.63H2.19v.84h11l.3,1.69H1L3,4.21h.49V3.37H2.25L0,16H14.48ZM6,4.21H8.5V3.37H6Z" transform="translate(0 0.12)" /></svg>',
                        isShow: 1,
                        loader: null,
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.top_ordered_products", "Top Ordered Products"),
                        url: "#topOrder",
                        target: 0,
                        menuClass: null,
                        badge: null,
                        icon:
                            '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 19.89 15.98"><path id="Layer_2" data-name="Layer 2" d="M19.45.9H.45a.45.45,0,0,1,0-.9h19a.45.45,0,0,1,0,.9ZM14.9,5.48A.45.45,0,0,0,14.48,5H.45a.45.45,0,1,0,0,.9h14A.45.45,0,0,0,14.9,5.48ZM9.9,11a.45.45,0,0,0-.45-.45h-9a.45.45,0,0,0,0,.9h9A.45.45,0,0,0,9.9,11Zm-5,4.53a.45.45,0,0,0-.44-.45h-4a.45.45,0,0,0,0,.9h4a.45.45,0,0,0,.43-.43Z" transform="translate(0)" /></svg>',
                        isShow: Flits.Metafields.IS_ADVANCE_DASHBOARD_PAID && Flits.Metafields.IS_ADVANCE_DASHBOARD_ENABLE,
                        loader: { desktop_class: "flits-without-boxshadow", mobile_class: null },
                        body_html: null,
                    },
                    { divider_html: '<div class="flits-menu-divider"></div>', isShow: 1 },
                    {
                        title: Flits.t("Flits.locals.navigation.wishlist", "My Wishlist"),
                        url: "#wishlist",
                        target: 0,
                        menuClass: null,
                        badge: '<span class="flits-menu-badge flits-badge flits-wishlist-badge flits-menu-badge-hide">0</span>',
                        icon:
                            '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 18.45 16"><path id="Layer_2" data-name="Layer 2" d="M17.57,2.16A4.72,4.72,0,0,0,13.86,0h0c-2,0-3.77,1.52-4.58,2.36C8.42,1.52,6.67,0,4.65,0H4.6A4.72,4.72,0,0,0,.87,2.18a5.1,5.1,0,0,0,.65,6.48L8.8,15.82a.6.6,0,0,0,.85,0h0l7.27-7.16A5.1,5.1,0,0,0,17.57,2.16Zm-1.5,5.62L9.23,14.52,2.39,7.78A3.84,3.84,0,0,1,1.87,2.9,3.57,3.57,0,0,1,4.61,1.23h0c2.14,0,4.08,2.42,4.1,2.44a.64.64,0,0,0,.9.07l.06-.07s2-2.49,4.13-2.44a3.55,3.55,0,0,1,2.73,1.64A3.85,3.85,0,0,1,16,7.78Z" transform="translate(0)" /></svg>',
                        isShow: Flits.Metafields.IS_WISHLIST_PAID && Flits.Metafields.IS_WISHLIST_ENABLE,
                        loader: { desktop_class: null, mobile_class: null },
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.recently_viewed_products", "Recently Viewed"),
                        url: "#recentlyView",
                        target: 0,
                        menuClass: null,
                        badge: null,
                        icon:
                            '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 16.02 16.05"><path id="Layer_2" data-name="Layer 2" d="M6.14,8.58a4.81,4.81,0,0,1-3.8-2.25l-.09-.14L2.31,6A4.13,4.13,0,0,1,6.14,3.79,4.37,4.37,0,0,1,10.07,6l.08.17-.1.15A5.17,5.17,0,0,1,6.14,8.58ZM3,6.13A4.11,4.11,0,0,0,6.14,7.92,4.41,4.41,0,0,0,9.39,6.13,3.77,3.77,0,0,0,6.14,4.44,3.49,3.49,0,0,0,3,6.13ZM6.05,7.41A1.24,1.24,0,1,1,7.29,6.17h0A1.25,1.25,0,0,1,6.05,7.41Zm0-1.82a.58.58,0,1,0,.58.58h0A.58.58,0,0,0,6.05,5.59Zm9.82,9.66-5-5a6.05,6.05,0,0,0,1.54-4.06,6.22,6.22,0,1,0-2.16,4.68l5,5a.42.42,0,0,0,.3.12.44.44,0,0,0,.32-.74ZM6.19,11.5a5.32,5.32,0,1,1,5.33-5.32A5.32,5.32,0,0,1,6.19,11.5Z" transform="translate(0.03 0.06)" /></svg>',
                        isShow: Flits.Metafields.is_recently_view_enable,
                        loader: { desktop_class: null, mobile_class: null },
                        body_html: null,
                    },
                    { divider_html: '<div class="flits-menu-divider"></div>', isShow: Flits.Metafields.IS_WISHLIST_ENABLE || Flits.Metafields.is_recently_view_enable },
                    {
                        title: Flits.t("Flits.locals.navigation.store_credit", "My Credits"),
                        url: "#storeCredit",
                        target: 0,
                        menuClass: null,
                        badge: '<span class="flits-menu-badge flits-badge flits-credit-badge flits-menu-badge-hide">0</span>',
                        icon:
                            '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 16.01 16.01"><path id="Layer_2" data-name="Layer 2" d="M2.24,16a.87.87,0,0,1-.82-.58l-1.37-4a.86.86,0,0,1,.53-1.1h0l1.78-.6a.86.86,0,0,1,1.1.52h0l1.38,4a.88.88,0,0,1-.54,1.1L2.52,16A.87.87,0,0,1,2.24,16Zm.41-5.46-1.78.6,1.37,4L4,14.53l-1.37-4Zm2.26,4H4.28L3,10.71l.9-.79A3.91,3.91,0,0,1,6.28,8.28a3.92,3.92,0,0,1,3,.73h1.6l.09.05a2.06,2.06,0,0,1,.8.79l2-1.21A1.4,1.4,0,0,1,15.71,9l.06.09a1.5,1.5,0,0,1-.33,2l-3,2.21a7.69,7.69,0,0,1-2.61,1A39.43,39.43,0,0,1,4.91,14.54Zm0-.87h0a38.53,38.53,0,0,0,4.76-.22A7.29,7.29,0,0,0,12,12.63l2.94-2.19A.65.65,0,0,0,15,9.57a.54.54,0,0,0-.73-.23l-.06,0-2.28,1.38a1.51,1.51,0,0,1-1,1.26H7.82v-.86h2.87a.63.63,0,0,0,.38-.51V10.5a.88.88,0,0,0-.42-.64H9L8.89,9.8a3.15,3.15,0,0,0-2.45-.67,3,3,0,0,0-1.88,1.3l-.08.1L4,11ZM10.49,8a4,4,0,1,1,4-4A4,4,0,0,1,10.49,8Zm0-7.13A3.13,3.13,0,1,0,13.63,4,3.13,3.13,0,0,0,10.49.87h0ZM10.37,6V5.65A2.07,2.07,0,0,1,9.2,5.09l.35-.45a1.65,1.65,0,0,0,.82.45v-1a1.77,1.77,0,0,1-.78-.36.87.87,0,0,1-.25-.67,1,1,0,0,1,.28-.73A1.16,1.16,0,0,1,10.37,2V1.76h.31V2a1.85,1.85,0,0,1,1,.38l-.31.47a1.41,1.41,0,0,0-.68-.29v1h0a1.75,1.75,0,0,1,.8.38.83.83,0,0,1,.26.68,1,1,0,0,1-.29.73,1.2,1.2,0,0,1-.78.31V6ZM10,2.71A.36.36,0,0,0,9.92,3a.41.41,0,0,0,.09.28,1.16,1.16,0,0,0,.36.19v-.9A.5.5,0,0,0,10,2.71ZM11,5a.38.38,0,0,0,.13-.3.39.39,0,0,0-.1-.29,1,1,0,0,0-.39-.19V5.1A.65.65,0,0,0,11,5Z" transform="translate(0)" /></svg>',
                        isShow: Flits.Metafields.IS_STORE_CREDIT_PAID && Flits.Metafields.is_store_credit_enable,
                        loader: { desktop_class: "flits-store-credit-module-loader", mobile_class: "flits-store-credit-module-loader" },
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.how_to_earn_credit", "How to Earn"),
                        url: "#howToEarn",
                        target: 0,
                        menuClass: null,
                        badge: null,
                        icon:
                            '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 18.53 15.94"><path id="Layer_2" data-name="Layer 2" d="M8.76,16C5,16,2.43,14.93,1.11,12.83A9.75,9.75,0,0,1,0,7.54V7.33C0,5.89,0,4.25,1.28,3s4-2,8.08-1.93a.45.45,0,0,1,.45.45v0A.46.46,0,0,1,9.35,2h0c-3.8-.07-6.22.49-7.41,1.66-1,1-1,2.29-1,3.58h0c1.79,1.74,3.08,3,8.41,3,3.53,0,7-1.49,8.37-2.89a.49.49,0,0,1,.54-.09.47.47,0,0,1,.25.48c0,.28-.06.58-.08.91C18.21,11.57,17.89,16,8.76,16ZM.94,8.52a7.57,7.57,0,0,0,1,3.82c1.06,1.81,3.4,2.73,6.82,2.73,8.11,0,8.53-3.62,8.73-6.35a15.1,15.1,0,0,1-8.14,2.44C4.31,11.16,2.57,10,.94,8.52Zm14.21-2h.05l.13-.09h0l2.3-2.31a.46.46,0,0,0,0-.65.47.47,0,0,0-.66,0L15.37,5.1V.46a.47.47,0,0,0-.93,0V4.89L13,3.49a.47.47,0,0,0-.66,0,.46.46,0,0,0,0,.65l2.13,2.13a.41.41,0,0,0,.16.16h0a.46.46,0,0,0,.33.13.32.32,0,0,0,.19,0ZM8.51,8.65v-.5A2.72,2.72,0,0,1,7,7.4l.46-.6a2.16,2.16,0,0,0,1.1.6V6.07a2.57,2.57,0,0,1-1-.49,1.16,1.16,0,0,1-.33-.9,1.31,1.31,0,0,1,.38-1,1.5,1.5,0,0,1,1-.42V3H9v.3a2.51,2.51,0,0,1,1.31.52l-.41.63A1.92,1.92,0,0,0,9,4V5.34H9a2.47,2.47,0,0,1,1,.51,1.2,1.2,0,0,1,.34.91,1.27,1.27,0,0,1-.4,1,1.54,1.54,0,0,1-1,.42v.49ZM8.06,4.21a.53.53,0,0,0-.16.39A.48.48,0,0,0,8,5a1.14,1.14,0,0,0,.48.26V4A.77.77,0,0,0,8.06,4.21Zm1.34,3a.51.51,0,0,0,.17-.4.52.52,0,0,0-.13-.38,1.3,1.3,0,0,0-.52-.27V7.42a.87.87,0,0,0,.48-.19Z" transform="translate(0.03 -0.06)" /></svg>',
                        isShow: Flits.Metafields.IS_STORE_CREDIT_PAID && Flits.Metafields.is_store_credit_enable && Flits.Metafields.IS_HOW_TO_EARN_CREDIT_DISPLAY,
                        loader: { desktop_class: "flits-how-to-earn-module-loader", mobile_class: "flits-how-to-earn-module-loader" },
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.how_to_spend_credit", "How to Spend"),
                        url: "#howToSpend",
                        target: 0,
                        menuClass: null,
                        badge: null,
                        icon:
                            '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 18.54 16"><path id="Layer_2" data-name="Layer 2" d="M8.76,16C5,16,2.43,14.92,1.11,12.79A10,10,0,0,1,0,7.42V7.21C0,5.74,0,4.09,1.28,2.8s4-2,8.08-2a.46.46,0,0,1,.45.47h0a.47.47,0,0,1-.46.46h0c-3.8,0-6.22.5-7.41,1.68-1,1-1,2.33-1,3.64h0c1.79,1.77,3.09,3,8.41,3,3.53,0,7-1.51,8.37-2.93a.47.47,0,0,1,.54-.09.49.49,0,0,1,.25.48c0,.29-.06.6-.08.92C18.21,11.51,17.89,16,8.76,16ZM.94,8.42a7.64,7.64,0,0,0,1,3.87c1.06,1.84,3.4,2.77,6.82,2.77,8.11,0,8.53-3.67,8.73-6.44a14.93,14.93,0,0,1-8.14,2.47C4.31,11.09,2.57,10,.94,8.42ZM15.32,5.78V1.45L17,3.14a.47.47,0,0,0,.66,0,.48.48,0,0,0,0-.67L15.34.14a.45.45,0,0,0-.64,0l0,0L14.62.2a.46.46,0,0,0-.17.17l-2.07,2.1a.48.48,0,0,0,0,.67.46.46,0,0,0,.65,0l1.36-1.37v4a.47.47,0,1,0,.93,0Zm-6.8,3v-.5A2.64,2.64,0,0,1,7,7.5l.45-.6a2.18,2.18,0,0,0,1.08.6V6.16a2.41,2.41,0,0,1-1-.48,1.19,1.19,0,0,1-.33-.9,1.31,1.31,0,0,1,.38-1,1.45,1.45,0,0,1,1-.42V3H9V3.4a2.48,2.48,0,0,1,1.3.52l-.41.63A1.84,1.84,0,0,0,9,4.15V5.44H9a2.44,2.44,0,0,1,1.05.5,1.19,1.19,0,0,1,.34.92,1.3,1.3,0,0,1-.39,1,1.48,1.48,0,0,1-1,.41v.5ZM8.08,4.31a.53.53,0,0,0-.16.39.48.48,0,0,0,.13.36,1.16,1.16,0,0,0,.47.26V4.13A.74.74,0,0,0,8.08,4.31Zm1.32,3a.51.51,0,0,0,.17-.39.56.56,0,0,0-.14-.39,1.31,1.31,0,0,0-.51-.26V7.52a.88.88,0,0,0,.48-.2Z" transform="translate(0.03 0)" /></svg>',
                        isShow: Flits.Metafields.IS_STORE_CREDIT_PAID && Flits.Metafields.is_store_credit_enable && Flits.Metafields.IS_HOW_TO_EARN_CREDIT_DISPLAY,
                        loader: { desktop_class: "flits-how-to-spend-module-loader", mobile_class: "flits-how-to-spend-module-loader" },
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.from_admin", "From Store Owner"),
                        url: "#fromAdmin",
                        target: 0,
                        menuClass: null,
                        badge: null,
                        icon:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Outline" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve"> <path d="M16.5,7.7V4c0-0.2-0.2-0.4-0.4-0.4c-0.1,0-0.1,0-0.1,0L8,6.8H3.2c-0.8,0-1.5,0.4-2,1.1c-0.5,0.7-0.8,1.6-0.8,2.5  s0.3,1.8,0.8,2.5c0.5,0.6,1,1,1.7,1.1l1,6.9c0,0.2,0.2,0.3,0.4,0.3h2.2c0.2,0,0.4-0.2,0.4-0.4c0,0,0,0,0-0.1l-1-6.8H8l8,3.2  c0.2,0.1,0.4,0,0.5-0.2c0,0,0-0.1,0-0.1v-3.7c0.9-0.3,1.6-1.4,1.6-2.8S17.5,8,16.5,7.7z M1.2,10.5c0-1.4,0.7-2.5,1.6-2.8v5.5  C1.9,13,1.2,11.8,1.2,10.5z M6,20.6H4.6l-1-6.5H5L6,20.6z M7.7,13.3h-4V7.7h4V13.3z M15.7,16.3l-7.3-2.9V7.5l7.3-2.9V16.3z   M16.5,12.4V8.6c0.5,0.3,0.8,1,0.8,1.9S17,12.1,16.5,12.4z M24.2,10.1h-4.8c-0.2,0-0.4,0.2-0.4,0.4s0.2,0.4,0.4,0.4h4.8  c0.2,0,0.4-0.2,0.4-0.4S24.4,10.1,24.2,10.1z M19.4,6c0.1,0,0.1,0,0.1,0l4-1.6c0.2-0.1,0.3-0.3,0.2-0.5s-0.3-0.3-0.5-0.2l-4,1.6  C19,5.3,18.9,5.6,19,5.8C19,5.9,19.2,6,19.4,6z M23.5,16.6l-4-1.6c-0.2-0.1-0.4,0-0.5,0.2s0,0.4,0.2,0.5l4,1.6  c0.2,0.1,0.4,0,0.5-0.2S23.8,16.6,23.5,16.6z M19,8.1c0,0.2,0.2,0.3,0.4,0.3c0,0,0.1,0,0.1,0l2-0.4c0.2,0,0.4-0.3,0.3-0.5  c0-0.2-0.3-0.4-0.5-0.3l-2,0.4C19.1,7.7,18.9,7.9,19,8.1C19,8.1,19,8.1,19,8.1z M19.3,13.3l2,0.4c0,0,0.1,0,0.1,0  c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.4-0.3-0.4l-2-0.4c-0.2,0-0.4,0.1-0.5,0.3C18.9,13,19.1,13.3,19.3,13.3L19.3,13.3z"/> </svg>',
                        isShow: 0,
                        loader: { desktop_class: "flits-from-admin-module-loader", mobile_class: "flits-from-admin-module-loader" },
                        body_html: null,
                    },
                    { divider_html: '<div class="flits-menu-divider"></div>', isShow: Flits.Metafields.IS_STORE_CREDIT_PAID && Flits.Metafields.is_store_credit_enable },
                    {
                        title: Flits.t("Flits.locals.navigation.refer_friend", "Refer Friend"),
                        url: "#referFriend",
                        target: 0,
                        menuClass: null,
                        badge: null,
                        icon:
                            '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 16.62 16"><path id="Layer_2" data-name="Layer 2" d="M8.75,15.8H8.34v-.88h.07a5.87,5.87,0,0,0,6.38-4.57l-.11.09-.57-.66,1-.85.29-.24.31.27.91.9-.63.62-.27-.27A6.73,6.73,0,0,1,8.75,15.8ZM7.66,1.68l-.11.09.54.69,1-.81.31-.24-.22-.34L8.5,0,7.77.48,8,.8A6.81,6.81,0,0,0,1,6.91L1.46,7,1,6.9l.46.1H1.9A5.85,5.85,0,0,1,7.66,1.68ZM16,8a3.63,3.63,0,0,0-2.69-3.44h0a2.13,2.13,0,1,0-1.9,0h0A3.64,3.64,0,0,0,8.71,8v.44H16ZM11.63,5.42l.72-.19.71.19a2.76,2.76,0,0,1,2,2.16H9.63A2.78,2.78,0,0,1,11.63,5.42Zm2-2.76a1.24,1.24,0,0,1-.7,1.11l-.55.28-.56-.28a1.24,1.24,0,0,1-.7-1.11,1.26,1.26,0,0,1,2.51,0ZM7.28,15.55a3.64,3.64,0,0,0-2.63-3.41,2.11,2.11,0,0,0,1.13-1.87,2.14,2.14,0,0,0-4.27,0,2.11,2.11,0,0,0,1.13,1.87A3.64,3.64,0,0,0,0,15.55V16H7.29ZM2.93,13l.71-.2.72.2a2.76,2.76,0,0,1,2,2.15H.93A2.76,2.76,0,0,1,2.93,13Zm2-2.7a1.24,1.24,0,0,1-.7,1.11l-.56.28-.55-.28a1.24,1.24,0,0,1-.7-1.11,1.26,1.26,0,0,1,2.51,0Z" /></svg>',
                        isShow: Flits.Metafields.IS_STORE_CREDIT_PAID && Flits.Metafields.is_store_credit_enable && Flits.Metafields.IS_REFER_PROGRAM_ON,
                        loader: { desktop_class: "flits-refer-friend-module-loader", mobile_class: "flits-refer-friend-module-loader" },
                        body_html: null,
                    },
                    { divider_html: '<div class="flits-menu-divider"></div>', isShow: Flits.Metafields.IS_STORE_CREDIT_PAID && Flits.Metafields.is_store_credit_enable && Flits.Metafields.IS_REFER_PROGRAM_ON },
                    {
                        title: Flits.t("Flits.locals.navigation.change_password", "Change Password"),
                        url: "#changePassword",
                        target: 0,
                        menuClass: null,
                        badge: null,
                        icon:
                            '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 15.31 16.02"><path id="Layer_2" data-name="Layer 2" d="M13.74,16H1.57A1.57,1.57,0,0,1,0,14.43V8.15A1.57,1.57,0,0,1,1.57,6.58H13.74a1.57,1.57,0,0,1,1.57,1.57v6.28A1.57,1.57,0,0,1,13.74,16ZM1.57,7.36a.78.78,0,0,0-.78.78h0v6.28a.78.78,0,0,0,.78.78H13.74a.78.78,0,0,0,.79-.77h0V8.15a.79.79,0,0,0-.79-.79ZM11,7H4.32V3.4A3.41,3.41,0,0,1,5.47.84,3.23,3.23,0,0,1,8.06,0,3.41,3.41,0,0,1,11,3.47ZM5.11,6.18h5.1V3.47A2.66,2.66,0,0,0,8,.81a2.51,2.51,0,0,0-2,.61,2.65,2.65,0,0,0-.88,2ZM4,12.82a1.31,1.31,0,1,1,.23,0ZM4,11a.52.52,0,0,0-.52.52h0A.53.53,0,0,0,4,12a.52.52,0,0,0,.52-.52h0A.52.52,0,0,0,4,11Zm3.53,1.82a1.31,1.31,0,1,1,1.3-1.32s0,0,0,0a1.31,1.31,0,0,1-1.32,1.3h0Zm0-1.82a.52.52,0,0,0-.52.52H7a.52.52,0,0,0,.52.52h0A.53.53,0,0,0,8,11.52.52.52,0,0,0,7.48,11h0ZM11,12.82a1.31,1.31,0,1,1,.23,0ZM11,11a.52.52,0,0,0-.52.52h0A.53.53,0,0,0,11,12a.52.52,0,0,0,.52-.52h0A.52.52,0,0,0,11,11Z" transform="translate(0 0.02)" /></svg>',
                        isShow: 1,
                        loader: { desktop_class: "flits-without-boxshadow", mobile_class: null },
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.log_out", "Log Out"),
                        url: "/account/logout",
                        target: 0,
                        menuClass: null,
                        badge: null,
                        icon:
                            '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 16 16"><path id="Layer_2" data-name="Layer 2" d="M8,16A8,8,0,0,1,0,8,7.94,7.94,0,0,1,2.5,2.2a.45.45,0,0,1,.5,0,.45.45,0,0,1,0,.5A7.27,7.27,0,0,0,2.8,13a7.16,7.16,0,0,0,10.2.2A7.26,7.26,0,0,0,15.2,8a7.11,7.11,0,0,0-2.1-5.1.38.38,0,0,1,0-.6.38.38,0,0,1,.6,0A8.27,8.27,0,0,1,16,8,8,8,0,0,1,8,16Zm.3-8.2V.4C8.3.2,8.2,0,8,0a.43.43,0,0,0-.4.4h0V7.8a.43.43,0,0,0,.4.4H8c.2,0,.3-.2.3-.4Z" /></svg>',
                        isShow: 1,
                        loader: null,
                        body_html: null,
                    },
                ],
                extraNavs: [],
                extraPageIcon:
                    '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19"><path d="M9.92,19.5a.4.4,0,0,1-.28-.12A.4.4,0,0,1,9.53,19l.56-2.8a.39.39,0,0,1,.11-.2l6.16-6.16a1.19,1.19,0,0,1,1.68,0L19.15,11a1.19,1.19,0,0,1,0,1.68L13,18.82a.39.39,0,0,1-.2.11l-2.8.56H9.92m.92-3-.42,2.1,2.1-.42,6.07-6.07a.4.4,0,0,0,0-.56l-1.12-1.12a.4.4,0,0,0-.56,0ZM12,2.87H10.79v-.4a.4.4,0,0,0-.4-.4H9.17a2,2,0,0,0-3.88,0H4.06a.4.4,0,0,0-.4.4v.4H2.48a2,2,0,0,0-2,2V15.15a2,2,0,0,0,2,2H8a.4.4,0,0,0,0-.79H2.48a1.19,1.19,0,0,1-1.19-1.19V4.85A1.19,1.19,0,0,1,2.48,3.67H3.67v.4A1.19,1.19,0,0,0,4.85,5.25H9.6a1.19,1.19,0,0,0,1.19-1.19v-.4H12a1.19,1.19,0,0,1,1.19,1.19V9.6a.4.4,0,1,0,.79,0V4.85a2,2,0,0,0-2-2M10,4.06a.4.4,0,0,1-.4.4H4.85a.4.4,0,0,1-.4-.4V2.87H5.65a.4.4,0,0,0,.4-.4,1.19,1.19,0,0,1,2.38,0,.4.4,0,0,0,.4.4H10Zm1.19,3.56H3.27a.4.4,0,0,1,0-.79h7.92a.4.4,0,0,1,0,.79m0,2.38H3.27a.4.4,0,0,1,0-.79h7.92a.4.4,0,0,1,0,.79m0,2.38H3.27a.4.4,0,0,1,0-.79h7.92a.4.4,0,0,1,0,.79" transform="translate(-0.5 -0.5)" /></svg>',
            };
            settings = Flits.extend(true, settings, options);
            let extraPageCount = Flits.Metafields.total_pages;
            let spliceIndex = 0;
            if (extraPageCount) {
                for (i = 1; i <= extraPageCount; i++) {
                    let _title = Flits.Metafields["title_" + i].toLowerCase();
                    let _target = 0;
                    let _icon = settings.extraPageIcon;
                    let _url = null;
                    if (Flits.Metafields["type_" + i] == "PAGE") {
                        _url = "#" + Flits.Metafields["url_" + i];
                        let bodyCardClone = Flits(".flits-body-card-template").clone();
                        Flits(bodyCardClone).removeClass("flits-body-card-template");
                        Flits(bodyCardClone).attr("id", "flits_tab_" + Flits.Metafields["url_" + i]);
                        let bodyCardMobileClone = Flits(".flits-body-card-mobile-template").clone();
                        Flits(bodyCardMobileClone).removeClass("flits-body-card-mobile-template");
                        Flits(bodyCardMobileClone).attr("id", "flits_mobile_tab_" + Flits.Metafields["url_" + i]);
                        Flits(".flits-account-container .flits-desktop-view .flits-account-body").append(bodyCardClone.html(""));
                        Flits(".flits-account-container .flits-mobile-view .flits-mobile-account-body").append(bodyCardMobileClone.html(""));
                    } else {
                        _url = Flits.Metafields["url_" + i];
                        _target = 1;
                    }
                    let obj = { title: _title, url: _url, target: _target, menuClass: null, badge: null, icon: _icon, isShow: 1, loader: { desktop_class: null, mobile_class: null }, body_html: null };
                    settings.navs.splice(16 + spliceIndex, 0, obj);
                    spliceIndex++;
                }
                settings.navs.splice(16 + spliceIndex, 0, { divider_html: '<div class="flits-menu-divider"></div>', isShow: 1 });
            }
            Flits.dispatchEvent("Flits:Navigation:Loaded", { settings: settings });
            for (i = 0; i < settings.navs.length; i++) {
                if (!settings.navs[i]["divider_html"]) {
                    if (settings.navs[i].isShow == 1) {
                        let menuItemCloneNode = Flits(".flits-menu-item-template").clone();
                        Flits(menuItemCloneNode).removeClass("flits-menu-item-template");
                        if (settings.navs[i].menuClass) {
                            Flits(menuItemCloneNode).addClass(settings.navs[i].menuClass);
                        }
                        Flits(menuItemCloneNode).find("a").attr("href", settings.navs[i].url);
                        if (settings.navs[i].target) {
                            Flits(menuItemCloneNode).find("a").attr("target", "_blank");
                        }
                        Flits(menuItemCloneNode).find(".flits-menu-img").html(settings.navs[i].icon);
                        Flits(menuItemCloneNode).find(".flist-menu-title").html(settings.navs[i].title);
                        if (settings.navs[i].badge) {
                            Flits(menuItemCloneNode).append(settings.navs[i].badge);
                        }
                        Flits(".flits-account-container .flits-menus-list-box .flits-menu-items").append(menuItemCloneNode);
                    }
                    if (settings.navs[i].url.includes("#")) {
                        var urlWithOutHash = settings.navs[i].url.replace("#", "");
                        var loaderClone = Flits(".flits-loader-template").clone().removeClass("flits-loader-template");
                        var loaderMobileClone = Flits(".flits-loader-template").clone().removeClass("flits-loader-template");
                        if (Flits("#flits_tab_" + urlWithOutHash).length) {
                            if (settings.navs[i].loader) {
                                if (settings.navs[i].loader.desktop_class) {
                                    Flits(loaderClone).addClass(settings.navs[i].loader.desktop_class);
                                }
                                if (settings.navs[i].loader.mobile_class) {
                                    Flits(loaderMobileClone).addClass(settings.navs[i].loader.mobile_class);
                                }
                                Flits("#flits_tab_" + urlWithOutHash).append(loaderClone);
                                Flits("#flits_mobile_tab_" + urlWithOutHash).append(loaderMobileClone);
                            }
                            if (settings.navs[i].body_html) {
                                Flits("#flits_tab_" + urlWithOutHash).html(settings.navs[i].body_html);
                                Flits("#flits_mobile_tab_" + urlWithOutHash).html(settings.navs[i].body_html);
                            }
                        } else {
                            if (settings.navs[i].body_html) {
                                var bodyCardClone = Flits(".flits-body-card-template").clone();
                                Flits(bodyCardClone).removeClass("flits-body-card-template");
                                Flits(bodyCardClone).attr("id", "flits_tab_" + urlWithOutHash);
                                Flits(bodyCardClone).find(".flits-header-title").html(settings.navs[i].title);
                                Flits(bodyCardClone).find(".flits-container-box .flits-box-card").html(settings.navs[i].body_html);
                                var bodyCardMobileClone = Flits(".flits-body-card-mobile-template").clone();
                                Flits(bodyCardMobileClone).removeClass("flits-body-card-mobile-template");
                                Flits(bodyCardMobileClone).attr("id", "flits_mobile_tab_" + urlWithOutHash);
                                Flits(bodyCardMobileClone).find(".flits-header-title").html(settings.navs[i].title);
                                Flits(bodyCardMobileClone).find(".flits-mobile-container-box .flits-mobile-box-card ").html(settings.navs[i].body_html);
                                if (settings.navs[i].loader) {
                                    if (settings.navs[i].loader.desktop_class) {
                                        Flits(loaderClone).addClass(settings.navs[i].loader.desktop_class);
                                    }
                                    if (settings.navs[i].loader.mobile_class) {
                                        Flits(loaderMobileClone).addClass(settings.navs[i].loader.mobile_class);
                                    }
                                    Flits(bodyCardClone).find(".flits-container-box .flits-box-card").append(loaderClone);
                                    Flits(bodyCardMobileClone).find(".flits-mobile-container-box .flits-mobile-box-card ").append(loaderMobileClone);
                                }
                                Flits(".flits-account-container .flits-desktop-view .flits-account-body").append(bodyCardClone);
                                Flits(".flits-account-container .flits-mobile-view .flits-mobile-account-body").append(bodyCardMobileClone);
                            }
                        }
                    }
                } else {
                    if (settings.navs[i]["isShow"]) {
                        Flits(".flits-account-container .flits-desktop-view .flits-menus-list-box .flits-menu-items").append(settings.navs[i]["divider_html"]);
                    }
                }
            }
            Flits(".flits-skeleton-menus-list-box").fadeOut(0, function () {
                Flits(".flits-account-container .flits-menus-list-box").removeClass("flits-hide");
                Flits(".flits-skeleton-menus-list-box").remove();
            });
            Flits(".flits-mobile-view .flits-menu-items").flitsSlider({ slidesToShow: 3, scrolling: true, dragging: true, arrows: false });
        },
        extraPageBind: function () {
            let extraPageCount = Flits.Metafields.total_pages;
            for (i = 1; i <= extraPageCount; i++) {
                let bodyCardClone = Flits(".flits-body-card-template").clone();
                Flits(bodyCardClone).removeClass("flits-body-card-template");
                let bodyCardMobileClone = Flits(".flits-body-card-mobile-template").clone();
                Flits(bodyCardMobileClone).removeClass("flits-body-card-mobile-template");
                let url = Flits.Metafields["url_" + i];
                if (Flits.Metafields["type_" + i] == "PAGE") {
                    Flits.get("/pages/" + url + ".json", function (resp) {
                        let title = resp.page.title;
                        let bodyHtml = resp.page.body_html;
                        bodyCardClone.find(".flits-header-title").html(title);
                        bodyCardClone.find(".flits-container-box .flits-box-card").html(bodyHtml);
                        bodyCardMobileClone.find(".flits-header-title").html(title);
                        bodyCardMobileClone.find(".flits-mobile-container-box .flits-mobile-box-card ").html(bodyHtml);
                        Flits("#flits_tab_" + url).html(bodyCardClone.html());
                        Flits("#flits_mobile_tab_" + url).html(bodyCardMobileClone.html());
                    });
                }
            }
        },
        onResize: function (moduleName) {
            switch (moduleName) {
                case "order":
                    if (Flits(".flits-order-div .flits-line-items-slick").hasClass("flits-slider-initialized")) {
                        Flits(".flits-order-div .flits-line-items-slick").flitsSlider("refresh");
                    }
                    break;
                case "referFriend":
                    if (Flits(".flits-refer-friend-div .flits-refer-friend-rules-slick").hasClass("flits-slider-initialized")) {
                        Flits(".flits-refer-friend-div .flits-refer-friend-rules-slick").flitsSlider("refresh");
                    }
                    if (Flits(".flits-refer-friend-div .flits-refer-friend-rules-mobile-slick").hasClass("flits-slider-initialized")) {
                        Flits(".flits-refer-friend-div .flits-refer-friend-rules-mobile-slick").flitsSlider("refresh");
                    }
                    break;
                case "changePassword":
                    if (Flits(".flits-desktop-view .flits-form-change-password")[0]) {
                        Flits(".flits-desktop-view .flits-form-change-password")[0].reset();
                    }
                    if (Flits(".flits-mobile-view .flits-form-change-password")[0]) {
                        Flits(".flits-mobile-view .flits-form-change-password")[0].reset();
                    }
                    Flits(".flits-form-change-password .flits-input[name='password'], .flits-form-change-password .flits-input[name='password_confirmation']").removeClass("flits-input-error");
                    Flits(".flits-change-password-error").html("");
                    break;
            }
        },
    });
    Flits.fn.extend({
        greeting: function () {
            let morning = Flits.t("Flits.locals.general.morning", "Good Morning");
            let afternoon = Flits.t("Flits.locals.general.afternoon", "Good Afternoon");
            let evening = Flits.t("Flits.locals.general.evening", "Good Evening");
            var time = new Date().getHours();
            let greetingTitle = (time >= 5 && time < 12 ? morning : time >= 12 && time < 17 ? afternoon : (time >= 17 && time <= 24) || (time > 0 && time < 5) ? evening : morning) + "!";
            Flits(this).html(greetingTitle);
            return this;
        },
        donutChart: function (options) {
            var settings = { seriesData: [], outerStrokeWidth: 17.5, innerStrokeWidth: 6.15, radius: 50, textStyle: { color: "#000", fontWeight: "normal", fontFamily: "sans-serif", fontSize: 12, align: "middle" } };
            settings = Flits.extend(true, settings, options);
            let seriesData = settings.seriesData;
            seriesData = seriesData.sort(Flits.nestedSort("value"));
            function SVG(tag) {
                return document.createElementNS("http://www.w3.org/2000/svg", tag);
            }
            let svgWH = settings.radius * 2;
            let svgRadius = settings.radius;
            let outerRadius = svgRadius - 12;
            let outerStrokeDasharray = 2 * 3.14 * outerRadius;
            let innerRadius = svgRadius - 17;
            let innerStrokeDasharray = 2 * 3.14 * innerRadius;
            var rotate = 0;
            var oldItemValue = 0;
            var $svgDiv = Flits('<div class="flits-chart-canvas" style="width: 100%;height: 100%;" />');
            var $result = Flits(SVG("svg"))
                .attr("width", svgWH + "%")
                .attr("height", svgWH + "%");
            Flits(SVG("circle"))
                .attr("cx", svgRadius + "%")
                .attr("cy", svgRadius + "%")
                .attr("r", svgRadius + "%")
                .attr("fill", "#f2f2f2")
                .appendTo($result);
            Flits.each(Object.keys(seriesData), function (index, value) {
                let item = settings.seriesData[index];
                let outerStokeColor = item.color;
                let innerStokeColor = Flits.lightOrDark(item.color);
                Flits(SVG("circle"))
                    .attr("class", "flits-outer-circle flits-" + item.name + "-circle")
                    .attr("cx", svgRadius + "%")
                    .attr("cy", svgRadius + "%")
                    .attr("r", outerRadius + "%")
                    .attr("fill", "none")
                    .attr("stroke", outerStokeColor)
                    .attr("stroke-width", settings.outerStrokeWidth + "%")
                    .attr("stroke-dasharray", outerStrokeDasharray + "%")
                    .attr("stroke-dashoffset", outerStrokeDasharray + "%")
                    .attr("transform-origin", svgRadius + "% " + svgRadius + "%")
                    .attr("style", "transition: 0.5s stroke-dashoffset; transform: rotate(" + rotate + "deg)")
                    .appendTo($result);
                Flits(SVG("circle"))
                    .attr("class", "flits-inner-circle flits-" + item.name + "-circle")
                    .attr("cx", svgRadius + "%")
                    .attr("cy", svgRadius + "%")
                    .attr("r", innerRadius + "%")
                    .attr("fill", "none")
                    .attr("stroke", innerStokeColor)
                    .attr("stroke-width", settings.innerStrokeWidth + "%")
                    .attr("stroke-dasharray", innerStrokeDasharray + "%")
                    .attr("stroke-dashoffset", innerStrokeDasharray + "%")
                    .attr("transform-origin", svgRadius + "% " + svgRadius + "%")
                    .attr("style", "transition: 0.5s stroke-dashoffset; transform: rotate(" + rotate + "deg)")
                    .appendTo($result);
                rotate = (360 * (item.value + oldItemValue)) / 100;
                oldItemValue = item.value;
            });
            Flits(SVG("circle"))
                .attr("cx", svgRadius + "%")
                .attr("cy", svgRadius + "%")
                .attr("r", svgRadius - 19 + "%")
                .attr("fill", "#c1c0c0")
                .appendTo($result);
            Flits(SVG("circle"))
                .attr("cx", svgRadius + "%")
                .attr("cy", svgRadius + "%")
                .attr("r", svgRadius - 22 + "%")
                .attr("fill", "#fff")
                .appendTo($result);
            Flits(SVG("foreignObject")).attr("x", "0").attr("y", "0").attr("width", "100%").attr("height", "100%").attr("class", "flits-chart-text").appendTo($result);
            Flits(this).html($result);
            var titleCss = 'style="color:' + settings.textStyle.color + ";font-size:" + settings.textStyle.fontSize + "px;font-family:" + settings.textStyle.fontFamily + ";font-weight:" + settings.textStyle.fontWeight + ';"';
            var titleHtml = '<div class="flits-chart-inner-title" ' + titleCss + ">" + settings.title + "</div>";
            Flits(this).find(".flits-chart-text").html(titleHtml);
            Flits.each(Object.keys(seriesData), function (index, value) {
                let item = settings.seriesData[index];
                let outerStrokeDashoffset = outerStrokeDasharray - (outerStrokeDasharray * item.value) / 100;
                let innerStrokeDashoffset = innerStrokeDasharray - (innerStrokeDasharray * item.value) / 100;
                setTimeout(function () {
                    Flits(".flits-outer-circle.flits-" + item.name + "-circle").attr("stroke-dashoffset", outerStrokeDashoffset + "%");
                    Flits(".flits-inner-circle.flits-" + item.name + "-circle").attr("stroke-dashoffset", innerStrokeDashoffset + "%");
                }, 500 * (index + 1));
            });
            return this;
        },
    });
    Flits.CountryProvinceSelector.prototype = {
        initCountry: function () {
            const value = this.countryEl.getAttribute("data-default");
            Flits.setSelectorByValue(this.countryEl, value);
            this.countryHandler();
        },
        initProvince: function () {
            const value = this.provinceEl.getAttribute("data-default");
            if (value && this.provinceEl.options.length > 0) {
                Flits.setSelectorByValue(this.provinceEl, value);
            }
        },
        countryHandler: function (e) {
            const opt = this.countryEl.options[this.countryEl.selectedIndex];
            const raw = opt.getAttribute("data-provinces");
            const provinces = JSON.parse(raw);
            this.clearOptions(this.provinceEl);
            if (provinces && provinces.length == 0) {
                this.provinceContainer.style.display = "none";
            } else {
                this.setOptions(this.provinceEl, provinces);
                this.provinceContainer.style.display = "";
            }
        },
        clearOptions: function (selector) {
            while (selector.firstChild) {
                selector.removeChild(selector.firstChild);
            }
        },
        setOptions: function (selector, values) {
            for (let i = 0, count = values.length; i < values.length; i++) {
                const opt = document.createElement("option");
                opt.value = values[i][0];
                opt.innerHTML = values[i][1];
                selector.appendChild(opt);
            }
        },
    };
    var isSlickGoTo = false;
    Flits(window).on("resize", function () {
        var windowW = Flits(window).width();
        if (windowW <= 720) {
            if (Flits(".flits-mobile-view .flits-menu-items").hasClass("flits-slider-initialized")) {
                if (!isSlickGoTo) {
                    Flits(".flits-mobile-view .flits-menu-items").on("setPosition", function (event, slick, direction) {
                        var index = Flits(".flits-mobile-view .flits-menu-items .flits-menu-active").attr("data-flits-slider-index");
                        if (index != undefined) {
                            Flits(".flits-mobile-view .flits-menu-items").flitsSlider("sliderGoTo", parseInt(index));
                            isSlickGoTo = true;
                        }
                    });
                }
            }
        } else {
            isSlickGoTo = false;
        }
        var hash = location.href.split("#")[0];
        Flits.onResize(hash);
    });
    if (Flits.fromCache) {
        let lastUpdateAt = Flits.getLocalStorage("account_status_update_at");
        if (lastUpdateAt != undefined || isNaN(lastUpdateAt)) {
            let lastUpdateAtTime = Flits.timeDiffer({ date1: new Date(), date2: lastUpdateAt, type: "minute" });
            if (lastUpdateAtTime <= Flits.cacheTime) {
                let respValue = Flits.getLocalStorage("account_status");
                if (respValue.status) {
                    Flits.accountSettings.flagSvgUrl = Flits.getLocalStorage("flag_svg_url");
                    Flits.flitsNewCode();
                } else {
                    Flits.flitsOldCode();
                }
            } else {
                Flits.accountSettingAjax();
            }
        } else {
            Flits.accountSettingAjax();
        }
    } else {
        Flits.accountSettingAjax();
    }
})(Flits);
