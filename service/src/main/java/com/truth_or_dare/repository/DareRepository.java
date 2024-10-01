package com.truth_or_dare.repository;

import com.truth_or_dare.model.Dare;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DareRepository extends JpaRepository<Dare, Long> {
}
