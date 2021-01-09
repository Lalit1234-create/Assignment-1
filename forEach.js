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

 array.forEach(({ Name, Role}) => {
 	console.log('Name: ${shape}, Role: ${Role}')
 })