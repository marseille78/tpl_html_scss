/**
 * Categories
 * @param {HTMLElement} el - Block of categories
 */

function Categories(el) {
  this.el = el;
  this.btnsToggle = this.el.querySelectorAll("[data-btn=toggle-show-categories]");

  this.init();
}

Categories.prototype = {
  init: function() {
    this.toggle = this.toggle.bind(this)
    this.hide = this.hide.bind(this)

    this.btnsToggle.forEach(item => {
      item.addEventListener("click", this.toggle);
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        this.hide();
      }
    });
  },

  toggle: function() {
    this.el.classList.toggle("opened");
  },

  hide: function() {
    this.el.classList.remove("opened");
  }
};