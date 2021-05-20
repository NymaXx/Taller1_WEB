const params = new URLSearchParams(location.search);
const id = params.get('id');
console.log(id);

if(!id){
    location.href= './404.html';
}