sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	],
	function(Controller, MessageToast) {
		return Controller.extend("opensap.myapp.controller.App", {
			onShowHello: function() {
				MessageToast.show("Hello OpenSAP");
			}
		});
	});