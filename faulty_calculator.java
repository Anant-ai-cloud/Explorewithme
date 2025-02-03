public class faulty_calculator {
    public static void main(String[] args) {
//       + -- > -
//        * --> +
//       - --> /
//       / --> **
        int a = 8;
        int b = 5;
        int c = a * b;
        double A = Math.random();
        if(A < 0.1){
            if(c == a + b){
                System.out.println(a - b);
            }
            else if(c == a*b){
                System.out.println(a + b);
            }
            else if(c == a-b){
                System.out.println(a/b);
            }
            else if(c == a/b){
                System.out.println(Math.pow(a, b));
            }
        }
        else{
            System.out.println("The solution is " +c);
        }
    }
}
