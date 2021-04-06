/* eslint-disable max-lines-per-function */


import debounce from './debounce.js';

class Autocomplete {

  constructor(input, url) {
    this.input = input;
    this.url = url;

    this.listUI = null;
    this.overlay = null;
    this.previousValue = null;
    this.visible = false;
    this.matches = [];

    this.wrapInput();
    this.createUI();

    this.valueChanged = debounce(this.valueChanged.bind(this), 300);

    this.bindEvents();
    this.reset();
  }

  wrapInput() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('autocomplete-wrapper');
    this.input.parentNode.appendChild(wrapper);
    wrapper.appendChild(this.input);
  }

  createUI() {
    let listUI = document.createElement('ul');
    listUI.classList.add('autocomplete-ui');
    this.input.parentNode.appendChild(listUI);
    this.listUI = listUI;

    let overlay = document.createElement('div');
    overlay.classList.add('autocomplete-overlay');
    overlay.style.width = `${this.input.clientWidth}px`;

    this.input.parentNode.appendChild(overlay);
    this.overlay = overlay;
  }

  generateOverlayContent(value, match) {
    let end = match.name.substr(value.length);
    return value + end;
  }

  draw() {
    while (this.listUI.lastChild) this.listUI.removeChild(this.listUI.lastChild);

    if (!this.visible) {
      this.overlay.textContent = '';
      return;
    }

    if (this.bestMatchIndex !== null && this.matches.length !== 0) {
      let selected = this.matches[this.bestMatchIndex];
      this.overlay.textContent = this.generateOverlayContent(this.input.value, selected);
    } else {
      this.overlay.textContent = '';
    }

    this.matches.forEach((match, index) => {
      let li = document.createElement('li');
      li.classList.add('autocomplete-ui-choice');

      if (index === this.selectedIndex) {
        li.classList.add('selected');
        this.input.value = match.name;
      }
      li.textContent = match.name;
      this.listUI.appendChild(li);
    });
  }

  reset() {
    this.matches = [];
    this.visible = false;
    this.bestMatchIndex = 0;
    this.selectedIndex = null;
    this.draw();
  }

  fetchMatches(query, callback) {
    let endpoint = this.url + encodeURIComponent(query);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => callback(xhr.response));
    xhr.send();
  }

  bindEvents() {
    this.input.addEventListener('input', this.valueChanged);
    this.input.addEventListener('keydown', this.handleKeydown.bind(this));
    this.listUI.addEventListener('mousedown', this.handleMousedown.bind(this));
  }

  valueChanged() {
    let value = this.input.value;
    this.previousValue = value;
    if (value.length > 0) {
      this.fetchMatches(value, matches => {
        this.visible = true;
        this.matches = matches;
        this.bestMatchIndex = 0;
        this.selectedIndex = null;
        this.draw();
      });
    } else {
      this.reset();
    }
  }

  handleMousedown(event) {
    this.reset();
    this.input.value = event.target.textContent;
  }

  handleKeydown(event) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.selectedIndex === null || this.selectedIndex === this.matches.length - 1) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex += 1;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (this.selectedIndex === 0 || this.selectedIndex === null) {
          this.selectedIndex = this.matches.length - 1;
        } else {
          this.selectedIndex -= 1;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;

      case 'Tab':
        if (this.bestMatchIndex !== null && this.matches.length !== 0) {
          this.input.value = this.matches[this.bestMatchIndex].name;
          event.preventDefault();
        }
        this.reset();
        break;

      case 'Escape':
        this.input.value = this.previousValue;
        this.reset();
        break;

      case 'Enter':
        this.reset();
        break;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
  let autocomplete = new Autocomplete(input, 'http://localhost:3000/countries?matching=');
});

// import debounce from './debounce.js';

// const Autocomplete = {
//   wrapInput: function() {
//     let wrapper = document.createElement('div');
//     wrapper.classList.add('autocomplete-wrapper');
//     this.input.parentNode.appendChild(wrapper);
//     wrapper.appendChild(this.input);
//   },

//   createUI: function() {
//     let listUI = document.createElement('ul');
//     listUI.classList.add('autocomplete-ui');
//     this.input.parentNode.appendChild(listUI);
//     this.listUI = listUI;

//     let overlay = document.createElement('div');
//     overlay.classList.add('autocomplete-overlay');
//     overlay.style.width = `${this.input.clientWidth}px`;

//     this.input.parentNode.appendChild(overlay);
//     this.overlay = overlay;
//   },

//   generateOverlayContent: function(value, match) {
//     let end = match.name.substr(value.length);
//     return value + end;
//   },

//   draw: function() {
//     while (this.listUI.lastChild) this.listUI.removeChild(this.listUI.lastChild);

//     if (!this.visible) {
//       this.overlay.textContent = '';
//       return;
//     }

//     if (this.bestMatchIndex !== null && this.matches.length !== 0) {
//       let selected = this.matches[this.bestMatchIndex];
//       this.overlay.textContent = this.generateOverlayContent(this.input.value, selected);
//     } else {
//       this.overlay.textContent = '';
//     }

//     this.matches.forEach((match, index) => {
//       let li = document.createElement('li');
//       li.classList.add('autocomplete-ui-choice');

//       if (index === this.selectedIndex) {
//         li.classList.add('selected');
//         this.input.value = match.name;
//       }
//       li.textContent = match.name;
//       this.listUI.appendChild(li);
//     });
//   },

//   reset: function() {
//     this.matches = [];
//     this.visible = false;
//     this.bestMatchIndex = 0;
//     this.selectedIndex = null;
//     this.draw();
//   },

//   fetchMatches: function(query, callback) {
//     let endpoint = this.url + encodeURIComponent(query);
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', endpoint);
//     xhr.responseType = 'json';
//     xhr.addEventListener('load', () => callback(xhr.response));
//     xhr.send();
//   },

//   bindEvents: function() {
//     this.input.addEventListener('input', this.valueChanged);
//     this.input.addEventListener('keydown', this.handleKeydown.bind(this));
//     this.listUI.addEventListener('mousedown', this.handleMousedown.bind(this));
//   },

//   valueChanged: function() {
//     let value = this.input.value;
//     this.previousValue = value;
//     if (value.length > 0) {
//       this.fetchMatches(value, matches => {
//         this.visible = true;
//         this.matches = matches;
//         this.bestMatchIndex = 0;
//         this.selectedIndex = null;
//         this.draw();
//       });
//     } else {
//       this.reset();
//     }
//   },

//   init: function() {
//     this.input = document.querySelector('input');
//     this.url = '/countries?matching=';

//     this.listUI = null;
//     this.overlay = null;

//     this.visible = false;
//     this.matches = [];

//     this.previousValue = null;

//     this.wrapInput();
//     this.createUI();

//     this.valueChanged = debounce(this.valueChanged.bind(this), 300);

//     this.bindEvents();
//     this.reset();
//   },

//   handleMousedown: function(event) {
//     this.reset();
//     this.input.value = event.target.textContent;
//   },

//   handleKeydown: function(event) {
//     switch (event.key) {
//       case 'ArrowDown':
//         event.preventDefault();
//         if (this.selectedIndex === null || this.selectedIndex === this.matches.length - 1) {
//           this.selectedIndex = 0;
//         } else {
//           this.selectedIndex += 1;
//         }
//         this.bestMatchIndex = null;
//         this.draw();
//         break;

//       case 'ArrowUp':
//         event.preventDefault();
//         if (this.selectedIndex === 0 || this.selectedIndex === null) {
//           this.selectedIndex = this.matches.length - 1;
//         } else {
//           this.selectedIndex -= 1;
//         }
//         this.bestMatchIndex = null;
//         this.draw();
//         break;

//       case 'Tab':
//         if (this.bestMatchIndex !== null && this.matches.length !== 0) {
//           this.input.value = this.matches[this.bestMatchIndex].name;
//           event.preventDefault();
//         }
//         this.reset();
//         break;

//       case 'Escape':
//         this.input.value = this.previousValue;
//         this.reset();
//         break;

//       case 'Enter':
//         this.reset();
//         break;
//     }

//   },


// };

// document.addEventListener('DOMContentLoaded', () => {
//   Autocomplete.init();
// });