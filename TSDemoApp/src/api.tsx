import axios from 'axios'
// const axios = require('axios').default;

// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/',
//     timeout: 1000,
//     headers: { 'Content-type': 'application/json; charset=UTF-8'}
//   });
const baseURL:String = 'https://jsonplaceholder.typicode.com/';


export const postDetail=async(data:object,url:String)=>{
     let response = await fetch(`${baseURL}${url}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      response = await response.json();
      console.log('response:',response);
      return response;
 }
 export const getDetail=async(url:String)=>{
    let response = await fetch(`${baseURL}${url}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      response = await response.json();
        console.log('response:',response);
        return response;
}
