(this['webpackJsonpgoit-react-hw-02-feedback'] =
  this['webpackJsonpgoit-react-hw-02-feedback'] || []).push([
  [0],
  {
    16: function (t, e, a) {
      
      a.r(e);
      var s = a(1),
        c = a.n(s),
        n = a(5),
        i = a.n(n),
        o = a(6),
        r = a(7),
        l = a(8),
        b = a(10),
        d = a(9),
        u = a(0),
        j = function (t) {
          var e = t.title,
            a = t.children;
          return Object(u.jsxs)('section', { children: [Object(u.jsx)('h2', { children: e }), a] });
        },
        h = a(2),
        O = a.n(h),
        p = function (t) {
          var e = t.good,
            a = t.neutral,
            s = t.bad,
            c = t.total,
            n = t.positivePercentage;
          return Object(u.jsxs)('ul', {
            className: O.a.statisticsList,
            children: [
              Object(u.jsxs)('li', { className: O.a.statisticItem, children: ['Good:', e] }),
              Object(u.jsxs)('li', { className: O.a.statisticItem, children: ['Neutral:', a] }),
              Object(u.jsxs)('li', { className: O.a.statisticItem, children: ['Bad:', s] }),
              Object(u.jsxs)('li', { className: O.a.statisticItem, children: ['Total:', c] }),
              Object(u.jsxs)('li', {
                className: O.a.statisticItem,
                children: ['Positive feedback:', n, '%'],
              }),
            ],
          });
        },
        f = a(3),
        k = a.n(f),
        m = function (t) {
          var e = t.options,
            a = t.onLeaveFeedback;
          return Object(u.jsx)('ul', {
            className: k.a.optionsList,
            children: e.map(function (t) {
              return Object(u.jsx)('li', {
                className: k.a.feedbackOption,
                children: Object(u.jsx)(
                  'button',
                  {
                    type: 'button',
                    className: k.a.button,
                    onClick: function () {
                      return a(t);
                    },
                    children: t,
                  },
                  t,
                ),
              });
            }),
          });
        },
        x = function (t) {
          var e = t.message;
          return Object(u.jsx)('h2', { children: e });
        },
        v = (function (t) {
          Object(b.a)(a, t);
          var e = Object(d.a)(a);
          function a() {
            var t;
            Object(r.a)(this, a);
            for (var s = arguments.length, c = new Array(s), n = 0; n < s; n++) c[n] = arguments[n];
            return (
              ((t = e.call.apply(e, [this].concat(c))).state = { good: 0, neutral: 0, bad: 0 }),
              (t.countTotalFeedback = function () {
                return t.state.bad + t.state.neutral + t.state.good;
              }),
              (t.countPositiveFeedbackPercentage = function () {
                return t.state.bad + t.state.neutral + t.state.good === 0
                  ? 0
                  : Math.floor(
                      (100 * t.state.good) / (t.state.bad + t.state.neutral + t.state.good),
                    );
              }),
              (t.onLeaveFeedback = function (e) {
                return t.setState(function (t) {
                  return Object(o.a)({}, e, t[e] + 1);
                });
              }),
              t
            );
          }
          return (
            Object(l.a)(a, [
              {
                key: 'render',
                value: function () {
                  return Object(u.jsxs)('div', {
                    className: 'App',
                    children: [
                      Object(u.jsx)(j, {
                        title: 'Please leave feedback',
                        children: Object(u.jsx)(m, {
                          options: Object.keys(this.state),
                          onLeaveFeedback: this.onLeaveFeedback,
                        }),
                      }),
                      Object(u.jsx)(j, {
                        title: 'Statistics',
                        children: this.countTotalFeedback()
                          ? Object(u.jsx)(p, {
                              good: this.state.good,
                              neutral: this.state.neutral,
                              bad: this.state.bad,
                              total: this.countTotalFeedback(),
                              positivePercentage: this.countPositiveFeedbackPercentage(),
                            })
                          : Object(u.jsx)(x, { message: 'No feedback given' }),
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(s.Component),
        g = v;
      i.a.render(
        Object(u.jsx)(c.a.StrictMode, { children: Object(u.jsx)(g, {}) }),
        document.getElementById('root'),
      );
    },
    2: function (t, e, a) {
      t.exports = {
        statisticsList: 'Statistics_statisticsList__3hW5d',
        statisticItem: 'Statistics_statisticItem__1_rNZ',
      };
    },
    3: function (t, e, a) {
      t.exports = {
        optionsList: 'FeedbackOptions_optionsList__uT3b0',
        feedbackOption: 'FeedbackOptions_feedbackOption__2nXRZ',
        button: 'FeedbackOptions_button__3Z-pr',
      };
    },
  },
  [[16, 1, 2]],
]);
//# sourceMappingURL=main.462c4a83.chunk.js.map
