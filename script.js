function generateRandomText() {
  var words = ["VCS", "mie gacoan", "VCS", "Main tiap hari", "Ayam geprek","main tiap hati","jatah nambah"];
  
  var randomIndex = Math.floor(Math.random() * words.length);
  var randomWord = words[randomIndex];
  
  var box = event.currentTarget;
  var randomText = box.querySelector("p");
  randomText.innerHTML = '<a href="https://wa.me/6285155145788?text=' + randomWord + '">' + randomWord + '</a>';
}
