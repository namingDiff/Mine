﻿!
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.dayjs = t()
} (this,
function() {
    "use strict";
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var t = "day",
    n = "week",
    r = "month",
    i = "year",
    s = function(e, t, n) {
        return ! e || e.length >= t ? e: "".concat(Array(t + 1 - e.length).join(n)).concat(e)
    },
    a = function(e) {
        return e && String(e).toLowerCase().replace(/s$/, "")
    },
    u = function(e) {
        debugger;
        if (!e) return new Date;
        if (e instanceof Date) return e;
        var t = String(e);
        if (/^(\d){8}$/.test(t)) {
            var n = t.substr(0, 4),
            r = t.substr(4, 2),
            i = t.substr(6, 2);
            return new Date(n, r - 1, i)
        }
        return new Date(e)
    },
    o = function() {
        function o(e) { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
            } (this, o),
            this.$d = u(e),
            this.init()
        }
        var c, h, f;
        return c = o,
        (h = [{
            key: "init",
            value: function() {
                this.timeZone = this.$d.getTimezoneOffset() / 60,
                this.timeZoneString = s(String( - 1 * this.timeZone).replace(/^(.)?(\d)/, "$10$200"), 5, "+"),
                this.$y = this.$d.getFullYear(),
                this.$M = this.$d.getMonth(),
                this.$D = this.$d.getDate(),
                this.$W = this.$d.getDay(),
                this.$H = this.$d.getHours(),
                this.$m = this.$d.getMinutes(),
                this.$s = this.$d.getSeconds(),
                this.$ms = this.$d.getMilliseconds()
            }
        },
        {
            key: "isValid",
            value: function() {
                return ! ("Invalid Date" === this.$d.toString())
            }
        },
        {
            key: "isLeapYear",
            value: function() {
                return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0
            }
        },
        {
            key: "isSame",
            value: function(e) {
                return this.valueOf() === e.valueOf()
            }
        },
        {
            key: "isBefore",
            value: function(e) {
                return this.valueOf() < e.valueOf()
            }
        },
        {
            key: "isAfter",
            value: function(e) {
                return this.valueOf() > e.valueOf()
            }
        },
        {
            key: "year",
            value: function() {
                return this.$y
            }
        },
        {
            key: "month",
            value: function() {
                return this.$M
            }
        },
        {
            key: "date",
            value: function() {
                return this.$D
            }
        },
        {
            key: "hour",
            value: function() {
                return this.$H
            }
        },
        {
            key: "minute",
            value: function() {
                return this.$m
            }
        },
        {
            key: "second",
            value: function() {
                return this.$s
            }
        },
        {
            key: "millisecond",
            value: function() {
                return this.$ms
            }
        },
        {
            key: "unix",
            value: function() {
                return Math.floor(this.valueOf() / 1e3)
            }
        },
        {
            key: "valueOf",
            value: function() {
                return this.$d.getTime()
            }
        },
        {
            key: "startOf",
            value: function(e) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                switch (a(e)) {
                case i:
                    return n ? new o(new Date(this.$y, 0, 1)) : new o(new Date(this.$y, 11, 31)).endOf("day");
                case r:
                    return n ? new o(new Date(this.$y, this.$M, 1)) : new o(new Date(this.$y, this.$M + 1, 0)).endOf("day");
                case t:
                    return new o(n ? this.toDate().setHours(0, 0, 0, 0) : this.toDate().setHours(23, 59, 59, 999));
                default:
                    return this.clone()
                }
            }
        },
        {
            key: "endOf",
            value: function(e) {
                return this.startOf(e, !1)
            }
        },
        {
            key: "mSet",
            value: function(e, t) {
                switch (a(e)) {
                case "date":
                    this.$d.setDate(t);
                    break;
                case r:
                    this.$d.setMonth(t);
                    break;
                case i:
                    this.$d.setFullYear(t)
                }
                return this.init(),
                this
            }
        },
        {
            key: "set",
            value: function(e, t) {
                return n = t,
                Number.isNaN(parseFloat(n)) || !Number.isFinite(n) ? this: this.clone().mSet(e, t);
                var n
            }
        }, {
            key: "add",
            value: function(e, s) {
                var u, c = s && 1 === s.length ? s: a(s);
                if (["M", r].indexOf(c) > -1) {
                    var h = this.set("date", 1).set(r, this.$M + e);
                    return h = h.set("date", Math.min(this.$D, h.daysInMonth()))
                }
                if (["y", i].indexOf(c) > -1) return this.set(i, this.$y + e);
                switch (c) {
                case "m":
                case "minute":
                    u = 6e4;
                    break;
                case "h":
                case "hour":
                    u = 36e5;
                    break;
                case "d":
                case t:
                    u = 864e5;
                    break;
                case "w":
                case n:
                    u = 6048e5;
                    break;
                default:
                    u = 1e3
                }
                return new o(this.valueOf() + e * u)
            }
        },
        {
            key: "subtract",
            value: function(e, t) {
                return this.add( - 1 * e, t)
            }
        },
        {
            key: "format",
            value: function() {
                var e = this,
                t = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "YYYY-MM-DDTHH:mm:ssZ").replace(/Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|m{1,2}|s{1,2}|Z{1,2}/g,
                function(r) {
                    switch (r) {
                    case "YY":
                        return String(e.$y).slice( - 2);
                    case "YYYY":
                        return String(e.$y);
                    case "M":
                        return String(e.$M + 1);
                    case "MM":
                        return s(String(e.$M + 1), 2, "0");
                    case "MMM":
                        return n[e.$M].slice(0, 3);
                    case "MMMM":
                        return n[e.$M];
                    case "D":
                        return String(e.$D);
                    case "DD":
                        return s(String(e.$D), 2, "0");
                    case "d":
                        return String(e.$W);
                    case "dddd":
                        return t[e.$W];
                    case "H":
                        return String(e.$H);
                    case "HH":
                        return s(String(e.$H), 2, "0");
                    case "m":
                        return String(e.$m);
                    case "mm":
                        return s(String(e.$m), 2, "0");
                    case "s":
                        return String(e.$s);
                    case "ss":
                        return s(String(e.$s), 2, "0");
                    case "Z":
                        return "".concat(e.timeZoneString.slice(0, -2), ":00");
                    default:
                        return e.timeZoneString
                    }
                })
            }
        },
        {
            key: "diff",
            value: function(e, s) {
                var u, c, h, f, l, d, $ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                y = a(s),
                v = e instanceof o ? e: new o(e),
                m = this - v,
                g = (u = this, f = 12 * ((c = v).year() - u.year()) + (c.month() - u.month()), l = u.clone().add(f, "months"), h = c - l < 0 ? (c - l) / (l - u.clone().add(f - 1, "months")) : (c - l) / (u.clone().add(f + 1, "months") - l), Number( - (f + h)) || 0);
                switch (y) {
                case i:
                    g /= 12;
                    break;
                case r:
                    break;
                case "quarter":
                    g /= 3;
                    break;
                case n:
                    g = m / 6048e5;
                    break;
                case t:
                    g = m / 864e5;
                    break;
                case "second":
                    g = m / 1e3;
                    break;
                default:
                    g = m
                }
                return $ ? g: (d = g) < 0 ? Math.ceil(d) || 0 : Math.floor(d)
            }
        },
        {
            key: "daysInMonth",
            value: function() {
                return this.endOf(r).$D
            }
        },
        {
            key: "clone",
            value: function() {
                return new o(this)
            }
        },
        {
            key: "toDate",
            value: function() {
                return new Date(this.$d)
            }
        },
        {
            key: "toArray",
            value: function() {
                return [this.$y, this.$M, this.$D, this.$H, this.$m, this.$s, this.$ms]
            }
        },
        {
            key: "toJSON",
            value: function() {
                return this.toISOString()
            }
        },
        {
            key: "toISOString",
            value: function() {
                return this.toDate().toISOString()
            }
        },
        {
            key: "toObject",
            value: function() {
                return {
                    years: this.$y,
                    months: this.$M,
                    date: this.$D,
                    hours: this.$H,
                    minutes: this.$m,
                    seconds: this.$s,
                    milliseconds: this.$ms
                }
            }
        },
        {
            key: "toString",
            value: function() {
                return this.$d.toUTCString()
            }
        }]) && e(c.prototype, h),
        f && e(c, f),
        o
    } ();
    return function(e) {
        return new o(e)
    }
});