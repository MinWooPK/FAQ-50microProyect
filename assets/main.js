// let arrowDown = document.querySelectorAll('.faq-toggle')
// arrowDown.forEach(function(arrow) {

//   arrowDown.addEventListener('click', function() {
//     var postId = this.getAttribute('post-id')

//   })
// })

// const toggles = document.querySelectorAll('.faq-toggle')

// toggles.forEach(toggle => {
//     toggle.addEventListener('click', () => {
//         toggle.parentNode.classList.toggle('active')
//     })
// })


// document.querySelector('.faq-toggle').addEventListener('click', function(event) {
//     event.preventDefault();
//     var target = document.querySelector('.faq-toggle');
//     if (target.classList.contains('active')) {
//                  console.log('asdfgsert')

//       target.classList.remove('active');
//     } else {
//                    console.log('asdf')

//       target.classList.add('active');
//     }
//   });

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((event) => {

   event.addEventListener('click', () => {

        event.parentNode.classList.toggle('active');
    });
});

