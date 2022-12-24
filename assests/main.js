document.getElementById('clear').onclick=function(){
    window.location.href='index.html'
}
document.getElementById('submit').onclick=function(){
    var mark;
    var sessionindex = document.getElementById('ses').selectedIndex;
    var session = document.getElementById('ses').options[sessionindex].text;
    var shiftindex = document.getElementById('shift').selectedIndex;
    var shift = document.getElementById('shift').options[shiftindex].text;
    var roll = document.getElementById('roll').value;
    var departmentindex = document.getElementById('dep').selectedIndex;
    var department = document.getElementById('dep').options[departmentindex].text;
    var subject_code = document.getElementById('scode').value;
    const four_c_2 = [];
    const four_c_2_name=[];
    four_c_2[555926]="17";
    four_c_2[555924]="10.5";
    four_c_2_name[555924]="Name : Armita sarker Mitu"
    four_c_2_name[555926]="Name : Apurba Debnath"
    
    if (session==="20-21" && shift==="2nd"  && department==="Computer" && subject_code==="66642"){
        
        alert(four_c_2_name[Number(roll)]+"\nYour mark in Data Stracture and algorithm is "+ four_c_2[Number(roll)])
    }
    else{
        alert("Result no found")
    }


}