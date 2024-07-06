var inputs = document.querySelectorAll('.container input');

inputs.forEach(inputs => inputs.addEventListener ('change', inpfunc));

function inpfunc(){
   this.name== 'color' ? (suppix= '') : (suppix= 'px') ;                                                             

    document.documentElement.style.setProperty(`--${this.name}` , this.value +suppix);
  
}



