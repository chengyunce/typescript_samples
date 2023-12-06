//型を明示して定義
// var user:{
//     id:number,
//     email:string,
//     isActive:boolean
// } = {
//     id:1,
//     email:"test@test.com",
//     isActive:true,
// };
//型を推論で定義
var user = {
    id: 1,
    name: {
        first: "Taro",
        last: "Tokyo",
    },
    email: "test@test.com",
    isActive: true,
};
user.id = 33;
console.log(user);
