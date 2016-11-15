'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mixins = require('./Mixins');

/** Class representing a terms query.*/

var TermsQuery = function (_Mixins) {
  _inherits(TermsQuery, _Mixins);

  /**
   * Create terms query
   * @param {string} field
   * @param {string|number|Date} value
   */
  function TermsQuery(field, value) {
    _classCallCheck(this, TermsQuery);

    var _this = _possibleConstructorReturn(this, (TermsQuery.__proto__ || Object.getPrototypeOf(TermsQuery)).call(this, 'terms', field));

    _this.terms = _defineProperty({}, field, {
      value: value
    });
    return _this;
  }

  return TermsQuery;
}(Mixins);

;

var factoryTermsQuery = function factoryTermsQuery() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(TermsQuery, [null].concat(args)))();
};
// also expose statically the original class
factoryTermsQuery._originalClass = TermsQuery;

module.exports = factoryTermsQuery;