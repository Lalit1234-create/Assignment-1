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

 const filtered = array.filter(element => {
      return element.Name === 'Neha Sharma';
 })

 console.log(filtered); 