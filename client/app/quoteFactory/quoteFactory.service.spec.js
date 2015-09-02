'use strict';

describe('Service: quoteFactory', function () {

  // load the service's module
  beforeEach(module('quoteMachineApp'));

  // instantiate service
  var quoteFactory;
  beforeEach(inject(function (_quoteFactory_) {
    quoteFactory = _quoteFactory_;
  }));

  it('should do something', function () {
    expect(!!quoteFactory).toBe(true);
  });

});
