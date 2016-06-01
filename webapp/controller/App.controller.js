sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"opensap/myapp/model/formatter"
	],
	function(Controller, MessageToast,Filter, FilterOperator, formatter) {
		return Controller.extend("opensap.myapp.controller.App", {
			
			formatter: formatter,

			onShowHello: function() {
				// MessageToast.show("Hello OpenSAP");
				var oBundle = this.getView().getModel("i18n").getResouceBundle();
				var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg",[sRecipient]);
				
				MessageToast.show(sMsg);
			},
			
			onFilterProducts: function(oEvent) {
				var aFilter = [],
					sQuery = oEvent.getParameter("query"),
					oList = this.getView().byId("productList"),
					oBinding = oList.getBinding("items");
					
				if (sQuery) {
					aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
					oBinding.filter(aFilter);
				}
			}
		});
	});