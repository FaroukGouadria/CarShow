

export const addItem = (Product)=>{
    return{

        type:"ADDITEM",
        payload:Product
    }
}
export const removeItem = Product => {
  return {
      type: "REMOVEITEM",
      payload: Product
    };
};
