sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	],
	function(Controller, MessageToast) {
		return Controller.extend("opensap.myapp.controller.App", {
			onShowHello: function() {
				// MessageToast.show("Hello OpenSAP");
				var oBundle = this.getView().getModel("i18n").getResouceBundle();
				var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg",[sRecipient]);
				
				MessageToast.show(sMsg);
			}
		});
	});