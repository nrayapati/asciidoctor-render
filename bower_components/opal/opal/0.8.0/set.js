/* Generated by Opal 0.8.0 */
Opal.modules["set"] = function(Opal) {
  Opal.dynamic_require_severity = "warning";
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $module = Opal.module;

  Opal.add_stubs(['$include', '$new', '$nil?', '$===', '$raise', '$each', '$add', '$call', '$merge', '$class', '$respond_to?', '$subtract', '$dup', '$join', '$to_a', '$equal?', '$instance_of?', '$==', '$instance_variable_get', '$is_a?', '$size', '$all?', '$include?', '$[]=', '$enum_for', '$[]', '$<<', '$replace', '$delete', '$select', '$each_key', '$to_proc', '$empty?', '$eql?', '$instance_eval', '$clear', '$keys']);
  (function($base, $super) {
    function $Set(){};
    var self = $Set = $klass($base, $super, 'Set', $Set);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_4, TMP_7, TMP_9, TMP_12;

    def.hash = nil;
    self.$include($scope.get('Enumerable'));

    Opal.defs(self, '$[]', function(ary) {
      var self = this;

      ary = $slice.call(arguments, 0);
      return self.$new(ary);
    });

    def.$initialize = TMP_1 = function(enum$) {
      var $a, $b, TMP_2, self = this, $iter = TMP_1.$$p, block = $iter || nil;

      if (enum$ == null) {
        enum$ = nil
      }
      TMP_1.$$p = null;
      self.hash = $scope.get('Hash').$new();
      if ((($a = enum$['$nil?']()) !== nil && (!$a.$$is_boolean || $a == true))) {
        return nil};
      if ((($a = $scope.get('Enumerable')['$==='](enum$)) !== nil && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$raise($scope.get('ArgumentError'), "value must be enumerable")
      };
      if (block !== false && block !== nil) {
        return ($a = ($b = enum$).$each, $a.$$p = (TMP_2 = function(item){var self = TMP_2.$$s || this;
if (item == null) item = nil;
        return self.$add(block.$call(item))}, TMP_2.$$s = self, TMP_2), $a).call($b)
        } else {
        return self.$merge(enum$)
      };
    };

    def.$dup = function() {
      var self = this, result = nil;

      result = self.$class().$new();
      return result.$merge(self);
    };

    def['$-'] = function(enum$) {
      var $a, self = this;

      if ((($a = enum$['$respond_to?']("each")) !== nil && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$raise($scope.get('ArgumentError'), "value must be enumerable")
      };
      return self.$dup().$subtract(enum$);
    };

    Opal.defn(self, '$difference', def['$-']);

    def.$inspect = function() {
      var self = this;

      return "#<Set: {" + (self.$to_a().$join(",")) + "}>";
    };

    def['$=='] = function(other) {
      var $a, $b, TMP_3, self = this;

      if ((($a = self['$equal?'](other)) !== nil && (!$a.$$is_boolean || $a == true))) {
        return true
      } else if ((($a = other['$instance_of?'](self.$class())) !== nil && (!$a.$$is_boolean || $a == true))) {
        return self.hash['$=='](other.$instance_variable_get("@hash"))
      } else if ((($a = ($b = other['$is_a?']($scope.get('Set')), $b !== false && $b !== nil ?self.$size()['$=='](other.$size()) : $b)) !== nil && (!$a.$$is_boolean || $a == true))) {
        return ($a = ($b = other)['$all?'], $a.$$p = (TMP_3 = function(o){var self = TMP_3.$$s || this;
          if (self.hash == null) self.hash = nil;
if (o == null) o = nil;
        return self.hash['$include?'](o)}, TMP_3.$$s = self, TMP_3), $a).call($b)
        } else {
        return false
      };
    };

    def.$add = function(o) {
      var self = this;

      self.hash['$[]='](o, true);
      return self;
    };

    Opal.defn(self, '$<<', def.$add);

    def.$classify = TMP_4 = function() {
      var $a, $b, TMP_5, $c, TMP_6, self = this, $iter = TMP_4.$$p, block = $iter || nil, result = nil;

      TMP_4.$$p = null;
      if ((block !== nil)) {
        } else {
        return self.$enum_for("classify")
      };
      result = ($a = ($b = $scope.get('Hash')).$new, $a.$$p = (TMP_5 = function(h, k){var self = TMP_5.$$s || this;
if (h == null) h = nil;if (k == null) k = nil;
      return h['$[]='](k, self.$class().$new())}, TMP_5.$$s = self, TMP_5), $a).call($b);
      ($a = ($c = self).$each, $a.$$p = (TMP_6 = function(item){var self = TMP_6.$$s || this, $a;
if (item == null) item = nil;
      return result['$[]'](((($a = Opal.yield1(block, item)) === $breaker) ? $breaker.$v : $a)).$add(item)}, TMP_6.$$s = self, TMP_6), $a).call($c);
      return result;
    };

    def['$collect!'] = TMP_7 = function() {
      var $a, $b, TMP_8, self = this, $iter = TMP_7.$$p, block = $iter || nil, result = nil;

      TMP_7.$$p = null;
      if ((block !== nil)) {
        } else {
        return self.$enum_for("collect!")
      };
      result = self.$class().$new();
      ($a = ($b = self).$each, $a.$$p = (TMP_8 = function(item){var self = TMP_8.$$s || this, $a;
if (item == null) item = nil;
      return result['$<<'](((($a = Opal.yield1(block, item)) === $breaker) ? $breaker.$v : $a))}, TMP_8.$$s = self, TMP_8), $a).call($b);
      return self.$replace(result);
    };

    Opal.defn(self, '$map!', def['$collect!']);

    def.$delete = function(o) {
      var self = this;

      self.hash.$delete(o);
      return self;
    };

    def['$delete?'] = function(o) {
      var $a, self = this;

      if ((($a = self['$include?'](o)) !== nil && (!$a.$$is_boolean || $a == true))) {
        self.$delete(o);
        return self;
        } else {
        return nil
      };
    };

    def.$delete_if = TMP_9 = function() {try {

      var $a, $b, TMP_10, $c, $d, TMP_11, self = this, $iter = TMP_9.$$p, $yield = $iter || nil;

      TMP_9.$$p = null;
      ((($a = ($yield !== nil)) !== false && $a !== nil) ? $a : Opal.ret(self.$enum_for("delete_if")));
      ($a = ($b = ($c = ($d = self).$select, $c.$$p = (TMP_11 = function(o){var self = TMP_11.$$s || this, $a;
if (o == null) o = nil;
      return $a = Opal.yield1($yield, o), $a === $breaker ? $a : $a}, TMP_11.$$s = self, TMP_11), $c).call($d)).$each, $a.$$p = (TMP_10 = function(o){var self = TMP_10.$$s || this;
        if (self.hash == null) self.hash = nil;
if (o == null) o = nil;
      return self.hash.$delete(o)}, TMP_10.$$s = self, TMP_10), $a).call($b);
      return self;
      } catch ($returner) { if ($returner === Opal.returner) { return $returner.$v } throw $returner; }
    };

    def['$add?'] = function(o) {
      var $a, self = this;

      if ((($a = self['$include?'](o)) !== nil && (!$a.$$is_boolean || $a == true))) {
        return nil
        } else {
        return self.$add(o)
      };
    };

    def.$each = TMP_12 = function() {
      var $a, $b, self = this, $iter = TMP_12.$$p, block = $iter || nil;

      TMP_12.$$p = null;
      if ((block !== nil)) {
        } else {
        return self.$enum_for("each")
      };
      ($a = ($b = self.hash).$each_key, $a.$$p = block.$to_proc(), $a).call($b);
      return self;
    };

    def['$empty?'] = function() {
      var self = this;

      return self.hash['$empty?']();
    };

    def['$eql?'] = function(other) {
      var $a, $b, TMP_13, self = this;

      return self.hash['$eql?'](($a = ($b = other).$instance_eval, $a.$$p = (TMP_13 = function(){var self = TMP_13.$$s || this;
        if (self.hash == null) self.hash = nil;

      return self.hash}, TMP_13.$$s = self, TMP_13), $a).call($b));
    };

    def.$clear = function() {
      var self = this;

      self.hash.$clear();
      return self;
    };

    def['$include?'] = function(o) {
      var self = this;

      return self.hash['$include?'](o);
    };

    Opal.defn(self, '$member?', def['$include?']);

    def.$merge = function(enum$) {
      var $a, $b, TMP_14, self = this;

      ($a = ($b = enum$).$each, $a.$$p = (TMP_14 = function(item){var self = TMP_14.$$s || this;
if (item == null) item = nil;
      return self.$add(item)}, TMP_14.$$s = self, TMP_14), $a).call($b);
      return self;
    };

    def.$replace = function(enum$) {
      var self = this;

      self.$clear();
      self.$merge(enum$);
      return self;
    };

    def.$size = function() {
      var self = this;

      return self.hash.$size();
    };

    Opal.defn(self, '$length', def.$size);

    def.$subtract = function(enum$) {
      var $a, $b, TMP_15, self = this;

      ($a = ($b = enum$).$each, $a.$$p = (TMP_15 = function(item){var self = TMP_15.$$s || this;
if (item == null) item = nil;
      return self.$delete(item)}, TMP_15.$$s = self, TMP_15), $a).call($b);
      return self;
    };

    def['$|'] = function(enum$) {
      var $a, self = this;

      if ((($a = enum$['$respond_to?']("each")) !== nil && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$raise($scope.get('ArgumentError'), "value must be enumerable")
      };
      return self.$dup().$merge(enum$);
    };

    Opal.defn(self, '$+', def['$|']);

    Opal.defn(self, '$union', def['$|']);

    return (def.$to_a = function() {
      var self = this;

      return self.hash.$keys();
    }, nil) && 'to_a';
  })(self, null);
  return (function($base) {
    var self = $module($base, 'Enumerable');

    var def = self.$$proto, $scope = self.$$scope, TMP_16;

    Opal.defn(self, '$to_set', TMP_16 = function(klass, args) {
      var $a, $b, self = this, $iter = TMP_16.$$p, block = $iter || nil;

      args = $slice.call(arguments, 1);
      if (klass == null) {
        klass = $scope.get('Set')
      }
      TMP_16.$$p = null;
      return ($a = ($b = klass).$new, $a.$$p = block.$to_proc(), $a).apply($b, [self].concat(args));
    })
  })(self);
};
