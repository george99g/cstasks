(function($) {
  $.fn.dropdown = function(action, options) {
    switch(action) {
      case "create":
      case undefined:
        this.removeAttr("id");
        //To show that the select is being synced with the custom dropdown.
        /*this.css("display", "none");*/
        var selectOptions = this[0].options;
        var selectedOption = selectOptions.item(this[0].selectedOption);
        //can use jQuey way to create elements: var dropdownList = $('<div></div>');
		var dropdownList = document.createElement("div"); 
        dropdownList.className = "dropdown-list";
        this[0].parentNode.replaceChild(dropdownList, this[0]);
        dropdownList.appendChild(this[0]);
        var current = document.createElement("div");
        current.className = "current";
        current.setAttribute("data-value", selectedOption.value);
        current.innerHTML = selectedOption.innerHTML;
        dropdownList.appendChild(current);
        var optionsContainer = document.createElement("div");
        optionsContainer.className = "options-container";
        optionsContainer.style.position = "absolute";
        optionsContainer.style.display = "none";
        for(var i = 0; i < selectOptions.length; i++) {
          var dropdownItem = document.createElement("div");
          dropdownItem.className = "dropdown-item";
          dropdownItem.setAttribute("data-value", selectOptions[i].value);
          dropdownItem.setAttribute("data-index", i);
          dropdownItem.innerHTML = selectOptions[i].innerHTML;
          optionsContainer.appendChild(dropdownItem);
          $(dropdownItem).click(function() {
            $(dropdownList).dropdown("selectOption", this);
            $(current).trigger("click");
          });
        }
        dropdownList.appendChild(optionsContainer);
        $(dropdownList).data("select", this[0]).data("current", current)
          .data("optionsContainer", optionsContainer);
        $(current).click(function () {
          if(optionsContainer.style.display === "none"){
            current.classList.add("open");
            optionsContainer.style.display = "";
          }
          else {
            optionsContainer.style.display = "none";
            current.classList.remove("open");
          }
        });
      break;
      case "value":
        var current = this.data("current");
        var option = document.createElement("option");
        option.text = current.innerHTML;
        option.value = current.getAttribute("data-value");
        return option;
      case "addOptions":
        var select = this.data("select");
        var current = this.data("current");
        var optionsContainer = this.data("optionsContainer");
        for(var i = 0; i < options.length; i++) {
          var dropdownItem = document.createElement("div");
          dropdownItem.className = "dropdown-item";
          dropdownItem.setAttribute("data-value", options[i].value);
          dropdownItem.setAttribute("data-index", select.options.length);
          dropdownItem.innerHTML = options[i].text;
          optionsContainer.appendChild(dropdownItem);
          var dropdownList = this;
          $(dropdownItem).click(function() {
            $(dropdownList).dropdown("selectOption", this);
            $(current).trigger("click");
          });
          var option = document.createElement("option");
          option.innerHTML = options[i].text;
          option.value = options[i].value;
          select.add(option);
        }
      break;
      case "removeOptions":
        var select = this.data("select");
        for(var i = select.length - 1; i >= 0; i--) {
          if(options.includes(select[i].value)) {
            select.remove(i);
          }
        }
        regenerateOptions(this[0], select, this.data("current"), this.data("optionsContainer"));
      break;
      case "sortOptions":
        var select = this.data("select");
        var current = this.data("current");
        var optionsContainer = this.data("optionsContainer");
        sortSelectOptions(select);
        regenerateOptions(this[0], select, current, optionsContainer);
      break;
      case "selectOption":
        var select = this.data("select");
        var current = this.data("current");
        select.selectedIndex = options.getAttribute("data-index");
        current.innerHTML = options.innerHTML;
        current.setAttribute("data-value", options.value);
    }
    return this;
  };
  function sortSelectOptions(select) {
    var arr = new Array;
    for (var i = 0; i < select.options.length; i++) {
        arr[i] = new Array;
        arr[i][0] = select.options[i].text;
        arr[i][1] = select.options[i].value;
    }
    arr.sort();
    while (select.options.length > 0) {
        select.remove(0);
    }
    for (i = 0; i < arr.length; i++) {
        var op = document.createElement("option");
        op.innerHTML = arr[i][0];
        op.value = arr[i][1];
        select.options[i] = op;
    }
    return;
  }
  function regenerateOptions(dropdownList, select, current, optionsContainer) {
    while(optionsContainer.firstChild)
      optionsContainer.removeChild(optionsContainer.firstChild);
    for(var i = 0; i < select.options.length; i++) {
      var dropdownItem = document.createElement("div");
      dropdownItem.className = "dropdown-item";
      dropdownItem.setAttribute("data-value", select.options[i].value);
      dropdownItem.setAttribute("data-index", i);
      dropdownItem.innerHTML = select.options[i].text;
      optionsContainer.appendChild(dropdownItem);
      $(dropdownItem).click(function() {
        $(dropdownList).dropdown("selectOption", this);
        $(current).trigger("click");
      });
    }
    $(dropdownList).dropdown("selectOption", select.options[0]);
  }
})(jQuery);
