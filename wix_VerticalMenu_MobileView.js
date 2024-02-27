//Encounter a problem that the mega menu not show in the vertival menu in mobile view
// so this code is call the menu from the horizontal menu into vertical menu
// and create newpages for vertival Menu and add the links of the pages
//creating this because mega menu is not compatible in mobile view

$w.onReady(function () {
  let horizontalMenuItems = $w("#horizontalMenu1").menuItems
  $w("#expandableMenu1").menuItems = horizontalMenuItems

  let menussItems = $w("#expandableMenu1").menuItems

  let newPages = [
    { label: "ITSM Services", link: "/itsm-services" },
    { label: "ITAM Services", link: "/itam-services" },
    { label: "Security Services", link: "/security-services" },
    { label: "Educ.", link: "/educ" },
  ]
  // Find the "Solutions" menu item
  let solutionsItem = menussItems.find((item) => item.label === "Solutions")

  // If the "Solutions" menu item exists and it has a submenu, add the new pages to it
  if (solutionsItem && solutionsItem.menuItems) {
    solutionsItem.menuItems.push(...newPages)
  } else {
    // If the "Solutions" menu item doesn't have a submenu, create one
    solutionsItem.menuItems = newPages
  }
  // set the new menu items
  $w("#expandableMenu1").menuItems = menussItems

  // Assuming you have the 'solutionsItem' and 'newPages' as defined in your question
  solutionsItem.menuItems = newPages
  let updatedMenuItems = menussItems.map((item) =>
    item.label === "Solutions" ? solutionsItem : item
  )

  // Finally, set the updated menu items to the expandableMenu1
  $w("#expandableMenu1").menuItems = updatedMenuItems
})
