//로그인 아이디, 패스워드 검사
function login_check(){

  //1. 사용자가 입력한 데이터(id와 pw)를 변수에 담는다.
  let id= document.getElementById('id_name').value;//값을변수에담아라
  let pw= document.getElementById('pw_name').value;
  if(id=='master'){//아이디가 맞다면
    if(pw=='1234'){//pw를 검사해서 맞다면
      alert('로그인 성공');
    }else{
        alert('패스워드가 틀립니다. 다시 확인하세요.');
      }
    }else if((id=='')||(pw=='')){//id와 pw중에 하나라도 입력하지 않으면
      alert('아이디와 패스워드를 입력하지 않았습니다. 확인하세요.');
    }else{
    alert('아이디가 틀렸습니다. 다시 확인하세요.');
  }
  }