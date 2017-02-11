<<<<<<< HEAD
import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
	if (!(key in global)) {
		global[key] = window[key];
	}
});

chai.use(chaiImmutable);
=======
import chai from "chai";
import chaiImmutable from "chai-immutable";

chai.use(chaiImmutable);
>>>>>>> 004fece4e61ea6152bbd01de355ca97145b27d8c
