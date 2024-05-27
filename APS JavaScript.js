//Atividade Supervisionada 
//Disciplina: Javascript
//Alunas: Gabrielle Faria da Silva Carvalho - Matrícula: 2024101104 e Giovanna Scarpelli - Matrícula: 2024101194.
//Código da Turma: 123N

function iniciar(){ // Inicia o processo de verificação de números primos, solicitando ao usuário que insira um número e em seguida chama a funçaõ "fPrimo". 

    let numero=parseInt(prompt("Digite um número")); //comando para permitir que o usuário digite um número.
    
    function fPrimo(numero) {
    if(numero < 2) //Este bloco verifica se o número fornecido é menor que 2. Se for, exibe uma mensagem informando que o número não é primo e chama a função iniciar() para solicitar outro número.
    {
    alert("O número" + numero + " Não é Primo! Tente outro número.");
    iniciar(); //irá solicitar outro número.
    return;
     //Esta função avalia se o número solicitado é primo ou não. Se o número for menor que 2, ela exibirá uma mensagem indicando que não é primo e solicita outro número.
     // Se não for o caso, ela verifica usando a lógica da divisão por todos os números.
    }
    let isPrime=true; // Inicializa a variável isPrime como true, assumindo que o número é primo até que se prove o contrário.
    
    // Loop para verificar se o número é divisível por algum número inteiro positivo menor que ele próprio
    for(let i = numero-1; i>=2; i--)
    {
    if(numero % i == 0)
    // Se o número for divisível, atualiza isPrime para false e sai do loop.
     {
    isPrime = false;// Se encontrar um divisor, retorna falso.
     }}
    
     // Verifica se isPrime é true, ou seja, se o número é primo.
        if (isPrime) 
          // Se o número for primo, exibe uma mensagem afirmando que o número é primo e os 10 maiores números primos a partir dele.
           {
    alert(" O número " + numero + " é primo! ");
    let largestPrimes=findLargestPrimes(numero);
    alert(" Os 10 maiores números primos a partir de " + numero + " são: " + largestPrimes);
        }
         else
        {
              // Se o número não for primo, exibe uma mensagem e solicita outro número.
            alert (" O número " + numero + " Não é primo! Tente outro número. " );
            iniciar(); // irá solicitar outro número.
        }
    }
    fPrimo(numero);
    }
    // Função para encontrar os 10 maiores números primos a partir do número fonercido. 
    function findLargestPrimes(numero) {
        let largestPrimes =[]; // Inicializa a lista para armazenar os números primos.
        let count=0; // Inicializa o contador de números primos encontrados.
        let currentNumber = numero + 1; // Inicializa o número atual como o número fornecido + 1.
    
         // Loop para encontrar os 10 maiores números primos a partir do número fornecido.
        while (count <10) 
            {
             // Verifica se o número atual é primo.
            if (isPrime(currentNumber))   
            {  // Se o número atual for primo, adiciona-o à lista de maiores primos encontrados.
            largestPrimes.push(currentNumber);
            count++;// Incrementa o contador.
            }
            currentNumber++; // Incrementa o número atual para verificar o próximo número.
        }
    
        return largestPrimes; // Se o loop terminar sem encontrar nenhum divisor, retorna verdadeiro.
    }
    
    function isPrime(num) //Esta é uma função auxiliar usada para determinar se um número é primo. Ela retorna true se o número fornecido for primo e false caso contrário.
    {
        if (num < 2) return false;   // Verifica se o número é menor que 2, pois números menores que 2 não são primos.
        for (let i = 2; i <= num / 2; i++)  // Verifica se o número é divisível por i, se for, retorna falso, indicando que não é primo.
         {
            if (num % i === 0) return false;
        } 
        // Se o loop terminar sem encontrar nenhum divisor, retorna verdadeiro, indicando que o número é primo.
        return true;
        
    }
    iniciar(); // Chama a função iniciar para iniciar a interação com o usuário.