
const apiUrl = "/api/";


export const getList = () => {
  return (dispatch) => {
    dispatch(productGetRequest());
    return fetch(apiUrl+"getList", {
      method:'post',
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(productGetRequestSuccess(data.products, data.message, data.status))          
        })
      }
      else{
        response.json().then(error => {
          dispatch(productGetRequestFaild(error))
        })
      }
    })
  }
}

export const productGetRequest = (products) => {
  return {
    type: 'PRODUCT_GET_REQUEST',
    products
  }
}

export const productGetRequestSuccess = (products,message,status) => {
  return {
    type:'PRODUCT_GET_REQUEST_SUCCESS',
    products:products,
    message:message,
    status:status
  }
}

export const productGetRequestFaild = (error) => {
  return {
    type: 'PRODUCT_GET_REQUEST_FAILD',
    error
  }
}

