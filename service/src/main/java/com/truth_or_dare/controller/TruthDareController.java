package com.truth_or_dare.controller;

import com.truth_or_dare.model.Dare;
import com.truth_or_dare.model.Truth;
import com.truth_or_dare.service.DareService;
import com.truth_or_dare.service.TruthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api")
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
