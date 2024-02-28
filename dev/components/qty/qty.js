function Qty(el) {
  this.el = el;
  this.val = 1;
  this.max = 3;
  this.input = this.el.querySelector("[data-qty-value]");
  this.price = this.el.closest("tr").querySelector("[data-product-price]");
  this.best = this.el.closest("tr").querySelector("[data-product-best]");
  this.increment = this.el.querySelector("[data-qty-increment]");
  this.decrement = this.el.querySelector("[data-qty-decrement]");

  this.init();
}

Qty.prototype = {
  init: function() {
    this.changeValue(0);
    this.increment.addEventListener("click", () => {
      if (this.val < this.max) {
        this.changeValue(1);
      }
    });
    this.decrement.addEventListener("click", () => {
      if (this.val > 1) {
        this.changeValue(-1);
      }
    });
  },
  changeValue: function(koef) {
    this.val += koef;

    this.input.value = this.val;
    this.price.innerHTML = (Number(this.price.dataset.productPrice) * this.val).toFixed(2);
    this.best.innerHTML = (Number(this.best.dataset.productBest) * this.val).toFixed(2);
  }
};

function Qty2(props) {
  this.el = props.el;
  this.val = 1;
  this.max = 3;
  this.activeTab = 0;
  this.wrapper = this.el.closest("[data-tabs]");
  this.input = this.el.querySelector("[data-qty-value]");
  this.tabsCtrlList = this.wrapper.querySelectorAll("[data-tabs-ctrl]");
  this.dosageLists = this.wrapper.querySelectorAll("[data-product-dosage-list]");
  this.prodPriceList = this.wrapper.querySelectorAll("[data-prod-price]");
  this.price = this.wrapper.querySelector("[data-product-price]");
  this.best = this.wrapper.querySelector("[data-product-best]");
  this.increment = this.wrapper.querySelector("[data-qty-increment]");
  this.decrement = this.el.querySelector("[data-qty-decrement]");

  this.init();
}

Qty2.prototype = {
  init: function() {
    this.changeDosages = this.changeDosages.bind(this);

    this.clearDosageList();
    this.changeValue(0);
    this.increment.addEventListener("click", () => {
      if (this.val < this.max) {
        this.changeValue(1);
      }
    });
    this.decrement.addEventListener("click", () => {
      if (this.val > 1) {
        this.changeValue(-1);
      }
    });
    this.tabsCtrlList.forEach(item => {
      const self = this
      item.addEventListener("click", (e) => {
        const currentTab = e.target.closest("[data-tabs-ctrl]");
        const currentIdx = [].slice.apply(self.tabsCtrlList).findIndex(item => item === currentTab);
        if (currentTab && currentIdx !== this.activeTab) {
          this.changeTab();
          this.activeTab = currentIdx;
        }
      });
    });
    this.prodPriceList.forEach(item => {
      item.addEventListener("click", this.changeDosages);
    });
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        this.closeDosage();
      }
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest("[data-product-dosage-list]")) {
        this.closeDosage();
      }
    });
  },
  changeValue: function(koef) {
    this.val += koef;
    this.input.value = this.val;
    const activeElement = this.wrapper.querySelector(".active[data-tabs-item]").querySelector(".active[data-prod-price]");
    this.price.innerHTML = (Number(activeElement.dataset.prodPrice) * this.val).toFixed(2);
    this.best.innerHTML = (Number(activeElement.dataset.prodBest) * this.val).toFixed(2);
  },
  changeTab: function() {
    this.val = 1;
    this.clearDosageList();
    this.changeValue(0);
  },
  changeDosages: function(e) {
    const wrapper = this.wrapper.querySelector(".active[data-tabs-item] [data-product-dosage-list]");
    if (wrapper.classList.contains("opened")) {
      const liItem = e.target.closest("li");
      liItem.closest("[data-product-dosage-list]").querySelectorAll("li").forEach(item => {
        item === liItem
          ? item.classList.add("active")
          : item.classList.remove("active");
      });
      this.changeValue(0);
      this.closeDosage();
    } else {
      wrapper.classList.add("opened");
    }
  },
  clearDosageList: function() {
    this.dosageLists.forEach(list => {
      // list.children[0].classList.add("active");
      [].slice.apply(list.children).forEach((item, idx) => {
        idx === 0
          ? item.classList.add("active")
          : item.classList.remove("active");
      });
    });
  },
  closeDosage: function() {
    const wrapper = this.wrapper.querySelector(".active[data-tabs-item] [data-product-dosage-list]");
    wrapper.classList.remove("opened");
  }
};