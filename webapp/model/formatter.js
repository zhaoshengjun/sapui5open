sap.ui.define([],function(){
	return {
		delivery: function(sMeasure, iWeight) {
			var oResouceBundle = this.getView().getModel('i18n').getResourceBundle(),
				sResult= "";
			
			if (sMeasure === 'G') {
				iWeight = iWeight / 1000;
			}
			
			if (iWeight < 0.5) {
				sResult = oResouceBundle.getText('formatterMailDelivery');
			} else if (iWeight < 5) {
				sResult = oResouceBundle.getText('formatterParcelDelivery');
			} else {
				sResult = oResouceBundle.getText('formatterCarrierDelivery');
			}
			
			return sResult;
		},
		formatMapUrl: function(oAddress) {
			if (oAddress) {
				var sUrl = "https://maps.googleapis.com/maps/api/staticmap?size=600x600&Address=";
				var markerParams = "&markers=color:red%7C";
				var address = oAddress.HouseNumber + "+"+oAddress.Street+"+"+oAddress.ZIPCode+"+"+oAddress.City+"+"+oAddress.Country;
				sUrl = sUrl + address + markerParams + address;
				// console.log("address: ",oAddress, "url:", sUrl);
				// console.log(sUrl);
				return sUrl;
			}
		}
	};
});