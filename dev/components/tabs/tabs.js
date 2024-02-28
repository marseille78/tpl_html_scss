/**
 * Tabs
 * @param {HTMLElement} el Block of tabs
 */

function Tabs(el) {
  this.el = el;
  this.ctrlList = this.el.querySelectorAll("[data-tabs-ctrl]");
  this.bodyList = this.el.querySelectorAll("[data-tabs-item]");

  this.changeActive = this.changeActive.bind(this)

  this.ctrlList.forEach((item, i) => {
    item.addEventListener("click", () => this.changeActive(i));
  });

  this.changeActive(0);
}

Tabs.prototype = {
  changeActive: function(idx) {
    this.ctrlList.forEach((item, i) => {
      i === idx
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
    this.bodyList.forEach((item, i) => {
      i === idx
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  }
};