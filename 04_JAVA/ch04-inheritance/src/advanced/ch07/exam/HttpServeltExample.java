package advanced.ch07.exam;

public class HttpServeltExample {
  public static void main(String[] args) {
    //        O                             X
    //HttpServlet servlet;    // = new HttpServlet();
    
    method(new LoginServlet());
    method(new FileDownloadServlet());
  }
  public static void method(HttpServlet servlet) { // 매개변수의 다형성
    servlet.service(); // 동적바인딩
  }
}
