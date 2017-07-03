$(document).ready(function(){


	var userAry = [];

	$('#getResult').html(sessionStorage.getItem('userDataStore'));

	
	$('#signup').click(function(){
		var username = $('#username').val().trim();
		var userphno = $('#userphno').val().trim();
		var useremail = $('#useremail').val().trim();
		var userpass = $('#userpass').val().trim();
		var userconfirmpass = $('#userconfirmpass').val().trim();
		if(username!="" && userphno!="" && useremail!="" && userpass!="" && userconfirmpass!=""){
			var newUser = {
				userName : username,
				userPhno : userphno,
				userEmail : useremail,
				userPass : userpass,
				userConfirmpass : userconfirmpass,
			}
			userAry.push(newUser);
			console.log('->'+JSON.stringify(userAry));
			sessionStorage.setItem('userDataStore',JSON.stringify(userAry));
			var userAryStore = localStorage.getItem('userDataStore');
			userAryStore = JSON.parse(userAryStore);
			console.dir('user array storage'+ JSON.stringify(userAryStore));

			for(var i=0; i<userAry.length; i++){
				var userLi = '<li class="list-group-item userList" id="'+userAryStore[i].userEmail+'">'+
								'<span class="userName"><b>Name:</b> '+userAryStore[i].userName+' '+
								'</span><span class="userPhno"><b>Phone no.:</b> '+userAryStore[i].userPhno+' '+
								'</span><span class="userEmail"><b>Email id:</b> '+userAryStore[i].userEmail+' '+
								'</span><span><button type="button" class="btn btn-info editBtn">Edit</button>'+
								'<button type="button" class="btn btn-danger deleteBtn">Delete</button>'
							+'</span></li>'
			}
			$('#userList').append(userLi);
			//console.log(JSON.stringify(userAry));
			$('#username').val("");
			$('#userphno').val("");
			$('#useremail').val("");
			$('#userpass').val("");
			$('#userconfirmpass').val("");
			}else{
			alert('please fill all required field');
		};

		console.log('total arry: '+JSON.stringify(userAry));
	});
	$('body #userList').on('click','.deleteBtn', function(e){
		e.stopPropagation();
		var objId = $(this).parent().parent().attr('id');
		for(var j=0; j<userAry.length; j++){
			var aryObj = userAry[j].userEmail;
			console.log('userAry Id: '+objId);
			if(aryObj==objId){
 				userAry.splice(j,1);
				console.log('userAry index:'+j);
			}
		}
		$(this).parent().parent().remove();
		//console.log('userAry after delete: '+JSON.stringify(userAry));
	});
	var objId, editedLi;
	$('body #userList').on('click','.editBtn', function(e){
		e.stopPropagation();
		 $("#myModal").modal("toggle");
		objId = $(this).parent().parent().attr('id');
		console.log('userAry before edit: '+JSON.stringify(userAry));
	});
	$('#save').click(function(){
	var editUsername, editUserphno, editUseremail;
		editUsername = $('#editUsername').val().trim();
		editUserphno = $('#editUserphno').val().trim();
		editUseremail = $('#editUseremail').val().trim();
		for(var j=0; j<userAry.length; j++){
			var aryObj = userAry[j].userEmail;
			if(aryObj==objId){
 				console.log('userAry index:'+j);
 				userAry[j].userName = editUsername;
 				userAry[j].userPhno = editUserphno;
 				userAry[j].userEmail = editUseremail;
			}	
		};
		$('#'+objId).children('.userName').html('<b>Name: </b>'+editUsername);
		$('#'+objId).children('.userPhno').html('<b>Phone no: </b> '+editUserphno);
		$('#'+objId).children('.userEmail').html('<b>Email id: </b>'+editUseremail);
		$('#editUsername').val("");
		$('#editUserphno').val("");
		$('#editUseremail').val("");


		console.log('Edit username: '+editUsername+' Edit ph no: '+editUserphno+' Edit user email: '+editUseremail);
		console.log('userAry Id: '+objId);
		console.log('userAry after edit: '+JSON.stringify(userAry));
	});
});