/* Generated by Opal 0.9.0.beta2 */
Opal.modules["thread"] = function(Opal) {
  Opal.dynamic_require_severity = "warning";
  var OPAL_CONFIG = { method_missing: true, arity_check: false, freezing: true, tainting: true };
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $hash2 = Opal.hash2;

  Opal.add_stubs(['$allocate', '$core_initialize!', '$current', '$fail', '$[]', '$coerce_key_name', '$[]=', '$key?', '$keys', '$private', '$coerce_to!', '$public', '$clear', '$empty?', '$size', '$shift', '$push', '$each', '$to_proc', '$locked?', '$lock', '$unlock']);
  (function($base, $super) {
    function $ThreadError(){};
    var self = $ThreadError = $klass($base, $super, 'ThreadError', $ThreadError);

    var def = self.$$proto, $scope = self.$$scope;

    return nil;
  })($scope.base, $scope.get('StandardError'));
  (function($base, $super) {
    function $Thread(){};
    var self = $Thread = $klass($base, $super, 'Thread', $Thread);

    var def = self.$$proto, $scope = self.$$scope;

    def.fiber_locals = def.thread_locals = nil;
    Opal.defs(self, '$current', function() {
      var $a, self = this;
      if (self.current == null) self.current = nil;

      if ((($a = self.current) !== nil && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.current = self.$allocate();
        self.current['$core_initialize!']();
      };
      return self.current;
    });

    Opal.defs(self, '$list', function() {
      var self = this;

      return [self.$current()];
    });

    Opal.defn(self, '$initialize', function() {
      var self = this;

      var array_size = arguments.length - 0;
      if(array_size < 0) array_size = 0;
      var args = new Array(array_size);
      for(var arg_index = 0; arg_index < array_size; arg_index++) {
        args[arg_index] = arguments[arg_index + 0];
      }
      return self.$fail($scope.get('NotImplementedError'), "Thread creation not available");
    });

    Opal.defn(self, '$[]', function(key) {
      var self = this;

      return self.fiber_locals['$[]'](self.$coerce_key_name(key));
    });

    Opal.defn(self, '$[]=', function(key, value) {
      var self = this;

      return self.fiber_locals['$[]='](self.$coerce_key_name(key), value);
    });

    Opal.defn(self, '$key?', function(key) {
      var self = this;

      return self.fiber_locals['$key?'](self.$coerce_key_name(key));
    });

    Opal.defn(self, '$keys', function() {
      var self = this;

      return self.fiber_locals.$keys();
    });

    Opal.defn(self, '$thread_variable_get', function(key) {
      var self = this;

      return self.thread_locals['$[]'](self.$coerce_key_name(key));
    });

    Opal.defn(self, '$thread_variable_set', function(key, value) {
      var self = this;

      return self.thread_locals['$[]='](self.$coerce_key_name(key), value);
    });

    Opal.defn(self, '$thread_variable?', function(key) {
      var self = this;

      return self.thread_locals['$key?'](self.$coerce_key_name(key));
    });

    Opal.defn(self, '$thread_variables', function() {
      var self = this;

      return self.thread_locals.$keys();
    });

    self.$private();

    Opal.defn(self, '$core_initialize!', function() {
      var self = this;

      self.thread_locals = $hash2([], {});
      return self.fiber_locals = $hash2([], {});
    });

    Opal.defn(self, '$coerce_key_name', function(key) {
      var self = this;

      return $scope.get('Opal')['$coerce_to!'](key, $scope.get('String'), "to_s");
    });

    self.$public();

    return (function($base, $super) {
      function $Queue(){};
      var self = $Queue = $klass($base, $super, 'Queue', $Queue);

      var def = self.$$proto, $scope = self.$$scope, TMP_1;

      def.storage = nil;
      Opal.defn(self, '$initialize', function() {
        var self = this;

        return self.$clear();
      });

      Opal.defn(self, '$clear', function() {
        var self = this;

        return self.storage = [];
      });

      Opal.defn(self, '$empty?', function() {
        var self = this;

        return self.storage['$empty?']();
      });

      Opal.defn(self, '$size', function() {
        var self = this;

        return self.storage.$size();
      });

      Opal.alias(self, 'length', 'size');

      Opal.defn(self, '$pop', function(non_block) {
        var $a, self = this;

        if (non_block == null) {
          non_block = false
        }
        if ((($a = self['$empty?']()) !== nil && (!$a.$$is_boolean || $a == true))) {
          if (non_block !== false && non_block !== nil) {
            self.$fail($scope.get('ThreadError'), "Queue empty")};
          self.$fail($scope.get('ThreadError'), "Deadlock");};
        return self.storage.$shift();
      });

      Opal.alias(self, 'shift', 'pop');

      Opal.alias(self, 'deq', 'pop');

      Opal.defn(self, '$push', function(value) {
        var self = this;

        return self.storage.$push(value);
      });

      Opal.alias(self, '<<', 'push');

      Opal.alias(self, 'enq', 'push');

      return (Opal.defn(self, '$each', TMP_1 = function() {
        var $a, $b, self = this, $iter = TMP_1.$$p, block = $iter || nil;

        TMP_1.$$p = null;
        return ($a = ($b = self.storage).$each, $a.$$p = block.$to_proc(), $a).call($b);
      }), nil) && 'each';
    })($scope.base, null);
  })($scope.base, null);
  Opal.cdecl($scope, 'Queue', (($scope.get('Thread')).$$scope.get('Queue')));
  return (function($base, $super) {
    function $Mutex(){};
    var self = $Mutex = $klass($base, $super, 'Mutex', $Mutex);

    var def = self.$$proto, $scope = self.$$scope, TMP_2;

    def.locked = nil;
    Opal.defn(self, '$initialize', function() {
      var self = this;

      return self.locked = false;
    });

    Opal.defn(self, '$lock', function() {
      var $a, self = this;

      if ((($a = self.locked) !== nil && (!$a.$$is_boolean || $a == true))) {
        self.$fail($scope.get('ThreadError'), "Deadlock")};
      self.locked = true;
      return self;
    });

    Opal.defn(self, '$locked?', function() {
      var self = this;

      return self.locked;
    });

    Opal.defn(self, '$owned?', function() {
      var self = this;

      return self.locked;
    });

    Opal.defn(self, '$try_lock', function() {
      var $a, self = this;

      if ((($a = self['$locked?']()) !== nil && (!$a.$$is_boolean || $a == true))) {
        return false
        } else {
        self.$lock();
        return true;
      };
    });

    Opal.defn(self, '$unlock', function() {
      var $a, self = this;

      if ((($a = self.locked) !== nil && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$fail($scope.get('ThreadError'), "Mutex not locked")
      };
      self.locked = false;
      return self;
    });

    return (Opal.defn(self, '$synchronize', TMP_2 = function() {
      var $a, self = this, $iter = TMP_2.$$p, $yield = $iter || nil;

      TMP_2.$$p = null;
      self.$lock();
      try {
      return $a = Opal.yieldX($yield, []), $a === $breaker ? $a : $a
      } finally {
      self.$unlock()
      };
    }), nil) && 'synchronize';
  })($scope.base, null);
};
