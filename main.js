document.addEventListener('keydown', function playSound (element) {
    let sound = document.querySelector(`audio[data-key="${element.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${element.keyCode}"]`);
    if (sound && key) {
        sound.currentTime = 0;
        sound.play();
        key.classList.add('playing');
    } 
  });

  function removeTransition(element) {
    if (element.propertyName !== 'transform') 
    return
    this.classList.remove('playing');
  }

  let keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));


  // BEATBOX FUNCTION //

  
  document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {

      function simulateKey(key) {
        var event = new KeyboardEvent('keydown', {
            keyCode: key, 
            
        });
        console.log(event);
        let value = document.dispatchEvent(event);
        console.log(value) 
        console.log('simulatekey')
      }

      simulateKey()
      console.log(simulateKey)

      function playBeat(time, key) {
        return new Promise(resolve => {
          setTimeout(() => {
            simulateKey(key);
            resolve();
          }, time);
        });
      }

      playBeat(500)
        .then(() => playBeat(500, "88"))
        .then(() => playBeat(500, "65"))
        .then(() => playBeat(500, "90"))
        .then(() => playBeat(500, "69"))
        .then(() => playBeat(500, "83"))
    }
  });

   