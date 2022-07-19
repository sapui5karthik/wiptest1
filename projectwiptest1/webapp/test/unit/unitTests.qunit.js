/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/chapota/wiptest1/projectwiptest1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});