'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /certificationIssuance when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/certificationIssuance");
  });


  describe('certificationIssuance', function() {

    beforeEach(function() {
      browser.get('index.html#!/certificationIssuance');
    });


    it('should render certificationIssuance when user navigates to /certificationIssuance', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('findPostcode', function() {

    beforeEach(function() {
      browser.get('index.html#!/findPostcode');
    });


    it('should render findPostcode when user navigates to /findPostcode', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
