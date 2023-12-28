const parseCode = (str) => {
  // your code here
	let fName="";
	let lName="";
	let id="";
	let count=0;

	let arr=str.split("0");

	for(let i=0;i<arr.length;i++){
		if(arr[i]!==""){
			if(count==0){
				fName=arr[i];
				count+=1;
			}else if(count==1){
				lName=arr[i];
				count+=1;
			}else if(count==2){
				id=arr[i];
			}
		}
	}

	let ans={
		firstName:fName,
		lastName:lName,
		id:id
	}

	return ans;
	

	
};


// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
