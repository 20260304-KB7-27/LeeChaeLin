package lectur.section;

import java.util.List;
import java.util.Optional;

public class UserRepository {
  private static final List<User> DB = List.of(
          new User(1L, "홍길동", "hong@gmail.com"),
          new User(2L, "이채린", "cofls@gmail.com"),
          new User(3L, "이무근", "anrms@gmail.com"),
          new User(4L, "황현진", null)
  );
  
  // 쿼리
  public List<User> finalAll() { return DB; }
  
  // 단일 조회
  public Optional<User> findById(Long id) {
    
    // 없으면 Optional.empty()
    return DB.stream()
            .filter(user -> user.getId().equals(id))
            .findFirst(); // 첫번째로 일치하는 값 반환
  }
}
