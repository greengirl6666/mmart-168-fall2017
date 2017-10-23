// ------------------------------------
// PART 1
// ------------------------------------
// Write a function called toggleLike. It takes no parameters
// toggleLike should find the DOM element with the id 'like'
// Now, write a conditional statement. It should check to see if the classList
// on the element contains the 'active' class
// If it does, remove the 'active' class. If it doesn't add the 'active' class.

    // option 1

 //  const toggleLike = () => {
 //
 //   if (document.getElementById('like1').classList.contains('active')) {
 //    console.log('remove the active class')
 //     (document.getElementById('like1').classList.remove('active'))
 //   } else {
 //     console.log('add the active class')
 //     (document.getElementById('like1').classList.add('active'))
 //   }
 //
 // }
        //option 2

//  const toggleLike = () => {
//
//     if {document.querySelectorAll('.like').classList.contaons('active')) }
//       document.querySelectorAll('.like').forEach(function (elem) {
//       elem.classList.remove('active')
//     })
//   } else {
//       document.querySelectorAll('.like').forEach(function (elem) {
//      elem.classList.add('active')
//   })
//   }
// }

        //option 3


    const toggleLike = () => {

        document.querySelectorAll('.like').forEach(function (elem) {
         elem.classList.add('active')
       })

  console.log(document.getElementByClass('like').classList.contains('active'))
}
      //option 4


  //const toggleLike = () => {
 //
 //   if (document.getElementByClass('like').classList.contains('active')) {
 //    console.log('remove the active class')
 //     (document.getElementByClass('like').classList.remove('active'))
 //   } else {
 //     console.log('add the active class')
 //     (document.getElementByClass('like').classList.add('active'))
 //   }
 //  console.log(document.getElementByClass('like').classList.contains('active'))
 // }

     //option 5

 //  const toggleLike1 = (id) => {
 //    console.log(id)
 //   if {document.getElementById(id).classList.contains('active') {
 //      document.getElementById(id).classList.remove('active')
 //   } else {
 //      document.getElementById(id).classList.add('active')
 //   }
 //
 // }


// ------------------------------------
// PART 2
// ------------------------------------
// Write a function called toggle that takes no parameters
// It should find a DOM element with the id 'like'
// Without writing a conditional statement,
// use the classList to toggle the 'active class'
