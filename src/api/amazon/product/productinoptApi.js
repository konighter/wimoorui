import request from "@/utils/request";
import downloadhandler from "@/utils/download-handler";
 function updateOptMsku(data){
 	 return request.get("/amazon/api/v1/report/product/productInOpt/updateOptMsku",{params:data})
 }
 function updateOptProfitId(data){
 	 return request.get("/amazon/api/v1/report/product/productInOpt/updateOptProfitId",{params:data})
 }
 function getProRemarkHis(data){
 	 return request.get("/amazon/api/v1/report/product/productInOpt/getProRemarkHis",{params:data})
 }
 function updateRemark(data){
 	 return request.get("/amazon/api/v1/report/product/productInOpt/updateRemark",{params:data})
 }
 function updateOptStatus(data){
 	 return request.get("/amazon/api/v1/report/product/productInOpt/updateOptStatus",{params:data})
 }
 function getOptStatusById(data){
 	 return request.get("/amazon/api/v1/report/product/productInOpt/getOptStatusById",{params:data})
 }
 function findPriceById(data){
 	 return request.get("/amazon/api/v1/report/product/productInOpt/findPriceById",{params:data})
 }
 function saveProductTags(data){
	 return request.get("/amazon/api/v1/report/product/productInOpt/saveProductTags",{params:data})
 }
 function findProductTags(data){
 	 return request.get("/amazon/api/v1/report/product/productInOpt/findProductTags",{params:data})
 }
 function findOwnerById(data){
 	 return request.get("/amazon/api/v1/report/product/productInOpt/findOwnerById",{params:data})
 }
 function updateOwnerById(data){
 	 return request.get("/amazon/api/v1/report/product/productInOpt/updateOwnerById",{params:data})
 }
 function refreshPrice(id){
 	 return request.get('/amazon/api/v1/report/product/productInOpt/refreshPrice',{params:{"pid":id}});
 }
 function loadformula(data){
 	 return request.get("/amazon/api/v1/report/product/productInOpt/loadformula",{params:data})
 }
 function formulaSave(data){
 	 return request.get("/amazon/api/v1/report/product/productInOpt/formulaSave",{params:data})
 }
 function downExcelMSKUData(data){
 	return request({url:"/amazon/api/v1/report/product/productInOpt/downExcelMSKUData",
 			responseType:"blob",
 			params:data,
 			method:'get'}).then(res => {
 					downloadhandler.downloadSuccess(res,"productRelations.xlsx")
 			}).catch(e=>{
 					downloadhandler.downloadFail(e);
 			}); 
 }
 function uploadMskuFile(FormData){
 	return request({'method':'POST',
 	                 'url':"/amazon/api/v1/report/product/productInOpt/uploadMskuFile",
 				    'data':FormData,
 					'headers':{'Content-Type':"multipart/form-data"},
 				
 	});
 	
 }
 export default{
 	updateOptMsku,updateOptProfitId,getProRemarkHis,updateRemark,updateOptStatus,getOptStatusById,
	findPriceById,saveProductTags,findProductTags,findOwnerById,updateOwnerById,refreshPrice,loadformula,
	formulaSave,downExcelMSKUData,uploadMskuFile,
 }