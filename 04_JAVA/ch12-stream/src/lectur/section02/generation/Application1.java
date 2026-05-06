package lectur.section02.generation;

import java.util.Arrays;
import java.util.stream.Stream;

public class Application1 {
  public static void main(String[] args) {
    // 배열
    String [] sarr = new String[] {"java", "mysql", "jdbc"};
    
    // 시작인덱스, 끝인덱스(포함X)
    Stream<String> stringStream = Arrays.stream(sarr, 0, 2);
    stringStream.forEach(System.out::println);
    
    Stream<String> builderStream = Stream.<String>builder()
            .add("홍길동")
            .add("이무근")
            .add("이채린")
            .build();
  }
}
