const form=document.querySelector('form');
//this weight outside the form will give you the empty value
// const weight=parseInt(document.querySelector('#weight').value)

form.addEventListener('submit',event=>{
    event.preventDefault();

    const weight=parseInt(document.querySelector('#weight').value)// we are writting it here because we want our values ,ecause when page loads it takes the empty value and we dont want that
    const height=parseInt(document.querySelector('#height').value)
    const results=document.querySelector('#result')

    if(weight==="" || weight<0|| isNaN(weight)){
        results.innerHTML="please give a valid weight"
    }else if(height==="" || height<0|| isNaN(height)){
        results.innerHTML="please give a valid height"
    }else{
      const bmi=(weight/((height*height)/10000)).toFixed(2)
      //show the result
      results.innerHTML=`<span>${bmi}<span>`;

      if(bmi<=18.6){
        results.innerHTML=`${bmi} - under weight`
      }else if(18.6>bmi>24.9){
        results.innerHTML=`${bmi} -normal weight`
      }else{
        results.innerHTML=`${bmi} -overweight`
      }
    }

})