//Sarah Tejchma

var homeContent = "<h1>HOME</h1>";
var aboutContent = "<h1>ABOUT</h1>";
var productsContent = "<h1>PRODUCTS</h1>";
var contactsContent = "<h1>CONTACTS</h1>";
var staffContent = "<h1>STAFF</h1>";

//named function
function addListener() {
  var sectionShowing = "homeSection";
  //var sectionID = buttonID + "Content";

  //   $("#" + sectionShowing).html(homeContent);

  $("nav a").click(function(e) {
    var buttonID = e.currentTarget.id;
    var sectionID = buttonID + "Section";
    var currentContent = buttonID + "Content";

    //this turns off the old section
    $("#" + sectionShowing).attr("class", "hide");

    //we switch the name to the new section to show
    sectionShowing = sectionID;
    //display current content
    //$("#" + sectionShowing).html(eval(currentContent));

    //then show the section
    $("#" + sectionShowing).attr("class", "show");
    //$("section").html(buttonID);
    //buttonPressed(buttonID);
  });
  //console.log("Hello There " + firstName + lastName);
}

//anonymous function
$(document).ready(function() {
  addListener();
  //alert("document is ready");
  //addListener("Sarah ", "Barnes");
});
