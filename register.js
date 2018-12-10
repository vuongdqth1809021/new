document.getElementById('submit').onclick=function () {
    if(validate()){
        submit();
    }
};
function submit() {
    var _name = document.forms['register-form']['name'].value;
    var _email = document.forms['register-form']['email'].value;
    var _phone = document.forms['register-form']['phone'].value;
    var _gender = document.forms['register-form']['gender'].value;
    var _favor = document.forms['register-form']['favor'].value;
    var _introduce = document.forms['register-form']['introduce'].value;


    var register = {
        name: _name,
        email: _email,
        phone: _phone,
        gender: _gender,
        introduce: _introduce,
    };

}
    function validate() {
        var isValid;
        var isValidName=true;
        var isValidEmail=true;
        var isValidPhone=true;
        var isValidGender=true;
        var txtName=document.forms['register-form']['name'];
        var msgName=txtName.nextElementSibling;
        if(txtName.value ==null||txtName.value.length==0||txtName.value.length>50){
            msgName.classList.remove('msg-success');
            msgName.classList.add('msg-error');
            msgName.innerHTML='Vui lòng nhập họ và tên';
            isValidName=false;
        }else {
            msgName.classList.remove('msg-error');
            msgName.classList.add('msg-success');
            msgName.innerHTML = 'Ok.';
        }
        var txtEmail=document.forms['register-form']['email'];
        var msgEmail=txtEmail.nextElementSibling;
        if(txtEmail.value ==null||txtEmail.value.length==0||txtEmail.value.length>50){
            msgEmail.classList.remove('msg-success');
            msgEmail.classList.add('msg-error');
            msgEmail.innerHTML='Vui lòng nhập email';
            isValidEmail=false;
        }else {
            msgEmail.classList.remove('msg-error');
            msgEmail.classList.add('msg-success');
            msgEmail.innerHTML = 'Ok.';
        }
        var txtPhone=document.forms['register-form']['phone'];
        var msgPhone=txtPhone.nextElementSibling;
        if(txtPhone.value ==null||txtPhone.value.length==0||txtPhone.value.length>50){
            msgPhone.classList.remove('msg-success');
            msgPhone.classList.add('msg-error');
            msgPhone.innerHTML='Vui lòng nhập số điện thoại';
            isValidPhone=false
        }else {
            msgPhone.classList.remove('msg-error');
            msgPhone.classList.add('msg-success');
            msgPhone.innerHTML = 'Ok.';
        }
        var txtGender=document.forms['register-form']['gender'];
        var msgGender =txtGender.nextElementSibling;
        if(txtGender.value ==null||txtGender.value.length==0||txtGender.value.length>50){
            msgGender.classList.remove('msg-success');
            msgGender.classList.add('msg-error');
            msgGender.innerHTML='Vui lòng nhập họ và tên';
            isValidGender=false;
        }else {
            msgGender.classList.remove('msg-error');
            msgGender.classList.add('msg-success');
            msgGender.innerHTML = 'Ok.';
        }
        isValid=isValidGender&&isValidPhone&&isValidEmail&&isValidName;
        return isValid;
    }
