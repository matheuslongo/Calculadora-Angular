/**
 * Serviço responsável por executar as operações da calculadora
 *
 * @author Márcio C. <contato@kazale.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  /* 
    Define as constantes utilizada para identificar as operações de cálculo
    readonly == SOMENTE LEITURA = CONSTANTE
    static == Consegue acessar diretamente sem precisar instânciar a classe
  */

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() {}

  /**
   * Método que calcula uma operação matemática dado dois números
   * Suporta as operações soma, subtração, divisão e multiplicação
   *
   * @param num1 number
   * @param num2 number
   * @param operacao string operação a ser executada
   * @return number Resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; //Armazena o resultado da operação

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }

    return resultado;
  }
}
