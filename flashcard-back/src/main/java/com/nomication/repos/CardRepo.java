package com.nomication.repos;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.nomication.Models.Card;
import javax.persistence.NamedNativeQueries;
import javax.persistence.NamedNativeQuery;
import java.sql.Timestamp;

@Repository
@Transactional
public interface CardRepo extends CrudRepository<Card, Integer> {
	@Query("from Card where deck_id = ?1 and dueDate <= ?2")
	ArrayList<Card> findAllCardsByDueDate(int deck_id, Timestamp timeStamp);

	@Query("from Card where deck_id = ?1")
	ArrayList<Card> findAllCardsByDeckId(int deck_id);
	@Query("from Card where id = ?1")
	ArrayList<Card> findCardsById(int id);
	@Modifying
	@Query(value="DELETE from Card where deck_id = ?1", nativeQuery=true)
	void deleteAllCardsFromDeck(int deck_Id);

}

