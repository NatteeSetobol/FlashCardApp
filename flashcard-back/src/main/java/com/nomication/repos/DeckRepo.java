package com.nomication.repos;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.nomication.Models.Deck;

@Repository
public interface DeckRepo extends CrudRepository<Deck, Integer> {
	@Query("from Deck where user_id = ?1")
	ArrayList<Deck> findAllDeckByUserId(int deck_user_id);

	@Query("from Deck where id = ?1")
	ArrayList<Deck> GetDeckById(int id);

}
