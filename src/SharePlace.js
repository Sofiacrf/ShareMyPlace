class PlaceFinder {
    constructor() {
      const addressForm = document.querySelector('form');
      const locateUserBtn = document.getElementById('locate-btn');
  
      locateUserBtn.addEventListener('click', this.locateUserHandler);
      addressForm.addEventListener('submit', this.findAddressHandler);
    }
  
    locateUserHandler() {
      if (!navigator.geolocation) {
        alert(
          'Please enter an address.'
        );
        return;
      }
      navigator.geolocation.getCurrentPosition(
        successResult => {
          const coordinates = {
            lat: successResult.coords.latitude + Math.random() * 50,
            lng: successResult.coords.longitude + Math.random() * 50,
          };
          console.log(coordinates);
        },
        error => {
          alert(
            'Please enter an address manually!'
          );
        }
      );
    }
  
    findAddressHandler() {}
  }
  
  const placeFinder = new PlaceFinder();