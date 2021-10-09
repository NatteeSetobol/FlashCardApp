
package com.nomication.repos;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.nomication.Models.Setting;
import org.springframework.data.repository.query.Param;

@Repository
public interface SettingRepo extends CrudRepository<Setting, Integer> {
	
	@Modifying
	@Transactional
	@Query(value = "DELETE from Setting s where s.deck_id = :deck_Id", nativeQuery = true)
	void deleteDeckSettings(@Param("deck_Id") int deck_Id);
	
	@Query("from Setting where deck_id = ?1")
	ArrayList<Setting> getSettingByDeckId(int deck_id);
}
