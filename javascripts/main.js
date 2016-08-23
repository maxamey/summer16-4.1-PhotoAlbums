$(function(){

  var $thumbnailEl = $("[data-js='thumbnail']");
  var $photoEl = $("[data-js='photo']");
  var $modalEl = $("[data-js='modal']");
  var $modalImageEl = $("[data-js='modal__image']");
  var $modalTitleEl = $("[data-js='modal__title']");
  var $modalExitEl = $("[data-js='modal__exit']");

  $photoEl.on("click", function(e){
    var $imageSource = $(e.currentTarget.children[0]).attr("src");
    var $imageInfoTitle = $(e.currentTarget.children[1]).text();
    $modalEl.toggleClass("modal__visible");
    $modalImageEl.attr("src", $imageSource);
    $modalEl.prepend(`
      <h2 class="modal__title">
        ${$imageInfoTitle}
      </h2>
    `);
  });

  $modalExitEl.on("click", function(e){
    $("div h2").remove();
    $modalImageEl.attr("src", "");
    $modalEl.toggleClass("modal__visible");
  });

  // $("[data-js='modalImageEl']").on("mouseover", function(e){
  //
  // });

});
