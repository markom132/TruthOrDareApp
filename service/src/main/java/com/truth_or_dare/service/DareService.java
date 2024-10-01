package com.truth_or_dare.service;

import com.truth_or_dare.exception.InvalidDataException;
import com.truth_or_dare.model.Dare;
import com.truth_or_dare.repository.DareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DareService {

    private final DareRepository dareRepository;

    @Autowired
    public DareService(DareRepository dareRepository) {
        this.dareRepository = dareRepository;
    }

    public Dare saveDare(Dare dare) {
        if (dare.getChallenge() == null || dare.getChallenge().trim().isEmpty()) {
            throw new InvalidDataException("Challenge cannot be null or empty");
        }
        try {
            return dareRepository.save(dare);
        } catch (Exception e) {
            throw new InvalidDataException("Failed to save the dare challenge");
        }
    }

    public List<Dare> getAllDares() {
        try {
            return dareRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Failed to retrieve dare challenges.", e);
        }
    }
}
