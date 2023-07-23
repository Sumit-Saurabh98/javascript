function changeColor(index) {
    const navItems = document.getElementsByClassName("nav-item");
    
    // Reset the color for all items
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove("active");
    }
  
    // Set the color to red for the selected item
    navItems[index].classList.add("active");
  }
  