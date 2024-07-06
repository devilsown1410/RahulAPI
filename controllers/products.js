const Product=require("../models/product");
const { options } = require("../routes/products");
const getAllProducts= async(req,res)=>{
    const { company,name,feature,sort,select}=req.query;
    const queryQbject={};
    if(company){
        queryQbject.company=company;
    }
    if(feature){
        queryQbject.feature=feature;
    }
    if(name){
        queryQbject.name={$regex: new RegExp(name, 'i')};
    }
    let apiData=Product.find(queryQbject);
    if(sort){
        let sortFix=sort.replaceAll(","," ");
        apiData=apiData.sort(sortFix);
    }
    if(select){
        let selectFix=select.replaceAll(","," ");
        apiData=apiData.select(selectFix);
    }
    let page=Number(req.query.page) || 1;
    let limit=Number(req.query.limit) || 3;
    let skip=(page-1)*limit;
    apiData=apiData.skip(skip).limit(limit);
    console.log(queryQbject);
    const Products=await apiData;
    res.status(200).json({Products,nbHits:Products.length});
};

const getAllProductsTesting= async(req,res)=>{
    console.log(req.query);
    const Products=await Product.find(req.query).skip(2);
    res.status(200).json({Products});
};

module.exports={
    getAllProducts, getAllProductsTesting
};