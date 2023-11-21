$(document).ready(function () {


  if ($(window).width() < 768) {
    const productWrapper = $(".main-product-wrapper");

    if (productWrapper.length > 0) {
      // Smooth scroll to the targetDiv with an offset of -80 pixels
      $("html, body").animate(
        {
          scrollTop: productWrapper.offset().top - 80,
        },
        100
      );
    }
  }

  if ($(window).width() < 400) {
    $('.g-recaptcha').attr('data-size','compact');
  }

  $(".banner-carousel").slick({
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".tab-item[data-category='all']").addClass("active");

  $(".tab-item").click(function () {
    $(".tab-item").removeClass("active");

    $(this).addClass("active");

    var selectedCategory = $(this).data("category");

    $(".homepage-product-item").each(function () {
      var productCategory = $(this).data("category");
      if (selectedCategory === "all" || selectedCategory === productCategory) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  $(".gallery-content-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000, // Adjust as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".product-photo").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".thumbnail-slider",
  });

  // Initialize the thumbnail slider
  $(".thumbnail-slider").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product-photo",
    focusOnSelect: true,
  });
  const thumbnailSlider = $(".thumbnail-slider");
  if (thumbnailSlider.find(".thumbnail-item").length <= 1) {
    thumbnailSlider.css("display", "none");
  }
});

// Get all anchor elements on the page
// const anchorElements = document.querySelectorAll("a");

// // Loop through each anchor element
// anchorElements.forEach((anchor) => {
//   const href = anchor.getAttribute("href");

//   // Check if the href attribute contains ".html"
//   if (href && href.includes(".html")) {
//     // Remove ".html" from the href attribute
//     anchor.setAttribute("href", href.replace(".html", ""));
//   }
// });

function openMenu() {
  var x = document.getElementById("mobileMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const div = document.getElementById("clickWrapper");

div.addEventListener("click", () => {
  if (div.childNodes[0].classList.contains("close")) {
    div.childNodes[0].className = "menu animate";
  } else {
    div.childNodes[0].className = "close animate";
  }
});

var acc = document.getElementsByClassName("products-dropdown");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = document.querySelector(".mobile-dropdown-content");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

Fancybox.bind('[data-fancybox="gallery"]', {});
