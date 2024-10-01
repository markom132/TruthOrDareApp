package com.truth_or_dare.controller;

import com.truth_or_dare.model.Dare;
import com.truth_or_dare.model.Truth;
import com.truth_or_dare.service.DareService;
import com.truth_or_dare.service.TruthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class TruthDareController {

    private final TruthService truthService;
    private final DareService dareService;

    @Autowired
    public TruthDareController(TruthService truthService, DareService dareService) {
        this.truthService = truthService;
        this.dareService = dareService;
    }

    @GetMapping("/truths")
    public List<Truth> getAllTruths() {
        return truthService.getAllTruths();
    }

    @GetMapping("/dares")
    public List<Dare> getAllDares() {
        return dareService.getAllDares();
    }
}
