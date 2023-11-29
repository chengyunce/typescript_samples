var message = "hello!!!";
console.log(message);
//型推論(Type inference)
var id = 1;
var email = "test@test.com";
var isActive = true;
var none;
//id = "YSE"; ダメ
//email = 1000; ダメ
//定義型(Type definition)
// var id:number = 1;
// var email:string = "test@test.com";
// var isActive:boolean = true;
// var none:any;
console.log(id, typeof id);
console.log(email, typeof email);
console.log(isActive, typeof isActive);
console.log(none, typeof none);
