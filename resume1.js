// window.addEventListener('load',()=>{
//     const params=(new URL(document.location)).searchParams;
//     const lang1=params.get('lang');
//     document.getElementById('lanf').innerHTML=lang1;
// })

function newinput(){

    const parent=document.querySelector('.avnata')
    var field=document.createElement('input')
    field.className="myclassname"
    field.style="display:inline-grid;border:none;font-weight: 600; border-radius: 4px;text-align: center;letter-spacing: 1px;"
    field.id="input"+id;
    parent.appendChild(field);
    id+=1;
}