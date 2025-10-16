// نمایش قسمت sign up

function signUp() {
    const overlay = document.getElementById('signupOverlay');
    if (!overlay) return;
    overlay.style.display = 'flex';
    if (overlay.scrollIntoView) {
        overlay.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}



window.signUp = signUp;

// بستن فرم
function closeSignUp(){
    const overlay = document.getElementById('signupOverlay');
    if (!overlay) return;
    overlay.style.display = 'none';
}
window.closeSignUp = closeSignUp;

// فرم رجیستر

function ensureToastContainer(){
    let container = document.getElementById('toast-container');
    if(!container){
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    return container;
}

function showNotification(message, duration){
    const container = ensureToastContainer();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    const timeout = typeof duration === 'number' ? duration : 3000;
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
            // Remove container if there are no more toasts
            if (container && container.childElementCount === 0) {
                container.remove();
            }
        }, 300);
    }, timeout);
}

const registerForm = document.getElementById('formBox');
if(registerForm){
    registerForm.addEventListener('submit', function(e){
        e.preventDefault();
        const nameInput = document.getElementById('name');
        const userName = nameInput ? nameInput.value.trim() : '';
        if(userName){
            showNotification(`${userName} با موفقیت ثبت شد`, 4000);
        }else{
            showNotification(`کاربر با موفقیت ثبت شد`, 4000);
        }
    });
}

// در صورت نیاز برای دسترسی سراسری
window.showNotification = showNotification;

// فرم ورود حساب کاربری
function logIn(){
    const overlay2=document.getElementById('logInOverlay');
    if(!overlay2) return;
    overlay2.style.display='flex'
    if (overlay2.scrollIntoView) {
        overlay2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

}
window.logIn=logIn;

// فرم بسته شدن LOGIN

function closeLogIn(){
    const overlay2 = document.getElementById('logInOverlay');
    if (!overlay2) return;
    overlay2.style.display = 'none';
}
window.closeLogIn= closeLogIn;



window.showPage= function(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Scroll animation for mainSection4
function handleScrollAnimation() {
    const mainSection4 = document.querySelector('.mainSection4');
    if (!mainSection4) return;

    const rect = mainSection4.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // اگر element در viewport قرار گرفت، انیمیشن را اجرا کن
    if (rect.top < windowHeight && rect.bottom > 0) {
        mainSection4.classList.add('animate');
    }
}

// اضافه کردن event listener برای scroll
window.addEventListener('scroll', handleScrollAnimation);

// اجرای اولیه برای بررسی وضعیت
document.addEventListener('DOMContentLoaded', handleScrollAnimation);