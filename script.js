gsap.to(".header", { duration: 2,rotationX: 360, repeat: -1  });

gsap.to("#myCircle", {
    duration: 2,
    x: 100, // Move the circle horizontally to the right
    y: 100, // Move the circle vertically down
    scale: 2, // Scale the circle size
    rotation: 360, // Rotate the circle
    ease: "power1.inOut", // Easing function
    repeat: -1, // Repeat indefinitely
    yoyo: true // Reverse the animation on each repeat
});

// Lấy ra các nút bấm
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// Gắn sự kiện click cho nút 1
button1.addEventListener('click', function() {
  alert('Паша. Чего ты ждешь? Нажми кнопку ок!');
});

// Gắn sự kiện click cho nút 2
button2.addEventListener('click', function() {
  alert('Молодец! но тут нечего смотреть');
});

// Hàm chuyển giao diện
function chuyenGiaoDien() {
    // Thay đổi location của window để chuyển đến giao diện mới
    window.location.href = 'giao_dien_moi.html';
  }

  das1.addEventListener('click', function() {
    alert('Ты серьёзно?????');
  });

  das2.addEventListener('click', function() {
    alert('Это неприемлемо, иди в угол!');
  });


// Lấy tất cả các tiêu đề h1 trong div typewriter
var typewriter = document.querySelector('.typewriter');
var headers = typewriter.getElementsByTagName('p');

// Hàm để tạo hiệu ứng đánh chữ
function typeEffect(element, delay) {
  var text = element.innerHTML;
  element.innerHTML = '';
  
  var i = 0;
  var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, delay);
}

// Áp dụng hiệu ứng cho mỗi tiêu đề h1
var delay = 500; // Thời gian chờ trước khi bắt đầu hiệu ứng cho mỗi dòng
for (let i = 0; i < headers.length; i++) {
  setTimeout(function() {
    typeEffect(headers[i], 150); // Thời gian "đánh máy" cho mỗi ký tự
  }, delay * i);
}
  
