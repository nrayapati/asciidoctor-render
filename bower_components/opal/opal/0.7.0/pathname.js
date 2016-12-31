/* Generated by Opal 0.7.0 */
(function(Opal) {
  Opal.dynamic_require_severity = "warning";
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $module = Opal.module;

  Opal.add_stubs(['$==', '$raise', '$attr_reader', '$path', '$start_with?', '$!', '$absolute?', '$sub', '$new']);
  (function($base, $super) {
    function $Pathname(){};
    var self = $Pathname = $klass($base, $super, 'Pathname', $Pathname);

    var def = self.$$proto, $scope = self.$$scope;

    def.path = nil;
    def.$initialize = function(path) {
      var self = this;

      if (path['$==']("\x00")) {
        self.$raise($scope.get('ArgumentError'))};
      return self.path = path;
    };

    self.$attr_reader("path");

    def['$=='] = function(other) {
      var self = this;

      return other.$path()['$=='](self.path);
    };

    def['$absolute?'] = function() {
      var self = this;

      return self.path['$start_with?']("/");
    };

    def['$relative?'] = function() {
      var self = this;

      return self['$absolute?']()['$!']();
    };

    def['$root?'] = function() {
      var self = this;

      return self.path['$==']("/");
    };

    def.$parent = function() {
      var $a, self = this, new_path = nil;

      new_path = self.path.$sub(/\/([^\/]+\/?$)/, "");
      if (new_path['$==']("")) {
        new_path = (function() {if ((($a = self['$absolute?']()) !== nil && (!$a.$$is_boolean || $a == true))) {
          return "/"
          } else {
          return "."
        }; return nil; })()};
      return $scope.get('Pathname').$new(new_path);
    };

    def.$sub = function(args) {
      var $a, self = this;

      args = $slice.call(arguments, 0);
      return $scope.get('Pathname').$new(($a = self.path).$sub.apply($a, [].concat(args)));
    };

    def.$cleanpath = function() {
      var self = this;

      return Opal.normalize_loadable_path(self.path);
    };

    def.$to_path = function() {
      var self = this;

      return self.path;
    };

    def.$hash = function() {
      var self = this;

      return self.path;
    };

    Opal.defn(self, '$to_str', def.$to_path);

    return Opal.defn(self, '$to_s', def.$to_path);
  })(self, null);
  return (function($base) {
    var self = $module($base, 'Kernel');

    var def = self.$$proto, $scope = self.$$scope;

    Opal.defn(self, '$Pathname', function(path) {
      var self = this;

      return $scope.get('Pathname').$new(path);
    })
  })(self);
})(Opal);

//# sourceMappingURL=pathname.map
;
