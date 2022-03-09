const main =document.querySelector('#toast');

const btnSuccess = document.querySelector('.btn-success');
const btnWarning = document.querySelector('.btn-warning');
const btnError = document.querySelector('.btn-error');

const timeDelay = 5000;
const ms = 1000;


// tao ojb toast
const success = {
    message: 'Success',
    title: 'Đăng nhập thành công.',
    type: 'success',
    icon: 'fa-circle-check',
};

const warning = {
    message: 'Warning',
    title: 'Cảnh báo lỗi, vui lòng kiểm tra lại thông tin.',
    type: 'warning',
    icon: 'fa-circle-exclamation',
};

const error = {
    message: 'Error!',
    title: 'Đăng nhập thất bại, vui lòng liên hệ admin.',
    type: 'error',
    icon: 'fa-circle-xmark',
};

function showToast(message, title, type, icon) {
    // Tao ra div co class toast
    const toast = document.createElement('div');

    // Them html cho toast
    toast.innerHTML = `
        <div class="toast ${type}">
            <div class="toast-icon">
                <i class="fa-solid ${icon}"></i>
            </div>
            <div class="toast-body">
                <h3 class="toast-messager">${message}</h3>
                <h6 class="toast-title">${title}</h6>
            </div>
            <div class="toast-close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
    `

    // Them class toast lam con main
    main.appendChild(toast);

    // Them animation cho toast
    toast.style.animation = `showToast 0.5s ease-in-out, hideToast 1s ${timeDelay/ms}s ease forwards`;

    // Sau setTimeout thi remove toast ra khoi DOM
    setTimeout(function() {
        main.removeChild(toast);
    }, timeDelay+1000); // + 1s cua hideToast


    // 
    toast.onclick = (e) => {
        // e.target html khi click vao toast 
        // Tim den close cua toast
        const a = e.target.closest('.toast-close');

        // Neu co thi remove toast con cua main
        if(a) {
            main.removeChild(toast);
        }
    }
}

btnSuccess.onclick = () => {
    showToast(success.message, success.title, success.type, success.icon);
}

btnWarning.onclick = () => {
    showToast(warning.message, warning.title, warning.type, warning.icon)
}

btnError.onclick = () => {
    showToast(error.message, error.title, error.type, error.icon)
}

