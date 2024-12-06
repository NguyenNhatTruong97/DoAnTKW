// Xử lý tìm kiếm nhân vật
document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const element = document.getElementById('element').value;
    const weapon = document.getElementById('weapon').value;
    const characters = document.querySelectorAll('.character');
    const elementHeadings = document.querySelectorAll('h3.text-center');
    const searchResultHeading = document.querySelector('.search-result-heading');

    // Ẩn tất cả nhân vật và tiêu đề
    characters.forEach(character => character.style.display = 'none');
    elementHeadings.forEach(heading => heading.style.display = 'none');

    // Hiển thị heading kết quả tìm kiếm
    searchResultHeading.style.display = 'block';

    // Lọc và hiển thị nhân vật phù hợp
    let hasResults = false;
    characters.forEach(character => {
        const characterElement = character.getAttribute('data-element');
        const characterWeapon = character.getAttribute('data-weapon');

        if ((element === '' || characterElement === element) && 
            (weapon === '' || characterWeapon === weapon)) {
            character.style.display = 'block';
            hasResults = true;
        }
    });

    // Hiển thị thông báo nếu không có kết quả
    if (!hasResults) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '<div class="col-12 text-center"><p>Không tìm thấy nhân vật phù hợp</p></div>';
    }
});

// Xử lý reset form
document.getElementById('searchForm').addEventListener('reset', function () {
    const characters = document.querySelectorAll('.character');
    const elementHeadings = document.querySelectorAll('h3.text-center');
    const searchResultHeading = document.querySelector('.search-result-heading');

    // Hiển thị lại tất cả
    characters.forEach(character => character.style.display = 'block');
    elementHeadings.forEach(heading => heading.style.display = 'block');
    searchResultHeading.classList.remove('hidden');
});

// Áp dụng style cho cards
function applyCardStyles() {
    const cards = document.querySelectorAll('.character .card');
    const elementColors = {
        'Phong': ['#77A1D3', '#79CBCA'],
        'Nham': ['#FFB88C', '#DE6262'],
        'Lôi': ['#9796F0', '#FBC7D4'],
        'Thảo': ['#B4EC51', '#429321'],
        'Thủy': ['#48C6EF', '#6F86D6'],
        'Hỏa': ['#FF512F', '#F09819'],
        'Băng': ['#A1C4FD', '#C2E9FB']
    };

    cards.forEach(card => {
        const element = card.closest('.character').getAttribute('data-element');
        const colors = elementColors[element] || ['#77A1D3', '#79CBCA'];

        // Thêm hiệu ứng hover cho card
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });

        // Thêm hiệu ứng cho hình ảnh
        const img = card.querySelector('img');
        if (img) {
            img.addEventListener('mouseover', function() {
                this.style.transform = 'scale(1.1)';
            });
            img.addEventListener('mouseout', function() {
                this.style.transform = 'scale(1)';
            });
        }
    });
}

// Khởi tạo khi trang load xong
document.addEventListener('DOMContentLoaded', applyCardStyles); 