/* 
NAME: Larry Le
DATE: 1/15/2021
PROJECT: Calculator
*/ 

import java.util.Scanner;

public class Calculator {

    public static void main(String[] args){

        // Setup for temporary Scanner.
        Scanner Scan = new Scanner(System. in);

        boolean endVariable = false;

        do{

            // First input.
            System.out.println("Input First Number.");
            int firstNum = Scan.nextInt();

            // Second input.
            System.out.println("Input Operator.");
            String operator = Scan.nextLine();

            // Third input.
            System.out.println("Input Last Number.");
            int lastNum = Scan.nextInt();

        }while(endVariable = false);

        Scan.close();

    }

    // Method to perform the addition operation.
    static double additionOp(double inputOne, double inputTwo) {
        return inputOne + inputTwo;
    }

    // Method to perform the subtraction operation.
    static double subtractionOp(double inputOne, double inputTwo) {
        return inputOne - inputTwo;
    }

}