// Checkbox functionality - Common for all pages

// Check all checkbox
document.addEventListener('DOMContentLoaded', function () {
    var checkAll = document.getElementById('checkAll');
    var checkboxes = document.querySelectorAll('input[name="courseIds[]"]');

    // Function to update checkAll state
    function updateCheckAllState() {
        var checkedCount = document.querySelectorAll('input[name="courseIds[]"]:checked').length;
        var totalCount = checkboxes.length;

        if (checkedCount === 0) {
            checkAll.checked = false;
            checkAll.indeterminate = false;
        } else if (checkedCount === totalCount) {
            checkAll.checked = true;
            checkAll.indeterminate = false;
        } else {
            checkAll.checked = false;
            checkAll.indeterminate = true;
        }
    }

    // When checkAll is clicked
    if (checkAll) {
        checkAll.addEventListener('change', function () {
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = checkAll.checked;
            });
        });
    }

    // When individual checkbox is clicked
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            updateCheckAllState();
        });
    });

    // Initial state
    updateCheckAllState();
});

// SweetAlert2 Toast functions
function showToast(type, message) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: type,
        title: message
    })
}

function showSuccessToast(message) {
    showToast('success', message);
}

function showErrorToast(message) {
    showToast('error', message);
}