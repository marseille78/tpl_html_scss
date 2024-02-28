document.addEventListener("DOMContentLoaded", function () {
  /************************************
   * Resize Browser Window
   ***********************************/

  window.addEventListener("resize", () => {
    document.querySelectorAll(".opened").forEach((el) => {
      el.classList.remove("opened");
    });
  });

  /***********************************
   * Mob menu
   **********************************/

  (function () {
    const block = document.querySelector("[data-header]");
    const btnToggle = document.querySelector("[data-toggle-menu]");

    if (!block || !btnToggle) return;

    new Header({block, btnToggle});
  })();

  /***********************************
   * Categories
   **********************************/

  (function() {
    const blockCategory = document.querySelector("[data-category-block]");

    if (!blockCategory) return;

    new Categories(blockCategory);
  })();

  /***********************************
   * Search
   **********************************/

  (function() {
    const blockSearch = document.querySelector("[data-search]");

    if (!blockSearch) return;

    new Search(blockSearch);
  })();

  /***********************************
   * Swiper
   **********************************/
  
  (function() {
    if (document.querySelector("[data-swiper]")) {
      new Swiper("[data-swiper]", swiperProps);
    }
  })();

  /***************************************
   * Tabs
   **************************************/

  (function() {
    const tabs = document.querySelectorAll("[data-tabs]");
    if (tabs.length === 0) return;
    tabs.forEach(item => {
      new Tabs(item);
    });
  })();

  /****************************************
   * QTY
   ***************************************/

  (function() {
    const qtyList = document.querySelectorAll("[data-product-qty]");
    if (qtyList.length === 0) return;
    qtyList.forEach(item => {
      new Qty(item);
    });
  })();

  /*****************************************
   * QTY2
   ****************************************/

  (function() {
    const qtyElement = document.querySelector("[data-product-qty-2]");
    if (!qtyElement) return;
    new Qty2({el: qtyElement});
  })();
});
