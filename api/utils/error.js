export const errorHandler=(statusCode, message)=>{
       const error =new error();
       error.statusCode();
       error.message("error from the function");
       return error;
};