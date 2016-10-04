// Generated by CoffeeScript 1.10.0
(function() {
  var buildUrl, forceArray, isPlainObject, parseSite, ref, shortLang;

  buildUrl = require('../utils/build_url');

  ref = require('../utils/utils'), isPlainObject = ref.isPlainObject, forceArray = ref.forceArray, shortLang = ref.shortLang;

  module.exports = function(titles, sites, languages, props, format) {
    var query, ref1;
    if (isPlainObject(titles)) {
      ref1 = titles, titles = ref1.titles, sites = ref1.sites, languages = ref1.languages, props = ref1.props, format = ref1.format;
    }
    format || (format = 'json');
    if ((titles == null) || titles.length === 0) {
      throw new Error('no title provided');
    }
    if ((sites == null) || sites.length === 0) {
      sites = ['enwiki'];
    }
    titles = forceArray(titles);
    sites = forceArray(sites).map(parseSite);
    props = forceArray(props);
    query = {
      action: 'wbgetentities',
      titles: titles.join('|'),
      sites: sites.join('|'),
      format: format
    };
    if (languages != null) {
      languages = forceArray(languages).map(shortLang);
      query.languages = languages.join('|');
    }
    if ((props != null ? props.length : void 0) > 0) {
      query.props = props.join('|');
    }
    return buildUrl('wikidata', query);
  };

  parseSite = function(site) {
    if (site.length === 2) {
      return site + "wiki";
    } else {
      return site;
    }
  };

}).call(this);