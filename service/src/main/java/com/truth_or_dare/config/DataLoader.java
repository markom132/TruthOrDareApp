package com.truth_or_dare.config;

import com.fasterxml.jackson.databind.ObjectMapper;
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

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final String jsonFilePath = "data.json";

    @PostConstruct
    public void loadData() {
        try {
            Path jsonPath = new ClassPathResource(jsonFilePath).getFile().toPath();
            byte[] jsonData = Files.readAllBytes(jsonPath);

            ObjectMapper objectMapper = new ObjectMapper();
            List<Map<String, Object>> data = objectMapper.readValue(jsonData, new TypeReference<>() {
            });

            for (Map<String, Object> entry : data) {

            }

            System.out.println("Data successfully loaded into the H2 database.");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
