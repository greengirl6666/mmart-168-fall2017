//------------------------------------------------------------------
// PART I: Using a while loop, print the message provided 100 times
//------------------------------------------------------------------

const name = 'John'

// Creates a list element and appends it to the unordered list in part1
const appendListElement = (message) => {

  // 1. creates emply list item container
  const li = document.createElement('li')

  // 2. creats text node in the document consatines the string stored in the "text" varaible
  const textNode = document.createTextNode(message)

  // 3. attaches text node to th elist item element
  li.appendChild(textNode)

  // 4. finds the elements /ul/ that has id #part1 and appends li list text to it
  document.querySelector('#part1').appendChild(li)
}
 // while loop

  let counter = 1
  while (counter <= 100) {
   // make sure to call it -after- defining it
   appendListElement(counter + '. one week till Halloween!')
   ++counter
 }
//appendListElement('one week till Halloween!')

//appendListElement('Welcome, ' + massage + '! Make yourself comfortable.')

//------------------------------------------------------------------




// PART II: Using a for loop, write out each person’s avatar, name, and score, based on the people array
//------------------------------------------------------------------
//The data:
var people = [
    { name: 'Jane', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png',
     score: 300 },

    { name: 'Brenda', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png',
     score: 10} ,

     { name: 'Wanda', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png',
      score: 60 },

     { name: 'Maria', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png',
      score: 80 },

     { name: 'Jasper', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png',
      score: 600 },

     { name: 'Malik', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png',
      score: 40 }
]


// use a for loop to DRY up the printNames function
// it should loop over the people array and append
// the users avatar pic, a greeting, and their score to the HTML
const printNames = (counter) => {
  // Message 1
  const img1 = document.createElement('img')
  img1.src = people[counter].pic
  img1.classList.add('avatar')

  const paragraph1 = document.createElement('p')
  const text1 = document.createTextNode('Welcome, ' + people[counter].name + '! Your score is: ' + people[counter].score)
  paragraph1.appendChild(text1)

  document.querySelector('#part2').appendChild(img1)
  document.querySelector('#part2').appendChild(paragraph1)
}

// arrays + loops === best frinds!
    //for (let i = 0; i < 10; i++) {
    //printNames(i)

  //printNames(0)
  //printNames(1)
  //printNames(2)
  //printNames(3)
  //printNames(4)
  //printNames(5)
//}

// arrays + loops === best frinds!
for (let i = 0; i < people.length; i++) {
  printNames(i)
}
