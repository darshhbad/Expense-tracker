let f1=document.getElementById("desc");
let f2=document.getElementById("amount");
let f3=document.getElementById("category");
let uli=document.getElementById("items");
let forms=document.getElementById("btn")

forms.addEventListener('click',local)
function local(e){
  e.preventDefault();
  let myobj={
    desc:f1.value,
    category:f3.value,
    amount:f2.value
  }
  let parent=document.createElement('li');
  parent.textContent=myobj.category+" : "+myobj.desc+" : "+myobj.amount;
  let deletes=document.createElement('button');
  let text=document.createTextNode("delete");
  deletes.appendChild(text);
  parent.appendChild(deletes);
  uli.appendChild(parent);

  deletes.addEventListener('click',remove)
  function remove(e){
    e.preventDefault();
    localStorage.removeItem(f2.value);
    uli.removeChild(parent);
  }
  let edits=document.createElement('button');
  let texts=document.createTextNode("edit");
  edits.appendChild(texts);
  parent.appendChild(edits);
  uli.appendChild(parent);

  edits.addEventListener('click',edit)
  function edit(e){
    e.preventDefault();
    f3.value=myobj.category;
    f2.value=myobj.amount;
    f1.value=myobj.desc;
    localStorage.removeItem(f2.value);
    uli.removeChild(parent);
  }

  let myobj_serial=JSON.stringify(myobj);
  localStorage.setItem(f2.value,myobj_serial);



}
