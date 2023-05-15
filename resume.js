var id=0;
function newinput(){

    const parent=document.querySelector('.avnata')
    var field=document.createElement('input')
    field.className="myclassname"
    field.style="display:grid; text-align: center;letter-spacing: 1px;font-size:16px;margin:5px"
    field.id="input"+id;
    parent.appendChild(field);
    id+=1;
}
function newinput1(){

    const parent=document.querySelector('.avnata1')
    var field=document.createElement('input')
    field.className="myclassname"
    field.style="display:grid;text-align: center;letter-spacing: 1px;font-size:16px;margin:5px"
    field.id="input"+id;
    parent.appendChild(field);
    id+=1;
}
function newinput12(){

    const parent=document.querySelector('.avnata12')
    var field=document.createElement('input')
    field.className="myclassname"
    field.style="display:grid;text-align: center;letter-spacing: 1px;font-size:16px;margin:5px"
    field.id="input"+id;
    parent.appendChild(field);
    id+=1;
}
function newinput123(){

    const parent=document.querySelector('table')
    var field=document.createElement('input')
    field.className="myclassname1"
    // field.style="display:flex;"
    field.style="border:0.1px solid light-black;text-align: center;letter-spacing: 1px;width:170px"
    field.id="input"+id;
    parent.appendChild(field);
    var field=document.createElement('input')
    field.className="myclassname1"
    // field.style="display:flex;"
    field.id="input"+id;
    field.style="border:0.1px solid light-dark;margin-left:1px;width:250px"
    parent.style="display:table-row-group;"//we can use inline,inline-block
    parent.appendChild(field);
    id+=1;
}

// let profilepic=document.getElementById("profile-pic");
// let inputFile=document.getElementById("input-file");
// inputFile.onchange=function(){
//     profilepic.src=URL.createObjectURL(inputFile.files[0]);

// }
// var button=document.getElementById('sub')
// button.addEventListener('click',hideshow,false);
// function hideshow(){
//     document.getElementById('sub').style.display='block';
//     this.style.display='none';
// }
function function1(){
    
    window.print();
}
// window.jsPDF=window.jspdf.jsPDF;
// function print(){
// var doc=new jsPDF();
// var ele=document.querySelector(".main");

// doc.html(ele,{
//     callback:function(doc){
//         doc.save('document.pdf');

//     }
// })

// doc.addImage("path/to/image.jpg","jpeg",15,40,180,180);
// }
