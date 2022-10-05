import data from './constants/data.js';
import Product from './model/product-schema.js';

const defaultData = async () => {
    try{
        await Product.insertMany(data);
        console.log("Data imported successfully");
    }catch(error){
        console.log(`error while decoding data ${error.message}`);
    }
};

export default defaultData;