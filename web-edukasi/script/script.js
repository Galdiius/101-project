let button = document.getElementById('submit')
let email = document.getElementById('email')
let pesan = document.getElementById('pesan')

button.addEventListener('click',function(){
    if(email.value == '' || pesan.value == ''){
        Swal.fire({
            title: 'Error!',
            text: 'Field tidak boleh kosong',
            icon: 'error',
            confirmButtonText: 'Tutup'
          })
    }else{
        Swal.fire({
            title: 'Sukses!',
            text: 'Pesan berhasil terkirim!',
            icon: 'success',
            confirmButtonText: 'Tutup'
          })
        email.value = ''
        pesan.value = ''
    }
})