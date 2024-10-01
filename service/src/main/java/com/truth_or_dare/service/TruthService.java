package com.truth_or_dare.service;

import com.truth_or_dare.exception.InvalidDataException;
import com.truth_or_dare.model.Truth;
import com.truth_or_dare.repository.TruthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TruthService {

    private final TruthRepository truthRepository;

    @Autowired
    public TruthService(TruthRepository truthRepository) {
        this.truthRepository = truthRepository;
    }

    public Truth saveTruth(Truth truth) {
        if (truth.getQuestion() == null || truth.getQuestion().trim().isEmpty()) {
            throw new InvalidDataException("Question cannot be null or empty");
        }
        try {
            return truthRepository.save(truth);
        } catch (Exception e) {
            throw new InvalidDataException("Failed to save the truth question.", e);
        }
    }

    public List<Truth> getAllTruths() {
        try {
            return truthRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Failed to retrieve truth questions.", e);
        }
    }

}
