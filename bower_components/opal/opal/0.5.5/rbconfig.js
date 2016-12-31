/* Generated by Opal 0.5.5 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $module = $opal.module, $hash2 = $opal.hash2;
  $opal.add_stubs(['$split', '$[]']);
  (function($base) {
    var self = $module($base, 'RbConfig');

    var def = self._proto, $scope = self._scope, versions = nil;
    versions = $scope.RUBY_VERSION.$split(".");

    $opal.cdecl($scope, 'CONFIG', $hash2(["ruby_version", "MAJOR", "MINOR", "TEENY", "RUBY", "RUBY_INSTALL_NAME", "RUBY_SO_NAME", "target_os", "host_os", "PATH_SEPARATOR"], {"ruby_version": $scope.RUBY_VERSION, "MAJOR": versions['$[]'](0), "MINOR": versions['$[]'](1), "TEENY": versions['$[]'](2), "RUBY": $scope.RUBY_ENGINE, "RUBY_INSTALL_NAME": $scope.RUBY_ENGINE, "RUBY_SO_NAME": $scope.RUBY_ENGINE, "target_os": "ECMA-262", "host_os": "ECMA-262", "PATH_SEPARATOR": ":"}));
    
  })(self);
  $opal.cdecl($scope, 'RUBY_NAME', "opal");
  $opal.cdecl($scope, 'RUBY_EXE', "opal");
  return $opal.cdecl($scope, 'RUBY_PATCHLEVEL', "327");
})(Opal);

//@ sourceMappingURL=/__opal_source_maps__/rbconfig.js.map
;
