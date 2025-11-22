const themeGradients = {
    purple: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    pink: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    blue: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    green: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
};

let currentTheme = 'blue';
let currentCardType = 'student';

// Card flip functionality
document.getElementById('cardFlip').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

// Update display when input changes
function updateDisplay() {
    const name = document.getElementById('inputName').value || '张三';
    const id = document.getElementById('inputId').value || '2024001';
    const dept = document.getElementById('inputDept').value || '计算机学院';

    document.getElementById('displayName').textContent = name;
    document.getElementById('displayId').textContent = id;
    document.getElementById('displayDept').textContent = dept;
}

// Update photo when file is selected
function updatePhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoImg = document.getElementById('displayPhoto');
            const photoPlaceholder = document.getElementById('photoPlaceholder');
            photoImg.src = e.target.result;
            photoImg.style.display = 'block';
            photoPlaceholder.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

// Set card type
function setCardType(type) {
    currentCardType = type;
    const buttons = document.querySelectorAll('.button-group button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (type === 'student') {
        document.getElementById('cardTypeDisplay').textContent = '学生证';
        document.getElementById('idLabel').textContent = '学号';
        document.getElementById('deptLabel').textContent = '学院';
        document.getElementById('inputIdLabel').textContent = '学号';
        document.getElementById('inputDeptLabel').textContent = '学院';
    } else {
        document.getElementById('cardTypeDisplay').textContent = '职工卡';
        document.getElementById('idLabel').textContent = '工号';
        document.getElementById('deptLabel').textContent = '部门';
        document.getElementById('inputIdLabel').textContent = '工号';
        document.getElementById('inputDeptLabel').textContent = '部门';
    }
}

// Set theme
function setTheme(theme) {
    currentTheme = theme;
    const cardFront = document.getElementById('cardFront');
    const cardBack = document.getElementById('cardBack');
    const gradient = themeGradients[theme];

    // 设置卡片背景：正面为白色，背面为渐变背景
    cardFront.style.background = 'white';
    cardBack.style.background = gradient;

    // 移除之前为信息部分设置的额外样式（因为整个正面已经是白色）
    const cardCenter = cardFront.querySelector('.card-center');
    if (cardCenter) {
        cardCenter.style.background = '';
        cardCenter.style.padding = '';
        cardCenter.style.borderRadius = '';
    }

    // Update active button
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
        btn.classList.remove('active');
        // 通过按钮的类名匹配主题（如 theme-purple 匹配 'purple'）
        if (btn.classList.contains(`theme-${theme}`)) {
            btn.classList.add('active');
        }
    });
    
    // 如果通过按钮点击调用，确保点击的按钮被激活
    if (typeof event !== 'undefined' && event.target) {
        event.target.classList.add('active');
    }
}

// Initialize
updateDisplay();
setTheme('blue');

// Initialize default photo
const photoImg = document.getElementById('displayPhoto');
const photoPlaceholder = document.getElementById('photoPlaceholder');
if (photoImg.src && photoImg.src.includes('dog.png')) {
    photoImg.style.display = 'block';
    photoPlaceholder.style.display = 'none';
}

