window.onload = function () {
  // Gọi API để lấy dữ liệu
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
      // Xử lý dữ liệu và tạo HTML
      var html = "";
      $.each(data.content, function (i, item) {
        html +=
          '<div class="card text-left">' +
          '<img class="card-img-top" src="' + item.image + '" alt="">' +
          '<div class="card-body">' +
          '<h4 class="card-title">' + item.name + "</h4>" +
          '<div class="rectangle rectangle-2 text-center">' +
          '<a href="./detail.html?productid=' + item.id + '" class="text-white line">Buy now</a>' +
          "</div>" +
          '<div class="rectangle rectangle-3 text-right">' +
          '<p class="price">' + item.price + "$</p>" +
          "</div>" +
          "</div>" +
          "</div>";
      });
      // Thêm HTML vào đối tượng có id là "lstProduct"
      $("#lstProduct").html(html);
    },
    error: function (xhr, status, error) {
      console.error("Error: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
    },
  });
};
