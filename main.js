const calcular = document.getElementById('calcular');


function calculo () {
    const vs = document.getElementById('valor').value;
    const pc = document.getElementById('custo').value;
    const precofinal = document.getElementById('pf');
    const valorliq = document.getElementById('liq');
    const val = document.getElementById('val');

    if(vs !== '' && pc !== ''){

        var r = vs - pc;
        var pf = r-(r*(29/100));
        var vl = pf - pc;

        if(vl > 0 ){
            valorliq.style.color="#0d9b00";
        }else{
            valorliq.style.color="#b60000";
        }

        precofinal.style.color="#0d9b00";
        
        precofinal.textContent = `R$ ${pf.toFixed(2)}`;
        valorliq.textContent = `R$ ${vl.toFixed(2)}`;
        val.textContent = `R$ ${vs}`;

    }else{
        alert('Preencha os campos!!!');
    }
}

calcular.addEventListener('click', calculo);