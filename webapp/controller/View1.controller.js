sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.fitness.fitness.controller.View1", {
		onInit: function () {
			var that = this;
			var objVisible = {
				panelPreparation: false,
				strIngredient1: true,
				strIngredient2: true,
				strIngredient3: true,
				strIngredient4: true,
				strIngredient5: true,
				strIngredient6: true,
				strIngredient7: true,
				strIngredient8: true,
				strIngredient9: true,
				strIngredient10: true,
				strIngredient11: true,
				strIngredient12: true,
				strIngredient13: true,
				strIngredient14: true,
				strIngredient15: true
			};
			var oVisibleModel = new JSONModel(objVisible);
			that.getView().setModel(oVisibleModel, "visibleModel");
			var oBusyDialog = new sap.m.BusyDialog();
			oBusyDialog.open();
			var listData = {
				"async": true,
				"crossDomain": true,
				"url": "https://the-cocktail-db.p.rapidapi.com/list.php?c=list",
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",

					"x-rapidapi-key": "10274b82d6msh01a346e6656c33fp1a5d32jsnca992f8efb41"
				}
			};

			$.ajax(listData).done(function (response) {
				console.log(response);
				oBusyDialog.close();
				// var listDataCboxModelData = that.getOwnerComponent().getModel("listAPIModel").getData();
				// var lastRcrd = listDataCboxModelData[response.length - 1].strAlcoholic;
				// if (lastRcrd === null) {
				// 	listDataCboxModelData.pop();
				// }
				// oBusyDialog.close();
				var listDataCboxModel = that.getOwnerComponent().getModel("listAPIModel");

				listDataCboxModel.setData(response);
				that.getView().setModel(listDataCboxModel, "listModel");
			});
		},
		onlistSelected: function () {
			var that = this;
			var oBusyDialog = new sap.m.BusyDialog();
			oBusyDialog.open();
			var slctdList = that.getView().byId("typeOfDrink").getSelectedKey();
			var filterData = {
				"async": true,
				"crossDomain": true,
				"url": "https://the-cocktail-db.p.rapidapi.com/filter.php",
				"data": {
					c: slctdList
				},
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
					"x-rapidapi-key": "10274b82d6msh01a346e6656c33fp1a5d32jsnca992f8efb41"
				}
			};
			$.ajax(filterData).done(function (response) {
				// console.log(response);
				oBusyDialog.close();
				var ofilterModel = that.getOwnerComponent().getModel("filterbyListAPIModel");
				ofilterModel.setData(response);
				ofilterModel.setSizeLimit(1000);
				that.getView().setModel(ofilterModel, "filterModel");

			});
		},
		onfltrItmSelected: function () {
			var that = this;
			var oBusyDialog = new sap.m.BusyDialog();
			oBusyDialog.open();
			var slctdIdList = that.getView().byId("filterAlcohol").getSelectedKey();
			if (slctdIdList !== "") {
				that.getView().getModel("visibleModel").setProperty("/panelPreparation", true);
			}
			var filterData = {
				"async": true,
				"crossDomain": true,
				"url": "https://the-cocktail-db.p.rapidapi.com/lookup.php",
				"data": {
					i: slctdIdList
				},
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
					"x-rapidapi-key": "10274b82d6msh01a346e6656c33fp1a5d32jsnca992f8efb41"
				}
			};
			$.ajax(filterData).done(function (response) {
				// console.log(response);
				oBusyDialog.close();
				var oprpationModelData = that.getOwnerComponent().getModel("preparationAPIModel").getData();
				if (oprpationModelData.strIngredient1 === null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient1", false);
				}
				if (oprpationModelData.strIngredient2 === null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient2", false);
				}
				if (oprpationModelData.strIngredient3 === null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient3", false);
				}
				if (oprpationModelData.strIngredient4 === null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient4", false);
				}
				if (oprpationModelData.strIngredient5 === null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient5", false);
				}
				if (oprpationModelData.strIngredient6 === null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient6", false);
				}
				if (oprpationModelData.strIngredient7 === null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient7", false);
				}
				if (oprpationModelData.strIngredient8 === null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient8", false);
				}
				if (oprpationModelData.strIngredient9 === null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient9", false);
				}
				if (oprpationModelData.strIngredient10 === null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient10", false);
				}
				if (oprpationModelData.strIngredient11 === null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient11", false);
				}
				if (oprpationModelData.strIngredient12 === null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient12", false);
				}
				if (oprpationModelData.strIngredient13 === null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient13", false);
				}
				if (oprpationModelData.strIngredient14 === null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient14", false);
				}
				if (oprpationModelData.strIngredient15 !== null) {
					that.getView().getModel("visibleModel").setProperty("/strIngredient15", false);
				}
				var oprpationModel = that.getOwnerComponent().getModel("preparationAPIModel");
				oprpationModel.setData(response.drinks[0]);
				that.getView().setModel(oprpationModel, "preparationModel");

			});
		}
	});
});