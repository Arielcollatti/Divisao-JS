let numerador = prompt('Digite o enumerador da divisão...')
let divisor = prompt('Digite o divisor da divisão...')
let resultado = numerador / divisor

if (divisor == 0)
{
    alert('Não é possível dividir por 0');
} 

else
{
    alert(`O resultado é ${resultado}`)
}
