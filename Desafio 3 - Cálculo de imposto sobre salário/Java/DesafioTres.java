/*
Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.

Para realizar o cálculo receba o valor bruto do salário e o adicional dos benefícios
O salário a ser transferido é calculado da seguinte maneira:

(valor bruto - percentual de imposto) + adicional dos benefícios

Para calcular o percentual de imposto segue as aliquotas:

De R$0 a R$1100 = 5%
De R$1100.01 a R$2500 = 10%
De R$2500.01 em diante = 15%

Entrada
A entrada consiste em vários arquivos de teste que conterá o valor bruto do salário e adicional dos benefícios.

Saída
Para cada arquivo da entrada terá um arquivo de saída. E como mencionado no Desafio, será gerado uma linha com um número que será a diferença entre o valor bruto do salário e o percentual de imposto mediante a faixa salarial somado com o adicional dos benefícios. 
*/

import java.util.Scanner; //Importamos o Scanner para input do usuário nas variáveis necessárias.

public class DesafioTres {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in); // Inicializamos o Scanner
        float salary = input.nextFloat(); // Entrada do valor do salário
        float benefits = input.nextFloat(); // Entrada do valor dos benefícios
        float tax = getTax(salary); // Cálculo do imposto sobre o salário
        float netSalary = calculateSalary(salary, benefits, tax); // Cálculo do salário líquido
        printMessage(netSalary); // Chamando a função para printar a mensagem na tela para o usuário
        input.close(); // Finalizamos o Scanner
    }

    public static float getTax(float salary) { // Função para calcular o imposto sobre o salário
        float tax = 0;
        if (salary >= 0 && salary <= 1100) {
            tax = (float) (salary * 0.05);
            System.out.printf("O usuário irá pagar R$%.2f de imposto\n", tax);
        } else if (salary >= 1100.01 && salary <= 2500) {
            tax = (float) (salary * 0.10);
            System.out.printf("O usuário irá pagar R$%.2f de imposto\n", tax);
        } else if (salary > 2500) {
            tax = (float) (salary * 0.15);
            System.out.printf("O usuário irá pagar R$%.2f de imposto\n", tax);
        }
        return tax;
    }

    public static float calculateSalary(float salary, float benefits, float tax) { // Função para calcular o salário
        float netSalary = (salary - tax) + benefits;
        System.out.printf("O usuário terá R$%.2f de benefício.\n", benefits);
        return netSalary;
    }

    public static void printMessage(float netSalary) { // Função de saída de mensagem na tela.
        System.out.printf("O salário líquido total, mais benefícios, do usuário é R$%.2f", netSalary);
    }
}