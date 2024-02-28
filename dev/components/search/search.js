/**
 * Search
 * @param {HTMLElement} el - Block of search
 */

function Search(el) {
  this.el = el;
  this.btnShow = this.el.querySelector("[data-search-show]");
  this.body = this.el.querySelector("[data-search-block]");
  this.btnClear = this.el.querySelector("[data-search-clear]");
  this.form = this.el.querySelector("[data-search-form]")

  this.init();
}

Search.prototype = {
  init: function() {
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.clear = this.clear.bind(this)

    this.btnShow.addEventListener("click", this.show);
    this.btnClear.addEventListener("click", this.clear);
    this.body.addEventListener("click", ({target, currentTarget}) => {
      if (target === currentTarget) {
        this.hide();
      }
    });
    document.addEventListener("keydown", ({code}) => {
      if (code === "Escape") {
        this.hide();
      }
    });
  },

  show: function() {
    this.el.classList.add("opened");
  },

  hide: function() {
    this.el.classList.remove("opened");
  },

  clear: function() {
    this.form.reset();
  }
};