/* Generated by Opal 0.7.0 */
(function(Opal) {
  Opal.dynamic_require_severity = "warning";
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass;

  Opal.add_stubs(['$allocate', '$wrap', '$clone', '$raise', '$>>', '$==', '$wday', '$+', '$-', '$to_s', '$alias_method']);
  return (function($base, $super) {
    function $Date(){};
    var self = $Date = $klass($base, $super, 'Date', $Date);

    var def = self.$$proto, $scope = self.$$scope;

    def.date = nil;
    (function(self) {
      var $scope = self.$$scope, def = self.$$proto;

      self.$$proto.$civil = self.$$proto.$new;
      self.$$proto.$wrap = function(native$) {
        var self = this, instance = nil;

        instance = self.$allocate();
        instance.date = native$;
        return instance;
      };
      self.$$proto.$parse = function(string) {
        var self = this, match = nil;

        match = /^(\d*)-(\d*)-(\d*)/.exec(string);
        return self.$wrap(new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3])));
      };
      return (self.$$proto.$today = function() {
        var self = this;

        return self.$wrap(new Date());
      }, nil) && 'today';
    })(self.$singleton_class());

    def.$initialize = function(year, month, day) {
      var self = this;

      return self.date = new Date(year, month - 1, day);
    };

    def['$-'] = function(date) {
      var self = this;

      
      if (date.$$is_number) {
        var result = self.$clone();
        result.date.setDate(self.date.getDate() - date);
        return result;
      }
      else if (date.date) {
        return Math.round((self.date - date.date) / (1000 * 60 * 60 * 24));
      }
      else {
        self.$raise($scope.get('TypeError'));
      }
    ;
    };

    def['$+'] = function(date) {
      var self = this;

      
      if (date.$$is_number) {
        var result = self.$clone();
        result.date.setDate(self.date.getDate() + date);
        return result;
      }
      else {
        self.$raise($scope.get('TypeError'));
      }
    ;
    };

    def['$<'] = function(other) {
      var self = this;

      
      var a = self.date, b = other.date;
      a.setHours(0, 0, 0, 0);
      b.setHours(0, 0, 0, 0);
      return a < b;
    ;
    };

    def['$<='] = function(other) {
      var self = this;

      
      var a = self.date, b = other.date;
      a.setHours(0, 0, 0, 0);
      b.setHours(0, 0, 0, 0);
      return a <= b;
    ;
    };

    def['$>'] = function(other) {
      var self = this;

      
      var a = self.date, b = other.date;
      a.setHours(0, 0, 0, 0);
      b.setHours(0, 0, 0, 0);
      return a > b;
    ;
    };

    def['$>='] = function(other) {
      var self = this;

      
      var a = self.date, b = other.date;
      a.setHours(0, 0, 0, 0);
      b.setHours(0, 0, 0, 0);
      return a >= b;
    ;
    };

    def['$<=>'] = function(other) {
      var self = this;

      
      var a = self.date, b = other.date;
      a.setHours(0, 0, 0, 0);
      b.setHours(0, 0, 0, 0);

      if (a < b) {
        return -1;
      }
      else if (a > b) {
        return 1;
      }
      else {
        return 0;
      }
    ;
    };

    def['$=='] = function(other) {
      var self = this;

      
      var a = self.date, b = other.date;
      return (a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate());
    ;
    };

    def['$>>'] = function(n) {
      var self = this;

      
      if (!n.$$is_number) {
        self.$raise($scope.get('TypeError'));
      }

      var result = self.$clone(), date = result.date, cur = date.getDate();
      date.setDate(1);
      date.setMonth(date.getMonth() + n);
      date.setDate(Math.min(cur, days_in_month(date.getFullYear(), date.getMonth())));
      return result;
    ;
    };

    def['$<<'] = function(n) {
      var self = this;

      
      if (!n.$$is_number) {
        self.$raise($scope.get('TypeError'));
      }

      return self['$>>'](-n);
    ;
    };

    Opal.defn(self, '$eql?', def['$==']);

    def.$clone = function() {
      var self = this;

      return $scope.get('Date').$wrap(new Date(self.date.getTime()));
    };

    def.$day = function() {
      var self = this;

      return self.date.getDate();
    };

    def['$friday?'] = function() {
      var self = this;

      return self.$wday()['$=='](5);
    };

    def['$monday?'] = function() {
      var self = this;

      return self.$wday()['$=='](1);
    };

    def.$month = function() {
      var self = this;

      return self.date.getMonth() + 1;
    };

    def.$next = function() {
      var self = this;

      return self['$+'](1);
    };

    def.$next_day = function(n) {
      var self = this;

      if (n == null) {
        n = 1
      }
      return self['$+'](n);
    };

    def.$next_month = function() {
      var self = this;

      
      var result = self.$clone(), date = result.date, cur = date.getDate();
      date.setDate(1);
      date.setMonth(date.getMonth() + 1);
      date.setDate(Math.min(cur, days_in_month(date.getFullYear(), date.getMonth())));
      return result;
    ;
    };

    def.$prev_day = function(n) {
      var self = this;

      if (n == null) {
        n = 1
      }
      return self['$-'](n);
    };

    def.$prev_month = function() {
      var self = this;

      
      var result = self.$clone(), date = result.date, cur = date.getDate();
      date.setDate(1);
      date.setMonth(date.getMonth() - 1);
      date.setDate(Math.min(cur, days_in_month(date.getFullYear(), date.getMonth())));
      return result;
    ;
    };

    def['$saturday?'] = function() {
      var self = this;

      return self.$wday()['$=='](6);
    };

    def.$strftime = function(format) {
      var self = this;

      if (format == null) {
        format = ""
      }
      
      if (format == '') {
        return self.$to_s();
      }

      return self.date.$strftime(format);
    ;
    };

    self.$alias_method("succ", "next");

    def['$sunday?'] = function() {
      var self = this;

      return self.$wday()['$=='](0);
    };

    def['$thursday?'] = function() {
      var self = this;

      return self.$wday()['$=='](4);
    };

    def.$to_s = function() {
      var self = this;

      
      var d = self.date, year = d.getFullYear(), month = d.getMonth() + 1, day = d.getDate();
      if (month < 10) { month = '0' + month; }
      if (day < 10) { day = '0' + day; }
      return year + '-' + month + '-' + day;
    ;
    };

    def['$tuesday?'] = function() {
      var self = this;

      return self.$wday()['$=='](2);
    };

    def.$wday = function() {
      var self = this;

      return self.date.getDay();
    };

    def['$wednesday?'] = function() {
      var self = this;

      return self.$wday()['$=='](3);
    };

    def.$year = function() {
      var self = this;

      return self.date.getFullYear();
    };

    
    function days_in_month(year, month) {
      var leap = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
      return [31, (leap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
    }
  
  })(self, null)
})(Opal);

//# sourceMappingURL=date.map
;
