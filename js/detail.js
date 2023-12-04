// Hàm để load sản phẩm lên trang index.html
function loadProducts() {
  $.ajax({
    type: "GET",
    url: "https://shop.cyberlearn.vn/api/Product",
    dataType: "json",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg",
      "Content-Type": "application/json",
    },
    success: function (data) {
      console.log("success", data);
      var html = "";
      var dem = 0;
      $.each(data.content, function (i, item) {
        html +=
          '<div class="card text-left">' +
          '<img class="card-img-top" src="' +
          item.image +
          '" alt="">' +
          '<div class="card-body">' +
          '<h4 class="card-title">' +
          item.name +
          "</h4>" +
          '<div class="rectangle rectangle-2 text-center">' +
          '<a href="./detail.html?productid=' +
          item.id +
          '" class="text-white line">Buy now</a>' +
          "</div>" +
          '<div class="rectangle rectangle-3 text-right">' +
          '<p class="price">' +
          item.price +
          "$</p>" +
          "</div>" +
          "</div>" +
          "</div>";
        dem++;
        if (dem == 6) return false;
      });
      $("#lstProduct").append(html);
    },
    error: function (xhr, status, error) {
      alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
    },
  });
}

// Hàm để load chi tiết sản phẩm lên trang detail.html
function loadProductDetails(productId) {
  $.ajax({
    type: "GET",
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + productId,
    dataType: "json",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg",
      "Content-Type": "application/json",
    },
    success: function (data) {
      console.log("success", data);
      $("title").text(data.content.name);
      $(".name").text(data.content.name);
      $(".shortDescription").text(data.content.shortDescription);
      $(".detail-img").attr("src", data.content.image);
      $(".price-detail").text(data.content.price + "$");

      var html = "";
      $.each(data.content.size, function (i, item) {
        html += '<button class="btn-size">' + item + "</button>";
      });
      $(".rectangle-5").append(html);
    },
    error: function (xhr, status, error) {
      alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
    },
  });
}

// Hàm xử lý khi trang index.html được tải
window.onload = function () {
  loadProducts();
};

// Hàm xử lý khi trang detail.html được tải
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("params", myParam);
  loadProductDetails(myParam);
};

// Các hàm xử lý số lượng và thêm vào giỏ hàng có thể giữ nguyên như trong đoạn mã trước đó.
