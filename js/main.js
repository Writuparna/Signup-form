$(document).ready(function(){


	var userAry = [];

	
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
			/*if(localStorage){};
				localStorage.setItem('userDetailStore',JSON.stringify(userAry));
				var userRetrieveData = localStorage.getItem("userDetailStore");
			*/
			for(var i=0; i<userAry.length; i++){
				var userLi = '<li class="list-group-item">'+
								'<b>Name:</b> '+userAry[i].userName+' '+
								'<b>Phone no.:</b> '+userAry[i].userPhno+' '+
								'<b>Email id:</b> '+userAry[i].userEmail+' '+
								'<button type="button" class="editBtn">Edit</button>'+
								'<button type="button" class="deleteBtn" id="'+userAry[i].userEmail+'">Delete</button>'
							+'</li>'
			}
			$('#userList').append(userLi);


					console.log(JSON.stringify(userAry));

			$('#username').val("");
			$('#userphno').val("");
			$('#useremail').val("");
			$('#userpass').val("");
			$('#userconfirmpass').val("");
			//window.location.href = "userlist.html";
		}else{
			alert('please fill all required field');
		};

		console.log('total arry: '+JSON.stringify(userAry));
	});
	$('body #userList').on('click','.deleteBtn', function(e){
		e.stopPropagation();
		var objId = $(this).attr('id');
		for(var j=0; j<userAry.length; j++){
			var aryObj = userAry[j].userEmail;
			console.log('userAry Id: '+objId);
			if(aryObj==objId){
 				userAry.splice(j,1);
				console.log('userAry index:'+j);
			}
		}
		$(this).parent().remove();
		console.log('userAry after delete: '+JSON.stringify(userAry));
	});

});