// mystore.js
import { defineStore } from "pinia";

export const userDataStore = defineStore('mydata', () => {
  const data = ref("sudheer from store");
  console.log("Hi Maom")
  return { data };
});

export const usersdata = defineStore('userdata', () => {
    console.log("hello")
    console.log("Hello 2")
  const users = ref([]);
  console.log("hello 3")
  const fetchUsers = async () => {
    console.log("Hello 2")
    try {
        console.log("usersData")
      const response = await fetch('https://fakestoreapi.com/users'); 
      const data = await response.json();
      if (response.ok) {
        users.value = data; 
        console.log(users)
      } else {
        console.error("Error fetching users:", data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  return {
    fetchUsers,
    users,
    
  };
});
