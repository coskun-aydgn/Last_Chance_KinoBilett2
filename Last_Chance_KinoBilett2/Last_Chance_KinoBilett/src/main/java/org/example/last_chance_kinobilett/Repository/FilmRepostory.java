package org.example.last_chance_kinobilett.Repository;

import org.example.last_chance_kinobilett.Entity.Film;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FilmRepostory {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    public List<Film> hentFilms() {
        String sql = "select * from Films";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Film.class));
    }

}
