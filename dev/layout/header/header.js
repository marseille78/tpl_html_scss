/**
 * Top Menu
 * @param {Object} props - Properties
 */

function Header({block, btnToggle}) {
  this.block = block;
  this.btnToggle = btnToggle;

  this.toggle = this.toggle.bind(this);
  
  this.btnToggle.addEventListener("click", this.toggle);
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      this.hide();
    }
  });
}

Header.prototype = {
  toggle: function() {
    this.block.classList.toggle("opened");
  },

  hide: function() {
    this.block.classList.remove("opened");
  }
};