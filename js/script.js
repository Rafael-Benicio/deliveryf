let lar=innerWidth
const cabD=document.getElementById('cab')
const a0=document.createElement('a')
const a1=document.createElement('a')
const a2=document.createElement('a')
const a3=document.createElement('a')
const a4=document.createElement('a')
const a5=document.createElement('a')
const a6=document.createElement('a')
const select=document.createElement('select')
const option0=document.createElement('option')
const option1=document.createElement('option')
const option2=document.createElement('option')
const option3=document.createElement('option')
a0.innerHTML="Escolha"
a1.innerHTML="Produção da Roça"
a2.innerHTML="Produtos da Cidade"
a3.innerHTML="Artesanato"
a4.innerHTML="Produção da Roça"
a5.innerHTML="Produtos da Cidade"
a6.innerHTML="Artesanato"
a1.setAttribute('class','linka')
a2.setAttribute('class','linka')
a3.setAttribute('class','linka')
a3.setAttribute('id','art')
option0.appendChild(a0)
option1.appendChild(a4)
option2.appendChild(a5)
option3.appendChild(a6)
select.setAttribute('class','bts float-right btn-group')
option0.setAttribute('id','fist')
option1.setAttribute('class','linka')
option2.setAttribute('class','linka')
option3.setAttribute('class','linka')
option3.setAttribute('id','art')
option0.setAttribute('value','0')
option1.setAttribute('value','1')
option2.setAttribute('value','2')
option3.setAttribute('value','3')

if(lar<=850){
    cabD.appendChild(select)
    select.appendChild(option0)
    select.appendChild(option1)
    select.appendChild(option2)
    select.appendChild(option3)
}else{
    select.remove()
    cabD.appendChild(a1)
    cabD.appendChild(a2)
    cabD.appendChild(a3)
}

addEventListener('resize',()=>{
    lar=innerWidth
    if(lar<=850){
        a1.remove()
        a2.remove()
        a3.remove()
        cabD.appendChild(select)
        select.appendChild(option0)
        select.appendChild(option1)
        select.appendChild(option2)
        select.appendChild(option3)
    }else{
        select.remove()
        cabD.appendChild(a1)
        cabD.appendChild(a2)
        cabD.appendChild(a3)
    }
})

/* 
<option value="0">Select car:</option>

<select class="bts float-right btn-group">
<option value="vasil" disabled>Escolha</option>
<option class="linka"><a href="#">Produtos da Roça</a></option>
<option class="linka"><a href="#">Produtos da Cidade</a></option>
<option class="linka"id="art" ><a href="#">Artesanato</a></option>
</select> */