import throttle from 'lodash.throttle';

 const iframe = document.querySelector('iframe');
 const player = new Vimeo.Player(iframe);

 player.on('timeupdate', throttle(timeRecord, 1000));



 function timeRecord(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }

  const saveTime = localStorage.getItem('videoplayer-current-time');
  
 player.setCurrentTime(saveTime).then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
           
            break;

        default:
            
            break;
    }
});