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
		}
	};
});