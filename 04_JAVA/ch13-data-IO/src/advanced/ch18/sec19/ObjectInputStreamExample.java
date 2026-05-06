package advanced.ch18.sec19;

import java.io.FileInputStream;
import java.io.ObjectInputStream;

public class ObjectInputStreamExample {
  public static void main(String[] args) throws Exception {
    FileInputStream fis = new FileInputStream("resource/object.dat");
    ObjectInputStream ois = new ObjectInputStream(fis);
    
    // 역질렬화
    Member m1 = (Member) ois.readObject();
    int [] arr = (int[]) ois.readObject();
    
    ois.close();
    System.out.println(m1);
  }
}
