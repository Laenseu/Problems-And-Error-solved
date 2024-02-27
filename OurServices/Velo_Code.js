// this velo code is use to make the button from embeded code to be clickable and direct to the other pages  to not use the link and just call the pages

import wixLocation from "wix-location"

$w.onReady(function () {
  $w("#html4").onMessage((event) => {
    if (event.data === "ITSM") {
      wixLocation.to("/itsm") // using relative path
    } else if (event.data === "ITAM") {
      wixLocation.to("/itam") // navigate to a specific element on the Long Page
    } else if (event.data === "SecurityServices") {
      wixLocation.to("/securityservices") // navigate to a specific element on the Long Page
    } else if (event.data === "ETS") {
      wixLocation.to("/ets") // navigate to a specific element on the Long Page
    }
  })
})
