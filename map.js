const array = [
   {
   	   Name: Lalit Sharma
   	   Role: Developer
   },
   {
   	   Name: Aditya Shukla
   	   Role: Tester
   },
   {
   	   Name: Neha Sharma
   	   Role: Teacher
   },
   {
   	   Name: Anshul maheshwari
   	   Role: Developer
   }
 ]

 const array2 = array.map(({Name}) => Name)
 	console.log(array2)