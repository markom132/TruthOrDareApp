package com.truth_or_dare.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.truth_or_dare.model.Dare;
import com.truth_or_dare.model.Truth;
import com.truth_or_dare.service.DareService;
import com.truth_or_dare.service.TruthService;
import jakarta.annotation.PostConstruct;
import com.fasterxml.jackson.core.type.TypeReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.core.JdbcTemplate;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

@Configuration
public class DataLoader {

    private final TruthService truthService;
    private final DareService dareService;

    private final String jsonFilePath = "data.json";

    @Autowired
    public DataLoader(TruthService truthService, DareService dareService) {
        this.truthService = truthService;
        this.dareService = dareService;
    }

    @PostConstruct
    public void loadData() {
        try {
            Path jsonPath = new ClassPathResource(jsonFilePath).getFile().toPath();
            byte[] jsonData = Files.readAllBytes(jsonPath);

            ObjectMapper objectMapper = new ObjectMapper();
            List<Map<String, Object>> data = objectMapper.readValue(jsonData, new TypeReference<>() {
            });

            for (Map<String, Object> entry : data) {
                String type = (String) entry.get("type");

                if (type.equalsIgnoreCase("truth")) {
                    String question = (String) entry.get("question");
                    truthService.saveTruth(Truth.builder().question(question).build());
                } else if (type.equalsIgnoreCase("dare")) {
                    String challenge = (String) entry.get("challenge");
                    dareService.saveDare(Dare.builder().challenge(challenge).build());
                }
            }

            System.out.println("Data successfully loaded into the H2 database.");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
