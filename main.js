let title = document.getElementById('title')
let price = document.getElementById('price')
let tecxt = document.getElementById('tecxt')
let ads = document.getElementById('ads')
let discunt = document.getElementById('discunt')
let date = document.getElementById('date')
let total = document.getElementById('total')
let cunt = document.getElementById('cunt')
let catogre = document.getElementById('catogre')
let submit = document.getElementById('submit')// ده الي بدوس عليه ويكريت المنتج


let mod = 'creat ' // ده سمته كده علشان هياخد شرط لو المود كريات يبقا انشالي لو غير كريات يبقا عدلي هستعمله تحت 

let tembwhmy ; // عملت متغير وهمي مفهوش حاجه خالص لكن تحت في جزا التعديله هحط البرمتر بتاع التعديل في المتغير الوهمي علشان استعمله 

// get total فنكشن بتحسب السعر  
function gettotal(){ 

    if( price.value !== '' ){ // لو السعر مش فاضي اعملي 
        let result = ( +price.value + +tecxt.value + +ads.value ) -+discunt.value

        total.innerHTML = result; // total ضفلي الناتج ده في المتغير الي اسمه 
        total.style ="background-color: red;color: white;"
        }
        else{ total.innerHTML = '';
        total.style = "    background-color: blue;  color: deeppink;";

    }

}





// creat montag فنكشن بتكريت المنتج 
let datpro ;

if(localStorage.prodct != null){ // مش فاضيه اعملي وانا سمته تحت بالاسم ده prodctلو الكل استرج الي سمتها 

    datpro = JSON.parse(localStorage.prodct) //  datproرجعليي لكل استرج زي م كانت من غير تنهندل في المتغير الي اسمه 

}else{
    datpro = []  // لومفهاش بيانات خلي المصفوفه فاضيه
}
// let datpro =[]

submit.onclick = function(){

    let nwepro = { // nwepro هنا جمعت البينات كلها في ابجكت وسمته

        title:title.value, // انا عرفت المتغير في الابجكت نفس اسمه 
        price:price.value,
        tecxt:tecxt.value,
        ads:ads.value,
        discunt:discunt.value,
        date:date.value,
        total:total.innerHTML, // innerHTML    القيمه الي فيه هتهاليhtmlمقولش فالو علشان دي مش انبت لا دي انر 
        cunt:cunt.value,
        catogre:catogre.value,
    }
// شرط لو المتغير المود اسمه كريات انشالي واشتغل زي م انت لو اسمه اب دات  يبقا عدلي 
if(mod === 'creat'){

    // الشرط بتعاع التكرار في الكريات 
    if(nwepro.cunt>1){
        for(let i =0 ; i<nwepro.cunt;i++){// كررلي حسب القيمه الي الكونتر cuntاسم الابجكت فيها متغير اسمه 
            datpro.push(nwepro)
        }
    }else{datpro.push(nwepro)}// لو الشرط متحققش خلاص انشالي واحد بس 

}else{// اعملي جذا التعديل 

datpro [ tembwhmy] = nwepro // الداته فيها متغير وهمي تحت في جزا التعديل = الابجكت الي فيها البينات

mod = 'creat'   // بعد م تعمل جزا التعديل رجعلي كل حاجه زي م كانت يعني الزار خلي اسمه والمود خليها والكونت بدل م مخفيه اظهرها 
submit.innerHTML = 'creat'
cunt.style.display = 'block'
}

    // datpro.push(nwepro) // علشان مضعش واقدر ابحس منه واحزف وكله  arryضفت الابجكت بتعتي في 
    //JSON.stringify(datpro) حفظت المصفوفه في الكل بس الكل مش بيقبل مصفوفه فا انا لازم تحول المصفوفه لي نص قولت  
    localStorage.setItem('prodct' , JSON.stringify(datpro))// prodct عملت عنصر جديد في الكل استرج اسمه 

    deletInbtvalvo() //  دي اسم القنكشن شغلها لما اضغط علي الزرار  علشان دي بتمسح البيانات الي في الانبت

    showdata() //  فنكشن تعرضلك البيانات ف الصفحه قدامك وانا وانا شغلتها هنا لما اجوس علي الزرار
}





// seav lokal astorg فنكشن تحفظ البينات في الوكل استرج 




// delet creat  دي لما ادوس علي كريات يسمح البينات الي في الانبت 
function deletInbtvalvo(){
    title.value = '';
    price.value = '';
    tecxt.value = '' ;
    ads.value = '';
    discunt.value = '' ;
    date.value = '';
    total.innerHTML = '';
    cunt.value = '';
    catogre.value = '';
}



// read دي تعرض البيانات في الجدول والصفحه 

function showdata(){


let tabal = '';

for (let i = 0 ; i <datpro.length; i++){ //  علشان كده عملت فور عليه علشان يجبلي البيانات الي فيها  datpro  اسم الداته الي فيها البيانات 
// ملحوظه عملت += علشان يسيب القديم وضيف واحد تاني جديد
    tabal += ` 
<tr>
            <td> ${i+1}  </td>
            <td> ${datpro[i].title}   </td>
            <td> ${datpro[i].price}   </td>
            <td>  ${datpro[i].tecxt}  </td>
            <td>  ${datpro[i].ads}  </td>
            <td> ${datpro[i].discunt}  </td> 
            <td> ${datpro[i].date}  </td> 
            <td> ${datpro[i].total}  </td>
            <td> ${datpro[i].catogre}  </td>
            <td><button onclick = "updatedata(${i})  "   id="update">update</button></td>
            <td><button onclick = "delat(${i})  "  id="delete" class="rd">delete</button></td>
        </tr>

`


}

document.getElementById('tbody').innerHTML = tabal ; //tbody  سمته  id هنا ضفت المتغير ده في الجدول في البضي الي عطته 

// هعمل الشرط لو في بينات اعملي الزرار بتاع ديليت اول 
let delettell = document.getElementById('delettell')
if(datpro.length>0){ // ده لو الداته اكبر من الصفر يبقا فيها بينات اعملي بقي الزرار
//id حطلي الزرار في المكان الي فيه 
    delettell.innerHTML =`
    <td><button onclick = "delettell() "  class="rd">delettell (${datpro.length})</button></td>

    `
}else{
    delettell.innerHTML = '' // لو مفيش بيانات شلي الزرار ده 
}



}

showdata() // شغلت الفنكشن بره علشان يفضلشغاله والمنتجات مترحش






// delat ممكن امسح المنتج 
// الي هي بتجبلك الاندكس  I وحطيت جواه delat ملحوظه انا شغلت الفنكشن في لما ادوس علي 
function delat(e){
datpro.splice(e,1)//  اسبلس splice دي انا بقوله امسحلي عنصر واحد من الداته 
localStorage.prodct = JSON.stringify(datpro)//  datproهندلي الداتها الي اسمه  prodctالكل استرج الي اسمه 


showdata() //html شغلت فنكشن دي في الدليت علشان يعملي تحديث للصفحه لما امسح يمسحلي 
}

// دي فنكشن بتاعت المسح كل العناصر 
function delettell(){

    localStorage.clear()// دي بتمسح كل حاجه في الكل استرج 
datpro.splice(0)// دي يعني امسحلي كل الي في الداته 
  showdata() //html شغلت فنكشن دي في الدليت علشان يعملي تحديث للصفحه لما امسح يمسحلي 

}




// update اعدل علي المنتج 
//دي كده رفعت المتغيرات في مكانهم تاني في الانب علشان اعدل عليهم 
function updatedata(r){
title.value = datpro[r].title // بقوله هاتي التايت القيمه الي فيه = المصفوفه الي فيه البرمتر . التايتل علشان يترفعلي في الانبت واعدل عليها 
price.value = datpro[r].price // حطلي فيها القيمه بتعته الي جايه من المصفوفه حطاها مكانها
tecxt.value = datpro[r].tecxt
ads.value = datpro[r].ads
total.innerHTML =datpro[r].total
discunt.value = datpro[r].discunt
total.value = datpro[r].total
cunt.style.display = 'none' //كده مش هتظهر هي لما ارفع البينات  علشان اعدلها
catogre.value = datpro[r].catogre
submit.innerHTML = "updatedata" // لما اعمل تعديل الزرار هيتكتب عليه الكلامه دي بدل م كريات 
mod = ' updat' // هنا عدلت المود لمااضغط علي تعديل بدل م فوق كانت كريات 
tembwhmy = r  ; // المتغير الوهمي الي فوق حطيت فيها البرمتر بتاع التعديل علشان هستدعي المتغير ده فوق في الشرط
scroll ({top : 0,behavior:"smooth" })  // يعني براحه behavior:"smooth"لما اضخط علي التعديل اعملي اسكرل وطلعني لفوق بس  

}







// searsh البحث علي المنتج 
let searshMod = 'titel';

function getsearsgMod(id){// الي رجعلي من الانبت id هنا استلامه 
    cearch = document.getElementById('cearch')// جبت الانبت الي فيه البحث 

if(id == 'cearshtitel' ){ //اعملي cearshtitelاسمه الحقيق الي مسمي  =  id لو 
    searshMod = 'titel'; // متعملش حاجه 
    cearch.placeholder = 'cearch by titel ' // لما اضغط علي زرار التيتل اكتبلي في الانبت 
}else{
    searshMod = 'catgre'; // لو الشرط متحققش خليلي الممتغير اسمه 
    cearch.placeholder = 'cearch by catgre '// لما اضغط علي رزار الكتجري اكتبلي في الانبت

}



cearch.focus() //cearch كده لما اضغط علي اي زرار في البحث هيعمل فوكس علي الانبت الي مسميه
cearch.value = ''; // بعد متخلص بحث cearch دي بتفضيلك الانبت 
showdata() // دي بتشخلك الفنكشن بعد متخلص بحث علشان تعملك رفرش للصفحه ويظهر قدامك كل جديد
}


// البحث الي عايزه هيطلعلك في جدول جديد بنفس تصميم القديم بس مفهوش غير البيانات الي عايز تبحث عنها 

function cearchdata(value){// استلمت الفاليو الي جيالي من الانبت
      let tabal = ''; // ده متغير فاضي علشان الجدول
if(searshMod == 'titel'){ // يبقا ده البحث من خلال الاسم  titel=  لو المتغير 

    for ( let i = 0; i <datpro.length; i++){ // عملت فور علي المصفوفه علشان ابحث منها
if(   datpro[i].title.startsWith(value)   ){// ابحثلي في الداته كلها علي الي يبدا ب القيمه الي جيالك من الانبت

    tabal += ` 
    <tr>
                <td> ${i+1}  </td>
                <td> ${datpro[i].title}   </td>
                <td> ${datpro[i].price}   </td>
                <td>  ${datpro[i].tecxt}  </td>
                <td>  ${datpro[i].ads}  </td>
                <td> ${datpro[i].discunt}  </td>    
                <td> ${datpro[i].total}  </td>
                <td> ${datpro[i].catogre}  </td>
                <td><button onclick = "updatedata(${i})  "   id="update">update</button></td>
                <td><button onclick = "delat(${i})  "  id="delete" class="rd">delete</button></td>
            </tr>
    
    `
    

}

    }





}else{ // لو الشرط متحققش يبقا كده البحث من خلال الكاتجري


    for ( let i = 0; i <datpro.length; i++){ // عملت فور علي المصفوفه علشان ابحث منها
        if(   datpro[i].catogre.includes(value)   ){// ابحثلي في الداته في الكتجري كللها علي الي يحتوي علي   
            tabal += ` 
            <tr>
                        <td> ${i+1}  </td>
                        <td> ${datpro[i].title}   </td>
                        <td> ${datpro[i].price}   </td>
                        <td>  ${datpro[i].tecxt}  </td>
                        <td>  ${datpro[i].ads}  </td>
                        <td> ${datpro[i].discunt}  </td>    
                        <td> ${datpro[i].total}  </td>
                        <td> ${datpro[i].catogre}  </td>
                        <td><button onclick = "updatedata(${i})  "   id="update">update</button></td>
                        <td><button onclick = "delat(${i})  "  id="delete" class="rd">delete</button></td>
                    </tr>
            
            `
            
        
        }
        
            }
}



document.getElementById('tbody').innerHTML = tabal ; //tbody  سمته  id هنا ضفت المتغير ده في الجدول في البضي الي عطته 

}




let table = document.querySelector('.table')
console.log(table);
let up = document.querySelector('.up')
console.log(up);

up.addEventListener('click',function(){

    table.classList.toggle('actv')
    console.log('kkkkkk');
})

onclick
// cunt دي لما اكتب عدد المنتجات يكرت من العدد

// فنكشن بتراجع البيانات 
