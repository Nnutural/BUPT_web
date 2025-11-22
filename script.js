let currentCardType = 'student';
const backImageUrl = "img/view/沙河校区校园风景/7.沙河校区 公共教学楼1.jpg";
// const backImageUrl = "img/view/沙河校区校园风景/6.沙河校区 十字路口.jpg";
// const backImageUrl = "img/view/西土城路校区校园风景/1.西土城路校区 西门.jpg";


// Card flip functionality
document.getElementById('cardFlip').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

// Update display when input changes
function updateDisplay() {
    const name = document.getElementById('inputName').value || '张三';
    const id = document.getElementById('inputId').value || '2023211512';
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

// Update card type button styles (primary vs outline)
function updateCardTypeButtons(selectedType) {
    const studentBtn = document.querySelector('.button-group button[data-card-type="student"]');
    const staffBtn = document.querySelector('.button-group button[data-card-type="staff"]');

    if (studentBtn) {
        studentBtn.classList.remove('btn-primary', 'btn-outline', 'active');
        if (selectedType === 'student') {
            studentBtn.classList.add('btn-primary', 'active');
        } else {
            studentBtn.classList.add('btn-outline');
        }
    }

    if (staffBtn) {
        staffBtn.classList.remove('btn-primary', 'btn-outline', 'active');
        if (selectedType === 'staff') {
            staffBtn.classList.add('btn-primary', 'active');
        } else {
            staffBtn.classList.add('btn-outline');
        }
    }
}

// Set card backgrounds (front white, back photo)
function applyCardBackground() {
    const cardFront = document.getElementById('cardFront');
    const cardBack = document.getElementById('cardBack');

    if (cardFront) {
        cardFront.style.background = 'white';
    }

    if (cardBack) {
        cardBack.style.backgroundImage = `url('${backImageUrl}')`;
        cardBack.style.backgroundSize = 'cover';
        cardBack.style.backgroundPosition = 'center';
        cardBack.style.backgroundRepeat = 'no-repeat';
        cardBack.style.backgroundBlendMode = 'normal';
    }
}

// Set card type
function setCardType(type, evt) {
    currentCardType = type;
    updateCardTypeButtons(type);

    if (type === 'student') {
        document.getElementById('cardTypeDisplay').textContent = '学生卡';
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

// Initialize
updateDisplay();
applyCardBackground();
updateCardTypeButtons(currentCardType);

// Initialize default photo
const photoImg = document.getElementById('displayPhoto');
const photoPlaceholder = document.getElementById('photoPlaceholder');
if (photoImg.src && photoImg.src.includes('dog.png')) {
    photoImg.style.display = 'block';
    photoPlaceholder.style.display = 'none';
}

