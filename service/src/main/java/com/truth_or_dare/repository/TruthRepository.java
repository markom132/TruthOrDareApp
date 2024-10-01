package com.truth_or_dare.repository;

import com.truth_or_dare.model.Truth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TruthRepository extends JpaRepository<Truth, Long> {
}
