var siteData = {
  gallery_photos: {
    "Image 1": "/assets/gallery/1.jpg",
    "Image 2": "/assets/gallery/2.jpg",
    "Image 3": "/assets/gallery/3.jpg",
    "Image 4": "/assets/gallery/5-1.jpg",
    "Image 5": "/assets/gallery/5-2.jpg",
    "Image 6": "/assets/gallery/6.jpg",
    "Image 7": "/assets/gallery/7.jpg",
    "Image 8": "/assets/gallery/8.jpg",
    "Image 9": "/assets/gallery/9-1.jpg",
    "Image 10": "/assets/gallery/9-2.jpg",
    "Image 11": "/assets/gallery/10-1.jpg",
    "Image 12": "/assets/gallery/10-2.jpg",
    "Image 13": "/assets/gallery/11.png",
    "Image 14": "/assets/gallery/12-1.jpg",
    "Image 15": "/assets/gallery/12-2.jpg",
  },
  grain_dryer: {
    "Image 1": "/assets/products-main-images/grain-dryer-photo2.jpg",
    "Image 3": "/assets/products-main-images/grain-dryer-photo3.jpg",
  },
  bulk_dryer: {
    "Image 1": "/assets/products-main-images/bulk-dryer1.jpg",
    "Image 2": "/assets/products-main-images/bulk-dryer2.jpg",
    "Image 3": "/assets/products-main-images/bulk-dryer3.jpg",
    "Image 4": "/assets/products-main-images/bulk-dryer4.jpg",
    "Image 5": "/assets/products-main-images/bulk-dryer5.jpg",
    "Image 6": "/assets/products-main-images/bulk-dryer6.jpg",
    "Image 7": "/assets/products-main-images/bulk-dryer-photo2.jpg",
    "Image 8": "/assets/products-main-images/bulk-dryer-photo3.jpg",
    "Image 9": "/assets/products-main-images/bulk-dryer-photo4.jpg",
  },
  rice_huller: {
    "Image 1": "/assets/products-main-images/rice-huller-photo1.jpg",
  },
  husk_blower: {
    "Image 1": "/assets/products-main-images/husk-blower-photo1.jpg",
  },
  paddy_separator: {
    "Image 1": "/assets/products-main-images/paddy-separator-photo1.jpg",
  },
  de_stoner: {
    "Image 1": "/assets/products-main-images/de-stoner-photo1.jpg",
  },
  vertical_whitener: {
    "Image 1": "/assets/products-main-images/vertical-whitener-photo1.jpg",
  },
  rotary_sifter: {
    "Image 1": "/assets/products-main-images/rotary-sifter-photo1.jpg",
  },
  mist_polisher: {
    "Image 1": "/assets/products-main-images/mist-polisher-photo1.jpg",
  },
  color_sorter: {
    "Image 1": "/assets/products-main-images/color-sorter-photo1.jpg",
    "Image 2": "/assets/products-main-images/color-sorter-photo2.jpg",
    "Image 3": "/assets/products-main-images/color-sorter-photo3.jpg",
    "Image 4": "/assets/products-main-images/color-sorter-photo4.jpg",
    "Image 5": "/assets/products-main-images/color-sorter-photo5.jpg",
    "Image 6": "/assets/products-main-images/color-sorter-photo6.jpg",
    "Image 7": "/assets/products-main-images/color-sorter-photo7.jpg",
  },
  mobile_ricemill: {
    "Image 1": "/assets/products-main-images/mobile-ricemill1.jpg",
    "Image 4": "/assets/products-main-images/mobile-ricemill-photo2.jpg",
    "Image 5": "/assets/products-main-images/mobile-ricemill-photo3.jpg",
  },
};

$(document).ready(function () {
  $.each(siteData.gallery_photos, function (k, imageSrc) {
    var galleryItem = $("<div class='gallery-item'></div>");
    var fancyboxContainer = $("<a data-fancybox='gallery'></a>");
    galleryItem.append(fancyboxContainer.attr("data-src", imageSrc));
    fancyboxContainer.append($("<img>", { src: imageSrc }));
    $(".gallery-content-slider").append(galleryItem);
  });

  $.each(siteData.grain_dryer, function (k, imageSrc) {
    var productPhoto = $("<img>", { src: imageSrc });
    $(".grain-dryer .product-photo").append(productPhoto);

    var thumbnailDiv = $("<div class='thumbnail-item'></div>");
    thumbnailDiv.append($("<img>", { src: imageSrc }));
    $(".grain-dryer .thumbnail-slider").append(thumbnailDiv);
  });

  $.each(siteData.bulk_dryer, function (k, imageSrc) {
    var productPhoto = $("<img>", { src: imageSrc });
    $(".bulk-dryer .product-photo").append(productPhoto);

    var thumbnailDiv = $("<div class='thumbnail-item'></div>");
    thumbnailDiv.append($("<img>", { src: imageSrc }));
    $(".bulk-dryer .thumbnail-slider").append(thumbnailDiv);
  });

  $.each(siteData.rice_huller, function (k, imageSrc) {
    var productPhoto = $("<img>", { src: imageSrc });
    $(".rice-huller .product-photo").append(productPhoto);

    var thumbnailDiv = $("<div class='thumbnail-item'></div>");
    thumbnailDiv.append($("<img>", { src: imageSrc }));
    $(".rice-huller .thumbnail-slider").append(thumbnailDiv);
  });

  $.each(siteData.husk_blower, function (k, imageSrc) {
    var productPhoto = $("<img>", { src: imageSrc });
    $(".husk-blower .product-photo").append(productPhoto);

    var thumbnailDiv = $("<div class='thumbnail-item'></div>");
    thumbnailDiv.append($("<img>", { src: imageSrc }));
    $(".husk-blower .thumbnail-slider").append(thumbnailDiv);
  });

  $.each(siteData.paddy_separator, function (k, imageSrc) {
    var productPhoto = $("<img>", { src: imageSrc });
    $(".paddy-separator .product-photo").append(productPhoto);

    var thumbnailDiv = $("<div class='thumbnail-item'></div>");
    thumbnailDiv.append($("<img>", { src: imageSrc }));
    $(".paddy-separator .thumbnail-slider").append(thumbnailDiv);
  });

  $.each(siteData.de_stoner, function (k, imageSrc) {
    var productPhoto = $("<img>", { src: imageSrc });
    $(".de-stoner .product-photo").append(productPhoto);

    var thumbnailDiv = $("<div class='thumbnail-item'></div>");
    thumbnailDiv.append($("<img>", { src: imageSrc }));
    $(".de-stoner .thumbnail-slider").append(thumbnailDiv);
  });

  $.each(siteData.vertical_whitener, function (k, imageSrc) {
    var productPhoto = $("<img>", { src: imageSrc });
    $(".vertical-whitener .product-photo").append(productPhoto);

    var thumbnailDiv = $("<div class='thumbnail-item'></div>");
    thumbnailDiv.append($("<img>", { src: imageSrc }));
    $(".vertical-whitener .thumbnail-slider").append(thumbnailDiv);
  });

  $.each(siteData.rotary_sifter, function (k, imageSrc) {
    var productPhoto = $("<img>", { src: imageSrc });
    $(".rotary-sifter .product-photo").append(productPhoto);

    var thumbnailDiv = $("<div class='thumbnail-item'></div>");
    thumbnailDiv.append($("<img>", { src: imageSrc }));
    $(".rotary-sifter .thumbnail-slider").append(thumbnailDiv);
  });

  $.each(siteData.mist_polisher, function (k, imageSrc) {
    var productPhoto = $("<img>", { src: imageSrc });
    $(".mist-polisher .product-photo").append(productPhoto);

    var thumbnailDiv = $("<div class='thumbnail-item'></div>");
    thumbnailDiv.append($("<img>", { src: imageSrc }));
    $(".mist-polisher .thumbnail-slider").append(thumbnailDiv);
  });

  $.each(siteData.color_sorter, function (k, imageSrc) {
    var productPhoto = $("<img>", { src: imageSrc });
    $(".color-sorter .product-photo").append(productPhoto);

    var thumbnailDiv = $("<div class='thumbnail-item'></div>");
    thumbnailDiv.append($("<img>", { src: imageSrc }));
    $(".color-sorter .thumbnail-slider").append(thumbnailDiv);
  });

  $.each(siteData.mobile_ricemill, function (k, imageSrc) {
    var productPhoto = $("<img>", { src: imageSrc });
    $(".mobile-ricemill .product-photo").append(productPhoto);

    var thumbnailDiv = $("<div class='thumbnail-item'></div>");
    thumbnailDiv.append($("<img>", { src: imageSrc }));
    $(".mobile-ricemill .thumbnail-slider").append(thumbnailDiv);
  });
});
