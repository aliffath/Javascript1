let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

let data2 = {
  name: "Alif Miftakhul Fatah",
  email: "alifmiftakhulfatah@gmail.com",
  hobby: "menonton anime",
};

//mengganti data nama,email dan hobby
const newData = { ...data, ...data2 };
console.log(newData);

//mengambil data city dan street
const { address } = data;
console.log(address.city, address.street);
