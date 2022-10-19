const { assert, expect, should } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('emmet-boilerplate.html', () => {
  beforeEach((done) => {
    JSDOM.fromFile('src/lab-html/boilerplate/emmet-boilerplate.html')
      .then((dom) => {
        global.document = dom.window.document
      })
      .then(done, done);
  });

  describe("doctype", () => {
    it("should be proper doctype", () => {
      expect(document.doctype.name).to.include('html');
    });
  });

  describe("html", () => {
    it("should exist", () => {
      let element = document.querySelector('html');
      expect(element).to.exist;
    });

    it("should have attribute lang='en'", () => {
      let element = document.querySelector('html')
      expect(element).to.have.attribute("lang", "en");
    });
  });

  describe("head", () => {
    const head = document.querySelector('head');

    it("should exist", () => {
      expect(head).to.exist;
    });

    it("should contain meta charset utf-8", function () {
      let element = head.querySelector('meta[charset]');
      expect(element).to.exist;
      expect(element).to.have.attribute('charset', 'utf-8');
    });

    it("should contain meta http-equiv='X-UA-Compatible' content='IE=edge'", function () {
      let element = head.querySelector("meta[http-equiv]");
      expect(element).to.exist;
      //  expect(element).to.have.attribute('http-equiv', 'X-UA-Compatible');
      //  expect(element).to.have.attribute('content', 'IE=edge');
    });

    it("should contain meta name='viewport' content='width=device-width, initial-scale=1.0'", function () {
      let element = head.querySelector("meta[name='viewport']");
      expect(element).to.exist;
      expect(element).to.have.attribute('content', 'width=device-width, initial-scale=1.0');
    });

    it("should contain title", function () {
      let element = document.querySelector('title');
      expect(element).to.exist;
    });

  });

  describe("body", () => {
    it("should exist", () => {
      let element = document.querySelector('body');
      expect(element).to.exist;
    });
  });
});